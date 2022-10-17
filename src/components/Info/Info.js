const Info = ({title, data}) => {
    return (
        <div className='info'>
            <div className="info__content container--display">
                <p className="info__title">
                    {title}
                </p>
                <p className="info__data">
                    {data}
                </p>
            </div>
        </div>
    )
}
export default Info