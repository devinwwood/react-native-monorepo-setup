import * as React from "react";
import { Text, View, Button } from "react-native";
import { observer } from "mobx-react-lite";
import { RouterStoreContext } from "../stores/RouterStore";
import { Router } from "../Router";

interface Props {}



export const Home: React.FC<Props> = observer(() => {
    const routerStore = React.useContext(RouterStoreContext)
    return(
        <View>
            <Text>Hello My Name is Devin</Text>
            <Button
            title="change pages"
            onPress={() => {
                routerStore.screen = "Other";
            }}
        />
        </View>
    );
});