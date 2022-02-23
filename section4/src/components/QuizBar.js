import React from "react";

import QuizType from './QuizType'


function Quizbar(props){

    const quizTypesArray=[
        {
            icon:'dice',
            type:'Random'
        },
        {
            icon:"file-alt",
            type:"Regular"
        },
        {
            icon:"dumbbell",
            type:"Weighted"
        },
        {
            icon:"font",
            type:"Multi"
        }
    ]

    const quizType = quizTypesArray.map((qt, i)=>{

        return(
        <QuizType key= {i} icon={qt.icon}  type={qt.type} userChoice={props.userChoice}/>
        )


    })

    return(
        <div className="quiz-bar">
            <h1>Choose your study type</h1>
            <ul className="nav nav-pills nav-fill">
               {/* <QuizType icon="dice" type="Random" />
               <QuizType icon="file-alt" type="Regular" />
               <QuizType icon="dumbbell" type="Weighted" />
               <QuizType icon="font" type="Multi" /> */}
               {quizType}

            </ul>


        </div>
    )

}

export default Quizbar