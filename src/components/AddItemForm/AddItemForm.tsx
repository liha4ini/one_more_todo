import React, {FC, useState} from 'react';
import {MultiInput} from "../MultiInput/MultiInput";
import {MultiButton} from "../MultiButton/MultiButton";


type AddItemFormPropsType = {
    callBack: (newTitle: string) => void
}

export const AddItemForm: FC<AddItemFormPropsType> = (props) => {

    const [inputValue, setInputValue] = useState('')
    const [error, setError] = useState<string | null>(null)

    const addTaskHandler = () => {
        if (inputValue.trim() !== '') {
            props.callBack(inputValue)
            setInputValue('')
        } else {
            setError('Title is required')
        }

    }

    const onEnterHandler = () => {
        props.callBack(inputValue)
    }

    return (
        <>
            <MultiInput
                inputValue={inputValue}
                setInputValue={setInputValue}
                // inputClasses={error ? 'error' : 'input'}
                inputClasses={'input'}
                callBack={onEnterHandler}
                placeholder={'Add a new task'}
            />
            {/*{error && <div className={'error-message'}>{error}</div>}*/}
            <MultiButton
                callBack={addTaskHandler}
                className={''}
            >
                <span>Add</span>
            </MultiButton>
        </>
    );
};
