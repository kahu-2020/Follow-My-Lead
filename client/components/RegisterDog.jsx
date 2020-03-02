import React from "react"

import { getDecodedToken } from 'authenticare/client'

import { addDog } from '../api/dogApi'

class RegisterDog extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            // feedback_id: '',
            owner_id: '',
            name: '', 
            breed: '', 
            sex: '', 
            age: '', 
            size: '', 
            activity_requirements: '',
            good_with_other_dogs: '',
            special_requirements: '',
            photo: '',
            vet_name: '',
            vet_contact: '',
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })

    }

    handleSubmit = (e) => {
        e.preventDefault()
        addDog({
            owner_id: this.state.owner_id,
            name: this.state.name, 
            breed: this.state.breed, 
            sex: this.state.sex, 
            age: this.state.age, 
            size: this.state.size, 
            activity_requirements: this.state.activity_requirements,
            good_with_other_dogs: this.state.good_with_other_dogs,
            special_requirements: this.state.special_requirements,
            photo: this.state.photo,
            vet_name: this.state.vet_name,
            vet_contact: this.state.vet_contact,
        }).then(() => {
            this.props.history.push('/doglist')
        })
        this.props.history.push('/dog' + id)
    }

    render() {
        return (
            <div>
                 <h1>Edit Dog Registration Form</h1>
                <form className='form' onSubmit={this.handleSubmit}>
                <img className="logoform" src="/images/Logo2.png" alt="logo" />
                    <br />
                    <label> Name: </label>
                    <br />
                        <input className='input'
                        type='text' 
                        name='name' 
                        onChange={this.handleChange} />
                    <br />

                    <label> Photo: </label>
                    <br />
                        <input className='input'
                            type='text' 
                            name='photo' 
                            onChange={this.handleChange} 
                            placeholder='Upload File' />
                    <br />

                    <label> Breed: </label>
                    <br />
                        <input className='input'
                            type='text' 
                            name='breed' 
                            onChange={this.handleChange} />
                    <br />

                    <label> Sex: </label>
                    <br />
                        <select className='input'
                            type='text' 
                            name='sex' 
                            onChange={this.handleChange} >
                        <option 
                            value='select'>select
                        </option>
                        <option 
                            value='Male'>Male
                        </option>
                        <option 
                            value='Female'>Female
                        </option>
                        </select>
                    <br />

                    <label> Age: </label>
                    <br />
                        <select className='input'
                            type='text' 
                            name='age' 
                            onChange={this.handleChange} >
                        <option 
                            value='select'>select
                        </option>
                        <option 
                            value='Puppy'>Puppy
                        </option>
                        <option 
                            value='Adolescent'>Adolescent
                        </option>
                        <option 
                            value='Adult'>Adult
                        </option>
                        <option 
                            value='Senior'>Senior
                        </option>
                        </select>
                    <br />
                    
                    <label> Size: </label>
                    <br />
                        <select className='input'
                            type='text' 
                            name='size' 
                            onChange={this.handleChange} >
                        <option 
                            value='select'>select
                        </option>
                        <option 
                            value='Small'>Small 9kg or less
                        </option>
                        <option 
                            value='Medium'>Medium 10-22kg
                        </option>
                        <option 
                            value='Large'>Large 22kg or more 
                        </option>
                        </select>
                    <br />

                    <label> Activity Requirements: </label>
                    <br />
                        <select className='input'
                            type='text' 
                            name='activity_requirements' 
                            onChange={this.handleChange} >
                        <option 
                            value='select'>select
                        </option>
                        <option 
                            value='30-45mins'>30-45 minutes
                        </option>
                        <option 
                            value='45-60mins'>45-60 minutes
                        </option>
                        <option 
                            value='60-90mins'>60-90 minutes
                        </option>
                        </select>
                    <br />

                    <label> Good With Other Dogs: </label>
                    <br />
                        <select className='input'
                            type='text' 
                            name='good_with_other_dogs' 
                            onChange={this.handleChange} >
                        <option 
                            value='select'>select
                        </option>
                        <option 
                            value='Yes'>Yes
                        </option>
                        <option 
                            value='No'>No
                        </option>
                        </select>
                    <br />

                    <label> Special Requirements: </label>
                    <br />
                        <input className='input'
                            type='text' 
                            name='special_requirements' 
                            onChange={this.handleChange} />
                    <br />

                    <label> Vet Practice: </label>
                    <br />
                        <input className='input'
                            type='text'    
                            name='vet_name' 
                            onChange={this.handleChange} />
                    <br />

                    <label> Vet Contact: </label>
                    <br />
                        <input className='input'
                            type='text' 
                            name='vet_contact' 
                            onChange={this.handleChange} />
                    <br />
                    <br />
                    <input className='submit'
                        type="submit" 
                        value="Submit" />
                </form>
            </div>
        )
    }



}
export default RegisterDog

