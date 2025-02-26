import React, { useState } from 'react';
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton';
import { restoreState, saveState } from '../hw06/localStorage/localStorage';
import s from './Clock.module.css';

function Clock() {
  const [timerId, setTimerId] = useState<number | undefined>(undefined);
  // for autotests // не менять // можно подсунуть в локалСторэдж нужную дату, чтоб увидеть как она отображается
  const [date, setDate] = useState<Date>(
    new Date(restoreState('hw9-date', Date.now()))
  );
  const [show, setShow] = useState<boolean>(false);

  const start = () => {
    let intervalId: number = window.setInterval(() => {
      saveState('hw9-date', new Date(Date.now()));
      setDate(new Date(restoreState('hw9-date', Date.now())));
    }, 1000);

    setTimerId(intervalId);
  };

  //   setInterval(() => {
  //     console.log(date); //Tue Feb 25 2025 22:21:38 GMT+0300 (Москва, стандартное время)
  //   }, 1000);

  const stop = () => {
    clearInterval(timerId);
    setTimerId(undefined);
  };

  const onMouseEnter = () => {
    setShow(true);
  };
  const onMouseLeave = () => {
    setShow(false);
  };

  const stringTime = new Intl.DateTimeFormat('ru', {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  }) || <br />; // часы24:минуты:секунды (01:02:03)/(23:02:03)/(24:00:00)/(00:00:01) // пишут студенты
  const stringDate = new Intl.DateTimeFormat('ru') || <br />; // день.месяц.год (01.02.2022) // пишут студенты, варианты 01.02.0123/01.02.-123/01.02.12345 не рассматриваем

  // день недели на английском, месяц на английском (https://learn.javascript.ru/intl#intl-datetimeformat)
  const stringDay = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
  }) || <br />; // пишут студенты
  const stringMonth = new Intl.DateTimeFormat('en-US', {
    month: 'long',
  }) || <br />; // пишут студенты

  return (
    <div className={s.clock}>
      <div
        id={'hw9-watch'}
        className={s.watch}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <span id={'hw9-day'}>{stringDay.format(date)}</span>,
        <span id={'hw9-time'}>
          <strong>{stringTime.format(date)}</strong>
        </span>
      </div>

      <div id={'hw9-more'}>
        <div className={s.more}>
          {show ? (
            <>
              <span id={'hw9-month'}>{stringMonth.format(date)}</span>,{' '}
              <span id={'hw9-date'}>{stringDate.format(date)}</span>
            </>
          ) : (
            <>
              <br />
            </>
          )}
        </div>
      </div>

      <div className={s.buttonsContainer}>
        <SuperButton
          id={'hw9-button-start'}
          disabled={!!timerId}
          onClick={start}
        >
          start
        </SuperButton>
        <SuperButton id={'hw9-button-stop'} disabled={!timerId} onClick={stop}>
          stop
        </SuperButton>
      </div>
    </div>
  );
}

export default Clock;
