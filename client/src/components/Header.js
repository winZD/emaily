import React from "react";
import { connect, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Payments from "./Payments";

const Header = (props) => {
  const renderContent = () => {
    switch (props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Login With Google</a>
          </li>
        );
      default:
        return [
          <li key={"1"}>
            <Payments />
          </li>,
          <li
            key={"2"}
            style={{ margin: "0 10px" }}
          >{`Credits: ${props.auth.credits}`}</li>,
          <li key={"3"}>
            <a href="/api/logout">Logout</a>
          </li>,
        ];
    }
  };

  console.log("Props: ", props);
  return (
    <nav>
      <div className="nav-wrapper">
        <Link to={props.auth ? "/surveys" : "/"} className="brand-logo">
          Emaily
        </Link>
        <ul id="nav-mobile" className="right">
          {renderContent()}
        </ul>
      </div>
    </nav>
  );
};
const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps)(Header);

/**
 class Header extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a className="brand-logo">Emaily</a>
          <ul id="nav-mobile" className="right">
            <li>
              <a>Login With Google</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
} 
 
 */
