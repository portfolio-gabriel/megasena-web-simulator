import type { HeaderPropsWithChildren } from "../types/interfaces";

const MainContainer: React.FC<HeaderPropsWithChildren> = ({ title, cssClasses, children }) => {
    return (
        <main className={cssClasses || undefined}>
            <h2 className="text-2xl text-center uppercase font-bold italic mb-4 text-green-800">{title}</h2>
            {children}
        </main>
    );
};

export default MainContainer;
