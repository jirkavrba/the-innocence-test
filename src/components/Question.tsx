import { FC } from "react";
import { AnsweredQuestionData } from "../types";

interface QuestionProps {
    question: AnsweredQuestionData,
    setAnswer: (answer: boolean) => void
}

const Question: FC<QuestionProps> = ({question, setAnswer}: QuestionProps) => {
    const toggle = () => setAnswer(!question.answer);
    const color = question.answer 
        ? "border-blue-500 text-blue-900"
        : "border-gray-200"


    return (
        <figure className={`${color} select-none border-2 font-bold p-5 rounded-xl flex flex-row items-center justify-between cursor-pointer transition hover:shadow-lg`} onClick={() => toggle()}>
            <figcaption>
                { question.text }
            </figcaption>

            <div className={`transition transform ${question.answer ? "scale-150" : ""} ml-5`}>
                { question.emoji }
            </div>
        </figure>
    );
};

export default Question;