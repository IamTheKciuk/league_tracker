import React from "react";
import styled from "styled-components";
import axios from "axios";

import {
    ActivePlayerBars,
    ActivePlayerStats,
    ActivePlayerItems,
    ActivePlayerScore,
} from "../components";

const LivePlayerInfo = ({ player, champion, allItems }) => {
    const { items, respawnTimer, summonerSpells, scores, isDead } = champion;
    const { championStats: playerStats } = player;
    const barStats = {
        currentHealth: player.championStats.currentHealth,
        maxHealth: player.championStats.maxHealth,
        resourceType: player.championStats.resourceType,
        currentResource: player.championStats.resourceValue,
        resourceMax: player.championStats.resourceMax,
    };

    return (
        <Wrapper>
            <h4 className="player-name">{player.summonerName}</h4>

            {/* CHAMPION AVATAR */}
            <div className="champion-avatar">
                <img
                    src={`http://ddragon.leagueoflegends.com/cdn/11.8.1/img/champion/${champion.championName.replaceAll(
                        " ",
                        ""
                    )}.png`}
                    alt="active champion avatar"
                />
                {isDead && (
                    <div className="dead-overlay">
                        {respawnTimer.toFixed(1)}
                    </div>
                )}
            </div>

            {/* CHAMPION BARS */}
            <div className="champion-bars">
                <ActivePlayerBars barStats={barStats} />
            </div>

            {/* CHAMPION STATS */}
            <div className="champion-stats">
                <ActivePlayerStats playerStats={playerStats} />
            </div>

            {/* CHAMPION SCORE */}
            <div className="champion-score">
                <ActivePlayerScore scores={scores} />
            </div>

            {/* CHAMPION ITEMS */}
            <div className="champion-items">
                <ActivePlayerItems items={items} allItems={allItems} />
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    grid-template-rows: 50px repeat(10, 30px);
    row-gap: 5px;
    column-gap: 10px;
    width: 750px;

    .player-name {
        grid-column: 1 / 2;
        grid-row: 1 / 2;
    }

    .champion-avatar {
        grid-column: 1 / 2;
        grid-row: 2 / 7;

        position: relative;
        width: 126px;
        height: 126px;
        justify-self: center;
        align-self: center;
        border: 3px solid silver;
        border-radius: 5px;
        box-shadow: 2px 2px 5px black;

        .dead-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(255, 0, 0, 0.3);

            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
            font-size: 2rem;
        }
    }

    .champion-stats {
        grid-column: 1 / 2;
        grid-row: 7 / 11;

        justify-self: center;
        border: 2px solid silver;
        border-radius: 5px;
        box-shadow: 2px 2px 5px black;
    }

    .champion-bars {
        grid-column: 2 / 4;
        grid-row: 1 / 3;
    }

    .champion-score {
        grid-column: 2 / 3;
        grid-row: 3 / 6;

        width: 100%;
        justify-self: center;
        align-self: center;
        border: 2px solid silver;
        border-radius: 5px;
        box-shadow: 2px 2px 5px black;
    }

    .champion-items {
        grid-column: 2 / 3;
        grid-row: 6 / 11;

        justify-self: center;
        align-self: center;
        width: 100%;
        border: 2px solid silver;
        border-radius: 5px;
        box-shadow: 2px 2px 5px black;
    }
`;

export default LivePlayerInfo;
