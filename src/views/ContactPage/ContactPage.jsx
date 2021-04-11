
import { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { ContactFilter } from '../../cmps/ContactFilter/ContactFilter'
import { ContactList } from '../../cmps/ContactList/ContactList'
// import contactService from '../../services/contactService'
import { loadContacts } from '../../store/actions/contactAction'
import addIcon from '../../assets/images/add.svg'

import './ContactPage.scss'

class _ContactPage extends Component {

  state = {
    filterBy: null,
    // contacts: null
  }

  async componentDidMount() {
    // console.log('this.props.loadContacts:', this.props.loadContacts)
    this.props.loadContacts(this.state.filterBy)
  }

  // async loadContacts(){
  //     let contacts = await contactService.query(this.state.filterBy)
  //     this.setState({ contacts })
  // }
  onChangeFilter = (filterBy) => {
    this.setState({ filterBy }, this.props.loadContacts)
  }

  render() {
    const { contacts } = this.props

    return (
      <div className="contactPage flex column align-center">
        {/* <h1>contact</h1> */}
        <Link to="/edit"><button className="add-btn flex center"><img src={addIcon} alt="" /></button></Link>
        <ContactFilter onChangeFilter={this.onChangeFilter} />
        {contacts && <ContactList contacts={contacts} navigationDetails={this.props.navigationDetails} />}
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
  loadContacts,
  // removeContact
}

export const ContactPage = connect(mapStateToProps, mapDispatchToProps)(_ContactPage)