var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * This is a template for new plugin wrappers
 *
 * TODO:
 * - Add/Change information below
 * - Document usage (importing, executing main functionality)
 * - Remove any imports that you are not using
 * - Remove all the comments included in this template, EXCEPT the @Plugin wrapper docs and any other docs you added
 * - Remove this note
 *
 */
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var IotVideo = /** @class */ (function (_super) {
    __extends(IotVideo, _super);
    function IotVideo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IotVideo.prototype.coolMethod = function (testMessage) { return cordova(this, "coolMethod", {}, arguments); };
    IotVideo.prototype.initClient = function (configJson, accessToken) { return cordova(this, "initClient", {}, arguments); };
    IotVideo.prototype.joinRoom = function (accessToken, roomId) { return cordova(this, "joinRoom", {}, arguments); };
    IotVideo.prototype.changeRoom = function (configSetting) { return cordova(this, "changeRoom", {}, arguments); };
    IotVideo.prototype.videoLogout = function () { return cordova(this, "videoLogout", {}, arguments); };
    IotVideo.prototype.initDisconnet = function () { return cordova(this, "initDisconnet", {}, arguments); };
    IotVideo.pluginName = "cordova-iot-video-plugin";
    IotVideo.plugin = "cordova-iot-video-plugin";
    IotVideo.pluginRef = "CordovaIotVideoPlugin";
    IotVideo.repo = "https://github.com/yagao0o/cordova-iot-video-plugin";
    IotVideo.install = "";
    IotVideo.installVariables = [];
    IotVideo.platforms = ["Android"];
    IotVideo = __decorate([
        Injectable()
    ], IotVideo);
    return IotVideo;
}(IonicNativePlugin));
export { IotVideo };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2lvdC12aWRlby9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7O0dBVUc7QUFDSCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBaUMxQyw0QkFBaUI7Ozs7SUFTN0MsNkJBQVUsYUFBQyxXQUFtQjtJQVc5Qiw2QkFBVSxhQUFDLFVBQWtCLEVBQUUsV0FBbUI7SUFXbEQsMkJBQVEsYUFBQyxXQUFtQixFQUFFLE1BQWM7SUFVNUMsNkJBQVUsYUFBQyxhQUFxQjtJQVNoQyw4QkFBVztJQVNYLGdDQUFhOzs7Ozs7OztJQTNERixRQUFRO1FBRHBCLFVBQVUsRUFBRTtPQUNBLFFBQVE7bUJBN0NyQjtFQTZDOEIsaUJBQWlCO1NBQWxDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoaXMgaXMgYSB0ZW1wbGF0ZSBmb3IgbmV3IHBsdWdpbiB3cmFwcGVyc1xuICpcbiAqIFRPRE86XG4gKiAtIEFkZC9DaGFuZ2UgaW5mb3JtYXRpb24gYmVsb3dcbiAqIC0gRG9jdW1lbnQgdXNhZ2UgKGltcG9ydGluZywgZXhlY3V0aW5nIG1haW4gZnVuY3Rpb25hbGl0eSlcbiAqIC0gUmVtb3ZlIGFueSBpbXBvcnRzIHRoYXQgeW91IGFyZSBub3QgdXNpbmdcbiAqIC0gUmVtb3ZlIGFsbCB0aGUgY29tbWVudHMgaW5jbHVkZWQgaW4gdGhpcyB0ZW1wbGF0ZSwgRVhDRVBUIHRoZSBAUGx1Z2luIHdyYXBwZXIgZG9jcyBhbmQgYW55IG90aGVyIGRvY3MgeW91IGFkZGVkXG4gKiAtIFJlbW92ZSB0aGlzIG5vdGVcbiAqXG4gKi9cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsdWdpbiwgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG4vKipcbiAqIEBuYW1lIGlvdC12aWRlb1xuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIHBsdWdpbiBkb2VzIHNvbWV0aGluZ1xuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgaW90LXZpZGVvIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9pb3QtdmlkZW8nO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGlvdC12aWRlbzogaW90LXZpZGVvKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogdGhpcy5pb3QtdmlkZW8uZnVuY3Rpb25OYW1lKCdIZWxsbycsIDEyMylcbiAqICAgLnRoZW4oKHJlczogYW55KSA9PiBjb25zb2xlLmxvZyhyZXMpKVxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdjb3Jkb3ZhLWlvdC12aWRlby1wbHVnaW4nLFxuICBwbHVnaW46ICdjb3Jkb3ZhLWlvdC12aWRlby1wbHVnaW4nLCAvLyBucG0gcGFja2FnZSBuYW1lLCBleGFtcGxlOiBjb3Jkb3ZhLXBsdWdpbi1jYW1lcmFcbiAgcGx1Z2luUmVmOiAnQ29yZG92YUlvdFZpZGVvUGx1Z2luJywgLy8gdGhlIHZhcmlhYmxlIHJlZmVyZW5jZSB0byBjYWxsIHRoZSBwbHVnaW4sIGV4YW1wbGU6IG5hdmlnYXRvci5nZW9sb2NhdGlvblxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL3lhZ2FvMG8vY29yZG92YS1pb3QtdmlkZW8tcGx1Z2luJywgLy8gdGhlIGdpdGh1YiByZXBvc2l0b3J5IFVSTCBmb3IgdGhlIHBsdWdpblxuICBpbnN0YWxsOiAnJywgLy8gT1BUSU9OQUwgaW5zdGFsbCBjb21tYW5kLCBpbiBjYXNlIHRoZSBwbHVnaW4gcmVxdWlyZXMgdmFyaWFibGVzXG4gIGluc3RhbGxWYXJpYWJsZXM6IFtdLCAvLyBPUFRJT05BTCB0aGUgcGx1Z2luIHJlcXVpcmVzIHZhcmlhYmxlc1xuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddIC8vIEFycmF5IG9mIHBsYXRmb3JtcyBzdXBwb3J0ZWQsIGV4YW1wbGU6IFsnQW5kcm9pZCcsICdpT1MnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBJb3RWaWRlbyBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcblxuICBcbiAgLyoqXG4gICAqIFRoaXMgZnVuY3Rpb24gZG9lcyBzb21ldGhpbmdcbiAgICogQHBhcmFtIHRlc3RNZXNzYWdlIHtzdHJpbmd9IOa1i+ivlW1lc3NhZ2VcbiAgICogQHJldHVybiB7UHJvbWlzZTxzdHJpbmc+fSDmtYvor5VtZXNzYWdl6L+U5ZueXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGNvb2xNZXRob2QodGVzdE1lc3NhZ2U6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIOWIneWni+WMluinhumikeacjeWKoemFjee9rlxuICAgKiBAcGFyYW0gY29uZmlnSnNvbiB7c3RyaW5nfSDop4bpopHmnI3liqHphY3nva7pobnnm64sIOWPguiAgyBjb3Jkb3ZhLWlvdC12aWRlby1wbHVnaW4g5Lit6K+05piOXG4gICAqIEBwYXJhbSBhY2Nlc3NUb2tlbiB7c3RyaW5nfSDlvZPliY3nlKjmiLd0b2tlblxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IOi/lOWbnuWIneWni+WMlue7k+aenFxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBpbml0Q2xpZW50KGNvbmZpZ0pzb246IHN0cmluZywgYWNjZXNzVG9rZW46IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIOi/nuaOpeS9nOaImOWupFxuICAgKiBAcGFyYW0gYWNjZXNzVG9rZW4ge3N0cmluZ30g55So5oi355m75b2VdG9rZW5cbiAgICogQHBhcmFtIHJvb21JZCB7c3RyaW5nfSDmiL/pl7Tlj7dcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSDov5Tlm57nu5PmnpxcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgam9pblJvb20oYWNjZXNzVG9rZW46IHN0cmluZywgcm9vbUlkOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiDlj5fliLDpgoDor7cs6Lez6L2s5oi/6Ze0XG4gICAqIEBwYXJhbSBjb25maWdTZXR0aW5nIHtzdHJpbmd9IOaIv+mXtOi3s+i9rOiuvue9rlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IOi/lOWbnue7k+aenFxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBjaGFuZ2VSb29tKGNvbmZpZ1NldHRpbmc6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIOeUqOaIt+mAgOWHuueZu+mZhlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IOi/lOWbnue7k+aenFxuICAgKi9cbiAgQENvcmRvdmEoKVxuICB2aWRlb0xvZ291dCgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiDivaTnlKjmiLfpgIDlh7rlupTivaTnlKhcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSDov5Tlm57nu5PmnpxcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgaW5pdERpc2Nvbm5ldCgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19