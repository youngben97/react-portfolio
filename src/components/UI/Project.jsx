//need to add links to github

export default function Project(props) {
    return (
        <>
            <div className='container'>
                <div className='row'>
                    {props.projects.map(item => (
                        <div className='col-md-4 d-flex justify-content-center' key={item.id}>
                            <a href={item.url}>{item.name}</a>
                            <img src={item.img} alt={item.name} className='rounded-circle' style={{ maxWidth: '100%', height: 'auto' }}/>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}