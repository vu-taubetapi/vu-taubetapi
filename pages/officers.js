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
                    <div className="col-sm-6 mx-auto">
                        <div className="team-member">
                            <img className="mx-auto rounded-circle" src="https://vu-taubetapi.github.io/static/img/officers/stammer.jpg" alt="Robert Stammer" />
                            <h4 className="white">Robert Stammer</h4>
                            <p className="text-muted">Adviser</p>
                            <ul className="list-inline social-buttons">
                                <li className="list-inline-item">
                                    <a href="mailto:robert.stammer@vanderbilt.edu">
                                        <i className="fa fa-envelope"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="team-member">
                            <img className="mx-auto rounded-circle" src="https://vu-taubetapi.github.io/static/img/officers/kamal.jpg" alt="Irfan Sabri" />
                            <h4 className="white">Irfan Sabri</h4>
                            <p className="text-muted">President</p>
                            <ul className="list-inline social-buttons">
                                <li className="list-inline-item">
                                    <a href="mailto:irfan.sabri.bin.mohd.sabri@vanderbilt.edu">
                                        <i className="fa fa-envelope"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="team-member">
                            <img className="mx-auto rounded-circle" src="https://vu-taubetapi.github.io/static/img/officers/masturina.jpg" alt="Masturina Sahira Sukri" />
                            <h4 className="white">Masturina Sahira Sukri</h4>
                            <p className="text-muted">Vice President</p>
                            <ul className="list-inline social-buttons">
                                <li className="list-inline-item">
                                    <a href="mailto:masturina.s.sukri@vanderbilt.edu">
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
                            <img className="mx-auto rounded-circle" src="https://vu-taubetapi.github.io/static/img/officers/ali.jpg" alt="Ali Yazdani" />
                            <h4 className="white">Ali Yazdani</h4>
                            <p className="text-muted">Treasurer</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
)