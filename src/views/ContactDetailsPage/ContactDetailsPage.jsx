
import { Component } from 'react'
import { Link } from 'react-router-dom'
import contactService from '../../services/contactService'

import './ContactDetailsPage.scss'

export class ContactDetailsPage extends Component {

    state = {
        contact: null
    }

    async componentWillMount() {
        let contact = await contactService.getContactById(this.props.match.params.contactId)
        this.setState({ contact })
    }

    deleteContact = async () => {
        await contactService.deleteContact(this.state.contact._id)
        this.props.history.push('/contact')

    }
    render() {
        const { contact } = this.state
        return (
            <div className="contactDetailsPage">
                <h1>details</h1>
                {contact && <div className="details-container">
                    {/* <div className="contact-image flex center"> */}
                    <img src={`https://robohash.org/${contact._id}`} alt="" />
                    {/* </div> */}
                    <h2>{contact.name}</h2>
                    <h4>{contact.email}</h4>
                    <h4>{contact.phone}</h4>
                </div>}
                {contact && <Link to={`/edit/${contact._id}`}>Edit</Link>}
                {contact && <button onClick={this.deleteContact}>Delete</button>}
            </div>
        )
    }
}
