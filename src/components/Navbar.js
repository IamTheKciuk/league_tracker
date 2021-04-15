import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";

export const Navbar = (props) => {
    return (
        <Wrapper>
            <div className="nav-center">
                <div className="nav-header">League Live Tracker</div>
                <ul className="nav-links">
                    <li className="link">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="link">
                        <Link to="/livetrack">Live Dashboard</Link>
                    </li>
                    <li className="link">
                        <Link to="/livetrack">Champions</Link>
                    </li>
                    <li className="link">
                        <Link to="/livetrack">Items</Link>
                    </li>
                </ul>
                <div className="nav-social">social</div>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.nav`
    height: 4rem;
    background: var(--nav-color-main);
    font-family: var(--font-zen);
    position: fixed;
    top: 0;
    width: 100%;

    .nav-center {
        height: 100%;
        width: 90vw;
        margin: 0 auto;
        max-width: var(--max-width);

        display: grid;
        grid-template-columns: 1fr 3fr auto;
        align-items: center;
    }

    .nav-header {
    }

    .nav-links {
        display: flex;
        justify-content: center;

        li {
            margin: 0 0.7rem;

            a {
                color: var(--nav-color-links);
                transition: all 0.3s ease;
            }
        }

        li:hover {
            a {
                color: white;
            }
        }
    }
`;

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
