import React, { useEffect, useState } from 'react'
import Content from './components/Content'
import Footer from './components/Footer'
import Header from './components/Header'
import Page1 from './components/Pages/Page1'
import Page2 from './components/Pages/Page2'
import Page3 from './components/Pages/Page3'
import Page4 from './components/Pages/Page4'
import Page5 from './components/Pages/Page5'
import Page6 from './components/Pages/Page6'
import Page7 from './components/Pages/Page7'
import Page8 from './components/Pages/Page8'
import Page9 from './components/Pages/Page9'
import Page10 from './components/Pages/Page10'
import "./styles/App.scss"
import gsap from 'gsap'

function App() {
    const [page, setPage] = useState(Page1)
    const [pageId, setPageId] = useState(0)

    useEffect(() => {
        setPage(pages[pageId])
    }, [pageId])

    const pages = [Page1, Page2, Page3, Page4, Page5, Page6, Page7, Page8, Page9, Page10]

    const loadNextPage = (pageId) => {
        setPageId(pageId)
    }

    const loadPrevPage = (pageId) => {
        setPageId(pageId)
    }

    useEffect(() => {
        let vh = window.innerHeight * .01
        document.documentElement.style.setProperty('--vh', `${vh}px`)
    }, [])

    useEffect(() => {

        gsap.from('.wraper .container .image-container', .3, {
            y: 7,
            ease: 'power4.out',
            opacity: 0
        })
        gsap.from('.wraper .container h3', .3, {
            y: 7,
            ease: 'power4.out',
            opacity: 0
        })
        gsap.from('.wraper .container .info p', .3, {
            y: 7,
            ease: 'power4.out',
            opacity: 0
        })

    }, [pageId])

    return (
        <div className="App">
            <Header />
            <Content page={page} />
            <Footer loadNextPage={loadNextPage} loadPrevPage={loadPrevPage} pagesLength={pages.length} />
        </div>
    )
}

export default App
