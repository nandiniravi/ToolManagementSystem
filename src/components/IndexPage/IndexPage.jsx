import './IndexPage.scss';
import data from '../constants';
import {Link} from 'react-router-dom';

const IndexPage = (props) => {
    console.log(props.pages)
    return (
        <div className='index-page'>
            <p>Hello John Doe,</p>
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