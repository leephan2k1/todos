import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleDeleteTodo = (item) => {
    this.props.deleteData(item);
    toast.success("Xoá thành công! 😁!", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  handleEditTodo = (item) => {
    this.props.editData({ isEditing: true, data: item });
  };
  render() {
    return (
      <div className="content">
        <div className="date-published">
          <div>{this.props.item?.dayPublished}</div>
          <div>{this.props.item?.monthPublished}</div>
          <div>{this.props.item?.yearPublished}</div>
        </div>
        <div className="content_text">{this.props.item.title}</div>
        <div className="control">
          <div
            className="btn"
            onClick={() => this.handleEditTodo(this.props.item)}
          >
            <i className="far fa-edit"></i>
          </div>
          <div
            className="btn"
            onClick={() => this.handleDeleteTodo(this.props.item)}
          >
            <i className="fas fa-trash"></i>
          </div>
        </div>
      </div>
    );
  }
}
export default Content;
