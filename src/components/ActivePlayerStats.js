import React from "react";
import styled from "styled-components";
import attackDamage_icon from "../assets/stat_icons/Attack_damage_icon.png";
import abilityPower_icon from "../assets/stat_icons/Ability_power_icon.png";
import armor_icon from "../assets/stat_icons/Armor_icon.png";
import magicResist_icon from "../assets/stat_icons/Magic_resistance_icon.png";
import attackSpeed_icon from "../assets/stat_icons/Attack_speed_icon.png";
import abilityHaste_icon from "../assets/stat_icons/Cooldown_reduction_icon.png";
import criticalStrike_icon from "../assets/stat_icons/Critical_strike_chance_icon.png";
import movementSpeed_icon from "../assets/stat_icons/Movement_speed_icon.png";

const ActivePlayerStats = ({ playerStats }) => {
    const {
        attackDamage,
        abilityPower,
        armor,
        magicResist,
        attackSpeed,
        abilityHaste,
        critChance,
        moveSpeed,
    } = playerStats;

    return (
        <Wrapper>
            {/* MAIN STATS */}
            {/* Attack Damage */}
            <div className="attackDamage stat">
                <img
                    src={attackDamage_icon}
                    alt="attack damage icon"
                    className="stat-icon"
                />
                {attackDamage.toFixed(0)}
            </div>
            {/* END Attack Damage */}

            {/* Ability Power */}
            <div className="abilityPower stat">
                <img
                    src={abilityPower_icon}
                    alt="ability power icon"
                    className="stat-icon"
                />
                {abilityPower.toFixed(0)}
            </div>
            {/* END Ability Power */}

            {/* Armor */}
            <div className="armor stat">
                <img src={armor_icon} alt="armor icon" className="stat-icon" />
                {armor.toFixed(0)}
            </div>
            {/* END Armor */}

            {/* Magic Resist */}
            <div className="magicResist stat">
                <img
                    src={magicResist_icon}
                    alt="magic resist icon"
                    className="stat-icon"
                />
                {magicResist.toFixed(0)}
            </div>
            {/* END Magic Resist */}

            {/* Attack Speed */}
            <div className="attackSpeed stat">
                <img
                    src={attackSpeed_icon}
                    alt="attack damage icon"
                    className="stat-icon"
                />
                {attackSpeed.toFixed(2)}
            </div>
            {/* END Attack Speed */}

            {/* Ability Haste */}
            <div className="abilityHaste stat">
                <img
                    src={abilityHaste_icon}
                    alt="attack damage icon"
                    className="stat-icon"
                />
                {abilityHaste.toFixed(0)}
            </div>
            {/* END Ability Haste */}

            {/* Critical Strike Chance */}
            <div className="criticalStrikeChance stat">
                <img
                    src={criticalStrike_icon}
                    alt="critical strike chance icon"
                    className="stat-icon"
                />
                {critChance.toFixed(0)}
            </div>
            {/* END Critical Strike Chance */}

            {/* Movement Speed */}
            <div className="movementSpeed stat">
                <img
                    src={movementSpeed_icon}
                    alt="movement speed icon"
                    className="stat-icon"
                />
                {moveSpeed.toFixed(0)}
            </div>
            {/* END Movement Speed */}
            {/* END MAIN STATS */}
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 90%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 15px;
    row-gap: 4px;

    .stat {
        display: flex;
        color: white;
    }

    .stat-icon {
        margin-right: 5px;
    }
`;

export default ActivePlayerStats;
