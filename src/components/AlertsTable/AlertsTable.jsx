import React, {useState, useEffect} from 'react';
import './AlertsTable.scss';
import Loader from '../Loader/Loader';
import moment from 'moment';

const AlertsTable = (props) => {
    const [data, setData] = useState('');
    const [showLoader, setShowLoader] = useState(false);
    const [avgAlerts, setAvgAlerts] = useState(0)
    const [toolLifeAlerts, setToolLifeAlerts] = useState(0)
    const [inventoryAlerts, setInventoryAlerts] = useState(0)

    let keys = [
        'Alert Name','Description','Tool Number','Machine','Raised On','Status'
    ];

    useEffect(() => {
        setShowLoader(true);
        async function fetchData(){
            const response = await fetch('https://ddp8ypl7va.execute-api.ap-south-1.amazonaws.com/DEV/Tms/GetAlerts',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });

            const alertMetricsResponse = await fetch('https://ddp8ypl7va.execute-api.ap-south-1.amazonaws.com/DEV/Tms/GetAlertMetrics',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const json = await response.json();
            // console.log(json.data);
            if(json.ResponseCode === 0 && json.data.length > 0){
                setShowLoader(false);
                setData(json.data);
            }
            else{
                setShowLoader(false);
                throw new Error('No data found');
            }

            const alertMetricsResponseJson = await alertMetricsResponse.json();
            if(alertMetricsResponseJson.ResponseCode === 0){
                setAvgAlerts(alertMetricsResponseJson.avgCount);
                setToolLifeAlerts(alertMetricsResponseJson.toolLifeCount);
                setInventoryAlerts(alertMetricsResponseJson.InventoryCount)
            }
        };
        
        
        fetchData();
        },[]);

    const tableData = () => {
        return(
            <div className='master-data table-responsive'>
                <div className='alert-box'>
                    <div className='alert-container'>
                        <p>Average Alerts Per Day</p>
                        <h3>{avgAlerts}</h3>
                    </div>
                    <div className='alert-container'>
                        <p>Tool Life Alerts</p>
                        <h3>{toolLifeAlerts}</h3>
                    </div>
                    <div className='alert-container'>
                        <p>Inventory Alerts</p>
                        <h3>{inventoryAlerts}</h3>
                    </div>
                </div>         
            <h2 style={{textAlign: "center"}}>Active Alert List</h2>
            <table className="table table-striped">
                <thead>
                <tr>
                    {keys.map( each => {
                        return <td key={each}>{each}</td>
                    })}
                </tr>
                </thead>
                <tbody>
                    {data.map((each) => {
                        // console.log(each);
                        return(
                            <tr key={each.toolNumber+each.raisedOn}>
                        
                                <td>{each.alertName}</td>
                                <td>{each.alertDesc}</td>
                                <td>{each.toolNumber}</td>
                                <td>{each.machine}</td>
                                <td>{moment(each.raisedOn).format('DD-MM-YYYY HH:mm')}</td>
                                <td>{each.status}</td>
                                
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
        );
    };
    
    return (
        <React.Fragment>
        {data ? tableData() : null}
        {showLoader 
            ? <Loader></Loader>
            : null}
        </React.Fragment>
    );
};

export default AlertsTable;