import React, {useState} from 'react'
import s from './addModal.module.css'
import {useFormik} from "formik";
import {useDispatch, useSelector} from 'react-redux'
import {Button, TextField} from '@material-ui/core'
import {AppRootStateType} from "../store/store";
import {addUserAC} from "../store/testReducer";

type FormikErrorType = {
    name?: string,
    username?: string,
    email?: string,
    addressStreet?: string,
    addressSuite?: string,
    addressCity?: string,
    addressZipcode?: string,
    addressGeoLat?: string,
    addressGeoLng?: string,
    phone?: string,
    website?: string,
    companyName?: string,
    companyCatchPhrase?: string,
    companyBs?: string
}

const AddModal: React.FC = () => {

    let count = useSelector<AppRootStateType, number>(state => state.test.count)

    const dispatch = useDispatch()
    const [show, setShow] = useState<boolean>(false);

    const formik = useFormik({
        initialValues: {
            name: '',
            username: '',
            email: '',
            addressStreet: '',
            addressSuite: '',
            addressCity: '',
            addressZipcode: '',
            addressGeoLat: '',
            addressGeoLng: '',
            phone: '',
            website: '',
            companyName: '',
            companyCatchPhrase: '',
            companyBs: ''
        },
        validate: (values) => {
            const errors: FormikErrorType = {};

            if (!values.name
                || !values.username
                || !values.email
                || !values.addressStreet
                || !values.addressSuite
                || !values.addressCity
                || !values.addressZipcode
                || !values.addressGeoLat
                || !values.addressGeoLng
                || !values.phone
                || !values.website
                || !values.companyName
                || !values.companyCatchPhrase
                || !values.companyBs) {
                errors.name = 'all fields must be filled'
            }

            return errors;
        },
        onSubmit: (values) => {

            const newUser = {
                id: count+1,
                name: values.name,
                username: values.username,
                email: values.email,
                address: {
                    street: values.addressStreet,
                    suite: values.addressSuite,
                    city: values.addressCity,
                    zipcode: values.addressZipcode,
                    geo: {
                        lat: values.addressGeoLat,
                        lng: values.addressGeoLng,
                    },
                },
                phone: values.phone,
                website: values.website,
                company: {
                    name: values.companyName,
                    catchPhrase: values.companyCatchPhrase,
                    bs: values.companyBs,
                },
                isEdit: false,
                isSearch: true,
            }
            dispatch(addUserAC(newUser))
            unShowModal()
        }
    })

    const showModal = () => {
        setShow(true);
    }

    const unShowModal = () => {
        setShow(false);
    }

    return (
        <div className={s.main}>
            <Button
                size={'small'}
                variant={'contained'}
                color={'primary'}
                onClick={showModal}
            >
                Add new user
            </Button>

            {show &&
            <>
                <div className={s.backgroundModal} onClick={unShowModal}></div>
                <form onSubmit={formik.handleSubmit} className={s.modalContainer}>
                    <div className={s.title}>Edit user</div>
                    <div className={s.inputContainer}>
                        <TextField
                            variant={'outlined'}
                            label={'Name'}
                            size={'small'}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            {...formik.getFieldProps('name')}
                        />

                        <TextField
                            variant={'outlined'}
                            label={'Username'}
                            size={'small'}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            {...formik.getFieldProps('username')}
                        />

                        <TextField
                            variant={'outlined'}
                            label={'Email'}
                            size={'small'}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            {...formik.getFieldProps('email')}
                        />

                        <TextField
                            variant={'outlined'}
                            label={'Address Street'}
                            size={'small'}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            {...formik.getFieldProps('addressStreet')}
                        />

                        <TextField
                            variant={'outlined'}
                            label={'Address Suite'}
                            size={'small'}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            {...formik.getFieldProps('addressSuite')}
                        />

                        <TextField
                            variant={'outlined'}
                            label={'Address City'}
                            size={'small'}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            {...formik.getFieldProps('addressCity')}
                        />

                        <TextField
                            variant={'outlined'}
                            label={'Address Zipcode'}
                            size={'small'}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            {...formik.getFieldProps('addressZipcode')}
                        />

                        <TextField
                            variant={'outlined'}
                            label={'Address Geo Lat'}
                            size={'small'}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            {...formik.getFieldProps('addressGeoLat')}
                        />

                        <TextField
                            variant={'outlined'}
                            label={'Address Geo Lng'}
                            size={'small'}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            {...formik.getFieldProps('addressGeoLng')}
                        />

                        <TextField
                            variant={'outlined'}
                            label={'Phone'}
                            size={'small'}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            {...formik.getFieldProps('phone')}
                        />

                        <TextField
                            variant={'outlined'}
                            label={'Website'}
                            size={'small'}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            {...formik.getFieldProps('website')}
                        />

                        <TextField
                            variant={'outlined'}
                            label={'Company Name'}
                            size={'small'}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            {...formik.getFieldProps('companyName')}
                        />

                        <TextField
                            variant={'outlined'}
                            label={'Company CatchPhrase'}
                            size={'small'}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            {...formik.getFieldProps('companyCatchPhrase')}
                        />

                        <TextField
                            variant={'outlined'}
                            label={'Company Bs'}
                            size={'small'}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            {...formik.getFieldProps('companyBs')}
                        />
                    </div>

                    <div className={s.error}>
                        {formik.errors.name}
                    </div>

                    <div className={s.buttonBlock}>
                        <Button
                            className={s.button}
                            variant={'contained'}
                            color={"primary"}
                            size={"small"}
                            type={'submit'}
                        >
                            Add
                        </Button>
                        <Button
                            className={s.button}
                            variant={'outlined'}
                            color={"primary"}
                            size={"small"}
                            onClick={unShowModal}
                        >
                            Cancel
                        </Button>
                    </div>
                </form>
            </>}
        </div>
    )
}
export default AddModal