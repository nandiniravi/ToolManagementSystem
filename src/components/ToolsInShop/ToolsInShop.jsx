import './ToolsInShop.scss';
import data from '../constants';
import {Link} from 'react-router-dom';

const ToolsInShop = (props) => {
    return (
        <div className='inshop-data'>
            {props.admin 
                ? <span>
                    <Link to='/tooldatabase' className='navigation'><i className="fa fa-chevron-left" style={{marginRight: "5px"}} ></i>Tool Database</Link>
                    <Link to='/reports' className='navigation'>Reports<i className="fa fa-chevron-right" style={{marginLeft: "5px"}} ></i></Link>
                    </span> 
                : <Link to='/toolsrequesition' className='navigation'>Tools Requesition</Link>}
            <table className="table table-striped">
                <thead>
                <tr>
                    {data.dummyData[0].data.map( each => {
                        return <td key={each.header}>{each.header}</td>
                    })}
                </tr>
                </thead>
                <tbody>
                    <tr>
                        {data.dummyData[0].data.map( each => {
                            return <td key={each.header}>{each.value}</td>
                        })}</tr>
                   <tr>
                        {data.dummyData[0].data.map( each => {
                            return <td key={each.header}>{each.value}</td>
                        })}</tr>
                    <tr>
                        {data.dummyData[0].data.map( each => {
                            return <td key={each.header}>{each.value}</td>
                        })}</tr>
                    <tr>
                        {data.dummyData[0].data.map( each => {
                            return <td key={each.header}>{each.value}</td>
                        })}</tr>
                    <tr>
                        {data.dummyData[0].data.map( each => {
                            return <td key={each.header}>{each.value}</td>
                        })}</tr>
                        <tr>
                        {data.dummyData[0].data.map( each => {
                            return <td key={each.header}>{each.value}</td>
                        })}</tr>
                        <tr>
                        {data.dummyData[0].data.map( each => {
                            return <td key={each.header}>{each.value}</td>
                        })}</tr>
                </tbody>
            </table>
        </div>
    );
}

export default ToolsInShop;