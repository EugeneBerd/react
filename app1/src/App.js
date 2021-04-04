import React from "react";
// import styles from "./App.module.scss";

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.className = props.className;
    this.backgroundColor = props.backgroundColor;
    this.text = props.text;
  }

  closeModal() {
    this.setState({ modalOpen: false });
  }

  render() {
    const { modalOpen } = this.state;
    return (
      <div>
        <button
          className={this.className}
          onClick={this.props.onClick}
          style={{ backgroundColor: this.backgroundColor }}
        >
          {this.text}
        </button>

        {/* Only show Modal when "this.state.modalOpen === true" */}
        {modalOpen ? <Modal closeModal={this.closeModal.bind(this)} /> : ""}
      </div>
    );
  }
}

class Modal extends React.Component {
  render() {
    const { closeModal } = this.props;

    return (
      <div
        className="modalContaier"
        style={{
          position: "absolute",
          width: "100%",
          top: 0,
          height: "100%",
          zIndex: 5,
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
        onClick={closeModal}
      >
        <div
          style={{
            position: "absolute",
            width: "400px",
            top: 100,
            height: "300px",
            backgroundColor: "white",
          }}
        >
          <h1>Some Modal</h1>
          <button className="btn btn-md btn-primary" onClick={closeModal}>
            Close Modal
          </button>
        </div>
      </div>
    );
  }
}

class App extends React.Component {
  state = {
    modalOpen: false,
  };

  openModal() {
    this.setState({ modalOpen: true });
  }y
  render() {
    return (
      <div>
        <Button
          text="Open Modal One"
          backgroundColor="red"
          onClick={this.openModal}
        />
        <div>
          <Button
            text="Open Modal two"
            backgroundColor="blue"
            onClick={this.openModal}
          />
        </div>
      </div>
    );
  }
}

export default App;

// function App() {
//   const [todos, setTodos] = React.useState([
//     { id: 1, completed: false, title: "bread buy" },
//     { id: 4, completed: false, title: "milk buy" },
//     { id: 3, completed: false, title: "butter buy" },
//   ]);
//   // let todos =
//   function toggleTodo(id, title) {
//     console.log(id);
//     console.log(title);
//     setTodos(
//       todos.map((todo) => {
//         if (todo.id === id) {
//           todo.completed = !todo.completed;
//         }
//         return todo;
//       })
//     );
//   }

//   function removeTodo(id) {
//     setTodos(todos.filter((todo) => todo.id !== id));
//   }

//   return (
//     <Context.Provider value={{ removeTodo: removeTodo }}>
//       <div className="wrapper">
//         <h1>react tutorial</h1>
//         <Todolist
//           todos={todos}
//           onToggle={toggleTodo}
//           onClick={() => {
//             console.log(todos);
//           }}
//         />
//       </div>
//     </Context.Provider>
//   );
// }

// export default App;
