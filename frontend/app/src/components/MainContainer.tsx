import type { BasicPropsWithChildren } from "../types/interfaces";

const MainContainer: React.FC<BasicPropsWithChildren> = ({ title, cssClasses, children }) => {
    return (
        <main className={cssClasses || undefined}>
            <h2 className="text-3xl text-center uppercase font-bold mb-4 text-green-800">{title}</h2>
            {children}
        </main>
    );
};

export default MainContainer;
