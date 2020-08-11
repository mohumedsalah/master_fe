import React, { useEffect, useState } from "react";
import axiosBaseAuth from "../../../shared/axiosBaseAuth";

import SingleQuestion from "./singleQuestion/singleQuestion";
import Button from "../../../components/Button/Button";
import { buttonNames } from "../../../constant";
import "./takeQuiz.css";
import { toast, ToastContainer } from "react-toastify";

export default function TakeQuiz({ history }) {
  const [allQuestion, setAllQuestion] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentQuestionInx, setCurrentInx] = useState(0);

  useEffect(() => {
    axiosBaseAuth
      .get("/api/question/random-question")
      .then((res) => {
        const questionDB = res.data;
        setAllQuestion(questionDB);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, []);

  const setAnswer = (answerId) => {
    setAllQuestion((old) => {
      const newQuestions = [...old];
      newQuestions[currentQuestionInx].answer = answerId;
      return newQuestions;
    });
  };

  const submitQuiz = () => {
    const questionTo = [...allQuestion];
    for (let i = 0; i < questionTo.length; i++) {
      const question = questionTo[i];
      if (!question.answer) {
        toast.error("please answer over all question");
        return;
      }
    }

    const answers = questionTo.map((el) => {
      return { answer: el.answer, question: el._id };
    });
    axiosBaseAuth.post("/api/question/take-quiz", { answers }).then((res) => {
      toast.success("you sumbit your task success");
      history.push("/site");
    });
  };

  return loading ? (
    "loading"
  ) : allQuestion.length === 0 ? (
    "No provided quesiton"
  ) : (
    <>
      <div className="quiz-container">
        <div>
          <h2>
            Question # {currentQuestionInx + 1} from {allQuestion.length}{" "}
          </h2>
          <SingleQuestion
            quesiton={allQuestion[currentQuestionInx]}
            setAnswer={setAnswer}
          />
          <div className="action-button">
            <Button
              type={buttonNames.BTN_SECONDARY}
              disabled={currentQuestionInx - 1 < 0}
              onClick={() => {
                setCurrentInx((old) => {
                  return old - 1 < 0 ? 0 : old - 1;
                });
              }}
            >
              Back
            </Button>
            <Button
              type={buttonNames.BTN_SECONDARY}
              disabled={currentQuestionInx + 1 >= allQuestion.length}
              onClick={() => {
                setCurrentInx((old) => {
                  return old + 1 >= allQuestion.length
                    ? allQuestion.length - 1
                    : old + 1;
                });
              }}
            >
              Next
            </Button>

            {currentQuestionInx === allQuestion.length - 1 ? (
              <Button
                type={buttonNames.BTN_PRIMARY}
                onClick={() => {
                  submitQuiz();
                }}
              >
                Submit
              </Button>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <ToastContainer autoClose={2000} />
    </>
  );
}
