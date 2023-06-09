// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class CryptocurrenciesList extends Component {
  state = {currencyList: [], isLoader: true}

  componentDidMount() {
    this.getCurrencyDetails()
  }

  getCurrencyDetails = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const upDatedList = data.map(each => ({
      currencyLogo: each.currency_logo,
      currencyName: each.currency_name,
      euroValue: each.euro_value,
      usdValue: each.usd_value,
      id: each.id,
    }))
    this.setState({currencyList: upDatedList, isLoader: false})
  }

  renderCurrencyItem = () => {
    const {currencyList} = this.state
    return (
      <ul className="un-order-list">
        {currencyList.map(eachItem => (
          <CryptocurrencyItem
            currencyItemDetails={eachItem}
            key={eachItem.id}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {isLoader} = this.state
    return (
      <div className="List-container">
        <h1 className="title">Cryptocurrency Tracker</h1>
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
        />
        <div className="table-container">
          <div className="titles-card">
            <p className="coin-type">Coin Type</p>
            <p className="USD">USD</p>
            <p className="EURO">EURO</p>
          </div>
          {isLoader ? (
            <div data-testid="loader">
              <Loader type="Rings" color="#ffffff" height={80} width={80} />
            </div>
          ) : (
            this.renderCurrencyItem()
          )}
        </div>
      </div>
    )
  }
}

export default CryptocurrenciesList
