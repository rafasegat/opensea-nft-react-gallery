import classNames from 'classnames';
import React, { FC } from 'react';
import styles from './Checkboxes.module.scss';

type Props = {
  id: string;
  value: TypeValueLabel[];
  options: TypeValueLabel[];
  onChange: (value: TypeValueLabel[]) => void;
};

const Checkboxes: FC<Props> = ({ id, value, options, onChange }: Props) => {
  const onChangeCheckbox = (valueSelected: TypeValueLabel) => {
    let cloneValue = [...value];
    if (cloneValue.some((item) => item.value === valueSelected.value))
      cloneValue = cloneValue.filter(
        (item) => item.value !== valueSelected.value
      );
    else cloneValue.push(valueSelected);
    onChange([...cloneValue]);
  };
  return (
    <div className={styles.component}>
      <ul className={styles.list}>
        {options.map((option, index) => {
          const checkboxId = `checkbox_item_${id}_${index}`;
          const isChecked = value.some((item) => item.value === option.value);

          return (
            <li
              key={`checkbox-group-${checkboxId}`}
              className={classNames(styles['list-item'])}
            >
              <label className={styles.label}>
                <input
                  type="checkbox"
                  id={checkboxId}
                  name={id}
                  tabIndex={0}
                  checked={isChecked}
                  aria-checked={isChecked}
                  className={styles.input}
                  onChange={() => {
                    onChangeCheckbox(option);
                  }}
                  onKeyPress={(event) => {
                    if (event.key === 'Enter') onChangeCheckbox(option);
                  }}
                />
                <span>{option.label}</span>
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Checkboxes;
