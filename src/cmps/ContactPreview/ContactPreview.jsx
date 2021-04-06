

import { Link } from 'react-router-dom'
import './ContactPreview.scss'

export const ContactPreview = ({ contact }) => {

    return (
        <Link to={`/detalis/${contact._id}`}>
            <div className="contactPreview flex">
                <div className="contact-image flex center">
                    <img src={`https://robohash.org/${contact._id}`} alt="" />
                </div>
                <div className="contact-info flex column align-start justify-center">
                    <h1>{contact.name}</h1>
                </div>
            </div>
        </Link>
    )
}

