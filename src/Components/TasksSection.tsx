import styles from "./TasksSection.module.css";
import clipboard from "../assets/Clipboard.svg";
import ListItem from "./ListItem";
import { PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";

export interface iListItem {
  text: string;
  checked: boolean;
}

export default function TasksSection() {
  const [task, setTask] = useState<iListItem[]>([
    {
      text: "Lavar o carro",
      checked: false,
    },
  ]);
  const [newTaskText, setNewTaskText] = useState("");

  function handleCreateNewTask(event: FormEvent) {
    event?.preventDefault();

    setTask([...task, { text: newTaskText, checked: false }]);

    setNewTaskText("");
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTaskText(event.target.value);
  }

  function handleInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity("Este campo é obrigatório.");
  }

  function deleteTask(taskToDelete: string) {
    const deleted = task.filter((task) => {
      return task.text !== taskToDelete;
    });

    setTask(deleted);
  }

  return (
    <div>
      <div className={styles.tasksSection}>
        <div>
          <form onSubmit={handleCreateNewTask} className={styles.newTask}>
            <input
              name="task"
              type="text"
              placeholder="Adicione uma nova tarefa"
              value={newTaskText}
              onChange={handleNewTaskChange}
              onInvalid={handleInvalid}
              required
            ></input>
            <button type="submit">
              Criar <PlusCircle size={16} />
            </button>
          </form>
        </div>

        <div className={styles.tasks}>
          <div className={styles.info}>
            <div className={styles.created}>
              <span>Tarefas criadas</span>
              <div className={styles.counter}>{task.length}</div>
            </div>
            <div className={styles.done}>
              <span>Concluídas</span>
              <div className={styles.counter}>
                {task.filter((t) => t.checked).length} de {task.length}
              </div>
            </div>
          </div>
          {task.length === 0 && (
            <div className={styles.empty}>
              <img src={clipboard} />
              <p>
                <strong>Você ainda não tem tarefas cadastrada</strong>
                <br />
                Crie tarefas e organize seus itens a fazer
              </p>
            </div>
          )}
          <div className={styles.taskList}>
            {task.map((taskItem) => {
              return (
                <ListItem
                  key={taskItem.text}
                  checked={taskItem.checked}
                  content={taskItem.text}
                  onDeleteTask={deleteTask}
                  taskList={task}
                  setTask={setTask}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
