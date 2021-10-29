import './ToolsInShop.scss';
import data from '../constants';

const ToolsInShop = (props) => {
    return (
        <div className='inshop-data table-responsive'>
            <h2 style={{textAlign: "center"}}>Tools In Shop</h2>
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