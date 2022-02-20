import './App.css';
import { ChangeEvent, ChangeEventHandler, FormEventHandler, useEffect, useState, MouseEventHandler } from 'react';
import '../root/root';
import Input from '@components/Input'
import SearchButton from '@components/SearchButton'
import GithubStore from 'src/store/GithubStore';
import SearchIcon from '@components/SearchIcon';
import StarIcon from '@components/StarIcon';
import GithubReposPage from '@pages/GithubReposPage';
import GitHubStore from '../store/GithubStore/GitHubStore';
import Loader from '@components/Loader';
import { EventType } from '@testing-library/react';
import { Button } from 'antd';
import RepoBranchesDrawer from '@components/RepoBranchesDrawer';


const App = () => {
    const [tile, setTile] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [disabled, setDisabled] = useState(false);
    const [inputValue, setinputValue] = useState('');

    const handleInput: ChangeEventHandler<HTMLInputElement> = (e) => {
        setinputValue(e.target.value);
    }

    const handleClick = (e: React.MouseEvent) => {
        setDisabled(true);
        const gitHubStore = new GitHubStore();
        const ORGANIZATION_NAME = inputValue;

        gitHubStore.getOrganizationReposList({
            organizationName: ORGANIZATION_NAME
        })
            .then(result => {
                setTile(result.data);
                setDisabled(false);
            })
    }

    useEffect(() => {
        const gitHubStore = new GitHubStore();
        const ORGANIZATION_NAME = 'adobe';

        gitHubStore.getOrganizationReposList({
            organizationName: ORGANIZATION_NAME
        })
            .then(result => {
                setTile(result.data);
                setIsLoading(false);
            })
    }, []);



    if (isLoading) {
        return <Loader />
    } else {
        return (
            <div className="wrapper">
                <div className="wrapper__header">
                    <Input onChange={handleInput} value={inputValue} placeholder={"Введите название организации"} />
                    <SearchButton onClick={handleClick} disabled={disabled}>
                        <SearchIcon />
                    </SearchButton>
                </div>
                <GithubReposPage tile={tile} avatar={'/images/avatar2.png'}>
                    <StarIcon />
                </GithubReposPage>
            </div >

        )
    }
};

export default App;
