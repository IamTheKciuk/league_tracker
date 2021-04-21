import React from "react";
import styled from "styled-components";

const ActivePlayerScore = ({ scores }) => {
    console.log(scores);

    return (
        <Wrapper>
            <div className="kda stat">
                <img
                    src="http://ddragon.leagueoflegends.com/cdn/5.5.1/img/ui/score.png"
                    alt="kda icon"
                />
                {/* <p className="score-desc">K / D / A</p> */}
                <p>
                    {scores.kills} / {scores.assists} / {scores.deaths}
                </p>
            </div>
            <div className="creep stat">
                <img
                    src="http://ddragon.leagueoflegends.com/cdn/5.5.1/img/ui/minion.png"
                    alt="creep icon"
                />
                <p>{scores.creepScore}</p>
            </div>
            <div className="ward stat">
                <img src="" alt="ward icon" />
                <p>{scores.wardScore}</p>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;

    margin: 5px 0px;

    .stat {
        justify-self: center;
        color: white;
        font-size: 1.3rem;
        img {
            width: 35px;
            height: 35px;
        }
    }

    .score-desc {
        font-size: 0.7rem;
        text-align: center;
        color: yellow;
    }
`;

export default ActivePlayerScore;
