import React from "react";
import { max, scaleBand, scaleLinear } from "d3";
import { XAxis, YAxis } from "./axes";
import 'bootstrap/dist/css/bootstrap.min.css';



export function BarChart(props) {
    const { offsetX, offsetY, data, height, width, selectedAirlineID, setSelectedAirlineID } = props;

    // Define the xScale and yScale
    const xScale = scaleLinear()
        .domain([0, max(data, d => d.Count)])
        .range([0, width]);

    const yScale = scaleBand()
        .domain(data.map(d => d.Airline))
        .range([0, height])
        .padding(0.2);

    // Color function for bars
    const color = (d) => (d.AirlineID === selectedAirlineID ? "#992a5b" : "#2a5599");

    // Event handlers
    const onMouseOver = (d) => setSelectedAirlineID(d.AirlineID);
    const onMouseOut = () => setSelectedAirlineID(null);

    return (
        <g transform={`translate(${offsetX}, ${offsetY})`}>
            {data.map((d, i) => (
                <rect
                    key={i}
                    x={0}
                    y={yScale(d.Airline)}
                    width={xScale(d.Count)}
                    height={yScale.bandwidth()}
                    fill={color(d)}
                    onMouseOver={() => onMouseOver(d)}
                    onMouseOut={onMouseOut}
                />
            ))}
            <XAxis xScale={xScale} width={width} height={height} />
            <YAxis yScale={yScale} height={height} offsetX={offsetX} />
        </g>
    );
}