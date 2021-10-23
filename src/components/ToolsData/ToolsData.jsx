import {useState} from 'react';
import './ToolsData.scss';

const ToolsData = (props) => {
    const [showAcc1, setShowAcc1] = useState(false);
    const [showAcc2, setShowAcc2] = useState(false);
    const [showAcc3, setShowAcc3] = useState(false);
    
    const toggleAccordion1 = () => {
        setShowAcc1(!showAcc1);
    }

    const toggleAccordion2 = () => {
        setShowAcc2(!showAcc2);
    }

    const toggleAccordion3 = () => {
        setShowAcc3(!showAcc3);
    }

    return (
        <div className='accordion'>
            <div>
                <div className={showAcc1 ? 'accordion-item-open' : 'accordion-item-close'} onClick={toggleAccordion1}>Tool 1
                    {showAcc1 
                        ? <i className="fa fa-angle-double-up arrow"></i> 
                        : <i className="fa fa-angle-double-down arrow"></i>}
                    </div>
                    {showAcc1 
                    ? <div className='accordion-item-data'><p>Lorem ipsum...</p><p>Lorem ipsum...</p></div>
                    : null}
                </div>
            <div>
                <div className={showAcc2 ? 'accordion-item-open' : 'accordion-item-close'} onClick={toggleAccordion2}>Tool 2
                    {showAcc2 
                            ? <i className="fa fa-angle-double-up arrow"></i> 
                            : <i className="fa fa-angle-double-down arrow"></i>}
                </div>
                {showAcc2 
                ? <div className='accordion-item-data'><p>Lorem ipsum...</p><p>Lorem ipsum...</p></div>
                : null}
            </div>
            <div>
                <div className='accordion-item'className={showAcc3 ? 'accordion-item-open' : 'accordion-item-close'} onClick={toggleAccordion3}>Tool 3
                    {showAcc2 
                            ? <i className="fa fa-angle-double-up arrow"></i> 
                            : <i className="fa fa-angle-double-down arrow"></i>}
                </div>
                {showAcc3 
                ? <div className='accordion-item-data'><p>Lorem ipsum...</p><p>Lorem ipsum...</p></div>
                : null}
            </div>
        </div>
    );
}

export default ToolsData;
