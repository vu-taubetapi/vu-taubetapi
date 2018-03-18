import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Link from 'next/link'

export default () => (
    <div>
        <Header title="Events | Vanderbilt Tau Beta Pi" />
        <Navbar />
        <section id="events">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2 className="section-heading text-uppercase gold">Events</h2>
                        <h3 className="section-subheading text-muted">Check out our events this semester</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <ul className="timeline">
                            <li className="timeline-inverted">
                                <div className="timeline-image">
                                    <Link href="/events/ef-18-aps">
                                        <img className="rounded-circle img-fluid" src="https://vu-taubetapi.github.io/static/img/events/Bent.jpg" alt="Bent Polishing" />
                                    </Link>
                                </div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading white">
                                        <h4 className="subheading">
                                            <a href="https://www.flickr.com/photos/155535680@N02/albums/72157694601624075" target="_blank">
                                                Bent Polishing
                                            </a>
                                        </h4>
                                    </div>
                                    <div className="timeline-body">
                                        <p className="text-muted">
                                            <b>Date:</b> Saturday, March 17<br />
                                            <b>Time:</b> 10AM - 12PM<br />
                                            <b>Venue:</b> FGH Entrance<br />
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li id="current">
                                <div className="timeline-image">
                                    <img className="rounded-circle img-fluid" src="https://vu-taubetapi.github.io/static/img/events/PiDay.png" alt="Tau Beta Pi Day" />
                                </div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading white">
                                        <h4 className="subheading">
                                            <a href="https://www.flickr.com/photos/155535680@N02/albums/72157664746925197" target="_blank">
                                                Tau Beta Pi Day
                                            </a>
                                        </h4>
                                    </div>
                                    <div className="timeline-body">
                                        <p className="text-muted">
                                            <b>Date:</b> Wednesday, March 4<br />
                                            <b>Time:</b> 11AM - 1PM<br />
                                            <b>Venue:</b> FGH Atrium<br />
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li className="timeline-inverted">
                                <div className="timeline-image">
                                    <Link href="/events/ef-18-aps">
                                        <img className="rounded-circle img-fluid" src="https://vu-taubetapi.github.io/static/img/events/EF_APS_500.jpg" alt="Engineering Futures - Analytical Problem Solving" />
                                    </Link>
                                </div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading white">
                                        <h4 className="subheading">
                                            <Link href="/events/ef-18-aps">
                                                <a>
                                                    Engineering Futures Analytical Problem Solving
                                                </a>
                                            </Link>
                                        </h4>
                                    </div>
                                    <div className="timeline-body">
                                        <p className="text-muted">
                                            <b>Date:</b> Saturday, February 3<br />
                                            <b>Time:</b> 10AM - 2PM<br />
                                            <b>Venue:</b> FGH 129<br />
                                            <b>Registration:</b> <a href="http://goo.gl/u2bket" target="_blank">goo.gl/u2bket</a></p>
                                    </div>
                                </div>
                            </li>
                            <li className="timeline-inverted">
                                <div className="timeline-image">
                                    <h4><br />Spring 2018</h4>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </div>
)