import React from 'react';

export default function PoliciesBanner({ title, value }) {
    return (
        <div className='border-b-8'>
            <br />
            <br />
            <br />
            <br />
            <br />
            <h1 className='text-5xl'>{title}</h1>
            <i className='text-sm'>{value}</i>
        </div>
    )
}
