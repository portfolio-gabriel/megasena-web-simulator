import { type BasicProps } from "../types/interfaces";
import megaSenaImg from "../../public/megasena.svg";

const Header: React.FC<BasicProps> = ({ title, cssClasses: logoClasses }) => {
    return (
        <header className="bg-green-800 p-4 w-full mx-auto shadow-lg mb-6 border-b-2 border-green-600">
            <div className="flex items-center pb-1">
                <img
                    src={megaSenaImg}
                    alt="Mega-Sena Logo"
                    className="w-12 h-12 mr-5"
                />
                <h1 className={logoClasses || undefined}>{title}</h1>
            </div>
        </header>
    );
};

export default Header;
