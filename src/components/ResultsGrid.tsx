import { FC } from "react";
import { AnsweredQuestionData } from "../types";
import Twemoji from "react-twemoji";

interface ResultsGridProps {
    answers: Array<AnsweredQuestionData>
};

const ResultsGrid: FC<ResultsGridProps> = ({ answers }) => {
    return (
        <div className="flex flex-col items-center justify-center mt-10">
            <div className="grid grid-cols-10 gap-3 lg:gap-5 bg-neutral-900 p-4 rounded-2xl">
                {
                    answers.map((answer, index) => {
                        return <div key={index} className={`text-xl ${answer.answer ? "" : "opacity-25 filter grayscale"}`}>
                            <Twemoji options={{ className: "w-4 h-4 xl:w-8 xl:h-8" }}>
                                {answer.emoji}
                            </Twemoji>
                        </div>;
                    })
                }
            </div>
            <div className="font-mono text-sm font-bold text-neutral-700 mt-5">https://the-innocence-test.vrba.dev</div>
        </div>
    )
};

export default ResultsGrid;