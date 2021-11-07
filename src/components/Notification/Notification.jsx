import './Notification.scss';

const Notification = (props) => { 

    const resetCount = async (event) => {
        event.preventDefault();
        const response = await fetch('https://ddp8ypl7va.execute-api.ap-south-1.amazonaws.com/DEV/Tms/ClearNotifications',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({userId:localStorage.getItem('userId')})
        });
        const json = await response.json();
        if(json.ResponseCode === 0){
            console.log('Count has been reset');
            props.showHandler(false);
        };
    };

    return (
        <div className='notification'>
            <i className="fa fa-window-close close-btn" onClick={(event) => resetCount(event)}></i>
            You have a got {props.count} new Alert(s)!<br/>
        </div>
    );
}

export default Notification;