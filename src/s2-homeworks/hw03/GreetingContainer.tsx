import React, { ChangeEvent, KeyboardEvent, useState } from 'react';
import Greeting from './Greeting';
import { UserType } from './HW3';

type GreetingContainerPropsType = {
  users: UserType[];
  addUserCallback: (name: string) => void;
};

export const pureAddUser = (
  name: string,
  setError: (error: string) => void,
  setName: (name: string) => void,
  addUserCallback: (name: string) => void
) => {
  if (!name.trim().length) {
    setError('Ошибка! Введите имя!');
  } else {
    addUserCallback(name);
    setName('');
  }
};

export const pureOnBlur = (name: string, setError: (name: string) => void) => {
  if (!name.trim().length) {
    setError('Ошибка! Введите имя!');
  }
};

export const pureOnEnter = (e: KeyboardEvent, addUser: () => void) => {
  if (e.key === 'Enter') {
    addUser();
  }
};

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
  users,
  addUserCallback,
}) => {
  // деструктуризация пропсов
  const [name, setName] = useState<string>('');
  const [error, setError] = useState<string>('');

  const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value);

    error && setError('');
  };
  const addUser = () => {
    pureAddUser(name, setError, setName, addUserCallback);
  };

  const onBlur = () => {
    pureOnBlur(name, setError);
  };

  const onEnter = (e: KeyboardEvent) => {
    pureOnEnter(e, addUser);
  };

  const totalUsers = users.length;
  const lastUserName = users[0] ? users[users.length - 1].name : 'name';

  return (
    <Greeting
      name={name}
      setNameCallback={setNameCallback}
      addUser={addUser}
      onBlur={onBlur}
      onEnter={onEnter}
      error={error}
      totalUsers={totalUsers}
      lastUserName={lastUserName}
    />
  );
};

export default GreetingContainer;
