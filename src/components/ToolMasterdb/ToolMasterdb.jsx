import {useState} from 'react';
import './ToolMasterdb.scss';
import data from '../constants';
import {Link} from 'react-router-dom';
import EditMasterdbPopup from '../EditMasterdbPopup/EditMasterdbPopup';



const ToolMasterdb = (props) => {
    const [showEditPopup, setShowEditPopup] = useState(false);
    const [showDeletePopup, setShowDeletePopup] = useState(false);

    const deleteDataFromDB = (event) => {
        event.preventDefault();
        console.log('call DELETE API and send details');
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

    return (
        <div className='master-data'>
            {showEditPopup 
                ? <EditMasterdbPopup rowData={data.dummyData[0].data} onClickHandler={() => setShowEditPopup(false)}></EditMasterdbPopup>
                : null}
            {showDeletePopup 
                ? <DeletePopUp></DeletePopUp>
                : null}
            {props.admin 
                ? <span>
                    <Link to='/toolsinshop' className='navigation'><i className="fa fa-chevron-left" style={{marginRight: "5px"}} ></i>Tools In Shop</Link>
                    <Link to='/reports' className='navigation'>Reports<i className="fa fa-chevron-right" style={{marginLeft: "5px"}} ></i></Link>
                    </span> 
                : <Link to='/toolsrequesition' className='navigation'>Tools Requesition</Link>}
            <table className="table table-striped">
                <thead>
                <tr>
                    <td>Edit/Delete</td>
                    {data.dummyData[0].data.map( each => {
                        return <td key={each.header}>{each.header}</td>
                    })}
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><i className="fa fa-edit icon" onClick={() => setShowEditPopup(true)}></i>
                        <i className="fa fa-trash-o icon" onClick={() => setShowDeletePopup(true)}></i></td>
                        {data.dummyData[0].data.map( each => {
                            return <td key={each.header}>{each.value}</td>
                        })}</tr>
                   <tr>
                        <td><i className="fa fa-edit icon"></i>
                        <i className="fa fa-trash-o icon"></i></td>
                        {data.dummyData[0].data.map( each => {
                            return <td key={each.header}>{each.value}</td>
                        })}</tr>
                    <tr>
                        <td><i className="fa fa-edit icon"></i>
                        <i className="fa fa-trash-o icon"></i></td>
                        {data.dummyData[0].data.map( each => {
                            return <td key={each.header}>{each.value}</td>
                        })}</tr>
                    <tr>
                        <td><i className="fa fa-edit icon"></i>
                        <i className="fa fa-trash-o icon"></i></td>
                        {data.dummyData[0].data.map( each => {
                            return <td key={each.header}>{each.value}</td>
                        })}</tr>
                    <tr>
                        <td><i className="fa fa-edit icon"></i>
                        <i className="fa fa-trash-o icon"></i></td>
                        {data.dummyData[0].data.map( each => {
                            return <td key={each.header}>{each.value}</td>
                        })}</tr>
                        <tr>
                        <td><i className="fa fa-edit icon"></i>
                        <i className="fa fa-trash-o icon"></i></td>
                        {data.dummyData[0].data.map( each => {
                            return <td key={each.header}>{each.value}</td>
                        })}</tr>
                        <tr>
                        <td><i className="fa fa-edit icon"></i>
                        <i className="fa fa-trash-o icon"></i></td>
                        {data.dummyData[0].data.map( each => {
                            return <td key={each.header}>{each.value}</td>
                        })}</tr>
                </tbody>
            </table>
        </div>
    );
}

export default ToolMasterdb;