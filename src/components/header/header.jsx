import React, { useState, useEffect } from 'react'
import './header.css'

const Header = ({ data, fetchData }) => {

    const [headerType, setHeaderType] = useState(data)

    useEffect(() => {
        setHeaderType(data)        
    }, [data]);

    return (
        <div>
            {headerType !== 0
                ? (<div className='header-div'>
                    <h1>Tours</h1>
                </div>)
                : (<div className='header-div'>
                    <h1>No tours</h1>
                    <button onClick={fetchData}>Resfresh</button>
                </div>)
            }
        </div>
    )
}

export default Header