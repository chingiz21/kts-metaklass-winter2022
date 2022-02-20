import { MouseEventHandler, ReactChild, ReactFragment, ReactPortal } from 'react';
import './SearchButton.css';

type Props = {
    onClick: MouseEventHandler<HTMLButtonElement>,
    children: ReactChild,
    disabled: boolean
}

const SearchButton: React.FC<Props> = (props) => {
    return (
        <button className="search-button" onClick={props.onClick} disabled={props.disabled}>
            {props.children}
        </button>
    );
};

export default SearchButton; 