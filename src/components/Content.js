import React from 'react'
import ReactCSSTransitionGroup from 'react-transition-group'

const Content = ({ page }) => {
    return (
        <div className="wraper">
            <div className="container" id="container">
                {page}
            </div>
        </div>
    )
}

export default Content
