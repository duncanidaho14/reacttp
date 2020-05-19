import React from 'react';
import PropTypes from 'prop-types';

const Questions = (props) => {
    const questions = {
        'symfony': {
            title: "Symfony design pattern",
            choices: ['MMV', 'MVC', 'MMVV'],
            response: 1,
            type: "select",
            name: "symfony",
            feedback: 'Symfony est basé sur le pattern MVC'
        },
        'react': {
            title: "React est-il un framework ?",
            choices: ['yes', 'no'],
            response: 1,
            type: "radio",
            name: "react",
            feedback: "React est une librairie"
        },
        'jsx': {
            title: "JSX c'est quoi ?",
            choices: ['JSX est un langage compilé', 'JSX est un sur-ensemble développé par Facebook'],
            response: 1,
            type: "radio",
            name: "jsx",
            feedback: 'JSX est un sur ensemble à JS'
        }
    }
    questions.map((question, k) => {
        const Question = question.type
        return (
            <div className="question" key={k}>
                <h2>{question.title}</h2>
                <p>
                    <Question response={1} value={question.choices} name={question.name} />
                    <Question response={2} value={question.choices} name={question.name} />
                </p>
            </div>
        )
    })
};

Questions.propTypes = {};

export default Questions;