import Header from '../components/Header'
import Navbar from '../components/Navbar'

export default () => (
  <div>
    <Header title="About | Vanderbilt Tau Beta Pi" />
    <Navbar />
    <section id="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase gold">About Us</h2>
            <h3 className="section-subheading text-muted">The Engineering Honor Society</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 mx-auto text-muted text-justify">
            <p><b className="gold">Tau Beta Pi</b> is universally recognized as the <b className="gold">premier engineering honor society</b>. It is the <b className="gold">oldest</b>, <b class="gold">largest</b>, and <b className="gold">most prestigious</b> in all engineering fields.</p>

            <p>The Tennessee Beta Chapter of Tau Beta Pi at Vanderbilt University provides the opportunity for the top students in engineering to collaborate, socialize, serve the community, discuss problems, and form friendships.</p>

            <p>Within the busy schedules of engineering students at Vanderbilt, it can be difficult to find other students with your drive to succeed, interests in engineering, collegiate past success, and moral integrity. Tau Beta Pi provides a venue by which these top students can collaborate and work together, while also integrating them into the national Tau Beta Pi network so that they can have career opportunities with alumni. Tau Beta Pi is an enormous national honor society, providing opportunities and networking with many famous and successful alumni.</p>

            <p>It is not uncommon in job interviews within engineering for the interviewer to ask if you are in Tau Beta Pi because the interview is an alumni. That creates an instant connection and you may find getting the job comes easier with connections.</p>

            <p>Tau Beta Pi is the only engineering honor society representing the entire engineering profession. It is the nation’s second-oldest honor society, founded at Lehigh University in 1885 to mark in a fitting manner those who have conferred honor upon their Alma Mater by distinguished scholarship and exemplary character as students in engineering, or by their attainments as alumni in the field of engineering, and to foster a spirit of liberal culture in engineering colleges.</p>

            <p>There are now collegiate chapters at 252 US colleges and universities (of which 245 are active), 42 active alumnus chapters in 16 districts across the country, and a total initiated membership of 564,000.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
)