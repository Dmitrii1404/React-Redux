import React, {useEffect} from 'react';
import './App.css';
import {useAppDispatch, useAppSelector} from "./hooks/redux";
import {fetchUsers} from "./store/reducers/ActionCreators";
import PostContainer from "./components/PostContainer";

function App() {

    // Тут демонстрация работы с обычным React Redux:
    // const dispatch = useAppDispatch();
    // const {users, isLoading, error} = useAppSelector(state => state.userReducer);
    //
    // useEffect(() => {
    //     dispatch(fetchUsers());
    // }, [])

    return (
        <div className="App">

            {/*Для работы с обычным React Redux:*/}
            {/*{isLoading && <h1>Идет загрузка...</h1>}*/}
            {/*{error && <h1>{error}</h1>}*/}
            {/*{JSON.stringify(users, null, 2)}*/}


            {/*Тут уже используется RTK Query:*/}
            <PostContainer />
        </div>
    );
}

export default App;
