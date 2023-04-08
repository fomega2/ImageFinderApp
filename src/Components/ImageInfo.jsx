import React from 'react'
import LazyLoad from 'react-lazy-load'

export const ImageInfo = ({imgInfo}) => {        
  return (    
    <div className="bg-white rounded-lg overflow-hidden shadow-md mx-1 mt-2 flex opacity-90 hover:opacity-100">
      <LazyLoad>
        <img src={imgInfo.urls.small }  className="w-full object-cover" alt={imgInfo.alt_description}/>      
      </LazyLoad>      
    </div>
  )
}
