import React from "react";
class EditContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onChange: false,
      content: "",
    };
  }
  handleOnChange = (e) => {
    console.log(e.target.value);
    if (e.target.value) {
      this.setState({
        onChange: true,
        content: e.target.value,
      });
    } else {
      this.setState({
        onChange: false,
      });
    }
  };
  handleUpdate = () => {
    if (this.state.content) {
      this.props.updateData({
        id: this.props.data?.id,
        title: this.state.content,
      });
      console.log(this.state.content);
      this.handleCancel();
    } else {
      this.handleCancel();
    }
  };
  handleCancel = () => {
    this.props.editData({ isEditing: false, data: {} });
  };
  render() {
    // console.log(this.props.data);
    return (
      <div id="overlay">
        <div className="editing-frame">
          <textarea
            type="text"
            className="edit-box"
            onChange={(e) => this.handleOnChange(e)}
            defaultValue={this.props.data.title}
          ></textarea>
          <div className="control">
            <div className="edit-btn" onClick={() => this.handleUpdate()}>
              {this.state.onChange ? (
                <i className="fas fa-check"></i>
              ) : (
                <span className="add-icon">+</span>
              )}
            </div>
            <div className="cancel-btn" onClick={() => this.handleCancel()}>
              x
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default EditContent;
