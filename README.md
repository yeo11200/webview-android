# react-native webview-android
[WebView] Android 삽질노트

#### 1. react-native npm 설치
```npm
npm install -g create-react-native-app
```

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



#### 1. 안드로이드 빌드할 때 발생하는 에러

##### 1) build 자체 에러
###### 1. 현재 데스크 상태에서 android 기기에 대한 정보가 없기 떄문에 발생을 한다. 그래서 android 폰을 usb에 인식하게 한 후에 빌드 하는 방법이 있다.
<br>
###### 2. android studio 설치후 가상 에뮤레이터 실행 후 build 하는 방법
<br>
[안드로이드 스튜디오](https://developer.android.com/studio/install?hl=ko)<br>
> 처음 설치를 하게되면 이렇게 해도 에러가 발생한다. 

