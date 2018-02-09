import Header from '../components/Header'
import Navbar from '../components/Navbar'

export default () => (
    <div>
        <Header title="Join | Vanderbilt Tau Beta Pi" />
        <Navbar />
        <section id="join">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2 className="section-heading text-uppercase gold">Join Us</h2>
                        <h3 className="section-subheading text-muted">The Engineering Honor Society</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8 mx-auto text-muted text-justify">
                        <p className="text-center"><span className="gold">"Tau Beta Pi has an important role in encouraging and inspiring engineers everywhere."</span><br />— Jeff Bezos, Founder and CEO of <a href="https://en.wikipedia.org/wiki/Amazon_(company)" target="_blank">Amazon.com</a></p>

                        <h2 className="section-heading text-uppercase gold">Benefits</h2>

                        <ol>
                            <li className="gold"><a href="https://www.tbp.org/scholarships.cfm" target="_blank">Scholarhips</a></li>
                            <p>Awards of <b>$2,000</b> or <b>$1,000</b> are given to Tau Beta Pi members for full-time engineering study in their senior year.
Tau Beta Pi awards at least <b>200</b> scholarships each year, thanks to the generosity of our alumni.</p>
                            <li className="gold"><a href="https://www.tbp.org/fellowships.cfm" target="_blank">Fellowships</a></li>
                            <p>
                                Tau Beta Pi awards at least <b>25</b> fellowships, all of whom receive <b>$10,000</b> cash award for one year of graduate study.
The program has awarded more than <b>$6,239,000</b> to <b>82</b> groups of fellows.
                            </p>
                            <li className="gold"><a href="https://www.tbp.org/memb/careers.cfm" target="_blank">Career Assistance</a></li>
                            <p>
                                Through corporate sponsorships, Tau Beta Pi makes it possible for you to put your resume in the hands of recruiters from companies such as Amazon, Capital One and more.
                            Our website includes access to an online job board connecting our members with top engineering companies that seek to hire interns, entry-level engineers, and seasoned alumni. Resumes may be posted anonymously.
                            Through a partnership with <a href="https://www.tbp.org/memb/PPIpassRequest.cfm" target="_blank">PPI</a>, Tau Beta Pi members receive a <b>30%</b> discount on FE and PE test preparation materials and many collegiate chapters organize free review sessions to prepare for the exam.
                            Top graduate programs demonstrate interest in Tau Beta Pi members by advertising in The Bent magazine and by sending recruiters to our annual <a href="https://www.tbp.org/conv/recruitingCenter.cfm" target="_blank">recruiting fair</a>.
                            </p>
                            <li className="gold">Leadership Opportunities & Training</li>
                            <p>
                                Our <a href="https://www.tbp.org/memb/ef.cfm" target="_blank">Engineering Futures Program</a> uses alumni from industry to present to engineering students interactive seminars on leadership, management, teamwork, problem-solving, and interpersonal and presentation skills.
                            The student-led chapters offer various opportunities for members to develop leadership skills by assuming positions as officers.
                            </p>
                            <li className="gold">Networking and Mentoring Opportunities</li>
                            <p>
                                District Conferences bring together students from other chapters and interested alumni.
                            Attending the annual <a href="https://www.tbp.org/convention.cfm" target="_blank">convention</a> is an opportunity for members to have a say in how Tau Beta Pi operates, and meet members and alumni from chapters across the country.
                            Tau Beta Pi has a LinkedIn group <a href="http://www.linkedin.com/groups?home=&gid=101390&trk=anet_ug_hm" target="_blank"><i className="fa fa-linkedin-square"></i></a>, a Facebook page <a href="https://www.facebook.com/groups/2204574940/about/" target="_blank"><i className="fa fa-facebook-square"></i></a>, a Twitter account <a href="http://www.twitter.com/TauBetaPi" target="_blank"><i className="fa fa-twitter-square"></i></a>, and a blog <a href="http://taubetapiathq.wordpress.com/" target="_blank"><i className="fa fa-wordpress"></i></a>.
                            </p>
                            <p>To learn more, visit <a href="https://www.tbp.org/join.cfm" target="_blank">TBP.ORG</a></p>
                        </ol>
                    </div>
                </div>
            </div>
        </section>
    </div>
)