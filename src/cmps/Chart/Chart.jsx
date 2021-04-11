
import { Sparklines, SparklinesLine } from 'react-sparklines';

import './Chart.scss'

export const Chart = ({marketPrice , bitCoinPrice}) => {
    return (
        <div className="chart">
            {/* <h3>Chart</h3> */}

            <p>{marketPrice.description}</p>
            <Sparklines data={bitCoinPrice}>
                <SparklinesLine color="green" />
            </Sparklines>
        </div>
    )
}

