import React from 'react'
import useUser from '../hooks/useUser'

export default function UserCard() {
    const { name } = useUser();
  return (
    <div className='card'>
        <div className='card-body'>
            <section className='row'>
                <section className='col-11'>
                    <h5 className='card-title text-primary text-end'>
                        {name.first}
                    </h5>
                    <h6 className='card-subtitle text-secondary text-end'>
                    {name.last}
                    </h6>
                </section>
                <section className='col-1'>
                    <img src={''} alt="profile-user" height={60} width={60} />
                </section>
            </section>
        </div>
    </div>
  )
}
