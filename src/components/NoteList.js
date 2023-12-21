import { useState } from "react";

export default function NoteList({ tasks, onChangeTask, onDeleteTask }) {
  const [text, setText] = useState({ title: "", content: "" });
  const [editableIndex, setEditableIndex] = useState(null);

  function editTask(index) {
    console.log(tasks[index]);
    setText({ ...text, content: tasks[index].content });
    setEditableIndex(index);
  }
  function saveTask(task) {
    task.content = text.content;
    onChangeTask(task);
    setEditableIndex(null);
  }

  return (
    <div className="row row-cols-1 row-cols-md-3 g-4 note-list">
      {tasks.map((task, index) => (
        <div key={index} className="col item">
          {editableIndex === index ? (
            <div className="card">
              <div className="card-header">
                <input
                  className="my-input"
                  value={task.title}
                  onChange={(e) => setText({ ...text, title: e.target.value })}
                />
              </div>
              <textarea
                className="my-input"
                type="text"
                value={text.content}
                onChange={(e) => setText({ ...text, content: e.target.value })}
                autoFocus
              />
              <div className="my-btn">
                <button
                  className="btn btn-success"
                  onClick={() => saveTask(task)}
                >
                  <i class="fa-solid fa-floppy-disk"></i>
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => onDeleteTask(task.id)}
                >
                  <i class="fa-solid fa-trash"></i>
                </button>
                <input
                  type="color"
                  class="form-control form-control-color"
                  id="exampleColorInput"
                  value="#563d7c"
                  title="Choose your background color"
                ></input>
              </div>
            </div>
          ) : (
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">{task.title}</h5>
              </div>
              <div className="card-text">{task.content}</div>
              <div className="my-btn">
                <button
                  className="btn btn-secondary"
                  onClick={() => editTask(task.id)}
                >
                  <i class="fa-regular fa-pen-to-square"></i>
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => onDeleteTask(task.id)}
                >
                  <i class="fa-solid fa-trash"></i>
                </button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
