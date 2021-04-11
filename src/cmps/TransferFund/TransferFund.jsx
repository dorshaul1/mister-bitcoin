
import { Component } from 'react'
import { bitcoinService } from '../../services/bitcoinService'

import './TransferFund.scss'


export class TransferFund extends Component {

    state = {
        trasfer: ''
    }


    handleChange = ({ target }) => {
        const field = target.name
        const value = target.type === 'number' ? +target.value : target.value
        this.setState({ [field]: value })
    }


    onChangeFilter = () => {
        // console.log(this.state.trasfer);
        bitcoinService.addMove(this.props.contactId, +JSON.parse(JSON.stringify(this.state.trasfer)))
        this.setState({trasfer: "" })

    }

    render() {
        const { trasfer } = this.state

        return (
            <form className="transferFund flex column" onSubmit={(ev) => {
                ev.preventDefault()
                this.onChangeFilter()
            }
            }
            >
                <label htmlFor="trasfer">Transferm</label>
                <input type="number" id="trasfer" name="trasfer" value={trasfer} onChange={this.handleChange}/>

            </form>
        )
    }
}

