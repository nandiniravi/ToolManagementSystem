import Chart from '../Chart/Chart';

const Reports = (props) => {
    return (
        <div className='reports'>
            <Chart graphData='Avg Tool Life'></Chart>
            <Chart graphData='Tool Order History'></Chart>
        </div>
    )
};

export default Reports;