import React from 'react';

import downIcon from '../img/sort-down.png';
import upIcon from '../img/sort-up.png';
import noneIcon from '../img/no-sort.png';

export type SuperSortPropsType = {
  id?: string;
  sort: string;
  value: string;
  onChange: (newSort: string) => void;
};

export const pureChange = (sort: string, down: string, up: string) => {
  if (sort === '') {
    return down;
  }
  if (sort === down) return up;
  if (sort === up) return '';
  return down;
};

const SuperSort: React.FC<SuperSortPropsType> = ({
  sort,
  value,
  onChange,
  id = 'hw15',
}) => {
  const up = '0' + value;
  const down = '1' + value;

  const onChangeCallback = () => {
    onChange(pureChange(sort, down, up));
  };

  const icon = sort === down ? downIcon : sort === up ? upIcon : noneIcon;

  return (
    <span
      id={id + '-sort-' + value}
      onClick={onChangeCallback}
      style={{ cursor: 'pointer', display: 'inline-flex', gap: '4px' }}
    >
      <img
        src={icon}
        alt="sort icon"
        style={{ width: '16px', height: '16px' }}
      />
    </span>
  );
};

export default SuperSort;
