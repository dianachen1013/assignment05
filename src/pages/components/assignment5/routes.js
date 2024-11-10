import React from "react";


function Routes(props) {
    const { projection, routes, selectedAirlineID } = props;

    // Return routes of the selected airline
    if (!selectedAirlineID) {
        return <g></g>;
    }

    return (
        <g>
            {routes
                .filter(route => route.AirlineID === selectedAirlineID)
                .map((route, index) => {
                    const [sourceX, sourceY] = projection([route.sourceLongitude, route.sourceLatitude]);
                    const [destX, destY] = projection([route.destLongitude, route.destLatitude]);

                    return (
                        <line
                            key={index}
                            x1={sourceX}
                            y1={sourceY}
                            x2={destX}
                            y2={destY}
                            stroke="#992a5b"
                            strokeWidth={0.5}
                        />
                    );
                })}
        </g>
    );
}

export { Routes };