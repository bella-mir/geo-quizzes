import React from "react";

export default function Profile(props) {
  return (
    <div>
      <h1>Profile</h1>
      <p>User: {props.email}</p>
      <h2>Results</h2>
      <h3>Indigenous peoples</h3>
      <p>The best score : X</p>
      <p>Other:</p>
      <ul>
        <li>score</li>
        <li>score</li>
        <li>score</li>
        <li>...</li>
      </ul>

      <h3>Regions</h3>
      <p>The best score : X</p>
      <p>Other:</p>
      <ul>
        <li>score</li>
        <li>score</li>
        <li>score</li>
        <li>...</li>
      </ul>
    </div>
  );
}
