
# Ionic Native Iot Video

    cordova plugin add https://github.com/yagao0o/cordova-iot-video-plugin
    npm install github:yagao0o/ionic-native-iot-video

## Ionic包用法

```Typescript
import { IotVideo } from '@ionic-native/iot-video/ngx';

constructor(private iotVideo: IotVideo) { }
// coolMethod
this.iot.coolMethod('hehe').then(
  success => {
    console.log(success);
  },
  err => {
    console.log(err);
  }
);


// initClient
const config = {
  imAppKey: 'appKey', //AppKey
  imNavServer: 'https://ip:port', //修改为对应的IP+端口
  rtcAppId: '',
  rtcCmpServer: '',
  rtcToken: '',
  baseUrl: 'https://ip:port', //修改为对应的IP+端口
  fileServer: 'https://ip:port'  //修改为对应的IP+端口
};
this.iot.initClient(JSON.stringify(config)).then(
  success => {
    console.log(success);
  },
  error => {
    console.log(error);
  }
);

// joinRoom
this.iot.joinRoom(this.userId,this.roomId,this.userAccount).then(
  success => {
    console.log(success);
  },
  error => {
    console.log(error);
  }
);
```