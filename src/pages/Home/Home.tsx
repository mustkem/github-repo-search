import Search from "./Search";
import RepoItem from "../../components/RepoItem";

import Style from "./style/home.module.css";

type HomeProps = {
  addRepo: (payload: any) => void;
  deleteRepo: (payload: any) => void;
  repos: any;
};

const Home = ({ addRepo, deleteRepo, repos }: HomeProps): JSX.Element => {
  const handleDeleteRepo = (id: string) => {
    deleteRepo(id);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-xs-12">
          <Search addRepo={addRepo} repos={repos} />
        </div>
        <div className="col-md-6 col-xs-12">
          <h2 className={Style.title}>My selected Repos</h2>
          {repos.data?.length > 0 && (
            <ul className={Style.list}>
              {repos.data.map((item: any) => {
                if (!item) return null;
                return (
                  <RepoItem
                    key={item.id}
                    item={item}
                    deleteRepo={handleDeleteRepo}
                    canDelete
                  />
                );
              })}
            </ul>
          )}
          {repos.data?.length === 0 && (
            <div className="center">No Repo selected in your account. </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
