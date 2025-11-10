import { SpeedInsights } from "@vercel/speed-insights/react";
import { useEffect } from "preact/hooks";
import Router from "preact-router";
import "./i18n.ts";
import { useTranslation } from "react-i18next";
import Home from "./components/Home/Home";
import ConfesionDeFe from "./components/ConfesionDeFe/ConfesionDeFe";

const App = () => {
    const { i18n, t } = useTranslation();
    useEffect(() => {
        i18n.changeLanguage(navigator.language);
        document.title = t("pageTitle");
    }, [i18n.language]);

    return (
        <div>
            <SpeedInsights />
            <Router>
                <Home path="/" />
                <ConfesionDeFe path="/confesion-de-fe" />
            </Router>
        </div>
    );
};

export default App;
