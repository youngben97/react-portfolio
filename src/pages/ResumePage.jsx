//static about me page
//keep working on styles
//add downloadable resume link to button

export default function AboutPage() {
    return (
        <div className='container pt-4'>
            <div className='row'>
                <div className='col d-flex justify-content-center'>
                    <button className='resume-btn'>Download Resume</button>
                </div>
            </div>
            <div className='row d-flex justify-content-center p-2'>
                <div className='col-lg-4 resume-card rounded m-5 p-0'>
                    <div className='row w-100'>
                        <div className="col resume-card-header">
                            <h3>Front-End Proficiences</h3>
                        </div>
                    </div>
                    <ul className='resume-card-list p-0'>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>Bootstrap</li>
                        <li>React</li>
                    </ul>
                </div>
                <div className='col-lg-4 resume-card rounded m-5 p-0'>
                    <div className='row w-100'>
                        <div className="col resume-card-header">
                            <h3>Back-End Proficiences</h3>
                        </div>
                    </div>
                    <ul className='resume-card-list p-0'>
                        <li>APIs</li>
                        <li>Node</li>
                        <li>Express</li>
                        <li>SQL, Sequelize</li>
                        <li>MongoDB, Mongoose</li>
                        <li>GraphQL</li>
                        <li>REST</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}