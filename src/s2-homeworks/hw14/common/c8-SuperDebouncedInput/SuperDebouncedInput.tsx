import React, {
  DetailedHTMLProps,
  InputHTMLAttributes,
  ReactNode,
  useEffect,
  useState,
} from 'react';
import SuperInputText from '../../../hw04/common/c1-SuperInputText/SuperInputText';

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута, кроме type
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
export type SuperDebouncedInputPropsType = Omit<
  DefaultInputPropsType,
  'type'
> & {
  // и + ещё пропсы которых нет в стандартном инпуте
  onChangeText?: (value: string) => void;
  onEnter?: () => void;
  error?: ReactNode;
  spanClassName?: string;
} & {
  // илм экспортировать тип SuperInputTextPropsType
  // плюс специальный пропс SuperPagination
  onDebouncedChange?: (value: string) => void;
};

const SuperDebouncedInput: React.FC<SuperDebouncedInputPropsType> = ({
  onChangeText,
  onDebouncedChange,

  ...restProps // все остальные пропсы попадут в объект restProps
}) => {
  const [timerId, setTimerId] = useState<number | undefined>(undefined);

  
  const onChangeTextCallback = (value: string) => {
    onChangeText?.(value) // Сразу обновляем значение в инпуте
    
    if (onDebouncedChange) {
      clearTimeout(timerId) // Очищаем предыдущий таймер
      
      // Устанавливаем новый таймер с задержкой 1500ms
      const newTimerId = window.setTimeout(() => {
        onDebouncedChange(value) // Отправляем запрос только после задержки
      }, 1500)
      
      setTimerId(newTimerId)
    }
  }

  // Очищаем таймер при размонтировании
  useEffect(() => {
    return () => {
      if (timerId) {
        clearTimeout(timerId)
      }
    }
  }, [timerId])

  // const onChangeTextCallback = (value: string) => {
  //   onChangeText?.(value);

  //   if (onDebouncedChange) {
  //     clearTimeout(timerId);
  //     const newTimerId = window.setTimeout(() => {
  //       onDebouncedChange(value);
  //     }, 1500);
  //     setTimerId(newTimerId);
  //   }
  // };

  return <SuperInputText onChangeText={onChangeTextCallback} {...restProps} />;
};

export default SuperDebouncedInput;
