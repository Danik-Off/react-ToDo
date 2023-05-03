export default function Filter({ text, onClick, active }) {
    return (
      <li onClick={onClick}>
        <a href={"#/" + text} className={active ? "selected" : null}>
          {text}
        </a>
      </li>
    );
  }
  