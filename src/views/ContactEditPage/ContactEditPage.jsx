
import { Component } from 'react'
import contactService from '../../services/contactService'


import './ContactEditPage.scss'

export class ContactEditPage extends Component {

    state = {
        contact: null,
        errMsg: ''
    }
    async componentDidMount() {
        const { contactId } = this.props.match.params
        try {
            const contact = contactId ? await contactService.getContactById(contactId) : contactService.getEmptyContact()
            this.setState({ contact })
        } catch (err) {
            this.setState({ errMsg: 'Contact Not Found' })
        }
    }

    handleChange = ({ target }) => {
        const field = target.name
        const value = target.email === 'number' ? +target.value : target.value
        this.setState((prevState) => ({ contact: { ...prevState.contact, [field]: value } }))
    }
    onSaveContact = async (ev) => {
        ev.preventDefault()
        await contactService.saveContact({ ...this.state.contact })
        this.props.history.push('/contact')
    }
    render() {
        if (!this.state.contact) return <div>{this.state.errMsg || 'Loading'}</div>
        const { name, email, phone } = this.state.contact
        return (
            <form className='contact-edit flex column' onSubmit={this.onSaveContact}>
                <label htmlFor="name">Name</label>
                <input  required type="text" id="name" value={name} onChange={this.handleChange} name="name" />

                <label htmlFor="email">Email</label>
                <input required type="email" id="email" value={email} onChange={this.handleChange} name="email" />

                <label htmlFor="phone">Phone</label>
                <input required type="text" id="phone" value={phone} onChange={this.handleChange} name="phone" />

                <p>{this.state.errMsg}</p>
                <button>Save Contact</button>
            </form>
        )
    }
}
