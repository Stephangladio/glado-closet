import React from "react";

import style from "./style.module.css";

const Section = (props) => {
    const { centre = false, children, className = false } = props;

    const getClassName = () => {
        if (style[className]) {
            return style[className];
        }

        return className;
    };

    return (
        <div
            className={`${style.section}${centre === true ? ` ${style.centre}` : ""}`}
        >
            <div className={`${style.c} ${getClassName()}`}>{children}</div>
        </div>
    );
};

export default Section;
