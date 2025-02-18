import configureStore from "@reduxjs/toolkit/configureStore"


export const makeStore = () => {
    return configureStore({
        reducer: {}
    })
}