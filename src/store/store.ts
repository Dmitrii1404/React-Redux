import {combineReducers, configureStore} from "@reduxjs/toolkit";
import userReducer from "./reducers/UserSlice"
import {postAPI} from "../services/PostService";

// Для комбинации нескольких редюсеров в один
const rootReducer = combineReducers({
    userReducer,
    [postAPI.reducerPath]: postAPI.reducer,
})

// Конфигурация redux-хранилища
export const setupStore = () => {
    return configureStore({
        reducer: rootReducer, // Указываем редюсер
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(postAPI.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer> // Получаем типы
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']