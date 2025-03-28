<div className="digital-clock">
    <div className="time-section">
        <div className="hours">{formatNumber(time.getHours())}</div>
        <div className="separator">:</div>
        <div className="minutes">{formatNumber(time.getMinutes())}</div>
        <div className="separator">:</div>
        <div className="seconds">{formatNumber(time.getSeconds())}</div>
    </div>

    <div className="info-section">
        <div className="day-date">
            <span className="day">{days[time.getDay()]}</span>
            <span className="date">
                {formatNumber(time.getDate())}
                {' '}
                {formatNumber(time.getMonth() + 1)}
                {' '}
                {time.getFullYear()}
            </span>
        </div>
        <div className="temperature">
            TEMP {Math.round(Math.random() * 35)}°C
        </div>
    </div>
</div>