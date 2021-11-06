import React, {useState, useEffect} from 'react';
import './AlertsTable.scss';
import Loader from '../Loader/Loader';
import moment from 'moment';

const AlertsTable = (props) => {
    const [data, setData] = useState('');
    const [showLoader, setShowLoader] = useState(false);
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
            };
            fetchData();
        },[]);

    const tableData = () => {
        return(
            <div className='master-data table-responsive'>
            
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
                    {data.map(each => {
                        // console.log(each);
                        return(
                            <tr key={each.toolNumber}>
                        
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