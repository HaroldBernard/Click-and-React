import React, { Component } from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Pics from "./Pics";
import pics from "../pics.json";
// import Footer from "./Footer";
import "../App.css";
import Background from "./Background";

class PageContainer extends Component {
  state = {
    currentPage: "Home"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };


// function shuffleFriends(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//     let j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
//   return array;
// };

// class App extends Component {
//   // Set this.state
//   state = {
//     friends,
//     currentScore: 0,
//     topScore: 0,
//     rightWrong: "",
//     clicked: [],
//   };

//   handleClick = id => {
//     if (this.state.clicked.indexOf(id) === -1) {
//       this.handleIncrement();
//       this.setState({ clicked: this.state.clicked.concat(id) });
//     } else {
//       this.handleReset();
//     }
//   };

//   handleIncrement = () => {
//     const newScore = this.state.currentScore + 1;
//     this.setState({
//       currentScore: newScore,
//       rightWrong: ""
//     });
//     if (newScore >= this.state.topScore) {
//       this.setState({ topScore: newScore });
//     }
//     else if (newScore === 12) {
//       this.setState({ rightWrong: "You win!" });
//     }
//     this.handleShuffle();
//   };

//   handleReset = () => {
//     this.setState({
//       currentScore: 0,
//       topScore: this.state.topScore,
//       rightWrong: "Glaven!",
//       clicked: []
//     });
//     this.handleShuffle();
//   };

//   handleShuffle = () => {
//     let shuffledFriends = shuffleFriends(friends);
//     this.setState({ friends: shuffledFriends });
//   };

  render() {
    return (
      <Background>
        <Navbar
          title="Simpsons Clicky Game"
          score={this.state.currentScore}
          topScore={this.state.topScore}
          rightWrong={this.state.rightWrong}
        />
        <Jumbotron>Click the images to gain points. If you click all 12 pictures without repeating a click you win!</Jumbotron>
        <Pics
          id={pics.id}
          key={pics.id}
          name={pics.name}
          image={pics.image}
          />
        {/* <Footer></Footer> */}
      </Background>
    )

  // renderPage = () => {
  //   if (this.state.currentPage === "Home") {
  //     return <Home />;
  //   } else if (this.state.currentPage === "About") {
  //     return <About />;
  //   } else if (this.state.currentPage === "Blog") {
  //     return <Blog />;
  //   } else {
  //     return <Contact />;
  //   }
  // };

  // render() {
  //   return (
  //     <div>
  //       <Navbar/>
  //       <Jumbotron/>
  //       <Pics/>
  //       <Footer/>
  //       {/* {this.renderPage()} */}
  //     </div>
  //   );
  // }
}}

export default PageContainer;
