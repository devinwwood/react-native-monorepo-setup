import { observable } from "mobx";
import { createContext } from "react";

type Routes = "Home" | "Other";

class RouterStore {
    @observable screen: Routes = "Home";
}

export const RouterStoreContext = createContext(new RouterStore());