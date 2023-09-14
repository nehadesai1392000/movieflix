import React from 'react'
import "../style/HeaderLogoSection.css"
import netflix from "../assets/logo.png"

const HeaderLogoSection = () => {
    return (
        <>
            <div className='Main-header-logo-section'>
                <div className='netflix-logo'>
                    <img src={netflix} alt="" />
                </div>
                <div className='menuBar-netflix'>
                    <ul>
                        <li>Home</li>
                        <li>TV Shows</li>
                        <li>Movies</li>
                        <li>Recently Added</li>
                        <li>My List</li>
                    </ul>
                </div>

            </div>

        </>
    )
}

export default HeaderLogoSection