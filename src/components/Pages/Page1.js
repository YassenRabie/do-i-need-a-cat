import React from 'react'
import SiteContent from '../../assets/SiteContent.json'

const Page1 = () => {
    return (
        <>
            <h3 className="title tablet-title">You are thinking of getting a cat? <br />Then you are in the right place</h3>
            <div className="image-container">
                <div className="image" style={{
                    backgroundImage: `url(./assets/${SiteContent.page1.image}.jpeg)`
                }}></div>
            </div>
            <div className="info">
                <h3 className="title desktop-title">You are thinking of getting a cat? <br />Then you are in the right place</h3>
                <p>{SiteContent.page1.paragraph}</p>
            </div>
        </>
    )
}

export default Page1
