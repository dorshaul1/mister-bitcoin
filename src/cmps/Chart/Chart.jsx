
import { Sparklines, SparklinesLine } from 'react-sparklines';

import './Chart.scss'

export const Chart = ({marketPrice , bitCoinPrice}) => {
    return (
        <div>
            <h3>Chart</h3>

            <p>{marketPrice.description}</p>
            <Sparklines data={bitCoinPrice}>
                <SparklinesLine color="blue" />
            </Sparklines>
        </div>
    )
}

