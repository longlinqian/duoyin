

import React from 'react'


export default class Foot extends React.Component {
  constructor() {
    super();
    this.state = {
      ble: false,
    }
  }

  componentDidMount() {
    //TODU
  }
  // <div className="areaD" onTouchTap={this.goTouchTap.bind(this, 4)}></div>
  render() {
    let bleIcon = this.state.ble ? 'bleConnect' : 'bleDisconnect';
    return (
      <div className="footPage">
       <div className="settingButton" onTouchTap={this.menuButtonTouchTap.bind(this)}>

        <img  src="./res/images/fresh.png"/>

      </div>
      <div className="settingButton" onTouchTap={this.menuButtonTouchTap.bind(this)}>

        关注

      </div>
      <div className="settingButton" onTouchTap={this.menuButtonTouchTap.bind(this)}>

        +


      </div>
      <div className="settingButton" onTouchTap={this.menuButtonTouchTap.bind(this)}>

        消息

      </div>
      <div className="settingButton" onTouchTap={this.menuButtonTouchTap.bind(this)}>

        我
        </div>

      </div>
    );
  }

  menuButtonTouchTap(){
    console.log("dianji")
  }

}