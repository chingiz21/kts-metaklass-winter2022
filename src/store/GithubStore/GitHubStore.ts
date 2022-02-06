import ApiStore from '../../shared/store/ApiStore';
import { GetOrganizationReposListParams, IGitHubStore, RepoItem} from "./types";
import { ApiResponse } from '../../shared/store/ApiStore/types';
import { HTTPMethod } from '../../shared/store/ApiStore/types';
import { StatusHTTP } from '../../shared/store/ApiStore/types';

export default class GitHubStore implements IGitHubStore {

    private readonly apiStore = new ApiStore('https://api.github.com/');

    async getOrganizationReposList(params: GetOrganizationReposListParams): Promise<ApiResponse<RepoItem[], any>> {
        
        return await this.apiStore.request({
            method: HTTPMethod.Get,
            endpoint: `orgs/${params.organizationName}/repos`,
            headers: {},
            data: {}
        });
    }
}