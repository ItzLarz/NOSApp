/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/tizen-common-web/index.js":
/*!************************************************!*\
  !*** ./node_modules/tizen-common-web/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlarmAbsolute": () => (/* binding */ AlarmAbsolute),
/* harmony export */   "AlarmRelative": () => (/* binding */ AlarmRelative),
/* harmony export */   "ApplicationControl": () => (/* binding */ ApplicationControl),
/* harmony export */   "ApplicationControlData": () => (/* binding */ ApplicationControlData),
/* harmony export */   "AttributeFilter": () => (/* binding */ AttributeFilter),
/* harmony export */   "AttributeRangeFilter": () => (/* binding */ AttributeRangeFilter),
/* harmony export */   "Bundle": () => (/* binding */ Bundle),
/* harmony export */   "CompositeFilter": () => (/* binding */ CompositeFilter),
/* harmony export */   "DownloadRequest": () => (/* binding */ DownloadRequest),
/* harmony export */   "ExifInformation": () => (/* binding */ ExifInformation),
/* harmony export */   "IotconOption": () => (/* binding */ IotconOption),
/* harmony export */   "Query": () => (/* binding */ Query),
/* harmony export */   "Representation": () => (/* binding */ Representation),
/* harmony export */   "Response": () => (/* binding */ Response),
/* harmony export */   "SimpleCoordinates": () => (/* binding */ SimpleCoordinates),
/* harmony export */   "SortMode": () => (/* binding */ SortMode),
/* harmony export */   "TZDate": () => (/* binding */ TZDate),
/* harmony export */   "TimeDuration": () => (/* binding */ TimeDuration),
/* harmony export */   "VoiceControlCommand": () => (/* binding */ VoiceControlCommand),
/* harmony export */   "account": () => (/* binding */ account),
/* harmony export */   "alarm": () => (/* binding */ alarm),
/* harmony export */   "application": () => (/* binding */ application),
/* harmony export */   "archive": () => (/* binding */ archive),
/* harmony export */   "content": () => (/* binding */ content),
/* harmony export */   "datacontrol": () => (/* binding */ datacontrol),
/* harmony export */   "download": () => (/* binding */ download),
/* harmony export */   "exif": () => (/* binding */ exif),
/* harmony export */   "filesystem": () => (/* binding */ filesystem),
/* harmony export */   "iotcon": () => (/* binding */ iotcon),
/* harmony export */   "keymanager": () => (/* binding */ keymanager),
/* harmony export */   "mediacontroller": () => (/* binding */ mediacontroller),
/* harmony export */   "messageport": () => (/* binding */ messageport),
/* harmony export */   "package": () => (/* binding */ pkg),
/* harmony export */   "push": () => (/* binding */ push),
/* harmony export */   "systeminfo": () => (/* binding */ systeminfo),
/* harmony export */   "time": () => (/* binding */ time),
/* harmony export */   "tvaudiocontrol": () => (/* binding */ tvaudiocontrol),
/* harmony export */   "tvdisplaycontrol": () => (/* binding */ tvdisplaycontrol),
/* harmony export */   "tvinfo": () => (/* binding */ tvinfo),
/* harmony export */   "tvinputdevice": () => (/* binding */ tvinputdevice),
/* harmony export */   "tvwindow": () => (/* binding */ tvwindow),
/* harmony export */   "voicecontrol": () => (/* binding */ voicecontrol),
/* harmony export */   "websetting": () => (/* binding */ websetting)
/* harmony export */ });
const {
    AlarmAbsolute,
    AlarmRelative,
    ApplicationControl,
    ApplicationControlData,
    AttributeFilter,
    AttributeRangeFilter,
    Bundle,
    CompositeFilter,
    DownloadRequest,
    ExifInformation,
    IotconOption,
    Query,
    Representation,
    Response,
    SimpleCoordinates,
    SortMode,
    TZDate,
    TimeDuration,
    VoiceControlCommand,
    account,
    alarm,
    application,
    archive,
    content,
    datacontrol,
    download,
    exif,
    filesystem,
    iotcon,
    keymanager,
    mediacontroller,
    messageport,
    push,
    systeminfo,
    time,
    tvaudiocontrol,
    tvdisplaycontrol,
    tvinfo,
    tvinputdevice,
    tvwindow,
    voicecontrol,
    websetting
} = window.tizen;

const pkg = window.tizen.package;



/***/ }),

/***/ "./node_modules/tizen-tv-webapis/index.js":
/*!************************************************!*\
  !*** ./node_modules/tizen-tv-webapis/index.js ***!
  \************************************************/
/***/ (function() {

(function(e, a) { for(var i in a) e[i] = a[i]; }(this, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __nested_webpack_require_225__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_225__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__nested_webpack_require_225__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__nested_webpack_require_225__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__nested_webpack_require_225__.d = function(exports, name, getter) {
/******/ 		if(!__nested_webpack_require_225__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__nested_webpack_require_225__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__nested_webpack_require_225__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __nested_webpack_require_225__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__nested_webpack_require_225__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __nested_webpack_require_225__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__nested_webpack_require_225__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__nested_webpack_require_225__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__nested_webpack_require_225__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__nested_webpack_require_225__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __nested_webpack_require_225__(__nested_webpack_require_225__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebAPIException = exports.systeminfo = exports.widgetdata = exports.tvinfo = exports.sso = exports.productinfo = exports.network = exports.billing = exports.avplaystore = exports.avplay = exports.avinfo = exports.appcommon = exports.adinfo = exports.webapis = exports.SsoLoginState = exports.TvInfoValue = exports.TvInfoKey = exports.TvInfoMenuValue = exports.TvInfoMenuKey = exports.ProductInfoSiServerType = exports.ProductInfoNoGlass3dSupport = exports.ProductInfoConfigKey = exports.NetworkWiFiEncryptionType = exports.NetworkWiFiSecurityMode = exports.NetworkState = exports.NetworkActiveConnectionType = exports.NetworkIpMode = exports.AvInfoDigitalCompMode = exports.AppCommonScreenSaverState = void 0;
var AppCommonScreenSaverState;
(function (AppCommonScreenSaverState) {
    AppCommonScreenSaverState[AppCommonScreenSaverState["SCREEN_SAVER_OFF"] = 0] = "SCREEN_SAVER_OFF";
    AppCommonScreenSaverState[AppCommonScreenSaverState["SCREEN_SAVER_ON"] = 1] = "SCREEN_SAVER_ON";
})(AppCommonScreenSaverState = exports.AppCommonScreenSaverState || (exports.AppCommonScreenSaverState = {}));
var AvInfoDigitalCompMode;
(function (AvInfoDigitalCompMode) {
    AvInfoDigitalCompMode[AvInfoDigitalCompMode["DOLBY_DIGITAL_COMP_MODE_LINE"] = 0] = "DOLBY_DIGITAL_COMP_MODE_LINE";
    AvInfoDigitalCompMode[AvInfoDigitalCompMode["DOLBY_DIGITAL_COMP_MODE_RF"] = 1] = "DOLBY_DIGITAL_COMP_MODE_RF";
})(AvInfoDigitalCompMode = exports.AvInfoDigitalCompMode || (exports.AvInfoDigitalCompMode = {}));
var NetworkIpMode;
(function (NetworkIpMode) {
    NetworkIpMode[NetworkIpMode["NONE"] = 0] = "NONE";
    NetworkIpMode[NetworkIpMode["STATIC"] = 1] = "STATIC";
    NetworkIpMode[NetworkIpMode["DYNAMIC"] = 2] = "DYNAMIC";
    NetworkIpMode[NetworkIpMode["AUTO"] = 3] = "AUTO";
    NetworkIpMode[NetworkIpMode["FIXED"] = 4] = "FIXED";
    NetworkIpMode[NetworkIpMode["UNKNOWN"] = 5] = "UNKNOWN";
})(NetworkIpMode = exports.NetworkIpMode || (exports.NetworkIpMode = {}));
var NetworkActiveConnectionType;
(function (NetworkActiveConnectionType) {
    NetworkActiveConnectionType[NetworkActiveConnectionType["DISCONNECTED"] = 0] = "DISCONNECTED";
    NetworkActiveConnectionType[NetworkActiveConnectionType["WIFI"] = 1] = "WIFI";
    NetworkActiveConnectionType[NetworkActiveConnectionType["CELLULAR"] = 2] = "CELLULAR";
    NetworkActiveConnectionType[NetworkActiveConnectionType["ETHERNET"] = 3] = "ETHERNET";
})(NetworkActiveConnectionType = exports.NetworkActiveConnectionType || (exports.NetworkActiveConnectionType = {}));
var NetworkState;
(function (NetworkState) {
    NetworkState[NetworkState["LAN_CABLE_ATTACHED"] = 1] = "LAN_CABLE_ATTACHED";
    NetworkState[NetworkState["LAN_CABLE_DETACHED"] = 2] = "LAN_CABLE_DETACHED";
    NetworkState[NetworkState["LAN_CABLE_STATE_UNKNOWN"] = 3] = "LAN_CABLE_STATE_UNKNOWN";
    NetworkState[NetworkState["GATEWAY_CONNECTED"] = 4] = "GATEWAY_CONNECTED";
    NetworkState[NetworkState["GATEWAY_DISCONNECTED"] = 5] = "GATEWAY_DISCONNECTED";
    NetworkState[NetworkState["WIFI_MODULE_STATE_ATTACHED"] = 6] = "WIFI_MODULE_STATE_ATTACHED";
    NetworkState[NetworkState["WIFI_MODULE_STATE_DETACHED"] = 7] = "WIFI_MODULE_STATE_DETACHED";
    NetworkState[NetworkState["WIFI_MODULE_STATE_UNKNOWN"] = 8] = "WIFI_MODULE_STATE_UNKNOWN";
})(NetworkState = exports.NetworkState || (exports.NetworkState = {}));
var NetworkWiFiSecurityMode;
(function (NetworkWiFiSecurityMode) {
    NetworkWiFiSecurityMode[NetworkWiFiSecurityMode["WEP"] = 1] = "WEP";
    NetworkWiFiSecurityMode[NetworkWiFiSecurityMode["WPA_PSK"] = 2] = "WPA_PSK";
    NetworkWiFiSecurityMode[NetworkWiFiSecurityMode["WPA2_PSK"] = 3] = "WPA2_PSK";
    NetworkWiFiSecurityMode[NetworkWiFiSecurityMode["EAP"] = 4] = "EAP";
    NetworkWiFiSecurityMode[NetworkWiFiSecurityMode["NONE"] = 5] = "NONE";
    NetworkWiFiSecurityMode[NetworkWiFiSecurityMode["UNKNOWN"] = 6] = "UNKNOWN";
})(NetworkWiFiSecurityMode = exports.NetworkWiFiSecurityMode || (exports.NetworkWiFiSecurityMode = {}));
var NetworkWiFiEncryptionType;
(function (NetworkWiFiEncryptionType) {
    NetworkWiFiEncryptionType[NetworkWiFiEncryptionType["WEP"] = 1] = "WEP";
    NetworkWiFiEncryptionType[NetworkWiFiEncryptionType["TKIP"] = 2] = "TKIP";
    NetworkWiFiEncryptionType[NetworkWiFiEncryptionType["AES"] = 3] = "AES";
    NetworkWiFiEncryptionType[NetworkWiFiEncryptionType["TKIP_AES_MIXED"] = 4] = "TKIP_AES_MIXED";
    NetworkWiFiEncryptionType[NetworkWiFiEncryptionType["NONE"] = 5] = "NONE";
    NetworkWiFiEncryptionType[NetworkWiFiEncryptionType["UNKNOWN"] = 6] = "UNKNOWN";
})(NetworkWiFiEncryptionType = exports.NetworkWiFiEncryptionType || (exports.NetworkWiFiEncryptionType = {}));
var ProductInfoConfigKey;
(function (ProductInfoConfigKey) {
    ProductInfoConfigKey[ProductInfoConfigKey["CONFIG_KEY_DATA_SERVICE"] = 0] = "CONFIG_KEY_DATA_SERVICE";
    ProductInfoConfigKey[ProductInfoConfigKey["CONFIG_KEY_SERVICE_COUNTRY"] = 1] = "CONFIG_KEY_SERVICE_COUNTRY";
    ProductInfoConfigKey[ProductInfoConfigKey["CONFIG_KEY_SHOPLOGO"] = 2] = "CONFIG_KEY_SHOPLOGO";
    ProductInfoConfigKey[ProductInfoConfigKey["CONFIG_KEY_CHANNELBOUND_APPS_TICKER"] = 3] = "CONFIG_KEY_CHANNELBOUND_APPS_TICKER";
    ProductInfoConfigKey[ProductInfoConfigKey["CONFIG_KEY_SUPPORT_SOCCER_PANEL"] = 4] = "CONFIG_KEY_SUPPORT_SOCCER_PANEL";
    ProductInfoConfigKey[ProductInfoConfigKey["CONFIG_KEY_SUPPORT_ONTV_PANEL"] = 5] = "CONFIG_KEY_SUPPORT_ONTV_PANEL";
    ProductInfoConfigKey[ProductInfoConfigKey["CONFIG_KEY_SUPPORT_NEWSON_PANEL"] = 6] = "CONFIG_KEY_SUPPORT_NEWSON_PANEL";
    ProductInfoConfigKey[ProductInfoConfigKey["CONFIG_KEY_SUPPORT_MYCONTENTS_PANEL"] = 7] = "CONFIG_KEY_SUPPORT_MYCONTENTS_PANEL";
    ProductInfoConfigKey[ProductInfoConfigKey["CONFIG_KEY_SUPPORT_GAME_PANEL"] = 8] = "CONFIG_KEY_SUPPORT_GAME_PANEL";
    ProductInfoConfigKey[ProductInfoConfigKey["CONFIG_KEY_SUPPORT_CLIPS_PANEL"] = 9] = "CONFIG_KEY_SUPPORT_CLIPS_PANEL";
    ProductInfoConfigKey[ProductInfoConfigKey["CONFIG_KEY_SUPPORT_APPS_PANEL"] = 10] = "CONFIG_KEY_SUPPORT_APPS_PANEL";
    ProductInfoConfigKey[ProductInfoConfigKey["CONFIG_KEY_SYSTEM_PNP_COUNTRY"] = 11] = "CONFIG_KEY_SYSTEM_PNP_COUNTRY";
    ProductInfoConfigKey[ProductInfoConfigKey["CONFIG_KEY_PIN"] = 12] = "CONFIG_KEY_PIN";
    ProductInfoConfigKey[ProductInfoConfigKey["CONFIG_GPMURL_KEY_ACRCT"] = 13] = "CONFIG_GPMURL_KEY_ACRCT";
    ProductInfoConfigKey[ProductInfoConfigKey["CONFIG_GPMURL_KEY_AM"] = 14] = "CONFIG_GPMURL_KEY_AM";
    ProductInfoConfigKey[ProductInfoConfigKey["CONFIG_GPMURL_KEY_AQUA"] = 15] = "CONFIG_GPMURL_KEY_AQUA";
    ProductInfoConfigKey[ProductInfoConfigKey["CONFIG_GPMURL_KEY_APPS"] = 16] = "CONFIG_GPMURL_KEY_APPS";
    ProductInfoConfigKey[ProductInfoConfigKey["CONFIG_GPMURL_KEY_CDS"] = 17] = "CONFIG_GPMURL_KEY_CDS";
    ProductInfoConfigKey[ProductInfoConfigKey["CONFIG_GPMURL_KEY_CLIPS"] = 18] = "CONFIG_GPMURL_KEY_CLIPS";
    ProductInfoConfigKey[ProductInfoConfigKey["CONFIG_GPMURL_KEY_EMP"] = 19] = "CONFIG_GPMURL_KEY_EMP";
    ProductInfoConfigKey[ProductInfoConfigKey["CONFIG_GPMURL_KEY_EXPLORER3D"] = 20] = "CONFIG_GPMURL_KEY_EXPLORER3D";
    ProductInfoConfigKey[ProductInfoConfigKey["CONFIG_GPMURL_KEY_FITNESS"] = 21] = "CONFIG_GPMURL_KEY_FITNESS";
    ProductInfoConfigKey[ProductInfoConfigKey["CONFIG_GPMURL_KEY_FKP"] = 22] = "CONFIG_GPMURL_KEY_FKP";
    ProductInfoConfigKey[ProductInfoConfigKey["CONFIG_GPMURL_KEY_GAME"] = 23] = "CONFIG_GPMURL_KEY_GAME";
    ProductInfoConfigKey[ProductInfoConfigKey["CONFIG_GPMURL_KEY_GEO"] = 24] = "CONFIG_GPMURL_KEY_GEO";
    ProductInfoConfigKey[ProductInfoConfigKey["CONFIG_GPMURL_KEY_HA"] = 25] = "CONFIG_GPMURL_KEY_HA";
    ProductInfoConfigKey[ProductInfoConfigKey["CONFIG_GPMURL_KEY_HBBTV"] = 26] = "CONFIG_GPMURL_KEY_HBBTV";
    ProductInfoConfigKey[ProductInfoConfigKey["CONFIG_GPMURL_KEY_IMS"] = 27] = "CONFIG_GPMURL_KEY_IMS";
    ProductInfoConfigKey[ProductInfoConfigKey["CONFIG_GPMURL_KEY_KBO"] = 28] = "CONFIG_GPMURL_KEY_KBO";
    ProductInfoConfigKey[ProductInfoConfigKey["CONFIG_GPMURL_KEY_KIDS"] = 29] = "CONFIG_GPMURL_KEY_KIDS";
    ProductInfoConfigKey[ProductInfoConfigKey["CONFIG_GPMURL_KEY_NOTICE"] = 30] = "CONFIG_GPMURL_KEY_NOTICE";
    ProductInfoConfigKey[ProductInfoConfigKey["CONFIG_GPMURL_KEY_LC"] = 31] = "CONFIG_GPMURL_KEY_LC";
    ProductInfoConfigKey[ProductInfoConfigKey["CONFIG_GPMURL_KEY_MSVC"] = 32] = "CONFIG_GPMURL_KEY_MSVC";
    ProductInfoConfigKey[ProductInfoConfigKey["CONFIG_GPMURL_KEY_NCS"] = 33] = "CONFIG_GPMURL_KEY_NCS";
    ProductInfoConfigKey[ProductInfoConfigKey["CONFIG_GPMURL_KEY_NEWSON"] = 34] = "CONFIG_GPMURL_KEY_NEWSON";
    ProductInfoConfigKey[ProductInfoConfigKey["CONFIG_GPMURL_KEY_ONTV"] = 35] = "CONFIG_GPMURL_KEY_ONTV";
    ProductInfoConfigKey[ProductInfoConfigKey["CONFIG_GPMURL_KEY_PUSH"] = 36] = "CONFIG_GPMURL_KEY_PUSH";
    ProductInfoConfigKey[ProductInfoConfigKey["CONFIG_GPMURL_KEY_RM"] = 37] = "CONFIG_GPMURL_KEY_RM";
    ProductInfoConfigKey[ProductInfoConfigKey["CONFIG_GPMURL_KEY_SAPPHIRE"] = 38] = "CONFIG_GPMURL_KEY_SAPPHIRE";
    ProductInfoConfigKey[ProductInfoConfigKey["CONFIG_GPMURL_KEY_SAS"] = 39] = "CONFIG_GPMURL_KEY_SAS";
    ProductInfoConfigKey[ProductInfoConfigKey["CONFIG_GPMURL_KEY_SCS"] = 40] = "CONFIG_GPMURL_KEY_SCS";
    ProductInfoConfigKey[ProductInfoConfigKey["CONFIG_GPMURL_KEY_SEARCHALL"] = 41] = "CONFIG_GPMURL_KEY_SEARCHALL";
    ProductInfoConfigKey[ProductInfoConfigKey["CONFIG_GPMURL_KEY_SHS"] = 42] = "CONFIG_GPMURL_KEY_SHS";
    ProductInfoConfigKey[ProductInfoConfigKey["CONFIG_GPMURL_KEY_SOCCER"] = 43] = "CONFIG_GPMURL_KEY_SOCCER";
    ProductInfoConfigKey[ProductInfoConfigKey["CONFIG_GPMURL_KEY_SSO"] = 44] = "CONFIG_GPMURL_KEY_SSO";
    ProductInfoConfigKey[ProductInfoConfigKey["CONFIG_GPMURL_KEY_STS"] = 45] = "CONFIG_GPMURL_KEY_STS";
    ProductInfoConfigKey[ProductInfoConfigKey["CONFIG_GPMURL_KEY_TWITTERGW"] = 46] = "CONFIG_GPMURL_KEY_TWITTERGW";
    ProductInfoConfigKey[ProductInfoConfigKey["CONFIG_KEY_ACCESSIBILITY_TTS"] = 47] = "CONFIG_KEY_ACCESSIBILITY_TTS";
    ProductInfoConfigKey[ProductInfoConfigKey["CONFIG_KEY_MW_MSO_CONFIG"] = 48] = "CONFIG_KEY_MW_MSO_CONFIG";
    ProductInfoConfigKey[ProductInfoConfigKey["CONFIG_GPMURL_KEY_EXTRA"] = 49] = "CONFIG_GPMURL_KEY_EXTRA";
    ProductInfoConfigKey[ProductInfoConfigKey["CONFIG_GPMURL_KEY_MUSIC"] = 50] = "CONFIG_GPMURL_KEY_MUSIC";
    ProductInfoConfigKey[ProductInfoConfigKey["CONFIG_KEY_ACTIVE_CATEGORY"] = 51] = "CONFIG_KEY_ACTIVE_CATEGORY";
    ProductInfoConfigKey[ProductInfoConfigKey["CONFIG_KEY_MUTE"] = 52] = "CONFIG_KEY_MUTE";
    ProductInfoConfigKey[ProductInfoConfigKey["CONFIG_KEY_OSD_NUMBERPAD"] = 53] = "CONFIG_KEY_OSD_NUMBERPAD";
    ProductInfoConfigKey[ProductInfoConfigKey["CONFIG_KEY_OSD_VIRTUALREMOTE"] = 54] = "CONFIG_KEY_OSD_VIRTUALREMOTE";
    ProductInfoConfigKey[ProductInfoConfigKey["CONFIG_KEY_STATUS_NETFLIX"] = 55] = "CONFIG_KEY_STATUS_NETFLIX";
    ProductInfoConfigKey[ProductInfoConfigKey["CONFIG_KEY_MULTIVIEW_INFO"] = 56] = "CONFIG_KEY_MULTIVIEW_INFO";
})(ProductInfoConfigKey = exports.ProductInfoConfigKey || (exports.ProductInfoConfigKey = {}));
var ProductInfoNoGlass3dSupport;
(function (ProductInfoNoGlass3dSupport) {
    ProductInfoNoGlass3dSupport[ProductInfoNoGlass3dSupport["NO_GLASS_3D_NOT_SUPPORTED"] = 0] = "NO_GLASS_3D_NOT_SUPPORTED";
    ProductInfoNoGlass3dSupport[ProductInfoNoGlass3dSupport["NO_GLASS_3D_SUPPORTED"] = 1] = "NO_GLASS_3D_SUPPORTED";
})(ProductInfoNoGlass3dSupport = exports.ProductInfoNoGlass3dSupport || (exports.ProductInfoNoGlass3dSupport = {}));
var ProductInfoSiServerType;
(function (ProductInfoSiServerType) {
    ProductInfoSiServerType[ProductInfoSiServerType["SI_TYPE_OPERATIING_SERVER"] = 0] = "SI_TYPE_OPERATIING_SERVER";
    ProductInfoSiServerType[ProductInfoSiServerType["SI_TYPE_DEVELOPMENT_SERVER"] = 1] = "SI_TYPE_DEVELOPMENT_SERVER";
    ProductInfoSiServerType[ProductInfoSiServerType["SI_TYPE_DEVELOPING_SERVER"] = 2] = "SI_TYPE_DEVELOPING_SERVER";
})(ProductInfoSiServerType = exports.ProductInfoSiServerType || (exports.ProductInfoSiServerType = {}));
var TvInfoMenuKey;
(function (TvInfoMenuKey) {
    TvInfoMenuKey[TvInfoMenuKey["CAPTION_ONOFF_KEY"] = 0] = "CAPTION_ONOFF_KEY";
    TvInfoMenuKey[TvInfoMenuKey["CAPTION_MODE_KEY"] = 1] = "CAPTION_MODE_KEY";
    TvInfoMenuKey[TvInfoMenuKey["CAPTION_FONT_SIZE_KEY"] = 2] = "CAPTION_FONT_SIZE_KEY";
    TvInfoMenuKey[TvInfoMenuKey["CAPTION_FONT_STYLE_KEY"] = 3] = "CAPTION_FONT_STYLE_KEY";
    TvInfoMenuKey[TvInfoMenuKey["CAPTION_FG_COLOR_KEY"] = 4] = "CAPTION_FG_COLOR_KEY";
    TvInfoMenuKey[TvInfoMenuKey["CAPTION_FG_OPACITY_KEY"] = 5] = "CAPTION_FG_OPACITY_KEY";
    TvInfoMenuKey[TvInfoMenuKey["CAPTION_BG_COLOR_KEY"] = 6] = "CAPTION_BG_COLOR_KEY";
    TvInfoMenuKey[TvInfoMenuKey["CAPTION_BG_OPACITY_KEY"] = 7] = "CAPTION_BG_OPACITY_KEY";
    TvInfoMenuKey[TvInfoMenuKey["CAPTION_EDGE_TYPE_KEY"] = 8] = "CAPTION_EDGE_TYPE_KEY";
    TvInfoMenuKey[TvInfoMenuKey["CAPTION_EDGE_COLOR_KEY"] = 9] = "CAPTION_EDGE_COLOR_KEY";
    TvInfoMenuKey[TvInfoMenuKey["CAPTION_WINDOW_COLOR_KEY"] = 10] = "CAPTION_WINDOW_COLOR_KEY";
    TvInfoMenuKey[TvInfoMenuKey["CAPTION_WINDOW_OPACITY_KEY"] = 11] = "CAPTION_WINDOW_OPACITY_KEY";
    TvInfoMenuKey[TvInfoMenuKey["ACCESSIBILITY_FOCUS_ZOOM"] = 12] = "ACCESSIBILITY_FOCUS_ZOOM";
    TvInfoMenuKey[TvInfoMenuKey["ACCESSIBILITY_HIGH_CONTRAST"] = 13] = "ACCESSIBILITY_HIGH_CONTRAST";
    TvInfoMenuKey[TvInfoMenuKey["SMARTHUB_CHANNEL_BOUND_APPS_TICKER"] = 14] = "SMARTHUB_CHANNEL_BOUND_APPS_TICKER";
    TvInfoMenuKey[TvInfoMenuKey["VOICE_GUIDE_KEY"] = 15] = "VOICE_GUIDE_KEY";
    TvInfoMenuKey[TvInfoMenuKey["SUBTITLE_ONOFF_KEY"] = 16] = "SUBTITLE_ONOFF_KEY";
    TvInfoMenuKey[TvInfoMenuKey["SUBTITLE_MODE_KEY"] = 17] = "SUBTITLE_MODE_KEY";
    TvInfoMenuKey[TvInfoMenuKey["PRIMARY_AUDIO_LANGUAGE_KEY"] = 18] = "PRIMARY_AUDIO_LANGUAGE_KEY";
    TvInfoMenuKey[TvInfoMenuKey["SECONDARY_AUDIO_LANGUAGE_KEY"] = 19] = "SECONDARY_AUDIO_LANGUAGE_KEY";
    TvInfoMenuKey[TvInfoMenuKey["ACCESSIBILITY_VOICE_GUIDE_SPEED"] = 20] = "ACCESSIBILITY_VOICE_GUIDE_SPEED";
    TvInfoMenuKey[TvInfoMenuKey["CAPTION_STYLE_KEY"] = 21] = "CAPTION_STYLE_KEY";
})(TvInfoMenuKey = exports.TvInfoMenuKey || (exports.TvInfoMenuKey = {}));
var TvInfoMenuValue;
(function (TvInfoMenuValue) {
    TvInfoMenuValue[TvInfoMenuValue["OFF"] = 0] = "OFF";
    TvInfoMenuValue[TvInfoMenuValue["ON"] = 1] = "ON";
    TvInfoMenuValue[TvInfoMenuValue["CAPTION_OFF"] = 0] = "CAPTION_OFF";
    TvInfoMenuValue[TvInfoMenuValue["CAPTION_ON"] = 1] = "CAPTION_ON";
    TvInfoMenuValue[TvInfoMenuValue["CAPTION_MODE_DEFAULT"] = 0] = "CAPTION_MODE_DEFAULT";
    TvInfoMenuValue[TvInfoMenuValue["CAPTION_MODE_SERVICE1"] = 1] = "CAPTION_MODE_SERVICE1";
    TvInfoMenuValue[TvInfoMenuValue["CAPTION_MODE_SERVICE2"] = 2] = "CAPTION_MODE_SERVICE2";
    TvInfoMenuValue[TvInfoMenuValue["CAPTION_MODE_SERVICE3"] = 3] = "CAPTION_MODE_SERVICE3";
    TvInfoMenuValue[TvInfoMenuValue["CAPTION_MODE_SERVICE4"] = 4] = "CAPTION_MODE_SERVICE4";
    TvInfoMenuValue[TvInfoMenuValue["CAPTION_MODE_SERVICE5"] = 5] = "CAPTION_MODE_SERVICE5";
    TvInfoMenuValue[TvInfoMenuValue["CAPTION_MODE_SERVICE6"] = 6] = "CAPTION_MODE_SERVICE6";
    TvInfoMenuValue[TvInfoMenuValue["CAPTION_MODE_CC1"] = 7] = "CAPTION_MODE_CC1";
    TvInfoMenuValue[TvInfoMenuValue["CAPTION_MODE_CC2"] = 8] = "CAPTION_MODE_CC2";
    TvInfoMenuValue[TvInfoMenuValue["CAPTION_MODE_CC3"] = 9] = "CAPTION_MODE_CC3";
    TvInfoMenuValue[TvInfoMenuValue["CAPTION_MODE_CC4"] = 10] = "CAPTION_MODE_CC4";
    TvInfoMenuValue[TvInfoMenuValue["CAPTION_MODE_TEXT1"] = 11] = "CAPTION_MODE_TEXT1";
    TvInfoMenuValue[TvInfoMenuValue["CAPTION_MODE_TEXT2"] = 12] = "CAPTION_MODE_TEXT2";
    TvInfoMenuValue[TvInfoMenuValue["CAPTION_MODE_TEXT3"] = 13] = "CAPTION_MODE_TEXT3";
    TvInfoMenuValue[TvInfoMenuValue["CAPTION_MODE_TEXT4"] = 14] = "CAPTION_MODE_TEXT4";
    TvInfoMenuValue[TvInfoMenuValue["CAPTION_SIZE_DEFAULT"] = 0] = "CAPTION_SIZE_DEFAULT";
    TvInfoMenuValue[TvInfoMenuValue["CAPTION_SIZE_SMALL"] = 1] = "CAPTION_SIZE_SMALL";
    TvInfoMenuValue[TvInfoMenuValue["CAPTION_SIZE_STANDARD"] = 2] = "CAPTION_SIZE_STANDARD";
    TvInfoMenuValue[TvInfoMenuValue["CAPTION_SIZE_LARGE"] = 3] = "CAPTION_SIZE_LARGE";
    TvInfoMenuValue[TvInfoMenuValue["CAPTION_SIZE_EXTRA_LARGE"] = 4] = "CAPTION_SIZE_EXTRA_LARGE";
    TvInfoMenuValue[TvInfoMenuValue["CAPTION_FONT_DEFAULT"] = 0] = "CAPTION_FONT_DEFAULT";
    TvInfoMenuValue[TvInfoMenuValue["CAPTION_FONT_STYLE0"] = 1] = "CAPTION_FONT_STYLE0";
    TvInfoMenuValue[TvInfoMenuValue["CAPTION_FONT_STYLE1"] = 2] = "CAPTION_FONT_STYLE1";
    TvInfoMenuValue[TvInfoMenuValue["CAPTION_FONT_STYLE2"] = 3] = "CAPTION_FONT_STYLE2";
    TvInfoMenuValue[TvInfoMenuValue["CAPTION_FONT_STYLE3"] = 4] = "CAPTION_FONT_STYLE3";
    TvInfoMenuValue[TvInfoMenuValue["CAPTION_FONT_STYLE4"] = 5] = "CAPTION_FONT_STYLE4";
    TvInfoMenuValue[TvInfoMenuValue["CAPTION_FONT_STYLE5"] = 6] = "CAPTION_FONT_STYLE5";
    TvInfoMenuValue[TvInfoMenuValue["CAPTION_FONT_STYLE6"] = 7] = "CAPTION_FONT_STYLE6";
    TvInfoMenuValue[TvInfoMenuValue["CAPTION_COLOR_DEFAULT"] = 0] = "CAPTION_COLOR_DEFAULT";
    TvInfoMenuValue[TvInfoMenuValue["CAPTION_COLOR_WHITE"] = 1] = "CAPTION_COLOR_WHITE";
    TvInfoMenuValue[TvInfoMenuValue["CAPTION_COLOR_BLACK"] = 2] = "CAPTION_COLOR_BLACK";
    TvInfoMenuValue[TvInfoMenuValue["CAPTION_COLOR_RED"] = 3] = "CAPTION_COLOR_RED";
    TvInfoMenuValue[TvInfoMenuValue["CAPTION_COLOR_GREEN"] = 4] = "CAPTION_COLOR_GREEN";
    TvInfoMenuValue[TvInfoMenuValue["CAPTION_COLOR_BLUE"] = 5] = "CAPTION_COLOR_BLUE";
    TvInfoMenuValue[TvInfoMenuValue["CAPTION_COLOR_YELLOW"] = 6] = "CAPTION_COLOR_YELLOW";
    TvInfoMenuValue[TvInfoMenuValue["CAPTION_COLOR_MAGENTA"] = 7] = "CAPTION_COLOR_MAGENTA";
    TvInfoMenuValue[TvInfoMenuValue["CAPTION_COLOR_CYAN"] = 8] = "CAPTION_COLOR_CYAN";
    TvInfoMenuValue[TvInfoMenuValue["CAPTION_OPACITY_SOLID"] = 0] = "CAPTION_OPACITY_SOLID";
    TvInfoMenuValue[TvInfoMenuValue["CAPTION_OPACITY_FLASH"] = 1] = "CAPTION_OPACITY_FLASH";
    TvInfoMenuValue[TvInfoMenuValue["CAPTION_OPACITY_TRANSLUCENT"] = 2] = "CAPTION_OPACITY_TRANSLUCENT";
    TvInfoMenuValue[TvInfoMenuValue["CAPTION_OPACITY_TRANSPARENT"] = 3] = "CAPTION_OPACITY_TRANSPARENT";
    TvInfoMenuValue[TvInfoMenuValue["CAPTION_OPACITY_DEFAULT"] = 4] = "CAPTION_OPACITY_DEFAULT";
    TvInfoMenuValue[TvInfoMenuValue["CAPTION_OPACITY_HIGHLY_TRANSLUCENT"] = 5] = "CAPTION_OPACITY_HIGHLY_TRANSLUCENT";
    TvInfoMenuValue[TvInfoMenuValue["CAPTION_OPACITY_SLIGHTLY_TRANSLUCENT"] = 6] = "CAPTION_OPACITY_SLIGHTLY_TRANSLUCENT";
    TvInfoMenuValue[TvInfoMenuValue["CAPTION_EDGE_NONE"] = 0] = "CAPTION_EDGE_NONE";
    TvInfoMenuValue[TvInfoMenuValue["CAPTION_EDGE_RAISED"] = 1] = "CAPTION_EDGE_RAISED";
    TvInfoMenuValue[TvInfoMenuValue["CAPTION_EDGE_DEPRESSED"] = 2] = "CAPTION_EDGE_DEPRESSED";
    TvInfoMenuValue[TvInfoMenuValue["CAPTION_EDGE_UNIFORM"] = 3] = "CAPTION_EDGE_UNIFORM";
    TvInfoMenuValue[TvInfoMenuValue["CAPTION_EDGE_DROP_SHADOWED"] = 4] = "CAPTION_EDGE_DROP_SHADOWED";
    TvInfoMenuValue[TvInfoMenuValue["SUBTITLE_NORMAL"] = 0] = "SUBTITLE_NORMAL";
    TvInfoMenuValue[TvInfoMenuValue["SUBTITLE_HEARING_IMMPEARED"] = 1] = "SUBTITLE_HEARING_IMMPEARED";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_AFR"] = "AFR";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_AKA"] = "AKA";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_AMH"] = "AMH";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_ARA"] = "ARA";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_ASM"] = "ASM";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_BEN"] = "BEN";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_BUL"] = "BUL";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_CAT"] = "CAT";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_CHI"] = "CHI";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_CMN"] = "CMN";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_CZE"] = "CZE";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_DAG"] = "DAG";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_DAN"] = "DAN";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_DUT"] = "DUT";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_ENG"] = "ENG";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_EST"] = "EST";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_EUS"] = "EUS";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_EWE"] = "EWE";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_FIN"] = "FIN";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_FRE"] = "FRE";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_GAA"] = "GAA";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_GER"] = "GER";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_GLA"] = "GLA";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_GLG"] = "GLG";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_GOS"] = "GOS";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_GRE"] = "GRE";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_GUJ"] = "GUJ";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_HAU"] = "HAU";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_HEB"] = "HEB";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_HIN"] = "HIN";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_HRV"] = "HRV";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_HUN"] = "HUN";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_IGB"] = "IGB";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_IND"] = "IND";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_IRI"] = "IRI";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_ITA"] = "ITA";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_JPN"] = "JPN";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_KAN"] = "KAN";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_KOK"] = "KOK";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_KOR"] = "KOR";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_LAV"] = "LAV";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_LIT"] = "LIT";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_MAL"] = "MAL";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_MAO"] = "MAO";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_MAR"] = "MAR";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_MSA"] = "MSA";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_NBL"] = "NBL";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_NOR"] = "NOR";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_NSO"] = "NSO";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_NZI"] = "NZI";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_ORI"] = "ORI";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_PAN"] = "PAN";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_PER"] = "PER";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_POL"] = "POL";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_POR"] = "POR";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_QAA"] = "QAA";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_QAB"] = "QAB";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_QAC"] = "QAC";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_ROM"] = "ROM";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_RUS"] = "RUS";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_SLK"] = "SLK";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_SOT"] = "SOT";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_SPA"] = "SPA";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_SRP"] = "SRP";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_SSW"] = "SSW";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_SWA"] = "SWA";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_SWE"] = "SWE";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_TAM"] = "TAM";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_TEL"] = "TEL";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_THA"] = "THA";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_TSN"] = "TSN";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_TSO"] = "TSO";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_TUR"] = "TUR";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_TWI"] = "TWI";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_UKR"] = "UKR";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_VAL"] = "VAL";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_VEN"] = "VEN";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_VIE"] = "VIE";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_WEL"] = "WEL";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_XHO"] = "XHO";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_XSM"] = "XSM";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_YOR"] = "YOR";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_YUE"] = "YUE";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_ZHO"] = "ZHO";
    TvInfoMenuValue["AUDIO_LANGUAGE_CODE_ZUL"] = "ZUL";
    TvInfoMenuValue["VOICEGUIDE_SPEED_VERY_FAST"] = "VERY_FAST";
    TvInfoMenuValue["VOICEGUIDE_SPEED_FAST"] = "FAST";
    TvInfoMenuValue["VOICEGUIDE_SPEED_NORMAL"] = "NORMAL";
    TvInfoMenuValue["VOICEGUIDE_SPEED_SLOW"] = "SLOW";
    TvInfoMenuValue["VOICEGUIDE_SPEED_VERY_SLOW"] = "VERY_SLOW";
    TvInfoMenuValue[TvInfoMenuValue["CAPTION_STYLE_DEFAULT"] = 0] = "CAPTION_STYLE_DEFAULT";
    TvInfoMenuValue[TvInfoMenuValue["CAPTION_STYLE_BOLD"] = 1] = "CAPTION_STYLE_BOLD";
    TvInfoMenuValue[TvInfoMenuValue["CAPTION_STYLE_ITALIC"] = 2] = "CAPTION_STYLE_ITALIC";
})(TvInfoMenuValue = exports.TvInfoMenuValue || (exports.TvInfoMenuValue = {}));
var TvInfoKey;
(function (TvInfoKey) {
    TvInfoKey[TvInfoKey["TV_VIEWER_BG_EXECUTABLE"] = 0] = "TV_VIEWER_BG_EXECUTABLE";
})(TvInfoKey = exports.TvInfoKey || (exports.TvInfoKey = {}));
var TvInfoValue;
(function (TvInfoValue) {
    TvInfoValue[TvInfoValue["TV_VIEWER_BG_NOT_EXECUTABLE"] = 0] = "TV_VIEWER_BG_NOT_EXECUTABLE";
    TvInfoValue[TvInfoValue["TV_VIEWER_BG_EXECUTABLE"] = 1] = "TV_VIEWER_BG_EXECUTABLE";
})(TvInfoValue = exports.TvInfoValue || (exports.TvInfoValue = {}));
var SsoLoginState;
(function (SsoLoginState) {
    SsoLoginState[SsoLoginState["SSO_NOT_LOGIN"] = 0] = "SSO_NOT_LOGIN";
    SsoLoginState[SsoLoginState["SSO_LOGIN"] = 1] = "SSO_LOGIN";
})(SsoLoginState = exports.SsoLoginState || (exports.SsoLoginState = {}));
_a = window.webapis, exports.webapis = _a.webapis, exports.adinfo = _a.adinfo, exports.appcommon = _a.appcommon, exports.avinfo = _a.avinfo, exports.avplay = _a.avplay, exports.avplaystore = _a.avplaystore, exports.billing = _a.billing, exports.network = _a.network, exports.productinfo = _a.productinfo, exports.sso = _a.sso, exports.tvinfo = _a.tvinfo, exports.widgetdata = _a.widgetdata, exports.systeminfo = _a.systeminfo, exports.WebAPIException = _a.WebAPIException;


/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_29918__) {

module.exports = __nested_webpack_require_29918__(/*! ./src/index.ts */"./src/index.ts");


/***/ })

/******/ })));

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tizen_tv_webapis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tizen-tv-webapis */ "./node_modules/tizen-tv-webapis/index.js");
/* harmony import */ var tizen_tv_webapis__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tizen_tv_webapis__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tizen_common_web__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tizen-common-web */ "./node_modules/tizen-common-web/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
// Importing dependencies

// import { application } from "tizen-common-web";



var getFirmware = tizen_tv_webapis__WEBPACK_IMPORTED_MODULE_0__.productinfo.getFirmware,
  getDuid = tizen_tv_webapis__WEBPACK_IMPORTED_MODULE_0__.productinfo.getDuid,
  getModelCode = tizen_tv_webapis__WEBPACK_IMPORTED_MODULE_0__.productinfo.getModelCode;
var getCapability = tizen_common_web__WEBPACK_IMPORTED_MODULE_1__.systeminfo.getCapability;
window.addEventListener("tizenhwkey", keydownHandler);
window.onload = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
  var articles;
  return _regeneratorRuntime().wrap(function _callee$(_context) {
    while (1) switch (_context.prev = _context.next) {
      case 0:
        _context.next = 2;
        return loadArticles();
      case 2:
        articles = _context.sent;
        loadPages(articles);
        window.addEventListener("rotarydetent", function (ev) {
          var direction = ev.detail.direction;
          page = document.getElementsByClassName("ui-page-active")[0];
          numb = page.id.replace(/[^0-9]/g, "");
          if (direction == "CW") {
            if (page.id != "page20") {
              window.location.hash = "page" + String(Number(numb) + 1);
            }
          } else if (direction == "CCW") {
            if (page.id != "page1") {
              window.location.hash = "page" + String(Number(numb) - 1);
            }
          }
        });
      case 5:
      case "end":
        return _context.stop();
    }
  }, _callee);
}));
function keydownHandler(ev) {
  console.log(ev.keyName);
  switch (ev.keyName) {
    case "back":
      application.getCurrentApplication().exit();
      break;
  }
}
function loadArticles() {
  return _loadArticles.apply(this, arguments);
}
function _loadArticles() {
  _loadArticles = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    var articles;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          articles = [];
          _context2.next = 3;
          return fetch("https://nos-app.vercel.app/api/rss").then(function (response) {
            return response.text();
          }).then(function (str) {
            return new window.DOMParser().parseFromString(str, "text/xml");
          }).then(function (doc) {
            var items = doc.querySelectorAll("item");
            items.forEach(function (item) {
              articles.push({
                title: item.querySelector("title").textContent,
                img: item.querySelector("enclosure").getAttribute("url"),
                text: item.querySelector("description").textContent,
                link: item.querySelector("link").textContent // (click to open on phone?)
              });
            });
          });
        case 3:
          console.log(articles);
          return _context2.abrupt("return", articles);
        case 5:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _loadArticles.apply(this, arguments);
}
function loadPages(articles) {
  var pagesDiv = document.getElementById("pages");
  articles.forEach(function (item, idx) {
    var page;
    if (idx != 0) {
      page = document.createElement("div");
      page.setAttribute("id", "page" + String(idx + 1));
      page.className = "ui-page";
    } else {
      page = document.getElementById("page1");
      document.getElementById("loading-icon").remove();
    }
    var content = document.createElement("div");
    content.className = "ui-content";
    content.innerHTML = item.title;
    page.appendChild(content);
    if (idx != 0) {
      pagesDiv.appendChild(page);
    }
  });
}
})();

// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "index.html");
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQywyRkFBMkY7QUFDNUY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLGdIQUFnSDtBQUNqSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxvR0FBb0c7QUFDckc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxzRUFBc0U7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUFFO01BQ2JGLFFBQVEsQ0FBQ1MsV0FBVyxDQUFDNUMsSUFBSSxDQUFDO0lBQzNCO0VBQ0QsQ0FBQyxDQUFDO0FBQ0gsQzs7Ozs7Ozs7Ozs7OztBQ3pGQSxpRUFBZSxxQkFBdUIsZUFBZSxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm9zLXRpemVuLWFwcC8uL25vZGVfbW9kdWxlcy90aXplbi1jb21tb24td2ViL2luZGV4LmpzIiwid2VicGFjazovL25vcy10aXplbi1hcHAvLi9ub2RlX21vZHVsZXMvdGl6ZW4tdHYtd2ViYXBpcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9ub3MtdGl6ZW4tYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL25vcy10aXplbi1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbm9zLXRpemVuLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbm9zLXRpemVuLWFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL25vcy10aXplbi1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9ub3MtdGl6ZW4tYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbm9zLXRpemVuLWFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9ub3MtdGl6ZW4tYXBwLy4vc3JjL21haW4uanMiLCJ3ZWJwYWNrOi8vbm9zLXRpemVuLWFwcC8uL3NyYy9pbmRleC5odG1sIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCB7XG4gICAgQWxhcm1BYnNvbHV0ZSxcbiAgICBBbGFybVJlbGF0aXZlLFxuICAgIEFwcGxpY2F0aW9uQ29udHJvbCxcbiAgICBBcHBsaWNhdGlvbkNvbnRyb2xEYXRhLFxuICAgIEF0dHJpYnV0ZUZpbHRlcixcbiAgICBBdHRyaWJ1dGVSYW5nZUZpbHRlcixcbiAgICBCdW5kbGUsXG4gICAgQ29tcG9zaXRlRmlsdGVyLFxuICAgIERvd25sb2FkUmVxdWVzdCxcbiAgICBFeGlmSW5mb3JtYXRpb24sXG4gICAgSW90Y29uT3B0aW9uLFxuICAgIFF1ZXJ5LFxuICAgIFJlcHJlc2VudGF0aW9uLFxuICAgIFJlc3BvbnNlLFxuICAgIFNpbXBsZUNvb3JkaW5hdGVzLFxuICAgIFNvcnRNb2RlLFxuICAgIFRaRGF0ZSxcbiAgICBUaW1lRHVyYXRpb24sXG4gICAgVm9pY2VDb250cm9sQ29tbWFuZCxcbiAgICBhY2NvdW50LFxuICAgIGFsYXJtLFxuICAgIGFwcGxpY2F0aW9uLFxuICAgIGFyY2hpdmUsXG4gICAgY29udGVudCxcbiAgICBkYXRhY29udHJvbCxcbiAgICBkb3dubG9hZCxcbiAgICBleGlmLFxuICAgIGZpbGVzeXN0ZW0sXG4gICAgaW90Y29uLFxuICAgIGtleW1hbmFnZXIsXG4gICAgbWVkaWFjb250cm9sbGVyLFxuICAgIG1lc3NhZ2Vwb3J0LFxuICAgIHB1c2gsXG4gICAgc3lzdGVtaW5mbyxcbiAgICB0aW1lLFxuICAgIHR2YXVkaW9jb250cm9sLFxuICAgIHR2ZGlzcGxheWNvbnRyb2wsXG4gICAgdHZpbmZvLFxuICAgIHR2aW5wdXRkZXZpY2UsXG4gICAgdHZ3aW5kb3csXG4gICAgdm9pY2Vjb250cm9sLFxuICAgIHdlYnNldHRpbmdcbn0gPSB3aW5kb3cudGl6ZW47XG5cbmNvbnN0IHBrZyA9IHdpbmRvdy50aXplbi5wYWNrYWdlO1xuZXhwb3J0IHsgcGtnIGFzIHBhY2thZ2UgfTtcbiIsIihmdW5jdGlvbihlLCBhKSB7IGZvcih2YXIgaSBpbiBhKSBlW2ldID0gYVtpXTsgfSh0aGlzLCAvKioqKioqLyAoZnVuY3Rpb24obW9kdWxlcykgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbi8qKioqKiovIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdGk6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0bDogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4vKioqKioqLyBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuLyoqKioqKi8gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuLyoqKioqKi8gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3Rcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4vKioqKioqLyBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuLyoqKioqKi8gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3Rcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4vKioqKioqLyBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbi8qKioqKiovIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4vKioqKioqLyBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gbnM7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbi8qKioqKiovIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gZ2V0dGVyO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuLyoqKioqKi8gfSlcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyAoe1xuXG4vKioqLyBcIi4vc3JjL2luZGV4LnRzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL2luZGV4LnRzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG52YXIgX2E7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLldlYkFQSUV4Y2VwdGlvbiA9IGV4cG9ydHMuc3lzdGVtaW5mbyA9IGV4cG9ydHMud2lkZ2V0ZGF0YSA9IGV4cG9ydHMudHZpbmZvID0gZXhwb3J0cy5zc28gPSBleHBvcnRzLnByb2R1Y3RpbmZvID0gZXhwb3J0cy5uZXR3b3JrID0gZXhwb3J0cy5iaWxsaW5nID0gZXhwb3J0cy5hdnBsYXlzdG9yZSA9IGV4cG9ydHMuYXZwbGF5ID0gZXhwb3J0cy5hdmluZm8gPSBleHBvcnRzLmFwcGNvbW1vbiA9IGV4cG9ydHMuYWRpbmZvID0gZXhwb3J0cy53ZWJhcGlzID0gZXhwb3J0cy5Tc29Mb2dpblN0YXRlID0gZXhwb3J0cy5UdkluZm9WYWx1ZSA9IGV4cG9ydHMuVHZJbmZvS2V5ID0gZXhwb3J0cy5UdkluZm9NZW51VmFsdWUgPSBleHBvcnRzLlR2SW5mb01lbnVLZXkgPSBleHBvcnRzLlByb2R1Y3RJbmZvU2lTZXJ2ZXJUeXBlID0gZXhwb3J0cy5Qcm9kdWN0SW5mb05vR2xhc3MzZFN1cHBvcnQgPSBleHBvcnRzLlByb2R1Y3RJbmZvQ29uZmlnS2V5ID0gZXhwb3J0cy5OZXR3b3JrV2lGaUVuY3J5cHRpb25UeXBlID0gZXhwb3J0cy5OZXR3b3JrV2lGaVNlY3VyaXR5TW9kZSA9IGV4cG9ydHMuTmV0d29ya1N0YXRlID0gZXhwb3J0cy5OZXR3b3JrQWN0aXZlQ29ubmVjdGlvblR5cGUgPSBleHBvcnRzLk5ldHdvcmtJcE1vZGUgPSBleHBvcnRzLkF2SW5mb0RpZ2l0YWxDb21wTW9kZSA9IGV4cG9ydHMuQXBwQ29tbW9uU2NyZWVuU2F2ZXJTdGF0ZSA9IHZvaWQgMDtcbnZhciBBcHBDb21tb25TY3JlZW5TYXZlclN0YXRlO1xuKGZ1bmN0aW9uIChBcHBDb21tb25TY3JlZW5TYXZlclN0YXRlKSB7XG4gICAgQXBwQ29tbW9uU2NyZWVuU2F2ZXJTdGF0ZVtBcHBDb21tb25TY3JlZW5TYXZlclN0YXRlW1wiU0NSRUVOX1NBVkVSX09GRlwiXSA9IDBdID0gXCJTQ1JFRU5fU0FWRVJfT0ZGXCI7XG4gICAgQXBwQ29tbW9uU2NyZWVuU2F2ZXJTdGF0ZVtBcHBDb21tb25TY3JlZW5TYXZlclN0YXRlW1wiU0NSRUVOX1NBVkVSX09OXCJdID0gMV0gPSBcIlNDUkVFTl9TQVZFUl9PTlwiO1xufSkoQXBwQ29tbW9uU2NyZWVuU2F2ZXJTdGF0ZSA9IGV4cG9ydHMuQXBwQ29tbW9uU2NyZWVuU2F2ZXJTdGF0ZSB8fCAoZXhwb3J0cy5BcHBDb21tb25TY3JlZW5TYXZlclN0YXRlID0ge30pKTtcbnZhciBBdkluZm9EaWdpdGFsQ29tcE1vZGU7XG4oZnVuY3Rpb24gKEF2SW5mb0RpZ2l0YWxDb21wTW9kZSkge1xuICAgIEF2SW5mb0RpZ2l0YWxDb21wTW9kZVtBdkluZm9EaWdpdGFsQ29tcE1vZGVbXCJET0xCWV9ESUdJVEFMX0NPTVBfTU9ERV9MSU5FXCJdID0gMF0gPSBcIkRPTEJZX0RJR0lUQUxfQ09NUF9NT0RFX0xJTkVcIjtcbiAgICBBdkluZm9EaWdpdGFsQ29tcE1vZGVbQXZJbmZvRGlnaXRhbENvbXBNb2RlW1wiRE9MQllfRElHSVRBTF9DT01QX01PREVfUkZcIl0gPSAxXSA9IFwiRE9MQllfRElHSVRBTF9DT01QX01PREVfUkZcIjtcbn0pKEF2SW5mb0RpZ2l0YWxDb21wTW9kZSA9IGV4cG9ydHMuQXZJbmZvRGlnaXRhbENvbXBNb2RlIHx8IChleHBvcnRzLkF2SW5mb0RpZ2l0YWxDb21wTW9kZSA9IHt9KSk7XG52YXIgTmV0d29ya0lwTW9kZTtcbihmdW5jdGlvbiAoTmV0d29ya0lwTW9kZSkge1xuICAgIE5ldHdvcmtJcE1vZGVbTmV0d29ya0lwTW9kZVtcIk5PTkVcIl0gPSAwXSA9IFwiTk9ORVwiO1xuICAgIE5ldHdvcmtJcE1vZGVbTmV0d29ya0lwTW9kZVtcIlNUQVRJQ1wiXSA9IDFdID0gXCJTVEFUSUNcIjtcbiAgICBOZXR3b3JrSXBNb2RlW05ldHdvcmtJcE1vZGVbXCJEWU5BTUlDXCJdID0gMl0gPSBcIkRZTkFNSUNcIjtcbiAgICBOZXR3b3JrSXBNb2RlW05ldHdvcmtJcE1vZGVbXCJBVVRPXCJdID0gM10gPSBcIkFVVE9cIjtcbiAgICBOZXR3b3JrSXBNb2RlW05ldHdvcmtJcE1vZGVbXCJGSVhFRFwiXSA9IDRdID0gXCJGSVhFRFwiO1xuICAgIE5ldHdvcmtJcE1vZGVbTmV0d29ya0lwTW9kZVtcIlVOS05PV05cIl0gPSA1XSA9IFwiVU5LTk9XTlwiO1xufSkoTmV0d29ya0lwTW9kZSA9IGV4cG9ydHMuTmV0d29ya0lwTW9kZSB8fCAoZXhwb3J0cy5OZXR3b3JrSXBNb2RlID0ge30pKTtcbnZhciBOZXR3b3JrQWN0aXZlQ29ubmVjdGlvblR5cGU7XG4oZnVuY3Rpb24gKE5ldHdvcmtBY3RpdmVDb25uZWN0aW9uVHlwZSkge1xuICAgIE5ldHdvcmtBY3RpdmVDb25uZWN0aW9uVHlwZVtOZXR3b3JrQWN0aXZlQ29ubmVjdGlvblR5cGVbXCJESVNDT05ORUNURURcIl0gPSAwXSA9IFwiRElTQ09OTkVDVEVEXCI7XG4gICAgTmV0d29ya0FjdGl2ZUNvbm5lY3Rpb25UeXBlW05ldHdvcmtBY3RpdmVDb25uZWN0aW9uVHlwZVtcIldJRklcIl0gPSAxXSA9IFwiV0lGSVwiO1xuICAgIE5ldHdvcmtBY3RpdmVDb25uZWN0aW9uVHlwZVtOZXR3b3JrQWN0aXZlQ29ubmVjdGlvblR5cGVbXCJDRUxMVUxBUlwiXSA9IDJdID0gXCJDRUxMVUxBUlwiO1xuICAgIE5ldHdvcmtBY3RpdmVDb25uZWN0aW9uVHlwZVtOZXR3b3JrQWN0aXZlQ29ubmVjdGlvblR5cGVbXCJFVEhFUk5FVFwiXSA9IDNdID0gXCJFVEhFUk5FVFwiO1xufSkoTmV0d29ya0FjdGl2ZUNvbm5lY3Rpb25UeXBlID0gZXhwb3J0cy5OZXR3b3JrQWN0aXZlQ29ubmVjdGlvblR5cGUgfHwgKGV4cG9ydHMuTmV0d29ya0FjdGl2ZUNvbm5lY3Rpb25UeXBlID0ge30pKTtcbnZhciBOZXR3b3JrU3RhdGU7XG4oZnVuY3Rpb24gKE5ldHdvcmtTdGF0ZSkge1xuICAgIE5ldHdvcmtTdGF0ZVtOZXR3b3JrU3RhdGVbXCJMQU5fQ0FCTEVfQVRUQUNIRURcIl0gPSAxXSA9IFwiTEFOX0NBQkxFX0FUVEFDSEVEXCI7XG4gICAgTmV0d29ya1N0YXRlW05ldHdvcmtTdGF0ZVtcIkxBTl9DQUJMRV9ERVRBQ0hFRFwiXSA9IDJdID0gXCJMQU5fQ0FCTEVfREVUQUNIRURcIjtcbiAgICBOZXR3b3JrU3RhdGVbTmV0d29ya1N0YXRlW1wiTEFOX0NBQkxFX1NUQVRFX1VOS05PV05cIl0gPSAzXSA9IFwiTEFOX0NBQkxFX1NUQVRFX1VOS05PV05cIjtcbiAgICBOZXR3b3JrU3RhdGVbTmV0d29ya1N0YXRlW1wiR0FURVdBWV9DT05ORUNURURcIl0gPSA0XSA9IFwiR0FURVdBWV9DT05ORUNURURcIjtcbiAgICBOZXR3b3JrU3RhdGVbTmV0d29ya1N0YXRlW1wiR0FURVdBWV9ESVNDT05ORUNURURcIl0gPSA1XSA9IFwiR0FURVdBWV9ESVNDT05ORUNURURcIjtcbiAgICBOZXR3b3JrU3RhdGVbTmV0d29ya1N0YXRlW1wiV0lGSV9NT0RVTEVfU1RBVEVfQVRUQUNIRURcIl0gPSA2XSA9IFwiV0lGSV9NT0RVTEVfU1RBVEVfQVRUQUNIRURcIjtcbiAgICBOZXR3b3JrU3RhdGVbTmV0d29ya1N0YXRlW1wiV0lGSV9NT0RVTEVfU1RBVEVfREVUQUNIRURcIl0gPSA3XSA9IFwiV0lGSV9NT0RVTEVfU1RBVEVfREVUQUNIRURcIjtcbiAgICBOZXR3b3JrU3RhdGVbTmV0d29ya1N0YXRlW1wiV0lGSV9NT0RVTEVfU1RBVEVfVU5LTk9XTlwiXSA9IDhdID0gXCJXSUZJX01PRFVMRV9TVEFURV9VTktOT1dOXCI7XG59KShOZXR3b3JrU3RhdGUgPSBleHBvcnRzLk5ldHdvcmtTdGF0ZSB8fCAoZXhwb3J0cy5OZXR3b3JrU3RhdGUgPSB7fSkpO1xudmFyIE5ldHdvcmtXaUZpU2VjdXJpdHlNb2RlO1xuKGZ1bmN0aW9uIChOZXR3b3JrV2lGaVNlY3VyaXR5TW9kZSkge1xuICAgIE5ldHdvcmtXaUZpU2VjdXJpdHlNb2RlW05ldHdvcmtXaUZpU2VjdXJpdHlNb2RlW1wiV0VQXCJdID0gMV0gPSBcIldFUFwiO1xuICAgIE5ldHdvcmtXaUZpU2VjdXJpdHlNb2RlW05ldHdvcmtXaUZpU2VjdXJpdHlNb2RlW1wiV1BBX1BTS1wiXSA9IDJdID0gXCJXUEFfUFNLXCI7XG4gICAgTmV0d29ya1dpRmlTZWN1cml0eU1vZGVbTmV0d29ya1dpRmlTZWN1cml0eU1vZGVbXCJXUEEyX1BTS1wiXSA9IDNdID0gXCJXUEEyX1BTS1wiO1xuICAgIE5ldHdvcmtXaUZpU2VjdXJpdHlNb2RlW05ldHdvcmtXaUZpU2VjdXJpdHlNb2RlW1wiRUFQXCJdID0gNF0gPSBcIkVBUFwiO1xuICAgIE5ldHdvcmtXaUZpU2VjdXJpdHlNb2RlW05ldHdvcmtXaUZpU2VjdXJpdHlNb2RlW1wiTk9ORVwiXSA9IDVdID0gXCJOT05FXCI7XG4gICAgTmV0d29ya1dpRmlTZWN1cml0eU1vZGVbTmV0d29ya1dpRmlTZWN1cml0eU1vZGVbXCJVTktOT1dOXCJdID0gNl0gPSBcIlVOS05PV05cIjtcbn0pKE5ldHdvcmtXaUZpU2VjdXJpdHlNb2RlID0gZXhwb3J0cy5OZXR3b3JrV2lGaVNlY3VyaXR5TW9kZSB8fCAoZXhwb3J0cy5OZXR3b3JrV2lGaVNlY3VyaXR5TW9kZSA9IHt9KSk7XG52YXIgTmV0d29ya1dpRmlFbmNyeXB0aW9uVHlwZTtcbihmdW5jdGlvbiAoTmV0d29ya1dpRmlFbmNyeXB0aW9uVHlwZSkge1xuICAgIE5ldHdvcmtXaUZpRW5jcnlwdGlvblR5cGVbTmV0d29ya1dpRmlFbmNyeXB0aW9uVHlwZVtcIldFUFwiXSA9IDFdID0gXCJXRVBcIjtcbiAgICBOZXR3b3JrV2lGaUVuY3J5cHRpb25UeXBlW05ldHdvcmtXaUZpRW5jcnlwdGlvblR5cGVbXCJUS0lQXCJdID0gMl0gPSBcIlRLSVBcIjtcbiAgICBOZXR3b3JrV2lGaUVuY3J5cHRpb25UeXBlW05ldHdvcmtXaUZpRW5jcnlwdGlvblR5cGVbXCJBRVNcIl0gPSAzXSA9IFwiQUVTXCI7XG4gICAgTmV0d29ya1dpRmlFbmNyeXB0aW9uVHlwZVtOZXR3b3JrV2lGaUVuY3J5cHRpb25UeXBlW1wiVEtJUF9BRVNfTUlYRURcIl0gPSA0XSA9IFwiVEtJUF9BRVNfTUlYRURcIjtcbiAgICBOZXR3b3JrV2lGaUVuY3J5cHRpb25UeXBlW05ldHdvcmtXaUZpRW5jcnlwdGlvblR5cGVbXCJOT05FXCJdID0gNV0gPSBcIk5PTkVcIjtcbiAgICBOZXR3b3JrV2lGaUVuY3J5cHRpb25UeXBlW05ldHdvcmtXaUZpRW5jcnlwdGlvblR5cGVbXCJVTktOT1dOXCJdID0gNl0gPSBcIlVOS05PV05cIjtcbn0pKE5ldHdvcmtXaUZpRW5jcnlwdGlvblR5cGUgPSBleHBvcnRzLk5ldHdvcmtXaUZpRW5jcnlwdGlvblR5cGUgfHwgKGV4cG9ydHMuTmV0d29ya1dpRmlFbmNyeXB0aW9uVHlwZSA9IHt9KSk7XG52YXIgUHJvZHVjdEluZm9Db25maWdLZXk7XG4oZnVuY3Rpb24gKFByb2R1Y3RJbmZvQ29uZmlnS2V5KSB7XG4gICAgUHJvZHVjdEluZm9Db25maWdLZXlbUHJvZHVjdEluZm9Db25maWdLZXlbXCJDT05GSUdfS0VZX0RBVEFfU0VSVklDRVwiXSA9IDBdID0gXCJDT05GSUdfS0VZX0RBVEFfU0VSVklDRVwiO1xuICAgIFByb2R1Y3RJbmZvQ29uZmlnS2V5W1Byb2R1Y3RJbmZvQ29uZmlnS2V5W1wiQ09ORklHX0tFWV9TRVJWSUNFX0NPVU5UUllcIl0gPSAxXSA9IFwiQ09ORklHX0tFWV9TRVJWSUNFX0NPVU5UUllcIjtcbiAgICBQcm9kdWN0SW5mb0NvbmZpZ0tleVtQcm9kdWN0SW5mb0NvbmZpZ0tleVtcIkNPTkZJR19LRVlfU0hPUExPR09cIl0gPSAyXSA9IFwiQ09ORklHX0tFWV9TSE9QTE9HT1wiO1xuICAgIFByb2R1Y3RJbmZvQ29uZmlnS2V5W1Byb2R1Y3RJbmZvQ29uZmlnS2V5W1wiQ09ORklHX0tFWV9DSEFOTkVMQk9VTkRfQVBQU19USUNLRVJcIl0gPSAzXSA9IFwiQ09ORklHX0tFWV9DSEFOTkVMQk9VTkRfQVBQU19USUNLRVJcIjtcbiAgICBQcm9kdWN0SW5mb0NvbmZpZ0tleVtQcm9kdWN0SW5mb0NvbmZpZ0tleVtcIkNPTkZJR19LRVlfU1VQUE9SVF9TT0NDRVJfUEFORUxcIl0gPSA0XSA9IFwiQ09ORklHX0tFWV9TVVBQT1JUX1NPQ0NFUl9QQU5FTFwiO1xuICAgIFByb2R1Y3RJbmZvQ29uZmlnS2V5W1Byb2R1Y3RJbmZvQ29uZmlnS2V5W1wiQ09ORklHX0tFWV9TVVBQT1JUX09OVFZfUEFORUxcIl0gPSA1XSA9IFwiQ09ORklHX0tFWV9TVVBQT1JUX09OVFZfUEFORUxcIjtcbiAgICBQcm9kdWN0SW5mb0NvbmZpZ0tleVtQcm9kdWN0SW5mb0NvbmZpZ0tleVtcIkNPTkZJR19LRVlfU1VQUE9SVF9ORVdTT05fUEFORUxcIl0gPSA2XSA9IFwiQ09ORklHX0tFWV9TVVBQT1JUX05FV1NPTl9QQU5FTFwiO1xuICAgIFByb2R1Y3RJbmZvQ29uZmlnS2V5W1Byb2R1Y3RJbmZvQ29uZmlnS2V5W1wiQ09ORklHX0tFWV9TVVBQT1JUX01ZQ09OVEVOVFNfUEFORUxcIl0gPSA3XSA9IFwiQ09ORklHX0tFWV9TVVBQT1JUX01ZQ09OVEVOVFNfUEFORUxcIjtcbiAgICBQcm9kdWN0SW5mb0NvbmZpZ0tleVtQcm9kdWN0SW5mb0NvbmZpZ0tleVtcIkNPTkZJR19LRVlfU1VQUE9SVF9HQU1FX1BBTkVMXCJdID0gOF0gPSBcIkNPTkZJR19LRVlfU1VQUE9SVF9HQU1FX1BBTkVMXCI7XG4gICAgUHJvZHVjdEluZm9Db25maWdLZXlbUHJvZHVjdEluZm9Db25maWdLZXlbXCJDT05GSUdfS0VZX1NVUFBPUlRfQ0xJUFNfUEFORUxcIl0gPSA5XSA9IFwiQ09ORklHX0tFWV9TVVBQT1JUX0NMSVBTX1BBTkVMXCI7XG4gICAgUHJvZHVjdEluZm9Db25maWdLZXlbUHJvZHVjdEluZm9Db25maWdLZXlbXCJDT05GSUdfS0VZX1NVUFBPUlRfQVBQU19QQU5FTFwiXSA9IDEwXSA9IFwiQ09ORklHX0tFWV9TVVBQT1JUX0FQUFNfUEFORUxcIjtcbiAgICBQcm9kdWN0SW5mb0NvbmZpZ0tleVtQcm9kdWN0SW5mb0NvbmZpZ0tleVtcIkNPTkZJR19LRVlfU1lTVEVNX1BOUF9DT1VOVFJZXCJdID0gMTFdID0gXCJDT05GSUdfS0VZX1NZU1RFTV9QTlBfQ09VTlRSWVwiO1xuICAgIFByb2R1Y3RJbmZvQ29uZmlnS2V5W1Byb2R1Y3RJbmZvQ29uZmlnS2V5W1wiQ09ORklHX0tFWV9QSU5cIl0gPSAxMl0gPSBcIkNPTkZJR19LRVlfUElOXCI7XG4gICAgUHJvZHVjdEluZm9Db25maWdLZXlbUHJvZHVjdEluZm9Db25maWdLZXlbXCJDT05GSUdfR1BNVVJMX0tFWV9BQ1JDVFwiXSA9IDEzXSA9IFwiQ09ORklHX0dQTVVSTF9LRVlfQUNSQ1RcIjtcbiAgICBQcm9kdWN0SW5mb0NvbmZpZ0tleVtQcm9kdWN0SW5mb0NvbmZpZ0tleVtcIkNPTkZJR19HUE1VUkxfS0VZX0FNXCJdID0gMTRdID0gXCJDT05GSUdfR1BNVVJMX0tFWV9BTVwiO1xuICAgIFByb2R1Y3RJbmZvQ29uZmlnS2V5W1Byb2R1Y3RJbmZvQ29uZmlnS2V5W1wiQ09ORklHX0dQTVVSTF9LRVlfQVFVQVwiXSA9IDE1XSA9IFwiQ09ORklHX0dQTVVSTF9LRVlfQVFVQVwiO1xuICAgIFByb2R1Y3RJbmZvQ29uZmlnS2V5W1Byb2R1Y3RJbmZvQ29uZmlnS2V5W1wiQ09ORklHX0dQTVVSTF9LRVlfQVBQU1wiXSA9IDE2XSA9IFwiQ09ORklHX0dQTVVSTF9LRVlfQVBQU1wiO1xuICAgIFByb2R1Y3RJbmZvQ29uZmlnS2V5W1Byb2R1Y3RJbmZvQ29uZmlnS2V5W1wiQ09ORklHX0dQTVVSTF9LRVlfQ0RTXCJdID0gMTddID0gXCJDT05GSUdfR1BNVVJMX0tFWV9DRFNcIjtcbiAgICBQcm9kdWN0SW5mb0NvbmZpZ0tleVtQcm9kdWN0SW5mb0NvbmZpZ0tleVtcIkNPTkZJR19HUE1VUkxfS0VZX0NMSVBTXCJdID0gMThdID0gXCJDT05GSUdfR1BNVVJMX0tFWV9DTElQU1wiO1xuICAgIFByb2R1Y3RJbmZvQ29uZmlnS2V5W1Byb2R1Y3RJbmZvQ29uZmlnS2V5W1wiQ09ORklHX0dQTVVSTF9LRVlfRU1QXCJdID0gMTldID0gXCJDT05GSUdfR1BNVVJMX0tFWV9FTVBcIjtcbiAgICBQcm9kdWN0SW5mb0NvbmZpZ0tleVtQcm9kdWN0SW5mb0NvbmZpZ0tleVtcIkNPTkZJR19HUE1VUkxfS0VZX0VYUExPUkVSM0RcIl0gPSAyMF0gPSBcIkNPTkZJR19HUE1VUkxfS0VZX0VYUExPUkVSM0RcIjtcbiAgICBQcm9kdWN0SW5mb0NvbmZpZ0tleVtQcm9kdWN0SW5mb0NvbmZpZ0tleVtcIkNPTkZJR19HUE1VUkxfS0VZX0ZJVE5FU1NcIl0gPSAyMV0gPSBcIkNPTkZJR19HUE1VUkxfS0VZX0ZJVE5FU1NcIjtcbiAgICBQcm9kdWN0SW5mb0NvbmZpZ0tleVtQcm9kdWN0SW5mb0NvbmZpZ0tleVtcIkNPTkZJR19HUE1VUkxfS0VZX0ZLUFwiXSA9IDIyXSA9IFwiQ09ORklHX0dQTVVSTF9LRVlfRktQXCI7XG4gICAgUHJvZHVjdEluZm9Db25maWdLZXlbUHJvZHVjdEluZm9Db25maWdLZXlbXCJDT05GSUdfR1BNVVJMX0tFWV9HQU1FXCJdID0gMjNdID0gXCJDT05GSUdfR1BNVVJMX0tFWV9HQU1FXCI7XG4gICAgUHJvZHVjdEluZm9Db25maWdLZXlbUHJvZHVjdEluZm9Db25maWdLZXlbXCJDT05GSUdfR1BNVVJMX0tFWV9HRU9cIl0gPSAyNF0gPSBcIkNPTkZJR19HUE1VUkxfS0VZX0dFT1wiO1xuICAgIFByb2R1Y3RJbmZvQ29uZmlnS2V5W1Byb2R1Y3RJbmZvQ29uZmlnS2V5W1wiQ09ORklHX0dQTVVSTF9LRVlfSEFcIl0gPSAyNV0gPSBcIkNPTkZJR19HUE1VUkxfS0VZX0hBXCI7XG4gICAgUHJvZHVjdEluZm9Db25maWdLZXlbUHJvZHVjdEluZm9Db25maWdLZXlbXCJDT05GSUdfR1BNVVJMX0tFWV9IQkJUVlwiXSA9IDI2XSA9IFwiQ09ORklHX0dQTVVSTF9LRVlfSEJCVFZcIjtcbiAgICBQcm9kdWN0SW5mb0NvbmZpZ0tleVtQcm9kdWN0SW5mb0NvbmZpZ0tleVtcIkNPTkZJR19HUE1VUkxfS0VZX0lNU1wiXSA9IDI3XSA9IFwiQ09ORklHX0dQTVVSTF9LRVlfSU1TXCI7XG4gICAgUHJvZHVjdEluZm9Db25maWdLZXlbUHJvZHVjdEluZm9Db25maWdLZXlbXCJDT05GSUdfR1BNVVJMX0tFWV9LQk9cIl0gPSAyOF0gPSBcIkNPTkZJR19HUE1VUkxfS0VZX0tCT1wiO1xuICAgIFByb2R1Y3RJbmZvQ29uZmlnS2V5W1Byb2R1Y3RJbmZvQ29uZmlnS2V5W1wiQ09ORklHX0dQTVVSTF9LRVlfS0lEU1wiXSA9IDI5XSA9IFwiQ09ORklHX0dQTVVSTF9LRVlfS0lEU1wiO1xuICAgIFByb2R1Y3RJbmZvQ29uZmlnS2V5W1Byb2R1Y3RJbmZvQ29uZmlnS2V5W1wiQ09ORklHX0dQTVVSTF9LRVlfTk9USUNFXCJdID0gMzBdID0gXCJDT05GSUdfR1BNVVJMX0tFWV9OT1RJQ0VcIjtcbiAgICBQcm9kdWN0SW5mb0NvbmZpZ0tleVtQcm9kdWN0SW5mb0NvbmZpZ0tleVtcIkNPTkZJR19HUE1VUkxfS0VZX0xDXCJdID0gMzFdID0gXCJDT05GSUdfR1BNVVJMX0tFWV9MQ1wiO1xuICAgIFByb2R1Y3RJbmZvQ29uZmlnS2V5W1Byb2R1Y3RJbmZvQ29uZmlnS2V5W1wiQ09ORklHX0dQTVVSTF9LRVlfTVNWQ1wiXSA9IDMyXSA9IFwiQ09ORklHX0dQTVVSTF9LRVlfTVNWQ1wiO1xuICAgIFByb2R1Y3RJbmZvQ29uZmlnS2V5W1Byb2R1Y3RJbmZvQ29uZmlnS2V5W1wiQ09ORklHX0dQTVVSTF9LRVlfTkNTXCJdID0gMzNdID0gXCJDT05GSUdfR1BNVVJMX0tFWV9OQ1NcIjtcbiAgICBQcm9kdWN0SW5mb0NvbmZpZ0tleVtQcm9kdWN0SW5mb0NvbmZpZ0tleVtcIkNPTkZJR19HUE1VUkxfS0VZX05FV1NPTlwiXSA9IDM0XSA9IFwiQ09ORklHX0dQTVVSTF9LRVlfTkVXU09OXCI7XG4gICAgUHJvZHVjdEluZm9Db25maWdLZXlbUHJvZHVjdEluZm9Db25maWdLZXlbXCJDT05GSUdfR1BNVVJMX0tFWV9PTlRWXCJdID0gMzVdID0gXCJDT05GSUdfR1BNVVJMX0tFWV9PTlRWXCI7XG4gICAgUHJvZHVjdEluZm9Db25maWdLZXlbUHJvZHVjdEluZm9Db25maWdLZXlbXCJDT05GSUdfR1BNVVJMX0tFWV9QVVNIXCJdID0gMzZdID0gXCJDT05GSUdfR1BNVVJMX0tFWV9QVVNIXCI7XG4gICAgUHJvZHVjdEluZm9Db25maWdLZXlbUHJvZHVjdEluZm9Db25maWdLZXlbXCJDT05GSUdfR1BNVVJMX0tFWV9STVwiXSA9IDM3XSA9IFwiQ09ORklHX0dQTVVSTF9LRVlfUk1cIjtcbiAgICBQcm9kdWN0SW5mb0NvbmZpZ0tleVtQcm9kdWN0SW5mb0NvbmZpZ0tleVtcIkNPTkZJR19HUE1VUkxfS0VZX1NBUFBISVJFXCJdID0gMzhdID0gXCJDT05GSUdfR1BNVVJMX0tFWV9TQVBQSElSRVwiO1xuICAgIFByb2R1Y3RJbmZvQ29uZmlnS2V5W1Byb2R1Y3RJbmZvQ29uZmlnS2V5W1wiQ09ORklHX0dQTVVSTF9LRVlfU0FTXCJdID0gMzldID0gXCJDT05GSUdfR1BNVVJMX0tFWV9TQVNcIjtcbiAgICBQcm9kdWN0SW5mb0NvbmZpZ0tleVtQcm9kdWN0SW5mb0NvbmZpZ0tleVtcIkNPTkZJR19HUE1VUkxfS0VZX1NDU1wiXSA9IDQwXSA9IFwiQ09ORklHX0dQTVVSTF9LRVlfU0NTXCI7XG4gICAgUHJvZHVjdEluZm9Db25maWdLZXlbUHJvZHVjdEluZm9Db25maWdLZXlbXCJDT05GSUdfR1BNVVJMX0tFWV9TRUFSQ0hBTExcIl0gPSA0MV0gPSBcIkNPTkZJR19HUE1VUkxfS0VZX1NFQVJDSEFMTFwiO1xuICAgIFByb2R1Y3RJbmZvQ29uZmlnS2V5W1Byb2R1Y3RJbmZvQ29uZmlnS2V5W1wiQ09ORklHX0dQTVVSTF9LRVlfU0hTXCJdID0gNDJdID0gXCJDT05GSUdfR1BNVVJMX0tFWV9TSFNcIjtcbiAgICBQcm9kdWN0SW5mb0NvbmZpZ0tleVtQcm9kdWN0SW5mb0NvbmZpZ0tleVtcIkNPTkZJR19HUE1VUkxfS0VZX1NPQ0NFUlwiXSA9IDQzXSA9IFwiQ09ORklHX0dQTVVSTF9LRVlfU09DQ0VSXCI7XG4gICAgUHJvZHVjdEluZm9Db25maWdLZXlbUHJvZHVjdEluZm9Db25maWdLZXlbXCJDT05GSUdfR1BNVVJMX0tFWV9TU09cIl0gPSA0NF0gPSBcIkNPTkZJR19HUE1VUkxfS0VZX1NTT1wiO1xuICAgIFByb2R1Y3RJbmZvQ29uZmlnS2V5W1Byb2R1Y3RJbmZvQ29uZmlnS2V5W1wiQ09ORklHX0dQTVVSTF9LRVlfU1RTXCJdID0gNDVdID0gXCJDT05GSUdfR1BNVVJMX0tFWV9TVFNcIjtcbiAgICBQcm9kdWN0SW5mb0NvbmZpZ0tleVtQcm9kdWN0SW5mb0NvbmZpZ0tleVtcIkNPTkZJR19HUE1VUkxfS0VZX1RXSVRURVJHV1wiXSA9IDQ2XSA9IFwiQ09ORklHX0dQTVVSTF9LRVlfVFdJVFRFUkdXXCI7XG4gICAgUHJvZHVjdEluZm9Db25maWdLZXlbUHJvZHVjdEluZm9Db25maWdLZXlbXCJDT05GSUdfS0VZX0FDQ0VTU0lCSUxJVFlfVFRTXCJdID0gNDddID0gXCJDT05GSUdfS0VZX0FDQ0VTU0lCSUxJVFlfVFRTXCI7XG4gICAgUHJvZHVjdEluZm9Db25maWdLZXlbUHJvZHVjdEluZm9Db25maWdLZXlbXCJDT05GSUdfS0VZX01XX01TT19DT05GSUdcIl0gPSA0OF0gPSBcIkNPTkZJR19LRVlfTVdfTVNPX0NPTkZJR1wiO1xuICAgIFByb2R1Y3RJbmZvQ29uZmlnS2V5W1Byb2R1Y3RJbmZvQ29uZmlnS2V5W1wiQ09ORklHX0dQTVVSTF9LRVlfRVhUUkFcIl0gPSA0OV0gPSBcIkNPTkZJR19HUE1VUkxfS0VZX0VYVFJBXCI7XG4gICAgUHJvZHVjdEluZm9Db25maWdLZXlbUHJvZHVjdEluZm9Db25maWdLZXlbXCJDT05GSUdfR1BNVVJMX0tFWV9NVVNJQ1wiXSA9IDUwXSA9IFwiQ09ORklHX0dQTVVSTF9LRVlfTVVTSUNcIjtcbiAgICBQcm9kdWN0SW5mb0NvbmZpZ0tleVtQcm9kdWN0SW5mb0NvbmZpZ0tleVtcIkNPTkZJR19LRVlfQUNUSVZFX0NBVEVHT1JZXCJdID0gNTFdID0gXCJDT05GSUdfS0VZX0FDVElWRV9DQVRFR09SWVwiO1xuICAgIFByb2R1Y3RJbmZvQ29uZmlnS2V5W1Byb2R1Y3RJbmZvQ29uZmlnS2V5W1wiQ09ORklHX0tFWV9NVVRFXCJdID0gNTJdID0gXCJDT05GSUdfS0VZX01VVEVcIjtcbiAgICBQcm9kdWN0SW5mb0NvbmZpZ0tleVtQcm9kdWN0SW5mb0NvbmZpZ0tleVtcIkNPTkZJR19LRVlfT1NEX05VTUJFUlBBRFwiXSA9IDUzXSA9IFwiQ09ORklHX0tFWV9PU0RfTlVNQkVSUEFEXCI7XG4gICAgUHJvZHVjdEluZm9Db25maWdLZXlbUHJvZHVjdEluZm9Db25maWdLZXlbXCJDT05GSUdfS0VZX09TRF9WSVJUVUFMUkVNT1RFXCJdID0gNTRdID0gXCJDT05GSUdfS0VZX09TRF9WSVJUVUFMUkVNT1RFXCI7XG4gICAgUHJvZHVjdEluZm9Db25maWdLZXlbUHJvZHVjdEluZm9Db25maWdLZXlbXCJDT05GSUdfS0VZX1NUQVRVU19ORVRGTElYXCJdID0gNTVdID0gXCJDT05GSUdfS0VZX1NUQVRVU19ORVRGTElYXCI7XG4gICAgUHJvZHVjdEluZm9Db25maWdLZXlbUHJvZHVjdEluZm9Db25maWdLZXlbXCJDT05GSUdfS0VZX01VTFRJVklFV19JTkZPXCJdID0gNTZdID0gXCJDT05GSUdfS0VZX01VTFRJVklFV19JTkZPXCI7XG59KShQcm9kdWN0SW5mb0NvbmZpZ0tleSA9IGV4cG9ydHMuUHJvZHVjdEluZm9Db25maWdLZXkgfHwgKGV4cG9ydHMuUHJvZHVjdEluZm9Db25maWdLZXkgPSB7fSkpO1xudmFyIFByb2R1Y3RJbmZvTm9HbGFzczNkU3VwcG9ydDtcbihmdW5jdGlvbiAoUHJvZHVjdEluZm9Ob0dsYXNzM2RTdXBwb3J0KSB7XG4gICAgUHJvZHVjdEluZm9Ob0dsYXNzM2RTdXBwb3J0W1Byb2R1Y3RJbmZvTm9HbGFzczNkU3VwcG9ydFtcIk5PX0dMQVNTXzNEX05PVF9TVVBQT1JURURcIl0gPSAwXSA9IFwiTk9fR0xBU1NfM0RfTk9UX1NVUFBPUlRFRFwiO1xuICAgIFByb2R1Y3RJbmZvTm9HbGFzczNkU3VwcG9ydFtQcm9kdWN0SW5mb05vR2xhc3MzZFN1cHBvcnRbXCJOT19HTEFTU18zRF9TVVBQT1JURURcIl0gPSAxXSA9IFwiTk9fR0xBU1NfM0RfU1VQUE9SVEVEXCI7XG59KShQcm9kdWN0SW5mb05vR2xhc3MzZFN1cHBvcnQgPSBleHBvcnRzLlByb2R1Y3RJbmZvTm9HbGFzczNkU3VwcG9ydCB8fCAoZXhwb3J0cy5Qcm9kdWN0SW5mb05vR2xhc3MzZFN1cHBvcnQgPSB7fSkpO1xudmFyIFByb2R1Y3RJbmZvU2lTZXJ2ZXJUeXBlO1xuKGZ1bmN0aW9uIChQcm9kdWN0SW5mb1NpU2VydmVyVHlwZSkge1xuICAgIFByb2R1Y3RJbmZvU2lTZXJ2ZXJUeXBlW1Byb2R1Y3RJbmZvU2lTZXJ2ZXJUeXBlW1wiU0lfVFlQRV9PUEVSQVRJSU5HX1NFUlZFUlwiXSA9IDBdID0gXCJTSV9UWVBFX09QRVJBVElJTkdfU0VSVkVSXCI7XG4gICAgUHJvZHVjdEluZm9TaVNlcnZlclR5cGVbUHJvZHVjdEluZm9TaVNlcnZlclR5cGVbXCJTSV9UWVBFX0RFVkVMT1BNRU5UX1NFUlZFUlwiXSA9IDFdID0gXCJTSV9UWVBFX0RFVkVMT1BNRU5UX1NFUlZFUlwiO1xuICAgIFByb2R1Y3RJbmZvU2lTZXJ2ZXJUeXBlW1Byb2R1Y3RJbmZvU2lTZXJ2ZXJUeXBlW1wiU0lfVFlQRV9ERVZFTE9QSU5HX1NFUlZFUlwiXSA9IDJdID0gXCJTSV9UWVBFX0RFVkVMT1BJTkdfU0VSVkVSXCI7XG59KShQcm9kdWN0SW5mb1NpU2VydmVyVHlwZSA9IGV4cG9ydHMuUHJvZHVjdEluZm9TaVNlcnZlclR5cGUgfHwgKGV4cG9ydHMuUHJvZHVjdEluZm9TaVNlcnZlclR5cGUgPSB7fSkpO1xudmFyIFR2SW5mb01lbnVLZXk7XG4oZnVuY3Rpb24gKFR2SW5mb01lbnVLZXkpIHtcbiAgICBUdkluZm9NZW51S2V5W1R2SW5mb01lbnVLZXlbXCJDQVBUSU9OX09OT0ZGX0tFWVwiXSA9IDBdID0gXCJDQVBUSU9OX09OT0ZGX0tFWVwiO1xuICAgIFR2SW5mb01lbnVLZXlbVHZJbmZvTWVudUtleVtcIkNBUFRJT05fTU9ERV9LRVlcIl0gPSAxXSA9IFwiQ0FQVElPTl9NT0RFX0tFWVwiO1xuICAgIFR2SW5mb01lbnVLZXlbVHZJbmZvTWVudUtleVtcIkNBUFRJT05fRk9OVF9TSVpFX0tFWVwiXSA9IDJdID0gXCJDQVBUSU9OX0ZPTlRfU0laRV9LRVlcIjtcbiAgICBUdkluZm9NZW51S2V5W1R2SW5mb01lbnVLZXlbXCJDQVBUSU9OX0ZPTlRfU1RZTEVfS0VZXCJdID0gM10gPSBcIkNBUFRJT05fRk9OVF9TVFlMRV9LRVlcIjtcbiAgICBUdkluZm9NZW51S2V5W1R2SW5mb01lbnVLZXlbXCJDQVBUSU9OX0ZHX0NPTE9SX0tFWVwiXSA9IDRdID0gXCJDQVBUSU9OX0ZHX0NPTE9SX0tFWVwiO1xuICAgIFR2SW5mb01lbnVLZXlbVHZJbmZvTWVudUtleVtcIkNBUFRJT05fRkdfT1BBQ0lUWV9LRVlcIl0gPSA1XSA9IFwiQ0FQVElPTl9GR19PUEFDSVRZX0tFWVwiO1xuICAgIFR2SW5mb01lbnVLZXlbVHZJbmZvTWVudUtleVtcIkNBUFRJT05fQkdfQ09MT1JfS0VZXCJdID0gNl0gPSBcIkNBUFRJT05fQkdfQ09MT1JfS0VZXCI7XG4gICAgVHZJbmZvTWVudUtleVtUdkluZm9NZW51S2V5W1wiQ0FQVElPTl9CR19PUEFDSVRZX0tFWVwiXSA9IDddID0gXCJDQVBUSU9OX0JHX09QQUNJVFlfS0VZXCI7XG4gICAgVHZJbmZvTWVudUtleVtUdkluZm9NZW51S2V5W1wiQ0FQVElPTl9FREdFX1RZUEVfS0VZXCJdID0gOF0gPSBcIkNBUFRJT05fRURHRV9UWVBFX0tFWVwiO1xuICAgIFR2SW5mb01lbnVLZXlbVHZJbmZvTWVudUtleVtcIkNBUFRJT05fRURHRV9DT0xPUl9LRVlcIl0gPSA5XSA9IFwiQ0FQVElPTl9FREdFX0NPTE9SX0tFWVwiO1xuICAgIFR2SW5mb01lbnVLZXlbVHZJbmZvTWVudUtleVtcIkNBUFRJT05fV0lORE9XX0NPTE9SX0tFWVwiXSA9IDEwXSA9IFwiQ0FQVElPTl9XSU5ET1dfQ09MT1JfS0VZXCI7XG4gICAgVHZJbmZvTWVudUtleVtUdkluZm9NZW51S2V5W1wiQ0FQVElPTl9XSU5ET1dfT1BBQ0lUWV9LRVlcIl0gPSAxMV0gPSBcIkNBUFRJT05fV0lORE9XX09QQUNJVFlfS0VZXCI7XG4gICAgVHZJbmZvTWVudUtleVtUdkluZm9NZW51S2V5W1wiQUNDRVNTSUJJTElUWV9GT0NVU19aT09NXCJdID0gMTJdID0gXCJBQ0NFU1NJQklMSVRZX0ZPQ1VTX1pPT01cIjtcbiAgICBUdkluZm9NZW51S2V5W1R2SW5mb01lbnVLZXlbXCJBQ0NFU1NJQklMSVRZX0hJR0hfQ09OVFJBU1RcIl0gPSAxM10gPSBcIkFDQ0VTU0lCSUxJVFlfSElHSF9DT05UUkFTVFwiO1xuICAgIFR2SW5mb01lbnVLZXlbVHZJbmZvTWVudUtleVtcIlNNQVJUSFVCX0NIQU5ORUxfQk9VTkRfQVBQU19USUNLRVJcIl0gPSAxNF0gPSBcIlNNQVJUSFVCX0NIQU5ORUxfQk9VTkRfQVBQU19USUNLRVJcIjtcbiAgICBUdkluZm9NZW51S2V5W1R2SW5mb01lbnVLZXlbXCJWT0lDRV9HVUlERV9LRVlcIl0gPSAxNV0gPSBcIlZPSUNFX0dVSURFX0tFWVwiO1xuICAgIFR2SW5mb01lbnVLZXlbVHZJbmZvTWVudUtleVtcIlNVQlRJVExFX09OT0ZGX0tFWVwiXSA9IDE2XSA9IFwiU1VCVElUTEVfT05PRkZfS0VZXCI7XG4gICAgVHZJbmZvTWVudUtleVtUdkluZm9NZW51S2V5W1wiU1VCVElUTEVfTU9ERV9LRVlcIl0gPSAxN10gPSBcIlNVQlRJVExFX01PREVfS0VZXCI7XG4gICAgVHZJbmZvTWVudUtleVtUdkluZm9NZW51S2V5W1wiUFJJTUFSWV9BVURJT19MQU5HVUFHRV9LRVlcIl0gPSAxOF0gPSBcIlBSSU1BUllfQVVESU9fTEFOR1VBR0VfS0VZXCI7XG4gICAgVHZJbmZvTWVudUtleVtUdkluZm9NZW51S2V5W1wiU0VDT05EQVJZX0FVRElPX0xBTkdVQUdFX0tFWVwiXSA9IDE5XSA9IFwiU0VDT05EQVJZX0FVRElPX0xBTkdVQUdFX0tFWVwiO1xuICAgIFR2SW5mb01lbnVLZXlbVHZJbmZvTWVudUtleVtcIkFDQ0VTU0lCSUxJVFlfVk9JQ0VfR1VJREVfU1BFRURcIl0gPSAyMF0gPSBcIkFDQ0VTU0lCSUxJVFlfVk9JQ0VfR1VJREVfU1BFRURcIjtcbiAgICBUdkluZm9NZW51S2V5W1R2SW5mb01lbnVLZXlbXCJDQVBUSU9OX1NUWUxFX0tFWVwiXSA9IDIxXSA9IFwiQ0FQVElPTl9TVFlMRV9LRVlcIjtcbn0pKFR2SW5mb01lbnVLZXkgPSBleHBvcnRzLlR2SW5mb01lbnVLZXkgfHwgKGV4cG9ydHMuVHZJbmZvTWVudUtleSA9IHt9KSk7XG52YXIgVHZJbmZvTWVudVZhbHVlO1xuKGZ1bmN0aW9uIChUdkluZm9NZW51VmFsdWUpIHtcbiAgICBUdkluZm9NZW51VmFsdWVbVHZJbmZvTWVudVZhbHVlW1wiT0ZGXCJdID0gMF0gPSBcIk9GRlwiO1xuICAgIFR2SW5mb01lbnVWYWx1ZVtUdkluZm9NZW51VmFsdWVbXCJPTlwiXSA9IDFdID0gXCJPTlwiO1xuICAgIFR2SW5mb01lbnVWYWx1ZVtUdkluZm9NZW51VmFsdWVbXCJDQVBUSU9OX09GRlwiXSA9IDBdID0gXCJDQVBUSU9OX09GRlwiO1xuICAgIFR2SW5mb01lbnVWYWx1ZVtUdkluZm9NZW51VmFsdWVbXCJDQVBUSU9OX09OXCJdID0gMV0gPSBcIkNBUFRJT05fT05cIjtcbiAgICBUdkluZm9NZW51VmFsdWVbVHZJbmZvTWVudVZhbHVlW1wiQ0FQVElPTl9NT0RFX0RFRkFVTFRcIl0gPSAwXSA9IFwiQ0FQVElPTl9NT0RFX0RFRkFVTFRcIjtcbiAgICBUdkluZm9NZW51VmFsdWVbVHZJbmZvTWVudVZhbHVlW1wiQ0FQVElPTl9NT0RFX1NFUlZJQ0UxXCJdID0gMV0gPSBcIkNBUFRJT05fTU9ERV9TRVJWSUNFMVwiO1xuICAgIFR2SW5mb01lbnVWYWx1ZVtUdkluZm9NZW51VmFsdWVbXCJDQVBUSU9OX01PREVfU0VSVklDRTJcIl0gPSAyXSA9IFwiQ0FQVElPTl9NT0RFX1NFUlZJQ0UyXCI7XG4gICAgVHZJbmZvTWVudVZhbHVlW1R2SW5mb01lbnVWYWx1ZVtcIkNBUFRJT05fTU9ERV9TRVJWSUNFM1wiXSA9IDNdID0gXCJDQVBUSU9OX01PREVfU0VSVklDRTNcIjtcbiAgICBUdkluZm9NZW51VmFsdWVbVHZJbmZvTWVudVZhbHVlW1wiQ0FQVElPTl9NT0RFX1NFUlZJQ0U0XCJdID0gNF0gPSBcIkNBUFRJT05fTU9ERV9TRVJWSUNFNFwiO1xuICAgIFR2SW5mb01lbnVWYWx1ZVtUdkluZm9NZW51VmFsdWVbXCJDQVBUSU9OX01PREVfU0VSVklDRTVcIl0gPSA1XSA9IFwiQ0FQVElPTl9NT0RFX1NFUlZJQ0U1XCI7XG4gICAgVHZJbmZvTWVudVZhbHVlW1R2SW5mb01lbnVWYWx1ZVtcIkNBUFRJT05fTU9ERV9TRVJWSUNFNlwiXSA9IDZdID0gXCJDQVBUSU9OX01PREVfU0VSVklDRTZcIjtcbiAgICBUdkluZm9NZW51VmFsdWVbVHZJbmZvTWVudVZhbHVlW1wiQ0FQVElPTl9NT0RFX0NDMVwiXSA9IDddID0gXCJDQVBUSU9OX01PREVfQ0MxXCI7XG4gICAgVHZJbmZvTWVudVZhbHVlW1R2SW5mb01lbnVWYWx1ZVtcIkNBUFRJT05fTU9ERV9DQzJcIl0gPSA4XSA9IFwiQ0FQVElPTl9NT0RFX0NDMlwiO1xuICAgIFR2SW5mb01lbnVWYWx1ZVtUdkluZm9NZW51VmFsdWVbXCJDQVBUSU9OX01PREVfQ0MzXCJdID0gOV0gPSBcIkNBUFRJT05fTU9ERV9DQzNcIjtcbiAgICBUdkluZm9NZW51VmFsdWVbVHZJbmZvTWVudVZhbHVlW1wiQ0FQVElPTl9NT0RFX0NDNFwiXSA9IDEwXSA9IFwiQ0FQVElPTl9NT0RFX0NDNFwiO1xuICAgIFR2SW5mb01lbnVWYWx1ZVtUdkluZm9NZW51VmFsdWVbXCJDQVBUSU9OX01PREVfVEVYVDFcIl0gPSAxMV0gPSBcIkNBUFRJT05fTU9ERV9URVhUMVwiO1xuICAgIFR2SW5mb01lbnVWYWx1ZVtUdkluZm9NZW51VmFsdWVbXCJDQVBUSU9OX01PREVfVEVYVDJcIl0gPSAxMl0gPSBcIkNBUFRJT05fTU9ERV9URVhUMlwiO1xuICAgIFR2SW5mb01lbnVWYWx1ZVtUdkluZm9NZW51VmFsdWVbXCJDQVBUSU9OX01PREVfVEVYVDNcIl0gPSAxM10gPSBcIkNBUFRJT05fTU9ERV9URVhUM1wiO1xuICAgIFR2SW5mb01lbnVWYWx1ZVtUdkluZm9NZW51VmFsdWVbXCJDQVBUSU9OX01PREVfVEVYVDRcIl0gPSAxNF0gPSBcIkNBUFRJT05fTU9ERV9URVhUNFwiO1xuICAgIFR2SW5mb01lbnVWYWx1ZVtUdkluZm9NZW51VmFsdWVbXCJDQVBUSU9OX1NJWkVfREVGQVVMVFwiXSA9IDBdID0gXCJDQVBUSU9OX1NJWkVfREVGQVVMVFwiO1xuICAgIFR2SW5mb01lbnVWYWx1ZVtUdkluZm9NZW51VmFsdWVbXCJDQVBUSU9OX1NJWkVfU01BTExcIl0gPSAxXSA9IFwiQ0FQVElPTl9TSVpFX1NNQUxMXCI7XG4gICAgVHZJbmZvTWVudVZhbHVlW1R2SW5mb01lbnVWYWx1ZVtcIkNBUFRJT05fU0laRV9TVEFOREFSRFwiXSA9IDJdID0gXCJDQVBUSU9OX1NJWkVfU1RBTkRBUkRcIjtcbiAgICBUdkluZm9NZW51VmFsdWVbVHZJbmZvTWVudVZhbHVlW1wiQ0FQVElPTl9TSVpFX0xBUkdFXCJdID0gM10gPSBcIkNBUFRJT05fU0laRV9MQVJHRVwiO1xuICAgIFR2SW5mb01lbnVWYWx1ZVtUdkluZm9NZW51VmFsdWVbXCJDQVBUSU9OX1NJWkVfRVhUUkFfTEFSR0VcIl0gPSA0XSA9IFwiQ0FQVElPTl9TSVpFX0VYVFJBX0xBUkdFXCI7XG4gICAgVHZJbmZvTWVudVZhbHVlW1R2SW5mb01lbnVWYWx1ZVtcIkNBUFRJT05fRk9OVF9ERUZBVUxUXCJdID0gMF0gPSBcIkNBUFRJT05fRk9OVF9ERUZBVUxUXCI7XG4gICAgVHZJbmZvTWVudVZhbHVlW1R2SW5mb01lbnVWYWx1ZVtcIkNBUFRJT05fRk9OVF9TVFlMRTBcIl0gPSAxXSA9IFwiQ0FQVElPTl9GT05UX1NUWUxFMFwiO1xuICAgIFR2SW5mb01lbnVWYWx1ZVtUdkluZm9NZW51VmFsdWVbXCJDQVBUSU9OX0ZPTlRfU1RZTEUxXCJdID0gMl0gPSBcIkNBUFRJT05fRk9OVF9TVFlMRTFcIjtcbiAgICBUdkluZm9NZW51VmFsdWVbVHZJbmZvTWVudVZhbHVlW1wiQ0FQVElPTl9GT05UX1NUWUxFMlwiXSA9IDNdID0gXCJDQVBUSU9OX0ZPTlRfU1RZTEUyXCI7XG4gICAgVHZJbmZvTWVudVZhbHVlW1R2SW5mb01lbnVWYWx1ZVtcIkNBUFRJT05fRk9OVF9TVFlMRTNcIl0gPSA0XSA9IFwiQ0FQVElPTl9GT05UX1NUWUxFM1wiO1xuICAgIFR2SW5mb01lbnVWYWx1ZVtUdkluZm9NZW51VmFsdWVbXCJDQVBUSU9OX0ZPTlRfU1RZTEU0XCJdID0gNV0gPSBcIkNBUFRJT05fRk9OVF9TVFlMRTRcIjtcbiAgICBUdkluZm9NZW51VmFsdWVbVHZJbmZvTWVudVZhbHVlW1wiQ0FQVElPTl9GT05UX1NUWUxFNVwiXSA9IDZdID0gXCJDQVBUSU9OX0ZPTlRfU1RZTEU1XCI7XG4gICAgVHZJbmZvTWVudVZhbHVlW1R2SW5mb01lbnVWYWx1ZVtcIkNBUFRJT05fRk9OVF9TVFlMRTZcIl0gPSA3XSA9IFwiQ0FQVElPTl9GT05UX1NUWUxFNlwiO1xuICAgIFR2SW5mb01lbnVWYWx1ZVtUdkluZm9NZW51VmFsdWVbXCJDQVBUSU9OX0NPTE9SX0RFRkFVTFRcIl0gPSAwXSA9IFwiQ0FQVElPTl9DT0xPUl9ERUZBVUxUXCI7XG4gICAgVHZJbmZvTWVudVZhbHVlW1R2SW5mb01lbnVWYWx1ZVtcIkNBUFRJT05fQ09MT1JfV0hJVEVcIl0gPSAxXSA9IFwiQ0FQVElPTl9DT0xPUl9XSElURVwiO1xuICAgIFR2SW5mb01lbnVWYWx1ZVtUdkluZm9NZW51VmFsdWVbXCJDQVBUSU9OX0NPTE9SX0JMQUNLXCJdID0gMl0gPSBcIkNBUFRJT05fQ09MT1JfQkxBQ0tcIjtcbiAgICBUdkluZm9NZW51VmFsdWVbVHZJbmZvTWVudVZhbHVlW1wiQ0FQVElPTl9DT0xPUl9SRURcIl0gPSAzXSA9IFwiQ0FQVElPTl9DT0xPUl9SRURcIjtcbiAgICBUdkluZm9NZW51VmFsdWVbVHZJbmZvTWVudVZhbHVlW1wiQ0FQVElPTl9DT0xPUl9HUkVFTlwiXSA9IDRdID0gXCJDQVBUSU9OX0NPTE9SX0dSRUVOXCI7XG4gICAgVHZJbmZvTWVudVZhbHVlW1R2SW5mb01lbnVWYWx1ZVtcIkNBUFRJT05fQ09MT1JfQkxVRVwiXSA9IDVdID0gXCJDQVBUSU9OX0NPTE9SX0JMVUVcIjtcbiAgICBUdkluZm9NZW51VmFsdWVbVHZJbmZvTWVudVZhbHVlW1wiQ0FQVElPTl9DT0xPUl9ZRUxMT1dcIl0gPSA2XSA9IFwiQ0FQVElPTl9DT0xPUl9ZRUxMT1dcIjtcbiAgICBUdkluZm9NZW51VmFsdWVbVHZJbmZvTWVudVZhbHVlW1wiQ0FQVElPTl9DT0xPUl9NQUdFTlRBXCJdID0gN10gPSBcIkNBUFRJT05fQ09MT1JfTUFHRU5UQVwiO1xuICAgIFR2SW5mb01lbnVWYWx1ZVtUdkluZm9NZW51VmFsdWVbXCJDQVBUSU9OX0NPTE9SX0NZQU5cIl0gPSA4XSA9IFwiQ0FQVElPTl9DT0xPUl9DWUFOXCI7XG4gICAgVHZJbmZvTWVudVZhbHVlW1R2SW5mb01lbnVWYWx1ZVtcIkNBUFRJT05fT1BBQ0lUWV9TT0xJRFwiXSA9IDBdID0gXCJDQVBUSU9OX09QQUNJVFlfU09MSURcIjtcbiAgICBUdkluZm9NZW51VmFsdWVbVHZJbmZvTWVudVZhbHVlW1wiQ0FQVElPTl9PUEFDSVRZX0ZMQVNIXCJdID0gMV0gPSBcIkNBUFRJT05fT1BBQ0lUWV9GTEFTSFwiO1xuICAgIFR2SW5mb01lbnVWYWx1ZVtUdkluZm9NZW51VmFsdWVbXCJDQVBUSU9OX09QQUNJVFlfVFJBTlNMVUNFTlRcIl0gPSAyXSA9IFwiQ0FQVElPTl9PUEFDSVRZX1RSQU5TTFVDRU5UXCI7XG4gICAgVHZJbmZvTWVudVZhbHVlW1R2SW5mb01lbnVWYWx1ZVtcIkNBUFRJT05fT1BBQ0lUWV9UUkFOU1BBUkVOVFwiXSA9IDNdID0gXCJDQVBUSU9OX09QQUNJVFlfVFJBTlNQQVJFTlRcIjtcbiAgICBUdkluZm9NZW51VmFsdWVbVHZJbmZvTWVudVZhbHVlW1wiQ0FQVElPTl9PUEFDSVRZX0RFRkFVTFRcIl0gPSA0XSA9IFwiQ0FQVElPTl9PUEFDSVRZX0RFRkFVTFRcIjtcbiAgICBUdkluZm9NZW51VmFsdWVbVHZJbmZvTWVudVZhbHVlW1wiQ0FQVElPTl9PUEFDSVRZX0hJR0hMWV9UUkFOU0xVQ0VOVFwiXSA9IDVdID0gXCJDQVBUSU9OX09QQUNJVFlfSElHSExZX1RSQU5TTFVDRU5UXCI7XG4gICAgVHZJbmZvTWVudVZhbHVlW1R2SW5mb01lbnVWYWx1ZVtcIkNBUFRJT05fT1BBQ0lUWV9TTElHSFRMWV9UUkFOU0xVQ0VOVFwiXSA9IDZdID0gXCJDQVBUSU9OX09QQUNJVFlfU0xJR0hUTFlfVFJBTlNMVUNFTlRcIjtcbiAgICBUdkluZm9NZW51VmFsdWVbVHZJbmZvTWVudVZhbHVlW1wiQ0FQVElPTl9FREdFX05PTkVcIl0gPSAwXSA9IFwiQ0FQVElPTl9FREdFX05PTkVcIjtcbiAgICBUdkluZm9NZW51VmFsdWVbVHZJbmZvTWVudVZhbHVlW1wiQ0FQVElPTl9FREdFX1JBSVNFRFwiXSA9IDFdID0gXCJDQVBUSU9OX0VER0VfUkFJU0VEXCI7XG4gICAgVHZJbmZvTWVudVZhbHVlW1R2SW5mb01lbnVWYWx1ZVtcIkNBUFRJT05fRURHRV9ERVBSRVNTRURcIl0gPSAyXSA9IFwiQ0FQVElPTl9FREdFX0RFUFJFU1NFRFwiO1xuICAgIFR2SW5mb01lbnVWYWx1ZVtUdkluZm9NZW51VmFsdWVbXCJDQVBUSU9OX0VER0VfVU5JRk9STVwiXSA9IDNdID0gXCJDQVBUSU9OX0VER0VfVU5JRk9STVwiO1xuICAgIFR2SW5mb01lbnVWYWx1ZVtUdkluZm9NZW51VmFsdWVbXCJDQVBUSU9OX0VER0VfRFJPUF9TSEFET1dFRFwiXSA9IDRdID0gXCJDQVBUSU9OX0VER0VfRFJPUF9TSEFET1dFRFwiO1xuICAgIFR2SW5mb01lbnVWYWx1ZVtUdkluZm9NZW51VmFsdWVbXCJTVUJUSVRMRV9OT1JNQUxcIl0gPSAwXSA9IFwiU1VCVElUTEVfTk9STUFMXCI7XG4gICAgVHZJbmZvTWVudVZhbHVlW1R2SW5mb01lbnVWYWx1ZVtcIlNVQlRJVExFX0hFQVJJTkdfSU1NUEVBUkVEXCJdID0gMV0gPSBcIlNVQlRJVExFX0hFQVJJTkdfSU1NUEVBUkVEXCI7XG4gICAgVHZJbmZvTWVudVZhbHVlW1wiQVVESU9fTEFOR1VBR0VfQ09ERV9BRlJcIl0gPSBcIkFGUlwiO1xuICAgIFR2SW5mb01lbnVWYWx1ZVtcIkFVRElPX0xBTkdVQUdFX0NPREVfQUtBXCJdID0gXCJBS0FcIjtcbiAgICBUdkluZm9NZW51VmFsdWVbXCJBVURJT19MQU5HVUFHRV9DT0RFX0FNSFwiXSA9IFwiQU1IXCI7XG4gICAgVHZJbmZvTWVudVZhbHVlW1wiQVVESU9fTEFOR1VBR0VfQ09ERV9BUkFcIl0gPSBcIkFSQVwiO1xuICAgIFR2SW5mb01lbnVWYWx1ZVtcIkFVRElPX0xBTkdVQUdFX0NPREVfQVNNXCJdID0gXCJBU01cIjtcbiAgICBUdkluZm9NZW51VmFsdWVbXCJBVURJT19MQU5HVUFHRV9DT0RFX0JFTlwiXSA9IFwiQkVOXCI7XG4gICAgVHZJbmZvTWVudVZhbHVlW1wiQVVESU9fTEFOR1VBR0VfQ09ERV9CVUxcIl0gPSBcIkJVTFwiO1xuICAgIFR2SW5mb01lbnVWYWx1ZVtcIkFVRElPX0xBTkdVQUdFX0NPREVfQ0FUXCJdID0gXCJDQVRcIjtcbiAgICBUdkluZm9NZW51VmFsdWVbXCJBVURJT19MQU5HVUFHRV9DT0RFX0NISVwiXSA9IFwiQ0hJXCI7XG4gICAgVHZJbmZvTWVudVZhbHVlW1wiQVVESU9fTEFOR1VBR0VfQ09ERV9DTU5cIl0gPSBcIkNNTlwiO1xuICAgIFR2SW5mb01lbnVWYWx1ZVtcIkFVRElPX0xBTkdVQUdFX0NPREVfQ1pFXCJdID0gXCJDWkVcIjtcbiAgICBUdkluZm9NZW51VmFsdWVbXCJBVURJT19MQU5HVUFHRV9DT0RFX0RBR1wiXSA9IFwiREFHXCI7XG4gICAgVHZJbmZvTWVudVZhbHVlW1wiQVVESU9fTEFOR1VBR0VfQ09ERV9EQU5cIl0gPSBcIkRBTlwiO1xuICAgIFR2SW5mb01lbnVWYWx1ZVtcIkFVRElPX0xBTkdVQUdFX0NPREVfRFVUXCJdID0gXCJEVVRcIjtcbiAgICBUdkluZm9NZW51VmFsdWVbXCJBVURJT19MQU5HVUFHRV9DT0RFX0VOR1wiXSA9IFwiRU5HXCI7XG4gICAgVHZJbmZvTWVudVZhbHVlW1wiQVVESU9fTEFOR1VBR0VfQ09ERV9FU1RcIl0gPSBcIkVTVFwiO1xuICAgIFR2SW5mb01lbnVWYWx1ZVtcIkFVRElPX0xBTkdVQUdFX0NPREVfRVVTXCJdID0gXCJFVVNcIjtcbiAgICBUdkluZm9NZW51VmFsdWVbXCJBVURJT19MQU5HVUFHRV9DT0RFX0VXRVwiXSA9IFwiRVdFXCI7XG4gICAgVHZJbmZvTWVudVZhbHVlW1wiQVVESU9fTEFOR1VBR0VfQ09ERV9GSU5cIl0gPSBcIkZJTlwiO1xuICAgIFR2SW5mb01lbnVWYWx1ZVtcIkFVRElPX0xBTkdVQUdFX0NPREVfRlJFXCJdID0gXCJGUkVcIjtcbiAgICBUdkluZm9NZW51VmFsdWVbXCJBVURJT19MQU5HVUFHRV9DT0RFX0dBQVwiXSA9IFwiR0FBXCI7XG4gICAgVHZJbmZvTWVudVZhbHVlW1wiQVVESU9fTEFOR1VBR0VfQ09ERV9HRVJcIl0gPSBcIkdFUlwiO1xuICAgIFR2SW5mb01lbnVWYWx1ZVtcIkFVRElPX0xBTkdVQUdFX0NPREVfR0xBXCJdID0gXCJHTEFcIjtcbiAgICBUdkluZm9NZW51VmFsdWVbXCJBVURJT19MQU5HVUFHRV9DT0RFX0dMR1wiXSA9IFwiR0xHXCI7XG4gICAgVHZJbmZvTWVudVZhbHVlW1wiQVVESU9fTEFOR1VBR0VfQ09ERV9HT1NcIl0gPSBcIkdPU1wiO1xuICAgIFR2SW5mb01lbnVWYWx1ZVtcIkFVRElPX0xBTkdVQUdFX0NPREVfR1JFXCJdID0gXCJHUkVcIjtcbiAgICBUdkluZm9NZW51VmFsdWVbXCJBVURJT19MQU5HVUFHRV9DT0RFX0dVSlwiXSA9IFwiR1VKXCI7XG4gICAgVHZJbmZvTWVudVZhbHVlW1wiQVVESU9fTEFOR1VBR0VfQ09ERV9IQVVcIl0gPSBcIkhBVVwiO1xuICAgIFR2SW5mb01lbnVWYWx1ZVtcIkFVRElPX0xBTkdVQUdFX0NPREVfSEVCXCJdID0gXCJIRUJcIjtcbiAgICBUdkluZm9NZW51VmFsdWVbXCJBVURJT19MQU5HVUFHRV9DT0RFX0hJTlwiXSA9IFwiSElOXCI7XG4gICAgVHZJbmZvTWVudVZhbHVlW1wiQVVESU9fTEFOR1VBR0VfQ09ERV9IUlZcIl0gPSBcIkhSVlwiO1xuICAgIFR2SW5mb01lbnVWYWx1ZVtcIkFVRElPX0xBTkdVQUdFX0NPREVfSFVOXCJdID0gXCJIVU5cIjtcbiAgICBUdkluZm9NZW51VmFsdWVbXCJBVURJT19MQU5HVUFHRV9DT0RFX0lHQlwiXSA9IFwiSUdCXCI7XG4gICAgVHZJbmZvTWVudVZhbHVlW1wiQVVESU9fTEFOR1VBR0VfQ09ERV9JTkRcIl0gPSBcIklORFwiO1xuICAgIFR2SW5mb01lbnVWYWx1ZVtcIkFVRElPX0xBTkdVQUdFX0NPREVfSVJJXCJdID0gXCJJUklcIjtcbiAgICBUdkluZm9NZW51VmFsdWVbXCJBVURJT19MQU5HVUFHRV9DT0RFX0lUQVwiXSA9IFwiSVRBXCI7XG4gICAgVHZJbmZvTWVudVZhbHVlW1wiQVVESU9fTEFOR1VBR0VfQ09ERV9KUE5cIl0gPSBcIkpQTlwiO1xuICAgIFR2SW5mb01lbnVWYWx1ZVtcIkFVRElPX0xBTkdVQUdFX0NPREVfS0FOXCJdID0gXCJLQU5cIjtcbiAgICBUdkluZm9NZW51VmFsdWVbXCJBVURJT19MQU5HVUFHRV9DT0RFX0tPS1wiXSA9IFwiS09LXCI7XG4gICAgVHZJbmZvTWVudVZhbHVlW1wiQVVESU9fTEFOR1VBR0VfQ09ERV9LT1JcIl0gPSBcIktPUlwiO1xuICAgIFR2SW5mb01lbnVWYWx1ZVtcIkFVRElPX0xBTkdVQUdFX0NPREVfTEFWXCJdID0gXCJMQVZcIjtcbiAgICBUdkluZm9NZW51VmFsdWVbXCJBVURJT19MQU5HVUFHRV9DT0RFX0xJVFwiXSA9IFwiTElUXCI7XG4gICAgVHZJbmZvTWVudVZhbHVlW1wiQVVESU9fTEFOR1VBR0VfQ09ERV9NQUxcIl0gPSBcIk1BTFwiO1xuICAgIFR2SW5mb01lbnVWYWx1ZVtcIkFVRElPX0xBTkdVQUdFX0NPREVfTUFPXCJdID0gXCJNQU9cIjtcbiAgICBUdkluZm9NZW51VmFsdWVbXCJBVURJT19MQU5HVUFHRV9DT0RFX01BUlwiXSA9IFwiTUFSXCI7XG4gICAgVHZJbmZvTWVudVZhbHVlW1wiQVVESU9fTEFOR1VBR0VfQ09ERV9NU0FcIl0gPSBcIk1TQVwiO1xuICAgIFR2SW5mb01lbnVWYWx1ZVtcIkFVRElPX0xBTkdVQUdFX0NPREVfTkJMXCJdID0gXCJOQkxcIjtcbiAgICBUdkluZm9NZW51VmFsdWVbXCJBVURJT19MQU5HVUFHRV9DT0RFX05PUlwiXSA9IFwiTk9SXCI7XG4gICAgVHZJbmZvTWVudVZhbHVlW1wiQVVESU9fTEFOR1VBR0VfQ09ERV9OU09cIl0gPSBcIk5TT1wiO1xuICAgIFR2SW5mb01lbnVWYWx1ZVtcIkFVRElPX0xBTkdVQUdFX0NPREVfTlpJXCJdID0gXCJOWklcIjtcbiAgICBUdkluZm9NZW51VmFsdWVbXCJBVURJT19MQU5HVUFHRV9DT0RFX09SSVwiXSA9IFwiT1JJXCI7XG4gICAgVHZJbmZvTWVudVZhbHVlW1wiQVVESU9fTEFOR1VBR0VfQ09ERV9QQU5cIl0gPSBcIlBBTlwiO1xuICAgIFR2SW5mb01lbnVWYWx1ZVtcIkFVRElPX0xBTkdVQUdFX0NPREVfUEVSXCJdID0gXCJQRVJcIjtcbiAgICBUdkluZm9NZW51VmFsdWVbXCJBVURJT19MQU5HVUFHRV9DT0RFX1BPTFwiXSA9IFwiUE9MXCI7XG4gICAgVHZJbmZvTWVudVZhbHVlW1wiQVVESU9fTEFOR1VBR0VfQ09ERV9QT1JcIl0gPSBcIlBPUlwiO1xuICAgIFR2SW5mb01lbnVWYWx1ZVtcIkFVRElPX0xBTkdVQUdFX0NPREVfUUFBXCJdID0gXCJRQUFcIjtcbiAgICBUdkluZm9NZW51VmFsdWVbXCJBVURJT19MQU5HVUFHRV9DT0RFX1FBQlwiXSA9IFwiUUFCXCI7XG4gICAgVHZJbmZvTWVudVZhbHVlW1wiQVVESU9fTEFOR1VBR0VfQ09ERV9RQUNcIl0gPSBcIlFBQ1wiO1xuICAgIFR2SW5mb01lbnVWYWx1ZVtcIkFVRElPX0xBTkdVQUdFX0NPREVfUk9NXCJdID0gXCJST01cIjtcbiAgICBUdkluZm9NZW51VmFsdWVbXCJBVURJT19MQU5HVUFHRV9DT0RFX1JVU1wiXSA9IFwiUlVTXCI7XG4gICAgVHZJbmZvTWVudVZhbHVlW1wiQVVESU9fTEFOR1VBR0VfQ09ERV9TTEtcIl0gPSBcIlNMS1wiO1xuICAgIFR2SW5mb01lbnVWYWx1ZVtcIkFVRElPX0xBTkdVQUdFX0NPREVfU09UXCJdID0gXCJTT1RcIjtcbiAgICBUdkluZm9NZW51VmFsdWVbXCJBVURJT19MQU5HVUFHRV9DT0RFX1NQQVwiXSA9IFwiU1BBXCI7XG4gICAgVHZJbmZvTWVudVZhbHVlW1wiQVVESU9fTEFOR1VBR0VfQ09ERV9TUlBcIl0gPSBcIlNSUFwiO1xuICAgIFR2SW5mb01lbnVWYWx1ZVtcIkFVRElPX0xBTkdVQUdFX0NPREVfU1NXXCJdID0gXCJTU1dcIjtcbiAgICBUdkluZm9NZW51VmFsdWVbXCJBVURJT19MQU5HVUFHRV9DT0RFX1NXQVwiXSA9IFwiU1dBXCI7XG4gICAgVHZJbmZvTWVudVZhbHVlW1wiQVVESU9fTEFOR1VBR0VfQ09ERV9TV0VcIl0gPSBcIlNXRVwiO1xuICAgIFR2SW5mb01lbnVWYWx1ZVtcIkFVRElPX0xBTkdVQUdFX0NPREVfVEFNXCJdID0gXCJUQU1cIjtcbiAgICBUdkluZm9NZW51VmFsdWVbXCJBVURJT19MQU5HVUFHRV9DT0RFX1RFTFwiXSA9IFwiVEVMXCI7XG4gICAgVHZJbmZvTWVudVZhbHVlW1wiQVVESU9fTEFOR1VBR0VfQ09ERV9USEFcIl0gPSBcIlRIQVwiO1xuICAgIFR2SW5mb01lbnVWYWx1ZVtcIkFVRElPX0xBTkdVQUdFX0NPREVfVFNOXCJdID0gXCJUU05cIjtcbiAgICBUdkluZm9NZW51VmFsdWVbXCJBVURJT19MQU5HVUFHRV9DT0RFX1RTT1wiXSA9IFwiVFNPXCI7XG4gICAgVHZJbmZvTWVudVZhbHVlW1wiQVVESU9fTEFOR1VBR0VfQ09ERV9UVVJcIl0gPSBcIlRVUlwiO1xuICAgIFR2SW5mb01lbnVWYWx1ZVtcIkFVRElPX0xBTkdVQUdFX0NPREVfVFdJXCJdID0gXCJUV0lcIjtcbiAgICBUdkluZm9NZW51VmFsdWVbXCJBVURJT19MQU5HVUFHRV9DT0RFX1VLUlwiXSA9IFwiVUtSXCI7XG4gICAgVHZJbmZvTWVudVZhbHVlW1wiQVVESU9fTEFOR1VBR0VfQ09ERV9WQUxcIl0gPSBcIlZBTFwiO1xuICAgIFR2SW5mb01lbnVWYWx1ZVtcIkFVRElPX0xBTkdVQUdFX0NPREVfVkVOXCJdID0gXCJWRU5cIjtcbiAgICBUdkluZm9NZW51VmFsdWVbXCJBVURJT19MQU5HVUFHRV9DT0RFX1ZJRVwiXSA9IFwiVklFXCI7XG4gICAgVHZJbmZvTWVudVZhbHVlW1wiQVVESU9fTEFOR1VBR0VfQ09ERV9XRUxcIl0gPSBcIldFTFwiO1xuICAgIFR2SW5mb01lbnVWYWx1ZVtcIkFVRElPX0xBTkdVQUdFX0NPREVfWEhPXCJdID0gXCJYSE9cIjtcbiAgICBUdkluZm9NZW51VmFsdWVbXCJBVURJT19MQU5HVUFHRV9DT0RFX1hTTVwiXSA9IFwiWFNNXCI7XG4gICAgVHZJbmZvTWVudVZhbHVlW1wiQVVESU9fTEFOR1VBR0VfQ09ERV9ZT1JcIl0gPSBcIllPUlwiO1xuICAgIFR2SW5mb01lbnVWYWx1ZVtcIkFVRElPX0xBTkdVQUdFX0NPREVfWVVFXCJdID0gXCJZVUVcIjtcbiAgICBUdkluZm9NZW51VmFsdWVbXCJBVURJT19MQU5HVUFHRV9DT0RFX1pIT1wiXSA9IFwiWkhPXCI7XG4gICAgVHZJbmZvTWVudVZhbHVlW1wiQVVESU9fTEFOR1VBR0VfQ09ERV9aVUxcIl0gPSBcIlpVTFwiO1xuICAgIFR2SW5mb01lbnVWYWx1ZVtcIlZPSUNFR1VJREVfU1BFRURfVkVSWV9GQVNUXCJdID0gXCJWRVJZX0ZBU1RcIjtcbiAgICBUdkluZm9NZW51VmFsdWVbXCJWT0lDRUdVSURFX1NQRUVEX0ZBU1RcIl0gPSBcIkZBU1RcIjtcbiAgICBUdkluZm9NZW51VmFsdWVbXCJWT0lDRUdVSURFX1NQRUVEX05PUk1BTFwiXSA9IFwiTk9STUFMXCI7XG4gICAgVHZJbmZvTWVudVZhbHVlW1wiVk9JQ0VHVUlERV9TUEVFRF9TTE9XXCJdID0gXCJTTE9XXCI7XG4gICAgVHZJbmZvTWVudVZhbHVlW1wiVk9JQ0VHVUlERV9TUEVFRF9WRVJZX1NMT1dcIl0gPSBcIlZFUllfU0xPV1wiO1xuICAgIFR2SW5mb01lbnVWYWx1ZVtUdkluZm9NZW51VmFsdWVbXCJDQVBUSU9OX1NUWUxFX0RFRkFVTFRcIl0gPSAwXSA9IFwiQ0FQVElPTl9TVFlMRV9ERUZBVUxUXCI7XG4gICAgVHZJbmZvTWVudVZhbHVlW1R2SW5mb01lbnVWYWx1ZVtcIkNBUFRJT05fU1RZTEVfQk9MRFwiXSA9IDFdID0gXCJDQVBUSU9OX1NUWUxFX0JPTERcIjtcbiAgICBUdkluZm9NZW51VmFsdWVbVHZJbmZvTWVudVZhbHVlW1wiQ0FQVElPTl9TVFlMRV9JVEFMSUNcIl0gPSAyXSA9IFwiQ0FQVElPTl9TVFlMRV9JVEFMSUNcIjtcbn0pKFR2SW5mb01lbnVWYWx1ZSA9IGV4cG9ydHMuVHZJbmZvTWVudVZhbHVlIHx8IChleHBvcnRzLlR2SW5mb01lbnVWYWx1ZSA9IHt9KSk7XG52YXIgVHZJbmZvS2V5O1xuKGZ1bmN0aW9uIChUdkluZm9LZXkpIHtcbiAgICBUdkluZm9LZXlbVHZJbmZvS2V5W1wiVFZfVklFV0VSX0JHX0VYRUNVVEFCTEVcIl0gPSAwXSA9IFwiVFZfVklFV0VSX0JHX0VYRUNVVEFCTEVcIjtcbn0pKFR2SW5mb0tleSA9IGV4cG9ydHMuVHZJbmZvS2V5IHx8IChleHBvcnRzLlR2SW5mb0tleSA9IHt9KSk7XG52YXIgVHZJbmZvVmFsdWU7XG4oZnVuY3Rpb24gKFR2SW5mb1ZhbHVlKSB7XG4gICAgVHZJbmZvVmFsdWVbVHZJbmZvVmFsdWVbXCJUVl9WSUVXRVJfQkdfTk9UX0VYRUNVVEFCTEVcIl0gPSAwXSA9IFwiVFZfVklFV0VSX0JHX05PVF9FWEVDVVRBQkxFXCI7XG4gICAgVHZJbmZvVmFsdWVbVHZJbmZvVmFsdWVbXCJUVl9WSUVXRVJfQkdfRVhFQ1VUQUJMRVwiXSA9IDFdID0gXCJUVl9WSUVXRVJfQkdfRVhFQ1VUQUJMRVwiO1xufSkoVHZJbmZvVmFsdWUgPSBleHBvcnRzLlR2SW5mb1ZhbHVlIHx8IChleHBvcnRzLlR2SW5mb1ZhbHVlID0ge30pKTtcbnZhciBTc29Mb2dpblN0YXRlO1xuKGZ1bmN0aW9uIChTc29Mb2dpblN0YXRlKSB7XG4gICAgU3NvTG9naW5TdGF0ZVtTc29Mb2dpblN0YXRlW1wiU1NPX05PVF9MT0dJTlwiXSA9IDBdID0gXCJTU09fTk9UX0xPR0lOXCI7XG4gICAgU3NvTG9naW5TdGF0ZVtTc29Mb2dpblN0YXRlW1wiU1NPX0xPR0lOXCJdID0gMV0gPSBcIlNTT19MT0dJTlwiO1xufSkoU3NvTG9naW5TdGF0ZSA9IGV4cG9ydHMuU3NvTG9naW5TdGF0ZSB8fCAoZXhwb3J0cy5Tc29Mb2dpblN0YXRlID0ge30pKTtcbl9hID0gd2luZG93LndlYmFwaXMsIGV4cG9ydHMud2ViYXBpcyA9IF9hLndlYmFwaXMsIGV4cG9ydHMuYWRpbmZvID0gX2EuYWRpbmZvLCBleHBvcnRzLmFwcGNvbW1vbiA9IF9hLmFwcGNvbW1vbiwgZXhwb3J0cy5hdmluZm8gPSBfYS5hdmluZm8sIGV4cG9ydHMuYXZwbGF5ID0gX2EuYXZwbGF5LCBleHBvcnRzLmF2cGxheXN0b3JlID0gX2EuYXZwbGF5c3RvcmUsIGV4cG9ydHMuYmlsbGluZyA9IF9hLmJpbGxpbmcsIGV4cG9ydHMubmV0d29yayA9IF9hLm5ldHdvcmssIGV4cG9ydHMucHJvZHVjdGluZm8gPSBfYS5wcm9kdWN0aW5mbywgZXhwb3J0cy5zc28gPSBfYS5zc28sIGV4cG9ydHMudHZpbmZvID0gX2EudHZpbmZvLCBleHBvcnRzLndpZGdldGRhdGEgPSBfYS53aWRnZXRkYXRhLCBleHBvcnRzLnN5c3RlbWluZm8gPSBfYS5zeXN0ZW1pbmZvLCBleHBvcnRzLldlYkFQSUV4Y2VwdGlvbiA9IF9hLldlYkFQSUV4Y2VwdGlvbjtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gMDpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogbXVsdGkgLi9zcmMvaW5kZXgudHMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxubW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL3NyYy9pbmRleC50cyAqL1wiLi9zcmMvaW5kZXgudHNcIik7XG5cblxuLyoqKi8gfSlcblxuLyoqKioqKi8gfSkpKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIi8vIEltcG9ydGluZyBkZXBlbmRlbmNpZXNcbmltcG9ydCB7IGFwcGNvbW1vbiB9IGZyb20gXCJ0aXplbi10di13ZWJhcGlzXCI7XG4vLyBpbXBvcnQgeyBhcHBsaWNhdGlvbiB9IGZyb20gXCJ0aXplbi1jb21tb24td2ViXCI7XG5cbmltcG9ydCB7IHByb2R1Y3RpbmZvIH0gZnJvbSBcInRpemVuLXR2LXdlYmFwaXNcIjtcbmltcG9ydCB7IHN5c3RlbWluZm8gfSBmcm9tIFwidGl6ZW4tY29tbW9uLXdlYlwiO1xuXG5jb25zdCB7IGdldEZpcm13YXJlLCBnZXREdWlkLCBnZXRNb2RlbENvZGUgfSA9IHByb2R1Y3RpbmZvO1xuY29uc3QgeyBnZXRDYXBhYmlsaXR5IH0gPSBzeXN0ZW1pbmZvO1xuXG5cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJ0aXplbmh3a2V5XCIsIGtleWRvd25IYW5kbGVyKTtcblxud2luZG93Lm9ubG9hZCA9IGFzeW5jICgpID0+IHtcblx0bGV0IGFydGljbGVzID0gYXdhaXQgbG9hZEFydGljbGVzKCk7XG5cdGxvYWRQYWdlcyhhcnRpY2xlcyk7XG5cblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyb3RhcnlkZXRlbnRcIiwgZnVuY3Rpb24gKGV2KSB7XG5cdFx0bGV0IGRpcmVjdGlvbiA9IGV2LmRldGFpbC5kaXJlY3Rpb247XG5cdFx0cGFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ1aS1wYWdlLWFjdGl2ZVwiKVswXTtcblx0XHRudW1iID0gcGFnZS5pZC5yZXBsYWNlKC9bXjAtOV0vZywgXCJcIik7XG5cblx0XHRpZiAoZGlyZWN0aW9uID09IFwiQ1dcIikge1xuXHRcdFx0aWYgKHBhZ2UuaWQgIT0gXCJwYWdlMjBcIikge1xuXHRcdFx0XHR3aW5kb3cubG9jYXRpb24uaGFzaCA9IFwicGFnZVwiICsgU3RyaW5nKE51bWJlcihudW1iKSArIDEpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAoZGlyZWN0aW9uID09IFwiQ0NXXCIpIHtcblx0XHRcdGlmIChwYWdlLmlkICE9IFwicGFnZTFcIikge1xuXHRcdFx0XHR3aW5kb3cubG9jYXRpb24uaGFzaCA9IFwicGFnZVwiICsgU3RyaW5nKE51bWJlcihudW1iKSAtIDEpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG59O1xuXG5mdW5jdGlvbiBrZXlkb3duSGFuZGxlcihldikge1xuXHRjb25zb2xlLmxvZyhldi5rZXlOYW1lKTtcblx0c3dpdGNoIChldi5rZXlOYW1lKSB7XG5cdFx0Y2FzZSBcImJhY2tcIjpcblx0XHRcdGFwcGxpY2F0aW9uLmdldEN1cnJlbnRBcHBsaWNhdGlvbigpLmV4aXQoKTtcblx0XHRcdGJyZWFrO1xuXHR9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGxvYWRBcnRpY2xlcygpIHtcblx0bGV0IGFydGljbGVzID0gW107XG5cblx0YXdhaXQgZmV0Y2goYGh0dHBzOi8vbm9zLWFwcC52ZXJjZWwuYXBwL2FwaS9yc3NgKVxuXHRcdC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UudGV4dCgpKVxuXHRcdC50aGVuKChzdHIpID0+IG5ldyB3aW5kb3cuRE9NUGFyc2VyKCkucGFyc2VGcm9tU3RyaW5nKHN0ciwgXCJ0ZXh0L3htbFwiKSlcblx0XHQudGhlbigoZG9jKSA9PiB7XG5cdFx0XHRsZXQgaXRlbXMgPSBkb2MucXVlcnlTZWxlY3RvckFsbChcIml0ZW1cIik7XG5cdFx0XHRpdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG5cdFx0XHRcdGFydGljbGVzLnB1c2goe1xuXHRcdFx0XHRcdHRpdGxlOiBpdGVtLnF1ZXJ5U2VsZWN0b3IoXCJ0aXRsZVwiKS50ZXh0Q29udGVudCxcblx0XHRcdFx0XHRpbWc6IGl0ZW0ucXVlcnlTZWxlY3RvcihcImVuY2xvc3VyZVwiKS5nZXRBdHRyaWJ1dGUoXCJ1cmxcIiksXG5cdFx0XHRcdFx0dGV4dDogaXRlbS5xdWVyeVNlbGVjdG9yKFwiZGVzY3JpcHRpb25cIikudGV4dENvbnRlbnQsXG5cdFx0XHRcdFx0bGluazogaXRlbS5xdWVyeVNlbGVjdG9yKFwibGlua1wiKS50ZXh0Q29udGVudCwgLy8gKGNsaWNrIHRvIG9wZW4gb24gcGhvbmU/KVxuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXG5cdGNvbnNvbGUubG9nKGFydGljbGVzKTtcblx0cmV0dXJuIGFydGljbGVzO1xufVxuXG5mdW5jdGlvbiBsb2FkUGFnZXMoYXJ0aWNsZXMpIHtcblx0bGV0IHBhZ2VzRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYWdlc1wiKTtcblxuXHRhcnRpY2xlcy5mb3JFYWNoKChpdGVtLCBpZHgpID0+IHtcblx0XHRsZXQgcGFnZTtcblx0XHRpZiAoaWR4ICE9IDApIHtcblx0XHRcdHBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdFx0cGFnZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInBhZ2VcIiArIFN0cmluZyhpZHggKyAxKSk7XG5cdFx0XHRwYWdlLmNsYXNzTmFtZSA9IFwidWktcGFnZVwiO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRwYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYWdlMVwiKTtcblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9hZGluZy1pY29uXCIpLnJlbW92ZSgpO1xuXHRcdH1cblxuXHRcdGxldCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRjb250ZW50LmNsYXNzTmFtZSA9IFwidWktY29udGVudFwiO1xuXHRcdGNvbnRlbnQuaW5uZXJIVE1MID0gaXRlbS50aXRsZTtcblx0XHRwYWdlLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuXG5cdFx0aWYgKGlkeCAhPSAwKSB7XG5cdFx0XHRwYWdlc0Rpdi5hcHBlbmRDaGlsZChwYWdlKTtcblx0XHR9XG5cdH0pO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImluZGV4Lmh0bWxcIjsiXSwibmFtZXMiOlsiYXBwY29tbW9uIiwicHJvZHVjdGluZm8iLCJzeXN0ZW1pbmZvIiwiZ2V0RmlybXdhcmUiLCJnZXREdWlkIiwiZ2V0TW9kZWxDb2RlIiwiZ2V0Q2FwYWJpbGl0eSIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJrZXlkb3duSGFuZGxlciIsIm9ubG9hZCIsImxvYWRBcnRpY2xlcyIsImFydGljbGVzIiwibG9hZFBhZ2VzIiwiZXYiLCJkaXJlY3Rpb24iLCJkZXRhaWwiLCJwYWdlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwibnVtYiIsImlkIiwicmVwbGFjZSIsImxvY2F0aW9uIiwiaGFzaCIsIlN0cmluZyIsIk51bWJlciIsImNvbnNvbGUiLCJsb2ciLCJrZXlOYW1lIiwiYXBwbGljYXRpb24iLCJnZXRDdXJyZW50QXBwbGljYXRpb24iLCJleGl0IiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJ0ZXh0Iiwic3RyIiwiRE9NUGFyc2VyIiwicGFyc2VGcm9tU3RyaW5nIiwiZG9jIiwiaXRlbXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsIml0ZW0iLCJwdXNoIiwidGl0bGUiLCJxdWVyeVNlbGVjdG9yIiwidGV4dENvbnRlbnQiLCJpbWciLCJnZXRBdHRyaWJ1dGUiLCJsaW5rIiwicGFnZXNEaXYiLCJnZXRFbGVtZW50QnlJZCIsImlkeCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJjbGFzc05hbWUiLCJyZW1vdmUiLCJjb250ZW50IiwiaW5uZXJIVE1MIiwiYXBwZW5kQ2hpbGQiXSwic291cmNlUm9vdCI6IiJ9