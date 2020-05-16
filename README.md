# react-native webview-android
[WebView] Android 삽질노트
#### 0. npm or yarn
```npm
npm install -g yarn
```

#### 1. react-native npm 설치
```npm
npm install -g create-react-native-app
```
```npm
yarn add create-react-native-app
```
<br>
<br>
**현재 0.63버전까지 나왔는데, android build를 할 때 심각한 오류가 있는 문제가 있다. 그래서 버전을 낮춰서 다운을 받아야하고,**
```npm
yarn add create-react-native-app@0.62
```
**으로 다운을 받아야한다.**

#### 2. react-native project 설치
```npm
create-react-natvie-app projectName
```

#### 3. react-native webview 설치
```npm
cd projectName
npm install --save react-native-webview
```

###### react-native안에 webview에 대한 compornent가 있지만 따로 web-view를 설치해서 쓰는 이유는 같은 기능이지만 npm web-view가 표준으로 바뀌고 있기 떄문에 web-view로 사용을 하는 중입니다.

#### react-navite build 하는 법
```npm
yarn android # android build
yarn ios # you need to use macOS to build the iOS project - use the Expo app if you need to do iOS development without a Mac
yarn web # web test build
```

#### react-native로 유저에 대한 정보 확인하거나 바꿀 때
```npm
yarn add react-native-device-info

yarn add react-native-user-agent
```

``` js
import agent from 'react-native-user-agent'
```
[react-native-device-info](https://github.com/react-native-community/react-native-device-info)<br/>
[react-native-user-agent](https://www.npmjs.com/package/react-native-user-agent/v/0.0.9)

#### anroid와 ios push 기능
###### 우선 react-native에서는 push 기능을 지원해주지않는다. 그래서 firebase와 각 native 언어를 확인해서 연동해서 사용이 가능하다


#### 1. 안드로이드 빌드할 때 발생하는 에러

##### 1) build 자체 에러
###### 1. 현재 데스크 상태에서 android 기기에 대한 정보가 없기 떄문에 발생을 한다. 그래서 android 폰을 usb에 인식하게 한 후에 빌드 하는 방법이 있다.
###### 2. android studio 설치후 가상 에뮤레이터 실행 후 build 하는 방법
[안드로이드 스튜디오](https://developer.android.com/studio/install?hl=ko)<br>
> 처음 설치를 하게되면 이렇게 해도 에러가 발생한다. 
> 에러가 발생할 경우 files -> setting(Ctrl+Alt+s) -> System Settings -> Android SDK -> sdk platforms -> version 설치
> files -> setting(Ctrl+Alt+s) -> System Settings -> Android SDK -> sdk tools -> all check

#### AVD Manager 클릭
##### virtual emulator > 기기 선택 후 yarn build 성공

#### react native 빌드시 에러 날때
###### gradlew cleanBuildCache('windows') or ./gradlew cleanBuildCache(mac or liunx)
