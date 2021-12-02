import React from 'react'
import s from "./user.module.css"
import { useSelector } from 'react-redux'
import { AppRootStateType } from '../store/store'
import DeleteModal from './DeleteModal';
import EditModal from './EditModal';

type propsType = {
    id: number
}

const User: React.FC<propsType> = props => {

    const {
        id
    } = props

    let user = useSelector<AppRootStateType, any>(state => state.test.users
        .find(u => u.id === id)
    )

    return (
        <div className={`${s.container} ${user.isEdit && s.bold}`}>
            <div className={s.resultTable}>{user.name}</div>
            <div className={s.resultTable}>{user.email}</div>
            <div className={s.resultTable}>{user.website}</div>
            <div className={s.resultTable}>{user.company.name}</div>
            <div className={s.resultTable}><EditModal id={user.id}/></div>
            <div className={s.resultTable}><DeleteModal id={user.id}/></div>
        </div>
    )
}

export default User