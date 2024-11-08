import React from "react";
import { geoPath, geoMercator } from "d3-geo";
import { Routes } from './routes'
import { count } from "d3";


function AirportMap(props) {
    const { width, height, countries, airports } = props;

    // 1. Define a projection using geoMercator
    let projection = geoMercator()
        .scale(97)
        .translate([width / 2, height / 2 + 20]);

    // 2. Define a path generator using geoPath
    let pathGenerator = geoPath().projection(projection);

    return (
        <g>
            {/* 3. Plot the world map */}
            {countries.features.map((country, i) => (
                <path
                    key={i}
                    d={pathGenerator(country)}
                    stroke="#ccc"
                    fill="#eee"
                />
            ))}

            {/* 4. Plot the airports */}
            {airports.map((airport, i) => {
                const [x, y] = projection([airport.longitude, airport.latitude]);
                return (
                    <circle
                        key={i}
                        cx={x}
                        cy={y}
                        r={1}
                        fill="#2a5599"
                    />
                );
            })}
        </g>
    );
}

export { AirportMap };
