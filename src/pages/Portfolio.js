import React, { Component } from "react";
import API from "../utils/API";
import Card from "../components/Card";
import Alert from "../components/Alert";

class Portfolio extends Component {
  state = {
    image: "",
    match: false,
    matchCount: 0
  };

  // When the component mounts, load the next dog to be displayed
  componentDidMount() {
    this.loadNextDog();
  }

  handleBtnClick = event => {
    // Get the data-value of the clicked button
    const btnType = event.target.attributes.getNamedItem("data-value").value;
    // Clone this.state to the newState object
    // We'll modify this object and use it to set our component's state
    const newState = { ...this.state };

    if (btnType === "pick") {
      // Set newState.match to either true or false depending on whether or not the dog likes us (1/5 chance)
      newState.match = 1 === Math.floor(Math.random() * 5) + 1;

      // Set newState.matchCount equal to its current value or its current value + 1 depending on whether the dog likes us
      newState.matchCount = newState.match
        ? newState.matchCount + 1
        : newState.matchCount;
    } else {
      // If we thumbs down'ed the dog, we haven't matched with it
      newState.match = false;
    }
    // Replace our component's state with newState, load the next dog image
    this.setState(newState);
    this.loadNextDog();
  };

  loadNextDog = () => {
    API.getRandomDog()
      .then(res =>
        this.setState({
          image: res.data.message
        })
      )
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <h1 className="text-center">My apps</h1>
        <hr/>
        <div style={{display: "block", height: "400px"}}>
          <Card image={"https://thanhn062.github.io/assets/images/googleHome.jpg"} title="Autohotkey Voice Command" href="https://github.com/thanhn062/Autohotkey/tree/master/AHK%20Voice%20Command"/>
          <Card image={"https://github.com/thanhn062/Autohotkey/raw/master/Ragnarok%20Online/Ragindex/Ragindex_1.png"} title="Ragindex" href="https://github.com/thanhn062/Autohotkey/tree/master/Ragnarok%20Online/Ragindex" />
          <Card image={"https://github.com/thanhn062/Autohotkey/raw/master/Ragnarok%20Online/Mappin%20Auto%20Cast/screen_shot.png"} title="M.A.C.R.O" href="https://github.com/thanhn062/Autohotkey/tree/master/Ragnarok%20Online/Mappin%20Auto%20Cast"/>
          <Card image={"https://github.com/thanhn062/Autohotkey/raw/master/Ragnarok%20Online/Auto%20Potion/ROAP.png"} title="Auto Potion" href="https://github.com/thanhn062/Autohotkey/tree/master/Ragnarok%20Online/Auto%20Potion" />
          <Card image={"https://thanhn062.github.io/assets/images/muse.png"} title="MuSe" href="http://muse-project.herokuapp.com/" />
          <Card image={"https://thanhn062.github.io/assets/images/passGen.png"} title="Password Generator" href="https://thanhn062.github.io/passwordGen/" />
          <Card image={"https://thanhn062.github.io/assets/images/quiz.png"} title="Coding Quiz" href="https://thanhn062.github.io/ProgramQuiz/" />
          <Card image={"https://thanhn062.github.io/assets/images/fitness.bmp"} title="Fitness Tracker" href="" />
          <Card image={"https://thanhn062.github.io/assets/images/notetaker.png"} title="Note Taker" href="https://github.com/thanhn062/thanhn062.github.io/tree/master/noteTaker" />
          <Card image={"https://thanhn062.github.io/assets/images/dayplanner.png"} title="Day Planner" href="https://thanhn062.github.io/DayPlanner/" />
          <Card image={"https://thanhn062.github.io/assets/images/weatherBoard.jpg"} title="Weather Board" href="https://thanhn062.github.io/weatherBoard/" />
          <Card image={"https://i.pinimg.com/originals/c2/1a/ac/c21aac9a20851f27e8e5fcae4e9e359f.jpg"} title="Budget App " href="https://murmuring-dusk-57384.herokuapp.com/" />
        </div>
      </div>
    );
  }
}

export default Portfolio;
