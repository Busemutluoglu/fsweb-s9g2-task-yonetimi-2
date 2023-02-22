import React from "react";
import { formatDistanceToNow, differenceInDays } from "date-fns";
import tr from "date-fns/locale/tr";
import { bg } from "date-fns/locale";

const Task = ({ taskObj, onComplete }) => {
  let result = formatDistanceToNow(new Date(taskObj.deadline), { locale: tr });
  console.log("result", result);

  let differResult = differenceInDays(new Date(taskObj.deadline), new Date());
  console.log("difference", differResult);

  let sure = "";
  if (differResult < 0) {
    sure = "sonra";
  } else if (differResult > 0) {
    sure = "önce";
  }

  let yeniStil = "";
  if (differResult <= 3) {
    yeniStil = "bg-buse";
  }

  return (
    <div className="task">
      <h3>{taskObj.title}</h3>
      <div className="deadline">
        son teslim: <span className={yeniStil}>{`${result} ${sure}`}</span>
      </div>
      <p>{taskObj.description}</p>
      <div>
        {taskObj.people.map((p) => (
          <span
            className="pill text-xl font-semibold border border-lime-700 bg-lime-100"
            key={p}>
            {p}
          </span>
        ))}
      </div>
      {onComplete && (
        <button onClick={() => onComplete(taskObj.id)}>Tamamlandı</button>
      )}
    </div>
  );
};

export default Task;
