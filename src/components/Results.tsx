import { FC } from "react";
import { AnsweredQuestionData } from "../types"

interface ResultsProps {
    answers: Array<AnsweredQuestionData>
}

// Taken from the original innocence test
const groups: Array<ResultGroup> = [
    {
        threshold: 100,
        title: "Completionist",
        description: "We love your dedication. You are a (wo)man of focus, commitment and sheer fucking will. Please submit your run to speedrun.com."
    },
    {
        threshold: 81,
        title: "Devil Child",
        description: "Idk what you're doing on the weekends, but all the more power to you. Lucifer would be proud."
    },
    {
        threshold: 66,
        title: "Heathen",
        description: "You like to have a good time, but know when to reign yourself in. good for you. just don't make too many bad choices."
    },
    {
        threshold: 56,
        title: "Corrupted",
        description: "You're probably either in your 20s or a really rebellious teenager. whichever way, you seem like a good time. come to our rager this weekend?"
    },
    {
        threshold: 46,
        title: "Baddie",
        description: "You're the most fun, but my mom would for sure let me hang out with you still. you've managed to find that sweet spot we all look for — teach us your ways."
    },
    {
        threshold: 34,
        title: "Wild Child",
        description: "You are the happy medium - you checked both yes and no on this list, but you definitely know how to have fun. we can't wait to see where you'll be in a few years"
    },
    {
        threshold: 26,
        title: "Rebel",
        description: "You're getting there, but you're definitely just beginning to experiment with your wild half. welcome to the dark side, love, it's a fun place to be."
    },
    {
        threshold: 16,
        title: "Sweetheart",
        description: "You're the mom friend, which is great because everyone needs one. speaking of, can you come over this weekend? in all seriousness, though, don't be afraid to have your own fun sometimes, too."
    },
    {
        threshold: 11,
        title: "Dream Kid",
        description: "You know when to bend the rules, but I'd be shocked if you'd ever actually broken any. good for you, your record is probably cleaner than ours."
    },
    {
        threshold: 6,
        title: "Innocent",
        description: "You definitely experiment, but your heart is overall Pure(TM). Your mom is so proud of you right now!"
    },
    {
        threshold: 1,
        title: "Angel",
        description: "You're the friend that my parents would always let me hang out with and never ask any questions about it. fix your halo, honey, and keep up the good work."
    },
    {
        threshold: 0,
        title: "Theoretical Computer Science student",
        description: "You don’t contribute anything to the society. Just be alone! Stop trying. NOBODY LIKES YOU!"
    }
];

interface ResultGroup {
    threshold: number,
    title: string,
    description: string
}

const Results: FC<ResultsProps> = ({ answers }: ResultsProps) => {
    const total = answers.reduce((previous, current) => previous + current.weight, 0);
    const score = Math.round((answers.filter(answer => answer.answer).reduce((previous, current) => previous + current.weight, 0) / total) * 100);
    const group = groups.find(group => group.threshold <= score)!;

    return (
        <div className="text-center my-10">
            <span className="uppercase text-sm tracking-widest font-bold text-gray-400">Your score &mdash; {score}</span>
            <h1 className="text-6xl text-fuchsia-500 font-black mt-5">{group.title}</h1>
            <p className="w-full font-bold sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 mx-auto my-5 text-neutral-700">
                {group.description}
            </p>
        </div>
    );
};

export default Results;