import type { BasicPropsWithChildren } from "../types/interfaces";


const BaseContainer: React.FC<BasicPropsWithChildren> = ({ cssClasses, children }) => {
    return (
        <div className={cssClasses || undefined}>
            {children}
        </div>
    );
}

export default BaseContainer;