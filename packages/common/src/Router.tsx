import { useContext } from "react"
import * as React from "react";
import { observer } from "mobx-react-lite";
import { RouterStoreContext } from "./stores/RouterStore"
import { Home } from "./modules/Home";
import { Other } from "./modules/Other"

export const Router = observer(() => {
    const routerStore = useContext(RouterStoreContext)

    return routerStore.screen === "Home" ? (
        <Home />
    ) : (
        <Other />
    );
});