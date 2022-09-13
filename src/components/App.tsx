import { FC, useEffect, useState } from "react";
import { AnsweredQuestionData, QuestionData } from "../types";
import source from "../questions.json";

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
    <>
      <ul>
        {questions.map((question: AnsweredQuestionData) => 
          <li key={question.index}>
            <input type="checkbox" onChange={(event) => setAnswer(question.index, event.target.checked)}/>
            {question.text}
            {question.answer ? " - checked" : ""}
          </li>
        )}
      </ul>
    </>
  );

}

export default App;
