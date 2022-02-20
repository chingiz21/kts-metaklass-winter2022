import "./RepoTile.css";
import Avatar from "@components/Avatar";
import { getDay, getMonth } from "@utils/formatTime";
import { ReactChild, ReactFragment, ReactPortal, SetStateAction, useEffect, useState } from 'react';
import { RepoItem } from '../../../../store/GithubStore/types';
import { EventType } from '@testing-library/react';
import GithubStore from "../../../../store/GithubStore";

const RepoTile = (props: { key: number; tile: any; avatar: string; children: ReactChild; onClick: React.MouseEventHandler<HTMLDivElement> }) => {
    const [name, setName] = useState('');

    const onClick = (repoName: SetStateAction<string>) => {
        setName(repoName);
        // console.log(repoName);
    }

    return (
        <div className="wrapper__tile" onClick={() => props.onClick(props.tile.name)} >
            <Avatar src={props.avatar} />
            <div className="tile__textarea">
                <div className="tile__textarea-title">{props.tile.name}</div>
                <div className="tile__textarea-author subtitle"><a href={props.tile.svn_url} className="tile__textarea-author_l">{props.tile.owner.login}</a></div>
                <div className="tile__textarea-meta subtitle">
                    {props.children}
                    <span className="meta__rating_t">{props.tile.stargazers_count}</span>
                    <div className="meta__date ">
                        Updated {getDay(props.tile.updated_at)} {getMonth(props.tile.updated_at)}
                    </div>
                </div>
            </div >
        </div >
    )
}

export default RepoTile;