import { useState } from 'react';
import './ChangeToolPopUp.scss';

const ChangeToolPopUp = (props) => {
    const toolDetails = props.toolDetails[0];
    console.log(toolDetails);

    const [toolNumber, setToolNumber] = useState(toolDetails.tool_number);
    const [machineName, setMachineName] = useState(toolDetails.machine_name);

    const saveChanges = async (event) => {
        event.preventDefault();
        const response = await fetch('https://ddp8ypl7va.execute-api.ap-south-1.amazonaws.com/DEV/Tms/ChangeTool',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify()
        });
        const json = await response.json();
        console.log(json)
        if(json.ResponseCode === 0){
            console.log('Changes saved successfully');
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

    const changePopUpForm = () => {
        return (
            <form>
                <input type='text' 
                value={toolNumber}
                onChange={(event) => setToolNumber(event.target.value)}/><br/>
                <input type='text' 
                value={machineName}
                 onChange={(event) => setMachineName(event.target.value)}/><br/>
                <button onClick={(event) => saveChanges(event)}>Save</button>
                <button onClick={(event) => cancelChanges(event)}>Cancel</button>
            </form>
        );
    }

    const toolRequestForm = () => {
        return (
            <form>
                <input type='text' placeholder='Tool Number'/><br/>
                <input type='text' placeholder='Tool Name'/><br/>
                <input type='Number' placeholder='Count'/><br/>
                <button onClick={(event) => saveChanges(event)}>Save</button>
                <button onClick={(event) => cancelChanges(event)}>Cancel</button>
            </form>
        );
    }

    return (
        <div className='changetool-popup'>
            <p>Tool details:</p>
            {props.ChangeToolPopUp
            ? changePopUpForm()
            : toolRequestForm()}
        </div>
    );
};

export default ChangeToolPopUp;