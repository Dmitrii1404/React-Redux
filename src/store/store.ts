import {combineReducers, configureStore} from "@reduxjs/toolkit";
import userReducer from "./reducers/UserSlice"

// Для комбинации нескольких редюсеров в один
const rootReducer = combineReducers({
    userReducer
})

// Конфигурация redux-хранилища
export const setupStore = () => {
    return configureStore({
        reducer: rootReducer // Указываем редюсер
    })
}

export type RootState = ReturnType<typeof rootReducer> // Получаем типы
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']