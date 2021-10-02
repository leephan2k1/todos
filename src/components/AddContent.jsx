import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();
class AddContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onChange: false,
      tempInput: "",
    };
  }
  handleEnter = (e) => {
    if (e.code === "Enter") {
      this.handleAdd(e);
    }
  };
  handleAdd = (e) => {
    if (this.state.tempInput) {
      //   console.log(">>> Check addData f", this.props.addData);
      this.props.addData(this.state.tempInput);
      toast.success("Thêm thành công 😁!", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.error("Chưa có nội dung mà bạn 😤?", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    this.setState({
      tempInput: "",
      onChange: false,
    });
  };
  handleInputText = (e) => {
    if (e.target.value) {
      this.setState({
        onChange: true,
      });
    } else {
      this.setState({
        onChange: false,
      });
    }
    this.setState({
      tempInput: e.target.value,
    });
  };
  render() {
    return (
      <div className="add-todo">
        <input
          className="add-todo__text"
          type="text"
          placeholder="type something..."
          onChange={(e) => this.handleInputText(e)}
          onKeyPress={(e) => this.handleEnter(e)}
          value={this.state.tempInput}
        />
        <div className="add-todo__btn" onClick={() => this.handleAdd()}>
          {this.state.onChange ? (
            <i className="fas fa-check"></i>
          ) : (
            <span className="add-icon">+</span>
          )}
        </div>
      </div>
    );
  }
}
export default AddContent;
