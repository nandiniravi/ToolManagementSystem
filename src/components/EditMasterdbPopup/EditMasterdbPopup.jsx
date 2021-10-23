import { useState } from 'react';
import './EditMasterdbPopup.scss';

const EditMasterdbPopup = (props) => {
    const [toolDetails, setToolDetails] = useState('');

    const saveChanges = (event) => {
        event.preventDefault();
        console.log('send updates to db');
        props.onClickHandler();
    }

    const cancelChanges = (event) => {
        event.preventDefault();
        console.log('cancel update');
        props.onClickHandler();
    }

    return (
        <div className='edit-popup'>
            <p>Tool details:</p>
            <form>
                <input type='text' value={props.areaId}/>
                <input type='text' value={props.subAreaId}/>
                <input type='text' placeholder='Tool Name'/>
                <input type='text' placeholder='Model No'/>
                <input type='text' placeholder='Manufacturer'/>
                <input type='text' placeholder='Size'/>
                <input type='number' placeholder='Count'/>
                <input type='text' placeholder='Size'/><br/>
                <button onClick={(event) => saveChanges(event)}>Save</button>
                <button onClick={(event) => cancelChanges(event)}>Cancel</button>
            </form>
        </div>
    );
};

export default EditMasterdbPopup;