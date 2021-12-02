import {Button, TextField} from '@material-ui/core'
import React, {ChangeEvent, useState} from 'react'
import {useDispatch} from "react-redux";
import { searchTextAC } from '../store/testReducer';
import s from './search.module.css'

const Search: React.FC = () => {

    const dispatch = useDispatch()
    const [searchText, setSearchText] = useState<string>('');

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchText(event.currentTarget.value)
    }

    const onClickSearch = () => {
        dispatch(searchTextAC(searchText))
    }

    const onClickClear = () => {
        setSearchText('')
        dispatch(searchTextAC(''))
    }

    return (
        <div className={s.container}>
            <span>Search in Name and Company Name: </span>
            <TextField
                value={searchText}
                onChange={onChange}
                variant={'outlined'}
                label={'Search'}
                size={'small'}
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <Button
                size={'small'}
                variant={'contained'}
                color={'primary'}
                onClick={onClickSearch}
            >
                Search
            </Button>
            <Button
                size={'small'}
                variant={'contained'}
                color={'secondary'}
                onClick={onClickClear}
            >
                Clear
            </Button>
        </div>
    )
}

export default Search