import React, {useEffect} from 'react';
import s from './App.module.css';
import {fetchUsersTC, usersType} from "./store/testReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from './store/store';
import User from './components/User';
import AddModal from './components/AddModal';
import Search from "./components/Search";

function App() {
     debugger
    const dispatch = useDispatch()
    let users = useSelector<AppRootStateType, Array<usersType>>(state => state.test.users)

    useEffect(() => {
        dispatch(fetchUsersTC())
    }, [])

    const user = users.map(u => u.isSearch && <User key={u.id} id={u.id}/>)

    return (
        <div>
            <div className={s.header}>
                <AddModal/>
                <Search/>
            </div>
            <div className={s.container}>
                <div className={s.headerTable}>Name</div>
                <div className={s.headerTable}>Email</div>
                <div className={s.headerTable}>Website</div>
                <div className={s.headerTable}>Company Name</div>
                <div className={s.headerTable}>Edit</div>
                <div className={s.headerTable}>Delete</div>
            </div>
            <div>
                {user}
            </div>
        </div>
    );
}

export default App;
