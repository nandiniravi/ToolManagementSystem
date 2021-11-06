import React from 'react';
import {useState, useEffect} from 'react';
import './ToolsOnShopFloor.scss';
// import data from '../constants';
import ChangeToolPopUp from '../ChangeToolPopUp/ChangeToolPopUp';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

const ToolsOnShopFloor = (props) => {
    const [data, setData] = useState();
    const [showLoader, setShowLoader] = useState(false);
    const [changeToolDetails, setChangeToolDetails] = useState('');
    const [showChangeToolPopup, setChangeToolPopup] = useState(false);
    const [showError, setShowError] = useState(false);
    let keys = ['Change Tool','S No.','Tool Number', 'Machine Name', 'Changed On', 
    'Changed By', 'Units Worked Upon', 'Remaining Tool Life', 'Remaining Stock'];

    const showChangeToolPopUp = (event, toolNumber) => {
        event.preventDefault();
        const toolToBeChanged = data.filter(each => each.tool_number === toolNumber);
        setChangeToolDetails(toolToBeChanged);
        setChangeToolPopup(true);
    }

    useEffect(() => {
        setShowLoader(true);
        async function fetchData(){
            const response = await fetch('https://ddp8ypl7va.execute-api.ap-south-1.amazonaws.com/DEV/Tms/GetToolsInShop',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                const json = await response.json();
                
                if(json.ResponseCode === 0 && json.data.length > 0){
                    setShowLoader(false);
                    setData(json.data);
                    console.log(json.data);
                }
                else{
                    setShowLoader(false);
                    setShowError(true);
                    // throw new Error('No data found');
                }
            };
            fetchData();
        },[showChangeToolPopup]);

    const tableData = () => {
        return(
            <div className='tools-shopfloor table-responsive'>
            { showChangeToolPopup 
            ? <ChangeToolPopUp toolDetails={changeToolDetails} changeTool={true} onClickHandler={() => setChangeToolPopup(false)}></ChangeToolPopUp>
            : null}
            {showError
            ? <ErrorMessage message='No data found'></ErrorMessage>
            : null}
            <h2 style={{textAlign: "center"}}>Tools In Shop</h2>
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
                            <tr key={index}>
                                <td><button onClick={(event) => showChangeToolPopUp(event,each.tool_number)}>Change Tool</button></td>
                                <td>{index + 1}</td>
                                <td>{each.tool_number}</td>
                                <td>{each.machine_name}</td>
                                <td>{each.changed_on}</td>
                                <td>{each.changed_by}</td>
                                <td>{each.units_worked_upon}</td>
                                <td>{each.rem_life}</td>
                                <td>{each.rem_stock}</td>
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

export default ToolsOnShopFloor;