import React from 'react'
import Link from 'next/link'
import Header from '../components/Header'
import Navbar from '../components/Navbar'

export default class Error extends React.Component {
    static getInitialProps({ res, err }) {
        const statusCode = res ? res.statusCode : err ? err.statusCode : null;
        return { statusCode }
    }

    render() {
        return (
            <div>
                <Header title="404 Error | Vanderbilt Tau Beta Pi" />
                <Navbar />
                <header className="masthead2">
                    <div className="container">
                        <div className="intro-text">
                            <div className="intro-heading text-uppercase gold">404 Error</div>
                            <div className="intro-lead-in">This page could not be found.<br /><br /><Link href="/">
                                <a>Return to our site...</a>
                            </Link></div>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}