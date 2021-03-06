import React from 'react';
import { Link } from 'react-router-dom';

function ProfileDesktop(props) {
  return (
    <div className="w-100 w-25-ns fl pa2 dn dib-m dib-l" id="section-2">
      <div>
        <img
          src={props.profileImage}
          className="h3 w3 br-100"
          id="avatar-image"
          alt=""
        />
      </div>
      <p className="f4">
        <span id="heading-name">{props.name}</span>
        <br />
        <span className="f6 gray">{props.username}</span>
      </p>
      <p className="lead">
        <a
          className="pointer f6 link dim ph2 pv1 mb2 dib white bg-black b--black mr2"
          id="signout-button"
          onClick={props.logout}
        >
          Logout
        </a>
        <Link
          to="/settings"
          className="f6 link dim ph2 pv1 mb2 dib white bg-black b--black"
        >
          Settings
        </Link>
      </p>
    </div>
  );
}

export default ProfileDesktop;
