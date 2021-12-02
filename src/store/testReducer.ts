import { testAPI } from "../api/api"

export const fetchUsersAC = (users: Array<any>) => {
    return {
        type: 'TEST/fetchUsers',
        users
    } as const
}

export const deleteUserAC = (id: number) => {
    return {
        type: 'TEST/deleteUser',
        id
    } as const
}

export const editUserAC = (editUser: usersType) => {
    return {
        type: 'TEST/editUser',
        editUser
    } as const
}

export const addUserAC = (newUser: usersType) => {
    return {
        type: 'TEST/addUser',
        newUser
    } as const
}

export const searchTextAC = (searchText: string) => {
    return {
        type: 'TEST/searchText',
        searchText
    } as const
}

export type fetchUsersAT = ReturnType<typeof fetchUsersAC>
export type deleteUserAT = ReturnType<typeof deleteUserAC>
export type editUserAT = ReturnType<typeof editUserAC>
export type addUserAT = ReturnType<typeof addUserAC>
export type searchTextAT = ReturnType<typeof searchTextAC>

export type actionType = fetchUsersAT | deleteUserAT | editUserAT | addUserAT | searchTextAT

export type geoType = {
    lat: string,
    lng: string,
}

export type addressType = {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: geoType,
}

export type companyType = {
    name: string,
    catchPhrase: string,
    bs: string,
}

export type usersType = {
    id: number,
    name: string,
    username: string,
    email: string,
    address: addressType,
    phone: string,
    website: string,
    company: companyType,
    isEdit: boolean,
    isSearch: boolean
}

type InitStateType = {
    users: Array<usersType>,
    count: number
}

export const initState: InitStateType = {
    users: [],
    count: 0
}

export const testReducer = (state: InitStateType = initState, action: actionType): InitStateType => {
    switch(action.type) {
        case 'TEST/fetchUsers': {
            let usersArr = action.users.map(u => {
                return {...u, isEdit: false, isSearch: true}
            })
            return {...state, users: usersArr, count: usersArr.length}
        }
        case 'TEST/deleteUser': {
            let usersArr = state.users.filter(u => u.id !== action.id)

            return {...state, users: usersArr}
        }
        case 'TEST/editUser': {
            let usersArr = state.users.map(u => u.id === action.editUser.id ? action.editUser : u)
            return {...state, users: usersArr}
        }
        case 'TEST/addUser': {
            let usersArr = [...state.users]
            usersArr.push(action.newUser)
            return {...state, users: usersArr, count: usersArr.length}
        }
        case 'TEST/searchText': {
            let usersArr = state.users.map(u => u.name.includes(action.searchText) || u.company.name.includes(action.searchText) ? {...u, isSearch: true} : {...u, isSearch: false})

            return {...state, users: usersArr}
        }
        default: {
            return state
        }
    }
}

//thunk
export const fetchUsersTC = () => {
    return (dispatch: any) => {
        testAPI.getResponse()
            .then(res => {
                dispatch(fetchUsersAC(res.data))
            })
            .catch(e => {
                alert('error')
            })
    }
}
