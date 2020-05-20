import React, { Component } from 'react'
import Wrapper from './Wrapper'
import Form from './Form'
import Input from './Input'
import Radio from './Radio'
import Select from './Select'
import Page from './Page'
import Nav from './Nav'

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

const components = {
    input: Input,
    radio: Radio,
    select: Select
}

// Component
class SuperAppForm extends Component {
    constructor(props) {
        super(props);
        this.questions = Object.values(questions);
        this.state = {
            email: '',
            result: this.questions.map(() => (null)),
            currentPage: 0,
        }
        this.pageCount = 0;
    }

    reset = (event) => {
        event.target.parentNode.parentNode.reset();
        this.setState({
            result: this.questions.map(() => (null)),
            currentPage: 0
        })
    }

    onInputChange = (index, response) => {
        this.setState((prevState, prevProps) => {
            prevState.result[index] = response !== null ? (this.questions[index].response == response) : null;
            return ({
                result: prevState.result
            })
        })
    }

    checkEmail = (email) => {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.setState({
            email: re.test(String(email).toLowerCase()) ? email : ''
        })
    }

    prevPage = () => {
        this.setState((prevState, props) => ({ currentPage: prevState.currentPage - 1 }))
    }

    nextPage = () => {
        this.setState((prevState, props) => ({ currentPage: prevState.currentPage + 1 }))
    }


    //Fonction de validation de chaque page (active ou désactive le bouton suivant)

    pageValid() {
        const page = this.state.currentPage;

        //email
        if (this.state.email == '') {
            return (false);
        }

        //Questions
        if (page > 0 && this.state.result[page - 1] == null) {
            return (false);
        }

        //Le reste
        return (true)
    }

    addPage = (id) => {
        this.pageCount++;
    }

    //Chaque page reçoit un id, la page courante pour gèrer son propre affichage + une fonction a éxécuter a la construction afin de compter les pages
    //Le changement de page est lié au state.currentPage

    render() {
        let p = 0;
        const score = this.state.result.filter(elmt => elmt == true).length;
        return (
            <Wrapper className="app">
                <Wrapper className="QCM">
                    <Wrapper className="jumbotron">
                        <h1>{this.props.title}</h1>
                        <p>Voici un QCM sur React répondez aux questions ci-dessous, pensez à laisser votre email, champ obligatoire (*) :</p>
                    </Wrapper>

                    <Form className="form form-horizontal" onReset={this.reset} showButton={this.state.pagesCount ? (this.state.currentPage === this.state.pagesCount - 1) : false}>
                        <Page className="userInfo" id={p++} current={this.state.currentPage} onConstruct={this.addPage}>
                            <Input type="email" name="email" required={true} onChange={this.checkEmail} />
                            <p className="alert alert-info" style={{ display: (this.state.email === '') ? 'block' : 'none' }}>Entrez un email valide</p>
                        </Page>
                        <Wrapper className="Questions">
                            {
                                this.questions.map((question, k) => {
                                    const ComponentName = components[question.type]
                                    return (
                                        <Page className="question card m-3 p-3" key={k} id={p++} current={this.state.currentPage} onConstruct={this.addPage}>
                                            <h2>{question.title}</h2>
                                            <ComponentName index={k} value={question.choices} name={question.name} onChange={this.onInputChange} />
                                        </Page>
                                    )
                                })
                            }
                        </Wrapper>
                    </Form>
                </Wrapper>
                {
                    <Page className="question card m-3 p-3" id={p++} current={this.state.currentPage} onConstruct={this.addPage}>
                        <h2>Résultat</h2>
                        <div className="result alert alert-warning">
                            {score} bonne{score > 1 ? 's' : ''} réponse{score > 1 ? 's' : ''} sur {this.state.result.length}
                        </div>
                        {
                            this.questions.map((question, k) => {
                                return (<div className="Feedback" key={k}>
                                    <h3>Question {k}</h3>
                                    {
                                        this.state.result[k] === false ? (<p className="alert alert-danger">{question.feedback}</p>) : (<p className="alert alert-success">Bonne réponse</p>)
                                    }
                                </div>)
                            })
                        }

                    </Page>
                }
                <Nav>
                    <button className="btn btn-secondary" onClick={this.prevPage} disabled={this.state.currentPage < 1} style={{ display: !(this.state.currentPage < p - 1) ? 'none' : 'block' }}> précédente</button>
                    <button className="btn btn-primary" onClick={this.nextPage} disabled={!this.pageValid()} style={{ display: !(this.state.currentPage < p - 1) ? 'none' : 'block' }}>{this.state.currentPage == p - 2 ? "Valider" : "suivante"}</button>
                </Nav>
            </Wrapper>
        )
    }
    componentDidMount() {
        //Au premier render on compte les pages, puis on déclenche un second render une fois terminé.
        // Le setState dans componentDidMount déclenche un nouveau render avant que le navigateur affiche quoi que ce soit.
        if (this.pageCount > 0) {
            this.setState({ pagesCount: this.pageCount })
        }
    }
}

export default SuperAppForm