import { FC } from "react";
import { AnsweredQuestionData } from "../types";

interface QuestionProps {
    question: AnsweredQuestionData,
    setAnswer: (answer: boolean) => void
}

const Question: FC<QuestionProps> = ({question, setAnswer}: QuestionProps) => {
    return (
        <figure className="">
            <figcaption>{ question.text }</figcaption>
        </figure>
    );
};

export default Question;