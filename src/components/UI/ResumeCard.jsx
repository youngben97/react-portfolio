export default function ResumeCard({ title, skills }) {
    return (
        <div className='col-lg-4 resume-card rounded m-5 p-0'>
            <div className='row m-0 w-100'>
                <div className="col resume-card-header">
                    <h3>{title}</h3>
                </div>
            </div>
            <ul className='resume-card-list p-0'>
                {skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </div>
    );
}