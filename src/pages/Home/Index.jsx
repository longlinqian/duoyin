import React from 'react'
import Foot from './Foot.jsx'

export default class Index extends React.Component {
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
      <div className="indexPage">
        {/*<div className="connectionButton" onTouchTap={this.connectionButtonTouchTap.bind(this)}>*/}
          {/*<div className={bleIcon}></div>*/}
        {/*</div>*/}
        <div className="workspace">
        
        </div>
        <Foot></Foot>
      </div>
    );
  }

  /**
   * 跳转到不同的链接
   * @param index
   */
  goTouchTap(index) {
    switch (index) {
      case 1:
        this.props.history.push('/list/k1');
        break;
      case 2:
        this.props.history.push('/list/k2');
        break;
      case 3:
        this.props.history.push('/app');
        break;
      case 4:
        this.props.history.push('/testBle');
        break;
    }
  }

  settingButtonTouchTap() {
    this.refs.settingPanel.open();
  }

  /**
   * 进入机器人连接窗口
   */
  connectionButtonTouchTap() {
    this.refs.connectionView.open();
  }

  /**
   * 蓝牙连接机器人的回调函数
   * @param {*} isSuccess
   */
  async connectionControlBack(isSuccess) {
    try{
      if (isSuccess) {
        this.onConnection();
      } else {
        let robot = robotManage.getCurrentRobot();
        if (!robot) {
          this.onDisConnect();
        }
      }
    }catch(error){
      console.error(error);
    }
  }

  onConnection() {
    let robot = robotManage.getCurrentRobot();
    this.setState({
      ble: true
    });
  }

  onDisConnect() {
    this.setState({
      ble: false,
    });
  }

  async showfirmwareModal(version){
    return await this.refs.firmwareModal.open(version);
  }

  closefirmwareModal(){
    this.refs.firmwareModal.close();
  }

  showAboutUsModal() {
    this.refs.aboutUsModal.show();
  }

  hideAboutUsModal() {
    this.refs.aboutUsModal.hide();
  }

  onLanguageModal(ty) {
    console.log('chagelanguageModal:---'+ ty);
    if(ty)this.refs.languageMode.show();
    else this.refs.languageMode.hide();
  }

  async showCheckUpdate(mode,curVersion,lastVersion){
    return await this.refs.checkUpdate.show(mode,curVersion,lastVersion);
  }
}
