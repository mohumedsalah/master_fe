import React from "react";
import { Checkbox } from "@material-ui/core";
import "./singleQuesiton.css";

export default function SingleQuestion({ quesiton, setAnswer }) {
  return (
    <div className="single-question-container">
      <h3>{quesiton.content}</h3>
      {quesiton.choices.map((el) => {
        return (
          <div>
            <Checkbox
              checked={quesiton.answer === el._id}
              onChange={() => {
                setAnswer(el._id);
              }}
              name="checkedB"
              color="primary"
            />
            <span>{el.content}</span>
          </div>
        );
      })}
    </div>
  );
}
