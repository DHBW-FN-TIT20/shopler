import { createStore, createHook } from "react-sweet-state";

const UserStore = createStore({
    initialState: {
        username: "",
        token: ""
    },
    actions: {
        setToken:
            (newToken) =>
            ({setState}) => {
                setState({token: newToken});
            },
        setUsername:
            (newUsername) =>
            ({setState}) => {
                setState({username: newUsername});
            },
        reset:
            () =>
            ({setState}) => {
                setState({token: null, username: null});
            }
    }
});

export const useUserStore = createHook(UserStore);
