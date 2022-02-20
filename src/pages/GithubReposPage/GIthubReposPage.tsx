import StarIcon from '@components/StarIcon';
import RepoTile from './components/RepoTile';
import { RepoItem } from '../../store/GithubStore/types';
import { ReactChild, ReactFragment, useMemo, useState } from 'react';
import React from 'react';
import RepoBranchesDrawer from '@components/RepoBranchesDrawer';
import { EventType } from '@testing-library/react';
import { Button } from 'antd';

type RepoPage = {
    tile: any,
    avatar: string,
    children: ReactChild,
}

const GithubReposPage: React.FC<RepoPage> = (props) => {
    const [selected, setSelected] = useState(false);
    const [visible, setVisible] = useState(false);

    const onClickHandler: React.MouseEventHandler<HTMLDivElement> = () => {
        setVisible(true);
    }
    const onClose = () => setVisible(false);

    const repos = props.tile;

    return (
        repos.map((item: RepoItem) =>
            <React.Fragment key={item.id}>
                <RepoTile key={item.id} tile={item} avatar={props.avatar} onClick={onClickHandler}>
                    {props.children}
                </RepoTile>
            </React.Fragment>
        )
    );
};

export default GithubReposPage;