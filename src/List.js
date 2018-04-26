import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

const style = {
  width: "18rem",
  marginBottom: "5px"
};

class List extends Component {
  render() {
    return (
      <div className="col-sm-3">
        {this.props.tasks.map((item, index) => {
          return (
            <div key={index} className="card" style={style}>
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.description}</p>
                <button
                  onClick={() => {
                    this.props.del(index);
                  }}
                >
                  del
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default List;
