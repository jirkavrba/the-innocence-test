import { FC } from "react";
import { AnsweredQuestionData } from "../types";

interface QuestionProps {
    question: AnsweredQuestionData,
    setAnswer: (answer: boolean) => void
}

const Question: FC<QuestionProps> = ({ question, setAnswer }: QuestionProps) => {
    const toggle = () => setAnswer(!question.answer);
    const selected = question.answer

    const color = selected ? "border-pink-500 text-white bg-gradient-to-l from-transparent via-pink-900 to-fuchsia-900" : "border-neutral-800 text-gray-500";
    const emoji = selected ? "scale-[200%]" : "filter grayscale opacity-50";

    return (
        <figure className={`${color} relative select-none border-2 font-bold p-5 rounded-xl flex flex-row items-center justify-between cursor-pointer transition hover:shadow-lg`} onClick={() => toggle()}>
            <div>
                <figcaption>{question.text}</figcaption> 
                <span className="text-[0.5rem] text-gray-400 uppercase font-bold tracking-widest">
                    {[...new Array(question.weight)].map(i => "🌶️ ")}
                </span>
            </div>

            <div className={`${emoji} flex flex-row items-center justify-center transition transform w-10 h-10 rounded-full ml-5`}>
                {question.emoji}
            </div>
        </figure>
    );
};

export default Question;