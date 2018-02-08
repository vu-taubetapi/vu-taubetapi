import Header from '../components/Header'
import Navbar from '../components/Navbar'
import fall_2017 from '../components/fall_2017'
import spring_2017 from '../components/spring_2017'
import fall_2016 from '../components/fall_2016'

export default () => (
    <div>
        <Header title="Members | Vanderbilt Tau Beta Pi" />
        <Navbar />
        <section id="members">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2 className="section-heading text-uppercase gold">Members</h2>
                        <h3 className="section-subheading text-muted">Initiated Fall 2017</h3>
                    </div>
                </div>
                <div className="row mb-3">
                    {
                        fall_2017.map((value, index) => {
                            return (
                                <div className="col-sm-4 mb-3" key={index}>
                                    <div className="text-muted">
                                        <span className="gold">{value.name}</span><br />
                                        {value.major} '{value.class.toString().substring(2)}
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h3 className="section-subheading text-muted">Initiated Spring 2017</h3>
                    </div>
                </div>
                <div className="row mb-3">
                    {
                        spring_2017.map((value, index) => {
                            return (
                                <div className="col-sm-4 mb-3" key={index}>
                                    <div className="text-muted">
                                        <span className="gold">{value.name}</span><br />
                                        {value.major} '{value.class.toString().substring(2)}
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h3 className="section-subheading text-muted">Initiated Fall 2016</h3>
                    </div>
                </div>
                <div className="row mb-3">
                    {
                        fall_2016.map((value, index) => {
                            return (
                                <div className="col-sm-4 mb-3" key={index}>
                                    <div className="text-muted">
                                        <span className="gold">{value.name}</span><br />
                                        {value.major} '{value.class.toString().substring(2)}
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </section>
    </div>
)