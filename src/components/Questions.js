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
    return (
        <div className="side">
            <div className="side-left">
                {props.left}
            </div>
            <div className="side-right">
                {props.right}
            </div>
        </div>
    );
};

Questions.propTypes = {};

export default Questions;