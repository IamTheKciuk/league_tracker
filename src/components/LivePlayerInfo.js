import React from "react";
import styled from "styled-components";
import axios from "axios";

import {
    ActivePlayerBars,
    ActivePlayerStats,
    ActivePlayerItems,
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
            <div className="champion-avatar">
                <img
                    src={`http://ddragon.leagueoflegends.com/cdn/11.8.1/img/champion/${champion.championName}.png`}
                    alt="active champion avatar"
                />
            </div>
            <div className="champion-bars">
                <ActivePlayerBars barStats={barStats} />
            </div>

            <div className="champion-stats">
                <ActivePlayerStats playerStats={playerStats} />
            </div>

            <div className="champion-score">score</div>
            <div className="champion-items">
                <ActivePlayerItems items={items} allItems={allItems} />
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 6fr;
    grid-template-rows: 50px repeat(10, 30px);
    row-gap: 5px;
    column-gap: 20px;

    .player-name {
        grid-column: 1 / 2;
        grid-row: 1 / 2;
    }

    .champion-avatar {
        grid-column: 1 / 2;
        grid-row: 2 / 7;
    }

    .champion-stats {
        grid-column: 1 / 2;
        grid-row: 7 / 11;
    }

    .champion-bars {
        grid-column: 2 / 3;
        grid-row: 1 / 3;
    }

    .champion-score {
        grid-column: 2 / 3;
        grid-row: 3 / 6;
    }

    .champion-items {
        grid-column: 2 / 3;
        grid-row: 6 / 11;

        div {
            justify-content: center;
        }
    }
`;

export default LivePlayerInfo;
