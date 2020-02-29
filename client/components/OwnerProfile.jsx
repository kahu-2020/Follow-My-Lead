import React from 'react'
import { getOwner } from '../api/ownerApi'
import { Link } from 'react-router-dom'


class OwnerProfile extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      first_name: '',
      last_name: '',
      photo: '',
      location: '',
      email: ''

    }
  }

  componentDidMount() {

    getOwner(this.props.match.params.id)
      .then(owner => {


        this.setState({
          first_name: owner.first_name,
          last_name: owner.last_name,
          photo: owner.photo,
          location: owner.location,
          email: owner.email
        })
      })
  }

  render() {
    return (
      <div className="owner-profile-container">
        <h1>Owner Profile Page</h1>
        <br />
        <h2>First Name: {this.state.first_name}</h2>
        <h2>Last Name: {this.state.last_name}</h2>
        <h2>Photo: {this.state.photo}</h2>
        <h2>Location: {this.state.location}</h2>
        <h2>Email: {this.state.email}</h2>
        <Link to="/register/dog">
          <button type="button">
            Register your dog
          </button>
        </Link>
      </div>
    )
  }




}


export default OwnerProfile