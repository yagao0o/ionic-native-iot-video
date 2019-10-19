import { IonicNativePlugin } from '@ionic-native/core';
/**
 * @name iot-video
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { iot-video } from '@ionic-native/iot-video';
 *
 *
 * constructor(private iot-video: iot-video) { }
 *
 * ...
 *
 *
 * this.iot-video.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
export declare class IotVideo extends IonicNativePlugin {
    /**
     * This function does something
     * @param testMessage {string} 测试message
     * @return {Promise<string>} 测试message返回
     */
    coolMethod(testMessage: string): Promise<string>;
    /**
     * 初始化视频服务配置
     * @param configJson {string} 视频服务配置项目, 参考 cordova-iot-video-plugin 中说明
     * @param accessToken {string} 当前用户token
     * @return {Promise<any>} 返回初始化结果
     */
    initClient(configJson: string, accessToken: string): Promise<string>;
    /**
     * 连接作战室
     * @param accessToken {string} 用户登录token
     * @param roomId {string} 房间号
     * @return {Promise<any>} 返回结果
     */
    joinRoom(accessToken: string, roomId: string): Promise<any>;
    /**
     * 受到邀请,跳转房间
     * @param configSetting {string} 房间跳转设置
     * @return {Promise<any>} 返回结果
     */
    changeRoom(configSetting: string): Promise<any>;
    /**
     * 用户退出登陆
     * @return {Promise<any>} 返回结果
     */
    videoLogout(): Promise<any>;
    /**
     * ⽤用户退出应⽤用
     * @return {Promise<any>} 返回结果
     */
    initDisconnet(): Promise<any>;
}
