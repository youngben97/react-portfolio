//static about me page

import ResumeCard from '../components/UI/ResumeCard'

export default function AboutPage() {
    const frontEndSkills = ["HTML", "CSS", "JavaScript", "Bootstrap", "React", "jQuery"];
    const backEndSkills = ["APIs", "Node", "Express", "SQL, Sequelize", "MongoDB, Mongoose", "GraphQL", "REST"];

    return (
        <div className='container pt-4'>
            <div className='row d-flex justify-content-center'>
                <ResumeCard title="Front-End Proficiencies" skills={frontEndSkills} />
                <ResumeCard title="Back-End Proficiencies" skills={backEndSkills} />
            </div>
            <div className='row'>
                <div className='col d-flex justify-content-center mb-2'>
                    <a href='https://www.reddit.com/r/blurrypicturesofcats/' className='resume-btn rounded'>Download Resume</a>
                </div>
            </div>
        </div>
    )
}