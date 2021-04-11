
import { Component } from 'react'
import { Chart } from '../../cmps/Chart/Chart';
import { UserPreview } from '../../cmps/UserPreview/UserPreview';
import { bitcoinService } from '../../services/bitcoinService';
import { userService } from '../../services/userService';
import loader from '../../assets/images/loader.svg'


import './HomePage.scss'
import { ChartTrade } from '../../cmps/chartTrade/chartTrade';
import { MovesList } from '../../cmps/MovesList/MovesList';

export class HomePage extends Component {

    state = {
        rate: null,
        marketPrice: null,
        trade: null
    }

    getCoinRate = async () => {
        return await bitcoinService.getRate(this.getUser.coins)
    }

    async componentDidMount() {
        let rate = await this.getCoinRate()
        this.setState({ rate })
        let marketPrice = await bitcoinService.getMarketPrice()
        this.setState({ marketPrice })
        let trade = await bitcoinService.getTradePrice()
        this.setState({ trade })
    }

    get getUser() {
        return userService.getUser()
    }

    getBiCoinPrice = () => {
        return this.state.marketPrice["values"].map((value => {
            return value.y
        }))
    }
    getTradePrice = () => {
        return this.state.trade["values"].map((value => {
            return value.y
        }))
    }

    render() {
        const { rate } = this.state
        return (
            <section className="homePage">
                { <div className="homePage-container flex column">
                    <h1 className="main-title">Mister Bitcoin</h1>
                    <UserPreview user={this.getUser} rate={rate} />
                    <div className="charts flex space-between">
                        {this.state.trade && <ChartTrade tradePrice={this.getTradePrice()} trade={this.state.trade} />}
                        {this.state.marketPrice && <Chart bitCoinPrice={this.getBiCoinPrice()} marketPrice={this.state.marketPrice} />}
                        {!this.state.marketPrice && <img className="loader" alt="picture" src={loader} />}
                    </div>
                    <MovesList currUser = {this.getUser}/>
                </div>}

            </section>
        )
    }
}
