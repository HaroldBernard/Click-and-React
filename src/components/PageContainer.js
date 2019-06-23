import React, { Component } from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Pics from "./Pics";
import pics from "./pics.json";
import Footer from "./Footer";
import "../App.css";
import Background from "./Background";
import shuffle from "shuffle-array";
import Animate from "./Animate";


class PageContainer extends Component {
  
  // Set this.state
  state = {
    pics,
    currentScore: 0,
    topScore: 0,
    rightWrong: "",
    clicked: [],
  };

  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.handleReset();
    }
  };

  handleIncrement = () => {
    const newScore = this.state.currentScore + 1;
    this.setState({
      currentScore: newScore,
      rightWrong: ""
    });
    if (newScore >= this.state.topScore) {
      this.setState({ topScore: newScore });
    }
    else if (newScore === 12) {
      this.setState({ rightWrong: "Congrats You win!" });
    }
    this.handleShuffle();
  };

  handleReset = () => {
    this.setState({
      currentScore: 0,
      topScore: this.state.topScore,
      rightWrong: "Sorry You Lost!",
      clicked: []
    });
    this.handleShuffle();
  };

  handleShuffle = () => {
    this.setState({ pics: shuffle(this.state.pics) });
  };

  render() {
    return (
      <Background>
        <Navbar
          title="Click and React"
          score={this.state.currentScore}
          topScore={this.state.topScore}
          rightWrong={this.state.rightWrong}
        />
        <Jumbotron>Click the images to gain points. If you click all 12 
          <div>pictures without repeating a click you win!</div></Jumbotron>
        <div className="row">
          {this.state.pics.map(pics => (
            <Pics
              key={pics.id}
              handleClick={this.handleClick}
              handleIncrement={this.handleIncrement}
              handleReset={this.handleReset}
              handleShuffle={this.handleShuffle}
              id={pics.id}
              image={pics.image}
            />
          ))}
        </div>
        <Animate></Animate>
        <Footer></Footer>
      </Background>
    )
      
  }}
          
  export default PageContainer;
