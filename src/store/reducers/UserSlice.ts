import {IUser} from "../../models/IUser";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchUsers} from "./ActionCreators";


interface UserState {
    users: IUser[];
    isLoading: boolean;
    error: string;
}

const initialState: UserState = {
    users: [],
    isLoading: false,
    error: "",
}

// Slice - обертка для reducers
export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        // // Типа началась загрузка на сервер
        // usersFetching(state) {
        //     state.isLoading = true;
        // },
        //
        // // Типа получили массив пользователей
        // usersFetchingSuccess(state, action: PayloadAction<IUser[]>) {
        //     state.isLoading = false;
        //     state.error = '';
        //     state.users = action.payload;
        // },
        //
        // // Типа получили ошибку при загрузке
        // usersFetchingError(state, action: PayloadAction<string>) {
        //     state.isLoading = false;
        //     state.error = action.payload;
        // }
    },
    extraReducers: (builder) => {
        // fulfilled
        builder.addCase(fetchUsers.fulfilled, (state, action: PayloadAction<IUser[]>) => {
            state.isLoading = false;
            state.error = "";
            state.users = action.payload;
        });
        // pending
        builder.addCase(fetchUsers.pending, (state) => {
            state.isLoading = true;
        });
        // rejected
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload ?? "";
        });
    },
})

export default userSlice.reducer;