import { FC } from "react";
import { AnsweredQuestionData } from "../types";
import Question from "./Question";

interface TestProps {
    questions: Array<AnsweredQuestionData>,
    setAnswer: (index: number, answer: boolean) => void
}

const Test: FC<TestProps> = ({ questions, setAnswer }: TestProps) => {
    return (    
        <main className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {questions.map((question: AnsweredQuestionData) =>
                <Question
                    key={question.index}
                    question={question}
                    setAnswer={(answer: boolean) => setAnswer(question.index, answer)}
                />
            )}
        </main>
    );
};

export default Test;