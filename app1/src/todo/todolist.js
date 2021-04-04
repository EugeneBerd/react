import React from "react";
import PropTypes from "prop-types";
import TodoItem from "./todoitem";

const styles = {
  ul: { listStyle: "none", margin: "0", padding: "20px" },
};

function Todolist(props) {
  return (
    <ul style={styles.ul}>
      {props.todos.map((todo, i) => {
        return (
          <TodoItem
            todo={todo}
            key={todo.id}
            index={i}
            onChange={props.onToggle}
          />
        );
      })}
    </ul>
  );
}

Todolist.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default Todolist;
