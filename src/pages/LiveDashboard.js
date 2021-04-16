import axios from "axios";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { updateLiveData, setMatch } from "../actions";

export const LiveDashboard = ({ isMatch, gameInfo, dispatch }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState({ isError: false, msg: "" });

    const getGameInfo = async () => {
        if (!isMatch) {
            setIsLoading(true);
        }
        setError({ isError: false, msg: "" });

        try {
            const response = await axios.post("/.netlify/functions/getData");
            console.log(response);

            if (response.data.activePlayer) {
                const data = await JSON.parse(response.data);
                dispatch(updateLiveData(data));
                dispatch(setMatch(true));
            }

            if (isLoading) {
                setIsLoading(false);
            }
        } catch (error) {
            setError({ isError: true, msg: error.toString() });
            setIsLoading(false);
            setMatch(false);
        }
    };

    useEffect(() => {
        let updateLiveStats;
        getGameInfo();

        if (isMatch) {
            updateLiveStats = setInterval(() => {
                getGameInfo();
            }, 500);
        } else {
            updateLiveStats = setInterval(() => {
                getGameInfo();
            }, 5000);
        }
        return function cleanup() {
            console.log("cleaning up");
            clearInterval(updateLiveStats);
        };
    }, [isMatch]);

    if (isLoading) {
        return <Wrapper className="section page">LOADING</Wrapper>;
    }

    if (error.isError) {
        return (
            <Wrapper className="section page">ERROR!!! ({error.msg})</Wrapper>
        );
    }

    // console.log(gameInfo);
    if (!isLoading && isMatch) {
        return (
            <Wrapper className="section page">
                <div className="section-center">
                    <h1>live</h1>
                    <p>Match playing: {isMatch ? "true" : "false"}</p>

                    <h2>Player info:</h2>
                    <p>{gameInfo.activePlayer.summonerName}</p>
                    <p>{gameInfo.activePlayer.championStats.armor}</p>
                    <p>
                        HP:
                        {gameInfo.activePlayer.championStats.currentHealth}/
                        {gameInfo.activePlayer.championStats.maxHealth}
                    </p>
                    <p>
                        {gameInfo.activePlayer.championStats.resourceType}:
                        {gameInfo.activePlayer.championStats.resourceValue}/
                        {gameInfo.activePlayer.championStats.resourceMax}
                    </p>
                </div>
            </Wrapper>
        );
    }

    return <Wrapper>x</Wrapper>;
};

const Wrapper = styled.section``;

const mapStateToProps = (state) => {
    return { isMatch: state.isMatch, gameInfo: state.gameInfo };
};

export default connect(mapStateToProps)(LiveDashboard);
