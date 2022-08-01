import React, { useState } from 'react'

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [message, setMessage] = useState('');
  const handleSubmit= (e)=>{
    e.preventDefault()
    setName('')
    setEmail('')
    setTelephone('')
    setMessage('')
  }
  return (
    <>
      <div className='contact-container'>
        <div className='info'>
          <div className='info-img'>
            <img src="https://static.wixstatic.com/media/bfdf85_bb32704cfdf641b78b2207124c945fc8.png/v1/fill/w_288,h_158,al_c,lg_1,q_85,enc_auto/bfdf85_bb32704cfdf641b78b2207124c945fc8.png" alt="img" />
          </div>
          <div className='info-messenger'>
            <h2>Contact me</h2>
            <h3> <a href='mailto:info@mysite.com'>info@mysite.com</a> | <span>Telephone:</span> <a href="tel:+79450000000">+7 (945) 000-00-00</a></h3>
          </div>
        </div>
        <div className='contact-form'>
          <form action="" method="post" onSubmit={handleSubmit}>
            <input onChange={e=>setName(e.target.value)} type="text" placeholder='Name' name='name' value={name} required/>
            <input onChange={e=>setEmail(e.target.value)} type="email" placeholder='Email' name='email' value={email} required/>
            <input onChange={e=>setTelephone(e.target.value)} type="number" placeholder='Telephone' name='telephone' value={telephone} required/>
            <textarea onChange={e=>setMessage(e.target.value)} name="text" placeholder='Add a message...' value={message}  ></textarea>
            <button className='form-btn' type="submit">Send</button>
          </form>
        </div>
      </div>
    </>
  )
}
