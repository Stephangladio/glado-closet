import React from "react";

import Link from "../../components/Link";
import Title from "../../components/Title";
import Spacer from "../../components/Spacer";
import Section from "../../components/Section";

import style from "./style.module.css";

const NotFound = () => {
    return (
        <Section centre={true}>
            <Title>Page Not Found</Title>
            <Spacer size={24} />
            <Link href={"/"} className={style.link}>
                Home
            </Link>
        </Section>
    );
};

export default NotFound;
