import { useState } from 'react';
import './ChangeToolPopUp.scss';
import Loader from '../Loader/Loader';

const ChangeToolPopUp = (props) => {
    const toolDetails = props.toolDetails[0];

    const [toolNumber, setToolNumber] = useState(toolDetails.tool_number);
    const [machineName, setMachineName] = useState(toolDetails.machine_name);
    const [empNo, setEmpNo] = useState(localStorage.getItem('userId'));
    const [resonForChange, setReasonForChange] = useState('');
    const [comments, setComments] = useState('');
    const [showLoader, setShowLoader] = useState(false);

    const saveChanges = async (event) => {
        event.preventDefault();
        setShowLoader(true);
        const response = await fetch('https://ddp8ypl7va.execute-api.ap-south-1.amazonaws.com/DEV/Tms/ChangeTool',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ToolNumber: toolNumber,
                MachineUsed: machineName,
                ChangeInOperatorID: empNo,
                DisposeReason: resonForChange,
                Comments: comments
            })
        });
        const json = await response.json();
        console.log(json)
        if(json.ResponseCode === 0){
            console.log('Changes saved successfully');
            setShowLoader(false);
        }
        else{
            throw new Error('Changes not saved!');
        }    
        props.onClickHandler();
    }

    const cancelChanges = (event) => {
        event.preventDefault();
        console.log('cancel update');
        props.onClickHandler();
    }

    return (
        <div className='changetool-popup'>
            {showLoader
            ? <Loader></Loader>
            : null}
            <p>Tool details:</p>
            <form>
                <div>
                    <label>Tool Number:</label>
                    <input type='text' 
                    value={toolNumber}
                    onChange={(event) => setToolNumber(event.target.value)}/>
                </div>

                <div>
                <label>Machine Name:</label>
                <input type='text' 
                value={machineName}
                 onChange={(event) => setMachineName(event.target.value)}/>
                </div>

                <div>
                <label>Changed By:</label>
                <input type='text' 
                value={empNo}
                onChange={(event) => setEmpNo(event.target.value)}/>
                </div>

                <div>
                <label>Reason For Change:</label>
                <select value={resonForChange} 
                    onChange={(event) => setReasonForChange(event.target.value)}>
                    <option value=""></option>
                    <option value="Tool Broken">Tool Broken</option>
                    <option value="End of Life">End of Life</option>
                    <option value="Change Over">Change Over</option>
                    <option value="Others">Others</option>
                </select>
                </div>
                
                <div>
                <label>Comments:</label>
                <textarea
                value={comments} 
                onChange={(event) => setComments(event.target.value)}>
                </textarea>
                </div>
                
                <button onClick={(event) => saveChanges(event)}>Save</button>
                <button onClick={(event) => cancelChanges(event)}>Cancel</button>
            </form>
        </div>
    );
};

export default ChangeToolPopUp;