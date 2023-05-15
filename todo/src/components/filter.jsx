export default function Filter({ text,  active }) {
    return (
      <li id={text}>
        <a href={"#/" + text} className={active ? "selected" : null}>
          {text}
        </a>
      </li>
    );
  }
  