import {AppDispatch} from "../store";
import axios from "axios";
import {IUser} from "../../models/IUser";
import {userSlice} from "./UserSlice";
import {createAsyncThunk} from "@reduxjs/toolkit";


// export const fetchUsers = () => async (dispatch: AppDispatch) => {
//     try {
//         dispatch(userSlice.actions.usersFetching());
//         const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
//         dispatch(userSlice.actions.usersFetchingSuccess(response.data));
//     } catch (error) {
//         // @ts-ignore
//         dispatch(userSlice.actions.usersFetchingError(error.message));
//     }
// }

export const fetchUsers = createAsyncThunk<
    IUser[],                // Return type
    void,                   // Arg type
    { rejectValue: string } // здесь говорим, что в rejected payload будет string
>(
    'user/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue("Не удалось загрузить пользователей");
        }
    }
)