import React, { useEffect, useState } from "react";
import { Switch } from "react-router-dom";
import {
    useLocation,
} from "react-router-dom";
import PageLoading from "./components/Share/PageLoading";

const CustomSwitch = ({ progress, setProgress, children }) => {
    const { pathname } = useLocation();

    useEffect(() => {
        setTimeout(() => {
            setProgress(false)
        }, 1350)
    }, [pathname])

    return (
        <>
            {progress && <PageLoading />}
            <Switch>{children}</Switch>
        </>
    );
};

export default CustomSwitch;