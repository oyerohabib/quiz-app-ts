import React, { useState, useEffect } from "react";
import QuestionCard from "./components/QuestionCard";
import { fetchQuizQuestion, Difficulty, QuestionState } from "./API";
import { GlobalStyle, Wrapper } from "./App.styles";

const TOTAL_QUESTION = 5;

export type AnswerObject = {
  question: string;
  userAnswer: string;
  isCorrect: boolean;
  correctAnswer: string;
};

const App = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [gameOver, setGameOver] = useState(true);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    console.log(questions);
  }, [questions]);

  const startQuiz = async () => {
    setLoading(true);
    setGameOver(false);
    const newQuestions = await fetchQuizQuestion(
      TOTAL_QUESTION,
      Difficulty.EASY,
    );
    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setQuestionNumber(0);
    setLoading(false);
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      // get user answer
      const userAnswer = e.currentTarget.value;
      // check user answer against correct answer
      const isCorrect = questions[questionNumber].correct_answer === userAnswer;
      // add score if answer is correct
      if (isCorrect) setScore((prev) => prev + 1);
      // save answer in user answers Array
      const answerObject = {
        question: questions[questionNumber].question,
        userAnswer,
        isCorrect,
        correctAnswer: questions[questionNumber].correct_answer,
      };
      setUserAnswers((prev) => [...prev, answerObject]);
    }
  };

  const nextQuiz = () => {
    // move on to the next question if not last question
    const nextQuestion = questionNumber + 1;
    if (nextQuestion === TOTAL_QUESTION) {
      setGameOver(true);
    } else {
      setQuestionNumber(nextQuestion);
    }
  };

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <h1>REACT QUIZ</h1>
        {gameOver || userAnswers.length === TOTAL_QUESTION ? (
          <button className="start" onClick={startQuiz}>
            START QUIZ
          </button>
        ) : null}

        {!gameOver ? <p className="score">SCORE: {score}</p> : null}
        {loading && <p>LOADING QUESTIONS...</p>}
        {!loading && !gameOver && (
          <QuestionCard
            question={questions[questionNumber].question}
            answers={questions[questionNumber].answers}
            callback={checkAnswer}
            userAnswer={userAnswers ? userAnswers[questionNumber] : undefined}
            questionNumber={questionNumber + 1}
            totalQuestions={TOTAL_QUESTION}
          />
        )}
        {!loading &&
        !gameOver &&
        userAnswers.length === questionNumber + 1 &&
        questionNumber !== TOTAL_QUESTION - 1 ? (
          <button name="next" onClick={nextQuiz} className="end">
            NEXT QUESTION
          </button>
        ) : null}
      </Wrapper>
    </>
  );
};

export default App;
