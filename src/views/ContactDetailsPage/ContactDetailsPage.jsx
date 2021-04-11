
import { Component } from 'react'
import { Link } from 'react-router-dom'
import { TransferFund } from '../../cmps/TransferFund/TransferFund'
import contactService from '../../services/contactService'
import { removeContact } from '../../store/actions/contactAction'
import { connect } from 'react-redux'


import './ContactDetailsPage.scss'

class _ContactDetailsPage extends Component {

    state = {
        contact: null,
        // tranfermAmount: null
    }

    async componentWillMount() {
        let contact = await contactService.getContactById(this.props.match.params.contactId)
        this.setState({ contact })
    }

    remove = async () => {
        this.props.removeContact(this.state.contact._id)
        this.props.history.push('/contact')

    }

    render() {
        const { contact } = this.state
        return (
            <div className="contactDetailsPage">
                <h1>details</h1>
                {contact && <div className="details-container flex justify-center">

                    <Link className="back" to="/contact">🠖</Link>
                    {/* <div className="contact-image flex center"> */}
                    {/* </div> */}
                    <div className="contact-info flex column justify-center">

                        <h2>{contact.name}</h2>
                        <h4>{contact.email}</h4>
                        <h4>{contact.phone}</h4>

                        <div className="transfer">

                            <TransferFund onChangeFilter={this.onChangeFilter} contactId = {contact._id}/>

                        </div>
                    </div>
                    <img src={`https://i.pravatar.cc/150?u=${contact._id}`} alt="" />
                </div>}
                <div className="btns-container flex space-between">
                    {contact && <Link to={`/edit/${contact._id}`} className="edit-btn">Edit</Link>}
                    {contact && <a onClick={this.remove} className="delete-btn">Delete</a>}
                </div>

            </div>
        )
    }
}

const mapStateToProps = state => {
    // console.log('state:', state)
    // console.log('state.contacatReducer:', state.contacatReducer)
    return {
      contacts: state.contactReducer.contacts
    }
  }
  
  const mapDispatchToProps = {
    // loadContacts,
    removeContact
  }
  
  export const ContactDetailsPage = connect(mapStateToProps, mapDispatchToProps)(_ContactDetailsPage)
