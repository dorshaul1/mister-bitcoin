
import { Component } from 'react'
import { Chart } from '../../cmps/Chart/Chart';
import { UserPreview } from '../../cmps/UserPreview/UserPreview';
import { bitcoinService } from '../../services/bitcoinService';
import { userService } from '../../services/userService';
import loader from '../../assets/images/loader.svg'


import './HomePage.scss'

export class HomePage extends Component {

    state = {
        rate: null,
        marketPrice: null
    }

    getCoinRate = async () => {
        return await bitcoinService.getRate(this.getUser.coins)
    }

    async componentDidMount() {
        let rate = await this.getCoinRate()
        this.setState({ rate })
        let marketPrice = await bitcoinService.getMarketPrice()
        this.setState({ marketPrice })
    }

    get getUser() {
        return userService.getUser()
    }

    getBiCoinPrice = () => {
        return this.state.marketPrice["values"].map((value=>{
            return value.y
        }))
    }

    render() {
        const { rate } = this.state
        return (
            <section className="homePage">
                { <div className="homePage-container flex column">
                    <h1>Mister Bitcoin</h1>
                    <UserPreview user={this.getUser} rate={rate} />
                   {this.state.marketPrice && <Chart bitCoinPrice = { this.getBiCoinPrice()} marketPrice={this.state.marketPrice}/>}
                   {!this.state.marketPrice && <img className="loader" src={loader}/>}
                </div>}

            </section>
        )
    }
}
