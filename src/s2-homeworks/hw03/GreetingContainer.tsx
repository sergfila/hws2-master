import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from './HW3'

type GreetingContainerPropsType = {
    users: UserType[]
    addUserCallback: (name: string) => void
}

export const pureAddUser = (name: string, setError: (name: string) => void,
                            setName: React.Dispatch<React.SetStateAction<string>>, addUserCallback: (name: string) => void) => {
    return name.trim() !== ''
        ? (addUserCallback(name.trim()), setName(''))
        : setError('Ошибка! Введите имя!');
}

export const pureOnBlur = (name: string, setError: (name: string) => void) => { // если имя пустое - показать ошибку
    return name.trim() === '' ? setError('Ошибка! Введите имя!') : null
}

export const pureOnEnter = (e: KeyboardEvent<HTMLInputElement>, addUser: () => void) => e.key === 'Enter' ? addUser() : null

const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
                                                                     users,
                                                                     addUserCallback,
                                                                 }) => {
    // деструктуризация пропсов
    const [name, setName] = useState<string>('')
    const [error, setError] = useState<string>('')

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.currentTarget.value)
        setName(e.currentTarget.value)

        error && setError('')
    }
    const addUser = () => {
        pureAddUser(name, setError, setName, addUserCallback)
    }

    const onBlur = () => {
        pureOnBlur(name, setError)
    }

    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        pureOnEnter(e, addUser)
    }

    let lastUserName = '';
    if (users.length > 0) {
        const lastUser = users[users.length - 1];
        if (lastUser.name) {
            lastUserName = lastUser.name;
        }
    }
    const totalUsers = users.length;


    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}
        />
    )
}

export default GreetingContainer
