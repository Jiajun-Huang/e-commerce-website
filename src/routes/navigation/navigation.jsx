import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";

import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import "./navigation.styles.scss";

import { UserContext } from "../../contexts/user.context";

import { signOutUser } from "../../utils/firebase/firebase.utils";

const Navigation = () => {
  // when sign in change the UserContext
  // when currentUser in UserContext will be update
  // any component that is listening UserContext will update
  // when the UserContext change, the component that listening the will rerun/ remount
  const { currentUser } = useContext(UserContext); //

  const signOutHandler = async () => {
    await signOutUser();
  };

  console.log(currentUser);
  return (
    <Fragment>
      <nav className="navigation">
        <Link to="/" className="logo-container">
          <CrownLogo></CrownLogo>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            //<span className="nav-link">{`${currentUser.displayName}`}</span>
            <span className="nav-link" onClick={signOutHandler}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
        </div>
      </nav>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
