import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <Link to="/site/take-quiz"> Enroll Qutions </Link>
      <h1>Last Scores</h1>
    </div>
  );
}
