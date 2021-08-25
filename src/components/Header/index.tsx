import Header from "./Header";

import { connect } from "react-redux";

const mapStateToProps = (state: any) => ({
  user: state.user.data,
});

export default connect(mapStateToProps, null)(Header);
