import { ApiResponse } from '../../shared/store/ApiStore/types';
import { ReactChild } from 'react';
export type GetOrganizationReposListParams = {
    organizationName: string,
    repoName?: string
};

export type RepoItem = {
    id: number,
    name: string,
    svn_url: string,
    owner: {
        login: string
    },
    stargazers_count: string,
    updated_at: string,
    children: ReactChild
};

export interface IGitHubStore {
    getOrganizationReposList(params: GetOrganizationReposListParams): Promise<ApiResponse<RepoItem[], any>>;
}