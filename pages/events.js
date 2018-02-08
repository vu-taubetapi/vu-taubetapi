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
                            <li className="timeline-inverted" id="current">
                                <div className="timeline-image">
                                    <Link href="/events/ef-18-aps">
                                        <img className="rounded-circle img-fluid" src="/static/img/events/EF_APS_500.jpg" alt="Engineering Futures - Analytical Problem Solving" />
                                    </Link>
                                </div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading white">
                                        <h4>February 2018</h4>
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
                                            <b>Venue:</b> Featheringill Hall 129<br />
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