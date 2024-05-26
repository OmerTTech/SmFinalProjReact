import React from 'react'

const UserCard = ({user}) => {
  return (
    <div className='col-4 pt-3 d-flex flex-column usercard'>
      <p className='text-center fw-bold m-0'>{`${user.first_name} ${user.last_name}`}</p>
      <p className='text-center'>{user.email}</p>
      <img src={user.avatar} alt="" />
    </div>
  )
}

export default UserCard