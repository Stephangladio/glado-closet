import React from "react";

import style from "./style.module.css";

const Spacer = ({ size = 24 }) => {
    return <div className={style[`s${size}`] ? style[`s${size}`] : ""}></div>;
};

export default Spacer;
