import React from "react";
import { Link as Anchor } from "react-router-dom";

import icons from "../../helper/icons";

const Link = ({
    submit,
    disabled,
    children,
    href,
    className,
    fetching,
    id,
}) => {
    if (fetching === true) {
        return (
            <div id={id} className={className}>
                <i className={icons.spinner}></i>
            </div>
        );
    }

    if (disabled === true) {
        return (
            <div id={id} className={className}>
                {children}
            </div>
        );
    }

    if (submit === true) {
        return (
            <button type="submit" id={id} className={className}>
                {children}
            </button>
        );
    }

    if (href) {
        return (
            <Anchor to={href} id={id} className={className}>
                {children}
            </Anchor>
        );
    }

    return (
        <button type="button" id={id} className={className}>
            {children}
        </button>
    );
};

export default Link;
