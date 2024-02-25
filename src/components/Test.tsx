import { FC, ReactNode } from "react";
import { AnsweredQuestionData } from "../types";
import Question from "./Question";

interface ButtonProps {
    onClick: () => void,
    children: ReactNode
}

const Button: FC<ButtonProps> = ({onClick, children}: ButtonProps) => {
    return (
        <button className="bg-fuchsia-500 text-white px-10 py-5 uppercase font-bold tracking-widest rounded-xl transition hover:bg-fuchsia-400 cursor-pointer" onClick={() => onClick()}>
            {children}
        </button>
    );
}

interface TestProps {
    questions: Array<AnsweredQuestionData>,
    setAnswer: (text: string, answer: boolean) => void,
    onComplete: () => void
}

const Test: FC<TestProps> = ({ questions, setAnswer, onComplete }: TestProps) => {
    return (
        <main className="flex flex-col items-center justify-center py-10">
            <section className="mx-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mb-10">
                {questions.map((question: AnsweredQuestionData, index: number) =>
                    <Question
                        key={index}
                        question={question}
                        setAnswer={(answer: boolean) => setAnswer(question.text, answer)}
                    />
                )}
            </section>

            <Button onClick={onComplete}>Show me the results</Button>
        </main>
    );
};

export default Test;