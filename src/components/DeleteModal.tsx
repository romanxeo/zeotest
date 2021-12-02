import React, {useState} from 'react'
import s from './deleteModal.module.css'
import {Button} from "@material-ui/core";
import {useDispatch} from "react-redux";
import { deleteUserAC } from '../store/testReducer';

type propsType = {
    id: number
}

const DeleteModal: React.FC<propsType> = props => {

    const {
        id
    } = props

    const dispatch = useDispatch()
    const [show, setShow] = useState(false);

    const showModal = () => {
        setShow(true);
    }

    const onClickYes = () => {
        setShow(false);
        dispatch(deleteUserAC(id))
    }

    const onClickNo = () => {
        setShow(false);
    }

    return (
        <div>
            <Button
                size={'small'}
                variant={'contained'}
                color={'secondary'}
                onClick={showModal}
            >
                Delete
            </Button>

            {show &&
            <>
                <div className={s.backgroundModal} onClick={onClickNo}></div>
                <div className={s.modalContainer}>
                    <div className={s.title}>Delete user?</div>
                    <div className={s.buttonBlock}>
                        <Button
                            className={s.button}
                            variant={'contained'}
                            color={"secondary"}
                            size={"small"}
                            onClick={onClickYes}
                        >
                            Delete
                        </Button>
                        <Button
                            className={s.button}
                            variant={'outlined'}
                            color={"primary"}
                            size={"small"}
                            onClick={onClickNo}
                        >
                            Cancel
                        </Button>
                    </div>
                </div>
            </>}
        </div>
    )
}

export default DeleteModal