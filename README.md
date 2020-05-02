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
yarn android
yarn ios # you need to use macOS to build the iOS project - use the Expo app if you need to do iOS development without a Mac
yarn web
```

