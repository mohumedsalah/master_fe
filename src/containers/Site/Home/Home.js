import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import axiosBaseAuth from "../../../shared/axiosBaseAuth";
import "./Home.css";

export default function Home() {
  const [allScores, setAllScores] = useState([]);
  useEffect(() => {
    axiosBaseAuth.get("/api/user/self-user-score").then((res) => {
      setAllScores(res.data);
      console.log(res.data);
    });
  }, []);
  return (
    <div className="home-container">
      <div>
        <Link to="/site/take-quiz"> Enroll Qutions </Link>
        <h1>Last Scores</h1>
        {allScores.map((el) => (
          <div className="score-item">
            <span>Score : {el.score}</span>
            <span>Take At : {moment(el.createdAt).format("DD/MM/YYYY")}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
