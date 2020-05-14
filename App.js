import React from 'react';
import { StyleSheet, Text, View, BackHandler } from 'react-native';
import {WebView} from 'react-native-webview'
import DeviceInfo  from 'react-native-device-info';
import UserAgent from 'react-native-user-agent;'

class App extends React.Component {
  
  /** 컴포넌트가 실행될 때 제일 먼저 실행될 생성자 */
  constructor(props){
    super(props);
    console.log("constructor");
    this.UserAgent = UserAgent.getUserAgent();
    console.log(UserAgent.getUserAgent());
    // console.log(UserAgent);
  }

  webView = {
    canGoBack: false,
    ref: null,
  }
  /**
   * 뒤로가기 전용 메소드
   */
  onAndroidBackPress = () => {
    if (this.webView.canGoBack && this.webView.ref) {
      this.webView.ref.goBack();
      return true;
    }
    return false;
  }

  /**
   * android 전용(핸드폰에 있는) 뒤로가기
   * ios 같은 경우 뒤로가기가 따로 없어서 뒤로가기를 생성해줘야한다.
   * componentDidMount : 해당 js가 생성할 때 Lift Cycle
   */
  componentDidMount() {
    if (Platform.OS === 'android') {
      BackHandler.addEventListener('hardwareBackPress', this.onAndroidBackPress);
    }
  }

  componentWillUnmount() {
    if (Platform.OS === 'android') {
      BackHandler.removeEventListener('hardwareBackPress');
    }
  }

  render() {
    console.log(thirs.userAgent);
    return (
      <WebView
      /**
       * source : url or html 작성
       * ref : 해당 변수 데이터를 확인한다. vue = ref="변수" javascript : this.refs.변수 = 데이터 부르기
       */
        userAgent={this.UserAgent} 
        source={{ uri: "http://m.mint05.com/main/main.php" }}
        ref={(webView) => { this.webView.ref = webView; }}
        /**
         * 화면이 변할 때 마다 바뀔 내장 함수
         */
        onNavigationStateChange={(navState) => { this.webView.canGoBack = navState.canGoBack; }}
      />
    );
  }
}

export default App;
