import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


export { XAxis, YAxis };

function YAxis(props) {
    const { yScale, height, offsetX } = props;

    return (
        <g>
            {/* Draw the main axis line */}
            <line y2={height} stroke="black" />
            {/* Draw tick marks and labels */}
            {yScale.domain().map((tickValue, i) => (
                <g key={i} transform={`translate(0, ${yScale(tickValue)})`}>
                    <line x1={-5} x2={0} y1={yScale.bandwidth() / 2} y2={yScale.bandwidth() / 2} stroke="black" />
                    <text
                        style={{ textAnchor: 'start', fontSize: '10px' }}
                        x={-offsetX + 10}
                        y={yScale.bandwidth() / 2}
                        dy=".35em"
                    >
                        {tickValue}
                    </text>
                </g>
            ))}
        </g>
    );
}

function XAxis(props) {
    const { xScale, width, height } = props;

    return (
        <g transform={`translate(0, ${height})`}>
            <line x2={width} stroke="black" />
            {xScale.ticks(5).map((tickValue, i) => (
                <g key={i} transform={`translate(${xScale(tickValue)}, 0)`}>
                    <line y2={10} stroke="black" />
                    <text style={{ textAnchor: 'middle', fontSize: '10px' }} dy=".71em" y={20}>
                        {tickValue}
                    </text>
                </g>
            ))}
        </g>
    );
}
