import Link from 'next/link'

const Navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
        <div className="container">
            <Link href="/">
                <a className="navbar-brand js-scroll-trigger text-uppercase">
                    <img src="/static/img/vanderbilt.png" alt="Vanderbilt" />&nbsp;&nbsp; Tau Beta Pi
                </a>
            </Link>
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav text-uppercase ml-auto">
                    <li className="nav-item">
                        <Link href="/about">
                            <a className="nav-link js-scroll-trigger">About</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/events">
                            <a className="nav-link js-scroll-trigger">Events</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/officers">
                            <a className="nav-link js-scroll-trigger">Officers</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="https://www.tbp.org" target="_blank">TBP.ORG</a>
                    </li>
                </ul>
            </div>
        </div>
        <style jsx>{`
            img {
                height: 30px;
                width: 30px;
            }
        `}
        </style>
    </nav>
)

export default Navbar