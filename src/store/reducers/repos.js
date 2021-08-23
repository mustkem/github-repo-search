import * as types from "../types";

const initialState = {
  data: [
    {
      id: 315274009,
      name: "shipcall",
      full_name: "Sarahmed28/shipcall",
      owner: {
        login: "Sarahmed28",
        id: 73057486,
        url: "https://api.github.com/users/Sarahmed28",
        html_url: "https://github.com/Sarahmed28",
        type: "User",
        site_admin: false,
      },
      html_url: "https://github.com/Sarahmed28/shipcall",
      description: null,
      url: "https://api.github.com/repos/Sarahmed28/shipcall",
      forks_url: "https://api.github.com/repos/Sarahmed28/shipcall/forks",
      subscription_url:
        "https://api.github.com/repos/Sarahmed28/shipcall/subscription",
      commits_url:
        "https://api.github.com/repos/Sarahmed28/shipcall/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/Sarahmed28/shipcall/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/Sarahmed28/shipcall/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/Sarahmed28/shipcall/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/Sarahmed28/shipcall/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/Sarahmed28/shipcall/compare/{base}...{head}",
      merges_url: "https://api.github.com/repos/Sarahmed28/shipcall/merges",
      archive_url:
        "https://api.github.com/repos/Sarahmed28/shipcall/{archive_format}{/ref}",
      downloads_url:
        "https://api.github.com/repos/Sarahmed28/shipcall/downloads",
      issues_url:
        "https://api.github.com/repos/Sarahmed28/shipcall/issues{/number}",
      pulls_url:
        "https://api.github.com/repos/Sarahmed28/shipcall/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/Sarahmed28/shipcall/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/Sarahmed28/shipcall/notifications{?since,all,participating}",
      git_url: "git://github.com/Sarahmed28/shipcall.git",
      homepage: null,
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
