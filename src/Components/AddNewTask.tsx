import { PlusCircle } from "phosphor-react";
import styles from "./AddNewTask.module.css";
import { useState } from "react";

export default function () {
  const [tasks, setTasks] = useState([1, 2]);

  function handleCreateNewTask() {
    event?.preventDefault();

    setTasks([1, 2, 3]);

    console.log("it works!", tasks);
  }

  return (
    <div>
      <div>
        <form onSubmit={handleCreateNewTask} className={styles.newTask}>
          <input type="text" placeholder="Adicione uma nova tarefa"></input>
          <button type="submit">
            Criar <PlusCircle size={16} />
          </button>
        </form>
      </div>
    </div>
  );
}
