import React, { Component } from 'react'
import Task from './Task'

export default class TaskList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tasks: [
                {
                    id: 1,
                    description: 'Allez au lit',
                    complete: true
                },
                {
                    id: 2,
                    description: 'Faire ses courses',
                    complete: false
                },
                {
                    id: 3 ,
                    description: 'Jeux Vidéo',
                    complete: false
                }
            ]
        }
    }
    render() {
         
        return (
            <div>
                <h1>Toutes les tâches</h1>
              {
                  this.state.tasks.map(task => {
                      return (
                        <Task task={task} key={task.id} />
                      )
                  })
              }
            </div>
        )
    }
}
