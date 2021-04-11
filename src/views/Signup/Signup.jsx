
import { Component } from 'react'
import { userService } from '../../services/userService'

import './Signup.scss'

export class Signup extends Component {
    state = {
        user: null,
        errMsg: ''
    }
    async componentDidMount() {
        // const { contactId } = this.props.match.params
        try {
            const user = userService.getEmptyUser()
            this.setState({ user })
        } catch (err) {
            this.setState({ errMsg: 'Contact Not Found' })
        }
    }

    handleChange = ({ target }) => {
        const field = target.name
        const value = target.email === 'number' ? +target.value : target.value
        this.setState((prevState) => ({ contact: { ...prevState.contact, [field]: value } }))
    }
    // onSaveUser = async (ev) => {
    //     ev.preventDefault()
    //     await contactService.saveContact({ ...this.state.contact })
    //     this.props.history.push('/contact')
    // }
    render() {
        if (!this.state.user) return <div>{this.state.errMsg || 'Loading'}</div>
        const { fullname, username, password } = this.state.user
        return (
            <form className='signup flex column align-center' onSubmit={this.onSaveContact}>
              <h1>Signup</h1>
                <label htmlFor="fullname">fullname</label>
                <input  required type="text" id="fullname" value={fullname} onChange={this.handleChange} name="fullname" />

                <label htmlFor="username">username</label>
                <input required type="text" id="email" value={username} onChange={this.handleChange} name="username" />

                <label htmlFor="password">password</label>
                <input required type="text" id="password" value={password} onChange={this.handleChange} name="password" />

                <p>{this.state.errMsg}</p>
                <button>Save Contact</button>
            </form>
        )
    }
}


