import './IndexPage.scss';
import data from '../constants';
import {Link} from 'react-router-dom';

const IndexPage = (props) => {    
    return (
        <div className='index-page'>
            <p>Hello {props.userName},</p>
            {props.admin 
                ? data.indexPages.admin.map(each => {
                    return <Link to={each.link} key={each.displayText}><div className='card'>{each.displayText}</div></Link>
                })
                : data.indexPages.user.map(each => {
                    return <Link to={each.link} key={each.displayText}><div className='card'>{each.displayText}</div></Link>
                })
            }
        </div>
    );
}

export default IndexPage;