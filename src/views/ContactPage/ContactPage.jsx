
import { Component } from 'react'
import { Link } from 'react-router-dom'
import { ContactFilter } from '../../cmps/ContactFilter/ContactFilter'
import { ContactList } from '../../cmps/ContactList/ContactList'
import contactService from '../../services/contactService'

import './ContactPage.scss'

export class ContactPage extends Component {

    state = {
        filterBy: null,
        contacts: null
    }

    async componentDidMount() {
        this.loadContacts()
    }

    async loadContacts(){
        let contacts = await contactService.getContacts(this.state.filterBy)
        this.setState({ contacts })
    }
    onChangeFilter = (filterBy) => {
        this.setState({ filterBy }, this.loadContacts)
      }

    render() {
        const { contacts } = this.state

        return (
            <div className="contactPage">
                <h1>contact</h1>
                <Link to="/edit"><button>Add</button></Link>
                <ContactFilter onChangeFilter={this.onChangeFilter}/>
                {contacts && <ContactList contacts={contacts} navigationDetails={this.props.navigationDetails} />}
            </div>
        )
    }
}
