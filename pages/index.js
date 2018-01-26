import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Link from 'next/link'

export default () => (
    <div>
        <Header title="Vanderbilt Tau Beta Pi" />
        <Navbar />
        <header className="masthead">
            <div className="container">
                <div className="intro-text">
                    <div className="intro-heading text-uppercase"><span className="gold">Vanderbilt</span> Tau Beta Pi</div>
                    <div className="intro-lead-in">The Engineering Honor Society</div>
                    <Link href="/about">
                        <a className="btn btn-outline-primary btn-xl text-uppercase js-scroll-trigger">About</a>
                    </Link>&nbsp;&nbsp;<Link href="/events">
                        <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger">Events</a>
                    </Link>
                </div>
            </div>
        </header>
    </div>
)