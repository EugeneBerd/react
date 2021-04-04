import React, { useContext } from "react";
import PropTypes from "prop-types";
import Context from "../context";

const styles = {
  li: {
    display: "flex",
    color: "red",
    border: "1px solid black",
  },
};
function TodoItem({ todo, index, onChange }) {
  const { removeTodo } = useContext(Context);
  console.log(todo);
  return (
    <li style={styles.li}>
      <span>
        <input type="checkbox" onChange={() => onChange(todo.id)} />

        <strong>{index + 1} </strong>
        {todo.title}
      </span>
      <button onClick={() => removeTodo(todo.id)}>{todo.title}</button>
    </li>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TodoItem;
