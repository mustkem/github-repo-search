import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Home from "./Home";

import { addRepo, deleteRepo } from "../../store/actions";

const mapStateToProps = (state: any) => ({
  repos: state.repos,
});

const mapDispatchToProps = (dispatch: any) => ({
  ...bindActionCreators(
    {
      addRepo,
      deleteRepo,
    },
    dispatch
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
