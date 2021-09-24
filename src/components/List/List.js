import React, { Component } from "react";
import Card from "../Card";
import cards from "../../data.json";
import "./List.css";

class List extends Component {
  constructor(props) {
    super(props);

    // Initialize state
    this.state = {
      cards: cards,
    };
  }

  componentDidMount() {
    this.setState({ data: this.state.cards });
  };

  // Add card to state
  addCard = (e) => {
    e.preventDefault();
    let title = e.target.title.value;
    let category = e.target.category.value;
    let date = e.target.date.value;
    let priority = e.target.priority.value;
    let task = e.target.task.value;

    let newCard = { title, category, date, priority, task };
    this.setState({ cards: [...this.state.cards, newCard] });
  };

  // Remove current card from state
  removeCard = (i) => {
    const remainingCards = this.state.cards.filter((card, j) => j !== i);
    this.setState({ cards: remainingCards });
  };

  // Remove all cards from state
  removeAllCards = () => {
    this.setState({ data: {}, cards: [] });
  };

  // Reset cards to initial state
  resetCards = () => {
    this.setState({ cards: cards });
  };

  // Render cards
  paintCards = () => {
    return this.state.cards.map((card, i) => (
      <Card info={card} key={i} remove={() => this.removeCard(i)} />
    ));
  };

  render() {
    return (
      <section className="main-body">
        <hr className="separator" />
        <section className="top">
          <form className="form" onSubmit={this.addCard}>
            <input type="text" name="title" placeholder="Task Title" required />
            &nbsp;&nbsp;
            <input
              type="text"
              name="category"
              placeholder="Category"
              required
            />
            &nbsp;&nbsp;
            <input type="date" name="date" placeholder="" required />
            &nbsp;&nbsp;
            <select name="priority" required>
              <option value="">Select...</option>
              <option className="option" value="Urgent">
                Urgent
              </option>
              <option className="option" value="High">
                High
              </option>
              <option className="option" value="Medium">
                Medium
              </option>
              <option className="option" value="Low">
                Low
              </option>
            </select>
            &nbsp;&nbsp;
            <input type="text" name="task" placeholder="Task" required />
            &nbsp;&nbsp;
            <input className="top-button" type="submit" value="ADD" />
          </form>
          <button className="top-button" onClick={this.resetCards}>
            RESET
          </button>
          <button className="top-button" onClick={this.removeAllCards}>
            REMOVE ALL
          </button>
        </section>
        <section className="bottom">
          <div className="cards">{this.paintCards()}</div>
        </section>
      </section>
    );
  }
}

export default List;
