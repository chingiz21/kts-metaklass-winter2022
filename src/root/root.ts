import GitHubStore from '../store/GithubStore/GitHubStore';

const gitHubStore = new GitHubStore();

const EXAMPLE_ORGANIZATION = 'kubernetes';

gitHubStore.getOrganizationReposList({
  organizationName: EXAMPLE_ORGANIZATION
})
  .then(result => {
    console.log(result); 
  })
