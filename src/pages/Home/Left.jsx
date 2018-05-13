

import React from 'react'


export default class Left extends React.Component {
  constructor() {
    super();
    this.state = {
      ble: false,
    }
    like:[];
    mess:[]
  }

  componentDidMount() {
    //TODU
  }
  // <div className="areaD" onTouchTap={this.goTouchTap.bind(this, 4)}></div>
  render() {
    let bleIcon = this.state.ble ? 'bleConnect' : 'bleDisconnect';
    return (
      <div className="leftPage">
         <div className="toutchButton" onTouchTap={this.menuButtonTouchTap.bind(this)}>
          <div class="btnImg">
             <img />
          </div>
          <div class="btnText">
          </div>
        </div>
        <div className="toutchButton" onTouchTap={this.menuButtonTouchTap.bind(this)}>
          <div class="btnImg">
            <img />
          </div>
          <div class="btnText">
            {like}
          </div>
        </div>
        <div className="toutchButton" onTouchTap={this.menuButtonTouchTap.bind(this)}>
          <div class="btnImg">
            <img />
          </div>
          <div class="btnText">
            {mess}
          </div>
        </div>
        <div className="toutchButton" onTouchTap={this.menuButtonTouchTap.bind(this)}>
          <div class="btnImg">
            <img />
          </div>
          <div class="btnText">

          </div>
        </div>
        <div className="toutchButton" onTouchTap={this.menuButtonTouchTap.bind(this)}>
          <div class="btnImg">
             <img />
          </div>
          <div class="btnText">

          </div>
        </div>
      </div>
    );
  }

  menuButtonTouchTap() {
    console.log("dianji")
  }

}