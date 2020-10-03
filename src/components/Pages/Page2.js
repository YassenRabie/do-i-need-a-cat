import React from 'react'
import SiteContent from '../../assets/SiteContent.json'

const Page2 = () => {
    return (
        <>
            <h3 className="title tablet-title">{SiteContent.page2.title}</h3>
            <div className="image-container">
                <div className="image" style={{
                    backgroundImage: `url(./assets/${SiteContent.page2.image}.jpeg)`
                }}></div>
            </div>
            <div className="info">
                <h3 className="title desktop-title">{SiteContent.page2.title}</h3>
                <p>{SiteContent.page2.paragraph}</p>
            </div>
        </>
    )
}

export default Page2
