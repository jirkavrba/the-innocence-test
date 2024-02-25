import { FC } from "react";

interface HeaderProps {
    displayIntro?: boolean
}

const Header: FC<HeaderProps> = ({ displayIntro = true }: HeaderProps) => {
    return (
        <header className="p-10">
            <h1 className="text-center text-4xl font-black text-white">The Innocence Test</h1>

            {displayIntro && <p className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 mx-auto my-5 text-neutral-500">
                The Rice Purity Test was made in the 80s.
                That means that it includes none of the quintessential 21st century rebellious activities (think sexting, fake IDs and tinder)
            </p>}

            {displayIntro && <p className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 mx-auto my-5 text-neutral-700">
                This website aims to provide a better, more polished version of <a href="https://theinnocencetest.com" target="_blank" className="underline hover:text-indigo-500">the original innocence test</a>,
                and everybody can help improve it further by contributing on <a href="https://github.com/jirkavrba/the-innocence-test" target="_blank" className="underline hover:text-indigo-500">Github</a>.
            </p>}
        </header>
    );
};

export default Header;