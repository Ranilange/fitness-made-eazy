import QuizButton from "../QuizButton";
import React from "react";
import QuizTemplate from "../QuizTemplate";
import Navbar from "../../../core/Navbar/Navbar";
import Footer from "../../../core/Footer/Footer";

function QuestionFive() {
  const questions = [
    { text: "Very healthy lifestyle" },
    { text: "Healthy lifestyle" },
    { text: "Minor health problems" },
    { text: "Major health problems" },
    { text: "Dead" },
  ];
  return (
    <div>
      <Navbar />
      <QuizTemplate
        title="Health and Lifestyle"
        buttonLinkTo={"/quizAnswer"}
        questions={questions}
      />
      <Footer />
    </div>
  );
}
export default QuestionFive;
