
import { useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { TransferFund } from '../../cmps/TransferFund/TransferFund'
import contactService from '../../services/contactService'
import { removeContact } from '../../store/actions/contactAction'
import { useDispatch } from 'react-redux'
import './ContactDetailsPage.scss'

export const ContactDetailsPage =(props)=> {
    const[contact, setcontact] = useState(null)
    const dispatch = useDispatch()
    useEffect(async () => {
        
        let contact = await contactService.getContactById(props.match.params.contactId)
        setcontact( contact )
        return () => {
        }
    },[ props.match.params.contactId])

    const remove = async () => {
        dispatch(removeContact(contact._id))
        props.history.push('/contact')
    }
        return (
            <div className="contactDetailsPage">
                <h1>details</h1>
                {contact && <div className="details-container flex align-center space-between">
                    <Link className="back" to="/contact">🠖</Link>
                    <div className="contact-info flex column justify-center">
                        <h2>{contact.name}</h2>
                        <h4>{contact.email}</h4>
                        <h4>{contact.phone}</h4>
                        <div className="transfer">
                            <TransferFund contactId={contact._id} />
                        </div>
                    </div>
                    <img src={`https://i.pravatar.cc/150?u=${contact._id}`} alt="" />
                </div>}
                <div className="btns-container flex space-between">
                    {contact && <Link to={`/edit/${contact._id}`} className="edit-btn">Edit</Link>}
                    {contact && <a onClick={remove} className="delete-btn">Delete</a>}
                </div>

            </div>
        )
}