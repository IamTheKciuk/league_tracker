import axios from "axios";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { updateLiveData, setMatch, setAllItemsDescription } from "../actions";

// components
import { LivePlayerInfo } from "../components";

export const LiveDashboard = ({ isMatch, gameInfo, allItems, dispatch }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState({ isError: false, msg: "" });

    const getGameInfo = async () => {
        if (!isMatch) {
            setIsLoading(true);
        }
        setError({ isError: false, msg: "" });

        try {
            const response = await axios.post("/.netlify/functions/getData");

            // set gameInfo and isMatch state if live stats fetched
            if (response.data !== "hello") {
                const data = await JSON.parse(response.data);
                dispatch(updateLiveData(data));
                dispatch(setMatch(true));
                setIsLoading(false);
            } else {
                setIsLoading(true);
                setMatch(false);
                dispatch(updateLiveData(null));
            }
        } catch (error) {
            setError({ isError: true, msg: error.toString() });
            setIsLoading(false);
            setMatch(false);
        }
    };

    const getAllItemsDescription = async () => {
        try {
            const response = await axios.get(
                "http://ddragon.leagueoflegends.com/cdn/11.8.1/data/en_US/item.json"
            );

            if (response.data) {
                dispatch(setAllItemsDescription(response.data.data));
            }
        } catch (error) {
            setError({ isError: true, msg: error.toString() });
        }
    };

    // GAME INFO UPDATE
    useEffect(() => {
        getAllItemsDescription();
        let updateLiveStats;
        if (!isMatch) dispatch(updateLiveData(null)); // set gameInfo to null if there is no match
        getGameInfo(); // initial get game info

        // update faster if is match /// slower if waiting for match
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
            clearInterval(updateLiveStats);
        };
    }, [isMatch]);

    if (isLoading) {
        return (
            <Wrapper className="section page">
                Waiting for match to start
            </Wrapper>
        );
    }

    if (error.isError) {
        return (
            <Wrapper className="section page">ERROR!!! ({error.msg})</Wrapper>
        );
    }

    const activeChampion = gameInfo.allPlayers.find(
        (player) => player.summonerName === gameInfo.activePlayer.summonerName
    );

    const { activePlayer } = gameInfo;

    // if loading is off and match has started - show dashboard
    if (!isLoading && isMatch) {
        return (
            <Wrapper className="section page">
                <div className="section-center">
                    <div className="grid-layout">
                        {/* Player info */}
                        <div className="active-player-info">
                            <LivePlayerInfo
                                player={activePlayer}
                                champion={activeChampion}
                                allItems={allItems}
                            />
                        </div>
                    </div>
                </div>
            </Wrapper>
        );
    }

    return <Wrapper>x</Wrapper>;
};

const Wrapper = styled.section`
    .grid-layout {
        display: grid;
        grid-template-columns: 1fr 1fr;

        .active-player-info {
            grid-column-start: 1;
            grid-column-end: 3;
        }
    }
`;

const mapStateToProps = (state) => {
    return {
        isMatch: state.isMatch,
        gameInfo: state.gameInfo,
        allItems: state.allItems,
    };
};

export default connect(mapStateToProps)(LiveDashboard);
