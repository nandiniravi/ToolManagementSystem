import Chart from '../Chart/Chart';
import './Reports.scss';

const Reports = (props) => {
    return (
        <div className='reports'>
            <Chart graphData='Tool Life Tracking' reportType="toolLife"></Chart>
            <Chart graphData='Tool Change Reasons' reportType="orderHistory"></Chart>
        </div>
    )
};

export default Reports;