import type React from "react";

export interface BasicProps {
    title?: string;
    cssClasses?: string;
}

export interface BasicPropsWithChildren extends BasicProps {
    children: React.ReactNode;
}


// 1. Definimos o formato genérico de uma opção
export interface SelectOption<T extends string | number> {
  value?: T;
  label: string;
}

// 2. Definimos as Props do componente usando o Generic <T>
export interface SelectProps<T extends string | number> {
  id?: string;
  label?: string;
  options: SelectOption<T>[];
  value?: T;
  onChange: (value: T) => void;
  disabled?: boolean;
  className?: string;
}