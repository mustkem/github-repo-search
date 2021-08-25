import { Link } from "react-router-dom";

type HeaderProps = {
  user: any;
};

function Header({ user }: HeaderProps) {
  return (
    <header className="header">
      <div className="container">
        <h2>Super Awesome Search Portal</h2>
        <div className="flex justify-between">
          <Link to="/">Home</Link>
          {user?.name && (
            <span className="flex justify-center align-center">
              Hello {user.name}
            </span>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
