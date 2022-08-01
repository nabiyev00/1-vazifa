import React from 'react'
import { imageUrl } from './Data'
export default function Home() {
  return (
    <>
      <div className='image-container'>
        {imageUrl.map(data=>{
          return(
            
              <div key={data.id} className='image-block'>
                <img src={data.url} alt="img" />
              </div>
            
          )
        })}
      </div>
    </>
  )
}
