import React, {useState, useEffect} from 'react';
import './ToolsHistory.scss';
import Loader from '../Loader/Loader';
import moment from 'moment';

const ToolsHistory = (props) => {
    const [data, setData] = useState();
    const [showLoader, setShowLoader] = useState(false);
    let keys = ['Request Id', 'Tool Number', 'Drawn Date', 'Disposed Date', 
    'Disposed Reason', 'Tool Life (days)', 'Machine Used', 'Comments', 'Change in Operator ID', 'Change out Operator ID'];

    const [editRowData, setEditRowData] = useState();

    useEffect(() => {
        setShowLoader(true);
        async function fetchData(){
            const response = await fetch('https://ddp8ypl7va.execute-api.ap-south-1.amazonaws.com/DEV/Tms/GetChanges',
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
            <h2 style={{textAlign: "center"}}>Tools History</h2>
            <table className="table table-striped">
                <thead>
                <tr>
                    {keys.map( each => {
                        return <td key={each}>{each}</td>
                    })}
                </tr>
                </thead>
                <tbody>
                    {data.map((each,index) => {
                        // console.log(each);
                        return(
                            <tr key={each.index}>
                                <td>{index + 1}</td>
                                <td>{each.toolNumber}</td>
                                <td>{moment(each.drawnDate).format('DD-MM-YYYY')}</td>
                                <td>{moment(each.disposedDate).format('DD-MM-YYYY')}</td>
                                <td>{each.reason}</td>
                                <td>{each.toolLife}</td>
                                <td>{each.machineUsed}</td>
                                <td>{each.comments}</td>
                                <td>{each.changeInOperator}</td>
                                <td>{each.changeOutOperator}</td>
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

export default ToolsHistory;