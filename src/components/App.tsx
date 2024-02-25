import { FC, useEffect, useState } from "react";
import { AnsweredQuestionData, QuestionData } from "../types";
import source from "../questions.json";
import Header from "./Header";
import Test from "./Test";
import Results from "./Results";

const App: FC = () => {
  const [questions, setQuestions] = useState<Array<AnsweredQuestionData>>([]);
  const [completed, setCompleted] = useState<boolean>(false);

  // Begin with every answer unchecked
  useEffect(() => setQuestions(source.map(question => ({ ...question, answer: false }))), []);

  const setAnswer = (text: string, answer: boolean = true) => {
    const updated = questions.map((question: AnsweredQuestionData) => {
      if (question.text !== text) {
        return question;
      }

      return { ...question, answer: answer };
    });

    setQuestions(updated);
  };

  return (
    <div className="container mx-auto">
      <Header displayIntro={!completed}/>
      {completed
        ? <Results answers={questions} />
        : <Test questions={questions} setAnswer={setAnswer} onComplete={() => setCompleted(true)}/>
      }
    </div>
  );

}

export default App;
