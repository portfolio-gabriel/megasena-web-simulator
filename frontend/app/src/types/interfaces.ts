import type React from "react";

export interface HeaderProps {
    title: string;
    cssClasses?: string;
}

export interface HeaderPropsWithChildren extends HeaderProps {
    children: React.ReactNode;
}