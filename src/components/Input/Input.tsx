import { FormEventHandler } from 'react';
import './Input.css';

type Props = {
    onChange: FormEventHandler<HTMLInputElement>,
    value: string,
    placeholder: string
}

const Input: React.FC<Props> = (props) => {
    return (
        <div className="header__search-wrapper">
            <input type="text" value={props.value} placeholder={props.placeholder} className="input__search-i" onChange={props.onChange} />
        </div>
    );
};

export default Input;