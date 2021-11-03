import React, {useState, useEffect} from 'react';
import './ToolMasterdb.scss';
import Loader from '../Loader/Loader';
import EditMasterdbPopup from '../EditMasterdbPopup/EditMasterdbPopup';

const ToolMasterdb = (props) => {
    const [showEditPopup, setShowEditPopup] = useState(false);
    const [showDeletePopup, setShowDeletePopup] = useState(false);
    const [data, setData] = useState();
    const [showLoader, setShowLoader] = useState(false);
    const [deleteToolId, setDeleteToolId] = useState('');
    let keys = [
        'ToolNumber', 'ToolName', 'ToolDescription', 'ToolLife', 'LastDrawnStock', 'RemainingStock', 'OrderLeadTime', 'CriticalParameterMeasure', 'CriticalParameterMeasureUnit'
    ];

    const [editRowData, setEditRowData] = useState();

    useEffect(() => {
        setShowLoader(true);
        async function fetchData(){
            const response = await fetch('https://ddp8ypl7va.execute-api.ap-south-1.amazonaws.com/DEV/Tms/GetAllTools',
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

    const editPopUp = (toolId) => {
        setShowEditPopup(true);
        const editRow = data.filter(each => each.id === toolId);
        setEditRowData(editRow);
    };

    const deletePopUp = (toolId) => {
        setShowDeletePopup(true);
        setDeleteToolId(toolId);
    }

    const deleteDataFromDB = async (event) => {
        event.preventDefault();
        setShowLoader(true);
        const response = await fetch('https://ddp8ypl7va.execute-api.ap-south-1.amazonaws.com/DEV/Tms/DeleteTool',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({toolId : deleteToolId})
        });
        const json = await response.json();
        if(json.ResponseCode === 0){
            console.log('Deletion successful!');
        }
        else{
            throw new Error('Something went wrong');
        }
        setShowLoader(false);
        setShowDeletePopup(false);
    }

    const cancelDelete = (event) => {
        event.preventDefault();
        setShowDeletePopup(false);
    }

    const DeletePopUp = () => {
        return (
            <div className='delete-popup'>
                <p>Are you sure you want to delete this row? Data cannot be restored once deleted. Do you want to continue?</p>
                <button onClick={(event) => deleteDataFromDB(event)}>Yes</button>
                <button onClick={(event) => cancelDelete(event)}>No</button>
            </div>
        );
    }

    const tableData = () => {
        return(
            <div className='master-data table-responsive'>
            {showEditPopup 
                ? <EditMasterdbPopup rowData={editRowData} onClickHandler={() => setShowEditPopup(false)}></EditMasterdbPopup>
                : null}
            {showDeletePopup 
                ? <DeletePopUp></DeletePopUp>
                : null}
            <h2 style={{textAlign: "center"}}>Tools Master Data</h2>
            <table className="table table-striped">
                <thead>
                <tr>
                    <td>Edit/Delete</td>
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
                                <td><i className="fa fa-edit icon" onClick={() => editPopUp(each.id)}></i>
                                <i className="fa fa-trash-o icon" onClick={() => deletePopUp(each.id)}></i></td>
                                <td>{each.toolNumber}</td>
                                <td>{each.toolName}</td>
                                <td>{each.toolDescription}</td>
                                <td>{each.toolLife} Output Units</td>
                                <td>{each.lastDrawnStock}</td>
                                <td>{each.remStock}</td>
                                <td>{each.orderLeadTime}</td>
                                <td>{each.criticalParameterMeasure}</td>
                                <td>{each.criticalParameterMeasureUnit}</td>
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

export default ToolMasterdb;