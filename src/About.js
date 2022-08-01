import React from 'react'

export default function About() {
  return (
    <>
      <div className='about-container'>
        <div className='my-img'>
          <div className='img-border'>
            <img src="https://static.wixstatic.com/media/bfdf85_d9cb3c7fe4914e0cb7351cc01aa3c0fe.png/v1/fill/w_552,h_552,al_c,lg_1,q_85,enc_auto/bfdf85_d9cb3c7fe4914e0cb7351cc01aa3c0fe.png" alt="img" />
          </div>
          <div className='img'>
            <img src="https://static.wixstatic.com/media/bfdf85_f840a5e6be20475e84e239a74834d295.jpg/v1/fill/w_399,h_399,al_c,lg_1,q_80,enc_auto/bfdf85_f840a5e6be20475e84e239a74834d295.jpg" alt="img" />
          </div>
        </div>
        <div className='about-me'>
          <h2>About me</h2>
          <p>This is text. Click once and select "Edit Text" or just double click to add your text and customize the font. You can move it anywhere on the page. Tell site visitors about yourself. To delete this text, click once and select the Trash icon.</p>
        </div>
      </div>
    </>
  )
}
