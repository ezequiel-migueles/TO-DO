import React, { Component } from "react";
import "./Card.css";

class Card extends Component {
  render() {
    const { title, category, priority, task, date } = this.props.info;
    return (
      <div className="card">
        <div className="small">
          <article className="task">
            <div className="task-content">
              <p className="task-tags">
                <span className="task-tag">{category}</span>
              </p>
              <h1 className="task-title">
                <a href="/">{title}</a>
              </h1>
              <p className="task-metadata">
                <span className="task-rating">
                  Priority: <span>{priority}</span>
                </span>
              </p>
              <p className="task-date">
                <span className="task-date">
                  Date: <span>{date}</span>
                </span>
              </p>
              <p className="task-desc">{task}</p>
              <button
                className="task-save"
                type="button"
                onClick={this.props.remove}
              >
                <i className="fa fa-trash-o" /> &nbsp;Delete Task
              </button>
            </div>
          </article>
        </div>
      </div>
    );
  }
}

export default Card;
