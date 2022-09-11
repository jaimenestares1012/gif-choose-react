import React from 'react'

export const GiftGridItem = ({ title, url, id }) => {
    console.log(title, url, id);
    return (
        <div className='card'>
            <img src={url} alt={title} />
            <p> {title}</p>
        </div>
    )
}
