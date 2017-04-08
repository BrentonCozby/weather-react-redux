import React from 'react'
import {
    Sparklines,
    SparklinesLine,
    SparklinesReferenceLine
 } from 'react-sparklines'

function avg(data) {
    const sum = data.reduce((prev, curr) => {
        return prev + curr
    })
    return Math.round(sum / data.length)
}

export default ({ data, color, units }) => (
    <div className="Chart">
        <Sparklines width={250} height={100} data={data}>
            <SparklinesLine color={color} />
            <SparklinesReferenceLine type="avg" />
        </Sparklines>
        <p className="average">{avg(data)} {units}</p>
    </div>
)
