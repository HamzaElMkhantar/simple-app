import React from 'react'

function ProfilePhoto({img}) {
  return (
    <div className='imageProfile'>
    <img src={img} />
    </div>
  )
}

export default ProfilePhoto