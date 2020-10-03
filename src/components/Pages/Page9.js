import React from 'react'
import SiteContent from '../../assets/SiteContent.json'

const Page9 = () => {
    return (
        <>
            <h3 className="title tablet-title">{SiteContent.page9.title}</h3>
            <div className="image-container">
                <div className="image" style={{
                    backgroundImage: `url(./assets/${SiteContent.page9.image}.jpeg)`
                }}></div>
            </div>
            <div className="info">
                <h3 className="title desktop-title">{SiteContent.page9.title}</h3>
                <p>{SiteContent.page9.paragraph}</p>
            </div>
        </>
    )
}

export default Page9
