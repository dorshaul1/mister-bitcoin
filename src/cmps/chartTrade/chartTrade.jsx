
import { Sparklines, SparklinesLine } from 'react-sparklines';

import './chartTrade.scss'

export const ChartTrade = ({trade, tradePrice}) => {

    return (
        <div className="chart">
            {/* <h3>Chart</h3> */}

            <p>{trade.description}</p>
            <Sparklines data={tradePrice}>
                <SparklinesLine color="blue" />
            </Sparklines>
        </div>
    )
}

