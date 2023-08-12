import { useState } from 'react';
import moment from 'moment';

interface ITimer {
  initialTime: number;
}

function Timer({ initialTime }: ITimer): JSX.Element {
  const [timerId, setTimerId] = useState<NodeJS.Timer | null>(null);
  const [totalTime, setTotalTime] = useState(initialTime);
  const [isPause, setPause] = useState(false);

  function playButtonClickHandler(): void {
    if (timerId && !isPause) return;

    const id = setInterval(() => {
      setTotalTime((prevValue) => prevValue + 1000);
    }, 1000);
    setTimerId(id);
  }

  function pauseButtonClickHandler(): void {
    if (!timerId) return;
    clearInterval(timerId);
    setPause(true);
  }
  const formattedTime =
    moment.duration(totalTime).asHours() >= 1
      ? moment.utc(totalTime).format('HH:mm:ss')
      : moment.utc(totalTime).format('mm:ss');

  /* debugger; */
  return (
    <span className="description">
      <button className="icon icon-play" onClick={playButtonClickHandler}></button>
      <button className="icon icon-pause" onClick={pauseButtonClickHandler}></button>
      {formattedTime}
    </span>
  );
}

export default Timer;
