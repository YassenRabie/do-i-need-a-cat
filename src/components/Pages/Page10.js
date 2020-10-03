import React from 'react'
import SiteContent from '../../assets/SiteContent.json'

const Page10 = () => {
    return (
        <>
            <h3 className="title tablet-title">{SiteContent.page10.title}</h3>
            <div className="image-container">
                <div className="image" style={{
                    backgroundImage: `url(./assets/${SiteContent.page10.image}.jpeg)`
                }}></div>
            </div>
            <div className="info">
                <h3 className="title desktop-title">{SiteContent.page10.title}</h3>
                <p>{SiteContent.page10.paragraph}</p>
            </div>
        </>
    )
}

export default Page10
