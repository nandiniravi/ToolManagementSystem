import {Link} from 'react-router-dom';

const Reports = (props) => {
    return (
        <div className='inshop-data'>
            {props.admin 
                ? <span>
                    <Link to='/tooldatabase' className='navigation'><i className="fa fa-chevron-left" style={{marginRight: "5px"}} ></i>Tool Database</Link>
                    <Link to='/toolsinshop' className='navigation'>Tools In Shop<i className="fa fa-chevron-right" style={{marginLeft: "5px"}} ></i></Link>
                    </span> 
                : <Link to='/toolsrequesition' className='navigation'>Tools Requesition</Link>
            }
        </div>
    )
};

export default Reports;