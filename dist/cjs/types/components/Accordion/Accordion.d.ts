import { ReactNode } from 'react';
declare type TypeProps = {
    title: string;
    count?: number;
    children: ReactNode;
};
declare const Accordion: ({ title, count, children }: TypeProps) => JSX.Element;
export default Accordion;
