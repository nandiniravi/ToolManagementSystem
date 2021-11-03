import Chart from '../Chart/Chart';

const Reports = (props) => {
    return (
        <div className='reports'>
            <Chart graphData='Avg Tool Life' reportType="toolLife"></Chart>
            <Chart graphData='Tool Order History' reportType="orderHistory"></Chart>
        </div>
    )
};

export default Reports;