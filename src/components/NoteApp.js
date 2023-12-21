import { useReducer,useEffect } from "react";
import AddNote from "./AddNote";
import NoteList from "./NoteList";
import Header from "./Header";

let nextId = 0;
const initialTasks = [];
export default function NoteApp() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  useEffect(()=>{
    localStorage.setItem("TaskList",JSON.stringify(tasks));
  },[tasks]);

  function handleAddTask(text) {
    if (text.title.trim() !== "" && text.content.trim() !== "") {
      dispatch({
        type: "ADD_TASK",
        id: nextId++,
        title: text.title,
        content: text.content,
      });
    }
  }

  function handleChangeTask(task) {
    dispatch({
      type: "UPDATE_TASK",
      task: task,
    });
  }

  function handleDeleteTask(taskId) {
    dispatch({
      type: "DELETE_TASK",
      id: taskId,
    });
  }

  // main jsx //
  return (
    <div className="main-box">
      <Header />
      <div className="item-box">
        <AddNote onAddTask={handleAddTask} />
      </div>
      <NoteList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
}

function tasksReducer(tasks, action) {
  console.log("action", action);
  switch (action.type) {
    case "ADD_TASK": {
      return [
        ...tasks,
        {
          id: action.id,
          title: action.title,
          content: action.content,
        },
      ];
    }
    case "UPDATE_TASK": {
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case "DELETE_TASK": {
      return tasks.filter((t) => t.id !== action.id);
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
