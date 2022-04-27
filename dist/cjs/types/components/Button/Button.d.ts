import { ReactNode } from 'react';
declare type Props = {
    children: ReactNode;
    onClick: VoidFunction;
};
declare const Button: ({ children, onClick }: Props) => JSX.Element;
export default Button;
