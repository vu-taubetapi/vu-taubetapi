import Header from '../components/Header'
import Navbar from '../components/Navbar'

export default () => (
    <div>
        <Header title="Officers | Vanderbilt Tau Beta Pi" />
        <Navbar />
        <section id="officers">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2 className="section-heading text-uppercase gold">Officers</h2>
                        <h3 className="section-subheading text-muted">Class of 2018</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="team-member">
                            <img className="mx-auto rounded-circle" src="/static/img/officers/kamal.jpg" alt="Kamal Kamal Azmi" />
                            <h4 className="white">Kamal Kamal Azmi</h4>
                            <p className="text-muted">President</p>
                            <ul className="list-inline social-buttons">
                                <li className="list-inline-item">
                                    <a href="mailto:kamal.m.kamal.azmi@vanderbilt.edu">
                                        <i className="fa fa-envelope"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="team-member">
                            <img className="mx-auto rounded-circle" src="/static/img/officers/iliya.jpg" alt="Iliya Mohamad Lokman" />
                            <h4 className="white">Iliya Mohamad Lokman</h4>
                            <p className="text-muted">Vice President</p>
                            <ul className="list-inline social-buttons">
                                <li className="list-inline-item">
                                    <a href="mailto:mohamad.i.mohamad.lokman@vanderbilt.edu">
                                        <i className="fa fa-envelope"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-3">
                        <div className="team-member">
                            <img className="mx-auto rounded-circle" src="/static/img/officers/putri.jpg" alt="Putri Desmawardi" />
                            <h4 className="white">Putri Desmawardi</h4>
                            <p className="text-muted">Recording Secretary</p>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="team-member">
                            <img className="mx-auto rounded-circle" src="/static/img/officers/kamalia.jpg" alt="Kamalia Hisham" />
                            <h4 className="white">Kamalia Hisham</h4>
                            <p className="text-muted">Corresponding Secretary</p>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="team-member">
                            <img className="mx-auto rounded-circle" src="/static/img/officers/imran.jpg" alt="Imran Anoar" />
                            <h4 className="white">Imran Anoar</h4>
                            <p className="text-muted">Treasurer (I)</p>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="team-member">
                            <img className="mx-auto rounded-circle" src="/static/img/officers/que.jpg" alt="Faruq Qawiem" />
                            <h4 className="white">Faruq Qawiem</h4>
                            <p className="text-muted">Treasurer (II)</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
)