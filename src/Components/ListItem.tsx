import { Circle, Trash, Check } from "phosphor-react";
import styles from "./ListItem.module.css";
import { iListItem } from "./TasksSection";

interface Props {
  checked: boolean;
  content: string;
  onDeleteTask: (task: string) => void;
  taskList: iListItem[];
  setTask: any; // mudar a lista inteira
}

export default function ListItem({
  checked,
  content,
  onDeleteTask,
  taskList,
  setTask,
}: Props) {
  function handleDeleteTask() {
    onDeleteTask(content);
  }

  function handleCheckItem() {
    const copy = taskList;
    const newItem = {
      text: content,
      checked: !checked,
    };

    const index = taskList.findIndex((t) => t.text === content);

    const newList = [
      ...copy.slice(0, index),
      newItem,
      ...copy.slice(index + 1),
    ];

    setTask(newList);
    // pegar a taskList
    // acahr o index do seu item
    // mudar o item dentro da list
    // dar um set da lista modificada
  }

  return (
    <div className={checked ? styles.listItemChecked : styles.listItem}>
      <button onClick={handleCheckItem}>
        {checked ? (
          <Check className={styles.checked} size={20} />
        ) : (
          <Circle className={styles.check} size={20} />
        )}
      </button>
      <p>{content}</p>
      <button onClick={handleDeleteTask} title="Deletar tarefa">
        <Trash className={styles.trash} size={24} />
      </button>
    </div>
  );
}
