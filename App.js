import * as React from 'react';
import { Platform, StyleSheet, Text, View, BackHandler } from 'react-native';
import { WebView } from 'react-native-webview';
import { DeviceInfo} from 'react-native-device-info';
import UserAgent from 'react-native-user-agent';

class App extends React.Component {
  
  /** 컴포넌트가 실행될 때 제일 먼저 실행될 생성자 */
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

  aaa = navState => {
    console.log(navState);
    this.webView.canGoBack = navState.canGoBack;
  }

  showSpinner() {
    console.log('Show Spinner');

    this.ActivityIndicatorLoadingView();
    
    this.setState({ visible: true });
  }

  hideSpinner() {
    console.log('Hide Spinner');
    this.setState({ visible: false });
  }

  ActivityIndicatorLoadingView() {
    //making a view to show to while loading the webpage
    return (
      <ActivityIndicator
        color="#009688"
        size="large"
        style={style.ActivityIndicatorStyle}
      />
    );
  }
  render() {
    return (
      <View style={style.styleNew}>
        <WebView
          style={style.WebViewStyle}
          /**
         * source : url or html 작성
         * ref : 해당 변수 데이터를 확인한다. vue = ref="변수" javascript : this.refs.변수 = 데이터 부르기
         * userAgent : react-native-webview 함수
         * userAgent를 변경하는 방법은 : npm install --save react-native-user-agent 설치
         * .getUserAgent()를 가져와서 문자열로 추가
         */
          userAgent={UserAgent.getUserAgent() + "APP_"}  
          source={{ uri: "https://www.naver.com" }}
          ref={(webView) => { this.webView.ref = webView; }}
          /**
           * javascript 허용
           * DOM cache 삭제
          */
          javaScriptEnabled={true}
          domStorageEnabled={true}
          /**
           * 화면이 변할 때 마다 바뀔 내장 함수
           */
          onNavigationStateChange={this.aaa}
          renderLoading = {this.ActivityIndicatorLoadingView}
          startInLoadingState={true}
          onLoadStart={() => this.showSpinner()}
          onLoad={() => this.showSpinner()}
          onLoadEnd={() => this.hideSpinner()}
          >
        </WebView>
      </View>
    );
  }
}

// flex의 부모는 무조건1
// 안에 컴포넌트는 flex 2로 해야 보인다
const style = StyleSheet.create({
  stylOld: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  styleNew: {
    flex: 1,
  },
  WebViewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 2,
  },
  ActivityIndicatorStyle: {
      flex: 1,
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      position: 'absolute',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex : 1000,
  },
})

export default App;
