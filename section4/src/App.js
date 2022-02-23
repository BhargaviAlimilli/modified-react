import React from 'react'
import './App.css';
import Quizbar from './components/QuizBar';
import FlashCard from './components/FlashCard';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      cardStyle:'Random'

    }
  }

  userChoice=(cardStyle)=>{
    this.setState({
      cardStyle
    })
  }

  render(){
    console.log(this.state.cardStyle)

    return(
      <div>
      <Quizbar  userChoice={this.userChoice}/>
      <FlashCard />
      </div>
    )
  }
}

export default App;
