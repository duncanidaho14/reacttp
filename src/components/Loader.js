import React, { Component } from 'react'

export default class Loader extends Component {
    constructor(props) {
        super(props)
        this.data = null
        this.state = {
            dataLoaded: false,
            imagesLoaded: false,
        }
        
        
    }
    loadData = url => {
        fetch(url).then(response => {
            return response.json()
        }).then((data) => {
            this.data = data
            this.setState({dataLoaded: true})
            this.data.images.forEach((image) => {
                image.loaded = false
                const img = new Image()
                img.src = `${this.data.path}${this.data.full_folder}/${image.name}.${data.extension}?raw=true`;
                img.onload = () => {
                    image.loaded = true
                    this.checkImagesLoad()
                }
            })
        })
    }
    checkImagesLoad = () => {
        if(!this.data.images.find(image => image.loaded === false)) {
            this.setState({imagesLoaded: true})
            this.props.onload(this.data)            
        }
    }
    
    render() {
        return (
            <div>
                <div className="loader" id="loader-1"></div>
            </div>
        )
    }
    componentDidMount() {
        this.loadData(this.props.url)
    }
}
