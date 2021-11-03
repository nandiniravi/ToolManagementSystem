import { useState } from 'react';
import './EditMasterdbPopup.scss';
import Loader from '../Loader/Loader';

const EditMasterdbPopup = (props) => {
    let toolDetails = props.rowData[0];

    const [showLoader, setShowLoader] = useState(false);
    
    const [toolNumber, setToolNumber] = useState(toolDetails.toolNumber);
    const [toolName, setToolName] = useState(toolDetails.toolName);
    const [toolDescription, setToolDescription] = useState(toolDetails.toolDescription);
    const [toolLife, setToolLife] = useState(toolDetails.toolLife);
    const [lastDrawnStock, setLastDrawnStock] = useState(toolDetails.lastDrawnStock);
    const [remStock, setRemStock] = useState(toolDetails.remStock);
    const [orderLeadTime, setOrderLeadTime] = useState(toolDetails.orderLeadTime);
    const [criticalParameterMeasure, setCriticalParameterMeasure] = useState(toolDetails.criticalParameterMeasure);
    const [criticalParameterMeasureUnit, setCriticalParameterMeasureUnit] = useState(toolDetails.criticalParameterMeasureUnit);

    const saveChanges = async (event) => {
        event.preventDefault();
        setShowLoader(true);
        
        const updatedToolDetails = {...toolDetails};
        updatedToolDetails.toolDescription = toolDescription;
        updatedToolDetails.toolLife = toolLife;
        updatedToolDetails.lastDrawnStock = lastDrawnStock;
        updatedToolDetails.remStock = remStock;
        updatedToolDetails.orderLeadTime = orderLeadTime;
        updatedToolDetails.criticalParameterMeasure = criticalParameterMeasure;
        updatedToolDetails.criticalParameterMeasureUnit = criticalParameterMeasureUnit;

        const response = await fetch('https://ddp8ypl7va.execute-api.ap-south-1.amazonaws.com/DEV/Tms/AddEditTool',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({toolData:updatedToolDetails})
        });
        const json = await response.json();
        console.log(json)
        if(json.ResponseCode === 0){
            console.log('Changes saved successfully');
        }
        else{
            throw new Error('Changes not saved!');
        }    
        setShowLoader(false);
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
                <div><text>Tool Number (Read-only):</text>
                <input type='text' 
                value={toolDetails.toolNumber} readOnly/></div>

                <div><text>Tool Name (Read-only):</text>
                    <input type='text' 
                    value={toolDetails.toolName} readOnly/></div>
                    
                    <div><text>Tool Description:</text>
                    <input type='text' 
                    value={toolDescription}
                    onChange={event => setToolDescription(event.target.value)}/></div>

                <div><text>Tool Life in output units:</text>
                    <input type='Number' 
                    min = '1'
                    value={toolLife}
                    onChange={event => setToolLife(event.target.value)}/></div>

                <div><text>Last Drawn Stock:</text>
                    <input type='Number' 
                    min = '1'
                    value={lastDrawnStock}
                    onChange={event => setLastDrawnStock(event.target.value)}/></div>

                <div><text>Remaining Stock:</text>
                    <input type='Number' 
                    min = '1'
                    value={remStock}
                    onChange={event => setRemStock(event.target.value)}/></div>

                <div><text>Order Lead Time:</text>
                    <input type='Number' 
                    min='1'
                    value={orderLeadTime}
                    onChange={event => setOrderLeadTime(event.target.value)}/></div>

                <div><text>Critical Parameter Measure:</text>
                    <input type='text' 
                    value={criticalParameterMeasure}
                    onChange={event => setCriticalParameterMeasure(event.target.value)}/></div>

                <div><text>Critical Parameter Unit:</text>        
                    <input type='text' 
                    value={criticalParameterMeasureUnit}
                    onChange={event => setCriticalParameterMeasureUnit(event.target.value)}/></div>
                                
                <button onClick={(event) => saveChanges(event)}>Save</button>
                <button onClick={(event) => cancelChanges(event)}>Cancel</button>
            </form>
        </div>
    );
};

export default EditMasterdbPopup;