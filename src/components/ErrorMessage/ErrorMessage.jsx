import './ErrorMessage.scss';

const ErrorMessage = (props) => {
    return (
        <div className='error-message'>
            <i className="fa fa-warning"></i>{props.message}</div>
    );
}

export default ErrorMessage;