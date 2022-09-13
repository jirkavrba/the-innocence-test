import { FC, useEffect, useState } from "react";
import { AnsweredQuestionData, QuestionData } from "../types";
import source from "../questions.json";
import Header from "./Header";
import Test from "./Test";

const App: FC = () => {
  const [questions, setQuestions] = useState<Array<AnsweredQuestionData>>([]);
  const [completed, setCompleted] = useState<boolean>(false);

  // Begin with every answer unchecked
  useEffect(() => setQuestions(source.map(question => ({ ...question, answer: false }))), []);

  const setAnswer = (index: number, answer: boolean = true) => {
    const updated = questions.map((question: AnsweredQuestionData) => {
      if (question.index !== index) {
        return question;
      }

      return { ...question, answer: answer };
    });

    setQuestions(updated);
  };

  return (
    <div className="container mx-auto">
      <Header />
      <Test questions={questions} setAnswer={setAnswer}/>
    </div>
  );

}

export default App;
