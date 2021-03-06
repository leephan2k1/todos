import React from "react";
import AddContent from "./AddContent";
import Content from "./Content";
import EditContent from "./EditContent";
class Todos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idNumber: 0,
      listTodo: [
        // { id: "todo69", title: "doing homework" },
        // { id: "todo96", title: "coding" },
      ],
      isEditing: false,
      editId: "",
    };
  }
  componentDidUpdate() {
    localStorage.setItem("state", JSON.stringify(this.state));
  }
  componentDidMount() {
    if (localStorage.getItem("state")) {
      // console.log(localStorage.getItem("state"));
      const { idNumber, listTodo } = JSON.parse(localStorage.getItem("state"));
      this.setState({
        idNumber: idNumber,
        listTodo: listTodo,
      });
    }
  }
  addData = (titleContent) => {
    let idNum = this.state.idNumber;
    idNum++;
    this.setState({
      idNumber: idNum,
      listTodo: [
        ...this.state.listTodo,
        {
          id: `todo` + idNum,
          title: titleContent,
          dayPublished: new Date().getDate(),
          monthPublished: new Date().getMonth(),
          yearPublished: new Date().getFullYear(),
        },
      ],
    });
  };
  deleteData = (itemPassing) => {
    this.setState({
      listTodo: this.state.listTodo.filter(
        (item) => item.id !== itemPassing.id
      ),
    });
  };
  editData = (itemPassing) => {
    // console.log(itemPassing.data?.id);
    this.setState({
      editId: itemPassing.data?.id,
      isEditing: itemPassing.isEditing,
    });
  };
  updateData = (newTodo) => {
    const obj = this.state.listTodo.find((item) => item.id === newTodo.id);
    const index = this.state.listTodo.indexOf(obj);
    let tempList = [...this.state.listTodo];
    tempList[index] = newTodo;
    this.setState({
      listTodo: tempList,
    });
  };
  render = () => {
    const { listTodo } = this.state;

    // const { idNumberOdd, listTodoOdd } = localStorage.getItem("state");
    return (
      <div className="main">
        {this.state.isEditing ? (
          <EditContent
            data={this.state.listTodo.find(
              (item) => item.id === this.state.editId
            )}
            editData={this.editData}
            updateData={this.updateData}
          />
        ) : null}
        <AddContent data={this.state} addData={this.addData} />
        <div className="list-todo-content">
          {listTodo &&
            listTodo.length > 0 &&
            listTodo.map((item) => {
              return (
                <Content
                  key={item.id}
                  item={item}
                  data={this.state}
                  deleteData={this.deleteData}
                  editData={this.editData}
                />
              );
            })}
        </div>
      </div>
    );
  };
}

export default Todos;
