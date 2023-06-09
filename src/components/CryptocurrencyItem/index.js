// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {currencyItemDetails} = props
  const {currencyLogo, currencyName, euroValue, usdValue} = currencyItemDetails
  return (
    <li className="titles-card-2">
      <div className="card-2">
        <img src={currencyLogo} alt={currencyName} className="currency-logo" />
        <p className="coin-type-2">{currencyName}</p>
      </div>
      <p className="USD-2">{usdValue}</p>
      <p className="EURO-2">{euroValue}</p>
    </li>
  )
}

export default CryptocurrencyItem
