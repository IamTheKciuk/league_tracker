import React from "react";
import styled from "styled-components";

const ActiveChampionBars = ({ barStats }) => {
    const {
        currentHealth,
        maxHealth,
        resourceType,
        currentResource,
        resourceMax,
    } = barStats;

    const healthPercent = (currentHealth / maxHealth) * 100;

    let resourcePercent = 0;
    if (resourceMax !== 0) {
        resourcePercent = (currentResource / resourceMax) * 100;
    }

    return (
        <>
            {/* HEALTH BAR */}
            <Bar className="health-bar">
                <BarState
                    style={{ width: `${healthPercent}%`, background: `green` }}
                    className="health-bar-state"
                ></BarState>
                <p className="stat-amount">
                    {currentHealth.toFixed(0)}/{maxHealth.toFixed(0)}
                </p>
            </Bar>
            {/* END HEALTH BAR */}

            {/* RESOURCE BAR */}
            {resourceMax > 0 && ( // check if champ use any resource
                <Bar className="resource-bar">
                    <BarState
                        style={{
                            width: `${resourcePercent}%`,
                            background: `${
                                resourceType === "MANA" ? "blue" : "red"
                            }`,
                        }}
                        className="health-bar-state"
                    ></BarState>
                    <p className="stat-amount">
                        {currentResource.toFixed(0)}/{resourceMax.toFixed(0)}
                    </p>
                </Bar>
            )}
            {/* END RESOURCE BAR */}
        </>
    );
};

const Bar = styled.div`
    background: grey;
    width: 90%;
    height: 20px;
    margin: 3px auto;
    border-radius: 5px;
    position: relative;

    .stat-amount {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);

        font-weight: 600;
        color: black;
        text-shadow: 1px 1px 10px white;
    }
`;

const BarState = styled.div`
    height: 100%;
    border-radius: 5px;
    text-align: center;
`;

export default ActiveChampionBars;
