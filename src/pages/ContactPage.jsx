import {useState} from 'react'

export default function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    function handleSubmit(e) {
        e.preventDefault()

        setName('')
        setEmail('')
        setMessage('')
    }

    return (
        <>
        <div className='container'>
        <form onSubmit={handleSubmit} className='new-form body-text form'>
            <div className='form-row'>
              <label htmlFor='name' >Name</label>
              <input
                value= {name}
                onChange={e => setName(e.target.value)}
                type='text'
                className='rounded'
                id='name'
              />
            </div>
            <div className='form-row'>
                <label htmlFor='email'>Email</label>
                <input
                  value= {email}
                  onChange={e => setEmail(e.target.value)}
                  type='text'
                  className='rounded'
                  id='email'
                />
            </div>
            <div className='form-row'>
                <label htmlFor='message'>Message</label>
                <textarea 
                  value= {message}
                  onChange={e => setMessage(e.target.value)}
                  type='text'
                  className='message-text rounded'
                  id='message'
                 ></textarea>
            </div>
            <button className='btn form-btn'>Submit</button>
        </form>
        </div>
        </>
    )
}