import React, from 'react';

const Time = ({weather}) => {
    return (
        <div className='time'>
            <h1>{weather.name}</h1>
        </div>
    )
};

export default Time