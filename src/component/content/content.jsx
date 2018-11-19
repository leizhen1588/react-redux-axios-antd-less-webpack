import React, {Component} from 'react'
import './content.less'


class Content extends Component {
    constructor() {
        super();
        this.state = {
           userName:  `我的名字`,
            name:''
        };
    }

    componentWillMount(){
        this.$http({
            url:'/xxx',
            method:'post',
            data:{
                'name':'sss',
                'url':'sssssdddd'
            }
        }).then(res => {

        })
    }
    goHome=(e)=>{
        console.log(e)
   this.state.name = window.getSelection().toString()
    }
    custnu(event){
    console.log(event)
        event.preventDefault()
        console.log(this.state.name)
    }

    allowDrop(ev){
        ev.preventDefault();
    }
    drag(ev){
        ev.dataTransfer.setData("Text",ev.target.id);
    }
    drop(ev){
        ev.preventDefault();
        var data=ev.dataTransfer.getData("Text");
        ev.target.appendChild(document.getElementById(data));
    }


    render() {
        // return (
        //     <div>
        //         <div dangerouslySetInnerHTML={{__html: this.state.userName}}></div>
        //         <div dangerouslySetInnerHTML={{__html: this.state.userName[0].content}}></div>
        //         <div dangerouslySetInnerHTML={{__html: this.state.userName[1].title}}></div>
        //         <div dangerouslySetInnerHTML={{__html: this.state.userName[1].content}}></div>
        //     </div>
        // )

        return (
            <div style={{margin: '20px 0 0 20px'}}>
                {this.state.userName}
            </div>
        );
    }
}




export default Content