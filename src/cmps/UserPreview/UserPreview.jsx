

import './UserPreview.scss'

export const UserPreview = ({user , rate}) => {

    return (
        <div className="userPreview flex align-start column">
            <h1>{user.name}</h1>
            <small>Coins: {user.coins}</small>
            <small>BTC: {rate}</small>
        </div>
    )
}

