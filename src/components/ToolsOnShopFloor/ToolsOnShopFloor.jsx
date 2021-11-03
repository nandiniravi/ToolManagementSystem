import {useState} from 'react';
import './ToolsOnShopFloor.scss';
import data from '../constants';
import ChangeToolPopUp from '../ChangeToolPopUp/ChangeToolPopUp';

const ToolsOnShopFloor = (props) => {
    const [showChangeToolPopup, setChangeToolPopup] = useState(false);
    const [showToolReqPopup, setShowToolReqPopup] = useState(false);

    const showChangeToolPopUp = (event) => {
        event.preventDefault();
        setChangeToolPopup(true);
    }

    return (
        <div className='tools-shopfloor table-responsive'>
            {showChangeToolPopup
            ? <ChangeToolPopUp rowData={data.dummyData[1].data} onClickHandler={() => setChangeToolPopup(false)} changePopUp={true}></ChangeToolPopUp>
            : null}
            {showToolReqPopup
            ? <ChangeToolPopUp rowData={data.dummyData[1].data} onClickHandler={() => setShowToolReqPopup(false)} changePopUp={false}></ChangeToolPopUp>
            : null}
            <h2 style={{textAlign: "center"}}>Tools In Shop</h2>
            <button className='request-btn' onClick={(event)=> setShowToolReqPopup(true)}>Tool Requestition</button>
            <table className="table table-striped">
                <thead>
                <tr>
                    <td>Change Tool</td>
                    {data.dummyData[1].data.map( each => {
                        return <td key={each.header}>{each.header}</td>
                    })}
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><button onClick={(event) => showChangeToolPopUp(event)}>Change Tool</button></td>
                        {data.dummyData[1].data.map( each => {
                            return <td key={each.header}>{each.value}</td>
                        })}</tr>
                   <tr>
                        <td><button onClick={(event) => showChangeToolPopUp(event)}>Change Tool</button></td>
                        {data.dummyData[1].data.map( each => {
                                    return <td key={each.header}>{each.value}</td>
                                })}</tr>
                    <tr>
                        <td><button onClick={(event) => showChangeToolPopUp(event)}>Change Tool</button></td>
                        {data.dummyData[1].data.map( each => {
                                    return <td key={each.header}>{each.value}</td>
                                })}</tr>
                    <tr>
                        <td><button onClick={(event) => showChangeToolPopUp(event)}>Change Tool</button></td>
                        {data.dummyData[1].data.map( each => {
                                    return <td key={each.header}>{each.value}</td>
                                })}</tr>
                    <tr>
                        <td><button onClick={(event) => showChangeToolPopUp(event)}>Change Tool</button></td>
                        {data.dummyData[1].data.map( each => {
                                    return <td key={each.header}>{each.value}</td>
                                })}</tr>
                    <tr>
                        <td><button onClick={(event) => showChangeToolPopUp(event)}>Change Tool</button></td>
                        {data.dummyData[1].data.map( each => {
                                    return <td key={each.header}>{each.value}</td>
                                })}</tr>
                    
                </tbody>
            </table>
        </div>
    );
}

export default ToolsOnShopFloor;