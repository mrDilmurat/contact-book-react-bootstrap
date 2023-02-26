import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const ContactDetail = () => {
  const { conid } = useParams()

  const [conData, conDataChange] = useState({})

  useEffect(() => {
    fetch('http://localhost:8000/person/' + conid)
      .then(res => {
        return res.json()
      })
      .then(resp => {
        conDataChange(resp)
      })
      .catch(err => {
        console.log(err.message)
      })
  }, [])

  return (
    <div>
      <div className='card'>
        <div className='card-title'>
          <h2>Contact Book</h2>
        </div>
        <div className='card-body'></div>
        {conData && (
          <div>
            <h2>
              The Contact name is : {conData.name} ({conData.id})
            </h2>
            <h3>Contact Details</h3>
            <h5>Email is : {conData.email}</h5>
            <h5>Phone is : {conData.phone}</h5>
            <Link className='btn btn-primary' to='/'>
              Back to Listing
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default ContactDetail
