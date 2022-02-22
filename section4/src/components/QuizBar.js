import React from "react";

import QuizType from './QuizType'


function Quizbar(props){

    return(
        <div className="quiz-bar">
            <h1>Choose your study type</h1>
            <ul className="nav nav-pills nav-fill">
               <QuizType icon="dice" type="Random" />
               <QuizType icon="file-alt" type="Regular" />
               <QuizType icon="dumbbell" type="Weighted" />
               <QuizType icon="font" type="Multi" />



            </ul>


        </div>
    )

}

export default Quizbar