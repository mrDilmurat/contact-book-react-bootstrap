import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const ContactBook = () => {
  const [conData, conDataChange] = useState(null)
  const navigate = useNavigate()

  const LoadDetail = (id) => {
    navigate('/contact/details/' + id)
  }
  const LoadEdit = (id) => {
    navigate('/contact/edit/' + id)
  }
  const RemoveFunction = (id) => {
    if (window.confirm("Do you want to remove")) {
      fetch('http://localhost:8000/person/' + id, {
        method: 'DELETE',
      })
        .then(res => {
          alert('Removed successfully.')
          window.location.reload();
        })
        .catch(err => {
          console.log(err.message)
        })
    }
  }

  useEffect(() => {
    fetch('http://localhost:8000/person')
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
    <div className='container'>
      <div className='card'>
        <div className='card-title'>
          <h2>Contact Book</h2>
        </div>
        <div className='card-body'>
          <div className='add-con'>
            <Link to='contact/create' className='btn btn-success'>
              Add New (+)
            </Link>
          </div>
          <table className='table table-bordered'>
            <thead className='bg-dark text-white'>
              <tr>
                <td>Id</td>
                <td>Name</td>
                <td>Last Name</td>
                <td>Email</td>
                <td>Phone Number</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {conData &&
                conData.map(item => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.lastName}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>
                      <a
                        onClick={() => {
                          LoadEdit(item.id)
                        }}
                        className='btn btn-success'
                      >
                        Edit
                      </a>
                      <a
                        onClick={() => {
                          RemoveFunction(item.id)
                        }}
                        className='btn-sty btn btn-danger'
                      >
                        Remove
                      </a>
                      <a
                        onClick={() => {
                          LoadDetail(item.id)
                        }}
                        className='btn-sty btn btn-primary'
                      >
                        Details
                      </a>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default ContactBook
