export default function Task({ id, text, checked, onEdit, onDelete, updateStatus }) {
    return (
      <li key={id} id={id}>
        <div className="view">
          <input
            className="toggle"
            onChange={(e) => {
              updateStatus(id);
            }}
            type="checkbox"
            defaultChecked={checked}
          />
          <label onDoubleClick={onEdit}>{text}</label>
          <button
            className="destroy"
            onClick={() => {
              onDelete(id);
            }}
          ></button>
        </div>
      </li>
    );
  }