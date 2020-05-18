import React, { Component } from 'react'

export default class ImageList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            size: this.props.size === "full" ? [400, 320] : [80, 80]
        }
    }
    render() {
        let jsx = (<ul className={`imagelist ${this.props.size}`} style={{left:0}}></ul>);

        if (this.props.data) {
            let style = {}
            if (this.props.size !== 'thumb') {
                style = {
                    width: this.props.data.images.length * this.state.size[0],
                    left: this.props.current ? -this.props.current * this.state.size[1] : 0
                }
            }
            jsx = (<ul className={`imagelist ${this.props.size}`} style={style}>
                {
                    this.props.data.images.map((image, k) => {
                        return (
                            <li key={k} className={this.props.current === k ? "active" : ""}>
                                <img
                                    style={{width: this.state.size[0],
                                            height: this.state.size[1]
                                        }}
                                    src={`${this.props.data.path}${this.props.data[this.props.size + '_folder']}/${image.name}.${this.props.data.extension}?raw=true`} />
                            </li>
                        )
                    })
                }
            </ul>);
        }

        return (
            jsx
        )
    }
}
