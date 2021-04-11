

import './UserPreview.scss'

export const UserPreview = ({ user, rate }) => {

    const formatedBalamce = () => { return (1 / (rate) * user.coins).toFixed(3).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }

    return (
        <div className="userPreview flex align-start column">
            <h1>{user.name}</h1>
            <h2>Contact Balace</h2>
        <small>BTC: <span className="bitcoin">B {user.coins}</span></small>
            {rate && <small>USD: <span className="USD">$ {formatedBalamce()} </span></small>}
        </div>
    )
}

