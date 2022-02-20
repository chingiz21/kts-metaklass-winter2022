import { Drawer } from "antd";
import { RepoItem } from '../../store/GithubStore/types';
import { MouseEventHandler, useEffect, useState } from 'react';
import { EventType } from "@testing-library/react";
import GitHubStore from '../../store/GithubStore';

const RepoBranchesDrawer = (props: { selected: boolean; visible: boolean; onClick: MouseEventHandler<HTMLDivElement>; onClose: MouseEventHandler<HTMLDivElement>; selectedRepo: RepoItem | null; }) => {
    // const [selected, setSelected] = useState(false);

    // const onClick = () => {
    //     setSelected(true);
    // }
    console.log(props.selected)

    useEffect(() => {
        // const gitHubStore = new GitHubStore();
        // const ORGANIZATION_NAME = 'kubernetes';
        // const reposName = props.selectedRepo.name;

        // gitHubStore.getOrganizationReposList({
        //     organizationName: ORGANIZATION_NAME,
        //     repoName: reposName
        // })
        //     .then(result => {
        //         console.log(result);
        //     })
        // console.log('useeffect on repobranch')
    }, []);

    return (
        <Drawer title="Repos Info" visible={props.visible} >
            <p>{props.selectedRepo?.name}</p>;
            <p>{props.selectedRepo?.owner.login}</p>;
            <p>{props.selectedRepo?.updated_at}</p>;
        </Drawer>
    )
}

export default RepoBranchesDrawer;