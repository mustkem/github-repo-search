import * as types from "../types";

const initialState = {
  data: [
    {
      id: 254747765,
      node_id: "MDEwOlJlcG9zaXRvcnkyNTQ3NDc3NjU=",
      name: "React-Flashcard-App",
      full_name: "WebDevSimplified/React-Flashcard-App",
      private: false,
      owner: {
        login: "WebDevSimplified",
        id: 39717099,
        node_id: "MDQ6VXNlcjM5NzE3MDk5",
        avatar_url: "https://avatars.githubusercontent.com/u/39717099?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/WebDevSimplified",
        html_url: "https://github.com/WebDevSimplified",
        followers_url:
          "https://api.github.com/users/WebDevSimplified/followers",
        following_url:
          "https://api.github.com/users/WebDevSimplified/following{/other_user}",
        gists_url:
          "https://api.github.com/users/WebDevSimplified/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/WebDevSimplified/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/WebDevSimplified/subscriptions",
        organizations_url: "https://api.github.com/users/WebDevSimplified/orgs",
        repos_url: "https://api.github.com/users/WebDevSimplified/repos",
        events_url:
          "https://api.github.com/users/WebDevSimplified/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/WebDevSimplified/received_events",
        type: "User",
        site_admin: false,
      },
      html_url: "https://github.com/WebDevSimplified/React-Flashcard-App",
      description: null,
      fork: false,
      url: "https://api.github.com/repos/WebDevSimplified/React-Flashcard-App",
      forks_url:
        "https://api.github.com/repos/WebDevSimplified/React-Flashcard-App/forks",
      keys_url:
        "https://api.github.com/repos/WebDevSimplified/React-Flashcard-App/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/WebDevSimplified/React-Flashcard-App/collaborators{/collaborator}",
      teams_url:
        "https://api.github.com/repos/WebDevSimplified/React-Flashcard-App/teams",
      hooks_url:
        "https://api.github.com/repos/WebDevSimplified/React-Flashcard-App/hooks",
      issue_events_url:
        "https://api.github.com/repos/WebDevSimplified/React-Flashcard-App/issues/events{/number}",
      events_url:
        "https://api.github.com/repos/WebDevSimplified/React-Flashcard-App/events",
      assignees_url:
        "https://api.github.com/repos/WebDevSimplified/React-Flashcard-App/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/WebDevSimplified/React-Flashcard-App/branches{/branch}",
      tags_url:
        "https://api.github.com/repos/WebDevSimplified/React-Flashcard-App/tags",
      blobs_url:
        "https://api.github.com/repos/WebDevSimplified/React-Flashcard-App/git/blobs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/WebDevSimplified/React-Flashcard-App/git/tags{/sha}",
      git_refs_url:
        "https://api.github.com/repos/WebDevSimplified/React-Flashcard-App/git/refs{/sha}",
      trees_url:
        "https://api.github.com/repos/WebDevSimplified/React-Flashcard-App/git/trees{/sha}",
      statuses_url:
        "https://api.github.com/repos/WebDevSimplified/React-Flashcard-App/statuses/{sha}",
      languages_url:
        "https://api.github.com/repos/WebDevSimplified/React-Flashcard-App/languages",
      stargazers_url:
        "https://api.github.com/repos/WebDevSimplified/React-Flashcard-App/stargazers",
      contributors_url:
        "https://api.github.com/repos/WebDevSimplified/React-Flashcard-App/contributors",
      subscribers_url:
        "https://api.github.com/repos/WebDevSimplified/React-Flashcard-App/subscribers",
      subscription_url:
        "https://api.github.com/repos/WebDevSimplified/React-Flashcard-App/subscription",
      commits_url:
        "https://api.github.com/repos/WebDevSimplified/React-Flashcard-App/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/WebDevSimplified/React-Flashcard-App/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/WebDevSimplified/React-Flashcard-App/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/WebDevSimplified/React-Flashcard-App/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/WebDevSimplified/React-Flashcard-App/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/WebDevSimplified/React-Flashcard-App/compare/{base}...{head}",
      merges_url:
        "https://api.github.com/repos/WebDevSimplified/React-Flashcard-App/merges",
      archive_url:
        "https://api.github.com/repos/WebDevSimplified/React-Flashcard-App/{archive_format}{/ref}",
      downloads_url:
        "https://api.github.com/repos/WebDevSimplified/React-Flashcard-App/downloads",
      issues_url:
        "https://api.github.com/repos/WebDevSimplified/React-Flashcard-App/issues{/number}",
      pulls_url:
        "https://api.github.com/repos/WebDevSimplified/React-Flashcard-App/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/WebDevSimplified/React-Flashcard-App/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/WebDevSimplified/React-Flashcard-App/notifications{?since,all,participating}",
      labels_url:
        "https://api.github.com/repos/WebDevSimplified/React-Flashcard-App/labels{/name}",
      releases_url:
        "https://api.github.com/repos/WebDevSimplified/React-Flashcard-App/releases{/id}",
      deployments_url:
        "https://api.github.com/repos/WebDevSimplified/React-Flashcard-App/deployments",
      created_at: "2020-04-10T22:23:29Z",
      updated_at: "2021-07-31T05:47:20Z",
      pushed_at: "2021-01-06T00:06:28Z",
      git_url: "git://github.com/WebDevSimplified/React-Flashcard-App.git",
      ssh_url: "git@github.com:WebDevSimplified/React-Flashcard-App.git",
      clone_url: "https://github.com/WebDevSimplified/React-Flashcard-App.git",
      svn_url: "https://github.com/WebDevSimplified/React-Flashcard-App",
      homepage: null,
      size: 356,
      stargazers_count: 49,
      watchers_count: 49,
      language: "JavaScript",
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      forks_count: 24,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 1,
      license: null,
      forks: 24,
      open_issues: 1,
      watchers: 49,
      default_branch: "master",
      permissions: {
        admin: false,
        maintain: false,
        push: false,
        triage: false,
        pull: true,
      },
      score: 1.0,
    },
  ],
};

const repos = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_REPO:
      return {
        ...state,
        data: [action.message, ...state.data],
      };
    case types.DELETE_REPO:
      return {
        ...state,
        data: [...state.data.filter((item) => item.id !== action.id)],
      };
    default:
      return state;
  }
};

export default repos;
