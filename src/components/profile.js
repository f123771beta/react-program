import React from 'react'
import 'whatwg-fetch'
// profile
export default class myProfile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            lists: []
        }   
    }
    fetchFn = () => {
        fetch('../src/data/content.json')
            .then((res) => { console.log(res.status);return res.json() })
            .then((data) => { this.setState({lists:data.listData}) })
            .catch((e) => { console.log(e.message) })
    }
    componentDidMount() {
        this.fetchFn()
    }

    render() {
        return (
            <div className="pro-box">
                <img src="./src/assets/images/face.jpg" width="150" className="profile fadeInUp lastPic" />
                <span className="profiles">Profile</span>
             
                    {
                        this.state.lists.map((e) => {
                            return (
                                <div className="text-box">
                                    <p className="titlelist">{ e.title }</p>
                                    <p className="doclist">{ e.text }</p>
                                </div>
                            )
                        })
                    }
            
        </div>
        )
    }       
}