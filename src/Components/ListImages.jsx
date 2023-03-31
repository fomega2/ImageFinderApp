import React from 'react'
import { ImageInfo } from './ImageInfo'
export const ListImages = ({images}) => {    
  return (
    <div className='flex justify-center'>
      <div className='flex flex-wrap justify-center w-4/5 mt-'>
          {
            images.length > 0 && images.map((imgInfo,i) => (
              <ImageInfo key={i} imgInfo = {imgInfo}/>
            ))
          }
      </div>
    </div>
    
  )
}
