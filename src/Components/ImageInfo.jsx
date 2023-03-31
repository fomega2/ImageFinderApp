import React from 'react'

export const ImageInfo = ({imgInfo}) => {      
  return (    
    <div className="bg-white rounded-lg overflow-hidden shadow-md mx-1 mt-2 flex opacity-90 hover:opacity-100">
      <img src={imgInfo.urls.small }  className="w-full object-cover"/>      
    </div>
  )
}
