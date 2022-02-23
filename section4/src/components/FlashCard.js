import React from 'react'
import MultiCard from './MultiCard';
import RandomWeighted from './RandomWeightedCard'
import Regular from './RegularCard';

class FlashCard extends React.Component{
  constructor(){
    super();
    this.state={

    }
  }


  render(){

    return(
      <div>
        <h1>FlashCard</h1>
        <MultiCard />
        <RandomWeighted />
        <Regular />
      </div>

    )
  }
}

export default FlashCard;
