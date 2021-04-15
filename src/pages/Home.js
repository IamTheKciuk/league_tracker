import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

export const Home = (props) => {
    return (
        <Wrapper className="section page">
            <div className="section-center">
                <h1>home page</h1>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.section``;

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
