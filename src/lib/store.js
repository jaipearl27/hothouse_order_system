
import cartReducer from "./features/cart/cartSlice"
import authReducer from "./features/auth/authSlice"
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage"
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";

const persistConfig = {
    key: "persist",
    blacklist: ['cart.createYourOwnPizzaMAX_TOPPINGS'],
    storage,
}


const rootReducer = combineReducers({
    cart: cartReducer,
    auth: authReducer,
});

const makeConfiguredStore = () => {
    configureStore({
        reducer: rootReducer
    })
}

export const makeStore = () => {
    const isServer = typeof window === "undefined";
    if (isServer) {
        return makeConfiguredStore()
    }

    const persistedReducer = persistReducer(persistConfig, rootReducer)
    let store = configureStore({
        reducer: persistedReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: false,
            }),
    })
    store.__persistor = persistStore(store);
    return store;
}