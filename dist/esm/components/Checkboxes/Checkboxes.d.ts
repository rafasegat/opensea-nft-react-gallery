import { FC } from 'react';
declare type Props = {
    id: string;
    value: TypeValueLabel[];
    options: TypeValueLabel[];
    onChange: (value: TypeValueLabel[]) => void;
};
declare const Checkboxes: FC<Props>;
export default Checkboxes;
