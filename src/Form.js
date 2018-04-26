import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

class Form extends Component {
  state = {
    title: "",
    description: ""
  };
  render() {
    return (
      <div className="col-sm-3 offset-sm-3">
        <form
          onSubmit={e => {
            e.preventDefault();
            if (this.state.title !== "" && this.state.description !== "") {
              this.props.add({
                title: this.state.title,
                description: this.state.description
              });
            } else {
              alert("Форма не заполнена");
            }
          }}
        >
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Задать список</label>
            <input
              onChange={e => {
                this.setState({ title: e.target.value });
              }}
              value={this.state.title}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Введите заголовок..."
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Описание</label>
            <textarea
              onChange={e => {
                this.setState({ description: e.target.value });
              }}
              value={this.state.description}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Введите описание..."
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Добавить
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
