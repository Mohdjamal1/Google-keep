import { useState } from "react";

export default function AddNote({ onAddTask }) {
  const [text, setText] = useState({ title: "", content: "" });
  return (
    <div className="card addNote">
      <div className="title">
        <input
          className="my-input"
          placeholder="Title"
          value={text.title}
          onChange={(e) => setText({ ...text, title: e.target.value })}
        />
        <i class="fa-solid fa-thumbtack pin"></i>
      </div>
      <div className="content">
        <input
          className="my-input"
          placeholder="Take a note..."
          value={text.content}
          onChange={(e) => setText({ ...text, content: e.target.value })}
        />
      </div>
      <div className="foot">
        <i class="fa-regular fa-bell"></i>
        <i class="fa-solid fa-user-plus"></i>
        <i class="fa-regular fa-image"></i>
        <i class="fa-solid fa-file-arrow-down"></i>
        <i class="fa-solid fa-ellipsis-vertical"></i>
        <i class="fa-solid fa-arrow-left"></i>
        <i class="fa-solid fa-arrow-right"></i>
        <input type="color" value="#563d7c" />
        <button
          className="btn btn-sm btn-outline-secondary add"
          onClick={() => {
            setText({ ...text, title: "", content: "" });
            onAddTask(text);
          }}
        >
          Add Task
        </button>
      </div>
    </div>
  );
}
