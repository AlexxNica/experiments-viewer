import React from 'react';


export default function(props) {
  return (
    <div className="sign-out-wrapper">
      <span>{props.email}</span>
      <span className="button" onClick={props.signOut}>Sign Out</span>
    </div>
  );
}