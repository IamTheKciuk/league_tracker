import axios from "axios";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { updateLiveData } from "../actions";

export const LiveDashboard = ({ isMatch, gameInfo, dispatch }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState({ isError: false, msg: "" });

    const getGameInfo = async () => {
        // setIsLoading(true);
        setError({ isError: false, msg: "" });

        try {
            const response = await axios.post("/.netlify/functions/getData");

            const data = await JSON.parse(response.data);
            dispatch(updateLiveData(data));

            setIsLoading(false);
        } catch (error) {
            setError({ isError: true, msg: error.toString() });
        }
    };

    useEffect(() => {
        getGameInfo();
    }, []);

    if (isLoading) {
        return <Wrapper className="section page">LOADING</Wrapper>;
    }

    if (error.isError) {
        return (
            <Wrapper className="section page">ERROR!!! ({error.msg})</Wrapper>
        );
    }

    console.log(gameInfo);
    return (
        <Wrapper className="section page">
            <div className="section-center">
                <h1>live</h1>
                <p>{isMatch ? "true" : "false"}</p>

                <h2>Player info:</h2>
                <p>{gameInfo.activePlayer.summonerName}</p>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.section``;

const mapStateToProps = (state) => {
    return { isMatch: state.isMatch, gameInfo: state.gameInfo };
};

export default connect(mapStateToProps)(LiveDashboard);
