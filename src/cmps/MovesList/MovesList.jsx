

// import { MobileStepper } from '@material-ui/core'
import './MovesList.scss'

export const MovesList = ({ currUser }) => {
    // console.log('currUser:', currUser)

    const { moves } = currUser
    // const {to} = currUser.moves
    return (
        <div className="movesList">
            {/* <h1>To: {to.name}</h1> */}
            {moves.map(move => {
                const { name, email, phone } = move.to
                return (
                    <div className="move-preview flex space-between" key={move.at}>

                        <div className="contact-info flex column ">

                            <h1>{name}</h1>
                            <h2>{email}</h2>
                            <h2>{phone}</h2>
                        </div>

                        <div className="transfer-info flex column">

                            <h1>B {move.amount}</h1>
                            {/* <h2>{move.at}</h2> */}
                            <h2>{new Date(move.at).toLocaleDateString("en-US")}</h2>
                        </div>
                        {/* {JSON.stringify(move.to.name)} */}
                    </div>
                )
            })}
        </div>
    )
}

