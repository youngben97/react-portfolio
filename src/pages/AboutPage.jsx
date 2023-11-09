//static about me page
import monkey from '@assets/monkeycoffee.png';

export default function AboutPage() {
    return (
        <div className='container pt-4 body-text'>
            <div className='row p-2 d-flex justify-content-center'>
                <div className='col-lg-4 d-flex align-items-center'>
                    <p>
                        Hello! I am a web developer based in Salt Lake City, UT.
                        I have experience working with HTML, CSS, JS, SQL/Sequelize, MongoDB/Mongoose,
                        Express, Node, and most recently, React.

                        In my free time I like to read, cook, and get involved
                        in my local theatre community.
                    </p>
                </div>
                <div className='col-lg-4'>
                    <img src={ monkey } alt="monkey-working" className="img-fluid rounded-circle"></img>
                </div>
            </div>
            {/* <div className='row p-2'>
                <div className='col-lg-4'>
                    <img src={ monkey } alt="monkey-working" className="img-fluid"></img>
                </div>
            </div> */}
        </div>
    )
}