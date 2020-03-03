//import React
import React from 'react';
//import dependencies
import { getDog, returnFeedback } from '../api/dogApi';
import { getOwner } from '../api/ownerApi';
import { getDecodedToken } from 'authenticare/client';
import { getUserDetails } from '../api/walkerApi';
import { Link } from 'react-router-dom';
import { send } from 'emailjs-com';


//add DogProfile as statefull component
class DogProfile extends React.Component {
    constructor(props) {
        super(props)
        //set initial state
        this.state = {
            photo: '',
            name: '',
            feedback_id: '',
            breed: '',
            sex: '',
            size: '',
            activity_requirements: '',
            good_with_other_dogs: '',
            special_requirements: '',
            vet_name: '',
            vet_contact: '',
            owner_id: 0,
            owner_name: '',
            owner_email: '',
            // set user_id to the id stored in our auth token
            user_id: getDecodedToken().id,
            walker_email: '',
            walker_id: 0,
            request_sent: false,
            walker_link: 'http://localhost:3000/#/walker/',
            suburb: '',
            feedback: '',
        }
        // bind event handler
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        //get user details so we can set the walker_id
        getUserDetails(this.state.user_id)
            .then(user => {
                this.setState({
                    walker_id: user.walker.id

                })
            })
        //get dog using the current url params
        getDog(this.props.match.params.id)
            .then(dog => {
                //get the dogs owner using the id of the dog returned fro get dog
                getOwner(dog.owner_id)
                    //set suburb state to this dog's owner's location
                    .then(owner => this.setState({
                        suburb: owner.location
                    }))
                //set states to be rendered from returned dog
                this.setState({
                    photo: dog.photo,
                    name: dog.name,
                    feedback_id: dog.feedback_id,
                    breed: dog.breed,
                    sex: dog.sex,
                    size: dog.size,
                    activity_requirements: dog.activity_requirements,
                    good_with_other_dogs: dog.good_with_other_dogs,
                    special_requirements: dog.special_requirements,
                    vet_name: dog.vet_name,
                    vet_contact: dog.vet_contact,
                    owner_id: dog.owner_id,
                })
            })

        returnFeedback(this.props.match.params.id)
            .then(feedbackInfo => {
                this.setState({
                    feedback: feedbackInfo
                })
            })
    }



    handleClick(e) {
        e.preventDefault()
        //switch request_sent state so 
        this.setState({ request_sent: true })
        //use Promise.all to return the promises inside as an array 
        Promise.all([
            getOwner(this.state.owner_id),
            getUserDetails(this.state.user_id),
        ])
            .then(([owner, user]) => {

                //code snippet for emailjs. Use inside .then and set variables directly from the promises. Don't set state.
                const template_params = {
                    owner_email: owner.email,
                    owner_name: owner.first_name,
                    walker_link: this.state.walker_link + user.walker.id,
                }

                const userID = 'user_Zf2pkHv28X6ZJ5OWbpWqp'
                const service_id = "default_service";
                const template_id = "walker_to_owner";
                return send(service_id, template_id, template_params, userID)

            })
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text)
            })
            .catch((error) => {
                console.log('FAILED...', error)
            })
        //code snippet ends 

        // set state for sent notification
        this.setState({
            request_sent: true,
        });
    }


    render() {
        console.log('id deets' + this.state.walker_id)
        return (
            <>
<<<<<<< HEAD
                <h1 className="page-title">{this.state.name}'s profile</h1>
                <div className="profile-container">
||||||| merged common ancestors
            <h1 className="page-title">{this.state.name}'s profile</h1>
            <div className="profile-container">
                
                <img className="profile-picture" src={this.state.photo} />
                <p>Suburb: {this.state.suburb}</p>
                <br />

                <div className="profile-info">


                    <p>Name:{this.state.name}</p>
                    <p>Breed: {this.state.breed}</p>
                    <p>Sex: {this.state.sex}</p>
                    <p>Size: {this.state.size}</p>
                    <p>Walk Length: {this.state.activity_requirements}</p>
                    <p>Good with other dogs: {this.state.good_with_other_dogs}</p>
                    <p>Special Requirements: {this.state.special_requirements}</p>
                    <p>Vet Practice: {this.state.vet_name}</p>
                    <p>Vet Contact: {this.state.vet_contact}</p>
                    
=======
            <h1 className="page-title">{this.state.name}'s profile</h1>
            <div className="profile-container">
                
                <img className="profile-picture" src={this.state.photo} />
                <p> <strong>Suburb: </strong> {this.state.suburb}</p>
                <br />

                <div className="profile-info">


                    <p>Name:{this.state.name}</p>
                    <p>Breed: {this.state.breed}</p>
                    <p>Sex: {this.state.sex}</p>
                    <p>Size: {this.state.size}</p>
                    <p>Walk Length: {this.state.activity_requirements}</p>
                    <p>Good with other dogs: {this.state.good_with_other_dogs}</p>
                    <p>Special Requirements: {this.state.special_requirements}</p>
                    <p>Vet Practice: {this.state.vet_name}</p>
                    <p>Vet Contact: {this.state.vet_contact}</p>
                    
>>>>>>> eee08c2d71a11334435eb71a0b0293af592d1a3e

                    <img className="profile-picture" src={this.state.photo} />
                    <p>Suburb: {this.state.suburb}</p>
                    <br />

                    <div className="profile-info">


                        <p>Name:{this.state.name}</p>
                        <p>Breed: {this.state.breed}</p>
                        <p>Sex: {this.state.sex}</p>
                        <p>Size: {this.state.size}</p>
                        <p>Walk Length: {this.state.activity_requirements}</p>
                        <p>Good with other dogs: {this.state.good_with_other_dogs}</p>
                        <p>Special Requirements: {this.state.special_requirements}</p>
                        <p>Vet Practice: {this.state.vet_name}</p>
                        <p>Vet Contact: {this.state.vet_contact}</p>


                    </div>
                    {this.state.walker_id !== 0 ? <button className="button" name='sendButton' onClick={this.handleClick}>Send request to the dog's owner</button> : null}

                    {this.state.walk_the_dog && <p>You would like to walk this dog. Click the request button to contact the owner</p>}
                    {this.state.request_sent && <div><p>Great, your request has been sent to this dog's owner. They should be in touch soon!</p><br/>
                        <p>Check out</p><a className='button' className='move' href="http://www.google.com">MOVE</a><p>for some awesome walking spots in Wellington</p></div>
                    }

                </div>
            </>
        );
    }
}

export default DogProfile;
