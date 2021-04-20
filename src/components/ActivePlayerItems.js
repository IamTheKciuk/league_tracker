import React from "react";
import styled from "styled-components";

const ActivePlayerItems = ({ items, allItems }) => {
    let itemsFinal = [{}, {}, {}, {}, {}, {}]; // empty tab to always show 6 items

    // set itemsFinal tab with active items
    for (let i = 0; i < 6; i++) {
        if (items[i]) {
            itemsFinal[items[i].slot] = items[i]; // set item on proper slot
        }
    }

    // roll down description
    const toggleDescription = (e, action) => {
        // get description div
        const descriptionOfHoveredItem = document.getElementsByClassName(
            `${e.target.dataset.index}`
        );

        const descriptionTitle = descriptionOfHoveredItem[0].children[0]; // desc title
        const descriptionText = descriptionOfHoveredItem[0].children[1]; // desc text

        const descriptionHeight =
            adjustHeight(descriptionText) + adjustHeight(descriptionTitle); // calculate description height

        // open on mouse enter and close on mouse leave
        if (action === "open") {
            descriptionOfHoveredItem[0].style.height = `${descriptionHeight}px`; // set height of description
            descriptionOfHoveredItem[0].classList.add("opened"); // add opened class
        } else {
            descriptionOfHoveredItem[0].classList.remove("opened"); // remove opened class
            descriptionOfHoveredItem[0].style.height = `0px`; // set height to 0
        }
    };

    // get height of element
    const adjustHeight = (e) => {
        let contentHeight;

        contentHeight = e.scrollHeight + e.offsetTop;

        return contentHeight;
    };

    return (
        <Wrapper>
            {itemsFinal.map((item, index) => {
                return (
                    <div key={index} className="item">
                        <div className="img-wrapper">
                            {/* if id exists show item image */}
                            {item.itemID ? (
                                <img
                                    className="item-image"
                                    src={`http://ddragon.leagueoflegends.com/cdn/11.8.1/img/item/${item.itemID}.png`}
                                    alt={`item ${item.itemID}`}
                                    data-index={item.itemID}
                                    onMouseEnter={(e) =>
                                        toggleDescription(e, "open")
                                    }
                                    onMouseLeave={(e) =>
                                        toggleDescription(e, "close")
                                    }
                                />
                            ) : (
                                <div className="item-image"></div>
                            )}
                        </div>
                        <div
                            className={`description ${
                                item.itemID && item.itemID
                            }`}
                        >
                            <h5 className="description-title">
                                {item.displayName}
                            </h5>
                            <div className="description-text">
                                {item.itemID && (
                                    <p
                                        dangerouslySetInnerHTML={{
                                            __html:
                                                allItems[item.itemID]
                                                    .description,
                                        }}
                                    ></p>
                                )}
                            </div>
                        </div>
                    </div>
                );
            })}
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: grid;
    column-gap: 20px;
    row-gap: 10px;
    grid-template-columns: repeat(3, 80px);
    grid-template-rows: repeat(2, 80px);

    .item {
        position: relative;
        cursor: help;
        .img-wrapper {
            width: 100%;
            height: 100%;

            .item-image {
                width: 100%;
                height: 100%;
                background: black;
                border: 2px solid silver;
            }
        }

        .description {
            position: absolute;
            opacity: 0;
            top: bottom;
            left: 0;
            height: 0px;
            width: 250px;
            background: white;
            z-index: 999;
            transition: all 0.3s ease;

            overflow: hidden;

            .description-text {
                width: 100%;
                height: 100%;

                mainText {
                    /* background: black; */
                }
            }
        }

        .opened {
            opacity: 1;
            height: 60px;
        }
    }
`;

export default ActivePlayerItems;
