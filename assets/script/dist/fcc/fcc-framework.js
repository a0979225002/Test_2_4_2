(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var fcc;
(function (fcc) {
    var type;
    (function (type) {
        /**
         * @Author XIAO-LI-PIN
         * @Description 各種錯誤類型
         * @Date 2021-04-14 下午 20:24
         * @Version 1.1
         */
        var ErrorType;
        (function (ErrorType) {
            /**
             * 參數錯誤
             * @type {ErrorType.TYPE_FW}
             */
            ErrorType["TYPE_FW"] = "\u50B3\u5165\u7684Type \u932F\u8AA4 ,\u8ACB\u6AA2\u5BDF\u8A72Type\u662F\u5426\u975EFarmWork\u5167\u7684Type";
            /**
             * 執行流程錯誤
             * @type {ErrorType.IS_RUNNING_FW}
             */
            ErrorType["IS_RUNNING_FW"] = "\u904A\u6232\u6B63\u5728\u57F7\u884C\u4E2D,\u8ACB\u52FF\u91CD\u8907\u547C\u53EB";
            /**
             * 空變數錯誤
             * @type {ErrorType.UNDEFINED_FW}
             */
            ErrorType["UNDEFINED_FW"] = "\u8B8A\u6578\u70BAundefined,\u6D41\u7A0B\u7121\u6CD5\u7E7C\u7E8C";
            /**
             * 加載資源類有錯誤
             * @type {ErrorType.LOAD_FW}
             */
            ErrorType["LOAD_FW"] = "\u52A0\u8F09\u7684\u8CC7\u6E90\u6709\u554F\u984C";
            /**
             * 動畫類有錯誤
             * @type {ErrorType.ANIMATION_FW}
             */
            ErrorType["ANIMATION_FW"] = "Animation \u985E\u4E2D\u65B9\u6CD5\u6709\u932F\u8AA4 : ";
            /**
             * server 請求錯誤
             * @type {ErrorType.WEB_REQUEST_FW}
             */
            ErrorType["WEB_REQUEST_FW"] = "WebRequest \u985E\u6709\u932F\u8AA4 : ";
            /**
             * server 響應錯誤
             * @type {ErrorType.WEB_RESPONSE_FW}
             */
            ErrorType["WEB_RESPONSE_FW"] = "WebResponse \u985E\u6709\u932F\u8AA4 : ";
            /**
             * 音樂類錯誤
             * @type {ErrorType.AUDIO_FW}
             */
            ErrorType["AUDIO_FW"] = "AUDIO \u985E\u6709\u932F\u8AA4 :";
            /**
             * 場景類錯誤
             * @type {ErrorType.SCENE_FW}
             */
            ErrorType["SCENE_FW"] = "Scene \u985E\u6709\u932F\u8AA4 :";
            /**
             * 流程類錯誤
             * @type {ErrorType.PROCESS_FW}
             */
            ErrorType["PROCESS_FW"] = "process \u985E\u6709\u932F\u8AA4 :";
            /**
             * 監聽事件類有錯誤
             * @type {ErrorType.LISTENER_FW}
             */
            ErrorType["LISTENER_FW"] = "Event \u985E\u6709\u932F\u8AA4 :";
            /**
             * 老虎機樣式類有錯誤
             * @type {ErrorType.SLOT_STYLE_FW}
             */
            ErrorType["SLOT_STYLE_FW"] = "SlotStyleFW\u985E\u6709\u932F\u8AA4 :";
            /**
             * 模板類有錯誤
             */
            ErrorType["TEMPLATE_FW"] = "\u6A21\u677F\u985E\u6709\u932F\u8AA4 :";
        })(ErrorType = type.ErrorType || (type.ErrorType = {}));
    })(type = fcc.type || (fcc.type = {}));
})(fcc || (fcc = {}));
/// <reference path="../Enum/ErrorType.ts" />
var fcc;
/// <reference path="../Enum/ErrorType.ts" />
(function (fcc) {
    /**
     * @Author XIAO-LI-PIN
     * @Description 無從判斷該錯誤類型
     * @Date 2021-04-14 下午 20:24
     * @Version 1.1
     */
    var UnknownError = /** @class */ (function () {
        function UnknownError(configManager) {
            this.configManager = configManager;
        }
        UnknownError.prototype.checkErrorType = function (message, obj) {
            throw new Error("\u4F8B\u5916\u932F\u8AA4 : " + message);
        };
        return UnknownError;
    }());
    fcc.UnknownError = UnknownError;
})(fcc || (fcc = {}));
/// <reference path="../Enum/ErrorType.ts" />
/// <reference path="./UnknownError.ts" />
var fcc;
/// <reference path="../Enum/ErrorType.ts" />
/// <reference path="./UnknownError.ts" />
(function (fcc) {
    /**
     * @Author XIAO-LI-PIN
     * @Description 檢測該錯誤是否為框架錯誤
     * @Date 2021-04-14 下午 20:24
     * @Version 1.1
     */
    var FrameWorkError = /** @class */ (function () {
        function FrameWorkError(configManager) {
            this.unknownError = new fcc.UnknownError(configManager);
            this.configManager = configManager;
        }
        FrameWorkError.prototype.checkErrorType = function (message, obj) {
            if (this.configManager.isFrameworkDebug) {
                switch (message) {
                    case fcc.type.ErrorType.IS_RUNNING_FW:
                        throw new Error(fcc.type.ErrorType.IS_RUNNING_FW + " " + obj);
                    case fcc.type.ErrorType.UNDEFINED_FW:
                        throw new Error(fcc.type.ErrorType.UNDEFINED_FW + " " + obj);
                    case fcc.type.ErrorType.TYPE_FW:
                        throw new Error(fcc.type.ErrorType.TYPE_FW + " " + obj);
                    case fcc.type.ErrorType.ANIMATION_FW:
                        throw new Error(fcc.type.ErrorType.ANIMATION_FW + " " + obj);
                    case fcc.type.ErrorType.LOAD_FW:
                        throw new Error(fcc.type.ErrorType.LOAD_FW + " " + obj);
                    case fcc.type.ErrorType.WEB_REQUEST_FW:
                        throw new Error(fcc.type.ErrorType.WEB_REQUEST_FW + " " + obj);
                    case fcc.type.ErrorType.AUDIO_FW:
                        throw new Error(fcc.type.ErrorType.AUDIO_FW + " " + obj);
                    case fcc.type.ErrorType.WEB_RESPONSE_FW:
                        throw new Error(fcc.type.ErrorType.WEB_RESPONSE_FW + " " + obj);
                    case fcc.type.ErrorType.SCENE_FW:
                        throw new Error(fcc.type.ErrorType.SCENE_FW + " " + obj);
                    case fcc.type.ErrorType.PROCESS_FW:
                        throw new Error(fcc.type.ErrorType.PROCESS_FW + " " + obj);
                    case fcc.type.ErrorType.LISTENER_FW:
                        throw new Error(fcc.type.ErrorType.LISTENER_FW + " " + obj);
                    case fcc.type.ErrorType.SLOT_STYLE_FW:
                        throw new Error(fcc.type.ErrorType.SLOT_STYLE_FW + " " + obj);
                    case fcc.type.ErrorType.TEMPLATE_FW:
                        throw new Error(fcc.type.ErrorType.TEMPLATE_FW + " " + obj);
                    default:
                        this.unknownError.checkErrorType(message);
                }
            }
            else {
                console.log("有例外錯誤,但你未開啟框架Debug,無法查看");
            }
        };
        return FrameWorkError;
    }());
    fcc.FrameWorkError = FrameWorkError;
})(fcc || (fcc = {}));
/// <reference path="../Enum/ErrorType.ts" />
/// <reference path="./FrameWorkError.ts" />
var fcc;
/// <reference path="../Enum/ErrorType.ts" />
/// <reference path="./FrameWorkError.ts" />
(function (fcc) {
    /**
     * @Author XIAO-LI-PIN
     * @Description 檢測該錯誤是否為物件錯誤
     * @Date 2021-04-14 下午 20:24
     * @Version 1.1
     */
    var ObjectError = /** @class */ (function () {
        function ObjectError(configManager) {
            this.frameWorkError = new fcc.FrameWorkError(configManager);
        }
        ObjectError.prototype.checkErrorType = function (message, obj) {
            if (typeof message === "string") {
                this.frameWorkError.checkErrorType(message, obj);
            }
            else if (message === null) {
                return this.checkObjectType(obj);
            }
        };
        ObjectError.prototype.checkObjectType = function (obj) {
            if (obj && obj != 0) {
                return typeof obj;
            }
            else {
                throw new Error("\u8A72\u7269\u4EF6\u70BAnull");
            }
        };
        return ObjectError;
    }());
    fcc.ObjectError = ObjectError;
})(fcc || (fcc = {}));
/// <reference path="../Enum/ErrorType.ts" />
/// <reference path="../ErrorManager.ts" />
var fcc;
/// <reference path="../Enum/ErrorType.ts" />
/// <reference path="../ErrorManager.ts" />
(function (fcc) {
    /**
     * @Author XIAO-LI-PIN
     * @Description 顯示server回傳的錯誤
     * @Date 2021-04-14 下午 20:24
     * @Version 1.1
     */
    var ServerError = /** @class */ (function () {
        function ServerError(errorManager) {
            this.timeOut = null;
            this.errorManager = errorManager;
        }
        /**
         *  顯示server回傳的錯誤事件
         * @param {boolean} permanentState - 是否持續顯示
         * @param {string} message - 顯示錯誤訊息文字
         * @param {string} buttonText - 按鈕文字
         */
        ServerError.prototype.showError = function (permanentState, message, buttonText) {
            var _this = this;
            if (this.timeOut != null)
                clearTimeout(this.timeOut);
            //確認當前有無該物件,如無該物件,將會throw中斷
            if (!this.errorManager.errorNode)
                this.errorManager.executeError(fcc.type.ErrorType.UNDEFINED_FW, "ErrorManager errorNode為空");
            if (!this.errorManager.errorLabel)
                this.errorManager.executeError(fcc.type.ErrorType.UNDEFINED_FW, "ErrorManager errorLabel為空");
            if (!this.errorManager.errorButton)
                this.errorManager.executeError(fcc.type.ErrorType.UNDEFINED_FW, "ErrorManager errorButton為空");
            fcc.ErrorManager.errorState = true;
            this.errorManager.errorNode.active = true;
            this.errorManager.errorLabel.string = message;
            this.errorManager.errorButton.active = this.errorManager.isShowBackHomeButton;
            if (this.errorManager.errorButton.active) {
                this.errorManager.errorButtonLabel.string = buttonText;
            }
            if (!permanentState) {
                this.timeOut = window.setTimeout(function () {
                    fcc.ErrorManager.errorState = false;
                    _this.errorManager.errorNode.active = false;
                    _this.errorManager.errorButton.active = false;
                    _this.timeOut = null;
                }, this.errorManager.errorDelayTime);
            }
        };
        return ServerError;
    }());
    fcc.ServerError = ServerError;
})(fcc || (fcc = {}));
/// <reference path="../Enum/ErrorType.ts" />
/// <reference path="../ErrorManager.ts" />
var fcc;
/// <reference path="../Enum/ErrorType.ts" />
/// <reference path="../ErrorManager.ts" />
(function (fcc) {
    /**
     * @Author XIAO-LI-PIN
     * @Description 顯示警告錯誤
     * @Date 2021-04-14 下午 20:24
     * @Version 1.1
     */
    var WarningError = /** @class */ (function () {
        function WarningError(errorManager) {
            this.timeout = null;
            this.errorManager = errorManager;
        }
        /**
         * 顯示警告 Dialog
         * @param {boolean} permanentState - 是否持續顯示
         * @param {string} message - 顯示錯誤訊息文字
         * @param {string} buttonText - 按鈕文字
         */
        WarningError.prototype.showError = function (permanentState, message, buttonText) {
            var _this = this;
            if (this.timeout != null)
                clearTimeout(this.timeout);
            //確認當前有無該物件,如無該物件,將會throw中斷
            if (!this.errorManager.warningNode)
                this.errorManager.executeError(fcc.type.ErrorType.UNDEFINED_FW, "ErrorManager warningNode為空");
            if (!this.errorManager.warningLabel)
                this.errorManager.executeError(fcc.type.ErrorType.UNDEFINED_FW, "ErrorManager warningLabel為空");
            if (this.errorManager.warningDelayTime == 0) {
                this.errorManager.executeError("\u7576\u524DDelayTime = 0 : \u8ACB\u7D66\u4E88\u503C");
            }
            fcc.ErrorManager.warningState = true;
            this.errorManager.warningNode.active = true;
            this.errorManager.warningLabel.string = message;
            if (permanentState)
                return;
            this.timeout = window.setTimeout(function () {
                fcc.ErrorManager.warningState = false;
                _this.errorManager.warningNode.active = false;
            }, this.errorManager.warningDelayTime);
        };
        /**
         * XXX :
         * 當前暫時無使用,一樣保留
         * 顯示金額不足無法下注
         * @param obj 顯示在label的文字
         */
        WarningError.prototype.showErrorBet = function (obj) {
            var _this = this;
            //確認當前有無該物件,如無該物件,將會throw中斷
            if (!this.errorManager.errorNode)
                this.errorManager.executeError(fcc.type.ErrorType.UNDEFINED_FW, "ErrorManager errorNode為空");
            if (!this.errorManager.errorLabel)
                this.errorManager.executeError(fcc.type.ErrorType.UNDEFINED_FW, "ErrorManager errorLabel為空");
            if (!this.errorManager.errorButton)
                this.errorManager.executeError(fcc.type.ErrorType.UNDEFINED_FW, "ErrorManager errorButton為空");
            if (this.errorManager.errorDelayTime == 0) {
                this.errorManager.executeError(fcc.type.ErrorType.UNDEFINED_FW, "ErrorManager errorDelayTime為空 無法顯示");
            }
            if (fcc.ErrorManager.errorState)
                return;
            fcc.ErrorManager.errorState = true;
            this.errorManager.errorNode.active = true;
            this.errorManager.errorLabel.string = obj;
            window.setTimeout(function () {
                fcc.ErrorManager.errorState = false;
                _this.errorManager.errorNode.active = false;
            }, this.errorManager.errorDelayTime);
        };
        return WarningError;
    }());
    fcc.WarningError = WarningError;
})(fcc || (fcc = {}));
/// <reference path="./Enum/ErrorType.ts" />
/// <reference path="./Enum/ErrorType.ts" />
/// <reference path="./ErrorType/ObjectError.ts" />
/// <reference path="./ErrorType/ServerError.ts" />
/// <reference path="./ErrorType/WarningError.ts" />
/// <reference path="./IErrorHandler.ts" />
var fcc;
/// <reference path="./Enum/ErrorType.ts" />
/// <reference path="./ErrorType/ObjectError.ts" />
/// <reference path="./ErrorType/ServerError.ts" />
/// <reference path="./ErrorType/WarningError.ts" />
/// <reference path="./IErrorHandler.ts" />
(function (fcc) {
    /**
     * @Author XIAO-LI-PIN
     * @Description Error管理器 錯誤事件中介者
     * @Date 2021-04-14 下午 20:24
     * @Version 1.1
     */
    var ErrorHandler = /** @class */ (function () {
        function ErrorHandler(configManager, errorManager) {
            this.objectError = new fcc.ObjectError(configManager);
            this.serverError = new fcc.ServerError(errorManager);
            this.warningError = new fcc.WarningError(errorManager);
        }
        /**
         * 確認錯誤類型
         * @summary - 責任鏈模式 : Overload
         * @throws (null,any) - return 該物件 or throw ("該物件為null")
         * @throws (fcc.type.ErrorType,string) - throw (`ErrorType + ${string}`)
         * @throws (string,any) - throw (`${string}`)
         * @param {string | fcc.type.ErrorType} message
         * @param obj
         */
        ErrorHandler.prototype.checkErrorType = function (message, obj) {
            return this.objectError.checkErrorType(message, obj);
        };
        /**
         * 確認server回傳錯誤類型
         * @param {boolean} permanentState - 是否持續顯示
         * @param {string} message - 顯示錯誤訊息文字
         * @param {string} buttonText - 按鈕文字
         */
        ErrorHandler.prototype.checkServerError = function (permanentState, message, buttonText) {
            this.serverError.showError(permanentState, message, buttonText);
        };
        /**
         * 確認警告類型
         * @param {boolean} permanentState - 是否持續顯示
         * @param {string} message - 顯示錯誤訊息文字
         * @param {string} buttonText - 按鈕文字
         */
        ErrorHandler.prototype.checkWarning = function (permanentState, message, buttonText) {
            this.warningError.showError(permanentState, message, buttonText);
        };
        return ErrorHandler;
    }());
    fcc.ErrorHandler = ErrorHandler;
})(fcc || (fcc = {}));
/// <reference path="./Enum/ErrorType.ts" />
/// <reference path="./Enum/ErrorType.ts" />
/// <reference path="./ErrorHandler.ts" />
/// <reference path="./IErrorHandler.ts" />
/// <reference path="./IErrorManager.ts" />
var fcc;
/// <reference path="./Enum/ErrorType.ts" />
/// <reference path="./ErrorHandler.ts" />
/// <reference path="./IErrorHandler.ts" />
/// <reference path="./IErrorManager.ts" />
(function (fcc) {
    /**
     * @Author XIAO-LI-PIN
     * @Description 錯誤管理器 : 框架錯誤管理
     * @Date 2021-04-14 下午 20:24
     * @Version 1.1
     */
    var ErrorManager = /** @class */ (function () {
        function ErrorManager(configManager) {
            this.handler = new fcc.ErrorHandler(configManager, this);
            this.configManager = configManager;
            this._errorNode = null;
            this._errorLabel = null;
            this._errorDelayTime = 2000; //錯誤訊息顯示時間 : 2秒
            this._warningDelayTime = 1000; //警告訊息顯示時間 : 1秒
            ErrorManager._errorState = false; //當前是否正在顯示 Error
            ErrorManager._warningState = false; //當前是否正在顯示警告
            this._isShowBackHomeButton = !!this.configManager.backHomeURL; //檢查當前是否回首頁URL,將之賦予true:false
        }
        /**
         *  懶漢加載
         *  初始化,只讓一個專案產生一次該class
         */
        ErrorManager.setInstance = function (configManager) {
            if (!this._instance) {
                this._instance = new ErrorManager(configManager);
                fcc.errorMgr = this._instance;
            }
        };
        Object.defineProperty(ErrorManager, "instance", {
            /**
             *  獲取已經初始化的靜態實例class
             */
            get: function () {
                if (!this._instance) {
                    throw new Error("ErrorManager\u985E\u932F\u8AA4 :  \u8A72\u985E\u5C1A\u672A\u5BE6\u4F8B\u5316");
                }
                return this._instance;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * 責任鏈模式
         * 顯示錯誤訊息,能做多個物件檢測
         * @param{string | ErrorType }message
         * @param obj
         */
        ErrorManager.prototype.executeError = function (message, obj) {
            return this.handler.checkErrorType(message, obj);
        };
        /**
         * 顯示錯誤視窗
         * @param {boolean} permanentState - 是否常駐
         * @param {string} message  - 錯誤訊息
         * @param {string} buttonText - button文字
         */
        ErrorManager.prototype.serverError = function (permanentState, message, buttonText) {
            this.handler.checkServerError(permanentState, message, buttonText);
        };
        /**
         * 顯示警告,將會調用已保存的警告Node
         * @param {boolean} permanentState - 是否常駐
         * @param {string} message  - 錯誤訊息
         * @param {string} buttonText - button文字
         */
        ErrorManager.prototype.warning = function (permanentState, message, buttonText) {
            this.handler.checkWarning(permanentState, message, buttonText);
        };
        /**
         * 添加要綁定的Error組件
         * @param node
         */
        ErrorManager.prototype.setErrorNode = function (node) {
            this._errorNode = node;
            return this;
        };
        /**
         * 添加要顯示Error訊息的Label
         * @param label
         */
        ErrorManager.prototype.setErrorLabel = function (label) {
            this._errorLabel = label;
            return this;
        };
        /**
         * 添加errorButton綁定
         * @param node
         */
        ErrorManager.prototype.setErrorButton = function (node) {
            this._errorButton = node;
            return this;
        };
        /**
         * 添加要顯示的時間,目前只對(ErrorType.bet)生效
         * @param time
         */
        ErrorManager.prototype.setErrorDelayTime = function (time) {
            this._errorDelayTime = time;
            return this;
        };
        /**
         * 添加警告要顯示的時間
         */
        ErrorManager.prototype.setWarningDelayTime = function (time) {
            this._warningDelayTime = time;
            return this;
        };
        /**
         * 添加要顯示警告的Node
         * @param node
         */
        ErrorManager.prototype.setWarningNode = function (node) {
            this._warningNode = node;
            return this;
        };
        /**
         * 添加要顯示警告的Node
         * @param label
         */
        ErrorManager.prototype.setWarningLabel = function (label) {
            this._warningLabel = label;
            return this;
        };
        /**
         * 添加要顯示錯誤視窗中按鈕的label
         * @param {cc.Label} label
         * @return {this}
         */
        ErrorManager.prototype.setErrorButtonLabel = function (label) {
            this._errorButtonLabel = label;
            return this;
        };
        Object.defineProperty(ErrorManager, "errorState", {
            get: function () {
                return this._errorState;
            },
            /**
             * 當前 error dialog 狀態
             * @param {boolean} value
             */
            set: function (value) {
                this._errorState = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ErrorManager, "warningState", {
            get: function () {
                return this._warningState;
            },
            /**
             * 當前 warning dialog 狀態
             * @param {boolean} value
             */
            set: function (value) {
                this._warningState = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ErrorManager.prototype, "errorNode", {
            get: function () {
                return this._errorNode;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ErrorManager.prototype, "warningNode", {
            get: function () {
                return this._warningNode;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ErrorManager.prototype, "errorButton", {
            get: function () {
                return this._errorButton;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ErrorManager.prototype, "warningLabel", {
            get: function () {
                return this._warningLabel;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ErrorManager.prototype, "errorLabel", {
            get: function () {
                return this._errorLabel;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ErrorManager.prototype, "errorDelayTime", {
            get: function () {
                return this._errorDelayTime;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ErrorManager.prototype, "warningDelayTime", {
            get: function () {
                return this._warningDelayTime;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ErrorManager.prototype, "isShowBackHomeButton", {
            get: function () {
                return this._isShowBackHomeButton;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ErrorManager.prototype, "errorButtonLabel", {
            get: function () {
                return this._errorButtonLabel;
            },
            enumerable: false,
            configurable: true
        });
        return ErrorManager;
    }());
    fcc.ErrorManager = ErrorManager;
})(fcc || (fcc = {}));
var fcc;
(function (fcc) {
    /**
     * @Author XIAO-LI-PIN
     * @Description 動畫處理,處理後的動畫回傳給予manager保存
     * @Date 2021-04-14 下午 20:24
     * @Version 1.1
     */
    var AnimationHandler = /** @class */ (function () {
        function AnimationHandler(animationManager) {
            this.animationManager = animationManager;
        }
        /**
         * 更新動畫管理器內的spineName數據
         * @param resName
         * @param keyName
         * @param spineName
         */
        AnimationHandler.prototype.updateSpineAnimationName = function (resName, keyName, spineName) {
            var spineMap = new Map();
            spineMap.set(keyName, spineName);
            this.animationManager.spineName.set(resName, spineMap);
        };
        return AnimationHandler;
    }());
    fcc.AnimationHandler = AnimationHandler;
})(fcc || (fcc = {}));
/// <reference path="../Error/ErrorManager.ts" />
/// <reference path="../Error/Enum/ErrorType.ts" />
/// <reference path="./AnimationHandler.ts" />
var fcc;
/// <reference path="../Error/ErrorManager.ts" />
/// <reference path="../Error/Enum/ErrorType.ts" />
/// <reference path="./AnimationHandler.ts" />
(function (fcc) {
    /**
     * @Author XIAO-LI-PIN
     * @Description TODO : 動畫管理器
     * @Date 2021-04-14 下午 20:24
     * @Version 1.1
     */
    var AnimationManager = /** @class */ (function () {
        function AnimationManager(configManager) {
            this.configManager = configManager;
            this._spineName = new Map();
            this._handler = new fcc.AnimationHandler(this);
        }
        /**
         *  懶漢加載
         *  初始化,只讓一個專案只有一次產生此class
         */
        AnimationManager.setInstance = function (configManager) {
            if (!this._instance) {
                this._instance = new AnimationManager(configManager);
                fcc.animationMgr = this._instance;
            }
        };
        Object.defineProperty(AnimationManager, "instance", {
            /**
             *  獲取已經初始化的靜態實例class
             */
            get: function () {
                if (!this._instance) {
                    fcc.ErrorManager.instance.executeError(fcc.type.ErrorType.AUDIO_FW, "該類尚未實例化");
                    return;
                }
                return this._instance;
            },
            enumerable: false,
            configurable: true
        });
        AnimationManager.prototype.getSpineName = function (resName, key) {
            if (this._spineName.has(resName)) {
                fcc.ErrorManager.instance.executeError(fcc.type.ErrorType.ANIMATION_FW, "resources 資源名錯誤");
            }
            else if (this._spineName.get(resName).has("" + key)) {
                fcc.ErrorManager.instance.executeError(fcc.type.ErrorType.ANIMATION_FW, "尚未獲取資源,請查看 AnimationManager.instance.spineName");
            }
            return this.spineName.get(resName).get("" + key);
        };
        Object.defineProperty(AnimationManager.prototype, "spineName", {
            get: function () {
                return this._spineName;
            },
            set: function (value) {
                this._spineName = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AnimationManager.prototype, "handler", {
            get: function () {
                return this._handler;
            },
            enumerable: false,
            configurable: true
        });
        return AnimationManager;
    }());
    fcc.AnimationManager = AnimationManager;
})(fcc || (fcc = {}));
var fcc;
(function (fcc) {
    var type;
    (function (type) {
        /**
         * @Author XIAO-LI-PIN
         * @Description 音樂撥放疊加時,各種狀態設定
         * @Date 2021-05-13 上午 10:24
         * @Version 1.0
         */
        var AudioStateType;
        (function (AudioStateType) {
            /**
             *檢測到該音樂正在撥放時,清除正在撥放的音樂,後重新播放該音樂
             * @type {AudioStateType.CLEAR_TO_REPLAY}
             */
            AudioStateType["CLEAR_TO_REPLAY"] = "CLEAR_TO_REPLAY";
            /**
             * 檢測到該音樂正在撥放時,不做任何事情
             * @type {AudioStateType.NOT_PLAYING}
             */
            AudioStateType["NOT_PLAYING"] = "NOT_PLAYING";
            /**
             * 檢測到該音樂正在撥放時,將可疊加撥放
             * @type {AudioStateType.SUPERIMPOSE}
             */
            AudioStateType["SUPERIMPOSE"] = "SUPERIMPOSE";
        })(AudioStateType = type.AudioStateType || (type.AudioStateType = {}));
    })(type = fcc.type || (fcc.type = {}));
})(fcc || (fcc = {}));
/// <reference path="../Enum/AudioStateType.ts" />
/// <reference path="../Enum/AudioStateType.ts" />
var fcc;
(function (fcc) {
    var global;
    (function (global) {
        /**
         * @Author XIAO-LI-PIN
         * @Description 共用:操作數字{number}類方法
         * @Date 2021-04-14 下午 20:24
         * @Version 1.1
         */
        var Util = /** @class */ (function () {
            function Util() {
            }
            /**
             * 四捨五入到小數點第N位
             * @param {number} float - 浮點數
             * @param {number} number - 要四捨五入到哪一位
             * @return {number}
             */
            Util.roundOff = function (float, number) {
                return Math.round(Math.round(float * Math.pow(10, (number || 0) + 1)) / 10) / Math.pow(10, (number || 0));
            };
            /**
             * 無條件捨去到小數點第N位
             * @param {number} float - 浮點數
             * @param {number} number - 要無條件捨去到哪一位
             * @return {number}
             */
            Util.roundDown = function (float, number) {
                return Math.floor(Math.floor(float * Math.pow(10, (number || 0) + 1)) / 10) / Math.pow(10, (number || 0));
            };
            /**
             * 無條件進位到小數點第N位
             * @param {number} float - 浮點數
             * @param {number} number - 要無條件進位到哪一位
             * @return {number}
             */
            Util.roundUp = function (float, number) {
                return Math.ceil(Math.ceil(float * Math.pow(10, (number || 0) + 1)) / 10) / Math.pow(10, (number || 0));
            };
            /**
             * 檢查該數字為小數有幾位
             * @example input(1.03) -> output(2)
             * @param {number}float - 浮點數
             * @return {number}
             */
            Util.decimalsCount = function (float) {
                var decimalsIndex = String(float).indexOf('.') + 1;
                var count = String(float).length - decimalsIndex;
                if (decimalsIndex == 0) {
                    return 0;
                }
                else {
                    return count;
                }
            };
            /**
             * 將該數字轉字串並判斷是否能使用(K)單位取代零
             * @example input(1000) -> output(1K)
             * @param {number} number 需要格式化的數字
             * @return {string} - 格式化後的字串數字
             */
            Util.numberFormat = function (number) {
                if (number < 1000) {
                    return number + "";
                }
                if (number > 1000) {
                    return number / 1000 + "K";
                }
            };
            /**
             * 將該數字格式化,每三個0前方給予','標記
             * @example input(1000000) -> output(1,000,000)
             * @param {number} number - 需要格式化的數字
             * @return {string} - 格式化後的字串數字
             */
            Util.format = function (number) {
                return this.formatting.format(number);
            };
            Util.formatting = new Intl.NumberFormat();
            return Util;
        }());
        global.Util = Util;
    })(global = fcc.global || (fcc.global = {}));
})(fcc || (fcc = {}));
var fcc;
(function (fcc) {
    var type;
    (function (type) {
        /**
         * @Author XIAO-LI-PIN
         * @Description 各種類型資源
         * @Date 2021-04-14 下午 20:24
         * @Version 1.1
         */
        var LoadType;
        (function (LoadType) {
            /**
             * 圖片類型
             * @type {fcc.type.LoadType.img}
             */
            LoadType[LoadType["img"] = 0] = "img";
            /**
             * 骨骼动画類型
             * @type {fcc.type.LoadType.spine}
             */
            LoadType[LoadType["spine"] = 1] = "spine";
            /**
             * 預載資源類型
             * @type {fcc.type.LoadType.prefab}
             */
            LoadType[LoadType["prefab"] = 2] = "prefab";
            /**
             * 音樂類型
             * @type {fcc.type.LoadType.music}
             */
            LoadType[LoadType["music"] = 3] = "music";
            /**
             * 文字類型(注意:目前只接收 .CSV 檔案)
             * @type {fcc.type.LoadType.text}
             */
            LoadType[LoadType["text"] = 4] = "text";
            /**
             * 場景類型(注意:動態載入資源需放入resource資料夾內 or bundle資料夾內)
             * @type {fcc.type.LoadType.scene}
             */
            LoadType[LoadType["scene"] = 5] = "scene";
            /**
             * 外部URL腳本
             * @type {fcc.type.LoadType.script}
             */
            LoadType[LoadType["script"] = 6] = "script";
            /**
             * 外部URL CSS
             * @type {fcc.type.LoadType.script}
             */
            LoadType[LoadType["css"] = 7] = "css";
        })(LoadType = type.LoadType || (type.LoadType = {}));
    })(type = fcc.type || (fcc.type = {}));
})(fcc || (fcc = {}));
/// <reference path="../Enum/LoadEnum.ts" />
/// <reference path="../Enum/LoadEnum.ts" />
/// <reference path="../Error/Enum/ErrorType.ts" />
/// <reference path="../Error/ErrorManager.ts" />
/// <reference path="./IEventManager.ts" />
var fcc;
/// <reference path="../Error/Enum/ErrorType.ts" />
/// <reference path="../Error/ErrorManager.ts" />
/// <reference path="./IEventManager.ts" />
(function (fcc) {
    /**
     * @Author XIAO-LI-PIN
     * @Description 事件管理器,當前綁定的事件,事件數量
     * @Date 2021-04-14 下午 20:24
     * @Version 1.1
     */
    var EventManager = /** @class */ (function (_super) {
        __extends(EventManager, _super);
        function EventManager(configManager) {
            var _this = _super.call(this) || this;
            _this.configManager = configManager;
            _this._eventCount = 0;
            _this._eventsCurrentlyBeing = new Map();
            _this.target = new cc.EventTarget();
            return _this;
        }
        /**
         *  懶漢加載
         *  初始化,只讓一個專案產生一次該class
         */
        EventManager.setInstance = function (configManager) {
            if (!this._instance) {
                this._instance = new EventManager(configManager);
                fcc.eventMgr = this._instance;
            }
        };
        Object.defineProperty(EventManager, "instance", {
            /**
             *  獲取已經初始化的靜態實例class
             */
            get: function () {
                if (!this._instance) {
                    fcc.ErrorManager.instance.executeError(fcc.type.ErrorType.LISTENER_FW, "該類尚未實例化");
                    return;
                }
                return this._instance;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * 添加事件
         * @param eventTarget
         * @param {string} eventName
         * @param {any} any : 要回傳的物件
         */
        EventManager.prototype.emitEvent = function (eventName) {
            var _a;
            var any = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                any[_i - 1] = arguments[_i];
            }
            any ? (_a = this.target).emit.apply(_a, __spreadArray([eventName], __read(any))) : this.target.emit(eventName);
        };
        /**
         * server監聽回傳接收
         * @param {string} eventName
         * @param {Function} callFun
         * @param isPermanent - 是否常駐
         */
        EventManager.prototype.eventListener = function (eventName, callFun, isPermanent) {
            this._eventCount += 1;
            this._eventsCurrentlyBeing.set("severEvent", eventName);
            if (isPermanent) {
                this.target.on(eventName, callFun);
            }
            else {
                this.target.once(eventName, callFun);
            }
        };
        /**
         * 刪除之前用同類型，回調，目標或 useCapture 註冊的事件監聽器，如果只傳遞 type，將會刪除 type 類型的所有事件監聽器。
         * @param {ServerEventType | GameEventType} eventName
         * @param {cc.EventTarget} eventTarget
         * @param callFun?{Function} : 要刪除的方法,如果未傳參數,將默認全部相關的callFun一並刪除
         * @param target?{Object}:調用回調的目標（此對象），如果未指定，則僅刪除沒有目標的回調
         */
        EventManager.prototype.destroyEvent = function (eventName, callFun, target) {
            this.target.off(eventName, callFun, target);
        };
        /**
         * 是否該事件持續監聽中
         */
        EventManager.prototype.hasListening = function (eventName, eventTarget) {
            return eventTarget.hasEventListener(eventName);
        };
        Object.defineProperty(EventManager.prototype, "eventCount", {
            get: function () {
                return this._eventCount;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(EventManager.prototype, "eventsCurrentlyBeing", {
            get: function () {
                return this._eventsCurrentlyBeing;
            },
            enumerable: false,
            configurable: true
        });
        return EventManager;
    }(cc.EventTarget));
    fcc.EventManager = EventManager;
})(fcc || (fcc = {}));
var fcc;
(function (fcc) {
    /**
     * @Author XIAO-LI-PIN
     * @Description 遊戲流程管理器 : 管理當前流程,執行當前流程
     * @Date 2021-05-14 下午 03:44
     * @Version 1.2
     */
    var ProcessManager = /** @class */ (function () {
        function ProcessManager(configManager) {
            this.configManager = configManager; //獲取ConfigManger,雙向綁定
            this.gameProcessFactory = new fcc.GameProcessFactory(this); //初始化流程工廠
            this._gameState = fcc.type.GameStateType.STANDBY; //初始遊戲狀態
            this.isStartProcess = false; //初始當前執行流程狀態
        }
        /**
         *  懶漢加載
         *  初始化,只讓一個專案只有一次產生此class
         */
        ProcessManager.setInstance = function (configManager) {
            if (!this._instance) {
                this._instance = new ProcessManager(configManager);
                fcc.processMgr = this._instance;
            }
        };
        Object.defineProperty(ProcessManager, "instance", {
            /**
             *  獲取已經初始化的靜態實例class
             */
            get: function () {
                if (!this._instance) {
                    fcc.ErrorManager.instance.executeError(fcc.type.ErrorType.PROCESS_FW, "該類尚未實例化");
                    return;
                }
                return this._instance;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * 設定流程
         * @param {fcc.type.ProcessType | string} processName - 可使用預設 ProcessType 或自訂義流程名稱
         * @param {fcc.IF.IProcess} process - 流程
         * @return {this}
         */
        ProcessManager.prototype.setProcess = function (processName, process) {
            this.gameProcessFactory.setProcess(processName, process);
            return this;
        };
        /**
         * 初始流程,執行綁定的流程內的onCreate方法
         * @param {string | fcc.type.ProcessType} processName - 指定只要初始哪個流程 class,如果使用無參方法,將會初始化所有綁定的流程
         */
        ProcessManager.prototype.initProcess = function (processName) {
            this.gameProcessFactory.initProcess(processName);
        };
        /**
         * 設定初始要執行的流程
         * @param processName - 流程名稱
         */
        ProcessManager.prototype.setDefaultProcess = function (processName) {
            this.gameProcessFactory.changeProcess(processName);
        };
        /**
         * 更換流程
         * @param {fcc.type.ProcessType | string} processName - 要更換的流程名稱
         */
        ProcessManager.prototype.changeProcess = function (processName) {
            this.gameProcessFactory.changeProcess(processName);
        };
        /**
         * 執行設定好的流程
         */
        ProcessManager.prototype.play = function () {
            var _this = this;
            return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!!this.isStartProcess) return [3 /*break*/, 2];
                            this.updateProcessState(true); //流程開始
                            return [4 /*yield*/, this.gameProcessFactory.useProcess()];
                        case 1:
                            _a.sent();
                            this.updateProcessState(false); //流程循環結束
                            resolve();
                            return [3 /*break*/, 3];
                        case 2:
                            fcc.ErrorManager.instance.executeError(fcc.type.ErrorType.PROCESS_FW, "流程尚未結束,請勿重複執行");
                            _a.label = 3;
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
        };
        ;
        /**
         * 改變當前流程進行狀態
         * @param {boolean} state
         */
        ProcessManager.prototype.updateProcessState = function (state) {
            this.isStartProcess = state;
        };
        /**
         * 清除堵塞狀態
         * 注意:清除該狀態後,該次的流程即使尚未執行完,也能執行下次流程
         */
        ProcessManager.prototype.remake = function () {
            this.isStartProcess = false;
        };
        Object.defineProperty(ProcessManager.prototype, "gameState", {
            get: function () {
                return this._gameState;
            },
            set: function (value) {
                this._gameState = value;
            },
            enumerable: false,
            configurable: true
        });
        return ProcessManager;
    }());
    fcc.ProcessManager = ProcessManager;
})(fcc || (fcc = {}));
var fcc;
(function (fcc) {
    var type;
    (function (type) {
        /**
         * @Author XIAO-LI-PIN
         * @Description 遊戲場景樣式
         * @Date 2021-04-14 下午 20:24
         * @Version 1.1
         */
        var SceneStyleType;
        (function (SceneStyleType) {
            /**
             * 自動模式,將會配合玩家自動切換直式或橫式
             * @type {SceneStyleType.AUTO}
             */
            SceneStyleType["AUTO"] = "AUTO";
            /**
             * 橫式樣式
             * @type {SceneStyleType.HORIZONTAL}
             */
            SceneStyleType["HORIZONTAL"] = "HORIZONTAL";
            /**
             * 直式樣式
             * @type {SceneStyleType.VERTICAL}
             */
            SceneStyleType["VERTICAL"] = "VERTICAL";
        })(SceneStyleType = type.SceneStyleType || (type.SceneStyleType = {}));
    })(type = fcc.type || (fcc.type = {}));
})(fcc || (fcc = {}));
var fcc;
(function (fcc) {
    var type;
    (function (type) {
        /**
         * @Author 蕭立品
         * @Description 當前方向
         * @Date 2021-06-25 下午 05:17
         * @Version 1.0
         */
        var SceneDirectionType;
        (function (SceneDirectionType) {
            /**
             * 直向
             * @type {SceneDirectionType.PORTRAIT}
             */
            SceneDirectionType["PORTRAIT"] = "PORTRAIT";
            /**
             * 橫向
             * @type {SceneDirectionType.LANDSCAPE}
             */
            SceneDirectionType["LANDSCAPE"] = "LANDSCAPE";
        })(SceneDirectionType = type.SceneDirectionType || (type.SceneDirectionType = {}));
    })(type = fcc.type || (fcc.type = {}));
})(fcc || (fcc = {}));
/// <reference path="../Enum/SceneStyleType.ts" />
/// <reference path="../Enum/SceneDirectionType.ts" />
/// <reference path="./SceneManager.ts" />
var fcc;
/// <reference path="./SceneManager.ts" />
(function (fcc) {
    /**
     * @Author XIAO-LI-PIN
     * @Description 監聽當前遊戲,玩家是否有更動寬高
     * @Date 2021-04-14 下午 20:24
     * @Version 1.1
     */
    var SceneSizeChangeListener = /** @class */ (function () {
        function SceneSizeChangeListener(configManager, sceneManager) {
            //是否可以更新畫面
            this._isCanUpdateScene = true;
            this.configManager = configManager;
            this.sceneManager = sceneManager;
        }
        /**
         * 監聽是否要更動scene寬高
         * @param {number} delayTime - 更新頻率
         */
        SceneSizeChangeListener.prototype.designSceneEventListener = function (delayTime) {
            var _this = this;
            cc.view.on("canvas-resize", function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.makeDesignScene(delayTime)];
                        case 1:
                            _a.sent();
                            cc.log("更新畫面完畢......");
                            return [2 /*return*/];
                    }
                });
            }); });
        };
        /**
         * 依照designSceneEventListener()參數中的delay時間,更新cavers
         * @param {number} time - 更新頻率
         * @return {Promise<void>}
         * @private
         */
        SceneSizeChangeListener.prototype.makeDesignScene = function (time) {
            var _this = this;
            return new Promise((function (resolve, reject) {
                if (_this._isCanUpdateScene) {
                    _this._isCanUpdateScene = false;
                    setTimeout(function () {
                        _this.sceneManager.updateSize();
                        _this._isCanUpdateScene = true;
                        resolve();
                    }, time);
                }
                else {
                    if (_this.configManager.isFrameworkDebug)
                        reject("正在UpdateScene中 請稍後......");
                }
            }));
        };
        return SceneSizeChangeListener;
    }());
    fcc.SceneSizeChangeListener = SceneSizeChangeListener;
})(fcc || (fcc = {}));
/// <reference path="../Error/ErrorManager.ts" />
/// <reference path="../Error/Enum/ErrorType.ts" />
var fcc;
/// <reference path="../Error/ErrorManager.ts" />
/// <reference path="../Error/Enum/ErrorType.ts" />
(function (fcc) {
    var ABS;
    (function (ABS) {
        /**
         * @Author XIAO-LI-PIN
         * @Description TODO
         * @Date 2021-06-10 上午 11:12
         * @Version 1.0
         */
        var ABaseNotification = /** @class */ (function () {
            function ABaseNotification() {
                this.observer = new Set();
            }
            /**
             * 訂閱該事件
             * @param {IBaseObserver} observer - 關注者
             * @param {boolean} isPermanent - 是否常駐
             */
            ABaseNotification.prototype.subscribe = function (observer, isPermanent) {
                if (this.observer.has(observer)) {
                    fcc.ErrorManager.instance.executeError(fcc.type.ErrorType.SCENE_FW, observer + " \u8A72IBaseObserver\u5DF2\u8A3B\u518A\u904E\u81EA\u52D5\u72C0\u614B\u6539\u8B8A\u6642\u4E8B\u4EF6,\u8ACB\u6AA2\u67E5");
                    return;
                }
                observer.isPermanent = isPermanent;
                this.observer.add(observer);
            };
            ;
            /**
             * 移除訂閱
             * @param {IBaseObserver} observer - 關注者
             */
            ABaseNotification.prototype.unsubscribe = function (observer) {
                if (this.observer.has(observer)) {
                    this.observer.delete(observer);
                }
                else {
                    fcc.ErrorManager.instance.executeError(fcc.type.ErrorType.PROCESS_FW, observer + " : \u8A72\u89C0\u5BDF\u985E\u5C1A\u672A\u7D81\u5B9A\u904E,\u7121\u9808\u79FB\u9664\u89C0\u5BDF\u5C0D\u8C61");
                }
            };
            ;
            /**
             * 移除所有訂閱
             */
            ABaseNotification.prototype.removeAll = function () {
                this.observer.clear();
            };
            /**
             * 獲取該事件所有訂閱數量
             */
            ABaseNotification.prototype.getSubscribeCount = function () {
                return this.observer.size;
            };
            ;
            /**
             * 獲取該事件所有訂閱者
             */
            ABaseNotification.prototype.getAllSubscribe = function () {
                return this.observer;
            };
            ;
            return ABaseNotification;
        }());
        ABS.ABaseNotification = ABaseNotification;
    })(ABS = fcc.ABS || (fcc.ABS = {}));
})(fcc || (fcc = {}));
var fcc;
(function (fcc) {
    var type;
    (function (type) {
        /**
         * @Author XIAO-LI-PIN
         * @Description 推播事件
         * @Date 2021-06-10 下午 04:59
         * @Version 1.0
         */
        var NotificationType;
        (function (NotificationType) {
            /**
             * 自動狀態改變時
             * @type {fcc.type.NotificationType.AUTO_CHANGE}
             */
            NotificationType["AUTO_CHANGE"] = "AUTO_CHANGE";
            /**
             * 當前遊戲速度狀態改變時
             * @type {fcc.type.NotificationType.SPEED_CHANGE}
             */
            NotificationType["SPEED_CHANGE"] = "SPEED_CHANGE";
            /**
             * 用戶金額變更時
             * @type {fcc.type.NotificationType.USER_MONEY_CHANGE}
             */
            NotificationType["USER_MONEY_CHANGE"] = "USER_MONEY_CHANGE";
            /**
             * 用戶更換的押住金額時
             * @type {fcc.type.NotificationType.USER_BET_CHANGE}
             */
            NotificationType["USER_BET_CHANGE"] = "USER_BET_CHANGE";
            /**
             * 用戶贏分時
             * @type {fcc.type.NotificationType.USER_GET_WIN}
             */
            NotificationType["USER_GET_WIN"] = "USER_GET_WIN";
            /**
             * 用戶改變mobile方向時
             * @type {fcc.type.NotificationType.SCENE_DIRECTION_CHANGE}
             */
            NotificationType["SCENE_DIRECTION_CHANGE"] = "SCENE_DIRECTION_CHANGE";
            /**
             * server 回傳結果時
             * @type {fcc.type.NotificationType.RESPONSE_RESULT}
             */
            NotificationType["RESPONSE_RESULT"] = "RESPONSE_RESULT";
            /**
             * 瞇排事件時
             * @type {fcc.type.NotificationType.SCROLL_FOCUS_STATE}
             */
            NotificationType["SCROLL_FOCUS_STATE"] = "SCROLL_FOCUS_STATE";
            /**
             * 即停事件
             */
            NotificationType["STOP_NOW"] = "STOP_NOW";
        })(NotificationType = type.NotificationType || (type.NotificationType = {}));
    })(type = fcc.type || (fcc.type = {}));
})(fcc || (fcc = {}));
/// <reference path="../../../Scene/Enum/SceneDirectionType.ts" />
var fcc;
/// <reference path="../../../Scene/Enum/SceneDirectionType.ts" />
(function (fcc) {
    /**
     * @Author XIAO-LI-PIN
     * @Description 場景方向改變觀察者,當有事件推送時,將會將該事件推播給綁定者
     * @Date 2021-05-19 下午 01:46
     * @Version 1.0
     */
    var SceneDirectionChangeObserver = /** @class */ (function () {
        function SceneDirectionChangeObserver(callFun, self) {
            this._isPermanent = false;
            this.self = self;
            this.callFun = callFun;
        }
        SceneDirectionChangeObserver.prototype.pushNotification = function (type) {
            this.callFun.call(this.self, type);
        };
        Object.defineProperty(SceneDirectionChangeObserver.prototype, "isPermanent", {
            get: function () {
                return this._isPermanent;
            },
            set: function (value) {
                this._isPermanent = value;
            },
            enumerable: false,
            configurable: true
        });
        return SceneDirectionChangeObserver;
    }());
    fcc.SceneDirectionChangeObserver = SceneDirectionChangeObserver;
})(fcc || (fcc = {}));
/// <reference path="../../../Scene/Enum/SceneDirectionType.ts" />
/// <reference path="../../ABaseNotification.ts" />
/// <reference path="../../Enum/NotificationType.ts" />
/// <reference path="../../ObserverType/SceneObserver/SceneDirectionChangeObserver.ts" />
var fcc;
/// <reference path="../../../Scene/Enum/SceneDirectionType.ts" />
/// <reference path="../../ABaseNotification.ts" />
/// <reference path="../../Enum/NotificationType.ts" />
/// <reference path="../../ObserverType/SceneObserver/SceneDirectionChangeObserver.ts" />
(function (fcc) {
    /**
     * @Author XIAO-LI-PIN
     * @Description 場景方向改變通知管理器
     * @Date 2021-05-19 下午 01:57
     * @Version 1.0
     */
    var SceneDirectionChangeNotification = /** @class */ (function (_super) {
        __extends(SceneDirectionChangeNotification, _super);
        function SceneDirectionChangeNotification() {
            var _this = _super.call(this) || this;
            _this.TAG_NAME = fcc.type.NotificationType.SCENE_DIRECTION_CHANGE;
            return _this;
        }
        /**
         * 訂閱該事件
         * @param {AutoStateChangeObserver} observer - 推撥接收者
         * @param {boolean} isPermanent - 是否常駐監聽
         */
        SceneDirectionChangeNotification.prototype.subscribe = function (observer, isPermanent) {
            _super.prototype.subscribe.call(this, observer, isPermanent);
        };
        /**
         * 用戶更換方向時推送通知
         * @param {SceneDirectionType} type - 當前用戶方向
         */
        SceneDirectionChangeNotification.prototype.notify = function (type) {
            var e_1, _a;
            if (this.observer.size > 0) {
                try {
                    for (var _b = __values(this.observer), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var observer = _c.value;
                        observer.pushNotification(type);
                        if (!observer.isPermanent) {
                            this.unsubscribe(observer);
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
        };
        return SceneDirectionChangeNotification;
    }(fcc.ABS.ABaseNotification));
    fcc.SceneDirectionChangeNotification = SceneDirectionChangeNotification;
})(fcc || (fcc = {}));
/// <reference path="../Enum/SceneDirectionType.ts" />
/// <reference path="../SceneManager.ts" />
/// <reference path="../../Listener/NotificationType/SceneNotification/SceneDirectionChangeNotification.ts" />
var fcc;
/// <reference path="../Enum/SceneDirectionType.ts" />
/// <reference path="../SceneManager.ts" />
/// <reference path="../../Listener/NotificationType/SceneNotification/SceneDirectionChangeNotification.ts" />
(function (fcc) {
    /**
     * @Author XIAO-LI-PIN
     * @Description 自動模式 : 依照玩家當前的使用方式,自動更新為橫式 or 直式
     * @Date 2021-04-14 下午 20:24
     * @Version 1.1
     */
    var AutoStyle = /** @class */ (function () {
        function AutoStyle(sceneManager) {
            this.sceneManager = sceneManager;
            if (!fcc.NotificationManager
                .instance()
                .hasNotification(fcc.type.NotificationType.SCENE_DIRECTION_CHANGE)) {
                this.eventLock = true;
                console.log("你尚未綁定當遊戲方向更動時的推播事件,因此不會觸發方向改變的推播事件");
            }
            else {
                this.eventLock = false;
            }
        }
        AutoStyle.prototype.executionStyle = function (width, height) {
            this.updateSceneDirection();
            if ((cc.view.getFrameSize().width / cc.view.getFrameSize().height) >= (width / height)) {
                //宽度超出
                var newWidth = cc.view.getFrameSize().width * (width / cc.view.getFrameSize().height);
                cc.view.setDesignResolutionSize(newWidth, height, cc.ResolutionPolicy.FIXED_HEIGHT);
            }
            else {
                if (cc.view.getFrameSize().width > cc.view.getFrameSize().height) {
                    var newHeight = cc.view.getFrameSize().height * (width / cc.view.getFrameSize().width);
                    cc.view.setDesignResolutionSize(width, newHeight, cc.ResolutionPolicy.FIXED_WIDTH);
                }
                else {
                    if ((cc.view.getFrameSize().width / cc.view.getFrameSize().height) >= (1000 / 1777)) {
                        var newHeight = cc.view.getFrameSize().height * (1000 / cc.view.getFrameSize().width);
                        cc.view.setDesignResolutionSize(1000, newHeight, cc.ResolutionPolicy.FIXED_HEIGHT);
                    }
                    else {
                        var newHeight = cc.view.getFrameSize().height * (1000 / cc.view.getFrameSize().width);
                        cc.view.setDesignResolutionSize(1000, newHeight, cc.ResolutionPolicy.FIXED_WIDTH);
                    }
                }
            }
        };
        /**
         * 更新管理器內的 sceneDirection 變數,並推撥已更新當前場景方向的事件
         *
         * 注意 : 如果當前方向不變,卻更新了遊戲是配度,是不會推波事件的
         *       只有方向改變才會推送推波事件
         */
        AutoStyle.prototype.updateSceneDirection = function () {
            if (cc.view.getFrameSize().width < cc.view.getFrameSize().height) {
                //直向
                if (this.sceneManager.sceneDirection == fcc.type.SceneDirectionType.PORTRAIT)
                    return;
                this.sceneManager.sceneDirection = fcc.type.SceneDirectionType.PORTRAIT;
                if (!this.eventLock) {
                    fcc.NotificationManager.instance()
                        .getNotification(fcc.type.NotificationType.SCENE_DIRECTION_CHANGE)
                        .notify(fcc.type.SceneDirectionType.PORTRAIT);
                }
            }
            else {
                //橫向
                if (this.sceneManager.sceneDirection == fcc.type.SceneDirectionType.LANDSCAPE)
                    return;
                this.sceneManager.sceneDirection = fcc.type.SceneDirectionType.LANDSCAPE;
                if (!this.eventLock) {
                    fcc.NotificationManager.instance()
                        .getNotification(fcc.type.NotificationType.SCENE_DIRECTION_CHANGE)
                        .notify(fcc.type.SceneDirectionType.LANDSCAPE);
                }
            }
        };
        return AutoStyle;
    }());
    fcc.AutoStyle = AutoStyle;
})(fcc || (fcc = {}));
var fcc;
(function (fcc) {
    /**
     * @Author XIAO-LI-PIN
     * @Description 橫式樣式更新
     * @Date 2021-04-14 下午 20:24
     * @Version 1.1
     */
    var HorizontalStyle = /** @class */ (function () {
        function HorizontalStyle() {
        }
        HorizontalStyle.prototype.executionStyle = function (width, height) {
            var cvs = cc.find('Canvas').getComponent(cc.Canvas);
            //保存原始設計分辨率，供屏幕大小變化時使用
            if (!this.curDR) {
                this.curDR = cc.size(width, height);
            }
            var dr = this.curDR;
            var s = cc.view.getFrameSize();
            var rw = s.width;
            var rh = s.height;
            var finalW = rw;
            var finalH = rh;
            if ((rw / rh) > (dr.width / dr.height)) {
                //橫向
                //!#zh: 是否優先將設計分辨率高度撐滿視圖高度 。 */
                cvs.fitHeight = true;
                cvs.fitWidth = false;
                //如果更長，則用定高
                finalH = dr.height;
                finalW = finalH * rw / rh;
            }
            else {
                //直向
                /*!#zh: 是否優先將設計分辨率寬度撐滿視圖寬度 。 */
                cvs.fitHeight = false;
                cvs.fitWidth = true;
                //如果更短，則用定寬
                finalW = dr.width;
                finalH = rh / rw * finalW;
            }
            cvs.designResolution = cc.size(finalW, finalH);
            cvs.node.width = finalW;
            cvs.node.height = finalH;
        };
        return HorizontalStyle;
    }());
    fcc.HorizontalStyle = HorizontalStyle;
})(fcc || (fcc = {}));
/// <reference path="../../Error/ErrorManager.ts" />
var fcc;
/// <reference path="../../Error/ErrorManager.ts" />
(function (fcc) {
    /**
     * @Author XIAO-LI-PIN
     * @Description 直式樣式更新
     * @Date 2021-04-14 下午 20:24
     * @Version 1.1
     */
    var VerticalStyle = /** @class */ (function () {
        function VerticalStyle() {
        }
        VerticalStyle.prototype.executionStyle = function (width, height) {
            fcc.ErrorManager.instance.executeError("尚未完成直向是配模式");
        };
        return VerticalStyle;
    }());
    fcc.VerticalStyle = VerticalStyle;
})(fcc || (fcc = {}));
/// <reference path="./Enum/SceneStyleType.ts" />
/// <reference path="./SceneStyle/AutoStyle.ts" />
/// <reference path="./SceneStyle/HorizontalStyle.ts" />
/// <reference path="./SceneStyle/VerticalStyle.ts" />
var fcc;
/// <reference path="./Enum/SceneStyleType.ts" />
/// <reference path="./SceneStyle/AutoStyle.ts" />
/// <reference path="./SceneStyle/HorizontalStyle.ts" />
/// <reference path="./SceneStyle/VerticalStyle.ts" />
(function (fcc) {
    /**
     * @Author XIAO-LI-PIN
     * @Description 依照初始設定對應的更新模式,更新當前遊戲場景
     * @Date 2021-04-14 下午 20:24
     * @Version 1.1
     */
    var SceneStyleHandler = /** @class */ (function () {
        function SceneStyleHandler(sceneManager) {
            this.sceneManager = sceneManager;
        }
        /**
         * 匹對對應的更新類,做相對應的更新
         * @param {fcc.type.SceneStyleType | fcc.IF.ISceneStyle} sceneStyle - 對應的的樣式 or 自訂義樣式
         * @param {number} width - 寬
         * @param {number} height - 高
         */
        SceneStyleHandler.prototype.getStyle = function (sceneStyle, width, height) {
            switch (sceneStyle) {
                case fcc.type.SceneStyleType.AUTO:
                    if (!this.autoStyle)
                        this.autoStyle = new fcc.AutoStyle(this.sceneManager);
                    this.autoStyle.executionStyle(width, height);
                    break;
                case fcc.type.SceneStyleType.HORIZONTAL:
                    if (!this.horizontalStyle)
                        this.horizontalStyle = new fcc.HorizontalStyle();
                    this.horizontalStyle.executionStyle(width, height);
                    break;
                case fcc.type.SceneStyleType.VERTICAL:
                    if (!this.verticalStyle)
                        this.verticalStyle = new fcc.VerticalStyle();
                    this.verticalStyle.executionStyle(width, height);
                    break;
                default:
                    sceneStyle.executionStyle(width, height);
            }
        };
        return SceneStyleHandler;
    }());
    fcc.SceneStyleHandler = SceneStyleHandler;
})(fcc || (fcc = {}));
/// <reference path="../Error/Enum/ErrorType.ts" />
/// <reference path="../Error/ErrorManager.ts" />
/// <reference path="../Load/LoadResManager.ts" />
/// <reference path="./Enum/SceneStyleType.ts" />
/// <reference path="./Enum/SceneDirectionType.ts" />
/// <reference path="./IScene/ISceneManager.ts" />
/// <reference path="./SceneSizeChangeListener.ts" />
/// <reference path="./SceneStyleHandler.ts" />
var fcc;
/// <reference path="../Error/Enum/ErrorType.ts" />
/// <reference path="../Error/ErrorManager.ts" />
/// <reference path="../Load/LoadResManager.ts" />
/// <reference path="./Enum/SceneStyleType.ts" />
/// <reference path="./Enum/SceneDirectionType.ts" />
/// <reference path="./IScene/ISceneManager.ts" />
/// <reference path="./SceneSizeChangeListener.ts" />
/// <reference path="./SceneStyleHandler.ts" />
(function (fcc) {
    /**
     * @Author XIAO-LI-PIN
     * @Description 場景管理器 : 自動匹配遊戲寬高,監聽當前玩家遊玩模式(橫式or直式)
     * @Date 2021-04-14 下午 20:24
     * @Version 1.1
     */
    var SceneManager = /** @class */ (function () {
        function SceneManager(configManager) {
            this.configManager = configManager;
            this._designWidth = 1280; //初始預設寬度
            this._designHeight = 720; //初始預設高度
            this.sceneSizeChangeListener = new fcc.SceneSizeChangeListener(configManager, this);
            this.sceneStyleHandler = new fcc.SceneStyleHandler(this); //實例化scene樣式導向器
            this.style = fcc.type.SceneStyleType.HORIZONTAL; //初始預設scene畫面調整的模式
        }
        /**
         *  懶漢加載
         *  初始化,只讓一個專案產生一次該class
         * @param {fcc.IF.IConfigManager} configManager
         */
        SceneManager.setInstance = function (configManager) {
            if (!this._instance) {
                this._instance = new SceneManager(configManager);
                fcc.sceneMgr = this._instance;
            }
        };
        Object.defineProperty(SceneManager, "instance", {
            /**
             *  獲取已經初始化的靜態實例class
             */
            get: function () {
                if (!this._instance) {
                    fcc.ErrorManager.instance.executeError(fcc.type.ErrorType.SCENE_FW, "該類尚未實例化");
                    return;
                }
                return this._instance;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * cavers 設計寬度
         * @param {number} width - 寬度
         * @return {this}
         */
        SceneManager.prototype.setDesignWidth = function (width) {
            this._designWidth = width;
            return this;
        };
        /**
         * cavers 設計高度
         * @param {number} height - 高度
         * @return {this}
         */
        SceneManager.prototype.setDesignHeight = function (height) {
            this._designHeight = height;
            return this;
        };
        /**
         * 更新當前示配寬高,會保存上次的scene更動模式
         * 如不添加參數,第一次將會使用預設模式更動
         * @param {SceneStyleType | Function} style - 可自定義更動樣式,但需實作(介面)ISceneStyle
         * @return {this}
         */
        SceneManager.prototype.updateSize = function (style) {
            if (style) {
                this.style = style;
                switch (style) {
                    case fcc.type.SceneStyleType.HORIZONTAL:
                        this._sceneDirection = fcc.type.SceneDirectionType.PORTRAIT;
                        break;
                    case fcc.type.SceneStyleType.VERTICAL:
                        this._sceneDirection = fcc.type.SceneDirectionType.LANDSCAPE;
                        break;
                    case fcc.type.SceneStyleType.AUTO:
                        break;
                    default:
                        console.log("該更新模式尚未包含在框架中,請確認是否有實作ISceneStyle");
                        break;
                }
            }
            this.sceneStyleHandler.getStyle(this.style, this._designWidth, this._designHeight);
            return this;
        };
        /**
         * 監聽當前cavers是否有更動大小,如果有將會自動更新當前是配寬高
         * 將會比照上次更動的樣式進行更動
         * 如果需求更動樣式,須先更新 updateSize()
         * @param {number} time : 更新的頻率 單位毫秒 ms
         */
        SceneManager.prototype.startListener = function (time) {
            this.sceneSizeChangeListener.designSceneEventListener(time);
        };
        /**
         * 更換場景
         * @param {string} name : 場景資源名稱為你Res動態加載的自訂義的scene名稱
         */
        SceneManager.prototype.changeScene = function (name) {
            if (!fcc.LoadResManager.instance.sceneRes.has(name)) {
                fcc.ErrorManager.instance.executeError(fcc.type.ErrorType.SCENE_FW, "加載不到你的Scene資源,請檢查該資源名是否正確");
            }
            cc.director.runScene(fcc.LoadResManager.instance.sceneRes.get(name));
        };
        /**
         * 清除該scene所有動作
         * @param scene{cc.Component} - 要清除的scene class
         */
        SceneManager.prototype.removeScene = function (scene) {
            scene.destroy();
        };
        Object.defineProperty(SceneManager.prototype, "sceneDirection", {
            get: function () {
                return this._sceneDirection;
            },
            set: function (value) {
                this._sceneDirection = value;
            },
            enumerable: false,
            configurable: true
        });
        return SceneManager;
    }());
    fcc.SceneManager = SceneManager;
})(fcc || (fcc = {}));
/// <reference path="../Error/Enum/ErrorType.ts" />
/// <reference path="../Error/ErrorManager.ts" />
/// <reference path="./ISlotStyleManager.ts" />
var fcc;
/// <reference path="../Error/Enum/ErrorType.ts" />
/// <reference path="../Error/ErrorManager.ts" />
/// <reference path="./ISlotStyleManager.ts" />
(function (fcc) {
    /**
     * @Author XIAO-LI-PIN
     * @Description 老虎機管理器 : 管理老虎機樣式,執行速度,效果
     * @Date 2021-04-14 下午 20:24
     * @Version 1.1
     */
    var SlotStyleManager = /** @class */ (function () {
        function SlotStyleManager(configManager) {
            this.configManager = configManager;
        }
        /**
         *  懶漢加載
         *  初始化,只讓一個專案產生一次該class
         */
        SlotStyleManager.setInstance = function (configManager) {
            if (!this._instance) {
                this._instance = new SlotStyleManager(configManager);
                fcc.slotStyleMgr = this._instance;
            }
        };
        Object.defineProperty(SlotStyleManager, "instance", {
            /**
             *  獲取已經初始化的靜態實例class
             */
            get: function () {
                if (!this._instance) {
                    fcc.ErrorManager.instance.executeError(fcc.type.ErrorType.SLOT_STYLE_FW, "該類尚未實例化");
                    return;
                }
                return this._instance;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * 添加執行流程的class 需繼承 ISlot
         * @param {ASlot} slotTemplate
         * @return {this}
         */
        SlotStyleManager.prototype.setSlotTemplate = function (slotTemplate) {
            this.template = slotTemplate;
            return this;
        };
        /**
         * 添加slot主事件樣式設定
         * @param {{new(slotStyleManager: fcc.IF.ISlotStyleManager): T}} slotSetting
         * @return {T}
         */
        SlotStyleManager.prototype.setSlotStyle = function (slotSetting) {
            return new slotSetting(this);
        };
        /**
         * 初始化Slot : 將Slot設定參數給予Slot做初始處理
         */
        SlotStyleManager.prototype.build = function (slotSetting) {
            if (!this.template) {
                fcc.ErrorManager
                    .instance
                    .executeError(fcc.type.ErrorType.UNDEFINED_FW, "Slot Template 未賦予,需幫定或實做一個SlotTemplate");
            }
            this._slot = new this.template(slotSetting, this.configManager);
        };
        Object.defineProperty(SlotStyleManager.prototype, "slot", {
            get: function () {
                return this._slot;
            },
            enumerable: false,
            configurable: true
        });
        return SlotStyleManager;
    }());
    fcc.SlotStyleManager = SlotStyleManager;
})(fcc || (fcc = {}));
var fcc;
(function (fcc) {
    var type;
    (function (type) {
        /**
         * @Author XIAO-LI-PIN
         * @Description 遊戲自動狀態種類
         * @Date 2021-04-14 下午 20:24
         * @Version 1.1
         */
        var AutoType;
        (function (AutoType) {
            /**
             * 無限AUTO
             * @type {AutoType.AUTO}
             */
            AutoType[AutoType["AUTO"] = -1] = "AUTO";
            /**
             * 直到Free出現後,結束AUTO狀態
             * @type {AutoType.AUTO}
             */
            AutoType[AutoType["FREE_END"] = -2] = "FREE_END";
            /**
             * AUTO 50次
             * @type {AutoType.AUTO_50}
             */
            AutoType[AutoType["AUTO_50"] = 50] = "AUTO_50";
            /**
             * AUTO 100次
             * @type {AutoType.AUTO_100}
             */
            AutoType[AutoType["AUTO_100"] = 100] = "AUTO_100";
            /**
             * AUTO 500次
             * @type {AutoType.AUTO_100}
             */
            AutoType[AutoType["AUTO_500"] = 500] = "AUTO_500";
            /**
             * AUTO 1000次
             * @type {AutoType.AUTO_1000}
             */
            AutoType[AutoType["AUTO_1000"] = 1000] = "AUTO_1000";
        })(AutoType = type.AutoType || (type.AutoType = {}));
    })(type = fcc.type || (fcc.type = {}));
})(fcc || (fcc = {}));
var fcc;
(function (fcc) {
    var type;
    (function (type) {
        /**
         * @Author XIAO-LI-PIN
         * @Description TODO
         * @Date 2021-06-15 下午 06:00
         * @Version 1.0
         */
        var LanguageType;
        (function (LanguageType) {
            /**
             * 台灣
             * @type {LanguageType.TAIWAN}
             */
            LanguageType["TAIWAN"] = "NTD";
            /**
             * 中國
             * @type {LanguageType.CHINESE}
             */
            LanguageType["CHINESE"] = "CNY";
            /**
             * 泰國
             * @type {LanguageType.THAILAND}
             */
            LanguageType["THAILAND"] = "THB";
            /**
             * 美國
             * @type {LanguageType.AMERICA}
             */
            LanguageType["AMERICA"] = "USD";
            /**
             * 越南
             * @type {LanguageType.VIETNAM}
             */
            LanguageType["VIETNAM"] = "VND";
            /**
             * 印尼
             */
            LanguageType["INDONESIA"] = "IDR";
            /**
             * 馬來西亞
             */
            LanguageType["MALAYSIA"] = "MYR";
        })(LanguageType = type.LanguageType || (type.LanguageType = {}));
    })(type = fcc.type || (fcc.type = {}));
})(fcc || (fcc = {}));
/// <reference path="../Audio/AudioManager.ts" />
/// <reference path="../Error/ErrorManager.ts" />
/// <reference path="../Listener/EventManager.ts" />
/// <reference path="../Load/LoadResManager.ts" />
/// <reference path="../Process/ProcessManager.ts" />
/// <reference path="../Scene/SceneManager.ts" />
/// <reference path="../Slot/SlotStyleManager.ts" />
/// <reference path="../Process/Enum/AutoType.ts" />
/// <reference path="./IConfig/ISlotConfigManager.ts" />
/// <reference path="../Language/Enum/LanguageType.ts" />
/// <reference path="../Process/Enum/AutoType.ts" />
var fcc;
/// <reference path="../Audio/AudioManager.ts" />
/// <reference path="../Error/ErrorManager.ts" />
/// <reference path="../Listener/EventManager.ts" />
/// <reference path="../Load/LoadResManager.ts" />
/// <reference path="../Process/ProcessManager.ts" />
/// <reference path="../Scene/SceneManager.ts" />
/// <reference path="../Slot/SlotStyleManager.ts" />
/// <reference path="../Process/Enum/AutoType.ts" />
/// <reference path="./IConfig/ISlotConfigManager.ts" />
/// <reference path="../Language/Enum/LanguageType.ts" />
/// <reference path="../Process/Enum/AutoType.ts" />
(function (fcc) {
    /**
     * @Author XIAO-LI-PIN
     * @Description 遊戲初始設定,並透過builder加載所有Manager
     * @Date 2021-05-13 上午 10:24
     * @Version 1.1
     */
    var SlotConfigManager = /** @class */ (function () {
        function SlotConfigManager() {
            this._gameNumber = null; //該遊戲名稱
            this._externallyLoadURL = ""; //載入外部資源URL
            this._isAuto = false; //是否自動
            this._isSpeedUp = false; //是否加速
            this._autoCount = fcc.type.AutoType.AUTO; //初始自動狀態
            this._musicVolume = 1; //遊戲音量
            this._effectVolume = 1; //效果音量
            this._isMusicOnMute = false; //是否將音樂靜音
            this._isEffectOnMute = false; //是否將音效靜音
            this._language = fcc.type.LanguageType.CHINESE; //初始當前語系,將依據該語系,載入所有耦合圖檔
            this._backHomeURL = null; //初始返回首頁URL
            this._cocosDebugSetting = cc.debug.DebugMode.INFO; //設置cocos debug 模式
            this._isFrameworkDebug = true; //是否要開啟框架的Debug模式
        }
        Object.defineProperty(SlotConfigManager, "instance", {
            /**
             * 懶漢加載
             * 初始化,只讓一個專案只有一次產生此class
             * @returns {SlotConfigManager}
             */
            get: function () {
                if (!this._instance) {
                    this._instance = new SlotConfigManager();
                }
                return this._instance;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * 添加遊戲名稱
         * @param {number} name - 遊戲名稱
         * @default null
         * @returns {this}
         */
        SlotConfigManager.prototype.setGameNumber = function (name) {
            this._gameNumber = name;
            return this;
        };
        /**
         * 設置初始預設音量
         * @param {number} number - 音量 0~1
         * @default 1
         * @returns {this}
         */
        SlotConfigManager.prototype.setMusicVolume = function (number) {
            this._musicVolume = number;
            return this;
        };
        /**
         * 設置初始預設效果音量
         * @param {number} number - 音量 0~1
         * @default 1
         * @returns {this}
         */
        SlotConfigManager.prototype.setEffectVolume = function (number) {
            this._effectVolume = number;
            return this;
        };
        /**
         * 初始將背景音樂靜音
         * @param {boolean} OnMute - 是否靜音
         * @default false
         * @returns {this}
         */
        SlotConfigManager.prototype.setMusicOnMute = function (OnMute) {
            this._isMusicOnMute = OnMute;
            return this;
        };
        /**
         * 初始是否將效果音效靜音
         * @param {boolean} OnMute - 是否靜音
         * @default false
         * @returns {this}
         */
        SlotConfigManager.prototype.setEffectOnMute = function (OnMute) {
            this._isEffectOnMute = OnMute;
            return this;
        };
        /**
         * 初始遊戲最初的auto次數
         * @param {AutoType} type
         * @default type.AutoType.AUTO
         * @returns {this}
         */
        SlotConfigManager.prototype.setAutoCont = function (type) {
            this._autoCount = type;
            return this;
        };
        /**
         * 初始要從外部拿取資源的URL
         * @param {string} url : 獲取外部資源的URL
         * @default ""
         * @returns {this}
         */
        SlotConfigManager.prototype.setExternallyLoadURL = function (url) {
            this._externallyLoadURL = url;
            return this;
        };
        /**
         * 初始語系
         * @param {LanguageType} languageType - 語系
         * @default LanguageType.CHINESE
         * @returns {this}
         */
        SlotConfigManager.prototype.setLanguage = function (languageType) {
            this._language = languageType;
            return this;
        };
        /**
         * 初始進入遊戲時Auto狀態
         * @param {boolean} isAuto - 是否在遊戲進入後開啟auto狀態
         * @default false
         * @returns {this}
         */
        SlotConfigManager.prototype.setAutoState = function (isAuto) {
            this._isAuto = isAuto;
            return this;
        };
        /**
         * 是否在遊戲進入後是加速的狀態
         * @param {boolean} isSpeedUp
         * @default false
         * @returns {this}
         */
        SlotConfigManager.prototype.setSpeedState = function (isSpeedUp) {
            this._isSpeedUp = isSpeedUp;
            return this;
        };
        /**
         * 是否要開啟Framework Debug模式
         * 注意:遊戲正式上線須關閉
         * @param {boolean} use
         * @default true
         * @returns {this}
         */
        SlotConfigManager.prototype.setFrameWorkDebug = function (use) {
            this._isFrameworkDebug = use;
            return this;
        };
        /**
         * cocos 框架 debug設定
         * @param {cc.debug.DebugMode} type - debug 樣式
         * @default - cc.debug.DebugMode.INFO
         * @return {this}
         */
        SlotConfigManager.prototype.setCocosDebug = function (type) {
            this._cocosDebugSetting = type;
            return this;
        };
        /**
         * 返回首頁URL
         * @param {string} url
         * @default null
         * @returns {this}
         */
        SlotConfigManager.prototype.setBackHomeURL = function (url) {
            this._backHomeURL = url;
            return this;
        };
        /**
         * 實例化所有Manager class;
         */
        SlotConfigManager.prototype.build = function () {
            cc.debug["_resetDebugSetting"](this._cocosDebugSetting);
            fcc.ErrorManager.setInstance(this);
            fcc.AudioManager.setInstance(this);
            fcc.LanguageManager.setInstance(this);
            fcc.EventManager.setInstance(this);
            fcc.LoadResManager.setInstance(this);
            fcc.ProcessManager.setInstance(this);
            fcc.SceneManager.setInstance(this);
            fcc.SlotStyleManager.setInstance(this);
        };
        Object.defineProperty(SlotConfigManager.prototype, "externallyLoadURL", {
            // get -----------------------------------------------------------------
            get: function () {
                return this._externallyLoadURL;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SlotConfigManager.prototype, "gameNumber", {
            get: function () {
                return this._gameNumber;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SlotConfigManager.prototype, "isAuto", {
            get: function () {
                return this._isAuto;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SlotConfigManager.prototype, "autoCount", {
            get: function () {
                return this._autoCount;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SlotConfigManager.prototype, "isSpeedUp", {
            get: function () {
                return this._isSpeedUp;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SlotConfigManager.prototype, "musicVolume", {
            get: function () {
                return this._musicVolume;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SlotConfigManager.prototype, "effectVolume", {
            get: function () {
                return this._effectVolume;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SlotConfigManager.prototype, "language", {
            get: function () {
                return this._language;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SlotConfigManager.prototype, "isFrameworkDebug", {
            get: function () {
                return this._isFrameworkDebug;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SlotConfigManager.prototype, "isEffectOnMute", {
            get: function () {
                return this._isEffectOnMute;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SlotConfigManager.prototype, "isMusicOnMute", {
            get: function () {
                return this._isMusicOnMute;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SlotConfigManager.prototype, "backHomeURL", {
            get: function () {
                return this._backHomeURL;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SlotConfigManager.prototype, "cocosDebugSetting", {
            get: function () {
                return this._cocosDebugSetting;
            },
            enumerable: false,
            configurable: true
        });
        return SlotConfigManager;
    }());
    fcc.SlotConfigManager = SlotConfigManager;
})(fcc || (fcc = {}));
var fcc;
(function (fcc) {
    var ABS;
    (function (ABS) {
        /**
         * @Author XIAO-LI-PIN
         * @Description (抽象類)載入外部腳本
         * @Date 2021-04-14 下午 20:24
         * @Version 1.1
         */
        var ALoadScriptType = /** @class */ (function () {
            function ALoadScriptType(scriptName, type, url) {
                this.scriptName = scriptName;
                this.type = type;
                this.url = url;
            }
            ALoadScriptType.head = document.getElementsByTagName("head")[0];
            return ALoadScriptType;
        }());
        ABS.ALoadScriptType = ALoadScriptType;
    })(ABS = fcc.ABS || (fcc.ABS = {}));
})(fcc || (fcc = {}));
/// <reference path="../../Config/SlotConfigManager.ts" />
/// <reference path="../../Error/Enum/ErrorType.ts" />
/// <reference path="../../Error/ErrorManager.ts" />
/// <reference path="../ILoad/ALoadScriptType.ts" />
/// <reference path="../LoadResManager.ts" />
var fcc;
/// <reference path="../../Config/SlotConfigManager.ts" />
/// <reference path="../../Error/Enum/ErrorType.ts" />
/// <reference path="../../Error/ErrorManager.ts" />
/// <reference path="../ILoad/ALoadScriptType.ts" />
/// <reference path="../LoadResManager.ts" />
(function (fcc) {
    /**
     * @Author XIAO-LI-PIN
     * @Description 加載外部css資源
     * @Date 2021-04-14 下午 20:24
     * @Version 1.1
     */
    var CSSLoad = /** @class */ (function (_super) {
        __extends(CSSLoad, _super);
        function CSSLoad(scriptName, type, url) {
            var _this = _super.call(this, scriptName, type, url) || this;
            _this.linkElem = document.createElement("link");
            return _this;
        }
        CSSLoad.prototype.loadScript = function () {
            var url = fcc.SlotConfigManager.instance.externallyLoadURL + "/" + this.url + "/" + this.scriptName + ".css";
            if (fcc.LoadResManager.instance.scriptRes.has(url)) {
                fcc.ErrorManager.instance.executeError(fcc.type.ErrorType.LOAD_FW, "\u8ACB\u52FF\u91CD\u8907\u52A0\u8F09\u5DF2\u6709\u7684\u5916\u90E8\u8173\u672C : " + url);
            }
            this.linkElem.rel = "stylesheet";
            this.linkElem.type = this.type;
            this.linkElem.href = url;
            fcc.ABS.ALoadScriptType.head.appendChild(this.linkElem);
            fcc.LoadResManager.instance.scriptRes.add(url);
        };
        return CSSLoad;
    }(fcc.ABS.ALoadScriptType));
    fcc.CSSLoad = CSSLoad;
})(fcc || (fcc = {}));
/// <reference path="../../Config/SlotConfigManager.ts" />
/// <reference path="../../Error/Enum/ErrorType.ts" />
/// <reference path="../../Error/ErrorManager.ts" />
/// <reference path="../ILoad/ALoadScriptType.ts" />
/// <reference path="../LoadResManager.ts" />
var fcc;
/// <reference path="../../Config/SlotConfigManager.ts" />
/// <reference path="../../Error/Enum/ErrorType.ts" />
/// <reference path="../../Error/ErrorManager.ts" />
/// <reference path="../ILoad/ALoadScriptType.ts" />
/// <reference path="../LoadResManager.ts" />
(function (fcc) {
    var ScriptLoad = /** @class */ (function (_super) {
        __extends(ScriptLoad, _super);
        function ScriptLoad(scriptName, type, url) {
            var _this = _super.call(this, scriptName, type, url) || this;
            _this.linkElem = document.createElement("script");
            return _this;
        }
        ScriptLoad.prototype.loadScript = function () {
            var url = fcc.SlotConfigManager.instance.externallyLoadURL + "/" + this.url + "/" + this.scriptName + ".js";
            if (fcc.LoadResManager.instance.scriptRes.has(url)) {
                fcc.ErrorManager.instance.executeError(fcc.type.ErrorType.LOAD_FW, "\u8ACB\u52FF\u91CD\u8907\u52A0\u8F09\u5DF2\u6709\u7684\u5916\u90E8\u8173\u672C : " + url);
            }
            this.linkElem.type = this.type;
            this.linkElem.src = url;
            fcc.ABS.ALoadScriptType.head.appendChild(this.linkElem);
            fcc.LoadResManager.instance.scriptRes.add(url);
        };
        return ScriptLoad;
    }(fcc.ABS.ALoadScriptType));
    fcc.ScriptLoad = ScriptLoad;
})(fcc || (fcc = {}));
/// <reference path="../../Error/Enum/ErrorType.ts" />
/// <reference path="../../Error/ErrorManager.ts" />
/// <reference path="../../Global/Util.ts" />
var fcc;
/// <reference path="../../Error/Enum/ErrorType.ts" />
/// <reference path="../../Error/ErrorManager.ts" />
/// <reference path="../../Global/Util.ts" />
(function (fcc) {
    var ABS;
    (function (ABS) {
        /**
         * @Author XIAO-LI-PIN
         * @Description (抽象類)載入各類cocos資源
         * @Date 2021-04-14 下午 20:24
         * @Version 1.1
         */
        var ALoadType = /** @class */ (function () {
            function ALoadType(dataName, type, url, folder) {
                this.type = type; //當前要獲取的資源類型
                this.url = url; //獲取的地址
                this.dataName = dataName; //要拿取資源的key
                this.folder = folder; //父資料夾名稱,默認 resources
                this.beforeProgress = 0; //當前上次的載入進度
                this.assetBundle = cc.assetManager.getBundle(this.folder);
            }
            /**
             * 加載資源方法
             */
            ALoadType.prototype.loadResources = function () {
                if (this.type !== cc.SceneAsset) {
                    this.assetBundle
                        .loadDir(this.url, this.type, this.loadResProgress.bind(this), this.loadResCallBack.bind(this));
                }
                else {
                    //載入scene資源,如果名稱錯誤會scene名稱錯誤會無法拿取資源
                    //載入scene資源,無須URL地址,但是2.4.X需要放在Resource底下
                    this.assetBundle
                        .loadScene(this.dataName, cc.SceneAsset, this.loadResProgress.bind(this), this.loadResCallBack.bind(this));
                }
            };
            /**
             * 回傳該加載的資源
             * @param {Error} error - 錯誤訊息
             * @param {[] | cc.SceneAsset} assets - 資源
             * @private
             */
            ALoadType.prototype.loadResCallBack = function (error, assets) {
                if (error) {
                    fcc.ErrorManager.instance.executeError(fcc.type.ErrorType.LOAD_FW, error);
                }
                else if (!(assets instanceof cc.SceneAsset) && assets.length == 0) {
                    fcc.ErrorManager.instance.executeError(fcc.type.ErrorType.LOAD_FW, "\u7121\u8F09\u5165\u4EFB\u4F55\u8CC7\u6E90 " + this.url + " ");
                }
                this.setResToManager(this.dataName, assets);
            };
            /**
             * 回傳當前載入進度
             * @param {number} complete - 以載入完畢的數量
             * @param {number} TotalAmount - 總數量
             * @private
             */
            ALoadType.prototype.loadResProgress = function (complete, TotalAmount) {
                //獲取百分比
                var progress = fcc.global.Util.roundDown((complete / TotalAmount), 2);
                if (progress > this.beforeProgress) {
                    //不從這裡判斷狀態,目的解決異步操作
                    //當資源都載入到LoadManager時才回傳以載入完成的狀態
                    if (progress >= 1) {
                        progress = 0.99;
                    }
                    //回傳上次與這次之間增加了多少進度
                    this.updateManagerState(this.dataName, progress, (progress - this.beforeProgress));
                    this.beforeProgress = progress;
                }
            };
            /**
             * 載入完成後回調
             * @protected
             */
            ALoadType.prototype.updateProgressEnd = function () {
                //目的解決異步操作
                //當資源都載入到LoadManager時才回傳以載入完成的狀態
                if (this.folder === "resources") {
                    fcc.LoadResManager.instance.initialLoadState.set(this.dataName, 1);
                    fcc.LoadResManager.instance.loadMainEventCallback(this.dataName, 0.01, 1);
                }
                else {
                    fcc.LoadResManager.instance.secondaryLoadState.set(this.dataName, 1);
                    fcc.LoadResManager.instance.loadSecondaryEventCallback(this.dataName, 1);
                }
            };
            /**
             * 更新當前進度
             * @param {string} key - 該資源名稱
             * @param {number} state - 當前進度
             * @param {number} update - 更上次進度比起,新增了多少進度
             * @protected
             */
            ALoadType.prototype.updateManagerState = function (key, state, update) {
                if (this.folder === "resources") {
                    fcc.LoadResManager.instance.initialLoadState.set(key, state);
                    fcc.LoadResManager.instance.loadMainEventCallback(key, update, state);
                }
                else {
                    fcc.LoadResManager.instance.secondaryLoadState.set(key, state);
                    fcc.LoadResManager.instance.loadSecondaryEventCallback(key, state);
                }
            };
            return ALoadType;
        }());
        ABS.ALoadType = ALoadType;
    })(ABS = fcc.ABS || (fcc.ABS = {}));
})(fcc || (fcc = {}));
/// <reference path="../../Error/Enum/ErrorType.ts" />
/// <reference path="../../Error/ErrorManager.ts" />
/// <reference path="../ILoad/ALoadType.ts" />
/// <reference path="../LoadResManager.ts" />
var fcc;
/// <reference path="../../Error/Enum/ErrorType.ts" />
/// <reference path="../../Error/ErrorManager.ts" />
/// <reference path="../ILoad/ALoadType.ts" />
/// <reference path="../LoadResManager.ts" />
(function (fcc) {
    /**
     * @Author XIAO-LI-PIN
     * @Description 載入圖片資源
     * @Date 2021-04-14 下午 20:24
     * @Version 1.1
     */
    var ImgLoad = /** @class */ (function (_super) {
        __extends(ImgLoad, _super);
        function ImgLoad(dataName, type, url, folder) {
            return _super.call(this, dataName, type, url, folder) || this;
        }
        /**
         * 將資源保存在管理器中
         * @param {string} dataName - 自訂義該資源名稱
         * @param {cc.SpriteAtlas} asset - 資源
         * @protected
         */
        ImgLoad.prototype.setResToManager = function (dataName, asset) {
            var e_2, _a;
            var spriteMap = new Map();
            try {
                for (var _b = __values(asset[0].getSpriteFrames()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var sprite = _c.value;
                    //將鍵值轉小寫,如果有使用grid key 作為搜尋資源
                    //將無條件將 key 轉成 純數字 例如 : symbol0~10 = 0~10
                    var lowerCase = dataName.toLowerCase();
                    if (lowerCase.match("grid")) {
                        var gridName = sprite.name.replace(/[a-z A-Z]/g, '');
                        spriteMap.set(gridName, sprite);
                    }
                    else {
                        var spriteName = sprite.name;
                        spriteMap.set(spriteName, sprite);
                    }
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_2) throw e_2.error; }
            }
            fcc.LoadResManager.instance.imgRes.set(dataName, spriteMap);
            //目的解決異步操作
            //當資源都載入到LoadManager時才回傳以載入完成的狀態
            this.updateProgressEnd();
        };
        return ImgLoad;
    }(fcc.ABS.ALoadType));
    fcc.ImgLoad = ImgLoad;
})(fcc || (fcc = {}));
/// <reference path="../../Error/Enum/ErrorType.ts" />
/// <reference path="../../Error/ErrorManager.ts" />
/// <reference path="../ILoad/ALoadType.ts" />
/// <reference path="../LoadResManager.ts" />
var fcc;
/// <reference path="../../Error/Enum/ErrorType.ts" />
/// <reference path="../../Error/ErrorManager.ts" />
/// <reference path="../ILoad/ALoadType.ts" />
/// <reference path="../LoadResManager.ts" />
(function (fcc) {
    /**
     * @Author XIAO-LI-PIN
     * @Description 載入音樂資源
     * @Date 2021-04-14 下午 20:24
     * @Version 1.1
     */
    var MusicLoad = /** @class */ (function (_super) {
        __extends(MusicLoad, _super);
        function MusicLoad(dataName, type, url, folder) {
            return _super.call(this, dataName, type, url, folder) || this;
        }
        /**
         * 將資源保存在管理器中
         * @param {string} dataName - 自訂義該資源名稱
         * @param {cc.AudioClip} asset - 資源
         * @protected
         */
        MusicLoad.prototype.setResToManager = function (dataName, asset) {
            var e_3, _a;
            try {
                //拿取音樂檔名,當作鍵值
                for (var asset_1 = __values(asset), asset_1_1 = asset_1.next(); !asset_1_1.done; asset_1_1 = asset_1.next()) {
                    var value = asset_1_1.value;
                    var key = value.name;
                    if (fcc.LoadResManager.instance.musicRes.has(key))
                        fcc.ErrorManager.instance.executeError(fcc.type.ErrorType.LOAD_FW, key + " \u9375\u503C\u91CD\u8907,\u8ACB\u6AA2\u67E5\u8A72\u97F3\u6A02\u8CC7\u6E90\u662F\u5426\u5DF2\u52A0\u8F09\u904E");
                    fcc.LoadResManager.instance.musicRes.set(key, value);
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (asset_1_1 && !asset_1_1.done && (_a = asset_1.return)) _a.call(asset_1);
                }
                finally { if (e_3) throw e_3.error; }
            }
            //目的解決異步操作
            //當資源都載入到LoadManager時才回傳以載入完成的狀態
            this.updateProgressEnd();
        };
        return MusicLoad;
    }(fcc.ABS.ALoadType));
    fcc.MusicLoad = MusicLoad;
})(fcc || (fcc = {}));
/// <reference path="../../Error/Enum/ErrorType.ts" />
/// <reference path="../../Error/ErrorManager.ts" />
/// <reference path="../ILoad/ALoadType.ts" />
/// <reference path="../LoadResManager.ts" />
var fcc;
/// <reference path="../../Error/Enum/ErrorType.ts" />
/// <reference path="../../Error/ErrorManager.ts" />
/// <reference path="../ILoad/ALoadType.ts" />
/// <reference path="../LoadResManager.ts" />
(function (fcc) {
    /**
     * @Author XIAO-LI-PIN
     * @Description 載入圖片資源
     * @Date 2021-04-14 下午 20:24
     * @Version 1.1
     */
    var PrefabLoad = /** @class */ (function (_super) {
        __extends(PrefabLoad, _super);
        function PrefabLoad(dataName, type, url, folder) {
            return _super.call(this, dataName, type, url, folder) || this;
        }
        /**
         * 將資源保存在管理器中
         * @param {string} dataName - 自訂義該資源名稱
         * @param {cc.AudioClip} asset - 資源
         * @protected
         */
        PrefabLoad.prototype.setResToManager = function (dataName, asset) {
            var e_4, _a;
            try {
                for (var asset_2 = __values(asset), asset_2_1 = asset_2.next(); !asset_2_1.done; asset_2_1 = asset_2.next()) {
                    var prefab = asset_2_1.value;
                    if (fcc.LoadResManager.instance.prefabRes.has(prefab.name)) {
                        fcc.ErrorManager.instance.executeError(fcc.type.ErrorType.LOAD_FW, prefab.name + " prefab\u540D\u7A31\u91CD\u8907,\u8ACB\u6AA2\u67E5\u662F\u5426\u6709\u76F8\u540C\u540D\u7A31prefab");
                        return;
                    }
                    else {
                        fcc.LoadResManager.instance.prefabRes.set(prefab.name, prefab);
                    }
                }
            }
            catch (e_4_1) { e_4 = { error: e_4_1 }; }
            finally {
                try {
                    if (asset_2_1 && !asset_2_1.done && (_a = asset_2.return)) _a.call(asset_2);
                }
                finally { if (e_4) throw e_4.error; }
            }
            //目的解決異步操作
            //當資源都載入到LoadManager時才回傳以載入完成的狀態
            this.updateProgressEnd();
        };
        return PrefabLoad;
    }(fcc.ABS.ALoadType));
    fcc.PrefabLoad = PrefabLoad;
})(fcc || (fcc = {}));
/// <reference path="../../Error/Enum/ErrorType.ts" />
/// <reference path="../../Error/ErrorManager.ts" />
/// <reference path="../ILoad/ALoadType.ts" />
/// <reference path="../LoadResManager.ts" />
var fcc;
/// <reference path="../../Error/Enum/ErrorType.ts" />
/// <reference path="../../Error/ErrorManager.ts" />
/// <reference path="../ILoad/ALoadType.ts" />
/// <reference path="../LoadResManager.ts" />
(function (fcc) {
    /**
     * @Author XIAO-LI-PIN
     * @Description 載入場景資源
     * @Date 2021-04-14 下午 20:24
     * @Version 1.1
     */
    var SceneLoad = /** @class */ (function (_super) {
        __extends(SceneLoad, _super);
        function SceneLoad(dataName, type, url, folder) {
            return _super.call(this, dataName, type, url, folder) || this;
        }
        /**
         * 將資源保存在管理器中
         * @param {string} dataName - 自訂義該資源名稱
         * @param {cc.AudioClip} asset - 資源
         * @protected
         */
        SceneLoad.prototype.setResToManager = function (dataName, asset) {
            if (fcc.LoadResManager.instance.scriptRes.has(dataName))
                fcc.ErrorManager.instance.executeError(fcc.type.ErrorType.LOAD_FW, dataName + " \u9375\u503C\u91CD\u8907,\u8ACB\u6AA2\u67E5\u8A72\u8CC7\u6E90\u662F\u5426\u5DF2\u52A0\u8F09\u904E");
            fcc.LoadResManager.instance.sceneRes.set(dataName, asset);
            //目的解決異步操作
            //當資源都載入到LoadManager時才回傳以載入完成的狀態
            this.updateProgressEnd();
        };
        return SceneLoad;
    }(fcc.ABS.ALoadType));
    fcc.SceneLoad = SceneLoad;
})(fcc || (fcc = {}));
/// <reference path="../../Error/Enum/ErrorType.ts" />
/// <reference path="../../Error/ErrorManager.ts" />
/// <reference path="../ILoad/ALoadType.ts" />
/// <reference path="../LoadResManager.ts" />
var fcc;
/// <reference path="../../Error/Enum/ErrorType.ts" />
/// <reference path="../../Error/ErrorManager.ts" />
/// <reference path="../ILoad/ALoadType.ts" />
/// <reference path="../LoadResManager.ts" />
(function (fcc) {
    /**
     * @Author XIAO-LI-PIN
     * @Description 載入骨骼动画資源
     * @Date 2021-04-14 下午 20:24
     * @Version 1.1
     */
    var SpineLoad = /** @class */ (function (_super) {
        __extends(SpineLoad, _super);
        function SpineLoad(dataName, type, url, folder) {
            return _super.call(this, dataName, type, url, folder) || this;
        }
        /**
         * 將資源保存在管理器中
         * @param {string} dataName - 自訂義該資源名稱
         * @param {cc.SkeletonData} asset - 資源
         * @protected
         */
        SpineLoad.prototype.setResToManager = function (dataName, asset) {
            var e_5, _a, e_6, _b;
            if (fcc.LoadResManager.instance.spineRes.has(dataName)) {
                fcc.ErrorManager.instance.executeError(fcc.type.ErrorType.LOAD_FW, "請檢察資源是否以載入過,鍵值重複");
            }
            fcc.LoadResManager.instance.spineRes.set(dataName, asset[0]);
            var lowerCase = dataName.toLowerCase();
            var checkGrid = lowerCase.match("grid");
            try {
                for (var asset_3 = __values(asset), asset_3_1 = asset_3.next(); !asset_3_1.done; asset_3_1 = asset_3.next()) {
                    var spine = asset_3_1.value;
                    var spineNames = Object.keys(spine.skeletonJson.animations);
                    var spineToMap = new Map();
                    try {
                        //取出spine動畫名稱
                        for (var spineNames_1 = (e_6 = void 0, __values(spineNames)), spineNames_1_1 = spineNames_1.next(); !spineNames_1_1.done; spineNames_1_1 = spineNames_1.next()) {
                            var spineName = spineNames_1_1.value;
                            //檢查是否有grid關鍵字,將把取spineName 的key 更換為數字
                            if (checkGrid) {
                                var spineNameToNumber = spineName.replace(/[^0-9]/ig, '');
                                //如果動畫內包含不含數字的的動畫名,將直接將動畫名整個保存成key
                                if (spineNameToNumber === "") {
                                    spineToMap.set(spineName, spineName);
                                }
                                else {
                                    if (spineToMap.has(spineNameToNumber)) {
                                        fcc.ErrorManager.instance.executeError(fcc.type.ErrorType.LOAD_FW, spineName + " spine\u52D5\u756B\u53D6number\u6709\u8AA4,\u8ACB\u6AA2\u67E5\u8A72spine Animetion\u662F\u5426\u6709\u91CD\u8907\u6578\u5B57\u60C5\u6CC1");
                                    }
                                    spineToMap.set(spineNameToNumber, spineName);
                                }
                            }
                            else {
                                spineToMap.set(spineName, spineName);
                            }
                        }
                    }
                    catch (e_6_1) { e_6 = { error: e_6_1 }; }
                    finally {
                        try {
                            if (spineNames_1_1 && !spineNames_1_1.done && (_b = spineNames_1.return)) _b.call(spineNames_1);
                        }
                        finally { if (e_6) throw e_6.error; }
                    }
                    //TODO:尚未想到要把grid動換資源放在哪
                }
            }
            catch (e_5_1) { e_5 = { error: e_5_1 }; }
            finally {
                try {
                    if (asset_3_1 && !asset_3_1.done && (_a = asset_3.return)) _a.call(asset_3);
                }
                finally { if (e_5) throw e_5.error; }
            }
            //目的解決異步操作
            //當資源都載入到LoadManager時才回傳以載入完成的狀態
            this.updateProgressEnd();
        };
        return SpineLoad;
    }(fcc.ABS.ALoadType));
    fcc.SpineLoad = SpineLoad;
})(fcc || (fcc = {}));
/// <reference path="../ILoad/ALoadType.ts" />
/// <reference path="../LoadResManager.ts" />
var fcc;
/// <reference path="../ILoad/ALoadType.ts" />
/// <reference path="../LoadResManager.ts" />
(function (fcc) {
    /**
     * @Author XIAO-LI-PIN
     * @Description 載入文本資源,目前只能載入.CSV 檔案
     * @Date 2021-04-14 下午 20:24
     * @Version 1.1
     */
    var TextLoad = /** @class */ (function (_super) {
        __extends(TextLoad, _super);
        function TextLoad(dataName, type, url, folder) {
            return _super.call(this, dataName, type, url, folder) || this;
        }
        /**
         *  目前只能傳入 .CSV 檔案,目前無從判斷該檔案副檔名
         *  因此需自行檢查回傳資料是否正確
         * @param {string} dataName - 自訂義該資源名稱
         * @param {cc.SkeletonData} asset - 資源
         * @protected
         */
        TextLoad.prototype.setResToManager = function (dataName, asset) {
            var e_7, _a;
            //清除回車
            var textArray = asset[0]["text"].split(/[\s\n]/);
            var textMap = new Map();
            try {
                for (var textArray_1 = __values(textArray), textArray_1_1 = textArray_1.next(); !textArray_1_1.done; textArray_1_1 = textArray_1.next()) {
                    var texts = textArray_1_1.value;
                    //切割 CSV特有的 ,
                    var array = texts.split(',');
                    //你可以在第三格放入註解,我只抓前兩格資料
                    var key = array[0];
                    var value = array[1];
                    if (key == "") {
                        continue;
                    }
                    //清除所有包含的 "" '' 等特殊符號
                    var processingvalue = value.replace(/['"]/g, '');
                    textMap.set(key, processingvalue);
                }
            }
            catch (e_7_1) { e_7 = { error: e_7_1 }; }
            finally {
                try {
                    if (textArray_1_1 && !textArray_1_1.done && (_a = textArray_1.return)) _a.call(textArray_1);
                }
                finally { if (e_7) throw e_7.error; }
            }
            fcc.LoadResManager.instance.readFileRes.set(dataName, textMap);
            //目的解決異步操作
            //當資源都載入到LoadManager時才回傳以載入完成的狀態
            this.updateProgressEnd();
        };
        return TextLoad;
    }(fcc.ABS.ALoadType));
    fcc.TextLoad = TextLoad;
})(fcc || (fcc = {}));
/// <reference path="../Error/Enum/ErrorType.ts" />
/// <reference path="../Error/ErrorManager.ts" />
/// <reference path="./Enum/LoadEnum.ts" />
/// <reference path="./LoadScriptType/CSSLoad.ts" />
/// <reference path="./LoadScriptType/ScriptLoad.ts" />
/// <reference path="./LoadType/ImgLoad.ts" />
/// <reference path="./LoadType/MusicLoad.ts" />
/// <reference path="./LoadType/PrefabLoad.ts" />
/// <reference path="./LoadType/SceneLoad.ts" />
/// <reference path="./LoadType/SpineLoad.ts" />
/// <reference path="./LoadType/TextLoad.ts" />
var fcc;
/// <reference path="../Error/Enum/ErrorType.ts" />
/// <reference path="../Error/ErrorManager.ts" />
/// <reference path="./Enum/LoadEnum.ts" />
/// <reference path="./LoadScriptType/CSSLoad.ts" />
/// <reference path="./LoadScriptType/ScriptLoad.ts" />
/// <reference path="./LoadType/ImgLoad.ts" />
/// <reference path="./LoadType/MusicLoad.ts" />
/// <reference path="./LoadType/PrefabLoad.ts" />
/// <reference path="./LoadType/SceneLoad.ts" />
/// <reference path="./LoadType/SpineLoad.ts" />
/// <reference path="./LoadType/TextLoad.ts" />
(function (fcc) {
    /**
     * @Author XIAO-LI-PIN
     * @Description 載入各類資源工廠
     * @Date 2021-04-14 下午 20:24
     * @Version 1.1
     */
    var LoadTypeFactory = /** @class */ (function () {
        function LoadTypeFactory(loadResManager, configManager) {
            this.assetMethod = new Array();
            this.configManager = configManager;
            this.loadResManager = loadResManager;
        }
        /**
         * 次資源加載
         * @param {string} dataName - 檔案名稱
         * @param {fcc.type.LoadType} type - 檔案類型
         * @param {string} url - 檔案位置
         * @return {Promise<void>}
         */
        LoadTypeFactory.prototype.loadBundle = function (dataName, type, url) {
            var _this = this;
            if (this.assetBundle)
                return;
            this.promise = new Promise(function () {
            });
            //加載Bundle資源時須先加載Bundle清單
            return new Promise(function (resolve) {
                if (!_this.isLoadBundle) {
                    _this.isLoadBundle = true;
                    cc.assetManager.loadBundle("secondaryRes", function (error, bundle) {
                        if (error) {
                            fcc.ErrorManager.instance.executeError(fcc.type.ErrorType.LOAD_FW, error);
                        }
                        _this.assetBundle = bundle;
                        resolve();
                    });
                }
                else if (!_this.assetBundle && _this.isLoadBundle) {
                    _this.assetMethod.push(_this.checkLoadType.bind(_this, dataName, type, url, "secondaryRes"));
                }
            });
        };
        /**
         * 檢測當前Type,做各自對應的加載動作
         * @param dataName - 自訂義資源名稱
         * @param type - 資源類型
         * @param url - 資源位置
         */
        LoadTypeFactory.prototype.executeLoad = function (dataName, type, url) {
            this.checkLoadType(dataName, type, url, "resources");
        };
        /**
         * 執行Bundle載入動作
         * @param dataName - 自訂義資源名稱
         * @param type - 資源類型
         * @param url - 資源位置
         */
        LoadTypeFactory.prototype.executeLoadBundle = function (dataName, type, url) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.loadBundle(dataName, type, url)];
                        case 1:
                            _a.sent();
                            this.checkLoadType(dataName, type, url, "secondaryRes");
                            if (this.assetMethod.length != 0) {
                                while (this.assetMethod.length) {
                                    this.assetMethod[0]();
                                    this.assetMethod.shift();
                                }
                            }
                            return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * 確認當前資源類型,給相對應class 處理
         * @param {string} dataName - 自訂義資源名稱
         * @param {fcc.type.LoadType} type - 資源類型
         * @param {string} url - 資源位置
         * @param {string} folder - 資源父類資料夾,默認 resource
         * @private
         */
        LoadTypeFactory.prototype.checkLoadType = function (dataName, type, url, folder) {
            switch (type) {
                case fcc.type.LoadType.img:
                    new fcc.ImgLoad(dataName, cc.SpriteAtlas, url, folder).loadResources();
                    break;
                case fcc.type.LoadType.music:
                    new fcc.MusicLoad(dataName, cc.AudioClip, url, folder).loadResources();
                    break;
                case fcc.type.LoadType.prefab:
                    new fcc.PrefabLoad(dataName, cc.Prefab, url, folder).loadResources();
                    break;
                case fcc.type.LoadType.spine:
                    new fcc.SpineLoad(dataName, sp.SkeletonData, url, folder).loadResources();
                    break;
                case fcc.type.LoadType.scene:
                    new fcc.SceneLoad(dataName, cc.SceneAsset, null, folder).loadResources();
                    break;
                case fcc.type.LoadType.text:
                    new fcc.TextLoad(dataName, cc.TextAsset, url, folder).loadResources();
                    break;
                default:
                    fcc.ErrorManager.instance.executeError(fcc.type.ErrorType.TYPE_FW, "資源類型錯誤,尚無此類型載入方法");
            }
        };
        /**
         * 加載外部腳本
         * @param name - 檔名
         * @param type - 檔案類型
         * @param url - url地址
         */
        LoadTypeFactory.prototype.executeLoadExternalScript = function (name, type, url) {
            switch (type) {
                case fcc.type.LoadType.css:
                    new fcc.CSSLoad(name, "text/css", url).loadScript();
                    break;
                case fcc.type.LoadType.script:
                    new fcc.ScriptLoad(name, "text/javascript", url).loadScript();
                    break;
                default:
                    fcc.ErrorManager.instance.executeError(fcc.type.ErrorType.TYPE_FW, "LoadType 無法偵測");
            }
        };
        return LoadTypeFactory;
    }());
    fcc.LoadTypeFactory = LoadTypeFactory;
})(fcc || (fcc = {}));
/// <reference path="../Error/Enum/ErrorType.ts" />
/// <reference path="../Error/ErrorManager.ts" />
/// <reference path="./Enum/LoadEnum.ts" />
/// <reference path="./ILoad/ILoadFactory.ts" />
/// <reference path="./ILoad/ILoadResManager.ts" />
/// <reference path="./LoadTypeFactory.ts" />
var fcc;
/// <reference path="../Error/Enum/ErrorType.ts" />
/// <reference path="../Error/ErrorManager.ts" />
/// <reference path="./Enum/LoadEnum.ts" />
/// <reference path="./ILoad/ILoadFactory.ts" />
/// <reference path="./ILoad/ILoadResManager.ts" />
/// <reference path="./LoadTypeFactory.ts" />
(function (fcc) {
    /**
     * @Author XIAO-LI-PIN
     * @Description 處理個別類型資源載入
     * @Date 2021-04-14 下午 20:24
     * @Version 1.1
     */
    var LoadTypeHandler = /** @class */ (function () {
        function LoadTypeHandler(loadResManager, configManager) {
            this.loadResManager = loadResManager;
            this.factory = new fcc.LoadTypeFactory(loadResManager, configManager);
        }
        /**
         * 檢測當前Type,做各自對應的加載動作
         * @param name
         * @param type
         * @param url
         */
        LoadTypeHandler.prototype.executeLoad = function (name, type, url) {
            this.checkRepeatTheName(name);
            this.loadResManager.initialLoadState.set(name, null);
            this.factory.executeLoad(name, type, url);
        };
        /**
         * 執行Bundle載入動作
         * @param name
         * @param type
         * @param url
         */
        LoadTypeHandler.prototype.executeLoadBundle = function (name, type, url) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.checkRepeatTheName(name);
                            this.loadResManager.secondaryLoadState.set(name, null);
                            return [4 /*yield*/, this.factory.executeLoadBundle(name, type, url)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * 檢查重複命名
         * @param {string} name
         * @private
         */
        LoadTypeHandler.prototype.checkRepeatTheName = function (name) {
            if (this.loadResManager.initialLoadState.has(name)) {
                fcc.ErrorManager.instance.executeError(fcc.type.ErrorType.LOAD_FW, name + " \u6B64(\u4E3B\u8CC7\u6E90)\u5DF2\u8F09\u5165\u904E\u4E86,\u6216\u540D\u7A31\u91CD\u8907,\u8ACB\u6AA2\u5BDF");
            }
            if (this.loadResManager.secondaryLoadState.has(name)) {
                fcc.ErrorManager.instance.executeError(fcc.type.ErrorType.LOAD_FW, name + " \u6B64(\u6B21\u8CC7\u6E90)\u5DF2\u8F09\u5165\u904E\u4E86,\u6216\u540D\u7A31\u91CD\u8907,\u8ACB\u6AA2\u5BDF");
            }
        };
        /**
         * 加載外部腳本
         * @param {string} name
         * @param {LoadType} type
         * @param {string} url
         */
        LoadTypeHandler.prototype.executeLoadExternalScript = function (name, type, url) {
            this.factory.executeLoadExternalScript(name, type, url);
        };
        return LoadTypeHandler;
    }());
    fcc.LoadTypeHandler = LoadTypeHandler;
})(fcc || (fcc = {}));
/// <reference path="../Error/Enum/ErrorType.ts" />
/// <reference path="../Error/ErrorManager.ts" />
/// <reference path="../Global/Util.ts" />
/// <reference path="./Enum/LoadEnum.ts" />
/// <reference path="./ILoad/ILoadResManager.ts" />
/// <reference path="./LoadTypeHandler.ts" />
var fcc;
/// <reference path="../Error/Enum/ErrorType.ts" />
/// <reference path="../Error/ErrorManager.ts" />
/// <reference path="../Global/Util.ts" />
/// <reference path="./Enum/LoadEnum.ts" />
/// <reference path="./ILoad/ILoadResManager.ts" />
/// <reference path="./LoadTypeHandler.ts" />
(function (fcc) {
    /**
     * @Author XIAO-LI-PIN
     * @Description 資源管理者 : 加載資源,保存資源,或取當前加載進度
     * @Date 2021-04-14 下午 20:24
     * @Version 1.1
     */
    var LoadResManager = /** @class */ (function () {
        function LoadResManager(configManager) {
            this.configManager = configManager;
            this.loadTypeHandler = new fcc.LoadTypeHandler(this, configManager); //配發要用哪個class執行載入動作
            this._initialLoadState = new Map(); //主加載狀態
            this._secondaryLoadState = new Map(); //次加載狀態
            this._imgRes = new Map(); //圖片
            this._spineRes = new Map(); //骨架
            this._readFileRes = new Map(); //text文件
            this._prefabRes = new Map(); //預載體
            this.callFun = new Map(); //callback方法
            this._musicRes = new Map(); //音樂
            this._scriptRes = new Set(); //外部腳本保存URL地址,單存判斷是否重複加載
            this._sceneRes = new Map(); //保存scene場場景資源
            this.count = 0; //初始要載入數量
            this.allProgress = 0; //初始加載進度
            this.beforeProgress = 0; //初始上次加載的進度
            this.allProgressEndCount = 0; //因精準度問題,額外判斷是否所有資源都加載完畢
        }
        /**
         *  懶漢加載
         *  初始化,只讓一個專案產生一次該class
         */
        LoadResManager.setInstance = function (configManager) {
            if (!this._instance) {
                this._instance = new LoadResManager(configManager);
                fcc.loadMgr = this._instance;
            }
        };
        Object.defineProperty(LoadResManager, "instance", {
            /**
             *  獲取已經初始化的靜態實例class
             */
            get: function () {
                if (!this._instance) {
                    fcc.ErrorManager.instance.executeError(fcc.type.ErrorType.LOAD_FW, "該類尚未實例化");
                    return;
                }
                return this._instance;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * 主資源加載物件,監聽是否有callback,隨之返回該狀態
         * @param name
         * @param progress 又加載了多少
         * @param state 該物件加載到幾趴
         */
        LoadResManager.prototype.loadMainEventCallback = function (name, progress, state) {
            this.onlyResEventCallback(name, state);
            //當前總加載進度
            this.allProgress += progress / this.count;
            if (this.allProgress >= 1)
                this.allProgress = 0.99; //精度問題,不回傳1
            //因為浮點數精度,由這裏額外判斷所有資源已加載完畢時,加載進度等於1
            if (state == 1) {
                this.allProgressEndCount += 1;
                if (this.allProgressEndCount == this.count) {
                    this.allProgress = 1;
                }
            }
            //當前所有加載的總進度
            if (this.callFun.has(null)) {
                //預防多個重複進度回傳
                //判斷與上一個進度是一樣的話,將不執行回傳,等待有新進度近來
                var checkProgress = (fcc.global.Util.roundDown(this.beforeProgress, 2) ==
                    fcc.global.Util.roundDown(this.allProgress, 2));
                if (checkProgress) {
                    return;
                }
                else {
                    this.beforeProgress = this.allProgress;
                    //回傳當前進度,將精度將低為小數點後兩位
                    this.callFun.get(null)(fcc.global.Util.roundDown(this.allProgress, 2));
                    if (this.allProgress >= 1) {
                        //當全部加載完後,清除當前加載多少件東西的計數
                        this.count = 0;
                        //事件結束,清除該是保存的function
                        this.callFun.delete(null);
                    }
                }
            }
        };
        /**
         * 次資源加載物件,監聽是否有callback,隨之返回該狀態
         * 注意,該狀態無總資源監聽回傳事件
         * @param {string} name
         * @param {number} state
         */
        LoadResManager.prototype.loadSecondaryEventCallback = function (name, state) {
            this.onlyResEventCallback(name, state);
        };
        /**
         * 單一資源返回判斷,用戶是否有添加callback參數
         * @param {string} name
         * @param {number} state
         * @private
         */
        LoadResManager.prototype.onlyResEventCallback = function (name, state) {
            //如果有綁訂的回傳方法時,將回傳該資源當前的加載進度
            if (this.callFun.has(name)) {
                this.callFun.get(name)(state);
                if (state == 1) {
                    //事件結束,清除該是保存的function
                    this.callFun.delete(name);
                }
            }
        };
        /**
         * 加載該資料夾底下所有資源 注意: 需存放於 resources中
         * @param {string} name : 自訂義拿取資源時的名稱
         * @param {LoadType} type : 要獲取的資源類型
         * @param {string} url : 要獲取的資源位置
         * @param {boolean} isLanguageUsed : 是否要使用語系位置
         * @return {this}
         */
        LoadResManager.prototype.loadAsset = function (name, type, url, isLanguageUsed) {
            this.count += 1;
            if (isLanguageUsed) {
                url = url + "/" + this.configManager.language;
            }
            this.loadTypeHandler.executeLoad(name, type, url);
            return this;
        };
        /**
         * 加載 該 assetBundle 底下資源
         * 使用此方法者,加載狀態存放次加載中 secondaryLoadState
         * 注意:須於UI勾選配置為Bundle資料夾
         * @param {string} name : 自訂義拿取資源時的名稱
         * @param {LoadType} type : 要獲取的資源類型
         * @param {string} url : 要獲取的資源位置
         * @param {boolean} isLanguageUsed : 是否要使用語系位置
         */
        LoadResManager.prototype.loadBundle = function (name, type, url, isLanguageUsed) {
            if (isLanguageUsed) {
                url = url + "/" + this.configManager.language;
            }
            this.loadTypeHandler.executeLoadBundle(name, type, url).then();
            return this;
        };
        /**
         * 保存使用者要callback的方法,當有回傳進度時將透過 loadEventCallback方法回傳進度
         * @param callFun
         * @param resName
         */
        LoadResManager.prototype.callback = function (callFun, resName) {
            if (resName) {
                if (this.callFun.has(resName)) {
                    fcc.ErrorManager.instance.executeError(fcc.type.ErrorType.LOAD_FW, "如果拿取該資源進度,請勿重複callback");
                    return;
                }
                this.callFun.set(resName, callFun);
                return this;
            }
            else {
                if (this.callFun.has(null)) {
                    fcc.ErrorManager.instance.executeError(fcc.type.ErrorType.LOAD_FW, "如果拿取總進度,請勿在之前資源尚未加載完前,重複callback");
                    return;
                }
                this.callFun.set(null, callFun);
            }
        };
        /**
         * 查看該資源是否已加載完畢
         * @param name
         * @param isMainResources
         */
        LoadResManager.prototype.getLoadState = function (name, isMainResources) {
            if (isMainResources) {
                return this._initialLoadState.get(name) == 1;
            }
            else {
                return this._initialLoadState.get(name) == 1;
            }
        };
        /**
         * 加載外部腳本
         * @param name
         * @param type
         * @param url
         */
        LoadResManager.prototype.loadExternalScript = function (name, type, url) {
            this.loadTypeHandler.executeLoadExternalScript(name, type, url);
            return this;
        };
        /**
         * 重置
         */
        LoadResManager.prototype.reset = function () {
            LoadResManager._instance = null;
        };
        Object.defineProperty(LoadResManager.prototype, "initialLoadState", {
            //--------------------------------------getter------------------------------------
            get: function () {
                return this._initialLoadState;
            },
            //--------------------------------------setter------------------------------------
            set: function (value) {
                this._initialLoadState = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LoadResManager.prototype, "secondaryLoadState", {
            get: function () {
                return this._secondaryLoadState;
            },
            set: function (value) {
                this._secondaryLoadState = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LoadResManager.prototype, "imgRes", {
            get: function () {
                return this._imgRes;
            },
            set: function (value) {
                this._imgRes = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LoadResManager.prototype, "spineRes", {
            get: function () {
                return this._spineRes;
            },
            set: function (value) {
                this._spineRes = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LoadResManager.prototype, "readFileRes", {
            get: function () {
                return this._readFileRes;
            },
            set: function (value) {
                this._readFileRes = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LoadResManager.prototype, "prefabRes", {
            get: function () {
                return this._prefabRes;
            },
            set: function (value) {
                this._prefabRes = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LoadResManager.prototype, "musicRes", {
            get: function () {
                return this._musicRes;
            },
            set: function (value) {
                this._musicRes = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LoadResManager.prototype, "scriptRes", {
            get: function () {
                return this._scriptRes;
            },
            set: function (value) {
                this._scriptRes = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LoadResManager.prototype, "sceneRes", {
            get: function () {
                return this._sceneRes;
            },
            set: function (value) {
                this._sceneRes = value;
            },
            enumerable: false,
            configurable: true
        });
        return LoadResManager;
    }());
    fcc.LoadResManager = LoadResManager;
})(fcc || (fcc = {}));
/// <reference path="../../Error/Enum/ErrorType.ts" />
/// <reference path="../../Error/ErrorManager.ts" />
/// <reference path="../../Load/LoadResManager.ts" />
var fcc;
/// <reference path="../../Error/Enum/ErrorType.ts" />
/// <reference path="../../Error/ErrorManager.ts" />
/// <reference path="../../Load/LoadResManager.ts" />
(function (fcc) {
    var MusicStateType;
    (function (MusicStateType) {
        MusicStateType[MusicStateType["STOP"] = -1] = "STOP";
        MusicStateType[MusicStateType["PLAYING"] = 1] = "PLAYING";
        MusicStateType[MusicStateType["PAUSE"] = 2] = "PAUSE";
    })(MusicStateType || (MusicStateType = {}));
    /**
     * @Author XIAO-LI-PIN
     * @Description 音樂撥放|暫停控制器,跟音效類稍微不同,只保存當下一個MusicID
     * @Date 2021-04-14 下午 20:24
     * @Version 1.1
     */
    var MusicController = /** @class */ (function () {
        function MusicController() {
            this.musicID = null;
        }
        /**
         * 撥放背景音樂,並配合享元資料,作相對應的撥放模式處理
         * @param {string} name
         * @param {Map<string, any>} data
         */
        MusicController.prototype.play = function (name, data) {
            var volume = data.get("volume"); //音量
            var loop = data.get("loop"); //是否循環
            //獲取當前音樂撥放狀態,-1 無撥放 , 1 撥放中  2 暫停中
            var state = cc.audioEngine.getState(this.musicID);
            if (!fcc.LoadResManager.instance.musicRes.has(name)) {
                fcc.ErrorManager.instance.executeError(fcc.type.ErrorType.AUDIO_FW, name + " \u7121\u6B64\u8CC7\u6E90,\u8ACB\u6AA2\u5BDF\u8CC7\u6E90\u985E musicRes\u5167\u7684\u8CC7\u6E90\u662F\u5426\u932F\u8AA4");
                return;
            }
            //如果該音樂是暫停模式,回復撥放
            if (state == MusicStateType.PAUSE) {
                cc.audioEngine.resume(this.musicID);
                return;
            }
            //如果上一首背景音樂正在撥放,先暫停
            if (state == MusicStateType.PLAYING) {
                this.stop();
            }
            var audioClip = fcc.LoadResManager.instance.musicRes.get(name);
            var musicID = cc.audioEngine.playMusic(audioClip, loop);
            cc.audioEngine.setVolume(musicID, volume);
            this.musicID = musicID;
        };
        /**
         *停止背景音樂
         */
        MusicController.prototype.stop = function () {
            cc.audioEngine.setVolume(this.musicID, 0);
            cc.audioEngine.stop(this.musicID);
        };
        /**
         * 暫停背景音樂
         */
        MusicController.prototype.pause = function () {
            if (cc.audioEngine.getState(this.musicID) != cc.audioEngine.AudioState.PLAYING)
                return;
            cc.audioEngine.pause(this.musicID);
        };
        return MusicController;
    }());
    fcc.MusicController = MusicController;
})(fcc || (fcc = {}));
/// <reference path="../../Error/Enum/ErrorType.ts" />
/// <reference path="../../Error/ErrorManager.ts" />
/// <reference path="../../Load/LoadResManager.ts" />
/// <reference path="../Enum/AudioStateType.ts" />
var fcc;
/// <reference path="../../Error/Enum/ErrorType.ts" />
/// <reference path="../../Error/ErrorManager.ts" />
/// <reference path="../../Load/LoadResManager.ts" />
/// <reference path="../Enum/AudioStateType.ts" />
(function (fcc) {
    /**
     * @Author XIAO-LI-PIN
     * @Description 效果音效撥放|暫停控制器
     * @Date 2021-04-14 下午 20:24
     * @Version 1.1
     */
    var EffectController = /** @class */ (function () {
        function EffectController() {
            this.effectID = new Map();
        }
        /**
         * 撥放效果音效,並配合享元資料,作相對應的撥放模式處理
         * @param {string} name
         * @param {Map<string, any>} data : 撥放模式資料
         */
        EffectController.prototype.play = function (name, data) {
            var volume = data.get("volume"); //音量
            var canSuperimpose = data.get("canSuperimpose"); //可否疊加撥放
            var loop = data.get("loop"); //循環狀態
            var id = this.effectID.get(name); //該音樂ID
            var state;
            cc.audioEngine.getState(id) == cc.audioEngine.AudioState.ERROR ? state = false : state = true; //判斷該音樂是否在正撥放
            if (!fcc.LoadResManager.instance.musicRes.has(name)) {
                fcc.ErrorManager.instance.executeError(fcc.type.ErrorType.AUDIO_FW, name + " \u7121\u6B64\u8CC7\u6E90,\u8ACB\u6AA2\u5BDF\u8CC7\u6E90\u985E musicRes\u5167\u7684\u8CC7\u6E90\u662F\u5426\u932F\u8AA4");
                return;
            }
            if (canSuperimpose === fcc.type.AudioStateType.NOT_PLAYING && state)
                return; //如果當前正在撥放,將直接離開
            if (canSuperimpose === fcc.type.AudioStateType.CLEAR_TO_REPLAY && state) { //如果當前正在撥放,將直接停止正在撥放的音樂,並重新撥放
                cc.audioEngine.stop(id);
            }
            var audioClip = fcc.LoadResManager.instance.musicRes.get(name);
            var effID = cc.audioEngine.playEffect(audioClip, loop);
            cc.audioEngine.setVolume(effID, volume);
            this.effectID.set(name, effID);
        };
        /**
         * 停止該音樂,並清除該Map effectID
         * @param {string} name
         */
        EffectController.prototype.stop = function (name) {
            if (!this.effectID.has(name)) {
                return;
            }
            cc.audioEngine.stop(this.effectID.get(name));
            this.effectID.delete(name);
        };
        /**
         * 停止所有音效,並清除整個Map effectID
         */
        EffectController.prototype.stopAll = function () {
            var e_8, _a;
            try {
                for (var _b = __values(this.effectID.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    cc.audioEngine.stop(this.effectID.get(key));
                }
            }
            catch (e_8_1) { e_8 = { error: e_8_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_8) throw e_8.error; }
            }
            this.effectID.clear();
        };
        return EffectController;
    }());
    fcc.EffectController = EffectController;
})(fcc || (fcc = {}));
/// <reference path="./IAudio/IAudioFactory.ts" />
/// <reference path="./IAudio/IAudioManager.ts" />
/// <reference path="./AudioType/MusicController.ts" />
/// <reference path="./AudioType/EffectController.ts" />
/// <reference path="./Enum/AudioStateType.ts" />
var fcc;
/// <reference path="./IAudio/IAudioFactory.ts" />
/// <reference path="./IAudio/IAudioManager.ts" />
/// <reference path="./AudioType/MusicController.ts" />
/// <reference path="./AudioType/EffectController.ts" />
/// <reference path="./Enum/AudioStateType.ts" />
(function (fcc) {
    /**
     * @Author XIAO-LI-PIN
     * @Description 音樂工廠類,派發音樂事件
     * @Date 2021-05-13 上午 10:24
     * @Version 1.1
     */
    var AudioFactory = /** @class */ (function () {
        function AudioFactory(audioManager, configManager) {
            this.audioManager = audioManager; //雙向綁定
            this.configManager = configManager; //雙向綁定
            this.musicVolume = this.configManager.musicVolume; //初始音量
            this.effectVolume = this.configManager.effectVolume; //初始音量
            this.canSuperimpose = false; //初始無Loop的音樂是否可以疊加
            this.musicOnMute = this.configManager.isMusicOnMute; //初始音樂是否打開
            this.effectOnMute = this.configManager.isEffectOnMute; //初始效果音是否打開
            this.loop = false; //初始音樂循環
            this.musicData = new Map(); //初始享元模式的音樂
            this.effectData = new Map(); //初始享元模式的效果音效
            this.musicController = new fcc.MusicController(); //初始播放Music音樂類
            this.effectController = new fcc.EffectController(); //初始播放Effect音效類
            this.initializeData(); //初始化享元預設撥放模式
        }
        /**
         * 初始化享元預設撥放模式
         */
        AudioFactory.prototype.initializeData = function () {
            this.musicNormalData = new Map();
            this.effectNormalData = new Map();
            this.musicNormalData.set("volume", this.musicVolume);
            this.musicNormalData.set("loop", this.loop);
            this.effectNormalData.set("canSuperimpose", fcc.type.AudioStateType.CLEAR_TO_REPLAY);
            this.effectNormalData.set("volume", this.effectVolume);
            this.effectNormalData.set("loop", this.loop);
        };
        /**
         * 保存該背景音樂撥放模式設定
         * @param {string} name - 音樂檔名稱
         * @param {number} volume - 音量
         * @param {boolean} loop - 是否循環
         */
        AudioFactory.prototype.settingMusic = function (name, volume, loop) {
            if (volume === void 0) { volume = this.musicVolume; }
            if (loop === void 0) { loop = this.loop; }
            var data = new Map();
            data.set("volume", volume);
            data.set("loop", loop);
            this.musicData.set(name, data);
        };
        /**
         * 保存該效果音效撥放模式設定
         * @param {string} name -音樂檔名稱
         * @param {AudioStateType} canSuperimpose - 是否疊加撥放
         * @param {number} volume - 音量
         * @param {boolean} loop - 是否循環
         */
        AudioFactory.prototype.settingEffect = function (name, canSuperimpose, volume, loop) {
            if (canSuperimpose === void 0) { canSuperimpose = fcc.type.AudioStateType.NOT_PLAYING; }
            if (volume === void 0) { volume = this.musicVolume; }
            if (loop === void 0) { loop = this.loop; }
            var data = new Map();
            data.set("canSuperimpose", canSuperimpose);
            data.set("volume", volume);
            data.set("loop", loop);
            this.effectData.set(name, data);
        };
        /**
         * 撥放背景音樂
         * 如果拿取不到享元撥放資料,將拿取預設資料
         * @param {string} name - 音樂檔名
         */
        AudioFactory.prototype.musicPlay = function (name) {
            if (!name.trim())
                return; //檔名空值判斷
            if (this.audioManager.musicOnMute)
                return; //如果當前為靜音模式
            if (!this.musicData.has(name)) { //判斷是否該音樂有撥放共用資料
                this.musicData.set(name, this.musicNormalData); //保存預設資料
                this.musicController.play(name, this.musicNormalData);
            }
            else {
                this.musicController.play(name, this.musicData.get(name));
            }
        };
        /**
         * 撥放效果音效
         * 如果拿取不到享元撥放資料,將拿取預設資料
         * @param {string} name - 音樂檔名
         */
        AudioFactory.prototype.effectPlay = function (name) {
            if (!name.trim())
                return; //檔名空值判斷
            if (this.audioManager.effectOnMute)
                return; //如果當前為靜音模式
            if (!this.effectData.has(name)) { //判斷是否該音樂有撥放資料
                this.effectData.set(name, this.effectNormalData); //保存預設資料
                this.effectController.play(name, this.effectNormalData);
            }
            else {
                this.effectController.play(name, this.effectData.get(name));
            }
        };
        /**
         * 停止背景音樂
         */
        AudioFactory.prototype.musicStop = function () {
            this.musicController.stop();
        };
        /**
         * 暫停背景音樂
         */
        AudioFactory.prototype.musicPause = function () {
            this.musicController.pause();
        };
        /**
         * 停止效果音校
         * @param {string} name - 音樂檔名
         */
        AudioFactory.prototype.effectStop = function (name) {
            this.effectController.stop(name);
        };
        /**
         * 停止所有效果音效
         */
        AudioFactory.prototype.effectStopAll = function () {
            this.effectController.stopAll();
        };
        /**
         * 獲取該音樂撥放模式,如果返回NUll將照原預設
         * @param {string} name - 音樂檔名
         * @returns {Map<string, string | boolean | number>}
         */
        AudioFactory.prototype.getMusicState = function (name) {
            return this.musicData.get(name);
        };
        /**
         * 獲取該音效撥放模式,如果返回NUll將照原預設
         * @param {string} name - 音樂檔名
         * @returns {Map<string, string | boolean | number>}
         */
        AudioFactory.prototype.getEffectState = function (name) {
            return this.effectData.get(name);
        };
        return AudioFactory;
    }());
    fcc.AudioFactory = AudioFactory;
})(fcc || (fcc = {}));
/// <reference path="../Error/Enum/ErrorType.ts" />
/// <reference path="../Error/ErrorManager.ts" />
/// <reference path="./AudioFactory.ts" />
/// <reference path="./IAudio/IAudioManager.ts" />
/// <reference path="./Enum/AudioStateType.ts" />
/// <reference path="./Enum/AudioStateType.ts" />
var fcc;
/// <reference path="../Error/Enum/ErrorType.ts" />
/// <reference path="../Error/ErrorManager.ts" />
/// <reference path="./AudioFactory.ts" />
/// <reference path="./IAudio/IAudioManager.ts" />
/// <reference path="./Enum/AudioStateType.ts" />
/// <reference path="./Enum/AudioStateType.ts" />
(function (fcc) {
    /**
     * @Author XIAO-LI-PIN
     * @Description 音樂管理器,初始設定各音樂狀態,保存當前撥放音量
     * @Date 2021-05-13 上午 10:24
     * @Version 1.1
     */
    var AudioManager = /** @class */ (function () {
        function AudioManager(configManager) {
            this.configManager = configManager;
            this.factory = new fcc.AudioFactory(this, configManager);
            this._effectOnMute = this.configManager.isEffectOnMute;
            this._musicOnMute = this.configManager.isMusicOnMute;
        }
        /**
         *  懶漢加載
         *  初始化,只讓一個專案只有一次產生此class
         */
        AudioManager.setInstance = function (configManager) {
            if (!this._instance) {
                this._instance = new AudioManager(configManager);
                fcc.audioMgr = this._instance;
            }
        };
        Object.defineProperty(AudioManager, "instance", {
            /**
             *  獲取已經初始化的靜態實例class
             */
            get: function () {
                if (!this._instance) {
                    fcc.ErrorManager.instance.executeError(fcc.type.ErrorType.AUDIO_FW, "該類尚未實例化");
                    return;
                }
                return this._instance;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * 額外對該音樂做設定,可以不做設定,將會依照默認設定自動設定
         * ```
         *      預設參數:
         *          volume : 默認為 Config 內的音量參數
         *          loop : 默認 false
         * ```
         * @param {string} name - 音樂名稱
         * @param {number} volume - 音量 0~1
         * @param {boolean} loop - 是否重複撥放
         * @return {this}
         */
        AudioManager.prototype.settingMusic = function (name, volume, loop) {
            this.factory.settingMusic(name, volume, loop);
            return this;
        };
        /**
         * 額外對該音效做設定,你可以不做設定,將會依照默認設定自動設定
         * ```
         *      預設參數:
         *          canSuperimpose : fcc.type.AudioStateType.CLEAR_TO_REPLAY
         *          volume : 默認為 Config 內的音量參數
         *          loop :默認為 false
         * ```
         * @param {string} name : 音效檔名
         * @param {AudioStateType} canSuperimpose : 能否疊加
         * @param {number} volume : 音量 0~1
         * @param {boolean} loop : 是否重複撥放
         * @return {this}
         */
        AudioManager.prototype.settingEffect = function (name, canSuperimpose, volume, loop) {
            if (canSuperimpose === fcc.type.AudioStateType.SUPERIMPOSE && loop) {
                fcc.ErrorManager.instance.executeError(fcc.type.ErrorType.AUDIO_FW, name + " \u4F7F\u7528\u758A\u52A0\u6548\u679C\u6642\u4E0D\u5EFA\u8B70\u4F7F\u7528\u5FAA\u74B0\u64A5\u653E");
            }
            this.factory.settingEffect(name, canSuperimpose, volume, loop);
            return this;
        };
        /**
         * 撥放音樂,將會依照當初設定的參數進行播放
         * 若無發現可用參數設定,依照默認參數撥放
         * @param {string} name - 音樂檔名
         */
        AudioManager.prototype.musicPlay = function (name) {
            this.factory.musicPlay(name);
        };
        /**
         * 撥放音效,將會依照當初設定的參數進行播放
         * 若無發現可用參數設定,依照默認參數撥放
         * @param {string} name - 音效檔名
         */
        AudioManager.prototype.effectPlay = function (name) {
            this.factory.effectPlay(name);
        };
        /**
         * 停止音樂
         */
        AudioManager.prototype.musicStop = function () {
            this.factory.musicStop();
        };
        /**
         * 暫停音樂
         */
        AudioManager.prototype.musicPause = function () {
            this.factory.musicPause();
        };
        /**
         * 停止音效
         * @param {string} name - 音效檔名
         */
        AudioManager.prototype.effectStop = function (name) {
            this.factory.effectStop(name);
        };
        /**
         * 停止所有音效
         */
        AudioManager.prototype.effectStopAll = function () {
            this.factory.effectStopAll();
        };
        /**
         * 獲取撥放的狀態
         * ```
         *      return data:
         *          volume : number
         *          loop : boolean
         * ```
         * @param {string} name - 音效檔名
         * @return {Map<string, string | boolean | number>} - 撥放設定參數
         */
        AudioManager.prototype.getMusicState = function (name) {
            return this.factory.getMusicState(name);
        };
        /**
         * 獲取撥放的狀態
         * ```
         *      return data:
         *          volume : number
         *          canSuperimpose : fcc.type.AudioStateType
         *          loop : boolean
         * ```
         * @param {string} name - 音樂檔名
         * @return {Map<string, string | fcc.type.AudioStateType |boolean | number>} -
         */
        AudioManager.prototype.getEffectState = function (name) {
            return this.factory.getEffectState(name);
        };
        /**
         * 更新當前是否靜音模式
         * @return {boolean} 當前是否靜音
         */
        AudioManager.prototype.updateEffectOnMute = function () {
            this._effectOnMute = !this._effectOnMute;
            if (this._effectOnMute) {
                this.factory.effectStopAll();
            }
            return this._effectOnMute;
        };
        /**
         * 更新當前是否靜音模式
         * @return {boolean} 當前是否靜音
         */
        AudioManager.prototype.updateMusicOnMute = function () {
            this._musicOnMute = !this._musicOnMute;
            if (this._musicOnMute) {
                this.musicPause();
            }
            return this._musicOnMute;
        };
        Object.defineProperty(AudioManager.prototype, "effectOnMute", {
            /**
             * 當前是否靜音背景音樂
             * @returns {boolean}
             */
            get: function () {
                return this._effectOnMute;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AudioManager.prototype, "musicOnMute", {
            /**
             * 當前是否靜音效果音效
             * @returns {boolean}
             */
            get: function () {
                return this._musicOnMute;
            },
            enumerable: false,
            configurable: true
        });
        return AudioManager;
    }());
    fcc.AudioManager = AudioManager;
    /**
     * 裝飾器
     * 撥放背景音樂
     * @param name {string} : 音樂檔名
     * @returns {(target: any, key: string, descriptor: PropertyDescriptor) => void}
     * @constructor
     */
    function Music(name) {
        return function (target, key, descriptor) {
            descriptor.enumerable = true;
            var method = descriptor.value;
            descriptor.value = function () {
                var any = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    any[_i] = arguments[_i];
                }
                AudioManager.instance.musicPlay(name);
                return method.call.apply(method, __spreadArray([this], __read(any)));
            };
        };
    }
    fcc.Music = Music;
    /**
     * 裝飾器
     * 停止背景音樂
     * @returns {(target: any, key: string, descriptor: PropertyDescriptor) => void}
     * @constructor
     */
    function MusicStop() {
        return function (target, key, descriptor) {
            descriptor.enumerable = true;
            var method = descriptor.value;
            descriptor.value = function () {
                var any = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    any[_i] = arguments[_i];
                }
                AudioManager.instance.musicStop();
                return method.call.apply(method, __spreadArray([this], __read(any)));
            };
        };
    }
    fcc.MusicStop = MusicStop;
    /**
     * 裝飾器
     * 撥放效果音效
     * @param name[] {string} : 音樂檔名
     * @returns {(target: any, key: string, descriptor: PropertyDescriptor) => void}
     * @constructor
     */
    function Effect() {
        var name = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            name[_i] = arguments[_i];
        }
        return function (target, key, descriptor) {
            descriptor.enumerable = true;
            var method = descriptor.value;
            descriptor.value = function () {
                var any = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    any[_i] = arguments[_i];
                }
                name.forEach(function (name) {
                    AudioManager.instance.effectPlay(name);
                });
                return method.call.apply(method, __spreadArray([this], __read(any)));
            };
        };
    }
    fcc.Effect = Effect;
    /**
     * 裝飾器
     * 暫停效果音效
     * @param name[] {string} : 音樂檔名
     * @returns {(target: any, key: string, descriptor: PropertyDescriptor) => void}
     * @constructor
     */
    function EffectStop() {
        var name = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            name[_i] = arguments[_i];
        }
        return function (target, key, descriptor) {
            descriptor.enumerable = true;
            var method = descriptor.value;
            descriptor.value = function () {
                var any = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    any[_i] = arguments[_i];
                }
                name.forEach(function (name) {
                    AudioManager.instance.effectStop(name);
                });
                return method.call.apply(method, __spreadArray([this], __read(any)));
            };
        };
    }
    fcc.EffectStop = EffectStop;
})(fcc || (fcc = {}));
var fcc;
(function (fcc) {
    var CNY = {
        fontSize: 36,
        lineHeight: 46,
        textScale: {
            default: 1,
            title: 1.2,
            text: 0.8
        },
        fontFamily: "微軟正黑體"
    };
    var NTD = {
        fontSize: 36,
        lineHeight: 46,
        textScale: {
            default: 1,
            title: 1.2,
            text: 0.8
        },
        fontFamily: "微軟正黑體"
    };
    var USD = {
        fontSize: 30,
        lineHeight: 40,
        textScale: {
            default: 1,
            title: 1.2,
            text: 0.8
        },
        fontFamily: "Arial Unicode MS,Arial"
    };
    var VND = {
        fontSize: 30,
        lineHeight: 40,
        textScale: {
            default: 1,
            title: 1.2,
            text: 0.8
        },
        fontFamily: "Arial Unicode MS,Arial"
    };
    var THB = {
        fontSize: 30,
        lineHeight: 46,
        textScale: {
            default: 1,
            title: 1.2,
            text: 0.8
        },
        fontFamily: "Arial Unicode MS,Arial"
    };
    var IDR = {
        fontSize: 30,
        lineHeight: 40,
        textScale: {
            default: 1,
            title: 1.2,
            text: 0.8
        },
        fontFamily: "Arial Unicode MS,Arial"
    };
    var MYR = {
        fontSize: 30,
        lineHeight: 40,
        textScale: {
            default: 1,
            title: 1.2,
            text: 0.8
        },
        fontFamily: "Arial Unicode MS,Arial"
    };
    /**
     * @Author 蕭立品
     * @Description 語系管理器 : 保存當前語言本,語系樣式
     * @Date 2021-06-28 下午 12:06
     * @Version 1.0
     */
    var LanguageManager = /** @class */ (function () {
        function LanguageManager(configManager) {
            this.configManager = configManager;
            this.style = new Map(); //初始各語系樣式
            this.nowLanguageLabel = new Map(); //初始當前綁定的所有label
            this.initDefaultStyle(); //初始化預設語系樣式
            this.nowLang = this.configManager.language; //初始當前語系
        }
        /**
         *  懶漢加載
         *  初始化,只讓一個專案只有一次產生此class
         */
        LanguageManager.setInstance = function (configManager) {
            if (!this._instance) {
                this._instance = new LanguageManager(configManager);
                fcc.languageMgr = this._instance;
            }
        };
        Object.defineProperty(LanguageManager, "instance", {
            /**
             *  獲取已經初始化的靜態實例class
             */
            get: function () {
                if (!this._instance) {
                    fcc.ErrorManager.instance.executeError(fcc.type.ErrorType.AUDIO_FW, "該類尚未實例化");
                    return;
                }
                return this._instance;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * 添加默認樣式
         * @private
         */
        LanguageManager.prototype.initDefaultStyle = function () {
            this.style.set(fcc.type.LanguageType.TAIWAN, NTD);
            this.style.set(fcc.type.LanguageType.CHINESE, CNY);
            this.style.set(fcc.type.LanguageType.AMERICA, USD);
            this.style.set(fcc.type.LanguageType.INDONESIA, IDR);
            this.style.set(fcc.type.LanguageType.TAIWAN, NTD);
            this.style.set(fcc.type.LanguageType.MALAYSIA, MYR);
            this.style.set(fcc.type.LanguageType.VIETNAM, VND);
        };
        /**
         * 額外添加新的語系樣式
         */
        LanguageManager.prototype.addStyle = function (key, style) {
            this.style.set(key, style);
        };
        /**
         * 更新語系,會更新當前所有已經綁定的 cc.Label
         * @param {string | fcc.type.LanguageType} language - 要更新的語系
         */
        LanguageManager.prototype.updateLanguage = function (language) {
            var e_9, _a;
            if (this.nowLang != language) {
                this.nowLang = language;
                try {
                    for (var _b = __values(this.nowLanguageLabel.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var label = _c.value;
                        var textKey = this.nowLanguageLabel.get(label);
                        this.updateText(label, textKey);
                    }
                }
                catch (e_9_1) { e_9 = { error: e_9_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_9) throw e_9.error; }
                }
            }
        };
        /**
         * 添加當前語系
         */
        LanguageManager.prototype.setLanguage = function () {
            if (!this.languageCache) {
                this.reLoadNowLanguage();
            }
        };
        /**
         * 獲取當前語系
         * @return {string}
         */
        LanguageManager.prototype.getLanguage = function () {
            return this.nowLang;
        };
        /**
         * 獲取當前語系數據,返回該key對應的文字
         * @param {string | undefined} key - 拿取當前緩存語系文本的某一段文字 |(空參數)獲取當前語系數據,返回所有數據
         * @return {string} - 返回該段文字,如果找不到鍵值,默認返回 key
         */
        LanguageManager.prototype.getText = function (key) {
            return this.languageCache[key];
        };
        LanguageManager.prototype.getAllText = function () {
            return this.languageCache;
        };
        /**
         * 重新載入語系
         */
        LanguageManager.prototype.reLoadNowLanguage = function () {
            try {
                this.languageCache = window.language_Mode[this.nowLang];
            }
            catch (e) {
                console.log("window.language_Mode 查找不到該語系", e);
            }
        };
        /**
         * TODO 清除無用的語系緩存
         */
        LanguageManager.prototype.removeStringBuffer = function () {
            //TODO
        };
        LanguageManager.prototype.updateText = function (target, textKey) {
            target.string = this.getText(textKey);
            this.labelCache.push(target);
            return this;
        };
        /**
         * 更新所有透過 updateText更新的組件,更新該組件樣是
         * 注意 : 須配合 updateText 一起使用
         */
        LanguageManager.prototype.updateStyle = function () {
            var e_10, _a;
            var language = this.nowLang;
            if (!this.style.has(this.nowLang)) {
                language = fcc.type.LanguageType.AMERICA;
            }
            var fontFamily = this.style.get(language).fontFamily;
            var fontSize = this.style.get(language).fontSize;
            var lineHeight = this.style.get(language).lineHeight;
            try {
                for (var _b = __values(this.labelCache), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var label = _c.value;
                    label.fontFamily = fontFamily;
                    label.fontSize = fontSize;
                    label.lineHeight = lineHeight;
                }
            }
            catch (e_10_1) { e_10 = { error: e_10_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_10) throw e_10.error; }
            }
            this.labelCache.length = 0;
        };
        return LanguageManager;
    }());
    fcc.LanguageManager = LanguageManager;
})(fcc || (fcc = {}));
/// <reference path="../Error/ErrorManager.ts" />
/// <reference path="../Error/Enum/ErrorType.ts" />
var fcc;
/// <reference path="../Error/ErrorManager.ts" />
/// <reference path="../Error/Enum/ErrorType.ts" />
(function (fcc) {
    /**
     * @Author XIAO-LI-PIN
     * @Description 綁定自己需要的所有推撥者
     * @Date 2021-06-10 上午 11:02
     * @Version 1.0
     */
    var NotificationManager = /** @class */ (function () {
        function NotificationManager() {
            this.notificationToMap = new Map();
        }
        /**
         * 懶漢加載
         * @return {INotificationHandler<T>}
         */
        NotificationManager.instance = function () {
            if (!this._instance) {
                this._instance = new NotificationManager();
            }
            return this._instance;
        };
        /**
         * 添加推撥者
         * @param {T} notification - 推撥者
         * @return {this}
         */
        NotificationManager.prototype.setNotification = function (notification) {
            if (!this.notificationToMap.has(notification.TAG_NAME)) {
                this.notificationToMap.set(notification.TAG_NAME, notification);
            }
            return this;
        };
        /**
         * 獲取以綁定的推播者
         * @param {string} type - 事件名稱
         * @return
         */
        NotificationManager.prototype.getNotification = function (type) {
            if (this.notificationToMap.has(type)) {
                return this.notificationToMap.get(type);
            }
            else {
                fcc.ErrorManager.instance.executeError(fcc.type.ErrorType.LISTENER_FW, type + " :  \u8A72key\u5C1A\u672A\u52A0\u5165\u63A8\u64A5\u4E8B\u4EF6\u4E2D,\u4F60\u9700\u5148\u57F7\u884C setNotification(type:IBaseNotification)\u65B9\u6CD5");
                // throw new Error(`${type} :  該class尚未加入推撥事件中,你需先執行 setNotification(IBaseNotification)方法`);
                return undefined;
            }
        };
        /**
         * 查看該事件是否已經加入管理器中
         * @param {string} type - 事件名稱
         * @return {boolean}
         */
        NotificationManager.prototype.hasNotification = function (type) {
            return this.notificationToMap.has(type);
        };
        /**
         * 拿取所有以綁定的推播
         * @return {Map<String, T>}
         */
        NotificationManager.prototype.getAllNotifications = function () {
            return this.notificationToMap;
        };
        return NotificationManager;
    }());
    fcc.NotificationManager = NotificationManager;
})(fcc || (fcc = {}));
/// <reference path="./Animation/AnimationManager.ts" />
/// <reference path="./Audio/AudioManager.ts" />
/// <reference path="./Config/SlotConfigManager.ts" />
/// <reference path="./Error/ErrorManager.ts" />
/// <reference path="./Language/LanguageManager.ts" />
/// <reference path="./Listener/EventManager.ts" />
/// <reference path="./Load/LoadResManager.ts" />
/// <reference path="./Process/ProcessManager.ts" />
/// <reference path="./Scene/SceneManager.ts" />
/// <reference path="./Slot/SlotStyleManager.ts" />
/// <reference path="./Listener/NotificationManager.ts" />
var fcc;
/// <reference path="./Animation/AnimationManager.ts" />
/// <reference path="./Audio/AudioManager.ts" />
/// <reference path="./Config/SlotConfigManager.ts" />
/// <reference path="./Error/ErrorManager.ts" />
/// <reference path="./Language/LanguageManager.ts" />
/// <reference path="./Listener/EventManager.ts" />
/// <reference path="./Load/LoadResManager.ts" />
/// <reference path="./Process/ProcessManager.ts" />
/// <reference path="./Scene/SceneManager.ts" />
/// <reference path="./Slot/SlotStyleManager.ts" />
/// <reference path="./Listener/NotificationManager.ts" />
(function (fcc) {
    /**
     * 遊戲初始設定,並透過builder加載所有Manager
     * @return {fcc.IF.IConfigManager}
     * @private
     */
    fcc.configMgr = fcc.SlotConfigManager.instance;
    // export function LoadMgr(): IF.ILoadResManager {
    //     return LoadResManager.instance;
    // }
    /**
     * 網路管理 : 傳送封包,接收封包
     * @return {fcc.IF.ILoadResManager}
     * @private
     */
    function networkMgr() {
        return null;
    }
    fcc.networkMgr = networkMgr;
    /**
     * 推撥者綁定與拿取
     * @return {fcc.IF.INotificationManager<T>}
     */
    function notificationMgr() {
        return fcc.NotificationManager.instance();
    }
    fcc.notificationMgr = notificationMgr;
})(fcc || (fcc = {}));
/**
 * 擴展至全域,cocos規定
 * @type {fcc}
 */
globalThis.fcc = fcc;
var fcc;
(function (fcc) {
    var global;
    (function (global) {
        /**
         * @Author XIAO-LI-PIN
         * @Description 共用:按鈕類方法
         * @Date 2021-04-14 下午 20:24
         * @Version 1.1
         */
        var Button = /** @class */ (function () {
            function Button() {
            }
            /**
             * 對該button添加監聽事件
             * @param {cc.Button} buttonNode - 按鈕組件
             * @param {string} methodName - 該按鈕綁定的方法名稱
             * @param self - 該方法存在的位置
             * @param customEventData - 回傳值
             */
            Button.addButtonEvent = function (buttonNode, methodName, self, customEventData) {
                //手動添加監聽事件
                var thisNode = self.node;
                var scriptName = cc.js.getClassName(self);
                var click_event = new cc.Component.EventHandler(); //給予一個事件
                click_event.target = thisNode; //父類節點,注意父類size不能為(0,0)
                click_event.component = scriptName; //該父類的script
                click_event.handler = methodName; //對事件添加function,名稱是字串
                if (customEventData || customEventData == 0) {
                    click_event.customEventData = customEventData; //添加回調參數
                }
                // this.node.clickEvents = [click_event];//一次添加多個監聽事件
                buttonNode.clickEvents.push(click_event); //當點擊後觸發事件
            };
            /**
             * 禁用button
             * @param {cc.Button} button - 按鈕組件
             */
            Button.disableButton = function (button) {
                button.interactable = false;
            };
            /**
             * 啟用button
             * @param {cc.Button}button - 按鈕組件
             */
            Button.enableButton = function (button) {
                button.interactable = true;
            };
            /**
             * 對該node 添加 TOUCH_START 事件
             * @param {cc.Node} node - 要綁定的事件物件
             * @param {function} method - 觸發事件的方法
             * @param {this} self - 該方法存在的位置
             * @param {boolean} useCapture : "是否關閉多點觸控功能"
             */
            Button.addTouchStartEvent = function (node, method, self, useCapture) {
                node.on(cc.Node.EventType.TOUCH_START, method, self, useCapture);
            };
            /**
             * 對該node 關閉 TOUCH_START 事件
             * @param {cc.Node} node - 要綁定的事件物件
             * @param {Function} method - 觸發事件的方法
             * @param {this} self - 該方法存在的位置
             * @param {boolean} useCapture - 是否關閉多點觸控功能
             */
            Button.offTouchStartEvent = function (node, method, self, useCapture) {
                node.off(cc.Node.EventType.TOUCH_START, method, self, useCapture);
            };
            return Button;
        }());
        global.Button = Button;
    })(global = fcc.global || (fcc.global = {}));
})(fcc || (fcc = {}));
var fcc;
(function (fcc) {
    var global;
    (function (global) {
        /**
         * @Author XIAO-LI-PIN
         * @Description 共用:Prefab方法
         * @Date 2021-04-14 下午 20:24
         * @Version 1.1
         */
        var Prefab = /** @class */ (function () {
            function Prefab() {
            }
            /**
             * 尋訪該node底下一層節點內所有物件
             * @param {cc.Node} node - 父節點
             * @return {Map<string, cc.Node>} - Map(key: 該子類node URL, value:該子類node物件)
             */
            Prefab.getNodeOneChildren = function (node) {
                var allNode = new Map();
                for (var i = 0; i < node.childrenCount; i++) {
                    var n = node.children[i];
                    for (var j = 0; j <= n.childrenCount; j++) { //尋訪node底下是否有子節點
                        allNode.set(node.children[i].name, n); //view[子節點位置,子節點屬性]
                    }
                }
                return allNode;
            };
            /**
             * 尋訪該node底下兩層子節點
             * @param {node : 物件} node - 父節點
             * @return {Map<string, cc.Node>} - Map(key: 該子類node URL, value:該子類node物件)
             */
            Prefab.getNodeTowChildren = function (node) {
                var allNode = new Map();
                for (var i = 0; i < node.childrenCount; i++) {
                    var n = node.children[i]; //將該父節點屬性儲存
                    var path = n.children[i].name; //將父節點位置儲存
                    for (var j = 0; j <= n.childrenCount; j++) { //尋訪node底下是否有子節點
                        // this.view[root.children[i].name] = n;
                        if (j == 0) { //沒有子節點
                            allNode.set(n.children[i].name, n); //view[父節點位置,父節點屬性]
                        }
                        else { //有子節點
                            path += "/" + n.children[j - 1].name;
                            allNode.set(path, n.children[j - 1]); //view[子節點位置,子節點屬性]
                            path = n.children[i].name;
                        }
                    }
                }
                return allNode;
            };
            return Prefab;
        }());
        global.Prefab = Prefab;
    })(global = fcc.global || (fcc.global = {}));
})(fcc || (fcc = {}));
var fcc;
(function (fcc) {
    var ABS;
    (function (ABS) {
        /**
         * @Author XIAO-LI-PIN
         * @Description 推撥持有者,可綁定於該推播者底下,當有事件推播時,將會推播給該class
         * @Date 2021-06-11 下午 05:03
         * @Version 1.0
         */
        var ABaseObserver = /** @class */ (function () {
            function ABaseObserver(callFun, self) {
                this._isPermanent = false;
                this._self = self;
                this._callFun = callFun;
            }
            /**
             * 推播事件
             * @param any - 正確參數數量由子類實現
             */
            ABaseObserver.prototype.pushNotification = function () {
                var _a;
                var any = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    any[_i] = arguments[_i];
                }
                (_a = this._callFun).call.apply(_a, __spreadArray([this._self], __read(any)));
            };
            Object.defineProperty(ABaseObserver.prototype, "isPermanent", {
                /**
                 * 是否常駐推撥
                 * @return {boolean}
                 */
                get: function () {
                    return this._isPermanent;
                },
                /**
                 * 是否常駐推撥
                 * @param {boolean} value
                 */
                set: function (value) {
                    this._isPermanent = value;
                },
                enumerable: false,
                configurable: true
            });
            return ABaseObserver;
        }());
        ABS.ABaseObserver = ABaseObserver;
    })(ABS = fcc.ABS || (fcc.ABS = {}));
})(fcc || (fcc = {}));
var fcc;
(function (fcc) {
    /**
     * @Author 蕭立品
     * @Description TODO
     * @Date 2021-06-30 下午 05:34
     * @Version 1.0
     */
    var SmartFoxLink = /** @class */ (function () {
        function SmartFoxLink() {
        }
        return SmartFoxLink;
    }());
    fcc.SmartFoxLink = SmartFoxLink;
})(fcc || (fcc = {}));
var fcc;
(function (fcc) {
    var type;
    (function (type) {
        /**
         * @Author XIAO-LI-PIN
         * @Description 遊戲當下狀態
         * @Date 2021-04-14 下午 20:24
         * @Version 1.1
         */
        var GameStateType;
        (function (GameStateType) {
            /**
             * 無狀態,待機狀態...
             * @type {GameStateType.STANDBY}
             */
            GameStateType["STANDBY"] = "STANDBY";
            /**
             * 一般狀態遊戲中....
             * @type {GameStateType.PLAYING}
             */
            GameStateType["PLAYING"] = "PLAYING";
            /**
             * 免費遊戲中....
             * @type {GameStateType.FREEING}
             */
            GameStateType["FREEING"] = "FREEING";
        })(GameStateType = type.GameStateType || (type.GameStateType = {}));
        /**
         * @Author XIAO-LI-PIN
         * @Description 框架預設的流程
         * @Date 2021-04-14 下午 20:24
         * @Version 1.1
         */
        var ProcessType;
        (function (ProcessType) {
            ProcessType["FREE"] = "FREE";
            ProcessType["NORMAL"] = "NORMAL";
        })(ProcessType = type.ProcessType || (type.ProcessType = {}));
    })(type = fcc.type || (fcc.type = {}));
})(fcc || (fcc = {}));
/// <reference path="./Enum/AutoType.ts" />
/// <reference path="./Enum/GameState.ts" />
/// <reference path="./Enum/GameState.ts" />
/// <reference path="../Error/Enum/ErrorType.ts" />
/// <reference path="./Enum/GameState.ts" />
/// <reference path="./IProcessManager.ts" />
/// <reference path="./IGameProcessFactory.ts" />
var fcc;
/// <reference path="../Error/Enum/ErrorType.ts" />
/// <reference path="./Enum/GameState.ts" />
/// <reference path="./IProcessManager.ts" />
/// <reference path="./IGameProcessFactory.ts" />
(function (fcc) {
    /**
     * @Author XIAO-LI-PIN
     * @Description 流程工廠 : 更新,獲取,加入,變更等.. 注意:此 class 由 manager 實例化,如果無特殊需求,請勿使用
     * @Date 2021-05-13 下午 06:17
     * @Version 1.1
     */
    var GameProcessFactory = /** @class */ (function () {
        function GameProcessFactory(gameManager) {
            this.gameManager = gameManager;
            this.processToMap = new Map();
        }
        /**
         * 初始流程,執行綁定的流程內的onCreate方法
         * @param {string | fcc.type.ProcessType} processName - 指定只要初始哪個流程 class,如果使用無參方法,將會初始化所有綁定的流程
         */
        GameProcessFactory.prototype.initProcess = function (processName) {
            var e_11, _a;
            if (processName) {
                if (!this.processToMap.has(processName)) {
                    fcc.ErrorManager.instance.executeError(fcc.type.ErrorType.PROCESS_FW, "查找不到該流程,請確認是否已綁定進框架中");
                }
                else {
                    this.processToMap.get(processName).executionContainer.onCreate();
                }
            }
            else {
                var values = this.processToMap.values();
                try {
                    for (var values_1 = __values(values), values_1_1 = values_1.next(); !values_1_1.done; values_1_1 = values_1.next()) {
                        var value = values_1_1.value;
                        value.executionContainer.onCreate();
                    }
                }
                catch (e_11_1) { e_11 = { error: e_11_1 }; }
                finally {
                    try {
                        if (values_1_1 && !values_1_1.done && (_a = values_1.return)) _a.call(values_1);
                    }
                    finally { if (e_11) throw e_11.error; }
                }
            }
        };
        /**
         * 添加流程
         * @param {string | GameType} processName - 可使用預設 ProcessType 或自訂義流程名稱
         * @param {IProcess} process - 流程 class
         */
        GameProcessFactory.prototype.setProcess = function (processName, process) {
            this.processToMap.set(processName, process);
        };
        /**
         * 獲取該流程
         * @param {string | GameType} processName - 可使用預設 ProcessType 或自訂義流程名稱
         * @returns {IProcess}
         */
        GameProcessFactory.prototype.getProcess = function (processName) {
            return this.processToMap.get(processName);
        };
        /**
         * 拿取全部已經綁定的流程
         * @return {Map<string, fcc.IF.IProcess>}
         */
        GameProcessFactory.prototype.getAllProcess = function () {
            return this.processToMap;
        };
        /**
         * 改變流程
         * @param {string | GameType} processName - 可使用預設 ProcessType 或自訂義流程名稱
         */
        GameProcessFactory.prototype.changeProcess = function (processName) {
            if (!this.processToMap.has(processName)) {
                fcc.ErrorManager.instance.executeError(fcc.type.ErrorType.PROCESS_FW, processName + " \u641C\u5C0B\u4E0D\u5230\u6B64\u6D41\u7A0B,\u8ACB\u6AA2\u67E5\u6D41\u7A0B\u662F\u5426\u6DFB\u52A0");
                return;
            }
            this.process = this.processToMap.get(processName);
        };
        /**
         * 執行流程
         * @returns {Promise<void>}
         */
        GameProcessFactory.prototype.useProcess = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.process.start()];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        return GameProcessFactory;
    }());
    fcc.GameProcessFactory = GameProcessFactory;
})(fcc || (fcc = {}));
var fcc;
(function (fcc) {
    var type;
    (function (type) {
        /**
         * 待刪除
         */
        var GameEventType;
        (function (GameEventType) {
            GameEventType["TEST"] = "TEST";
            // /**
            //  * 加速按鈕監聽
            //  * @type {GameEventType.SPEED_UP}
            //  */
            // SPEED_UP = "SPEED_UP",
            //
            // /**
            //  * 即停監聽
            //  * @type {GameEventType.IMMEDIATE_STOP}
            //  */
            // IMMEDIATE_STOP = "IMMEDIATE_STOP",
            //
            // /**
            //  * 瞇排事件
            //  * @type {GameEventType.LOOK_AT}
            //  */
            // LOOK_AT = 'LOOK_AT',
            //
            // /**
            //  * 玩家金額不足
            //  * @type {GameEventType.USER_POINT_INSUFFICIENT}
            //  */
            // USER_POINT_INSUFFICIENT = "USER_POINT_INSUFFICIENT",
            // /**
            //  * 該次贏分時
            //  */
            // WIN_POINT = 'WIN_POINT',
            //
            // /**
            //  * USER押注面額監聽
            //  */
            // USER_TOTAL_BET = 'USER_TOTAL_BET',
            //
            // /**
            //  * auto事件
            //  */
            // AUTO = 'AUTO',
        })(GameEventType = type.GameEventType || (type.GameEventType = {}));
    })(type = fcc.type || (fcc.type = {}));
})(fcc || (fcc = {}));
var fcc;
(function (fcc) {
    var type;
    (function (type) {
        /**
         * @Author XIAO-LI-PIN
         * @Description server 回傳事件 型
         * @Date 2021-04-14 下午 20:24
         * @Version 1.1
         */
        var ServerEventType;
        (function (ServerEventType) {
            /**
             *  一般獲獎回傳
             */
            ServerEventType["BET_RESULT"] = "BET_RESULT";
            /**
             * 免費模式獲獎
             */
            ServerEventType["FREE_SPIN_RESULT"] = "FREE_SPIN_RESULT";
            /**
             * 底層進遊戲 通知Loading頁面 可以顯示主遊戲場景
             */
            ServerEventType["CAN_PLAY_GAME"] = "CAN_PLAY_GAME";
            /**
             * 獲取遊戲歷史結果
             */
            ServerEventType["GET_GAME_HISTORY_RESULT"] = "GET_GAME_HISTORY_RESULT";
            /**
             * 獲取遊戲祥單
             */
            ServerEventType["GET_HISTORY_DETAIL_RESULT"] = "GET_HISTORY_DETAIL_RESULT";
            /**
             * 該局遊戲序號
             */
            ServerEventType["GROUP_ID"] = "GROUP_ID";
            /**
             * 進入遊戲後初始資訊
             */
            ServerEventType["TABLE_INFO"] = "TABLE_INFO";
            /**
             * 各種錯誤訊息
             */
            ServerEventType["WARNING"] = "WARNING";
        })(ServerEventType = type.ServerEventType || (type.ServerEventType = {}));
    })(type = fcc.type || (fcc.type = {}));
})(fcc || (fcc = {}));
var fcc;
(function (fcc) {
    /**
     * @Author XIAO-LI-PIN
     * @Description 任何遊戲皆可用流程
     * @Date 2021-05-14 下午 03:07
     * @Version 1.0
     */
    var GameProcess = /** @class */ (function () {
        function GameProcess(container) {
            this._executionContainer = container;
            this._process = new Set();
        }
        /**
         * 執行流程
         * @return {this}
         */
        GameProcess.prototype.onExecution = function () {
            this._process.add(this._executionContainer.onExecution);
            return this;
        };
        /**
         * 流程結束時
         * @return {this}
         */
        GameProcess.prototype.onEnd = function () {
            this._process.add(this._executionContainer.onEnd);
            return this;
        };
        /**
         * 更換流程
         * @return {this}
         */
        GameProcess.prototype.onChangeStatus = function () {
            this._process.add(this._executionContainer.onChangeStatus);
            return this;
        };
        /**
         * 將所有綁定的流程方法依序執行
         * @return {Promise<void>}
         */
        GameProcess.prototype.start = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a, _b, method, e_12_1;
                var e_12, _c;
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0:
                            _d.trys.push([0, 5, 6, 7]);
                            _a = __values(this._process), _b = _a.next();
                            _d.label = 1;
                        case 1:
                            if (!!_b.done) return [3 /*break*/, 4];
                            method = _b.value;
                            return [4 /*yield*/, method.apply(this._executionContainer)];
                        case 2:
                            _d.sent();
                            _d.label = 3;
                        case 3:
                            _b = _a.next();
                            return [3 /*break*/, 1];
                        case 4: return [3 /*break*/, 7];
                        case 5:
                            e_12_1 = _d.sent();
                            e_12 = { error: e_12_1 };
                            return [3 /*break*/, 7];
                        case 6:
                            try {
                                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                            }
                            finally { if (e_12) throw e_12.error; }
                            return [7 /*endfinally*/];
                        case 7: return [2 /*return*/];
                    }
                });
            });
        };
        Object.defineProperty(GameProcess.prototype, "process", {
            get: function () {
                return this._process;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(GameProcess.prototype, "executionContainer", {
            get: function () {
                return this._executionContainer;
            },
            enumerable: false,
            configurable: true
        });
        return GameProcess;
    }());
    fcc.GameProcess = GameProcess;
})(fcc || (fcc = {}));
var fcc;
(function (fcc) {
    /**
     * @Author XIAO-LI-PIN
     * @Description 老虎機流程
     * @Date 2021-05-14 下午 03:07
     * @Version 1.0
     */
    var SlotGameProcess = /** @class */ (function () {
        function SlotGameProcess(container) {
            this._executionContainer = container;
            this._process = new Set(); //初始化,存放要執行的方法
        }
        /**
         * 初始化 : 自訂開始遊戲前的效果
         * @example - 按鈕,背景…等
         * @return {this}
         */
        SlotGameProcess.prototype.onCustomizeStart = function () {
            this._process.add(this._executionContainer.onCustomizeStart);
            return this;
        };
        /**
         * 老虎機運行前,漸入效果
         * @return {this}
         */
        SlotGameProcess.prototype.onSineInGrid = function () {
            this._process.add(this._executionContainer.onSineInGrid);
            return this;
        };
        /**
         * 遊戲持續執行動作
         * @return {this}
         */
        SlotGameProcess.prototype.onRunning = function () {
            this._process.add(this._executionContainer.onRunGrid);
            return this;
        };
        /**
         * 自訂義停止後事件
         * @example - 更換音樂,更換背景圖案,校正回歸流程狀態...等
         * @return {this}
         */
        SlotGameProcess.prototype.onCustomizeEnd = function () {
            this._process.add(this._executionContainer.onCustomizeEnd);
            return this;
        };
        /**
         * 顯示結果
         * @return {this}
         */
        SlotGameProcess.prototype.onShowAnswer = function () {
            this._process.add(this._executionContainer.onShowAnswer);
            return this;
        };
        /**
         * 更換流程
         * @example - fcc.processManager.changeProcess(GameType.NORMAL);
         * @return {this}
         */
        SlotGameProcess.prototype.onChangeStatus = function () {
            this._process.add(this._executionContainer.onChangeStatus);
            return this;
        };
        /**
         * 開始執行
         * @return {Promise<void>}
         */
        SlotGameProcess.prototype.start = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a, _b, method, e_13_1;
                var e_13, _c;
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0:
                            _d.trys.push([0, 5, 6, 7]);
                            _a = __values(this._process), _b = _a.next();
                            _d.label = 1;
                        case 1:
                            if (!!_b.done) return [3 /*break*/, 4];
                            method = _b.value;
                            return [4 /*yield*/, method.apply(this._executionContainer)];
                        case 2:
                            _d.sent();
                            _d.label = 3;
                        case 3:
                            _b = _a.next();
                            return [3 /*break*/, 1];
                        case 4: return [3 /*break*/, 7];
                        case 5:
                            e_13_1 = _d.sent();
                            e_13 = { error: e_13_1 };
                            return [3 /*break*/, 7];
                        case 6:
                            try {
                                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                            }
                            finally { if (e_13) throw e_13.error; }
                            return [7 /*endfinally*/];
                        case 7: return [2 /*return*/];
                    }
                });
            });
        };
        Object.defineProperty(SlotGameProcess.prototype, "executionContainer", {
            get: function () {
                return this._executionContainer;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SlotGameProcess.prototype, "process", {
            get: function () {
                return this._process;
            },
            enumerable: false,
            configurable: true
        });
        return SlotGameProcess;
    }());
    fcc.SlotGameProcess = SlotGameProcess;
})(fcc || (fcc = {}));
var fcc;
(function (fcc) {
    var ABS;
    (function (ABS) {
        /**
         * @Author 蕭立品
         * @Description TODO
         * @Date 2021-06-28 下午 06:42
         * @Version 1.0
         */
        var ASlotSetting = /** @class */ (function () {
            function ASlotSetting(slotStyleManager) {
                this._slotStyleManager = slotStyleManager;
            }
            /**
             * 老虎機顯示答案前的最少轉動次數
             * @param {number} count
             * @return {this}
             */
            ASlotSetting.prototype.setSlotTurnCount = function (count) {
                this._slotTurnCount = count;
                return this;
            };
            /**
             * 老虎機每隔格子高度
             * @param {number} height
             * @return {this}
             */
            ASlotSetting.prototype.setSlotGridHeight = function (height) {
                this._slotGridHeight = height;
                return this;
            };
            /**
             * 遊戲每格格子間的速度
             * @param {number} time
             * @return {this}
             */
            ASlotSetting.prototype.setSlotGirdSpeed = function (time) {
                this._slotGirdSpeed = time;
                return this;
            };
            /**
             * 加速時的加速被率
             * @param {number} multiple
             * @return {this}
             */
            ASlotSetting.prototype.setSpeedUpMultiple = function (multiple) {
                this._speedUpMultiple = multiple;
                return this;
            };
            /**
             * 該老虎機 每列的格子數量
             * @param {number} gridCount
             * @return {this}
             */
            ASlotSetting.prototype.setSlotRowGridCount = function (gridCount) {
                this._slotRowGridCount = gridCount;
                return this;
            };
            /**
             * 非加速模式,每列停止的時間間格
             * @param {number} time
             * @return {this}
             */
            ASlotSetting.prototype.setColumnIntervalTime = function (time) {
                this._columnIntervalTime = time;
                return this;
            };
            /**
             * 要執行輪播動化轉動老虎機的node
             * @param {Array<cc.Node>} node
             * @return {this}
             */
            ASlotSetting.prototype.setSlotColumnToTween = function (node) {
                this._slotColumnToTween = node;
                return this;
            };
            /**
             * 所有格子,做循環老虎機時,需更動該Node的位置
             * @param {Map<number, Array<cc.Node>>} node
             * @return {this}
             */
            ASlotSetting.prototype.setGridNodeToMap = function (node) {
                this._gridNodeToMap = node;
                return this;
            };
            /**
             * server免費答案回傳結果
             */
            ASlotSetting.prototype.setNormalResult = function (normalResult) {
                this._normalResult = normalResult;
                return this;
            };
            /**
             * server一般答案回傳model
             */
            ASlotSetting.prototype.setFreeResult = function (freeResult) {
                this._freeResult = freeResult;
                return this;
            };
            /**
             * 設定結束
             */
            ASlotSetting.prototype.complete = function () {
                this._slotStyleManager.build(this);
            };
            Object.defineProperty(ASlotSetting.prototype, "columnIntervalTime", {
                get: function () {
                    return this._columnIntervalTime;
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(ASlotSetting.prototype, "gridNodeToMap", {
                get: function () {
                    return this._gridNodeToMap;
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(ASlotSetting.prototype, "slotColumnToTween", {
                get: function () {
                    return this._slotColumnToTween;
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(ASlotSetting.prototype, "slotGirdSpeed", {
                get: function () {
                    return this._slotGirdSpeed;
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(ASlotSetting.prototype, "slotGridHeight", {
                get: function () {
                    return this._slotGridHeight;
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(ASlotSetting.prototype, "slotRowGridCount", {
                get: function () {
                    return this._slotRowGridCount;
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(ASlotSetting.prototype, "slotTurnCount", {
                get: function () {
                    return this._slotTurnCount;
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(ASlotSetting.prototype, "speedUpMultiple", {
                get: function () {
                    return this._speedUpMultiple;
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(ASlotSetting.prototype, "slotStyleManager", {
                get: function () {
                    return this._slotStyleManager;
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(ASlotSetting.prototype, "freeResult", {
                get: function () {
                    return this._freeResult;
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(ASlotSetting.prototype, "normalResult", {
                get: function () {
                    return this._normalResult;
                },
                enumerable: false,
                configurable: true
            });
            return ASlotSetting;
        }());
        ABS.ASlotSetting = ASlotSetting;
    })(ABS = fcc.ABS || (fcc.ABS = {}));
})(fcc || (fcc = {}));
var fcc;
(function (fcc) {
    /**
     * @Author 蕭立品
     * @Description TODO
     * @Date 2021-06-28 下午 06:41
     * @Version 1.0
     */
    var SlotImgSetting = /** @class */ (function (_super) {
        __extends(SlotImgSetting, _super);
        function SlotImgSetting() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * slot 所有靜態格子圖片
         * @param {Array<cc.SpriteFrame>} img
         * @return {this}
         */
        SlotImgSetting.prototype.setGridImg = function (img) {
            this._gridImg = img;
            return this;
        };
        /**
         * 所有格子的圖片,做循環老虎雞時,需更動的圖片
         * @param {Map<number, Array<cc.Sprite>>} sprite
         * @return {this}
         */
        SlotImgSetting.prototype.setGirdSpriteToMap = function (sprite) {
            this._gridSpriteToMap = sprite;
            return this;
        };
        Object.defineProperty(SlotImgSetting.prototype, "gridSpriteToMap", {
            get: function () {
                return this._gridSpriteToMap;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SlotImgSetting.prototype, "gridImg", {
            get: function () {
                return this._gridImg;
            },
            enumerable: false,
            configurable: true
        });
        return SlotImgSetting;
    }(fcc.ABS.ASlotSetting));
    fcc.SlotImgSetting = SlotImgSetting;
})(fcc || (fcc = {}));
var fcc;
(function (fcc) {
    /**
     * @Author 蕭立品
     * @Description TODO
     * @Date 2021-06-28 下午 06:41
     * @Version 1.0
     */
    var SlotSpinSetting = /** @class */ (function (_super) {
        __extends(SlotSpinSetting, _super);
        function SlotSpinSetting() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * slot 所有靜態格子圖片
         * @param {Array<cc.SpriteFrame>} img
         * @return {this}
         */
        SlotSpinSetting.prototype.setGridImg = function (img) {
            this._gridImg = img;
            return this;
        };
        /**
         * 所有格子的圖片,做循環老虎機時,需更動的圖片
         * @param {Map<number, Array<cc.Sprite>>} sprite
         * @return {this}
         */
        SlotSpinSetting.prototype.setGirdSpriteToMap = function (sprite) {
            this._gridSpriteToMap = sprite;
            return this;
        };
        /**
         * 所有格子的spin,做循環老虎機時,需更動的圖片
         * @param {Map<number, Array<cc.Sprite>>} sprite
         * @return {this}
         */
        SlotSpinSetting.prototype.setGirdSpineToMap = function (sprite) {
            this._girdSpineToMap = sprite;
            return this;
        };
        return SlotSpinSetting;
    }(fcc.ABS.ASlotSetting));
    fcc.SlotSpinSetting = SlotSpinSetting;
})(fcc || (fcc = {}));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkVycm9yL0VudW0vRXJyb3JUeXBlLnRzIiwiRXJyb3IvRXJyb3JUeXBlL1Vua25vd25FcnJvci50cyIsIkVycm9yL0Vycm9yVHlwZS9GcmFtZVdvcmtFcnJvci50cyIsIkVycm9yL0Vycm9yVHlwZS9PYmplY3RFcnJvci50cyIsIkVycm9yL0Vycm9yVHlwZS9TZXJ2ZXJFcnJvci50cyIsIkVycm9yL0Vycm9yVHlwZS9XYXJuaW5nRXJyb3IudHMiLCJFcnJvci9JRXJyb3JIYW5kbGVyLnRzIiwiRXJyb3IvRXJyb3JIYW5kbGVyLnRzIiwiRXJyb3IvSUVycm9yTWFuYWdlci50cyIsIkVycm9yL0Vycm9yTWFuYWdlci50cyIsIkFuaW1hdGlvbi9BbmltYXRpb25IYW5kbGVyLnRzIiwiQW5pbWF0aW9uL0FuaW1hdGlvbk1hbmFnZXIudHMiLCJBdWRpby9FbnVtL0F1ZGlvU3RhdGVUeXBlLnRzIiwiQXVkaW8vSUF1ZGlvL0lBdWRpb0ZhY3RvcnkudHMiLCJBdWRpby9JQXVkaW8vSUF1ZGlvTWFuYWdlci50cyIsIkdsb2JhbC9VdGlsLnRzIiwiTG9hZC9FbnVtL0xvYWRFbnVtLnRzIiwiTG9hZC9JTG9hZC9JTG9hZFJlc01hbmFnZXIudHMiLCJMb2FkL0lMb2FkL0lMb2FkRmFjdG9yeS50cyIsIkxpc3RlbmVyL0V2ZW50TWFuYWdlci50cyIsIlByb2Nlc3MvUHJvY2Vzc01hbmFnZXIudHMiLCJTY2VuZS9FbnVtL1NjZW5lU3R5bGVUeXBlLnRzIiwiU2NlbmUvRW51bS9TY2VuZURpcmVjdGlvblR5cGUudHMiLCJTY2VuZS9JU2NlbmUvSVNjZW5lTWFuYWdlci50cyIsIlNjZW5lL1NjZW5lU2l6ZUNoYW5nZUxpc3RlbmVyLnRzIiwiTGlzdGVuZXIvQUJhc2VOb3RpZmljYXRpb24udHMiLCJMaXN0ZW5lci9FbnVtL05vdGlmaWNhdGlvblR5cGUudHMiLCJMaXN0ZW5lci9PYnNlcnZlclR5cGUvU2NlbmVPYnNlcnZlci9TY2VuZURpcmVjdGlvbkNoYW5nZU9ic2VydmVyLnRzIiwiTGlzdGVuZXIvTm90aWZpY2F0aW9uVHlwZS9TY2VuZU5vdGlmaWNhdGlvbi9TY2VuZURpcmVjdGlvbkNoYW5nZU5vdGlmaWNhdGlvbi50cyIsIlNjZW5lL1NjZW5lU3R5bGUvQXV0b1N0eWxlLnRzIiwiU2NlbmUvU2NlbmVTdHlsZS9Ib3Jpem9udGFsU3R5bGUudHMiLCJTY2VuZS9TY2VuZVN0eWxlL1ZlcnRpY2FsU3R5bGUudHMiLCJTY2VuZS9TY2VuZVN0eWxlSGFuZGxlci50cyIsIlNjZW5lL1NjZW5lTWFuYWdlci50cyIsIlNsb3QvU2xvdFN0eWxlTWFuYWdlci50cyIsIlByb2Nlc3MvRW51bS9BdXRvVHlwZS50cyIsIkxhbmd1YWdlL0VudW0vTGFuZ3VhZ2VUeXBlLnRzIiwiQ29uZmlnL1Nsb3RDb25maWdNYW5hZ2VyLnRzIiwiTG9hZC9JTG9hZC9BTG9hZFNjcmlwdFR5cGUudHMiLCJMb2FkL0xvYWRTY3JpcHRUeXBlL0NTU0xvYWQudHMiLCJMb2FkL0xvYWRTY3JpcHRUeXBlL1NjcmlwdExvYWQudHMiLCJMb2FkL0lMb2FkL0FMb2FkVHlwZS50cyIsIkxvYWQvTG9hZFR5cGUvSW1nTG9hZC50cyIsIkxvYWQvTG9hZFR5cGUvTXVzaWNMb2FkLnRzIiwiTG9hZC9Mb2FkVHlwZS9QcmVmYWJMb2FkLnRzIiwiTG9hZC9Mb2FkVHlwZS9TY2VuZUxvYWQudHMiLCJMb2FkL0xvYWRUeXBlL1NwaW5lTG9hZC50cyIsIkxvYWQvTG9hZFR5cGUvVGV4dExvYWQudHMiLCJMb2FkL0xvYWRUeXBlRmFjdG9yeS50cyIsIkxvYWQvTG9hZFR5cGVIYW5kbGVyLnRzIiwiTG9hZC9Mb2FkUmVzTWFuYWdlci50cyIsIkF1ZGlvL0F1ZGlvVHlwZS9NdXNpY0NvbnRyb2xsZXIudHMiLCJBdWRpby9BdWRpb1R5cGUvRWZmZWN0Q29udHJvbGxlci50cyIsIkF1ZGlvL0F1ZGlvRmFjdG9yeS50cyIsIkF1ZGlvL0F1ZGlvTWFuYWdlci50cyIsIkxhbmd1YWdlL0xhbmd1YWdlTWFuYWdlci50cyIsIkxpc3RlbmVyL05vdGlmaWNhdGlvbk1hbmFnZXIudHMiLCJpbmRleC50cyIsIkdsb2JhbC9CdXR0b24udHMiLCJHbG9iYWwvUHJlZmFiLnRzIiwiTGlzdGVuZXIvQUJhc2VPYnNlcnZlci50cyIsIk5ldHdvcmsvU21hcnRGb3hMaW5rLnRzIiwiUHJvY2Vzcy9FbnVtL0dhbWVTdGF0ZS50cyIsIlByb2Nlc3MvSVByb2Nlc3NNYW5hZ2VyLnRzIiwiUHJvY2Vzcy9JR2FtZVByb2Nlc3NGYWN0b3J5LnRzIiwiUHJvY2Vzcy9HYW1lUHJvY2Vzc0ZhY3RvcnkudHMiLCJMaXN0ZW5lci9FbnVtL2dhbWVFdmVudFR5cGUudHMiLCJMaXN0ZW5lci9FbnVtL1NlcnZlckV2ZW50VHlwZS50cyIsIlByb2Nlc3MvUHJvY3Jlc3MvR2FtZVByb2Nlc3MudHMiLCJQcm9jZXNzL1Byb2NyZXNzL1Nsb3RHYW1lUHJvY2Vzcy50cyIsIlNsb3QvU2xvdFNldHRpbmdTdHlsZS9BU2xvdFNldHRpbmcudHMiLCJTbG90L1Nsb3RTZXR0aW5nU3R5bGUvU2xvdEltZ1NldHRpbmcudHMiLCJTbG90L1Nsb3RTZXR0aW5nU3R5bGUvU2xvdFNwaW5TZXR0aW5nLnRzIiwiTGlzdGVuZXIvSUV2ZW50TWFuYWdlci50cyIsIlNsb3QvSVNsb3RTdHlsZU1hbmFnZXIudHMiLCJDb25maWcvSUNvbmZpZy9JU2xvdENvbmZpZ01hbmFnZXIudHMiLCJBbmltYXRpb24vSUFuaW1hdGlvbkhhbmRsZXIudHMiLCJBbmltYXRpb24vSUFuaW1hdGlvbk1hbmFnZXIudHMiLCJMYW5ndWFnZS9JTGFuZ3VhZ2VNYW5hZ2VyLnRzIiwiTGlzdGVuZXIvSUJhc2VOb3RpZmljYXRpb24udHMiLCJMaXN0ZW5lci9JTm90aWZpY2F0aW9uTWFuYWdlci50cyIsIlNsb3QvSVNsb3QudHMiLCJBdWRpby9JQXVkaW8vSUF1ZGlvVHlwZS50cyIsIkNvbmZpZy9JQ29uZmlnL0lDb25maWdNYW5hZ2VyLnRzIiwiRXJyb3IvRXJyb3JUeXBlL0lTaG93RXJyb3JEaWFsb2cudHMiLCJMaXN0ZW5lci9PYnNlcnZlclR5cGUvSUJhc2VPYnNlcnZlciAudHMiLCJMb2FkL0lMb2FkL0lMb2FkVHlwZS50cyIsIlByb2Nlc3MvSUV4ZWN1dGlvbkNvbnRhbmVyL0lFeGVjdXRpb25Db250YWluZXIudHMiLCJQcm9jZXNzL0lFeGVjdXRpb25Db250YW5lci9JR2FtZVByb2NlZHVyZUV4ZWN1dGlvbkNvbnRhaW5lci50cyIsIlByb2Nlc3MvSUV4ZWN1dGlvbkNvbnRhbmVyL0lTbG90UHJvY2VkdXJlRXhlY3V0aW9uQ29udGFpbmVyLnRzIiwiUHJvY2Vzcy9JUHJvY2Vzcy9JR2FtZVByb2Nlc3MudHMiLCJQcm9jZXNzL0lQcm9jZXNzL0lQcm9jZXNzLnRzIiwiUHJvY2Vzcy9JUHJvY2Vzcy9JU2xvdEdhbWVQcm9jZXNzLnRzIiwiU2NlbmUvSVNjZW5lL0lTY2VuZVN0eWxlLnRzIiwiU2xvdC9TbG90U2V0dGluZ1N0eWxlL0lTbG90U2V0dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQVUsR0FBRyxDQTBGWjtBQTFGRCxXQUFVLEdBQUc7SUFFVCxJQUFpQixJQUFJLENBdUZwQjtJQXZGRCxXQUFpQixJQUFJO1FBRWpCOzs7OztXQUtHO1FBQ0gsSUFBWSxTQThFWDtRQTlFRCxXQUFZLFNBQVM7WUFFakI7OztlQUdHO1lBQ0gsb0lBQWlELENBQUE7WUFFakQ7OztlQUdHO1lBQ0gsOEdBQWdDLENBQUE7WUFFaEM7OztlQUdHO1lBQ0gsOEZBQW9DLENBQUE7WUFFcEM7OztlQUdHO1lBQ0gseUVBQW9CLENBQUE7WUFFcEI7OztlQUdHO1lBQ0gscUZBQXFDLENBQUE7WUFFckM7OztlQUdHO1lBQ0gsc0VBQXFDLENBQUE7WUFFckM7OztlQUdHO1lBQ0gsd0VBQXVDLENBQUE7WUFFdkM7OztlQUdHO1lBQ0gsMERBQXlCLENBQUE7WUFFekI7OztlQUdHO1lBQ0gsMERBQXlCLENBQUE7WUFFekI7OztlQUdHO1lBQ0gsOERBQTZCLENBQUE7WUFFN0I7OztlQUdHO1lBQ0gsNkRBQTRCLENBQUE7WUFFNUI7OztlQUdHO1lBQ0gsb0VBQW1DLENBQUE7WUFFbkM7O2VBRUc7WUFDSCxtRUFBd0IsQ0FBQTtRQUM1QixDQUFDLEVBOUVXLFNBQVMsR0FBVCxjQUFTLEtBQVQsY0FBUyxRQThFcEI7SUFDTCxDQUFDLEVBdkZnQixJQUFJLEdBQUosUUFBSSxLQUFKLFFBQUksUUF1RnBCO0FBQ0wsQ0FBQyxFQTFGUyxHQUFHLEtBQUgsR0FBRyxRQTBGWjtBQzFGRCw2Q0FBNkM7QUFDN0MsSUFBVSxHQUFHLENBb0JaO0FBckJELDZDQUE2QztBQUM3QyxXQUFVLEdBQUc7SUFFVDs7Ozs7T0FLRztJQUNIO1FBSUksc0JBQVksYUFBZ0M7WUFDeEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFDdkMsQ0FBQztRQUVELHFDQUFjLEdBQWQsVUFBZSxPQUFpQyxFQUFFLEdBQVM7WUFDdkQsTUFBTSxJQUFJLEtBQUssQ0FBQyxnQ0FBVSxPQUFTLENBQUMsQ0FBQztRQUN6QyxDQUFDO1FBQ0wsbUJBQUM7SUFBRCxDQVhBLEFBV0MsSUFBQTtJQVhZLGdCQUFZLGVBV3hCLENBQUE7QUFDTCxDQUFDLEVBcEJTLEdBQUcsS0FBSCxHQUFHLFFBb0JaO0FDckJELDZDQUE2QztBQUM3QywwQ0FBMEM7QUFDMUMsSUFBVSxHQUFHLENBc0RaO0FBeERELDZDQUE2QztBQUM3QywwQ0FBMEM7QUFDMUMsV0FBVSxHQUFHO0lBQ1Q7Ozs7O09BS0c7SUFDSDtRQUtJLHdCQUFZLGFBQWdDO1lBQ3hDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxJQUFBLFlBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUNwRCxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUN2QyxDQUFDO1FBRUQsdUNBQWMsR0FBZCxVQUFlLE9BQWdDLEVBQUUsR0FBUTtZQUNyRCxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLEVBQUU7Z0JBQ3JDLFFBQVEsT0FBTyxFQUFFO29CQUNiLEtBQUssSUFBQSxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWE7d0JBQzdCLE1BQU0sSUFBSSxLQUFLLENBQUksSUFBQSxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsU0FBSSxHQUFLLENBQUMsQ0FBQztvQkFDOUQsS0FBSyxJQUFBLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWTt3QkFDNUIsTUFBTSxJQUFJLEtBQUssQ0FBSSxJQUFBLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxTQUFJLEdBQUssQ0FBQyxDQUFDO29CQUM3RCxLQUFLLElBQUEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPO3dCQUN2QixNQUFNLElBQUksS0FBSyxDQUFJLElBQUEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLFNBQUksR0FBSyxDQUFDLENBQUM7b0JBQ3hELEtBQUssSUFBQSxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVk7d0JBQzVCLE1BQU0sSUFBSSxLQUFLLENBQUksSUFBQSxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksU0FBSSxHQUFLLENBQUMsQ0FBQztvQkFDN0QsS0FBSyxJQUFBLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTzt3QkFDdkIsTUFBTSxJQUFJLEtBQUssQ0FBSSxJQUFBLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxTQUFJLEdBQUssQ0FBQyxDQUFDO29CQUN4RCxLQUFLLElBQUEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjO3dCQUM5QixNQUFNLElBQUksS0FBSyxDQUFJLElBQUEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLFNBQUksR0FBSyxDQUFDLENBQUM7b0JBQy9ELEtBQUssSUFBQSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVE7d0JBQ3hCLE1BQU0sSUFBSSxLQUFLLENBQUksSUFBQSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsU0FBSSxHQUFLLENBQUMsQ0FBQztvQkFDekQsS0FBSyxJQUFBLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZTt3QkFDL0IsTUFBTSxJQUFJLEtBQUssQ0FBSSxJQUFBLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxTQUFJLEdBQUssQ0FBQyxDQUFDO29CQUNoRSxLQUFLLElBQUEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRO3dCQUN4QixNQUFNLElBQUksS0FBSyxDQUFJLElBQUEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLFNBQUksR0FBSyxDQUFDLENBQUM7b0JBQ3pELEtBQUssSUFBQSxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVU7d0JBQzFCLE1BQU0sSUFBSSxLQUFLLENBQUksSUFBQSxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsU0FBSSxHQUFLLENBQUMsQ0FBQztvQkFDM0QsS0FBSyxJQUFBLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVzt3QkFDM0IsTUFBTSxJQUFJLEtBQUssQ0FBSSxJQUFBLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxTQUFJLEdBQUssQ0FBQyxDQUFDO29CQUM1RCxLQUFLLElBQUEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhO3dCQUM3QixNQUFNLElBQUksS0FBSyxDQUFJLElBQUEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLFNBQUksR0FBSyxDQUFDLENBQUM7b0JBQzlELEtBQUssSUFBQSxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVc7d0JBQzNCLE1BQU0sSUFBSSxLQUFLLENBQUksSUFBQSxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsU0FBSSxHQUFLLENBQUMsQ0FBQztvQkFDNUQ7d0JBQ0ksSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7aUJBQ2pEO2FBQ0o7aUJBQU07Z0JBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO2FBQzFDO1FBQ0wsQ0FBQztRQUNMLHFCQUFDO0lBQUQsQ0E5Q0EsQUE4Q0MsSUFBQTtJQTlDWSxrQkFBYyxpQkE4QzFCLENBQUE7QUFDTCxDQUFDLEVBdERTLEdBQUcsS0FBSCxHQUFHLFFBc0RaO0FDeERELDZDQUE2QztBQUM3Qyw0Q0FBNEM7QUFDNUMsSUFBVSxHQUFHLENBdUNaO0FBekNELDZDQUE2QztBQUM3Qyw0Q0FBNEM7QUFDNUMsV0FBVSxHQUFHO0lBRVQ7Ozs7O09BS0c7SUFDSDtRQUlJLHFCQUFZLGFBQWdDO1lBQ3hDLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxJQUFBLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUM1RCxDQUFDO1FBRUQsb0NBQWMsR0FBZCxVQUFlLE9BQWdDLEVBQUUsR0FBUztZQUV0RCxJQUFJLE9BQU8sT0FBTyxLQUFLLFFBQVEsRUFBRTtnQkFFN0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2FBRXBEO2lCQUFNLElBQUksT0FBTyxLQUFLLElBQUksRUFBRTtnQkFFekIsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBRXBDO1FBRUwsQ0FBQztRQUVELHFDQUFlLEdBQWYsVUFBZ0IsR0FBUTtZQUNwQixJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxFQUFFO2dCQUNqQixPQUFPLE9BQU8sR0FBRyxDQUFDO2FBRXJCO2lCQUFNO2dCQUNILE1BQU0sSUFBSSxLQUFLLENBQUMsOEJBQVUsQ0FBQyxDQUFDO2FBQy9CO1FBQ0wsQ0FBQztRQUNMLGtCQUFDO0lBQUQsQ0E5QkEsQUE4QkMsSUFBQTtJQTlCWSxlQUFXLGNBOEJ2QixDQUFBO0FBQ0wsQ0FBQyxFQXZDUyxHQUFHLEtBQUgsR0FBRyxRQXVDWjtBQ3pDRCw2Q0FBNkM7QUFDN0MsMkNBQTJDO0FBQzNDLElBQVUsR0FBRyxDQXlEWjtBQTNERCw2Q0FBNkM7QUFDN0MsMkNBQTJDO0FBQzNDLFdBQVUsR0FBRztJQUVUOzs7OztPQUtHO0lBQ0g7UUFJSSxxQkFBWSxZQUE2QjtZQUNyQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztZQUNwQixJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztRQUNyQyxDQUFDO1FBRUQ7Ozs7O1dBS0c7UUFDSCwrQkFBUyxHQUFULFVBQVUsY0FBdUIsRUFBRSxPQUFlLEVBQUUsVUFBa0I7WUFBdEUsaUJBZ0NDO1lBOUJHLElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJO2dCQUFFLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFFckQsMkJBQTJCO1lBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVM7Z0JBQzVCLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLElBQUEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsMEJBQTBCLENBQUMsQ0FBQztZQUU1RixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVO2dCQUM3QixJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxJQUFBLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLDJCQUEyQixDQUFDLENBQUM7WUFFN0YsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVztnQkFDOUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsSUFBQSxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSw0QkFBNEIsQ0FBQyxDQUFDO1lBRTlGLElBQUEsWUFBWSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7WUFDL0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUMxQyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDO1lBQzlDLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLG9CQUFvQixDQUFDO1lBRTlFLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFO2dCQUN0QyxJQUFJLENBQUMsWUFBWSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUM7YUFDMUQ7WUFFRCxJQUFJLENBQUMsY0FBYyxFQUFFO2dCQUNqQixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUM7b0JBQzdCLElBQUEsWUFBWSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7b0JBQ2hDLEtBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7b0JBQzNDLEtBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7b0JBQzdDLEtBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2dCQUV4QixDQUFDLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsQ0FBQzthQUN4QztRQUNMLENBQUM7UUFDTCxrQkFBQztJQUFELENBaERBLEFBZ0RDLElBQUE7SUFoRFksZUFBVyxjQWdEdkIsQ0FBQTtBQUNMLENBQUMsRUF6RFMsR0FBRyxLQUFILEdBQUcsUUF5RFo7QUMzREQsNkNBQTZDO0FBQzdDLDJDQUEyQztBQUMzQyxJQUFVLEdBQUcsQ0EyRlo7QUE3RkQsNkNBQTZDO0FBQzdDLDJDQUEyQztBQUMzQyxXQUFVLEdBQUc7SUFFVDs7Ozs7T0FLRztJQUNIO1FBS0ksc0JBQVksWUFBNkI7WUFDckMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7WUFDcEIsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7UUFDckMsQ0FBQztRQUdEOzs7OztXQUtHO1FBQ0gsZ0NBQVMsR0FBVCxVQUFVLGNBQXVCLEVBQUUsT0FBZSxFQUFFLFVBQWtCO1lBQXRFLGlCQTRCQztZQTFCRyxJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSTtnQkFBRSxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBRXJELDJCQUEyQjtZQUUzQixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXO2dCQUM5QixJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxJQUFBLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLDRCQUE0QixDQUFDLENBQUM7WUFFOUYsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWTtnQkFDL0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsSUFBQSxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSw2QkFBNkIsQ0FBQyxDQUFDO1lBRS9GLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsSUFBSSxDQUFDLEVBQUU7Z0JBQ3pDLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLHNEQUF3QixDQUFDLENBQUM7YUFDNUQ7WUFFRCxJQUFBLFlBQVksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ2pDLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDNUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQztZQUVoRCxJQUFJLGNBQWM7Z0JBQUUsT0FBTztZQUUzQixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUM7Z0JBRTdCLElBQUEsWUFBWSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7Z0JBQ2xDLEtBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFFakQsQ0FBQyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUMzQyxDQUFDO1FBRUQ7Ozs7O1dBS0c7UUFDSCxtQ0FBWSxHQUFaLFVBQWEsR0FBVztZQUF4QixpQkE0QkM7WUExQkcsMkJBQTJCO1lBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVM7Z0JBQzVCLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLElBQUEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsMEJBQTBCLENBQUMsQ0FBQztZQUU1RixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVO2dCQUM3QixJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxJQUFBLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLDJCQUEyQixDQUFDLENBQUM7WUFFN0YsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVztnQkFDOUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsSUFBQSxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSw0QkFBNEIsQ0FBQyxDQUFDO1lBRTlGLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLElBQUksQ0FBQyxFQUFFO2dCQUN2QyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxJQUFBLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLG9DQUFvQyxDQUFDLENBQUM7YUFDckc7WUFFRCxJQUFJLElBQUEsWUFBWSxDQUFDLFVBQVU7Z0JBQUUsT0FBTztZQUVwQyxJQUFBLFlBQVksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1lBQy9CLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDMUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztZQUUxQyxNQUFNLENBQUMsVUFBVSxDQUFDO2dCQUVkLElBQUEsWUFBWSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7Z0JBQ2hDLEtBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFFL0MsQ0FBQyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLENBQUE7UUFDeEMsQ0FBQztRQUNMLG1CQUFDO0lBQUQsQ0FsRkEsQUFrRkMsSUFBQTtJQWxGWSxnQkFBWSxlQWtGeEIsQ0FBQTtBQUNMLENBQUMsRUEzRlMsR0FBRyxLQUFILEdBQUcsUUEyRlo7QUM3RkQsNENBQTRDO0FDQTVDLDRDQUE0QztBQUM1QyxtREFBbUQ7QUFDbkQsbURBQW1EO0FBQ25ELG9EQUFvRDtBQUNwRCwyQ0FBMkM7QUFDM0MsSUFBVSxHQUFHLENBc0RaO0FBM0RELDRDQUE0QztBQUM1QyxtREFBbUQ7QUFDbkQsbURBQW1EO0FBQ25ELG9EQUFvRDtBQUNwRCwyQ0FBMkM7QUFDM0MsV0FBVSxHQUFHO0lBRVQ7Ozs7O09BS0c7SUFDSDtRQU9JLHNCQUFZLGFBQWdDLEVBQUUsWUFBOEI7WUFDeEUsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLElBQUEsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ2xELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxJQUFBLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUNqRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksSUFBQSxZQUFZLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDdkQsQ0FBQztRQUVEOzs7Ozs7OztXQVFHO1FBQ0gscUNBQWMsR0FBZCxVQUFlLE9BQWdDLEVBQUUsR0FBUztZQUN0RCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQztRQUN6RCxDQUFDO1FBRUQ7Ozs7O1dBS0c7UUFDSSx1Q0FBZ0IsR0FBdkIsVUFBd0IsY0FBdUIsRUFBRSxPQUFlLEVBQUUsVUFBbUI7WUFDakYsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsY0FBYyxFQUFFLE9BQU8sRUFBRSxVQUFVLENBQUMsQ0FBQztRQUNwRSxDQUFDO1FBRUQ7Ozs7O1dBS0c7UUFDSSxtQ0FBWSxHQUFuQixVQUFvQixjQUF1QixFQUFFLE9BQWUsRUFBRSxVQUFtQjtZQUM3RSxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxjQUFjLEVBQUUsT0FBTyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQ3JFLENBQUM7UUFDTCxtQkFBQztJQUFELENBN0NBLEFBNkNDLElBQUE7SUE3Q1ksZ0JBQVksZUE2Q3hCLENBQUE7QUFDTCxDQUFDLEVBdERTLEdBQUcsS0FBSCxHQUFHLFFBc0RaO0FDM0RELDRDQUE0QztBQ0E1Qyw0Q0FBNEM7QUFDNUMsMENBQTBDO0FBQzFDLDJDQUEyQztBQUMzQywyQ0FBMkM7QUFDM0MsSUFBVSxHQUFHLENBa1BaO0FBdFBELDRDQUE0QztBQUM1QywwQ0FBMEM7QUFDMUMsMkNBQTJDO0FBQzNDLDJDQUEyQztBQUMzQyxXQUFVLEdBQUc7SUFFVDs7Ozs7T0FLRztJQUNIO1FBZ0JJLHNCQUFvQixhQUFnQztZQUNoRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksSUFBQSxZQUFZLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ3JELElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1lBQ25DLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLENBQTRDLGVBQWU7WUFDdkYsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxDQUEwQyxlQUFlO1lBQ3ZGLFlBQVksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLENBQXVDLGdCQUFnQjtZQUN4RixZQUFZLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyxDQUFxQyxZQUFZO1lBQ3BGLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBVSw2QkFBNkI7UUFDekcsQ0FBQztRQUVEOzs7V0FHRztRQUNXLHdCQUFXLEdBQXpCLFVBQTBCLGFBQWdDO1lBQ3RELElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO2dCQUNqQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksWUFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUNqRCxJQUFBLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO2FBQzdCO1FBQ0wsQ0FBQztRQUtELHNCQUFrQix3QkFBUTtZQUgxQjs7ZUFFRztpQkFDSDtnQkFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtvQkFDakIsTUFBTSxJQUFJLEtBQUssQ0FBQyw4RUFBNEIsQ0FBQyxDQUFBO2lCQUNoRDtnQkFDRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDMUIsQ0FBQzs7O1dBQUE7UUFFRDs7Ozs7V0FLRztRQUNILG1DQUFZLEdBQVosVUFBYSxPQUFnQyxFQUFFLEdBQVE7WUFDbkQsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDckQsQ0FBQztRQUVEOzs7OztXQUtHO1FBQ0gsa0NBQVcsR0FBWCxVQUFZLGNBQXVCLEVBQUUsT0FBZSxFQUFFLFVBQW1CO1lBQ3JFLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxFQUFFLE9BQU8sRUFBRSxVQUFVLENBQUMsQ0FBQztRQUN2RSxDQUFDO1FBRUQ7Ozs7O1dBS0c7UUFDSCw4QkFBTyxHQUFQLFVBQVEsY0FBdUIsRUFBRSxPQUFlLEVBQUUsVUFBbUI7WUFDakUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsY0FBYyxFQUFFLE9BQU8sRUFBRSxVQUFVLENBQUMsQ0FBQztRQUNuRSxDQUFDO1FBRUQ7OztXQUdHO1FBQ0gsbUNBQVksR0FBWixVQUFhLElBQWE7WUFFdEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7WUFFdkIsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUVEOzs7V0FHRztRQUNILG9DQUFhLEdBQWIsVUFBYyxLQUFlO1lBRXpCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1lBRXpCLE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFFRDs7O1dBR0c7UUFDSCxxQ0FBYyxHQUFkLFVBQWUsSUFBYTtZQUV4QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztZQUV6QixPQUFPLElBQUksQ0FBQztRQUNoQixDQUFDO1FBRUQ7OztXQUdHO1FBQ0gsd0NBQWlCLEdBQWpCLFVBQWtCLElBQVk7WUFFMUIsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7WUFFNUIsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUVEOztXQUVHO1FBQ0gsMENBQW1CLEdBQW5CLFVBQW9CLElBQVk7WUFFNUIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQztZQUU5QixPQUFPLElBQUksQ0FBQztRQUNoQixDQUFDO1FBRUQ7OztXQUdHO1FBQ0gscUNBQWMsR0FBZCxVQUFlLElBQWE7WUFFeEIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7WUFFekIsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUVEOzs7V0FHRztRQUNILHNDQUFlLEdBQWYsVUFBZ0IsS0FBZTtZQUUzQixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztZQUUzQixPQUFPLElBQUksQ0FBQztRQUNoQixDQUFDO1FBRUQ7Ozs7V0FJRztRQUNJLDBDQUFtQixHQUExQixVQUEyQixLQUFlO1lBRXRDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7WUFFL0IsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUVELHNCQUFXLDBCQUFVO2lCQUFyQjtnQkFDSSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7WUFDNUIsQ0FBQztZQUVEOzs7ZUFHRztpQkFDSCxVQUFzQixLQUFjO2dCQUNoQyxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztZQUM3QixDQUFDOzs7V0FSQTtRQVdELHNCQUFXLDRCQUFZO2lCQUF2QjtnQkFDSSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7WUFDOUIsQ0FBQztZQUVEOzs7ZUFHRztpQkFDSCxVQUF3QixLQUFjO2dCQUNsQyxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztZQUMvQixDQUFDOzs7V0FSQTtRQVVELHNCQUFJLG1DQUFTO2lCQUFiO2dCQUNJLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUMzQixDQUFDOzs7V0FBQTtRQUdELHNCQUFJLHFDQUFXO2lCQUFmO2dCQUNJLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztZQUM3QixDQUFDOzs7V0FBQTtRQUdELHNCQUFJLHFDQUFXO2lCQUFmO2dCQUNJLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztZQUM3QixDQUFDOzs7V0FBQTtRQUVELHNCQUFJLHNDQUFZO2lCQUFoQjtnQkFDSSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7WUFDOUIsQ0FBQzs7O1dBQUE7UUFFRCxzQkFBSSxvQ0FBVTtpQkFBZDtnQkFDSSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7WUFDNUIsQ0FBQzs7O1dBQUE7UUFHRCxzQkFBSSx3Q0FBYztpQkFBbEI7Z0JBQ0ksT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDO1lBQ2hDLENBQUM7OztXQUFBO1FBR0Qsc0JBQUksMENBQWdCO2lCQUFwQjtnQkFDSSxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztZQUNsQyxDQUFDOzs7V0FBQTtRQUdELHNCQUFJLDhDQUFvQjtpQkFBeEI7Z0JBRUksT0FBTyxJQUFJLENBQUMscUJBQXFCLENBQUM7WUFDdEMsQ0FBQzs7O1dBQUE7UUFFRCxzQkFBSSwwQ0FBZ0I7aUJBQXBCO2dCQUNJLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDO1lBQ2xDLENBQUM7OztXQUFBO1FBQ0wsbUJBQUM7SUFBRCxDQXpPQSxBQXlPQyxJQUFBO0lBek9ZLGdCQUFZLGVBeU94QixDQUFBO0FBQ0wsQ0FBQyxFQWxQUyxHQUFHLEtBQUgsR0FBRyxRQWtQWjtBQ3RQRCxJQUFVLEdBQUcsQ0E0Qlo7QUE1QkQsV0FBVSxHQUFHO0lBRVQ7Ozs7O09BS0c7SUFDSDtRQUlJLDBCQUFZLGdCQUFzQztZQUM5QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsZ0JBQWdCLENBQUM7UUFDN0MsQ0FBQztRQUVEOzs7OztXQUtHO1FBQ0gsbURBQXdCLEdBQXhCLFVBQXlCLE9BQWUsRUFBRSxPQUFlLEVBQUUsU0FBaUI7WUFDeEUsSUFBTSxRQUFRLEdBQXdCLElBQUksR0FBRyxFQUFrQixDQUFDO1lBQ2hFLFFBQVEsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztRQUMzRCxDQUFDO1FBQ0wsdUJBQUM7SUFBRCxDQW5CQSxBQW1CQyxJQUFBO0lBbkJZLG9CQUFnQixtQkFtQjVCLENBQUE7QUFDTCxDQUFDLEVBNUJTLEdBQUcsS0FBSCxHQUFHLFFBNEJaO0FDNUJELGlEQUFpRDtBQUNqRCxtREFBbUQ7QUFDbkQsOENBQThDO0FBQzlDLElBQVUsR0FBRyxDQWdFWjtBQW5FRCxpREFBaUQ7QUFDakQsbURBQW1EO0FBQ25ELDhDQUE4QztBQUM5QyxXQUFVLEdBQUc7SUFFVDs7Ozs7T0FLRztJQUNIO1FBTUksMEJBQW9CLGFBQWdDO1lBQ2hELElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1lBQ25DLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxHQUFHLEVBQStCLENBQUM7WUFDekQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLElBQUEsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0MsQ0FBQztRQUVEOzs7V0FHRztRQUNXLDRCQUFXLEdBQXpCLFVBQTBCLGFBQWdDO1lBQ3RELElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO2dCQUNqQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksZ0JBQWdCLENBQUMsYUFBYSxDQUFDLENBQUM7Z0JBQ3JELElBQUEsWUFBWSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7YUFDakM7UUFDTCxDQUFDO1FBS0Qsc0JBQWtCLDRCQUFRO1lBSDFCOztlQUVHO2lCQUNIO2dCQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO29CQUNqQixJQUFBLFlBQVksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLElBQUEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsU0FBUyxDQUFDLENBQUM7b0JBQ3ZFLE9BQU87aUJBQ1Y7Z0JBQ0QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQzFCLENBQUM7OztXQUFBO1FBRUQsdUNBQVksR0FBWixVQUFhLE9BQWUsRUFBRSxHQUFvQjtZQUU5QyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUM5QixJQUFBLFlBQVksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLElBQUEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsaUJBQWlCLENBQUMsQ0FBQTthQUNyRjtpQkFBTSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFHLEdBQUssQ0FBQyxFQUFFO2dCQUNuRCxJQUFBLFlBQVksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLElBQUEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsZ0RBQWdELENBQUMsQ0FBQTthQUNwSDtZQUNELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUcsR0FBSyxDQUFDLENBQUM7UUFDckQsQ0FBQztRQUVELHNCQUFJLHVDQUFTO2lCQUliO2dCQUNJLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQTtZQUMxQixDQUFDO2lCQU5ELFVBQWMsS0FBdUM7Z0JBQ2pELElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFBO1lBQzNCLENBQUM7OztXQUFBO1FBTUQsc0JBQUkscUNBQU87aUJBQVg7Z0JBQ0ksT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFBO1lBQ3hCLENBQUM7OztXQUFBO1FBQ0wsdUJBQUM7SUFBRCxDQXZEQSxBQXVEQyxJQUFBO0lBdkRZLG9CQUFnQixtQkF1RDVCLENBQUE7QUFDTCxDQUFDLEVBaEVTLEdBQUcsS0FBSCxHQUFHLFFBZ0VaO0FDbkVELElBQVUsR0FBRyxDQWdDWjtBQWhDRCxXQUFVLEdBQUc7SUFFVCxJQUFpQixJQUFJLENBNEJwQjtJQTVCRCxXQUFpQixJQUFJO1FBRWpCOzs7OztXQUtHO1FBQ0gsSUFBWSxjQW1CWDtRQW5CRCxXQUFZLGNBQWM7WUFFdEI7OztlQUdHO1lBQ0gscURBQW1DLENBQUE7WUFFbkM7OztlQUdHO1lBQ0gsNkNBQTJCLENBQUE7WUFFM0I7OztlQUdHO1lBQ0gsNkNBQTJCLENBQUE7UUFDL0IsQ0FBQyxFQW5CVyxjQUFjLEdBQWQsbUJBQWMsS0FBZCxtQkFBYyxRQW1CekI7SUFDTCxDQUFDLEVBNUJnQixJQUFJLEdBQUosUUFBSSxLQUFKLFFBQUksUUE0QnBCO0FBRUwsQ0FBQyxFQWhDUyxHQUFHLEtBQUgsR0FBRyxRQWdDWjtBQ2hDRCxrREFBa0Q7QUNBbEQsa0RBQWtEO0FDQWxELElBQVUsR0FBRyxDQW9GWjtBQXBGRCxXQUFVLEdBQUc7SUFDVCxJQUFpQixNQUFNLENBa0Z0QjtJQWxGRCxXQUFpQixNQUFNO1FBQ25COzs7OztXQUtHO1FBQ0g7WUFBQTtZQTBFQSxDQUFDO1lBdEVHOzs7OztlQUtHO1lBQ0ksYUFBUSxHQUFmLFVBQWdCLEtBQWEsRUFBRSxNQUFjO2dCQUN6QyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzlHLENBQUM7WUFFRDs7Ozs7ZUFLRztZQUNJLGNBQVMsR0FBaEIsVUFBaUIsS0FBYSxFQUFFLE1BQWM7Z0JBQzFDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDOUcsQ0FBQztZQUVEOzs7OztlQUtHO1lBQ0ksWUFBTyxHQUFkLFVBQWUsS0FBYSxFQUFFLE1BQWM7Z0JBQ3hDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUcsQ0FBQztZQUVEOzs7OztlQUtHO1lBQ0ksa0JBQWEsR0FBcEIsVUFBcUIsS0FBYTtnQkFDOUIsSUFBSSxhQUFhLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ25ELElBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsYUFBYSxDQUFDO2dCQUNqRCxJQUFJLGFBQWEsSUFBSSxDQUFDLEVBQUU7b0JBQ3BCLE9BQU8sQ0FBQyxDQUFDO2lCQUNaO3FCQUFNO29CQUNILE9BQU8sS0FBSyxDQUFDO2lCQUNoQjtZQUNMLENBQUM7WUFFRDs7Ozs7ZUFLRztZQUNJLGlCQUFZLEdBQW5CLFVBQW9CLE1BQWM7Z0JBQzlCLElBQUksTUFBTSxHQUFHLElBQUksRUFBRTtvQkFDZixPQUFPLE1BQU0sR0FBRyxFQUFFLENBQUM7aUJBQ3RCO2dCQUNELElBQUksTUFBTSxHQUFHLElBQUksRUFBRTtvQkFDZixPQUFVLE1BQU0sR0FBRyxJQUFJLE1BQUcsQ0FBQztpQkFDOUI7WUFDTCxDQUFDO1lBRUQ7Ozs7O2VBS0c7WUFDSSxXQUFNLEdBQWIsVUFBYyxNQUFjO2dCQUN4QixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzFDLENBQUM7WUF2RWMsZUFBVSxHQUFHLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBd0V4RCxXQUFDO1NBMUVELEFBMEVDLElBQUE7UUExRVksV0FBSSxPQTBFaEIsQ0FBQTtJQUNMLENBQUMsRUFsRmdCLE1BQU0sR0FBTixVQUFNLEtBQU4sVUFBTSxRQWtGdEI7QUFDTCxDQUFDLEVBcEZTLEdBQUcsS0FBSCxHQUFHLFFBb0ZaO0FDcEZELElBQVUsR0FBRyxDQTZEWjtBQTdERCxXQUFVLEdBQUc7SUFFVCxJQUFpQixJQUFJLENBMERwQjtJQTFERCxXQUFpQixJQUFJO1FBRWpCOzs7OztXQUtHO1FBQ0gsSUFBWSxRQWlEWDtRQWpERCxXQUFZLFFBQVE7WUFFaEI7OztlQUdHO1lBQ0gscUNBQUcsQ0FBQTtZQUVIOzs7ZUFHRztZQUNILHlDQUFLLENBQUE7WUFFTDs7O2VBR0c7WUFDSCwyQ0FBTSxDQUFBO1lBRU47OztlQUdHO1lBQ0gseUNBQUssQ0FBQTtZQUVMOzs7ZUFHRztZQUNILHVDQUFJLENBQUE7WUFFSjs7O2VBR0c7WUFDSCx5Q0FBSyxDQUFBO1lBRUw7OztlQUdHO1lBQ0gsMkNBQU0sQ0FBQTtZQUVOOzs7ZUFHRztZQUNILHFDQUFHLENBQUE7UUFDUCxDQUFDLEVBakRXLFFBQVEsR0FBUixhQUFRLEtBQVIsYUFBUSxRQWlEbkI7SUFDTCxDQUFDLEVBMURnQixJQUFJLEdBQUosUUFBSSxLQUFKLFFBQUksUUEwRHBCO0FBQ0wsQ0FBQyxFQTdEUyxHQUFHLEtBQUgsR0FBRyxRQTZEWjtBQzdERCw0Q0FBNEM7QUNBNUMsNENBQTRDO0FDQTVDLG1EQUFtRDtBQUNuRCxpREFBaUQ7QUFDakQsMkNBQTJDO0FBQzNDLElBQVUsR0FBRyxDQStHWjtBQWxIRCxtREFBbUQ7QUFDbkQsaURBQWlEO0FBQ2pELDJDQUEyQztBQUMzQyxXQUFVLEdBQUc7SUFFVDs7Ozs7T0FLRztJQUNIO1FBQWtDLGdDQUFjO1FBcUI1QyxzQkFBb0IsYUFBZ0M7WUFBcEQsWUFDSSxpQkFBTyxTQUtWO1lBSkcsS0FBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7WUFDbkMsS0FBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7WUFDckIsS0FBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksR0FBRyxFQUFrQixDQUFDO1lBQ3ZELEtBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUM7O1FBQ3ZDLENBQUM7UUFFRDs7O1dBR0c7UUFDVyx3QkFBVyxHQUF6QixVQUEwQixhQUFnQztZQUN0RCxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDakIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLFlBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDakQsSUFBQSxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQzthQUM3QjtRQUNMLENBQUM7UUFLRCxzQkFBa0Isd0JBQVE7WUFIMUI7O2VBRUc7aUJBQ0g7Z0JBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7b0JBQ2pCLElBQUEsWUFBWSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBQSxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxTQUFTLENBQUMsQ0FBQztvQkFDMUUsT0FBTztpQkFDVjtnQkFDRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDMUIsQ0FBQzs7O1dBQUE7UUFFRDs7Ozs7V0FLRztRQUNJLGdDQUFTLEdBQWhCLFVBQWlCLFNBQXdDOztZQUFFLGFBQVc7aUJBQVgsVUFBVyxFQUFYLHFCQUFXLEVBQVgsSUFBVztnQkFBWCw0QkFBVzs7WUFDbEUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFBLEtBQUEsSUFBSSxDQUFDLE1BQU0sQ0FBQSxDQUFDLElBQUksMEJBQUMsU0FBUyxVQUFLLEdBQUcsSUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDNUUsQ0FBQztRQUVEOzs7OztXQUtHO1FBQ0ksb0NBQWEsR0FBcEIsVUFBcUIsU0FBaUIsRUFBRSxPQUFpQyxFQUFFLFdBQW9CO1lBQzNGLElBQUksQ0FBQyxXQUFXLElBQUksQ0FBQyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1lBQ3hELElBQUksV0FBVyxFQUFFO2dCQUNiLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQzthQUN0QztpQkFBTTtnQkFDSCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7YUFDeEM7UUFDTCxDQUFDO1FBRUQ7Ozs7OztXQU1HO1FBQ0ksbUNBQVksR0FBbkIsVUFBb0IsU0FBaUIsRUFBRSxPQUFrQixFQUFFLE1BQWU7WUFDdEUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNoRCxDQUFDO1FBRUQ7O1dBRUc7UUFDSSxtQ0FBWSxHQUFuQixVQUFvQixTQUFpQixFQUFFLFdBQTJCO1lBQzlELE9BQU8sV0FBVyxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ25ELENBQUM7UUFFRCxzQkFBVyxvQ0FBVTtpQkFBckI7Z0JBQ0ksT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFBO1lBQzNCLENBQUM7OztXQUFBO1FBRUQsc0JBQVcsOENBQW9CO2lCQUEvQjtnQkFDSSxPQUFPLElBQUksQ0FBQyxxQkFBcUIsQ0FBQTtZQUNyQyxDQUFDOzs7V0FBQTtRQUNMLG1CQUFDO0lBQUQsQ0F0R0EsQUFzR0MsQ0F0R2lDLEVBQUUsQ0FBQyxXQUFXLEdBc0cvQztJQXRHWSxnQkFBWSxlQXNHeEIsQ0FBQTtBQUNMLENBQUMsRUEvR1MsR0FBRyxLQUFILEdBQUcsUUErR1o7QUNsSEQsSUFBVSxHQUFHLENBOElaO0FBOUlELFdBQVUsR0FBRztJQUVUOzs7OztPQUtHO0lBQ0g7UUE2Qkksd0JBQW9CLGFBQWdDO1lBQ2hELElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDLENBQXNDLHFCQUFxQjtZQUM5RixJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxJQUFBLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQU0sU0FBUztZQUN0RSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUEsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBNEIsUUFBUTtZQUNqRixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQyxDQUE2QyxZQUFZO1FBQ3pGLENBQUM7UUFFRDs7O1dBR0c7UUFDVywwQkFBVyxHQUF6QixVQUEwQixhQUFnQztZQUN0RCxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDakIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDbkQsSUFBQSxVQUFVLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQzthQUMvQjtRQUNMLENBQUM7UUFNRCxzQkFBa0IsMEJBQVE7WUFIMUI7O2VBRUc7aUJBQ0g7Z0JBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7b0JBQ2pCLElBQUEsWUFBWSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBQSxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxTQUFTLENBQUMsQ0FBQztvQkFDekUsT0FBTztpQkFDVjtnQkFDRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDMUIsQ0FBQzs7O1dBQUE7UUFFRDs7Ozs7V0FLRztRQUNILG1DQUFVLEdBQVYsVUFBVyxXQUFzQyxFQUFFLE9BQW9CO1lBQ25FLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQ3pELE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFFRDs7O1dBR0c7UUFDSSxvQ0FBVyxHQUFsQixVQUFtQixXQUEyQztZQUMxRCxJQUFJLENBQUMsa0JBQWtCLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3JELENBQUM7UUFFRDs7O1dBR0c7UUFDSCwwQ0FBaUIsR0FBakIsVUFBa0IsV0FBc0M7WUFDcEQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN2RCxDQUFDO1FBRUQ7OztXQUdHO1FBQ0gsc0NBQWEsR0FBYixVQUFjLFdBQXNDO1lBQ2hELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDdkQsQ0FBQztRQUVEOztXQUVHO1FBQ0ksNkJBQUksR0FBWDtZQUFBLGlCQVdDO1lBVkcsT0FBTyxJQUFJLE9BQU8sQ0FBTyxVQUFPLE9BQU87Ozs7aUNBQy9CLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBcEIsd0JBQW9COzRCQUNwQixJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQSxNQUFNOzRCQUNwQyxxQkFBTSxJQUFJLENBQUMsa0JBQWtCLENBQUMsVUFBVSxFQUFFLEVBQUE7OzRCQUExQyxTQUEwQyxDQUFDOzRCQUMzQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQSxRQUFROzRCQUN2QyxPQUFPLEVBQUUsQ0FBQzs7OzRCQUVWLElBQUEsWUFBWSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBQSxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxlQUFlLENBQUMsQ0FBQzs7Ozs7aUJBRXRGLENBQUMsQ0FBQztRQUNQLENBQUM7UUFBQSxDQUFDO1FBRUY7OztXQUdHO1FBQ0ssMkNBQWtCLEdBQTFCLFVBQTJCLEtBQWM7WUFDckMsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7UUFDaEMsQ0FBQztRQUVEOzs7V0FHRztRQUNILCtCQUFNLEdBQU47WUFDSSxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztRQUNoQyxDQUFDO1FBRUQsc0JBQVcscUNBQVM7aUJBSXBCO2dCQUNJLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQTtZQUMxQixDQUFDO2lCQU5ELFVBQXFCLEtBQXlCO2dCQUMxQyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQTtZQUMzQixDQUFDOzs7V0FBQTtRQUtMLHFCQUFDO0lBQUQsQ0FySUEsQUFxSUMsSUFBQTtJQXJJWSxrQkFBYyxpQkFxSTFCLENBQUE7QUFDTCxDQUFDLEVBOUlTLEdBQUcsS0FBSCxHQUFHLFFBOElaO0FDOUlELElBQVUsR0FBRyxDQWdDWjtBQWhDRCxXQUFVLEdBQUc7SUFFVCxJQUFpQixJQUFJLENBNkJwQjtJQTdCRCxXQUFpQixJQUFJO1FBRWpCOzs7OztXQUtHO1FBQ0gsSUFBWSxjQW9CWDtRQXBCRCxXQUFZLGNBQWM7WUFFdEI7OztlQUdHO1lBQ0gsK0JBQWEsQ0FBQTtZQUViOzs7ZUFHRztZQUNILDJDQUF5QixDQUFBO1lBRXpCOzs7ZUFHRztZQUNILHVDQUFxQixDQUFBO1FBRXpCLENBQUMsRUFwQlcsY0FBYyxHQUFkLG1CQUFjLEtBQWQsbUJBQWMsUUFvQnpCO0lBQ0wsQ0FBQyxFQTdCZ0IsSUFBSSxHQUFKLFFBQUksS0FBSixRQUFJLFFBNkJwQjtBQUNMLENBQUMsRUFoQ1MsR0FBRyxLQUFILEdBQUcsUUFnQ1o7QUNoQ0QsSUFBVSxHQUFHLENBeUJaO0FBekJELFdBQVUsR0FBRztJQUVULElBQWlCLElBQUksQ0FzQnBCO0lBdEJELFdBQWlCLElBQUk7UUFFakI7Ozs7O1dBS0c7UUFDSCxJQUFZLGtCQWFYO1FBYkQsV0FBWSxrQkFBa0I7WUFFMUI7OztlQUdHO1lBQ0gsMkNBQXFCLENBQUE7WUFFckI7OztlQUdHO1lBQ0gsNkNBQXVCLENBQUE7UUFDM0IsQ0FBQyxFQWJXLGtCQUFrQixHQUFsQix1QkFBa0IsS0FBbEIsdUJBQWtCLFFBYTdCO0lBQ0wsQ0FBQyxFQXRCZ0IsSUFBSSxHQUFKLFFBQUksS0FBSixRQUFJLFFBc0JwQjtBQUNMLENBQUMsRUF6QlMsR0FBRyxLQUFILEdBQUcsUUF5Qlo7QUN6QkQsa0RBQWtEO0FBQ2xELHNEQUFzRDtBQ0R0RCwwQ0FBMEM7QUFDMUMsSUFBVSxHQUFHLENBcURaO0FBdERELDBDQUEwQztBQUMxQyxXQUFVLEdBQUc7SUFFVDs7Ozs7T0FLRztJQUNIO1FBT0ksaUNBQVksYUFBZ0MsRUFBQyxZQUE2QjtZQUwxRSxVQUFVO1lBQ0Ysc0JBQWlCLEdBQVksSUFBSSxDQUFDO1lBS3RDLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1lBQ25DLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO1FBQ3JDLENBQUM7UUFFRDs7O1dBR0c7UUFDSCwwREFBd0IsR0FBeEIsVUFBeUIsU0FBaUI7WUFBMUMsaUJBS0M7WUFKRyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxlQUFlLEVBQUU7OztnQ0FDeEIscUJBQU0sSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsRUFBQTs7NEJBQXJDLFNBQXFDLENBQUM7NEJBQ3RDLEVBQUUsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7Ozs7aUJBQzFCLENBQUMsQ0FBQTtRQUNOLENBQUM7UUFFRDs7Ozs7V0FLRztRQUNLLGlEQUFlLEdBQXZCLFVBQXdCLElBQVk7WUFBcEMsaUJBY0M7WUFiRyxPQUFPLElBQUksT0FBTyxDQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtnQkFDdEMsSUFBSSxLQUFJLENBQUMsaUJBQWlCLEVBQUU7b0JBQ3hCLEtBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7b0JBQy9CLFVBQVUsQ0FBQzt3QkFDUCxLQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxDQUFDO3dCQUMvQixLQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDO3dCQUM5QixPQUFPLEVBQUUsQ0FBQztvQkFDZCxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7aUJBQ1o7cUJBQU07b0JBQ0gsSUFBSSxLQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFnQjt3QkFDbkMsTUFBTSxDQUFDLDBCQUEwQixDQUFDLENBQUM7aUJBQzFDO1lBQ0wsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUNQLENBQUM7UUFDTCw4QkFBQztJQUFELENBNUNBLEFBNENDLElBQUE7SUE1Q1ksMkJBQXVCLDBCQTRDbkMsQ0FBQTtBQUNMLENBQUMsRUFyRFMsR0FBRyxLQUFILEdBQUcsUUFxRFo7QUN0REQsaURBQWlEO0FBQ2pELG1EQUFtRDtBQUNuRCxJQUFVLEdBQUcsQ0FvRlo7QUF0RkQsaURBQWlEO0FBQ2pELG1EQUFtRDtBQUNuRCxXQUFVLEdBQUc7SUFFVCxJQUFpQixHQUFHLENBaUZuQjtJQWpGRCxXQUFpQixHQUFHO1FBRWhCOzs7OztXQUtHO1FBQ0g7WUFxQkk7Z0JBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLEdBQUcsRUFBb0IsQ0FBQztZQUNoRCxDQUFDO1lBRUQ7Ozs7ZUFJRztZQUNJLHFDQUFTLEdBQWhCLFVBQWlCLFFBQTBCLEVBQUUsV0FBb0I7Z0JBQzdELElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUU7b0JBQzdCLElBQUEsWUFBWSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBQSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBSyxRQUFRLDBIQUFrQyxDQUFDLENBQUE7b0JBQzFHLE9BQU87aUJBQ1Y7Z0JBRUQsUUFBUSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7Z0JBQ25DLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ2hDLENBQUM7WUFBQSxDQUFDO1lBRUY7OztlQUdHO1lBQ0ksdUNBQVcsR0FBbEIsVUFBbUIsUUFBMEI7Z0JBQ3pDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUU7b0JBQzdCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2lCQUNsQztxQkFBTTtvQkFDSCxJQUFBLFlBQVksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLElBQUEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUssUUFBUSwrR0FBdUIsQ0FBQyxDQUFDO2lCQUNyRztZQUNMLENBQUM7WUFBQSxDQUFDO1lBRUY7O2VBRUc7WUFDSCxxQ0FBUyxHQUFUO2dCQUNJLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDMUIsQ0FBQztZQUVEOztlQUVHO1lBQ0ksNkNBQWlCLEdBQXhCO2dCQUNJLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFDOUIsQ0FBQztZQUFBLENBQUM7WUFFRjs7ZUFFRztZQUNJLDJDQUFlLEdBQXRCO2dCQUNJLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUN6QixDQUFDO1lBQUEsQ0FBQztZQUNOLHdCQUFDO1FBQUQsQ0F4RUEsQUF3RUMsSUFBQTtRQXhFcUIscUJBQWlCLG9CQXdFdEMsQ0FBQTtJQUNMLENBQUMsRUFqRmdCLEdBQUcsR0FBSCxPQUFHLEtBQUgsT0FBRyxRQWlGbkI7QUFDTCxDQUFDLEVBcEZTLEdBQUcsS0FBSCxHQUFHLFFBb0ZaO0FDdEZELElBQVUsR0FBRyxDQWtFWjtBQWxFRCxXQUFVLEdBQUc7SUFFVCxJQUFpQixJQUFJLENBK0RwQjtJQS9ERCxXQUFpQixJQUFJO1FBRWpCOzs7OztXQUtHO1FBQ0gsSUFBWSxnQkFzRFg7UUF0REQsV0FBWSxnQkFBZ0I7WUFFeEI7OztlQUdHO1lBQ0gsK0NBQTJCLENBQUE7WUFFM0I7OztlQUdHO1lBQ0gsaURBQTZCLENBQUE7WUFFN0I7OztlQUdHO1lBQ0gsMkRBQXVDLENBQUE7WUFFdkM7OztlQUdHO1lBQ0gsdURBQW1DLENBQUE7WUFFbkM7OztlQUdHO1lBQ0gsaURBQTZCLENBQUE7WUFFN0I7OztlQUdHO1lBQ0gscUVBQWlELENBQUE7WUFFakQ7OztlQUdHO1lBQ0gsdURBQW1DLENBQUE7WUFFbkM7OztlQUdHO1lBQ0gsNkRBQXlDLENBQUE7WUFFekM7O2VBRUc7WUFDSCx5Q0FBcUIsQ0FBQTtRQUN6QixDQUFDLEVBdERXLGdCQUFnQixHQUFoQixxQkFBZ0IsS0FBaEIscUJBQWdCLFFBc0QzQjtJQUNMLENBQUMsRUEvRGdCLElBQUksR0FBSixRQUFJLEtBQUosUUFBSSxRQStEcEI7QUFDTCxDQUFDLEVBbEVTLEdBQUcsS0FBSCxHQUFHLFFBa0VaO0FDakVELGtFQUFrRTtBQUVsRSxJQUFVLEdBQUcsQ0ErQlo7QUFqQ0Qsa0VBQWtFO0FBRWxFLFdBQVUsR0FBRztJQUVUOzs7OztPQUtHO0lBQ0g7UUFLSSxzQ0FBWSxPQUFnRCxFQUFFLElBQUk7WUFDOUQsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7WUFDMUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDM0IsQ0FBQztRQUVELHVEQUFnQixHQUFoQixVQUFpQixJQUE2QjtZQUMxQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3ZDLENBQUM7UUFFRCxzQkFBSSxxREFBVztpQkFBZjtnQkFDSSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDN0IsQ0FBQztpQkFFRCxVQUFnQixLQUFjO2dCQUMxQixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztZQUM5QixDQUFDOzs7V0FKQTtRQUtMLG1DQUFDO0lBQUQsQ0F0QkEsQUFzQkMsSUFBQTtJQXRCWSxnQ0FBNEIsK0JBc0J4QyxDQUFBO0FBQ0wsQ0FBQyxFQS9CUyxHQUFHLEtBQUgsR0FBRyxRQStCWjtBQ2xDRCxrRUFBa0U7QUFDbEUsbURBQW1EO0FBQ25ELHVEQUF1RDtBQUN2RCx5RkFBeUY7QUFDekYsSUFBVSxHQUFHLENBNkNaO0FBakRELGtFQUFrRTtBQUNsRSxtREFBbUQ7QUFDbkQsdURBQXVEO0FBQ3ZELHlGQUF5RjtBQUN6RixXQUFVLEdBQUc7SUFFVDs7Ozs7T0FLRztJQUNIO1FBQXNELG9EQUFxQjtRQVF2RTtZQUFBLFlBQ0ksaUJBQU8sU0FFVjtZQURHLEtBQUksQ0FBQyxRQUFRLEdBQUcsSUFBQSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsc0JBQXNCLENBQUE7O1FBQ2hFLENBQUM7UUFFRDs7OztXQUlHO1FBQ0gsb0RBQVMsR0FBVCxVQUFVLFFBQXNDLEVBQUUsV0FBb0I7WUFDbEUsaUJBQU0sU0FBUyxZQUFDLFFBQVEsRUFBRSxXQUFXLENBQUMsQ0FBQztRQUMzQyxDQUFDO1FBRUQ7OztXQUdHO1FBQ0gsaURBQU0sR0FBTixVQUFPLElBQTZCOztZQUNoQyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBRTs7b0JBQ3hCLEtBQXFCLElBQUEsS0FBQSxTQUFBLElBQUksQ0FBQyxRQUFRLENBQUEsZ0JBQUEsNEJBQUU7d0JBQS9CLElBQUksUUFBUSxXQUFBO3dCQUNiLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDaEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUU7NEJBQ3ZCLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7eUJBQzlCO3FCQUNKOzs7Ozs7Ozs7YUFDSjtRQUNMLENBQUM7UUFDTCx1Q0FBQztJQUFELENBcENBLEFBb0NDLENBcENxRCxJQUFBLEdBQUcsQ0FBQyxpQkFBaUIsR0FvQzFFO0lBcENZLG9DQUFnQyxtQ0FvQzVDLENBQUE7QUFDTCxDQUFDLEVBN0NTLEdBQUcsS0FBSCxHQUFHLFFBNkNaO0FDakRELHNEQUFzRDtBQUN0RCwyQ0FBMkM7QUFDM0MsOEdBQThHO0FBQzlHLElBQVUsR0FBRyxDQTRFWjtBQS9FRCxzREFBc0Q7QUFDdEQsMkNBQTJDO0FBQzNDLDhHQUE4RztBQUM5RyxXQUFVLEdBQUc7SUFDVDs7Ozs7T0FLRztJQUNIO1FBS0ksbUJBQVksWUFBOEI7WUFDdEMsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7WUFDakMsSUFBSSxDQUFDLElBQUEsbUJBQW1CO2lCQUNuQixRQUFRLEVBQUU7aUJBQ1YsZUFBZSxDQUFDLElBQUEsSUFBSSxDQUFDLGdCQUFnQixDQUFDLHNCQUFzQixDQUFDLEVBQUU7Z0JBQ2hFLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO2dCQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLG9DQUFvQyxDQUFDLENBQUE7YUFDcEQ7aUJBQU07Z0JBQ0gsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7YUFDMUI7UUFDTCxDQUFDO1FBRU0sa0NBQWMsR0FBckIsVUFBc0IsS0FBYSxFQUFFLE1BQWM7WUFDL0MsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7WUFDNUIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEVBQUU7Z0JBQ3BGLE1BQU07Z0JBQ04sSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDdEYsRUFBRSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxRQUFRLEVBQUUsTUFBTSxFQUFFLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsQ0FBQzthQUN2RjtpQkFBTTtnQkFDSCxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsTUFBTSxFQUFFO29CQUM5RCxJQUFJLFNBQVMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUN2RixFQUFFLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLEtBQUssRUFBRSxTQUFTLEVBQUUsRUFBRSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxDQUFDO2lCQUN0RjtxQkFBTTtvQkFDSCxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsRUFBRTt3QkFDakYsSUFBSSxTQUFTLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFDdEYsRUFBRSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsQ0FBQztxQkFDdEY7eUJBQU07d0JBQ0gsSUFBSSxTQUFTLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFDdEYsRUFBRSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztxQkFDckY7aUJBQ0o7YUFDSjtRQUNMLENBQUM7UUFFRDs7Ozs7V0FLRztRQUNILHdDQUFvQixHQUFwQjtZQUNJLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxNQUFNLEVBQUU7Z0JBQzlELElBQUk7Z0JBQ0osSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsSUFBSSxJQUFBLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRO29CQUFFLE9BQU87Z0JBQ2pGLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxHQUFHLElBQUEsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQztnQkFFcEUsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7b0JBQ2pCLElBQUEsbUJBQW1CLENBQUMsUUFBUSxFQUFvQzt5QkFDM0QsZUFBZSxDQUFDLElBQUEsSUFBSSxDQUFDLGdCQUFnQixDQUFDLHNCQUFzQixDQUFDO3lCQUM3RCxNQUFNLENBQUMsSUFBQSxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLENBQUM7aUJBQ2pEO2FBQ0o7aUJBQU07Z0JBQ0gsSUFBSTtnQkFDSixJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxJQUFJLElBQUEsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFNBQVM7b0JBQUUsT0FBTztnQkFDbEYsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLEdBQUcsSUFBQSxJQUFJLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDO2dCQUVyRSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtvQkFDakIsSUFBQSxtQkFBbUIsQ0FBQyxRQUFRLEVBQW9DO3lCQUMzRCxlQUFlLENBQUMsSUFBQSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsc0JBQXNCLENBQUM7eUJBQzdELE1BQU0sQ0FBQyxJQUFBLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztpQkFDbEQ7YUFDSjtRQUNMLENBQUM7UUFDTCxnQkFBQztJQUFELENBcEVBLEFBb0VDLElBQUE7SUFwRVksYUFBUyxZQW9FckIsQ0FBQTtBQUNMLENBQUMsRUE1RVMsR0FBRyxLQUFILEdBQUcsUUE0RVo7QUMvRUQsSUFBVSxHQUFHLENBbURaO0FBbkRELFdBQVUsR0FBRztJQUVUOzs7OztPQUtHO0lBQ0g7UUFBQTtRQTBDQSxDQUFDO1FBckNVLHdDQUFjLEdBQXJCLFVBQXNCLEtBQWEsRUFBRSxNQUFjO1lBRS9DLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUVwRCxzQkFBc0I7WUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQ2IsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQzthQUN2QztZQUNELElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDcEIsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUMvQixJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDO1lBQ2pCLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUM7WUFDbEIsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDO1lBQ2hCLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztZQUVoQixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUU7Z0JBQ3BDLElBQUk7Z0JBQ0osK0JBQStCO2dCQUMvQixHQUFHLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztnQkFDckIsR0FBRyxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7Z0JBQ3JCLFdBQVc7Z0JBQ1gsTUFBTSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUM7Z0JBQ25CLE1BQU0sR0FBRyxNQUFNLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQzthQUM3QjtpQkFBTTtnQkFDSCxJQUFJO2dCQUNKLCtCQUErQjtnQkFDL0IsR0FBRyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7Z0JBQ3RCLEdBQUcsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO2dCQUNwQixXQUFXO2dCQUNYLE1BQU0sR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDO2dCQUNsQixNQUFNLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxNQUFNLENBQUM7YUFDN0I7WUFDRCxHQUFHLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDL0MsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO1lBQ3hCLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUM3QixDQUFDO1FBRUwsc0JBQUM7SUFBRCxDQTFDQSxBQTBDQyxJQUFBO0lBMUNZLG1CQUFlLGtCQTBDM0IsQ0FBQTtBQUNMLENBQUMsRUFuRFMsR0FBRyxLQUFILEdBQUcsUUFtRFo7QUNuREQsb0RBQW9EO0FBQ3BELElBQVUsR0FBRyxDQWVaO0FBaEJELG9EQUFvRDtBQUNwRCxXQUFVLEdBQUc7SUFDVDs7Ozs7T0FLRztJQUVIO1FBQUE7UUFNQSxDQUFDO1FBSlUsc0NBQWMsR0FBckIsVUFBc0IsS0FBYSxFQUFFLE1BQWM7WUFFL0MsSUFBQSxZQUFZLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsQ0FBQTtRQUNwRCxDQUFDO1FBQ0wsb0JBQUM7SUFBRCxDQU5BLEFBTUMsSUFBQTtJQU5ZLGlCQUFhLGdCQU16QixDQUFBO0FBQ0wsQ0FBQyxFQWZTLEdBQUcsS0FBSCxHQUFHLFFBZVo7QUNoQkQsaURBQWlEO0FBQ2pELGtEQUFrRDtBQUNsRCx3REFBd0Q7QUFDeEQsc0RBQXNEO0FBQ3RELElBQVUsR0FBRyxDQTRDWjtBQWhERCxpREFBaUQ7QUFDakQsa0RBQWtEO0FBQ2xELHdEQUF3RDtBQUN4RCxzREFBc0Q7QUFDdEQsV0FBVSxHQUFHO0lBRVQ7Ozs7O09BS0c7SUFDSDtRQU9JLDJCQUFZLFlBQThCO1lBQ3RDLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO1FBQ3JDLENBQUM7UUFFRDs7Ozs7V0FLRztRQUNILG9DQUFRLEdBQVIsVUFBUyxVQUFnRCxFQUFFLEtBQWEsRUFBRSxNQUFjO1lBQ3BGLFFBQVEsVUFBVSxFQUFFO2dCQUNoQixLQUFLLElBQUEsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJO29CQUN6QixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVM7d0JBQUUsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLElBQUEsU0FBUyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztvQkFDdkUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO29CQUM3QyxNQUFNO2dCQUNWLEtBQUssSUFBQSxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVU7b0JBQy9CLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZTt3QkFBRSxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksSUFBQSxlQUFlLEVBQUUsQ0FBQztvQkFDeEUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFBO29CQUNsRCxNQUFNO2dCQUNWLEtBQUssSUFBQSxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVE7b0JBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYTt3QkFBRSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksSUFBQSxhQUFhLEVBQUUsQ0FBQztvQkFDbEUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO29CQUNqRCxNQUFNO2dCQUNWO29CQUNJLFVBQVUsQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO2FBQ2hEO1FBQ0wsQ0FBQztRQUNMLHdCQUFDO0lBQUQsQ0FuQ0EsQUFtQ0MsSUFBQTtJQW5DWSxxQkFBaUIsb0JBbUM3QixDQUFBO0FBQ0wsQ0FBQyxFQTVDUyxHQUFHLEtBQUgsR0FBRyxRQTRDWjtBQ2hERCxtREFBbUQ7QUFDbkQsaURBQWlEO0FBQ2pELGtEQUFrRDtBQUNsRCxpREFBaUQ7QUFDakQscURBQXFEO0FBQ3JELGtEQUFrRDtBQUNsRCxxREFBcUQ7QUFDckQsK0NBQStDO0FBRS9DLElBQVUsR0FBRyxDQXdJWjtBQWpKRCxtREFBbUQ7QUFDbkQsaURBQWlEO0FBQ2pELGtEQUFrRDtBQUNsRCxpREFBaUQ7QUFDakQscURBQXFEO0FBQ3JELGtEQUFrRDtBQUNsRCxxREFBcUQ7QUFDckQsK0NBQStDO0FBRS9DLFdBQVUsR0FBRztJQUVUOzs7OztPQUtHO0lBQ0g7UUFXSSxzQkFBb0IsYUFBZ0M7WUFDaEQsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7WUFDbkMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsQ0FBbUQsUUFBUTtZQUNwRixJQUFJLENBQUMsYUFBYSxHQUFHLEdBQUcsQ0FBQyxDQUFtRCxRQUFRO1lBQ3BGLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxJQUFJLElBQUEsdUJBQXVCLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ2hGLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLElBQUEsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBVyxlQUFlO1lBQy9FLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBQSxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFnQyxrQkFBa0I7UUFDbEcsQ0FBQztRQUVEOzs7O1dBSUc7UUFDVyx3QkFBVyxHQUF6QixVQUEwQixhQUFnQztZQUN0RCxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDakIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLFlBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDakQsSUFBQSxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQzthQUM3QjtRQUNMLENBQUM7UUFLRCxzQkFBa0Isd0JBQVE7WUFIMUI7O2VBRUc7aUJBQ0g7Z0JBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7b0JBQ2pCLElBQUEsWUFBWSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBQSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxTQUFTLENBQUMsQ0FBQztvQkFDdkUsT0FBTztpQkFDVjtnQkFDRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDMUIsQ0FBQzs7O1dBQUE7UUFFRDs7OztXQUlHO1FBQ0gscUNBQWMsR0FBZCxVQUFlLEtBQWE7WUFDeEIsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7WUFDMUIsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUVEOzs7O1dBSUc7UUFDSCxzQ0FBZSxHQUFmLFVBQWdCLE1BQWM7WUFDMUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUM7WUFDNUIsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUVEOzs7OztXQUtHO1FBQ0gsaUNBQVUsR0FBVixVQUFXLEtBQTRDO1lBQ25ELElBQUksS0FBSyxFQUFFO2dCQUNQLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO2dCQUNuQixRQUFRLEtBQUssRUFBRTtvQkFDWCxLQUFLLElBQUEsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVO3dCQUMvQixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUEsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQzt3QkFDeEQsTUFBTTtvQkFDVixLQUFLLElBQUEsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRO3dCQUM3QixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUEsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQzt3QkFDekQsTUFBTTtvQkFDVixLQUFLLElBQUEsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJO3dCQUN6QixNQUFNO29CQUNWO3dCQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUNBQW1DLENBQUMsQ0FBQTt3QkFDaEQsTUFBTTtpQkFDYjthQUNKO1lBQ0QsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ25GLE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFFRDs7Ozs7V0FLRztRQUNJLG9DQUFhLEdBQXBCLFVBQXFCLElBQVk7WUFDN0IsSUFBSSxDQUFDLHVCQUF1QixDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hFLENBQUM7UUFFRDs7O1dBR0c7UUFDSSxrQ0FBVyxHQUFsQixVQUFtQixJQUFZO1lBQzNCLElBQUksQ0FBQyxJQUFBLGNBQWMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDN0MsSUFBQSxZQUFZLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxJQUFBLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLDJCQUEyQixDQUFDLENBQUM7YUFDNUY7WUFDRCxFQUFFLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFBLGNBQWMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3JFLENBQUM7UUFFRDs7O1dBR0c7UUFDSSxrQ0FBVyxHQUFsQixVQUFtQixLQUFtQjtZQUNsQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDcEIsQ0FBQztRQUdELHNCQUFJLHdDQUFjO2lCQUFsQjtnQkFDSSxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7WUFDaEMsQ0FBQztpQkFFRCxVQUFtQixLQUE4QjtnQkFDN0MsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7WUFDakMsQ0FBQzs7O1dBSkE7UUFLTCxtQkFBQztJQUFELENBL0hBLEFBK0hDLElBQUE7SUEvSFksZ0JBQVksZUErSHhCLENBQUE7QUFDTCxDQUFDLEVBeElTLEdBQUcsS0FBSCxHQUFHLFFBd0laO0FDakpELG1EQUFtRDtBQUNuRCxpREFBaUQ7QUFDakQsK0NBQStDO0FBRS9DLElBQVUsR0FBRyxDQTZFWjtBQWpGRCxtREFBbUQ7QUFDbkQsaURBQWlEO0FBQ2pELCtDQUErQztBQUUvQyxXQUFVLEdBQUc7SUFFVDs7Ozs7T0FLRztJQUNIO1FBT0ksMEJBQW9CLGFBQWdDO1lBQ2hELElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1FBQ3ZDLENBQUM7UUFFRDs7O1dBR0c7UUFDVyw0QkFBVyxHQUF6QixVQUEwQixhQUFnQztZQUN0RCxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDakIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUNyRCxJQUFBLFlBQVksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO2FBQ2pDO1FBQ0wsQ0FBQztRQUtELHNCQUFrQiw0QkFBUTtZQUgxQjs7ZUFFRztpQkFDSDtnQkFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtvQkFDakIsSUFBQSxZQUFZLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxJQUFBLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFFLFNBQVMsQ0FBQyxDQUFDO29CQUM1RSxPQUFPO2lCQUNWO2dCQUNELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUMxQixDQUFDOzs7V0FBQTtRQUVEOzs7O1dBSUc7UUFDSSwwQ0FBZSxHQUF0QixVQUE4RyxZQUFlO1lBQ3pILElBQUksQ0FBQyxRQUFRLEdBQUcsWUFBWSxDQUFDO1lBQzdCLE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFFRDs7OztXQUlHO1FBQ0gsdUNBQVksR0FBWixVQUF3QyxXQUE4RDtZQUNsRyxPQUFPLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pDLENBQUM7UUFFRDs7V0FFRztRQUNILGdDQUFLLEdBQUwsVUFBTSxXQUE0QjtZQUM5QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDaEIsSUFBQSxZQUFZO3FCQUNQLFFBQVE7cUJBQ1IsWUFBWSxDQUFDLElBQUEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQ3JDLHdDQUF3QyxDQUFDLENBQUE7YUFDcEQ7WUFDRCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ25FLENBQUM7UUFFRCxzQkFBVyxrQ0FBSTtpQkFBZjtnQkFDSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQzs7O1dBQUE7UUFDTCx1QkFBQztJQUFELENBcEVBLEFBb0VDLElBQUE7SUFwRVksb0JBQWdCLG1CQW9FNUIsQ0FBQTtBQUNMLENBQUMsRUE3RVMsR0FBRyxLQUFILEdBQUcsUUE2RVo7QUNqRkQsSUFBVSxHQUFHLENBZ0RaO0FBaERELFdBQVUsR0FBRztJQUVULElBQWlCLElBQUksQ0E2Q3BCO0lBN0NELFdBQWlCLElBQUk7UUFFakI7Ozs7O1dBS0c7UUFDSCxJQUFZLFFBb0NYO1FBcENELFdBQVksUUFBUTtZQUNoQjs7O2VBR0c7WUFDSCx3Q0FBUyxDQUFBO1lBRVQ7OztlQUdHO1lBQ0gsZ0RBQWEsQ0FBQTtZQUViOzs7ZUFHRztZQUNILDhDQUFZLENBQUE7WUFFWjs7O2VBR0c7WUFDSCxpREFBYyxDQUFBO1lBRWQ7OztlQUdHO1lBQ0gsaURBQWMsQ0FBQTtZQUVkOzs7ZUFHRztZQUNILG9EQUFnQixDQUFBO1FBQ3BCLENBQUMsRUFwQ1csUUFBUSxHQUFSLGFBQVEsS0FBUixhQUFRLFFBb0NuQjtJQUNMLENBQUMsRUE3Q2dCLElBQUksR0FBSixRQUFJLEtBQUosUUFBSSxRQTZDcEI7QUFDTCxDQUFDLEVBaERTLEdBQUcsS0FBSCxHQUFHLFFBZ0RaO0FDaERELElBQVUsR0FBRyxDQXFEWjtBQXJERCxXQUFVLEdBQUc7SUFFVCxJQUFpQixJQUFJLENBa0RwQjtJQWxERCxXQUFpQixJQUFJO1FBQ2pCOzs7OztXQUtHO1FBRUgsSUFBWSxZQXlDWDtRQXpDRCxXQUFZLFlBQVk7WUFDcEI7OztlQUdHO1lBQ0gsOEJBQWMsQ0FBQTtZQUVkOzs7ZUFHRztZQUNILCtCQUFlLENBQUE7WUFFZjs7O2VBR0c7WUFDSCxnQ0FBZ0IsQ0FBQTtZQUVoQjs7O2VBR0c7WUFDSCwrQkFBZSxDQUFBO1lBRWY7OztlQUdHO1lBQ0gsK0JBQWUsQ0FBQTtZQUVmOztlQUVHO1lBQ0gsaUNBQWlCLENBQUE7WUFFakI7O2VBRUc7WUFDSCxnQ0FBZ0IsQ0FBQTtRQUVwQixDQUFDLEVBekNXLFlBQVksR0FBWixpQkFBWSxLQUFaLGlCQUFZLFFBeUN2QjtJQUNMLENBQUMsRUFsRGdCLElBQUksR0FBSixRQUFJLEtBQUosUUFBSSxRQWtEcEI7QUFDTCxDQUFDLEVBckRTLEdBQUcsS0FBSCxHQUFHLFFBcURaO0FDckRELGlEQUFpRDtBQUNqRCxpREFBaUQ7QUFDakQsb0RBQW9EO0FBQ3BELGtEQUFrRDtBQUNsRCxxREFBcUQ7QUFDckQsaURBQWlEO0FBQ2pELG9EQUFvRDtBQUNwRCxvREFBb0Q7QUFDcEQsd0RBQXdEO0FBQ3hELHlEQUF5RDtBQUN6RCxvREFBb0Q7QUFDcEQsSUFBVSxHQUFHLENBOFZaO0FBeldELGlEQUFpRDtBQUNqRCxpREFBaUQ7QUFDakQsb0RBQW9EO0FBQ3BELGtEQUFrRDtBQUNsRCxxREFBcUQ7QUFDckQsaURBQWlEO0FBQ2pELG9EQUFvRDtBQUNwRCxvREFBb0Q7QUFDcEQsd0RBQXdEO0FBQ3hELHlEQUF5RDtBQUN6RCxvREFBb0Q7QUFDcEQsV0FBVSxHQUFHO0lBRVQ7Ozs7O09BS0c7SUFDSDtRQTRGSTtZQUNJLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLENBQWdDLE9BQU87WUFDL0QsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEVBQUUsQ0FBQyxDQUEyQixXQUFXO1lBQ25FLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLENBQW1DLE1BQU07WUFDOUQsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUMsQ0FBZ0MsTUFBTTtZQUM5RCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUEsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBbUIsUUFBUTtZQUNoRSxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxDQUFrQyxNQUFNO1lBQzlELElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDLENBQWlDLE1BQU07WUFDOUQsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUMsQ0FBNEIsU0FBUztZQUNqRSxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQyxDQUEyQixTQUFTO1lBQ2pFLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBQSxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQSxDQUFjLHdCQUF3QjtZQUNoRixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxDQUErQixXQUFXO1lBQ25FLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUEsQ0FBTyxrQkFBa0I7WUFDMUUsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxDQUEwQixpQkFBaUI7UUFDN0UsQ0FBQztRQU9ELHNCQUFrQiw2QkFBUTtZQUwxQjs7OztlQUlHO2lCQUNIO2dCQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO29CQUNqQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksaUJBQWlCLEVBQUUsQ0FBQztpQkFDNUM7Z0JBQ0QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQzFCLENBQUM7OztXQUFBO1FBRUQ7Ozs7O1dBS0c7UUFDSCx5Q0FBYSxHQUFiLFVBQWMsSUFBWTtZQUV0QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztZQUV4QixPQUFPLElBQUksQ0FBQztRQUNoQixDQUFDO1FBRUQ7Ozs7O1dBS0c7UUFDSCwwQ0FBYyxHQUFkLFVBQWUsTUFBYztZQUN6QixJQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQTtZQUMxQixPQUFPLElBQUksQ0FBQztRQUNoQixDQUFDO1FBRUQ7Ozs7O1dBS0c7UUFDSCwyQ0FBZSxHQUFmLFVBQWdCLE1BQWM7WUFDMUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUM7WUFDNUIsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUVEOzs7OztXQUtHO1FBQ0gsMENBQWMsR0FBZCxVQUFlLE1BQWU7WUFFMUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUM7WUFFN0IsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUVEOzs7OztXQUtHO1FBQ0ksMkNBQWUsR0FBdEIsVUFBdUIsTUFBZTtZQUVsQyxJQUFJLENBQUMsZUFBZSxHQUFHLE1BQU0sQ0FBQztZQUU5QixPQUFPLElBQUksQ0FBQztRQUNoQixDQUFDO1FBRUQ7Ozs7O1dBS0c7UUFDSCx1Q0FBVyxHQUFYLFVBQVksSUFBbUI7WUFDM0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7WUFDdkIsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUdEOzs7OztXQUtHO1FBQ0gsZ0RBQW9CLEdBQXBCLFVBQXFCLEdBQVc7WUFDNUIsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEdBQUcsQ0FBQztZQUM5QixPQUFPLElBQUksQ0FBQztRQUNoQixDQUFDO1FBRUQ7Ozs7O1dBS0c7UUFDSCx1Q0FBVyxHQUFYLFVBQVksWUFBb0I7WUFDNUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxZQUFZLENBQUM7WUFDOUIsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUVEOzs7OztXQUtHO1FBQ0gsd0NBQVksR0FBWixVQUFhLE1BQWU7WUFDeEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7WUFDdEIsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUVEOzs7OztXQUtHO1FBQ0gseUNBQWEsR0FBYixVQUFjLFNBQWtCO1lBRTVCLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO1lBRTVCLE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFFRDs7Ozs7O1dBTUc7UUFDSCw2Q0FBaUIsR0FBakIsVUFBa0IsR0FBWTtZQUMxQixJQUFJLENBQUMsaUJBQWlCLEdBQUcsR0FBRyxDQUFDO1lBQzdCLE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFFRDs7Ozs7V0FLRztRQUNILHlDQUFhLEdBQWIsVUFBYyxJQUF3QjtZQUNsQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDO1lBQy9CLE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFFRDs7Ozs7V0FLRztRQUNILDBDQUFjLEdBQWQsVUFBZSxHQUFXO1lBQ3RCLElBQUksQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDO1lBQ3hCLE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFFRDs7V0FFRztRQUNJLGlDQUFLLEdBQVo7WUFDSSxFQUFFLENBQUMsS0FBSyxDQUFDLG9CQUFvQixDQUFDLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7WUFDeEQsSUFBQSxZQUFZLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQy9CLElBQUEsWUFBWSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMvQixJQUFBLGVBQWUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEMsSUFBQSxZQUFZLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQy9CLElBQUEsY0FBYyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNqQyxJQUFBLGNBQWMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDakMsSUFBQSxZQUFZLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQy9CLElBQUEsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZDLENBQUM7UUFJRCxzQkFBSSxnREFBaUI7WUFGN0Isd0VBQXdFO2lCQUVoRTtnQkFDSSxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztZQUNuQyxDQUFDOzs7V0FBQTtRQUVELHNCQUFJLHlDQUFVO2lCQUFkO2dCQUNJLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztZQUM1QixDQUFDOzs7V0FBQTtRQUVELHNCQUFJLHFDQUFNO2lCQUFWO2dCQUNJLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUN4QixDQUFDOzs7V0FBQTtRQUVELHNCQUFJLHdDQUFTO2lCQUFiO2dCQUNJLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUMzQixDQUFDOzs7V0FBQTtRQUVELHNCQUFJLHdDQUFTO2lCQUFiO2dCQUNJLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUMzQixDQUFDOzs7V0FBQTtRQUVELHNCQUFJLDBDQUFXO2lCQUFmO2dCQUNJLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztZQUM3QixDQUFDOzs7V0FBQTtRQUVELHNCQUFJLDJDQUFZO2lCQUFoQjtnQkFDSSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7WUFDOUIsQ0FBQzs7O1dBQUE7UUFFRCxzQkFBSSx1Q0FBUTtpQkFBWjtnQkFDSSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDMUIsQ0FBQzs7O1dBQUE7UUFFRCxzQkFBSSwrQ0FBZ0I7aUJBQXBCO2dCQUNJLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDO1lBQ2xDLENBQUM7OztXQUFBO1FBRUQsc0JBQUksNkNBQWM7aUJBQWxCO2dCQUNJLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQTtZQUMvQixDQUFDOzs7V0FBQTtRQUVELHNCQUFJLDRDQUFhO2lCQUFqQjtnQkFDSSxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7WUFDL0IsQ0FBQzs7O1dBQUE7UUFFRCxzQkFBSSwwQ0FBVztpQkFBZjtnQkFDSSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDN0IsQ0FBQzs7O1dBQUE7UUFFRCxzQkFBSSxnREFBaUI7aUJBQXJCO2dCQUNJLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDO1lBQ25DLENBQUM7OztXQUFBO1FBQ0wsd0JBQUM7SUFBRCxDQXJWQSxBQXFWQyxJQUFBO0lBclZZLHFCQUFpQixvQkFxVjdCLENBQUE7QUFDTCxDQUFDLEVBOVZTLEdBQUcsS0FBSCxHQUFHLFFBOFZaO0FDeldELElBQVUsR0FBRyxDQTRCWjtBQTVCRCxXQUFVLEdBQUc7SUFFVCxJQUFpQixHQUFHLENBeUJuQjtJQXpCRCxXQUFpQixHQUFHO1FBRWhCOzs7OztXQUtHO1FBQ0g7WUFTSSx5QkFBc0IsVUFBa0IsRUFBRSxJQUFZLEVBQUUsR0FBVztnQkFDL0QsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUE7Z0JBQzVCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFBO2dCQUNoQixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQTtZQUNsQixDQUFDO1lBUGdCLG9CQUFJLEdBQUcsUUFBUSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBVXJFLHNCQUFDO1NBaEJELEFBZ0JDLElBQUE7UUFoQnFCLG1CQUFlLGtCQWdCcEMsQ0FBQTtJQUNMLENBQUMsRUF6QmdCLEdBQUcsR0FBSCxPQUFHLEtBQUgsT0FBRyxRQXlCbkI7QUFDTCxDQUFDLEVBNUJTLEdBQUcsS0FBSCxHQUFHLFFBNEJaO0FDNUJELDBEQUEwRDtBQUMxRCxzREFBc0Q7QUFDdEQsb0RBQW9EO0FBQ3BELG9EQUFvRDtBQUNwRCw2Q0FBNkM7QUFDN0MsSUFBVSxHQUFHLENBNkJaO0FBbENELDBEQUEwRDtBQUMxRCxzREFBc0Q7QUFDdEQsb0RBQW9EO0FBQ3BELG9EQUFvRDtBQUNwRCw2Q0FBNkM7QUFDN0MsV0FBVSxHQUFHO0lBRVQ7Ozs7O09BS0c7SUFDSDtRQUE2QiwyQkFBbUI7UUFJNUMsaUJBQVksVUFBa0IsRUFBRSxJQUFZLEVBQUUsR0FBVztZQUF6RCxZQUNJLGtCQUFNLFVBQVUsRUFBRSxJQUFJLEVBQUUsR0FBRyxDQUFDLFNBRS9CO1lBREcsS0FBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDOztRQUNuRCxDQUFDO1FBRUQsNEJBQVUsR0FBVjtZQUNJLElBQUksR0FBRyxHQUFNLElBQUEsaUJBQWlCLENBQUMsUUFBUSxDQUFDLGlCQUFpQixTQUFJLElBQUksQ0FBQyxHQUFHLFNBQUksSUFBSSxDQUFDLFVBQVUsU0FBTSxDQUFDO1lBQy9GLElBQUksSUFBQSxjQUFjLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQzVDLElBQUEsWUFBWSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBQSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxzRkFBbUIsR0FBSyxDQUFDLENBQUE7YUFDdkY7WUFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsR0FBRyxZQUFZLENBQUM7WUFDakMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztZQUMvQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7WUFDekIsSUFBQSxHQUFHLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3BELElBQUEsY0FBYyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQy9DLENBQUM7UUFDTCxjQUFDO0lBQUQsQ0FwQkEsQUFvQkMsQ0FwQjRCLElBQUEsR0FBRyxDQUFDLGVBQWUsR0FvQi9DO0lBcEJZLFdBQU8sVUFvQm5CLENBQUE7QUFDTCxDQUFDLEVBN0JTLEdBQUcsS0FBSCxHQUFHLFFBNkJaO0FDbENELDBEQUEwRDtBQUMxRCxzREFBc0Q7QUFDdEQsb0RBQW9EO0FBQ3BELG9EQUFvRDtBQUNwRCw2Q0FBNkM7QUFFN0MsSUFBVSxHQUFHLENBOEJaO0FBcENELDBEQUEwRDtBQUMxRCxzREFBc0Q7QUFDdEQsb0RBQW9EO0FBQ3BELG9EQUFvRDtBQUNwRCw2Q0FBNkM7QUFFN0MsV0FBVSxHQUFHO0lBRVQ7UUFBZ0MsOEJBQW1CO1FBVS9DLG9CQUFZLFVBQWtCLEVBQUUsSUFBWSxFQUFFLEdBQVc7WUFBekQsWUFDSSxrQkFBTSxVQUFVLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxTQUkvQjtZQUZHLEtBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQzs7UUFFckQsQ0FBQztRQUVELCtCQUFVLEdBQVY7WUFDSSxJQUFJLEdBQUcsR0FBTSxJQUFBLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsU0FBSSxJQUFJLENBQUMsR0FBRyxTQUFJLElBQUksQ0FBQyxVQUFVLFFBQUssQ0FBQztZQUM5RixJQUFJLElBQUEsY0FBYyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUM1QyxJQUFBLFlBQVksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLElBQUEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsc0ZBQW1CLEdBQUssQ0FBQyxDQUFBO2FBQ3ZGO1lBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztZQUMvQixJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7WUFDeEIsSUFBQSxHQUFHLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3BELElBQUEsY0FBYyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQy9DLENBQUM7UUFDTCxpQkFBQztJQUFELENBM0JBLEFBMkJDLENBM0IrQixJQUFBLEdBQUcsQ0FBQyxlQUFlLEdBMkJsRDtJQTNCWSxjQUFVLGFBMkJ0QixDQUFBO0FBQ0wsQ0FBQyxFQTlCUyxHQUFHLEtBQUgsR0FBRyxRQThCWjtBQ3BDRCxzREFBc0Q7QUFDdEQsb0RBQW9EO0FBQ3BELDZDQUE2QztBQUM3QyxJQUFVLEdBQUcsQ0F1SVo7QUExSUQsc0RBQXNEO0FBQ3RELG9EQUFvRDtBQUNwRCw2Q0FBNkM7QUFDN0MsV0FBVSxHQUFHO0lBRVQsSUFBaUIsR0FBRyxDQW9JbkI7SUFwSUQsV0FBaUIsR0FBRztRQUVoQjs7Ozs7V0FLRztRQUNIO1lBU0ksbUJBQXNCLFFBQWdCLEVBQUUsSUFBYyxFQUFFLEdBQVcsRUFBRSxNQUFjO2dCQUUvRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFlLFlBQVk7Z0JBQzVDLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQWlCLE9BQU87Z0JBQ3ZDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLENBQU8sV0FBVztnQkFDM0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUEsQ0FBWSxxQkFBcUI7Z0JBQ3JELElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDLENBQVEsV0FBVztnQkFDM0MsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDOUQsQ0FBQztZQUVEOztlQUVHO1lBQ0ksaUNBQWEsR0FBcEI7Z0JBQ0ksSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLEVBQUUsQ0FBQyxVQUFVLEVBQUU7b0JBQzdCLElBQUksQ0FBQyxXQUFXO3lCQUNYLE9BQU8sQ0FDSixJQUFJLENBQUMsR0FBRyxFQUNSLElBQUksQ0FBQyxJQUFJLEVBQ1QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQy9CLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUNsQyxDQUFDO2lCQUNUO3FCQUFNO29CQUNILG1DQUFtQztvQkFDbkMseUNBQXlDO29CQUN6QyxJQUFJLENBQUMsV0FBVzt5QkFDWCxTQUFTLENBQ04sSUFBSSxDQUFDLFFBQVEsRUFDYixFQUFFLENBQUMsVUFBVSxFQUNiLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUMvQixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FDbEMsQ0FBQztpQkFDVDtZQUNMLENBQUM7WUFFRDs7Ozs7ZUFLRztZQUNLLG1DQUFlLEdBQXZCLFVBQXdCLEtBQVksRUFBRSxNQUEwQjtnQkFDNUQsSUFBSSxLQUFLLEVBQUU7b0JBQ1AsSUFBQSxZQUFZLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxJQUFBLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO2lCQUNyRTtxQkFBTSxJQUFJLENBQUMsQ0FBQyxNQUFNLFlBQVksRUFBRSxDQUFDLFVBQVUsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO29CQUNqRSxJQUFBLFlBQVksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLElBQUEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsZ0RBQVcsSUFBSSxDQUFDLEdBQUcsTUFBRyxDQUFDLENBQUM7aUJBQ3RGO2dCQUNELElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUNoRCxDQUFDO1lBRUQ7Ozs7O2VBS0c7WUFDSyxtQ0FBZSxHQUF2QixVQUF3QixRQUFnQixFQUFFLFdBQW1CO2dCQUN6RCxPQUFPO2dCQUNQLElBQUksUUFBUSxHQUFHLElBQUEsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxRQUFRLEdBQUcsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBRWxFLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUU7b0JBRWhDLG1CQUFtQjtvQkFDbkIsZ0NBQWdDO29CQUNoQyxJQUFJLFFBQVEsSUFBSSxDQUFDLEVBQUU7d0JBQ2YsUUFBUSxHQUFHLElBQUksQ0FBQTtxQkFDbEI7b0JBQ0Qsa0JBQWtCO29CQUNsQixJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7b0JBQ25GLElBQUksQ0FBQyxjQUFjLEdBQUcsUUFBUSxDQUFDO2lCQUNsQztZQUNMLENBQUM7WUFFRDs7O2VBR0c7WUFDTyxxQ0FBaUIsR0FBM0I7Z0JBQ0ksVUFBVTtnQkFDVixnQ0FBZ0M7Z0JBQ2hDLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxXQUFXLEVBQUU7b0JBQzdCLElBQUEsY0FBYyxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDL0QsSUFBQSxjQUFjLENBQUMsUUFBUSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO2lCQUN6RTtxQkFBTTtvQkFDSCxJQUFBLGNBQWMsQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQ2pFLElBQUEsY0FBYyxDQUFDLFFBQVEsQ0FBQywwQkFBMEIsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO2lCQUN4RTtZQUNMLENBQUM7WUFFRDs7Ozs7O2VBTUc7WUFDTyxzQ0FBa0IsR0FBNUIsVUFBNkIsR0FBVyxFQUFFLEtBQWEsRUFBRSxNQUFjO2dCQUNuRSxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssV0FBVyxFQUFFO29CQUM3QixJQUFBLGNBQWMsQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztvQkFDekQsSUFBQSxjQUFjLENBQUMsUUFBUSxDQUFDLHFCQUFxQixDQUFDLEdBQUcsRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7aUJBQ3JFO3FCQUFNO29CQUNILElBQUEsY0FBYyxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO29CQUMzRCxJQUFBLGNBQWMsQ0FBQyxRQUFRLENBQUMsMEJBQTBCLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO2lCQUNsRTtZQUNMLENBQUM7WUFVTCxnQkFBQztRQUFELENBM0hBLEFBMkhDLElBQUE7UUEzSHFCLGFBQVMsWUEySDlCLENBQUE7SUFDTCxDQUFDLEVBcElnQixHQUFHLEdBQUgsT0FBRyxLQUFILE9BQUcsUUFvSW5CO0FBQ0wsQ0FBQyxFQXZJUyxHQUFHLEtBQUgsR0FBRyxRQXVJWjtBQzFJRCxzREFBc0Q7QUFDdEQsb0RBQW9EO0FBQ3BELDhDQUE4QztBQUM5Qyw2Q0FBNkM7QUFDN0MsSUFBVSxHQUFHLENBMkNaO0FBL0NELHNEQUFzRDtBQUN0RCxvREFBb0Q7QUFDcEQsOENBQThDO0FBQzlDLDZDQUE2QztBQUM3QyxXQUFVLEdBQUc7SUFFVDs7Ozs7T0FLRztJQUNIO1FBQTZCLDJCQUFhO1FBRXRDLGlCQUFZLFFBQWdCLEVBQUUsSUFBUyxFQUFFLEdBQVcsRUFBRSxNQUFjO21CQUNoRSxrQkFBTSxRQUFRLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxNQUFNLENBQUM7UUFDdEMsQ0FBQztRQUVEOzs7OztXQUtHO1FBQ0gsaUNBQWUsR0FBZixVQUFnQixRQUFnQixFQUFFLEtBQXFCOztZQUVuRCxJQUFJLFNBQVMsR0FBZ0MsSUFBSSxHQUFHLEVBQTBCLENBQUM7O2dCQUMvRSxLQUFtQixJQUFBLEtBQUEsU0FBQSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsZUFBZSxFQUFFLENBQUEsZ0JBQUEsNEJBQUU7b0JBQTFDLElBQUksTUFBTSxXQUFBO29CQUNYLDZCQUE2QjtvQkFDN0IseUNBQXlDO29CQUN6QyxJQUFJLFNBQVMsR0FBRyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7b0JBQ3ZDLElBQUksU0FBUyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRTt3QkFDekIsSUFBSSxRQUFRLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLEVBQUUsQ0FBQyxDQUFDO3dCQUNyRCxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztxQkFDbkM7eUJBQU07d0JBQ0gsSUFBSSxVQUFVLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQzt3QkFDN0IsU0FBUyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDLENBQUM7cUJBQ3JDO2lCQUNKOzs7Ozs7Ozs7WUFFRCxJQUFBLGNBQWMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFFeEQsVUFBVTtZQUNWLGdDQUFnQztZQUNoQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUM3QixDQUFDO1FBQ0wsY0FBQztJQUFELENBbENBLEFBa0NDLENBbEM0QixJQUFBLEdBQUcsQ0FBQyxTQUFTLEdBa0N6QztJQWxDWSxXQUFPLFVBa0NuQixDQUFBO0FBQ0wsQ0FBQyxFQTNDUyxHQUFHLEtBQUgsR0FBRyxRQTJDWjtBQy9DRCxzREFBc0Q7QUFDdEQsb0RBQW9EO0FBQ3BELDhDQUE4QztBQUM5Qyw2Q0FBNkM7QUFDN0MsSUFBVSxHQUFHLENBaUNaO0FBckNELHNEQUFzRDtBQUN0RCxvREFBb0Q7QUFDcEQsOENBQThDO0FBQzlDLDZDQUE2QztBQUM3QyxXQUFVLEdBQUc7SUFFVDs7Ozs7T0FLRztJQUNIO1FBQStCLDZCQUFhO1FBRXhDLG1CQUFZLFFBQWdCLEVBQUUsSUFBUyxFQUFFLEdBQVcsRUFBRSxNQUFjO21CQUNoRSxrQkFBTSxRQUFRLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxNQUFNLENBQUM7UUFDdEMsQ0FBQztRQUVEOzs7OztXQUtHO1FBQ0gsbUNBQWUsR0FBZixVQUFnQixRQUFnQixFQUFFLEtBQTBCOzs7Z0JBQ3hELGFBQWE7Z0JBQ2IsS0FBa0IsSUFBQSxVQUFBLFNBQUEsS0FBSyxDQUFBLDRCQUFBLCtDQUFFO29CQUFwQixJQUFJLEtBQUssa0JBQUE7b0JBQ1YsSUFBSSxHQUFHLEdBQVcsS0FBSyxDQUFDLElBQUksQ0FBQztvQkFDN0IsSUFBSSxJQUFBLGNBQWMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUM7d0JBQ3pDLElBQUEsWUFBWSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBQSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBSyxHQUFHLG1IQUFzQixDQUFDLENBQUE7b0JBQzVGLElBQUEsY0FBYyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztpQkFDcEQ7Ozs7Ozs7OztZQUNELFVBQVU7WUFDVixnQ0FBZ0M7WUFDaEMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDN0IsQ0FBQztRQUNMLGdCQUFDO0lBQUQsQ0F4QkEsQUF3QkMsQ0F4QjhCLElBQUEsR0FBRyxDQUFDLFNBQVMsR0F3QjNDO0lBeEJZLGFBQVMsWUF3QnJCLENBQUE7QUFDTCxDQUFDLEVBakNTLEdBQUcsS0FBSCxHQUFHLFFBaUNaO0FDckNELHNEQUFzRDtBQUN0RCxvREFBb0Q7QUFDcEQsOENBQThDO0FBQzlDLDZDQUE2QztBQUU3QyxJQUFVLEdBQUcsQ0FzQ1o7QUEzQ0Qsc0RBQXNEO0FBQ3RELG9EQUFvRDtBQUNwRCw4Q0FBOEM7QUFDOUMsNkNBQTZDO0FBRTdDLFdBQVUsR0FBRztJQUVUOzs7OztPQUtHO0lBQ0g7UUFBZ0MsOEJBQWE7UUFFekMsb0JBQVksUUFBZ0IsRUFBRSxJQUFTLEVBQUUsR0FBVyxFQUFFLE1BQWM7bUJBQ2hFLGtCQUFNLFFBQVEsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLE1BQU0sQ0FBQztRQUV0QyxDQUFDO1FBRUQ7Ozs7O1dBS0c7UUFDSCxvQ0FBZSxHQUFmLFVBQWdCLFFBQWdCLEVBQUUsS0FBdUI7OztnQkFFckQsS0FBbUIsSUFBQSxVQUFBLFNBQUEsS0FBSyxDQUFBLDRCQUFBLCtDQUFFO29CQUFyQixJQUFJLE1BQU0sa0JBQUE7b0JBRVgsSUFBSSxJQUFBLGNBQWMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUU7d0JBQ3BELElBQUEsWUFBWSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBQSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBSyxNQUFNLENBQUMsSUFBSSx1R0FBOEIsQ0FBQyxDQUFBO3dCQUN4RyxPQUFPO3FCQUNWO3lCQUFNO3dCQUNILElBQUEsY0FBYyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7cUJBQzlEO2lCQUNKOzs7Ozs7Ozs7WUFFRCxVQUFVO1lBQ1YsZ0NBQWdDO1lBQ2hDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQzdCLENBQUM7UUFDTCxpQkFBQztJQUFELENBN0JBLEFBNkJDLENBN0IrQixJQUFBLEdBQUcsQ0FBQyxTQUFTLEdBNkI1QztJQTdCWSxjQUFVLGFBNkJ0QixDQUFBO0FBQ0wsQ0FBQyxFQXRDUyxHQUFHLEtBQUgsR0FBRyxRQXNDWjtBQzNDRCxzREFBc0Q7QUFDdEQsb0RBQW9EO0FBQ3BELDhDQUE4QztBQUM5Qyw2Q0FBNkM7QUFFN0MsSUFBVSxHQUFHLENBaUNaO0FBdENELHNEQUFzRDtBQUN0RCxvREFBb0Q7QUFDcEQsOENBQThDO0FBQzlDLDZDQUE2QztBQUU3QyxXQUFVLEdBQUc7SUFFVDs7Ozs7T0FLRztJQUNIO1FBQWdDLDZCQUFhO1FBRXpDLG1CQUFZLFFBQWdCLEVBQUUsSUFBUyxFQUFFLEdBQVcsRUFBRSxNQUFjO21CQUNoRSxrQkFBTSxRQUFRLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxNQUFNLENBQUM7UUFDdEMsQ0FBQztRQUVEOzs7OztXQUtHO1FBQ0gsbUNBQWUsR0FBZixVQUFnQixRQUFnQixFQUFFLEtBQVU7WUFFeEMsSUFBSSxJQUFBLGNBQWMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUM7Z0JBQy9DLElBQUEsWUFBWSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBQSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBSyxRQUFRLHVHQUFvQixDQUFDLENBQUE7WUFFL0YsSUFBQSxjQUFjLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBRXRELFVBQVU7WUFDVixnQ0FBZ0M7WUFDaEMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFFN0IsQ0FBQztRQUNMLGdCQUFDO0lBQUQsQ0F4QkEsQUF3QkMsQ0F4QitCLElBQUEsR0FBRyxDQUFDLFNBQVMsR0F3QjVDO0lBeEJhLGFBQVMsWUF3QnRCLENBQUE7QUFDTCxDQUFDLEVBakNTLEdBQUcsS0FBSCxHQUFHLFFBaUNaO0FDdENELHNEQUFzRDtBQUN0RCxvREFBb0Q7QUFDcEQsOENBQThDO0FBQzlDLDZDQUE2QztBQUM3QyxJQUFVLEdBQUcsQ0E2RFo7QUFqRUQsc0RBQXNEO0FBQ3RELG9EQUFvRDtBQUNwRCw4Q0FBOEM7QUFDOUMsNkNBQTZDO0FBQzdDLFdBQVUsR0FBRztJQUVUOzs7OztPQUtHO0lBQ0g7UUFBK0IsNkJBQWE7UUFFeEMsbUJBQVksUUFBZ0IsRUFBRSxJQUFTLEVBQUUsR0FBVyxFQUFFLE1BQWM7bUJBQ2hFLGtCQUFNLFFBQVEsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLE1BQU0sQ0FBQztRQUV0QyxDQUFDO1FBRUQ7Ozs7O1dBS0c7UUFDSCxtQ0FBZSxHQUFmLFVBQWdCLFFBQWdCLEVBQUUsS0FBNkI7O1lBRTNELElBQUksSUFBQSxjQUFjLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQ2hELElBQUEsWUFBWSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBQSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO2FBQ2xGO1lBRUQsSUFBQSxjQUFjLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRXpELElBQUksU0FBUyxHQUFHLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUN2QyxJQUFJLFNBQVMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDOztnQkFDeEMsS0FBa0IsSUFBQSxVQUFBLFNBQUEsS0FBSyxDQUFBLDRCQUFBLCtDQUFFO29CQUFwQixJQUFJLEtBQUssa0JBQUE7b0JBRVYsSUFBSSxVQUFVLEdBQWtCLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQztvQkFDM0UsSUFBSSxVQUFVLEdBQXdCLElBQUksR0FBRyxFQUFrQixDQUFDOzt3QkFDaEUsYUFBYTt3QkFDYixLQUFzQixJQUFBLDhCQUFBLFNBQUEsVUFBVSxDQUFBLENBQUEsc0NBQUEsOERBQUU7NEJBQTdCLElBQUksU0FBUyx1QkFBQTs0QkFDZCxzQ0FBc0M7NEJBQ3RDLElBQUksU0FBUyxFQUFFO2dDQUNYLElBQUksaUJBQWlCLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLENBQUM7Z0NBQzFELGtDQUFrQztnQ0FDbEMsSUFBSSxpQkFBaUIsS0FBSyxFQUFFLEVBQUU7b0NBQzFCLFVBQVUsQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDO2lDQUN4QztxQ0FBTTtvQ0FDSCxJQUFJLFVBQVUsQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsRUFBRTt3Q0FDbkMsSUFBQSxZQUFZLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxJQUFBLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFLLFNBQVMsNklBQWdELENBQUMsQ0FBQztxQ0FDNUg7b0NBQ0QsVUFBVSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxTQUFTLENBQUMsQ0FBQztpQ0FDaEQ7NkJBQ0o7aUNBQU07Z0NBQ0gsVUFBVSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUM7NkJBQ3hDO3lCQUNKOzs7Ozs7Ozs7b0JBQ0Qsd0JBQXdCO2lCQUMzQjs7Ozs7Ozs7O1lBRUQsVUFBVTtZQUNWLGdDQUFnQztZQUNoQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUM3QixDQUFDO1FBQ0wsZ0JBQUM7SUFBRCxDQXBEQSxBQW9EQyxDQXBEOEIsSUFBQSxHQUFHLENBQUMsU0FBUyxHQW9EM0M7SUFwRFksYUFBUyxZQW9EckIsQ0FBQTtBQUNMLENBQUMsRUE3RFMsR0FBRyxLQUFILEdBQUcsUUE2RFo7QUNqRUQsOENBQThDO0FBQzlDLDZDQUE2QztBQUU3QyxJQUFVLEdBQUcsQ0FrRFo7QUFyREQsOENBQThDO0FBQzlDLDZDQUE2QztBQUU3QyxXQUFVLEdBQUc7SUFFVDs7Ozs7T0FLRztJQUNIO1FBQThCLDRCQUFhO1FBRXZDLGtCQUFZLFFBQWdCLEVBQUUsSUFBUyxFQUFFLEdBQVcsRUFBRSxNQUFjO21CQUNoRSxrQkFBTSxRQUFRLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxNQUFNLENBQUM7UUFDdEMsQ0FBQztRQUVEOzs7Ozs7V0FNRztRQUNILGtDQUFlLEdBQWYsVUFBZ0IsUUFBZ0IsRUFBRSxLQUFtQjs7WUFFakQsTUFBTTtZQUNOLElBQUksU0FBUyxHQUFrQixLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ2hFLElBQUksT0FBTyxHQUFHLElBQUksR0FBRyxFQUFrQixDQUFDOztnQkFFeEMsS0FBa0IsSUFBQSxjQUFBLFNBQUEsU0FBUyxDQUFBLG9DQUFBLDJEQUFFO29CQUF4QixJQUFJLEtBQUssc0JBQUE7b0JBRVYsYUFBYTtvQkFDYixJQUFJLEtBQUssR0FBa0IsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFFNUMsc0JBQXNCO29CQUN0QixJQUFJLEdBQUcsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ25CLElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDckIsSUFBSSxHQUFHLElBQUksRUFBRSxFQUFFO3dCQUNYLFNBQVM7cUJBQ1o7b0JBQ0QscUJBQXFCO29CQUNyQixJQUFJLGVBQWUsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztvQkFDakQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsZUFBZSxDQUFDLENBQUM7aUJBQ3JDOzs7Ozs7Ozs7WUFFRCxJQUFBLGNBQWMsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFFM0QsVUFBVTtZQUNWLGdDQUFnQztZQUNoQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUM3QixDQUFDO1FBQ0wsZUFBQztJQUFELENBekNBLEFBeUNDLENBekM2QixJQUFBLEdBQUcsQ0FBQyxTQUFTLEdBeUMxQztJQXpDWSxZQUFRLFdBeUNwQixDQUFBO0FBQ0wsQ0FBQyxFQWxEUyxHQUFHLEtBQUgsR0FBRyxRQWtEWjtBQ3JERCxtREFBbUQ7QUFDbkQsaURBQWlEO0FBQ2pELDJDQUEyQztBQUMzQyxvREFBb0Q7QUFDcEQsdURBQXVEO0FBQ3ZELDhDQUE4QztBQUM5QyxnREFBZ0Q7QUFDaEQsaURBQWlEO0FBQ2pELGdEQUFnRDtBQUNoRCxnREFBZ0Q7QUFDaEQsK0NBQStDO0FBQy9DLElBQVUsR0FBRyxDQXNJWjtBQWpKRCxtREFBbUQ7QUFDbkQsaURBQWlEO0FBQ2pELDJDQUEyQztBQUMzQyxvREFBb0Q7QUFDcEQsdURBQXVEO0FBQ3ZELDhDQUE4QztBQUM5QyxnREFBZ0Q7QUFDaEQsaURBQWlEO0FBQ2pELGdEQUFnRDtBQUNoRCxnREFBZ0Q7QUFDaEQsK0NBQStDO0FBQy9DLFdBQVUsR0FBRztJQUVUOzs7OztPQUtHO0lBQ0g7UUFTSSx5QkFBWSxjQUFrQyxFQUFFLGFBQWdDO1lBQzVFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxLQUFLLEVBQVksQ0FBQztZQUN6QyxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztZQUNuQyxJQUFJLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQztRQUN6QyxDQUFDO1FBRUQ7Ozs7OztXQU1HO1FBQ0gsb0NBQVUsR0FBVixVQUFXLFFBQWdCLEVBQUUsSUFBbUIsRUFBRSxHQUFXO1lBQTdELGlCQXFCQztZQW5CRyxJQUFJLElBQUksQ0FBQyxXQUFXO2dCQUFFLE9BQU87WUFDN0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLE9BQU8sQ0FBTztZQUNqQyxDQUFDLENBQUMsQ0FBQztZQUVILHlCQUF5QjtZQUN6QixPQUFPLElBQUksT0FBTyxDQUFPLFVBQUMsT0FBTztnQkFDN0IsSUFBSSxDQUFDLEtBQUksQ0FBQyxZQUFZLEVBQUU7b0JBQ3BCLEtBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO29CQUN6QixFQUFFLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxjQUFjLEVBQUUsVUFBQyxLQUFLLEVBQUUsTUFBTTt3QkFDckQsSUFBSSxLQUFLLEVBQUU7NEJBQ1AsSUFBQSxZQUFZLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUE7eUJBQ3hFO3dCQUNELEtBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDO3dCQUMxQixPQUFPLEVBQUUsQ0FBQztvQkFDZCxDQUFDLENBQUMsQ0FBQTtpQkFDTDtxQkFBTSxJQUFJLENBQUMsS0FBSSxDQUFDLFdBQVcsSUFBSSxLQUFJLENBQUMsWUFBWSxFQUFFO29CQUMvQyxLQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsY0FBYyxDQUFDLENBQUMsQ0FBQztpQkFDN0Y7WUFDTCxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUM7UUFFRDs7Ozs7V0FLRztRQUNJLHFDQUFXLEdBQWxCLFVBQW1CLFFBQWdCLEVBQUUsSUFBbUIsRUFBRSxHQUFXO1lBQ2pFLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDekQsQ0FBQztRQUVEOzs7OztXQUtHO1FBQ0csMkNBQWlCLEdBQXZCLFVBQXdCLFFBQWdCLEVBQUUsSUFBbUIsRUFBRSxHQUFXOzs7O2dDQUV0RSxxQkFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsR0FBRyxDQUFDLEVBQUE7OzRCQUExQyxTQUEwQyxDQUFDOzRCQUMzQyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLGNBQWMsQ0FBQyxDQUFDOzRCQUV4RCxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtnQ0FDOUIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRTtvQ0FDNUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO29DQUN0QixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO2lDQUM1Qjs2QkFDSjs7Ozs7U0FDSjtRQUVEOzs7Ozs7O1dBT0c7UUFDSyx1Q0FBYSxHQUFyQixVQUFzQixRQUFnQixFQUFFLElBQW1CLEVBQUUsR0FBVyxFQUFFLE1BQWM7WUFDcEYsUUFBUSxJQUFJLEVBQUU7Z0JBQ1YsS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHO29CQUN0QixJQUFJLElBQUEsT0FBTyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsV0FBVyxFQUFFLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQyxhQUFhLEVBQUUsQ0FBQztvQkFDbkUsTUFBTTtnQkFDVixLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUs7b0JBQ3hCLElBQUksSUFBQSxTQUFTLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFDO29CQUNuRSxNQUFNO2dCQUNWLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTTtvQkFDekIsSUFBSSxJQUFBLFVBQVUsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUMsYUFBYSxFQUFFLENBQUM7b0JBQ2pFLE1BQU07Z0JBQ1YsS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLO29CQUN4QixJQUFJLElBQUEsU0FBUyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsWUFBWSxFQUFFLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQyxhQUFhLEVBQUUsQ0FBQztvQkFDdEUsTUFBTTtnQkFDVixLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUs7b0JBQ3hCLElBQUksSUFBQSxTQUFTLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxVQUFVLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFDO29CQUNyRSxNQUFNO2dCQUNWLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSTtvQkFDdkIsSUFBSSxJQUFBLFFBQVEsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBRSxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUMsYUFBYSxFQUFFLENBQUM7b0JBQ2xFLE1BQU07Z0JBQ1Y7b0JBQ0ksSUFBQSxZQUFZLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsa0JBQWtCLENBQUMsQ0FBQzthQUMxRjtRQUNMLENBQUM7UUFFRDs7Ozs7V0FLRztRQUNILG1EQUF5QixHQUF6QixVQUEwQixJQUFZLEVBQUUsSUFBbUIsRUFBRSxHQUFXO1lBQ3BFLFFBQVEsSUFBSSxFQUFFO2dCQUNWLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRztvQkFDdEIsSUFBSSxJQUFBLE9BQU8sQ0FBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLEdBQUcsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO29CQUNoRCxNQUFLO2dCQUNULEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTTtvQkFDekIsSUFBSSxJQUFBLFVBQVUsQ0FBQyxJQUFJLEVBQUUsaUJBQWlCLEVBQUUsR0FBRyxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7b0JBQzFELE1BQUs7Z0JBQ1Q7b0JBQ0ksSUFBQSxZQUFZLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsZUFBZSxDQUFDLENBQUM7YUFDdkY7UUFDTCxDQUFDO1FBQ0wsc0JBQUM7SUFBRCxDQTdIQSxBQTZIQyxJQUFBO0lBN0hZLG1CQUFlLGtCQTZIM0IsQ0FBQTtBQUNMLENBQUMsRUF0SVMsR0FBRyxLQUFILEdBQUcsUUFzSVo7QUNqSkQsbURBQW1EO0FBQ25ELGlEQUFpRDtBQUNqRCwyQ0FBMkM7QUFDM0MsZ0RBQWdEO0FBQ2hELG1EQUFtRDtBQUNuRCw2Q0FBNkM7QUFDN0MsSUFBVSxHQUFHLENBb0VaO0FBMUVELG1EQUFtRDtBQUNuRCxpREFBaUQ7QUFDakQsMkNBQTJDO0FBQzNDLGdEQUFnRDtBQUNoRCxtREFBbUQ7QUFDbkQsNkNBQTZDO0FBQzdDLFdBQVUsR0FBRztJQUVUOzs7OztPQUtHO0lBQ0g7UUFLSSx5QkFBWSxjQUFrQyxFQUFDLGFBQWdDO1lBQzNFLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO1lBQ3JDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxJQUFBLGVBQWUsQ0FBQyxjQUFjLEVBQUMsYUFBYSxDQUFDLENBQUM7UUFDckUsQ0FBQztRQUVEOzs7OztXQUtHO1FBQ0kscUNBQVcsR0FBbEIsVUFBbUIsSUFBWSxFQUFFLElBQW1CLEVBQUUsR0FBVztZQUM3RCxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDOUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ3JELElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDOUMsQ0FBQztRQUVEOzs7OztXQUtHO1FBQ1UsMkNBQWlCLEdBQTlCLFVBQStCLElBQVksRUFBRSxJQUFtQixFQUFFLEdBQVc7Ozs7OzRCQUV6RSxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7NEJBQzlCLElBQUksQ0FBQyxjQUFjLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQzs0QkFDdkQscUJBQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxFQUFBOzs0QkFBckQsU0FBcUQsQ0FBQzs7Ozs7U0FDekQ7UUFFRDs7OztXQUlHO1FBQ0ssNENBQWtCLEdBQTFCLFVBQTJCLElBQVk7WUFFbkMsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDaEQsSUFBQSxZQUFZLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxJQUFBLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFLLElBQUksZ0hBQXdCLENBQUMsQ0FBQzthQUMvRjtZQUNELElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ2xELElBQUEsWUFBWSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBQSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBSyxJQUFJLGdIQUF3QixDQUFDLENBQUM7YUFDL0Y7UUFDTCxDQUFDO1FBRUQ7Ozs7O1dBS0c7UUFDSCxtREFBeUIsR0FBekIsVUFBMEIsSUFBWSxFQUFFLElBQW1CLEVBQUUsR0FBVztZQUNwRSxJQUFJLENBQUMsT0FBTyxDQUFDLHlCQUF5QixDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDNUQsQ0FBQztRQUNMLHNCQUFDO0lBQUQsQ0EzREEsQUEyREMsSUFBQTtJQTNEWSxtQkFBZSxrQkEyRDNCLENBQUE7QUFDTCxDQUFDLEVBcEVTLEdBQUcsS0FBSCxHQUFHLFFBb0VaO0FDMUVELG1EQUFtRDtBQUNuRCxpREFBaUQ7QUFDakQsMENBQTBDO0FBQzFDLDJDQUEyQztBQUMzQyxtREFBbUQ7QUFDbkQsNkNBQTZDO0FBQzdDLElBQVUsR0FBRyxDQWdXWjtBQXRXRCxtREFBbUQ7QUFDbkQsaURBQWlEO0FBQ2pELDBDQUEwQztBQUMxQywyQ0FBMkM7QUFDM0MsbURBQW1EO0FBQ25ELDZDQUE2QztBQUM3QyxXQUFVLEdBQUc7SUFFVDs7Ozs7T0FLRztJQUNIO1FBa0RJLHdCQUFvQixhQUFnQztZQUNoRCxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztZQUNuQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksSUFBQSxlQUFlLENBQUMsSUFBSSxFQUFDLGFBQWEsQ0FBQyxDQUFDLENBQU8sbUJBQW1CO1lBQ3pGLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLEdBQUcsRUFBa0IsQ0FBQyxDQUFpQyxPQUFPO1lBQzNGLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLEdBQUcsRUFBa0IsQ0FBQyxDQUErQixPQUFPO1lBQzNGLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxHQUFHLEVBQXVDLENBQUMsQ0FBc0IsSUFBSTtZQUN4RixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksR0FBRyxFQUEyQixDQUFDLENBQWdDLElBQUk7WUFDeEYsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLEdBQUcsRUFBK0IsQ0FBQyxDQUF5QixRQUFRO1lBQzVGLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxHQUFHLEVBQXFCLENBQUMsQ0FBcUMsS0FBSztZQUN6RixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksR0FBRyxFQUFzQyxDQUFDLENBQXVCLFlBQVk7WUFDaEcsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLEdBQUcsRUFBd0IsQ0FBQyxDQUFtQyxJQUFJO1lBQ3hGLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxHQUFHLEVBQVUsQ0FBQyxDQUFnRCx3QkFBd0I7WUFDNUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLEdBQUcsRUFBeUIsQ0FBQyxDQUFrQyxjQUFjO1lBQ2xHLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQXFFLFNBQVM7WUFDN0YsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsQ0FBK0QsUUFBUTtZQUM1RixJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQyxDQUE0RCxXQUFXO1lBQy9GLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxDQUFDLENBQUMsQ0FBdUQsd0JBQXdCO1FBQ2hILENBQUM7UUFHRDs7O1dBR0c7UUFDVywwQkFBVyxHQUF6QixVQUEwQixhQUFnQztZQUN0RCxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDakIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDbkQsSUFBQSxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQzthQUM1QjtRQUNMLENBQUM7UUFNRCxzQkFBa0IsMEJBQVE7WUFIMUI7O2VBRUc7aUJBQ0g7Z0JBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7b0JBQ2pCLElBQUEsWUFBWSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBQSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsQ0FBQztvQkFDdEUsT0FBTztpQkFDVjtnQkFDRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDMUIsQ0FBQzs7O1dBQUE7UUFFRDs7Ozs7V0FLRztRQUNILDhDQUFxQixHQUFyQixVQUFzQixJQUFZLEVBQUUsUUFBZ0IsRUFBRSxLQUFhO1lBRS9ELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDdkMsU0FBUztZQUNULElBQUksQ0FBQyxXQUFXLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDMUMsSUFBSSxJQUFJLENBQUMsV0FBVyxJQUFJLENBQUM7Z0JBQUUsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsQ0FBQSxXQUFXO1lBRTlELG1DQUFtQztZQUNuQyxJQUFJLEtBQUssSUFBSSxDQUFDLEVBQUU7Z0JBQ1osSUFBSSxDQUFDLG1CQUFtQixJQUFJLENBQUMsQ0FBQztnQkFDOUIsSUFBSSxJQUFJLENBQUMsbUJBQW1CLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtvQkFDeEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7aUJBQ3hCO2FBQ0o7WUFFRCxZQUFZO1lBQ1osSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFFeEIsWUFBWTtnQkFDWiwrQkFBK0I7Z0JBQy9CLElBQUksYUFBYSxHQUNiLENBQUMsSUFBQSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztvQkFDMUMsSUFBQSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBRXBELElBQUksYUFBYSxFQUFFO29CQUNmLE9BQU07aUJBQ1Q7cUJBQU07b0JBQ0gsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO29CQUN2QyxxQkFBcUI7b0JBQ3JCLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUEsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNuRSxJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksQ0FBQyxFQUFFO3dCQUN2Qix3QkFBd0I7d0JBQ3hCLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO3dCQUNmLHNCQUFzQjt3QkFDdEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7cUJBQzdCO2lCQUNKO2FBQ0o7UUFDTCxDQUFDO1FBRUQ7Ozs7O1dBS0c7UUFDSSxtREFBMEIsR0FBakMsVUFBa0MsSUFBWSxFQUFFLEtBQWE7WUFDekQsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztRQUMzQyxDQUFDO1FBRUQ7Ozs7O1dBS0c7UUFDSyw2Q0FBb0IsR0FBNUIsVUFBNkIsSUFBWSxFQUFFLEtBQWE7WUFFcEQsMkJBQTJCO1lBQzNCLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ3hCLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUM5QixJQUFJLEtBQUssSUFBSSxDQUFDLEVBQUU7b0JBQ1osc0JBQXNCO29CQUN0QixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDN0I7YUFDSjtRQUNMLENBQUM7UUFFRDs7Ozs7OztXQU9HO1FBQ0gsa0NBQVMsR0FBVCxVQUFVLElBQVksRUFBRSxJQUFtQixFQUFFLEdBQVcsRUFBRSxjQUF3QjtZQUM5RSxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQztZQUNoQixJQUFJLGNBQWMsRUFBRTtnQkFDaEIsR0FBRyxHQUFNLEdBQUcsU0FBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVUsQ0FBQzthQUNqRDtZQUNELElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDbEQsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUVEOzs7Ozs7OztXQVFHO1FBQ0gsbUNBQVUsR0FBVixVQUFXLElBQVksRUFBRSxJQUFtQixFQUFFLEdBQVcsRUFBRSxjQUF3QjtZQUUvRSxJQUFJLGNBQWMsRUFBRTtnQkFFaEIsR0FBRyxHQUFNLEdBQUcsU0FBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVUsQ0FBQTthQUVoRDtZQUVELElBQUksQ0FBQyxlQUFlLENBQUMsaUJBQWlCLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUUvRCxPQUFPLElBQUksQ0FBQztRQUNoQixDQUFDO1FBRUQ7Ozs7V0FJRztRQUNILGlDQUFRLEdBQVIsVUFBUyxPQUFtQyxFQUFFLE9BQWdCO1lBQzFELElBQUksT0FBTyxFQUFFO2dCQUNULElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUU7b0JBQzNCLElBQUEsWUFBWSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBQSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSx3QkFBd0IsQ0FBQyxDQUFDO29CQUNyRixPQUFPO2lCQUNWO2dCQUNELElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztnQkFDbkMsT0FBTyxJQUFJLENBQUM7YUFDZjtpQkFBTTtnQkFDSCxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO29CQUN4QixJQUFBLFlBQVksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLElBQUEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsa0NBQWtDLENBQUMsQ0FBQztvQkFDL0YsT0FBTztpQkFDVjtnQkFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7YUFDbkM7UUFDTCxDQUFDO1FBRUQ7Ozs7V0FJRztRQUNILHFDQUFZLEdBQVosVUFBYSxJQUFZLEVBQUUsZUFBd0I7WUFFL0MsSUFBSSxlQUFlLEVBQUU7Z0JBRWpCLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFFaEQ7aUJBQU07Z0JBRUgsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUVoRDtRQUNMLENBQUM7UUFFRDs7Ozs7V0FLRztRQUNILDJDQUFrQixHQUFsQixVQUFtQixJQUFZLEVBQUUsSUFBbUIsRUFBRSxHQUFXO1lBRTdELElBQUksQ0FBQyxlQUFlLENBQUMseUJBQXlCLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztZQUVoRSxPQUFPLElBQUksQ0FBQztRQUNoQixDQUFDO1FBRUQ7O1dBRUc7UUFDSCw4QkFBSyxHQUFMO1lBRUksY0FBYyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFFcEMsQ0FBQztRQUlELHNCQUFJLDRDQUFnQjtZQW9DcEIsa0ZBQWtGO2lCQUVsRjtnQkFDSSxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQTtZQUNqQyxDQUFDO1lBMUNELGtGQUFrRjtpQkFFbEYsVUFBcUIsS0FBMEI7Z0JBQzNDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUE7WUFDbEMsQ0FBQzs7O1dBQUE7UUFFRCxzQkFBSSw4Q0FBa0I7aUJBc0N0QjtnQkFDSSxPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQTtZQUNuQyxDQUFDO2lCQXhDRCxVQUF1QixLQUEwQjtnQkFDN0MsSUFBSSxDQUFDLG1CQUFtQixHQUFHLEtBQUssQ0FBQTtZQUNwQyxDQUFDOzs7V0FBQTtRQUVELHNCQUFJLGtDQUFNO2lCQXNDVjtnQkFDSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUE7WUFDdkIsQ0FBQztpQkF4Q0QsVUFBVyxLQUErQztnQkFDdEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUE7WUFDeEIsQ0FBQzs7O1dBQUE7UUFFRCxzQkFBSSxvQ0FBUTtpQkFzQ1o7Z0JBQ0ksT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFBO1lBQ3pCLENBQUM7aUJBeENELFVBQWEsS0FBbUM7Z0JBQzVDLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFBO1lBQzFCLENBQUM7OztXQUFBO1FBRUQsc0JBQUksdUNBQVc7aUJBc0NmO2dCQUNJLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQTtZQUM1QixDQUFDO2lCQXhDRCxVQUFnQixLQUF1QztnQkFDbkQsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUE7WUFDN0IsQ0FBQzs7O1dBQUE7UUFFRCxzQkFBSSxxQ0FBUztpQkFzQ2I7Z0JBQ0ksT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFBO1lBQzFCLENBQUM7aUJBeENELFVBQWMsS0FBNkI7Z0JBQ3ZDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFBO1lBQzNCLENBQUM7OztXQUFBO1FBRUQsc0JBQUksb0NBQVE7aUJBc0NaO2dCQUNJLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQTtZQUN6QixDQUFDO2lCQXhDRCxVQUFhLEtBQWdDO2dCQUN6QyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQTtZQUMxQixDQUFDOzs7V0FBQTtRQUVELHNCQUFJLHFDQUFTO2lCQXNDYjtnQkFDSSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUE7WUFDMUIsQ0FBQztpQkF4Q0QsVUFBYyxLQUFrQjtnQkFDNUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUE7WUFDM0IsQ0FBQzs7O1dBQUE7UUFFRCxzQkFBSSxvQ0FBUTtpQkFzQ1o7Z0JBQ0ksT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFBO1lBQ3pCLENBQUM7aUJBeENELFVBQWEsS0FBaUM7Z0JBQzFDLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFBO1lBQzFCLENBQUM7OztXQUFBO1FBdUNMLHFCQUFDO0lBQUQsQ0F2VkEsQUF1VkMsSUFBQTtJQXZWWSxrQkFBYyxpQkF1VjFCLENBQUE7QUFDTCxDQUFDLEVBaFdTLEdBQUcsS0FBSCxHQUFHLFFBZ1daO0FDdFdELHNEQUFzRDtBQUN0RCxvREFBb0Q7QUFDcEQscURBQXFEO0FBRXJELElBQVUsR0FBRyxDQTJFWjtBQS9FRCxzREFBc0Q7QUFDdEQsb0RBQW9EO0FBQ3BELHFEQUFxRDtBQUVyRCxXQUFVLEdBQUc7SUFFVCxJQUFLLGNBSUo7SUFKRCxXQUFLLGNBQWM7UUFDZixvREFBUyxDQUFBO1FBQ1QseURBQVcsQ0FBQTtRQUNYLHFEQUFTLENBQUE7SUFDYixDQUFDLEVBSkksY0FBYyxLQUFkLGNBQWMsUUFJbEI7SUFFRDs7Ozs7T0FLRztJQUNIO1FBSUk7WUFDSSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUN4QixDQUFDO1FBRUQ7Ozs7V0FJRztRQUNJLDhCQUFJLEdBQVgsVUFBWSxJQUFZLEVBQUUsSUFBc0I7WUFFNUMsSUFBSSxNQUFNLEdBQVcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFZLElBQUk7WUFDeEQsSUFBSSxJQUFJLEdBQVksSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFlLE1BQU07WUFFMUQsa0NBQWtDO1lBQ2xDLElBQUksS0FBSyxHQUFXLEVBQUUsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUUxRCxJQUFJLENBQUMsSUFBQSxjQUFjLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQzdDLElBQUEsWUFBWSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBQSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBSyxJQUFJLDRIQUErQixDQUFDLENBQUM7Z0JBQ3BHLE9BQU87YUFDVjtZQUVELGlCQUFpQjtZQUNqQixJQUFJLEtBQUssSUFBSSxjQUFjLENBQUMsS0FBSyxFQUFFO2dCQUMvQixFQUFFLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ3BDLE9BQU87YUFDVjtZQUVELG1CQUFtQjtZQUNuQixJQUFJLEtBQUssSUFBSSxjQUFjLENBQUMsT0FBTyxFQUFFO2dCQUNqQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDZjtZQUVELElBQUksU0FBUyxHQUFHLElBQUEsY0FBYyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzNELElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUN4RCxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDMUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDM0IsQ0FBQztRQUVEOztXQUVHO1FBQ0ksOEJBQUksR0FBWDtZQUVJLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDMUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRXRDLENBQUM7UUFFRDs7V0FFRztRQUNJLCtCQUFLLEdBQVo7WUFDSSxJQUFJLEVBQUUsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxPQUFPO2dCQUFFLE9BQU87WUFDdkYsRUFBRSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZDLENBQUM7UUFDTCxzQkFBQztJQUFELENBNURBLEFBNERDLElBQUE7SUE1RGEsbUJBQWUsa0JBNEQ1QixDQUFBO0FBQ0wsQ0FBQyxFQTNFUyxHQUFHLEtBQUgsR0FBRyxRQTJFWjtBQy9FRCxzREFBc0Q7QUFDdEQsb0RBQW9EO0FBQ3BELHFEQUFxRDtBQUNyRCxrREFBa0Q7QUFDbEQsSUFBVSxHQUFHLENBc0VaO0FBMUVELHNEQUFzRDtBQUN0RCxvREFBb0Q7QUFDcEQscURBQXFEO0FBQ3JELGtEQUFrRDtBQUNsRCxXQUFVLEdBQUc7SUFFVDs7Ozs7T0FLRztJQUNIO1FBSUk7WUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksR0FBRyxFQUFrQixDQUFDO1FBQzlDLENBQUM7UUFFRDs7OztXQUlHO1FBQ0ksK0JBQUksR0FBWCxVQUFZLElBQVksRUFBRSxJQUFzQjtZQUU1QyxJQUFJLE1BQU0sR0FBVyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQW9DLElBQUk7WUFDaEYsSUFBSSxjQUFjLEdBQXdCLElBQUksQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFPLFFBQVE7WUFDcEYsSUFBSSxJQUFJLEdBQVksSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUF1QyxNQUFNO1lBQ2xGLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQW1DLE9BQU87WUFDM0UsSUFBSSxLQUFjLENBQUM7WUFDbkIsRUFBRSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUcsYUFBYTtZQUU5RyxJQUFJLENBQUMsSUFBQSxjQUFjLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQzdDLElBQUEsWUFBWSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBQSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBSyxJQUFJLDRIQUErQixDQUFDLENBQUM7Z0JBQ3BHLE9BQU87YUFDVjtZQUVELElBQUksY0FBYyxLQUFLLElBQUEsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLElBQUksS0FBSztnQkFBRSxPQUFPLENBQVMsZ0JBQWdCO1lBRWpHLElBQUksY0FBYyxLQUFLLElBQUEsSUFBSSxDQUFDLGNBQWMsQ0FBQyxlQUFlLElBQUksS0FBSyxFQUFFLEVBQVksNkJBQTZCO2dCQUMxRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUMzQjtZQUVELElBQUksU0FBUyxHQUFHLElBQUEsY0FBYyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzNELElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUN2RCxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDeEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ25DLENBQUM7UUFFRDs7O1dBR0c7UUFDSSwrQkFBSSxHQUFYLFVBQVksSUFBWTtZQUVwQixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQzFCLE9BQU87YUFDVjtZQUNELEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDN0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0IsQ0FBQztRQUVEOztXQUVHO1FBQ0ksa0NBQU8sR0FBZDs7O2dCQUNJLEtBQWdCLElBQUEsS0FBQSxTQUFBLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUEsZ0JBQUEsNEJBQUU7b0JBQWpDLElBQUksR0FBRyxXQUFBO29CQUNSLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7aUJBQy9DOzs7Ozs7Ozs7WUFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzFCLENBQUM7UUFDTCx1QkFBQztJQUFELENBN0RBLEFBNkRDLElBQUE7SUE3RFksb0JBQWdCLG1CQTZENUIsQ0FBQTtBQUNMLENBQUMsRUF0RVMsR0FBRyxLQUFILEdBQUcsUUFzRVo7QUMxRUQsa0RBQWtEO0FBQ2xELGtEQUFrRDtBQUNsRCx1REFBdUQ7QUFDdkQsd0RBQXdEO0FBQ3hELGlEQUFpRDtBQUNqRCxJQUFVLEdBQUcsQ0EwS1o7QUEvS0Qsa0RBQWtEO0FBQ2xELGtEQUFrRDtBQUNsRCx1REFBdUQ7QUFDdkQsd0RBQXdEO0FBQ3hELGlEQUFpRDtBQUNqRCxXQUFVLEdBQUc7SUFFVDs7Ozs7T0FLRztJQUNIO1FBaUJJLHNCQUFZLFlBQThCLEVBQUUsYUFBZ0M7WUFDeEUsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUMsQ0FBb0UsTUFBTTtZQUMzRyxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQyxDQUFrRSxNQUFNO1lBQzNHLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBbUQsTUFBTTtZQUMzRyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQWlELE1BQU07WUFDM0csSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUMsQ0FBeUUsa0JBQWtCO1lBQ3ZILElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBaUQsVUFBVTtZQUMvRyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLENBQStDLFdBQVc7WUFDaEgsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsQ0FBbUYsUUFBUTtZQUM3RyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksR0FBRyxFQUFrRCxDQUFDLENBQTBCLFdBQVc7WUFDaEgsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLEdBQUcsRUFBd0UsQ0FBQyxDQUFHLGFBQWE7WUFDbEgsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLElBQUEsZUFBZSxFQUFFLENBQUEsQ0FBeUQsY0FBYztZQUNuSCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxJQUFBLGdCQUFnQixFQUFFLENBQUEsQ0FBdUQsZUFBZTtZQUNwSCxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBK0UsYUFBYTtRQUN0SCxDQUFDO1FBRUQ7O1dBRUc7UUFDSyxxQ0FBYyxHQUF0QjtZQUNJLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxHQUFHLEVBQXFDLENBQUM7WUFDcEUsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksR0FBRyxFQUEyRCxDQUFDO1lBQzNGLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDckQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM1QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLElBQUEsSUFBSSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUNqRixJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDdkQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pELENBQUM7UUFFRDs7Ozs7V0FLRztRQUNJLG1DQUFZLEdBQW5CLFVBQ0ksSUFBWSxFQUNaLE1BQWlDLEVBQ2pDLElBQXlCO1lBRHpCLHVCQUFBLEVBQUEsU0FBaUIsSUFBSSxDQUFDLFdBQVc7WUFDakMscUJBQUEsRUFBQSxPQUFnQixJQUFJLENBQUMsSUFBSTtZQUN6QixJQUFJLElBQUksR0FBMkMsSUFBSSxHQUFHLEVBQXFDLENBQUM7WUFDaEcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDM0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDdkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRW5DLENBQUM7UUFFRDs7Ozs7O1dBTUc7UUFDSSxvQ0FBYSxHQUFwQixVQUFxQixJQUFZLEVBQ1osY0FBcUUsRUFDckUsTUFBaUMsRUFDakMsSUFBeUI7WUFGekIsK0JBQUEsRUFBQSxpQkFBc0MsSUFBQSxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVc7WUFDckUsdUJBQUEsRUFBQSxTQUFpQixJQUFJLENBQUMsV0FBVztZQUNqQyxxQkFBQSxFQUFBLE9BQWdCLElBQUksQ0FBQyxJQUFJO1lBRTFDLElBQUksSUFBSSxHQUFpRSxJQUFJLEdBQUcsRUFBMkQsQ0FBQztZQUM1SSxJQUFJLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLGNBQWMsQ0FBQyxDQUFDO1lBQzNDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQzNCLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUVwQyxDQUFDO1FBRUQ7Ozs7V0FJRztRQUNJLGdDQUFTLEdBQWhCLFVBQWlCLElBQVk7WUFDekIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQUUsT0FBTyxDQUErQixRQUFRO1lBQ2hFLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXO2dCQUFFLE9BQU8sQ0FBYyxXQUFXO1lBQ25FLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFxQixnQkFBZ0I7Z0JBQ2hFLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBSyxRQUFRO2dCQUM1RCxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO2FBQ3pEO2lCQUFNO2dCQUNILElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2FBQzdEO1FBQ0wsQ0FBQztRQUVEOzs7O1dBSUc7UUFDSSxpQ0FBVSxHQUFqQixVQUFrQixJQUFZO1lBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO2dCQUFFLE9BQU8sQ0FBZ0MsUUFBUTtZQUNqRSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWTtnQkFBRSxPQUFPLENBQWMsV0FBVztZQUNwRSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBcUIsY0FBYztnQkFDL0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUksUUFBUTtnQkFDN0QsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7YUFDM0Q7aUJBQU07Z0JBQ0gsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzthQUMvRDtRQUNMLENBQUM7UUFFRDs7V0FFRztRQUNILGdDQUFTLEdBQVQ7WUFDSSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2hDLENBQUM7UUFFRDs7V0FFRztRQUNILGlDQUFVLEdBQVY7WUFDSSxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2pDLENBQUM7UUFFRDs7O1dBR0c7UUFDSCxpQ0FBVSxHQUFWLFVBQVcsSUFBWTtZQUNuQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JDLENBQUM7UUFFRDs7V0FFRztRQUNILG9DQUFhLEdBQWI7WUFDSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDcEMsQ0FBQztRQUVEOzs7O1dBSUc7UUFDSCxvQ0FBYSxHQUFiLFVBQWMsSUFBWTtZQUN0QixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BDLENBQUM7UUFFRDs7OztXQUlHO1FBQ0gscUNBQWMsR0FBZCxVQUFlLElBQVk7WUFDdkIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyQyxDQUFDO1FBQ0wsbUJBQUM7SUFBRCxDQWpLQSxBQWlLQyxJQUFBO0lBaktZLGdCQUFZLGVBaUt4QixDQUFBO0FBQ0wsQ0FBQyxFQTFLUyxHQUFHLEtBQUgsR0FBRyxRQTBLWjtBQy9LRCxtREFBbUQ7QUFDbkQsaURBQWlEO0FBQ2pELDBDQUEwQztBQUMxQyxrREFBa0Q7QUFDbEQsaURBQWlEO0FBQ2pELGlEQUFpRDtBQUNqRCxJQUFVLEdBQUcsQ0EwUlo7QUFoU0QsbURBQW1EO0FBQ25ELGlEQUFpRDtBQUNqRCwwQ0FBMEM7QUFDMUMsa0RBQWtEO0FBQ2xELGlEQUFpRDtBQUNqRCxpREFBaUQ7QUFDakQsV0FBVSxHQUFHO0lBRVQ7Ozs7O09BS0c7SUFDSDtRQVFJLHNCQUFvQixhQUFnQztZQUVoRCxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztZQUNuQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksSUFBQSxZQUFZLENBQUMsSUFBSSxFQUFFLGFBQWEsQ0FBQyxDQUFDO1lBQ3JELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUM7WUFDdkQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQztRQUV6RCxDQUFDO1FBRUQ7OztXQUdHO1FBQ1csd0JBQVcsR0FBekIsVUFBMEIsYUFBZ0M7WUFDdEQsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ2pCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxZQUFZLENBQUMsYUFBYSxDQUFDLENBQUM7Z0JBQ2pELElBQUEsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7YUFDN0I7UUFDTCxDQUFDO1FBS0Qsc0JBQWtCLHdCQUFRO1lBSDFCOztlQUVHO2lCQUNIO2dCQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO29CQUNqQixJQUFBLFlBQVksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLElBQUEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsU0FBUyxDQUFDLENBQUM7b0JBQ3ZFLE9BQU87aUJBQ1Y7Z0JBQ0QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQzFCLENBQUM7OztXQUFBO1FBRUQ7Ozs7Ozs7Ozs7O1dBV0c7UUFDSSxtQ0FBWSxHQUFuQixVQUFvQixJQUFZLEVBQUUsTUFBZSxFQUFFLElBQWM7WUFFN0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztZQUU5QyxPQUFPLElBQUksQ0FBQztRQUNoQixDQUFDO1FBRUQ7Ozs7Ozs7Ozs7Ozs7V0FhRztRQUNJLG9DQUFhLEdBQXBCLFVBQXFCLElBQVksRUFBRSxjQUFvQyxFQUFFLE1BQWUsRUFBRSxJQUFjO1lBRXBHLElBQUksY0FBYyxLQUFLLElBQUEsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLElBQUksSUFBSSxFQUFFO2dCQUM1RCxJQUFBLFlBQVksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLElBQUEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUssSUFBSSxzR0FBbUIsQ0FBQyxDQUFDO2FBQzNGO1lBRUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUE7WUFFOUQsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUVEOzs7O1dBSUc7UUFDSSxnQ0FBUyxHQUFoQixVQUFpQixJQUFZO1lBQ3pCLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pDLENBQUM7UUFFRDs7OztXQUlHO1FBQ0ksaUNBQVUsR0FBakIsVUFBa0IsSUFBWTtZQUMxQixJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQyxDQUFDO1FBRUQ7O1dBRUc7UUFDSSxnQ0FBUyxHQUFoQjtZQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDN0IsQ0FBQztRQUVEOztXQUVHO1FBQ0ksaUNBQVUsR0FBakI7WUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQzlCLENBQUM7UUFFRDs7O1dBR0c7UUFDSSxpQ0FBVSxHQUFqQixVQUFrQixJQUFZO1lBQzFCLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xDLENBQUM7UUFFRDs7V0FFRztRQUNJLG9DQUFhLEdBQXBCO1lBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNqQyxDQUFDO1FBRUQ7Ozs7Ozs7OztXQVNHO1FBQ0ksb0NBQWEsR0FBcEIsVUFBcUIsSUFBWTtZQUM3QixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVDLENBQUM7UUFFRDs7Ozs7Ozs7OztXQVVHO1FBQ0kscUNBQWMsR0FBckIsVUFBc0IsSUFBWTtZQUM5QixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdDLENBQUM7UUFFRDs7O1dBR0c7UUFDSSx5Q0FBa0IsR0FBekI7WUFDSSxJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztZQUN6QyxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7Z0JBQ3BCLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLENBQUM7YUFDaEM7WUFDRCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDOUIsQ0FBQztRQUVEOzs7V0FHRztRQUNJLHdDQUFpQixHQUF4QjtZQUNJLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ3ZDLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtnQkFDbkIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO2FBQ3JCO1lBQ0QsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQzdCLENBQUM7UUFNRCxzQkFBVyxzQ0FBWTtZQUp2Qjs7O2VBR0c7aUJBQ0g7Z0JBQ0ksT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFBO1lBQzdCLENBQUM7OztXQUFBO1FBTUQsc0JBQVcscUNBQVc7WUFKdEI7OztlQUdHO2lCQUNIO2dCQUNJLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQTtZQUM1QixDQUFDOzs7V0FBQTtRQUNMLG1CQUFDO0lBQUQsQ0F0TUEsQUFzTUMsSUFBQTtJQXRNWSxnQkFBWSxlQXNNeEIsQ0FBQTtJQUVEOzs7Ozs7T0FNRztJQUNILFNBQWdCLEtBQUssQ0FBQyxJQUFJO1FBQ3RCLE9BQU8sVUFBVSxNQUFXLEVBQUUsR0FBVyxFQUFFLFVBQThCO1lBQ3JFLFVBQVUsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1lBQzdCLElBQU0sTUFBTSxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUM7WUFDaEMsVUFBVSxDQUFDLEtBQUssR0FBRztnQkFBVSxhQUFNO3FCQUFOLFVBQU0sRUFBTixxQkFBTSxFQUFOLElBQU07b0JBQU4sd0JBQU07O2dCQUMvQixZQUFZLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDdEMsT0FBUSxNQUFNLENBQUMsSUFBSSxPQUFYLE1BQU0saUJBQU0sSUFBSSxVQUFLLEdBQUcsSUFBRTtZQUN0QyxDQUFDLENBQUE7UUFDTCxDQUFDLENBQUE7SUFDTCxDQUFDO0lBVGUsU0FBSyxRQVNwQixDQUFBO0lBRUQ7Ozs7O09BS0c7SUFDSCxTQUFnQixTQUFTO1FBQ3JCLE9BQU8sVUFBVSxNQUFXLEVBQUUsR0FBVyxFQUFFLFVBQThCO1lBQ3JFLFVBQVUsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1lBQzdCLElBQU0sTUFBTSxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUM7WUFDaEMsVUFBVSxDQUFDLEtBQUssR0FBRztnQkFBVSxhQUFNO3FCQUFOLFVBQU0sRUFBTixxQkFBTSxFQUFOLElBQU07b0JBQU4sd0JBQU07O2dCQUMvQixZQUFZLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUNsQyxPQUFPLE1BQU0sQ0FBQyxJQUFJLE9BQVgsTUFBTSxpQkFBTSxJQUFJLFVBQUssR0FBRyxJQUFFO1lBQ3JDLENBQUMsQ0FBQTtRQUNMLENBQUMsQ0FBQTtJQUNMLENBQUM7SUFUZSxhQUFTLFlBU3hCLENBQUE7SUFFRDs7Ozs7O09BTUc7SUFDSCxTQUFnQixNQUFNO1FBQUMsY0FBaUI7YUFBakIsVUFBaUIsRUFBakIscUJBQWlCLEVBQWpCLElBQWlCO1lBQWpCLHlCQUFpQjs7UUFDcEMsT0FBTyxVQUFVLE1BQVcsRUFBRSxHQUFXLEVBQUUsVUFBOEI7WUFDckUsVUFBVSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7WUFDN0IsSUFBTSxNQUFNLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQztZQUNoQyxVQUFVLENBQUMsS0FBSyxHQUFHO2dCQUFVLGFBQU07cUJBQU4sVUFBTSxFQUFOLHFCQUFNLEVBQU4sSUFBTTtvQkFBTix3QkFBTTs7Z0JBQy9CLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFZO29CQUN0QixZQUFZLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDM0MsQ0FBQyxDQUFDLENBQUE7Z0JBQ0YsT0FBTyxNQUFNLENBQUMsSUFBSSxPQUFYLE1BQU0saUJBQU0sSUFBSSxVQUFLLEdBQUcsSUFBRTtZQUNyQyxDQUFDLENBQUE7UUFDTCxDQUFDLENBQUE7SUFDTCxDQUFDO0lBWGUsVUFBTSxTQVdyQixDQUFBO0lBRUQ7Ozs7OztPQU1HO0lBQ0gsU0FBZ0IsVUFBVTtRQUFDLGNBQWlCO2FBQWpCLFVBQWlCLEVBQWpCLHFCQUFpQixFQUFqQixJQUFpQjtZQUFqQix5QkFBaUI7O1FBQ3hDLE9BQU8sVUFBVSxNQUFXLEVBQUUsR0FBVyxFQUFFLFVBQThCO1lBQ3JFLFVBQVUsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1lBQzdCLElBQU0sTUFBTSxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUM7WUFDaEMsVUFBVSxDQUFDLEtBQUssR0FBRztnQkFBVSxhQUFNO3FCQUFOLFVBQU0sRUFBTixxQkFBTSxFQUFOLElBQU07b0JBQU4sd0JBQU07O2dCQUMvQixJQUFJLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBWTtvQkFDdEIsWUFBWSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzNDLENBQUMsQ0FBQyxDQUFBO2dCQUNGLE9BQU8sTUFBTSxDQUFDLElBQUksT0FBWCxNQUFNLGlCQUFNLElBQUksVUFBSyxHQUFHLElBQUU7WUFDckMsQ0FBQyxDQUFBO1FBQ0wsQ0FBQyxDQUFBO0lBQ0wsQ0FBQztJQVhlLGNBQVUsYUFXekIsQ0FBQTtBQUNMLENBQUMsRUExUlMsR0FBRyxLQUFILEdBQUcsUUEwUlo7QUNoU0QsSUFBVSxHQUFHLENBb1FaO0FBcFFELFdBQVUsR0FBRztJQUVULElBQU0sR0FBRyxHQUFzQjtRQUMzQixRQUFRLEVBQUUsRUFBRTtRQUNaLFVBQVUsRUFBRSxFQUFFO1FBQ2QsU0FBUyxFQUFFO1lBQ1AsT0FBTyxFQUFFLENBQUM7WUFDVixLQUFLLEVBQUUsR0FBRztZQUNWLElBQUksRUFBRSxHQUFHO1NBQ1o7UUFDRCxVQUFVLEVBQUUsT0FBTztLQUN0QixDQUFBO0lBQ0QsSUFBTSxHQUFHLEdBQXNCO1FBQzNCLFFBQVEsRUFBRSxFQUFFO1FBQ1osVUFBVSxFQUFFLEVBQUU7UUFDZCxTQUFTLEVBQUU7WUFDUCxPQUFPLEVBQUUsQ0FBQztZQUNWLEtBQUssRUFBRSxHQUFHO1lBQ1YsSUFBSSxFQUFFLEdBQUc7U0FDWjtRQUNELFVBQVUsRUFBRSxPQUFPO0tBQ3RCLENBQUE7SUFDRCxJQUFNLEdBQUcsR0FBc0I7UUFDM0IsUUFBUSxFQUFFLEVBQUU7UUFDWixVQUFVLEVBQUUsRUFBRTtRQUNkLFNBQVMsRUFBRTtZQUNQLE9BQU8sRUFBRSxDQUFDO1lBQ1YsS0FBSyxFQUFFLEdBQUc7WUFDVixJQUFJLEVBQUUsR0FBRztTQUNaO1FBQ0QsVUFBVSxFQUFFLHdCQUF3QjtLQUN2QyxDQUFBO0lBQ0QsSUFBTSxHQUFHLEdBQXNCO1FBQzNCLFFBQVEsRUFBRSxFQUFFO1FBQ1osVUFBVSxFQUFFLEVBQUU7UUFDZCxTQUFTLEVBQUU7WUFDUCxPQUFPLEVBQUUsQ0FBQztZQUNWLEtBQUssRUFBRSxHQUFHO1lBQ1YsSUFBSSxFQUFFLEdBQUc7U0FDWjtRQUNELFVBQVUsRUFBRSx3QkFBd0I7S0FDdkMsQ0FBQTtJQUNELElBQU0sR0FBRyxHQUFzQjtRQUMzQixRQUFRLEVBQUUsRUFBRTtRQUNaLFVBQVUsRUFBRSxFQUFFO1FBQ2QsU0FBUyxFQUFFO1lBQ1AsT0FBTyxFQUFFLENBQUM7WUFDVixLQUFLLEVBQUUsR0FBRztZQUNWLElBQUksRUFBRSxHQUFHO1NBQ1o7UUFDRCxVQUFVLEVBQUUsd0JBQXdCO0tBQ3ZDLENBQUE7SUFDRCxJQUFNLEdBQUcsR0FBc0I7UUFDM0IsUUFBUSxFQUFFLEVBQUU7UUFDWixVQUFVLEVBQUUsRUFBRTtRQUNkLFNBQVMsRUFBRTtZQUNQLE9BQU8sRUFBRSxDQUFDO1lBQ1YsS0FBSyxFQUFFLEdBQUc7WUFDVixJQUFJLEVBQUUsR0FBRztTQUNaO1FBQ0QsVUFBVSxFQUFFLHdCQUF3QjtLQUN2QyxDQUFBO0lBQ0QsSUFBTSxHQUFHLEdBQXNCO1FBQzNCLFFBQVEsRUFBRSxFQUFFO1FBQ1osVUFBVSxFQUFFLEVBQUU7UUFDZCxTQUFTLEVBQUU7WUFDUCxPQUFPLEVBQUUsQ0FBQztZQUNWLEtBQUssRUFBRSxHQUFHO1lBQ1YsSUFBSSxFQUFFLEdBQUc7U0FDWjtRQUNELFVBQVUsRUFBRSx3QkFBd0I7S0FDdkMsQ0FBQTtJQUdEOzs7OztPQUtHO0lBQ0g7UUFrQ0kseUJBQVksYUFBZ0M7WUFDeEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7WUFDbkMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLEdBQUcsRUFBeUQsQ0FBQyxDQUFFLFNBQVM7WUFDekYsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksR0FBRyxFQUFvQixDQUFDLENBQTRCLGdCQUFnQjtZQUNoRyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUF3RCxXQUFXO1lBQzNGLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBcUMsUUFBUTtRQUM1RixDQUFDO1FBR0Q7OztXQUdHO1FBQ1csMkJBQVcsR0FBekIsVUFBMEIsYUFBZ0M7WUFDdEQsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ2pCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxlQUFlLENBQUMsYUFBYSxDQUFDLENBQUM7Z0JBQ3BELElBQUEsV0FBVyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7YUFDaEM7UUFDTCxDQUFDO1FBS0Qsc0JBQWtCLDJCQUFRO1lBSDFCOztlQUVHO2lCQUNIO2dCQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO29CQUNqQixJQUFBLFlBQVksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLElBQUEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsU0FBUyxDQUFDLENBQUM7b0JBQ3ZFLE9BQU87aUJBQ1Y7Z0JBQ0QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQzFCLENBQUM7OztXQUFBO1FBR0Q7OztXQUdHO1FBQ0ssMENBQWdCLEdBQXhCO1lBQ0ksSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBQSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQztZQUM5QyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFBLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQy9DLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUEsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDL0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBQSxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUNqRCxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFBLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQzlDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUEsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDaEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBQSxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNuRCxDQUFDO1FBRUQ7O1dBRUc7UUFDSCxrQ0FBUSxHQUFSLFVBQVMsR0FBK0IsRUFBRSxLQUF3QjtZQUM5RCxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUE7UUFDOUIsQ0FBQztRQUVEOzs7V0FHRztRQUNILHdDQUFjLEdBQWQsVUFBZSxRQUFvQzs7WUFDL0MsSUFBSSxJQUFJLENBQUMsT0FBTyxJQUFJLFFBQVEsRUFBRTtnQkFDMUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUM7O29CQUN4QixLQUFrQixJQUFBLEtBQUEsU0FBQSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLENBQUEsZ0JBQUEsNEJBQUU7d0JBQTNDLElBQUksS0FBSyxXQUFBO3dCQUNWLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBQy9DLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO3FCQUNuQzs7Ozs7Ozs7O2FBQ0o7UUFDTCxDQUFDO1FBRUQ7O1dBRUc7UUFDSCxxQ0FBVyxHQUFYO1lBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUU7Z0JBQ3JCLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO2FBQzVCO1FBQ0wsQ0FBQztRQUVEOzs7V0FHRztRQUNILHFDQUFXLEdBQVg7WUFDSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDeEIsQ0FBQztRQUVEOzs7O1dBSUc7UUFDSCxpQ0FBTyxHQUFQLFVBQVEsR0FBVztZQUNmLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNuQyxDQUFDO1FBRUQsb0NBQVUsR0FBVjtZQUNJLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUM5QixDQUFDO1FBR0Q7O1dBRUc7UUFDSCwyQ0FBaUIsR0FBakI7WUFDSSxJQUFJO2dCQUNBLElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDM0Q7WUFBQyxPQUFPLENBQUMsRUFBRTtnQkFDUixPQUFPLENBQUMsR0FBRyxDQUFDLDhCQUE4QixFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQ2xEO1FBQ0wsQ0FBQztRQUVEOztXQUVHO1FBQ0gsNENBQWtCLEdBQWxCO1lBQ0ksTUFBTTtRQUNWLENBQUM7UUFFRCxvQ0FBVSxHQUFWLFVBQVcsTUFBZ0IsRUFBRSxPQUFlO1lBQ3hDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN0QyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM3QixPQUFPLElBQUksQ0FBQztRQUNoQixDQUFDO1FBRUQ7OztXQUdHO1FBQ0gscUNBQVcsR0FBWDs7WUFFSSxJQUFJLFFBQVEsR0FBbUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUU1RCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUMvQixRQUFRLEdBQUcsSUFBQSxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQzthQUN4QztZQUVELElBQU0sVUFBVSxHQUFXLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsQ0FBQztZQUMvRCxJQUFNLFFBQVEsR0FBVyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUM7WUFDM0QsSUFBTSxVQUFVLEdBQVcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxDQUFDOztnQkFFL0QsS0FBa0IsSUFBQSxLQUFBLFNBQUEsSUFBSSxDQUFDLFVBQVUsQ0FBQSxnQkFBQSw0QkFBRTtvQkFBOUIsSUFBSSxLQUFLLFdBQUE7b0JBQ1YsS0FBSyxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7b0JBQzlCLEtBQUssQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO29CQUMxQixLQUFLLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztpQkFDakM7Ozs7Ozs7OztZQUNELElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUMvQixDQUFDO1FBQ0wsc0JBQUM7SUFBRCxDQW5MQSxBQW1MQyxJQUFBO0lBbkxZLG1CQUFlLGtCQW1MM0IsQ0FBQTtBQUNMLENBQUMsRUFwUVMsR0FBRyxLQUFILEdBQUcsUUFvUVo7QUNwUUQsaURBQWlEO0FBQ2pELG1EQUFtRDtBQUNuRCxJQUFVLEdBQUcsQ0FtRlo7QUFyRkQsaURBQWlEO0FBQ2pELG1EQUFtRDtBQUNuRCxXQUFVLEdBQUc7SUFFVDs7Ozs7T0FLRztJQUNIO1FBZ0JJO1lBQ0ksSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksR0FBRyxFQUFhLENBQUM7UUFDbEQsQ0FBQztRQUVEOzs7V0FHRztRQUNXLDRCQUFRLEdBQXRCO1lBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ2pCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxtQkFBbUIsRUFBSyxDQUFDO2FBQ2pEO1lBQ0QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzFCLENBQUM7UUFFRDs7OztXQUlHO1FBQ0gsNkNBQWUsR0FBZixVQUFnQixZQUFlO1lBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsRUFBRTtnQkFDcEQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLFlBQVksQ0FBQyxDQUFDO2FBQ25FO1lBQ0QsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUVEOzs7O1dBSUc7UUFDSCw2Q0FBZSxHQUFmLFVBQWdCLElBQVk7WUFDeEIsSUFBSSxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUNsQyxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDM0M7aUJBQU07Z0JBQ0gsSUFBQSxZQUFZLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUssSUFBSSwySkFBbUUsQ0FBQyxDQUFBO2dCQUM5SSw0RkFBNEY7Z0JBQzVGLE9BQU8sU0FBUyxDQUFDO2FBQ3BCO1FBQ0wsQ0FBQztRQUVEOzs7O1dBSUc7UUFDSCw2Q0FBZSxHQUFmLFVBQWdCLElBQVk7WUFDeEIsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVDLENBQUM7UUFFRDs7O1dBR0c7UUFDSCxpREFBbUIsR0FBbkI7WUFDSSxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztRQUNsQyxDQUFDO1FBQ0wsMEJBQUM7SUFBRCxDQTFFQSxBQTBFQyxJQUFBO0lBMUVZLHVCQUFtQixzQkEwRS9CLENBQUE7QUFDTCxDQUFDLEVBbkZTLEdBQUcsS0FBSCxHQUFHLFFBbUZaO0FDckZELHdEQUF3RDtBQUN4RCxnREFBZ0Q7QUFDaEQsc0RBQXNEO0FBQ3RELGdEQUFnRDtBQUNoRCxzREFBc0Q7QUFDdEQsbURBQW1EO0FBQ25ELGlEQUFpRDtBQUNqRCxvREFBb0Q7QUFDcEQsZ0RBQWdEO0FBQ2hELG1EQUFtRDtBQUNuRCwwREFBMEQ7QUFDMUQsSUFBVSxHQUFHLENBbUhaO0FBOUhELHdEQUF3RDtBQUN4RCxnREFBZ0Q7QUFDaEQsc0RBQXNEO0FBQ3RELGdEQUFnRDtBQUNoRCxzREFBc0Q7QUFDdEQsbURBQW1EO0FBQ25ELGlEQUFpRDtBQUNqRCxvREFBb0Q7QUFDcEQsZ0RBQWdEO0FBQ2hELG1EQUFtRDtBQUNuRCwwREFBMEQ7QUFDMUQsV0FBVSxHQUFHO0lBR1Q7Ozs7T0FJRztJQUNRLGFBQVMsR0FBMEIsSUFBQSxpQkFBaUIsQ0FBQyxRQUFRLENBQUM7SUE4RHpFLGtEQUFrRDtJQUNsRCxzQ0FBc0M7SUFDdEMsSUFBSTtJQUVKOzs7O09BSUc7SUFDSCxTQUFnQixVQUFVO1FBQ3RCLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFGZSxjQUFVLGFBRXpCLENBQUE7SUEyQkQ7OztPQUdHO0lBQ0gsU0FBZ0IsZUFBZTtRQUMzQixPQUFPLElBQUEsbUJBQW1CLENBQUMsUUFBUSxFQUFLLENBQUM7SUFDN0MsQ0FBQztJQUZlLG1CQUFlLGtCQUU5QixDQUFBO0FBQ0wsQ0FBQyxFQW5IUyxHQUFHLEtBQUgsR0FBRyxRQW1IWjtBQUVEOzs7R0FHRztBQUNILFVBQVUsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FDcElyQixJQUFVLEdBQUcsQ0F5RVo7QUF6RUQsV0FBVSxHQUFHO0lBRVQsSUFBaUIsTUFBTSxDQXNFdEI7SUF0RUQsV0FBaUIsTUFBTTtRQUVuQjs7Ozs7V0FLRztRQUNIO1lBQUE7WUE2REEsQ0FBQztZQTNERzs7Ozs7O2VBTUc7WUFDSSxxQkFBYyxHQUFyQixVQUFzQixVQUFxQixFQUFFLFVBQWtCLEVBQUUsSUFBUyxFQUFFLGVBQXFCO2dCQUM3RixVQUFVO2dCQUNWLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQ3pCLElBQUksVUFBVSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUMxQyxJQUFJLFdBQVcsR0FBRyxJQUFJLEVBQUUsQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxRQUFRO2dCQUMzRCxXQUFXLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxDQUFDLHVCQUF1QjtnQkFDdEQsV0FBVyxDQUFDLFNBQVMsR0FBRyxVQUFVLENBQUMsQ0FBQyxZQUFZO2dCQUNoRCxXQUFXLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQyxDQUFDLHFCQUFxQjtnQkFDdkQsSUFBSSxlQUFlLElBQUksZUFBZSxJQUFJLENBQUMsRUFBRTtvQkFDekMsV0FBVyxDQUFDLGVBQWUsR0FBRyxlQUFlLENBQUMsQ0FBQyxRQUFRO2lCQUMxRDtnQkFDRCxxREFBcUQ7Z0JBQ3JELFVBQVUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsVUFBVTtZQUN4RCxDQUFDO1lBRUQ7OztlQUdHO1lBQ0ksb0JBQWEsR0FBcEIsVUFBcUIsTUFBaUI7Z0JBQ2xDLE1BQU0sQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1lBQ2hDLENBQUM7WUFFRDs7O2VBR0c7WUFDSSxtQkFBWSxHQUFuQixVQUFvQixNQUFpQjtnQkFDakMsTUFBTSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDL0IsQ0FBQztZQUVEOzs7Ozs7ZUFNRztZQUNJLHlCQUFrQixHQUF6QixVQUEwQixJQUFhLEVBQUUsTUFBZ0IsRUFBRSxJQUFTLEVBQUUsVUFBb0I7Z0JBQ3RGLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsVUFBVSxDQUFDLENBQUM7WUFDckUsQ0FBQztZQUVEOzs7Ozs7ZUFNRztZQUNJLHlCQUFrQixHQUF6QixVQUEwQixJQUFhLEVBQUUsTUFBZ0IsRUFBRSxJQUFTLEVBQUUsVUFBb0I7Z0JBQ3RGLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsVUFBVSxDQUFDLENBQUM7WUFDdEUsQ0FBQztZQUNMLGFBQUM7UUFBRCxDQTdEQSxBQTZEQyxJQUFBO1FBN0RZLGFBQU0sU0E2RGxCLENBQUE7SUFDTCxDQUFDLEVBdEVnQixNQUFNLEdBQU4sVUFBTSxLQUFOLFVBQU0sUUFzRXRCO0FBQ0wsQ0FBQyxFQXpFUyxHQUFHLEtBQUgsR0FBRyxRQXlFWjtBQ3pFRCxJQUFVLEdBQUcsQ0FvRFo7QUFwREQsV0FBVSxHQUFHO0lBRVQsSUFBaUIsTUFBTSxDQWlEdEI7SUFqREQsV0FBaUIsTUFBTTtRQUNuQjs7Ozs7V0FLRztRQUNIO1lBQUE7WUF5Q0EsQ0FBQztZQXZDRzs7OztlQUlHO1lBQ0kseUJBQWtCLEdBQXpCLFVBQTBCLElBQWE7Z0JBQ25DLElBQUksT0FBTyxHQUF5QixJQUFJLEdBQUcsRUFBRSxDQUFDO2dCQUM5QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLEVBQUUsRUFBRTtvQkFDekMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDekIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBQyxnQkFBZ0I7d0JBQ3hELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQSxtQkFBbUI7cUJBQzVEO2lCQUNKO2dCQUNELE9BQU8sT0FBTyxDQUFDO1lBQ25CLENBQUM7WUFFRDs7OztlQUlHO1lBQ0kseUJBQWtCLEdBQXpCLFVBQTBCLElBQWE7Z0JBQ25DLElBQUksT0FBTyxHQUF5QixJQUFJLEdBQUcsRUFBRSxDQUFDO2dCQUM5QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLEVBQUUsRUFBRTtvQkFDekMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBLFdBQVc7b0JBQ3BDLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUEsVUFBVTtvQkFDeEMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBQyxnQkFBZ0I7d0JBQ3hELHdDQUF3Qzt3QkFDeEMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUMsT0FBTzs0QkFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFBLG1CQUFtQjt5QkFDekQ7NkJBQU0sRUFBQyxNQUFNOzRCQUNWLElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDOzRCQUNyQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUEsbUJBQW1COzRCQUN4RCxJQUFJLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7eUJBQzdCO3FCQUNKO2lCQUNKO2dCQUNELE9BQU8sT0FBTyxDQUFDO1lBQ25CLENBQUM7WUFDTCxhQUFDO1FBQUQsQ0F6Q0EsQUF5Q0MsSUFBQTtRQXpDWSxhQUFNLFNBeUNsQixDQUFBO0lBQ0wsQ0FBQyxFQWpEZ0IsTUFBTSxHQUFOLFVBQU0sS0FBTixVQUFNLFFBaUR0QjtBQUNMLENBQUMsRUFwRFMsR0FBRyxLQUFILEdBQUcsUUFvRFo7QUNwREQsSUFBVSxHQUFHLENBZ0VaO0FBaEVELFdBQVUsR0FBRztJQUVULElBQWlCLEdBQUcsQ0E2RG5CO0lBN0RELFdBQWlCLEdBQUc7UUFFaEI7Ozs7O1dBS0c7UUFDSDtZQXVCSSx1QkFBc0IsT0FBeUIsRUFBRSxJQUFJO2dCQUNqRCxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztnQkFDMUIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7Z0JBQ2xCLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO1lBQzVCLENBQUM7WUFFRDs7O2VBR0c7WUFDSSx3Q0FBZ0IsR0FBdkI7O2dCQUF3QixhQUFNO3FCQUFOLFVBQU0sRUFBTixxQkFBTSxFQUFOLElBQU07b0JBQU4sd0JBQU07O2dCQUMxQixDQUFBLEtBQUEsSUFBSSxDQUFDLFFBQVEsQ0FBQSxDQUFDLElBQUksMEJBQUMsSUFBSSxDQUFDLEtBQUssVUFBSyxHQUFHLElBQUU7WUFDM0MsQ0FBQztZQU1ELHNCQUFJLHNDQUFXO2dCQUpmOzs7bUJBR0c7cUJBQ0g7b0JBQ0ksT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO2dCQUM3QixDQUFDO2dCQUVEOzs7bUJBR0c7cUJBQ0gsVUFBZ0IsS0FBYztvQkFDMUIsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7Z0JBQzlCLENBQUM7OztlQVJBO1lBU0wsb0JBQUM7UUFBRCxDQXBEQSxBQW9EQyxJQUFBO1FBcERxQixpQkFBYSxnQkFvRGxDLENBQUE7SUFDTCxDQUFDLEVBN0RnQixHQUFHLEdBQUgsT0FBRyxLQUFILE9BQUcsUUE2RG5CO0FBQ0wsQ0FBQyxFQWhFUyxHQUFHLEtBQUgsR0FBRyxRQWdFWjtBQ2hFRCxJQUFVLEdBQUcsQ0FVWjtBQVZELFdBQVUsR0FBRztJQUNUOzs7OztPQUtHO0lBQ0g7UUFBQTtRQUVBLENBQUM7UUFBRCxtQkFBQztJQUFELENBRkEsQUFFQyxJQUFBO0lBRlksZ0JBQVksZUFFeEIsQ0FBQTtBQUNMLENBQUMsRUFWUyxHQUFHLEtBQUgsR0FBRyxRQVVaO0FDVkQsSUFBVSxHQUFHLENBMkNaO0FBM0NELFdBQVUsR0FBRztJQUVULElBQWlCLElBQUksQ0F3Q3BCO0lBeENELFdBQWlCLElBQUk7UUFFakI7Ozs7O1dBS0c7UUFDSCxJQUFZLGFBb0JYO1FBcEJELFdBQVksYUFBYTtZQUVyQjs7O2VBR0c7WUFDSCxvQ0FBbUIsQ0FBQTtZQUVuQjs7O2VBR0c7WUFDSCxvQ0FBbUIsQ0FBQTtZQUVuQjs7O2VBR0c7WUFDSCxvQ0FBbUIsQ0FBQTtRQUV2QixDQUFDLEVBcEJXLGFBQWEsR0FBYixrQkFBYSxLQUFiLGtCQUFhLFFBb0J4QjtRQUVEOzs7OztXQUtHO1FBQ0gsSUFBWSxXQUdYO1FBSEQsV0FBWSxXQUFXO1lBQ25CLDRCQUFhLENBQUE7WUFDYixnQ0FBaUIsQ0FBQTtRQUNyQixDQUFDLEVBSFcsV0FBVyxHQUFYLGdCQUFXLEtBQVgsZ0JBQVcsUUFHdEI7SUFDTCxDQUFDLEVBeENnQixJQUFJLEdBQUosUUFBSSxLQUFKLFFBQUksUUF3Q3BCO0FBQ0wsQ0FBQyxFQTNDUyxHQUFHLEtBQUgsR0FBRyxRQTJDWjtBQzNDRCwyQ0FBMkM7QUFDM0MsNENBQTRDO0FDRDVDLDRDQUE0QztBQ0E1QyxtREFBbUQ7QUFDbkQsNENBQTRDO0FBQzVDLDZDQUE2QztBQUM3QyxpREFBaUQ7QUFDakQsSUFBVSxHQUFHLENBb0ZaO0FBeEZELG1EQUFtRDtBQUNuRCw0Q0FBNEM7QUFDNUMsNkNBQTZDO0FBQzdDLGlEQUFpRDtBQUNqRCxXQUFVLEdBQUc7SUFDVDs7Ozs7T0FLRztJQUNIO1FBTUksNEJBQVksV0FBK0I7WUFDdkMsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7WUFDL0IsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLEdBQUcsRUFBdUIsQ0FBQztRQUN2RCxDQUFDO1FBRUQ7OztXQUdHO1FBQ0gsd0NBQVcsR0FBWCxVQUFZLFdBQTJDOztZQUNuRCxJQUFJLFdBQVcsRUFBRTtnQkFDYixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLEVBQUU7b0JBQ3JDLElBQUEsWUFBWSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBQSxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxzQkFBc0IsQ0FBQyxDQUFDO2lCQUN6RjtxQkFBTTtvQkFDSCxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQztpQkFDcEU7YUFDSjtpQkFBTTtnQkFDSCxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDOztvQkFDeEMsS0FBa0IsSUFBQSxXQUFBLFNBQUEsTUFBTSxDQUFBLDhCQUFBLGtEQUFFO3dCQUFyQixJQUFJLEtBQUssbUJBQUE7d0JBQ1YsS0FBSyxDQUFDLGtCQUFrQixDQUFDLFFBQVEsRUFBRSxDQUFDO3FCQUN2Qzs7Ozs7Ozs7O2FBQ0o7UUFFTCxDQUFDO1FBRUQ7Ozs7V0FJRztRQUNILHVDQUFVLEdBQVYsVUFBVyxXQUFzQyxFQUFFLE9BQW9CO1lBQ25FLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNoRCxDQUFDO1FBRUQ7Ozs7V0FJRztRQUNILHVDQUFVLEdBQVYsVUFBVyxXQUFzQztZQUM3QyxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzlDLENBQUM7UUFFRDs7O1dBR0c7UUFDSCwwQ0FBYSxHQUFiO1lBQ0ksT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQzdCLENBQUM7UUFFRDs7O1dBR0c7UUFDSCwwQ0FBYSxHQUFiLFVBQWMsV0FBc0M7WUFDaEQsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxFQUFFO2dCQUNyQyxJQUFBLFlBQVksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLElBQUEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUssV0FBVyx1R0FBb0IsQ0FBQyxDQUFDO2dCQUNsRyxPQUFPO2FBQ1Y7WUFDRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3RELENBQUM7UUFFRDs7O1dBR0c7UUFDRyx1Q0FBVSxHQUFoQjs7OztnQ0FDSSxxQkFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFBOzs0QkFBMUIsU0FBMEIsQ0FBQzs7Ozs7U0FDOUI7UUFDTCx5QkFBQztJQUFELENBNUVBLEFBNEVDLElBQUE7SUE1RVksc0JBQWtCLHFCQTRFOUIsQ0FBQTtBQUNMLENBQUMsRUFwRlMsR0FBRyxLQUFILEdBQUcsUUFvRlo7QUN4RkQsSUFBVSxHQUFHLENBZ0RaO0FBaERELFdBQVUsR0FBRztJQUVULElBQWlCLElBQUksQ0E2Q3BCO0lBN0NELFdBQWlCLElBQUk7UUFFakI7O1dBRUc7UUFDSCxJQUFZLGFBdUNYO1FBdkNELFdBQVksYUFBYTtZQUNyQiw4QkFBYSxDQUFBO1lBQ2IsTUFBTTtZQUNOLFlBQVk7WUFDWixvQ0FBb0M7WUFDcEMsTUFBTTtZQUNOLHlCQUF5QjtZQUN6QixFQUFFO1lBQ0YsTUFBTTtZQUNOLFVBQVU7WUFDViwwQ0FBMEM7WUFDMUMsTUFBTTtZQUNOLHFDQUFxQztZQUNyQyxFQUFFO1lBQ0YsTUFBTTtZQUNOLFVBQVU7WUFDVixtQ0FBbUM7WUFDbkMsTUFBTTtZQUNOLHVCQUF1QjtZQUN2QixFQUFFO1lBQ0YsTUFBTTtZQUNOLFlBQVk7WUFDWixtREFBbUQ7WUFDbkQsTUFBTTtZQUNOLHVEQUF1RDtZQUN2RCxNQUFNO1lBQ04sV0FBVztZQUNYLE1BQU07WUFDTiwyQkFBMkI7WUFDM0IsRUFBRTtZQUNGLE1BQU07WUFDTixnQkFBZ0I7WUFDaEIsTUFBTTtZQUNOLHFDQUFxQztZQUNyQyxFQUFFO1lBQ0YsTUFBTTtZQUNOLFlBQVk7WUFDWixNQUFNO1lBQ04saUJBQWlCO1FBQ3JCLENBQUMsRUF2Q1csYUFBYSxHQUFiLGtCQUFhLEtBQWIsa0JBQWEsUUF1Q3hCO0lBQ0wsQ0FBQyxFQTdDZ0IsSUFBSSxHQUFKLFFBQUksS0FBSixRQUFJLFFBNkNwQjtBQUNMLENBQUMsRUFoRFMsR0FBRyxLQUFILEdBQUcsUUFnRFo7QUNoREQsSUFBVSxHQUFHLENBb0RaO0FBcERELFdBQVUsR0FBRztJQUVULElBQWlCLElBQUksQ0FpRHBCO0lBakRELFdBQWlCLElBQUk7UUFFakI7Ozs7O1dBS0c7UUFDSCxJQUFZLGVBd0NYO1FBeENELFdBQVksZUFBZTtZQUN2Qjs7ZUFFRztZQUNILDRDQUF5QixDQUFBO1lBRXpCOztlQUVHO1lBQ0gsd0RBQXFDLENBQUE7WUFFckM7O2VBRUc7WUFDSCxrREFBK0IsQ0FBQTtZQUUvQjs7ZUFFRztZQUNILHNFQUFtRCxDQUFBO1lBRW5EOztlQUVHO1lBQ0gsMEVBQXVELENBQUE7WUFFdkQ7O2VBRUc7WUFDSCx3Q0FBcUIsQ0FBQTtZQUVyQjs7ZUFFRztZQUNILDRDQUF5QixDQUFBO1lBRXpCOztlQUVHO1lBQ0gsc0NBQW1CLENBQUE7UUFDdkIsQ0FBQyxFQXhDVyxlQUFlLEdBQWYsb0JBQWUsS0FBZixvQkFBZSxRQXdDMUI7SUFDTCxDQUFDLEVBakRnQixJQUFJLEdBQUosUUFBSSxLQUFKLFFBQUksUUFpRHBCO0FBQ0wsQ0FBQyxFQXBEUyxHQUFHLEtBQUgsR0FBRyxRQW9EWjtBQ3BERCxJQUFVLEdBQUcsQ0E0RVo7QUE1RUQsV0FBVSxHQUFHO0lBRVQ7Ozs7O09BS0c7SUFDSDtRQWdCSSxxQkFBWSxTQUE4QztZQUN0RCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsU0FBUyxDQUFDO1lBQ3JDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxHQUFHLEVBQXVCLENBQUM7UUFDbkQsQ0FBQztRQUVEOzs7V0FHRztRQUNILGlDQUFXLEdBQVg7WUFFSSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsV0FBVyxDQUFDLENBQUM7WUFFeEQsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUVEOzs7V0FHRztRQUNILDJCQUFLLEdBQUw7WUFDSSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDbEQsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUVEOzs7V0FHRztRQUNILG9DQUFjLEdBQWQ7WUFDSSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDM0QsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUVEOzs7V0FHRztRQUNVLDJCQUFLLEdBQWxCOzs7Ozs7Ozs0QkFDdUIsS0FBQSxTQUFBLElBQUksQ0FBQyxRQUFRLENBQUE7Ozs7NEJBQXZCLE1BQU07NEJBQ1gscUJBQU0sTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsRUFBQTs7NEJBQTVDLFNBQTRDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBRXBEO1FBRUQsc0JBQUksZ0NBQU87aUJBQVg7Z0JBQ0ksT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ3pCLENBQUM7OztXQUFBO1FBRUQsc0JBQUksMkNBQWtCO2lCQUF0QjtnQkFDSSxPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQztZQUNwQyxDQUFDOzs7V0FBQTtRQUNMLGtCQUFDO0lBQUQsQ0FuRUEsQUFtRUMsSUFBQTtJQW5FWSxlQUFXLGNBbUV2QixDQUFBO0FBQ0wsQ0FBQyxFQTVFUyxHQUFHLEtBQUgsR0FBRyxRQTRFWjtBQzVFRCxJQUFVLEdBQUcsQ0E4R1o7QUE5R0QsV0FBVSxHQUFHO0lBRVQ7Ozs7O09BS0c7SUFDSDtRQWNJLHlCQUFZLFNBQThDO1lBQ3RELElBQUksQ0FBQyxtQkFBbUIsR0FBRyxTQUFTLENBQUM7WUFDckMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDLENBQWMsY0FBYztRQUMxRCxDQUFDO1FBRUQ7Ozs7V0FJRztRQUNJLDBDQUFnQixHQUF2QjtZQUVJLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBRTdELE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFFRDs7O1dBR0c7UUFDSSxzQ0FBWSxHQUFuQjtZQUVJLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUV6RCxPQUFPLElBQUksQ0FBQztRQUNoQixDQUFDO1FBRUQ7OztXQUdHO1FBQ0ksbUNBQVMsR0FBaEI7WUFFSSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsU0FBUyxDQUFDLENBQUM7WUFFdEQsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUVEOzs7O1dBSUc7UUFDSSx3Q0FBYyxHQUFyQjtZQUNJLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUMzRCxPQUFPLElBQUksQ0FBQztRQUNoQixDQUFDO1FBRUQ7OztXQUdHO1FBQ0ksc0NBQVksR0FBbkI7WUFFSSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsWUFBWSxDQUFDLENBQUM7WUFFekQsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUVEOzs7O1dBSUc7UUFDSCx3Q0FBYyxHQUFkO1lBQ0ksSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQzNELE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFFRDs7O1dBR0c7UUFDVSwrQkFBSyxHQUFsQjs7Ozs7Ozs7NEJBQ3VCLEtBQUEsU0FBQSxJQUFJLENBQUMsUUFBUSxDQUFBOzs7OzRCQUF2QixNQUFNOzRCQUNYLHFCQUFNLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEVBQUE7OzRCQUE1QyxTQUE0QyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQUVwRDtRQUVELHNCQUFJLCtDQUFrQjtpQkFBdEI7Z0JBQ0ksT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUM7WUFDcEMsQ0FBQzs7O1dBQUE7UUFFRCxzQkFBSSxvQ0FBTztpQkFBWDtnQkFDSSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDekIsQ0FBQzs7O1dBQUE7UUFDTCxzQkFBQztJQUFELENBckdBLEFBcUdDLElBQUE7SUFyR1ksbUJBQWUsa0JBcUczQixDQUFBO0FBQ0wsQ0FBQyxFQTlHUyxHQUFHLEtBQUgsR0FBRyxRQThHWjtBQzlHRCxJQUFVLEdBQUcsQ0EyTVo7QUEzTUQsV0FBVSxHQUFHO0lBRVQsSUFBaUIsR0FBRyxDQXdNbkI7SUF4TUQsV0FBaUIsR0FBRztRQUNoQjs7Ozs7V0FLRztRQUNIO1lBd0JJLHNCQUFZLGdCQUFzQztnQkFDOUMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLGdCQUFnQixDQUFDO1lBQzlDLENBQUM7WUFHRDs7OztlQUlHO1lBQ0ksdUNBQWdCLEdBQXZCLFVBQXdCLEtBQWE7Z0JBQ2pDLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO2dCQUM1QixPQUFPLElBQUksQ0FBQTtZQUNmLENBQUM7WUFFRDs7OztlQUlHO1lBQ0ksd0NBQWlCLEdBQXhCLFVBQXlCLE1BQWM7Z0JBRW5DLElBQUksQ0FBQyxlQUFlLEdBQUcsTUFBTSxDQUFDO2dCQUU5QixPQUFPLElBQUksQ0FBQztZQUNoQixDQUFDO1lBRUQ7Ozs7ZUFJRztZQUNJLHVDQUFnQixHQUF2QixVQUF3QixJQUFZO2dCQUVoQyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztnQkFFM0IsT0FBTyxJQUFJLENBQUM7WUFDaEIsQ0FBQztZQUVEOzs7O2VBSUc7WUFDSCx5Q0FBa0IsR0FBbEIsVUFBbUIsUUFBZ0I7Z0JBRS9CLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxRQUFRLENBQUM7Z0JBRWpDLE9BQU8sSUFBSSxDQUFDO1lBQ2hCLENBQUM7WUFFRDs7OztlQUlHO1lBQ0gsMENBQW1CLEdBQW5CLFVBQW9CLFNBQWlCO2dCQUVqQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsU0FBUyxDQUFDO2dCQUVuQyxPQUFPLElBQUksQ0FBQztZQUNoQixDQUFDO1lBRUQ7Ozs7ZUFJRztZQUNILDRDQUFxQixHQUFyQixVQUFzQixJQUFZO2dCQUU5QixJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDO2dCQUVoQyxPQUFPLElBQUksQ0FBQztZQUNoQixDQUFDO1lBRUQ7Ozs7ZUFJRztZQUNILDJDQUFvQixHQUFwQixVQUFxQixJQUFvQjtnQkFFckMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQztnQkFFL0IsT0FBTyxJQUFJLENBQUM7WUFDaEIsQ0FBQztZQUdEOzs7O2VBSUc7WUFDSSx1Q0FBZ0IsR0FBdkIsVUFBd0IsSUFBaUM7Z0JBRXJELElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO2dCQUUzQixPQUFPLElBQUksQ0FBQztZQUNoQixDQUFDO1lBR0Q7O2VBRUc7WUFDSCxzQ0FBZSxHQUFmLFVBQWdCLFlBQWtDO2dCQUM5QyxJQUFJLENBQUMsYUFBYSxHQUFHLFlBQVksQ0FBQztnQkFDbEMsT0FBTyxJQUFJLENBQUM7WUFDaEIsQ0FBQztZQUVEOztlQUVHO1lBQ0gsb0NBQWEsR0FBYixVQUFjLFVBQW9DO2dCQUM5QyxJQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQztnQkFDOUIsT0FBTyxJQUFJLENBQUM7WUFDaEIsQ0FBQztZQUVEOztlQUVHO1lBQ0gsK0JBQVEsR0FBUjtnQkFDSSxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3ZDLENBQUM7WUFFRCxzQkFBSSw0Q0FBa0I7cUJBQXRCO29CQUNJLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDO2dCQUNwQyxDQUFDOzs7ZUFBQTtZQUVELHNCQUFJLHVDQUFhO3FCQUFqQjtvQkFDSSxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7Z0JBQy9CLENBQUM7OztlQUFBO1lBRUQsc0JBQUksMkNBQWlCO3FCQUFyQjtvQkFDSSxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztnQkFDbkMsQ0FBQzs7O2VBQUE7WUFFRCxzQkFBSSx1Q0FBYTtxQkFBakI7b0JBQ0ksT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO2dCQUMvQixDQUFDOzs7ZUFBQTtZQUVELHNCQUFJLHdDQUFjO3FCQUFsQjtvQkFDSSxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7Z0JBQ2hDLENBQUM7OztlQUFBO1lBRUQsc0JBQUksMENBQWdCO3FCQUFwQjtvQkFDSSxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztnQkFDbEMsQ0FBQzs7O2VBQUE7WUFFRCxzQkFBSSx1Q0FBYTtxQkFBakI7b0JBQ0ksT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO2dCQUMvQixDQUFDOzs7ZUFBQTtZQUVELHNCQUFJLHlDQUFlO3FCQUFuQjtvQkFDSSxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztnQkFDakMsQ0FBQzs7O2VBQUE7WUFFRCxzQkFBSSwwQ0FBZ0I7cUJBQXBCO29CQUNJLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDO2dCQUNsQyxDQUFDOzs7ZUFBQTtZQUdELHNCQUFJLG9DQUFVO3FCQUFkO29CQUNJLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztnQkFDNUIsQ0FBQzs7O2VBQUE7WUFFRCxzQkFBSSxzQ0FBWTtxQkFBaEI7b0JBQ0ksT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO2dCQUM5QixDQUFDOzs7ZUFBQTtZQUNMLG1CQUFDO1FBQUQsQ0FoTUEsQUFnTUMsSUFBQTtRQWhNcUIsZ0JBQVksZUFnTWpDLENBQUE7SUFDTCxDQUFDLEVBeE1nQixHQUFHLEdBQUgsT0FBRyxLQUFILE9BQUcsUUF3TW5CO0FBQ0wsQ0FBQyxFQTNNUyxHQUFHLEtBQUgsR0FBRyxRQTJNWjtBQzNNRCxJQUFVLEdBQUcsQ0F3RFo7QUF4REQsV0FBVSxHQUFHO0lBQ1Q7Ozs7O09BS0c7SUFDSDtRQUFvQyxrQ0FBZ0I7UUFBcEQ7O1FBZ0RBLENBQUM7UUFoQ0c7Ozs7V0FJRztRQUNJLG1DQUFVLEdBQWpCLFVBQWtCLEdBQWdDO1lBRTlDLElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDO1lBRXBCLE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFFRDs7OztXQUlHO1FBQ0ksMkNBQWtCLEdBQXpCLFVBQTBCLE1BQXFDO1lBRTNELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxNQUFNLENBQUM7WUFFL0IsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUdELHNCQUFJLDJDQUFlO2lCQUFuQjtnQkFDSSxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztZQUNqQyxDQUFDOzs7V0FBQTtRQUVELHNCQUFJLG1DQUFPO2lCQUFYO2dCQUNJLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUN6QixDQUFDOzs7V0FBQTtRQUNMLHFCQUFDO0lBQUQsQ0FoREEsQUFnREMsQ0FoRG1DLElBQUEsR0FBRyxDQUFDLFlBQVksR0FnRG5EO0lBaERZLGtCQUFjLGlCQWdEMUIsQ0FBQTtBQUNMLENBQUMsRUF4RFMsR0FBRyxLQUFILEdBQUcsUUF3RFo7QUN2REQsSUFBVSxHQUFHLENBbUVaO0FBbkVELFdBQVUsR0FBRztJQUNUOzs7OztPQUtHO0lBQ0g7UUFBcUMsbUNBQWdCO1FBQXJEOztRQTJEQSxDQUFDO1FBakNHOzs7O1dBSUc7UUFDSSxvQ0FBVSxHQUFqQixVQUFrQixHQUFnQztZQUU5QyxJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztZQUVwQixPQUFPLElBQUksQ0FBQztRQUNoQixDQUFDO1FBRUQ7Ozs7V0FJRztRQUNJLDRDQUFrQixHQUF6QixVQUEwQixNQUFxQztZQUUzRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsTUFBTSxDQUFDO1lBRS9CLE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFFRDs7OztXQUlHO1FBQ0ksMkNBQWlCLEdBQXhCLFVBQXlCLE1BQXVDO1lBQzVELElBQUksQ0FBQyxlQUFlLEdBQUcsTUFBTSxDQUFDO1lBQzlCLE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFDTCxzQkFBQztJQUFELENBM0RBLEFBMkRDLENBM0RvQyxJQUFBLEdBQUcsQ0FBQyxZQUFZLEdBMkRwRDtJQTNEWSxtQkFBZSxrQkEyRDNCLENBQUE7QUFDTCxDQUFDLEVBbkVTLEdBQUcsS0FBSCxHQUFHLFFBbUVaIiwiZmlsZSI6ImZjYy1mcmFtZXdvcmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyJuYW1lc3BhY2UgZmNjIHtcclxuXHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIHR5cGUge1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAQXV0aG9yIFhJQU8tTEktUElOXHJcbiAgICAgICAgICogQERlc2NyaXB0aW9uIOWQhOeorumMr+iqpOmhnuWei1xyXG4gICAgICAgICAqIEBEYXRlIDIwMjEtMDQtMTQg5LiL5Y2IIDIwOjI0XHJcbiAgICAgICAgICogQFZlcnNpb24gMS4xXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZXhwb3J0IGVudW0gRXJyb3JUeXBlIHtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiDlj4PmlbjpjK/oqqRcclxuICAgICAgICAgICAgICogQHR5cGUge0Vycm9yVHlwZS5UWVBFX0ZXfVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgVFlQRV9GVyA9IFwi5YKz5YWl55qEVHlwZSDpjK/oqqQgLOiri+aqouWvn+ipslR5cGXmmK/lkKbpnZ5GYXJtV29ya+WFp+eahFR5cGVcIixcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiDln7fooYzmtYHnqIvpjK/oqqRcclxuICAgICAgICAgICAgICogQHR5cGUge0Vycm9yVHlwZS5JU19SVU5OSU5HX0ZXfVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgSVNfUlVOTklOR19GVyA9IFwi6YGK5oiy5q2j5Zyo5Z+36KGM5LitLOiri+WLv+mHjeikh+WRvOWPq1wiLFxyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIOepuuiuiuaVuOmMr+iqpFxyXG4gICAgICAgICAgICAgKiBAdHlwZSB7RXJyb3JUeXBlLlVOREVGSU5FRF9GV31cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIFVOREVGSU5FRF9GVyA9IFwi6K6K5pW454K6dW5kZWZpbmVkLOa1geeoi+eEoeazlee5vOe6jFwiLFxyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIOWKoOi8ieizh+a6kOmhnuaciemMr+iqpFxyXG4gICAgICAgICAgICAgKiBAdHlwZSB7RXJyb3JUeXBlLkxPQURfRld9XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBMT0FEX0ZXID0gXCLliqDovInnmoTos4fmupDmnInllY/poYxcIixcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiDli5XnlavpoZ7mnInpjK/oqqRcclxuICAgICAgICAgICAgICogQHR5cGUge0Vycm9yVHlwZS5BTklNQVRJT05fRld9XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBBTklNQVRJT05fRlcgPSBcIkFuaW1hdGlvbiDpoZ7kuK3mlrnms5XmnInpjK/oqqQgOiBcIixcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBzZXJ2ZXIg6KuL5rGC6Yyv6KqkXHJcbiAgICAgICAgICAgICAqIEB0eXBlIHtFcnJvclR5cGUuV0VCX1JFUVVFU1RfRld9XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBXRUJfUkVRVUVTVF9GVyA9IFwiV2ViUmVxdWVzdCDpoZ7mnInpjK/oqqQgOiBcIixcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBzZXJ2ZXIg6Z+/5oeJ6Yyv6KqkXHJcbiAgICAgICAgICAgICAqIEB0eXBlIHtFcnJvclR5cGUuV0VCX1JFU1BPTlNFX0ZXfVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgV0VCX1JFU1BPTlNFX0ZXID0gXCJXZWJSZXNwb25zZSDpoZ7mnInpjK/oqqQgOiBcIixcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiDpn7PmqILpoZ7pjK/oqqRcclxuICAgICAgICAgICAgICogQHR5cGUge0Vycm9yVHlwZS5BVURJT19GV31cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIEFVRElPX0ZXID0gXCJBVURJTyDpoZ7mnInpjK/oqqQgOlwiLFxyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIOWgtOaZr+mhnumMr+iqpFxyXG4gICAgICAgICAgICAgKiBAdHlwZSB7RXJyb3JUeXBlLlNDRU5FX0ZXfVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgU0NFTkVfRlcgPSBcIlNjZW5lIOmhnuaciemMr+iqpCA6XCIsXHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICog5rWB56iL6aGe6Yyv6KqkXHJcbiAgICAgICAgICAgICAqIEB0eXBlIHtFcnJvclR5cGUuUFJPQ0VTU19GV31cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIFBST0NFU1NfRlcgPSBcInByb2Nlc3Mg6aGe5pyJ6Yyv6KqkIDpcIixcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiDnm6Pogb3kuovku7bpoZ7mnInpjK/oqqRcclxuICAgICAgICAgICAgICogQHR5cGUge0Vycm9yVHlwZS5MSVNURU5FUl9GV31cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIExJU1RFTkVSX0ZXID0gXCJFdmVudCDpoZ7mnInpjK/oqqQgOlwiLFxyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIOiAgeiZjuapn+aoo+W8j+mhnuaciemMr+iqpFxyXG4gICAgICAgICAgICAgKiBAdHlwZSB7RXJyb3JUeXBlLlNMT1RfU1RZTEVfRld9XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBTTE9UX1NUWUxFX0ZXID0gXCJTbG90U3R5bGVGV+mhnuaciemMr+iqpCA6XCIsXHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICog5qih5p2/6aGe5pyJ6Yyv6KqkXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBURU1QTEFURV9GVyA9IFwi5qih5p2/6aGe5pyJ6Yyv6KqkIDpcIixcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vRW51bS9FcnJvclR5cGUudHNcIiAvPlxyXG5uYW1lc3BhY2UgZmNjIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBBdXRob3IgWElBTy1MSS1QSU5cclxuICAgICAqIEBEZXNjcmlwdGlvbiDnhKHlvp7liKTmlrfoqbLpjK/oqqTpoZ7lnotcclxuICAgICAqIEBEYXRlIDIwMjEtMDQtMTQg5LiL5Y2IIDIwOjI0XHJcbiAgICAgKiBAVmVyc2lvbiAxLjFcclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGNsYXNzIFVua25vd25FcnJvciB7XHJcblxyXG4gICAgICAgIHByaXZhdGUgY29uZmlnTWFuYWdlcjogSUYuSUNvbmZpZ01hbmFnZXI7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbmZpZ01hbmFnZXI6IElGLklDb25maWdNYW5hZ2VyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29uZmlnTWFuYWdlciA9IGNvbmZpZ01hbmFnZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjaGVja0Vycm9yVHlwZShtZXNzYWdlPzogc3RyaW5nIHwgdHlwZS5FcnJvclR5cGUsIG9iaj86IGFueSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYOS+i+WklumMr+iqpCA6ICR7bWVzc2FnZX1gKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vRW51bS9FcnJvclR5cGUudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9Vbmtub3duRXJyb3IudHNcIiAvPlxyXG5uYW1lc3BhY2UgZmNjIHtcclxuICAgIC8qKlxyXG4gICAgICogQEF1dGhvciBYSUFPLUxJLVBJTlxyXG4gICAgICogQERlc2NyaXB0aW9uIOaqoua4rOipsumMr+iqpOaYr+WQpueCuuahhuaetumMr+iqpFxyXG4gICAgICogQERhdGUgMjAyMS0wNC0xNCDkuIvljYggMjA6MjRcclxuICAgICAqIEBWZXJzaW9uIDEuMVxyXG4gICAgICovXHJcbiAgICBleHBvcnQgY2xhc3MgRnJhbWVXb3JrRXJyb3Ige1xyXG5cclxuICAgICAgICBwcml2YXRlIHVua25vd25FcnJvcjogVW5rbm93bkVycm9yO1xyXG4gICAgICAgIHByaXZhdGUgY29uZmlnTWFuYWdlcjogSUYuSUNvbmZpZ01hbmFnZXI7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbmZpZ01hbmFnZXI6IElGLklDb25maWdNYW5hZ2VyKSB7XHJcbiAgICAgICAgICAgIHRoaXMudW5rbm93bkVycm9yID0gbmV3IFVua25vd25FcnJvcihjb25maWdNYW5hZ2VyKTtcclxuICAgICAgICAgICAgdGhpcy5jb25maWdNYW5hZ2VyID0gY29uZmlnTWFuYWdlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNoZWNrRXJyb3JUeXBlKG1lc3NhZ2U6IHN0cmluZyB8IHR5cGUuRXJyb3JUeXBlLCBvYmo6IGFueSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jb25maWdNYW5hZ2VyLmlzRnJhbWV3b3JrRGVidWcpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAobWVzc2FnZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgdHlwZS5FcnJvclR5cGUuSVNfUlVOTklOR19GVzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke3R5cGUuRXJyb3JUeXBlLklTX1JVTk5JTkdfRld9ICR7b2JqfWApO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgdHlwZS5FcnJvclR5cGUuVU5ERUZJTkVEX0ZXOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7dHlwZS5FcnJvclR5cGUuVU5ERUZJTkVEX0ZXfSAke29ian1gKTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIHR5cGUuRXJyb3JUeXBlLlRZUEVfRlc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgJHt0eXBlLkVycm9yVHlwZS5UWVBFX0ZXfSAke29ian1gKTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIHR5cGUuRXJyb3JUeXBlLkFOSU1BVElPTl9GVzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke3R5cGUuRXJyb3JUeXBlLkFOSU1BVElPTl9GV30gJHtvYmp9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSB0eXBlLkVycm9yVHlwZS5MT0FEX0ZXOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7dHlwZS5FcnJvclR5cGUuTE9BRF9GV30gJHtvYmp9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSB0eXBlLkVycm9yVHlwZS5XRUJfUkVRVUVTVF9GVzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke3R5cGUuRXJyb3JUeXBlLldFQl9SRVFVRVNUX0ZXfSAke29ian1gKTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIHR5cGUuRXJyb3JUeXBlLkFVRElPX0ZXOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7dHlwZS5FcnJvclR5cGUuQVVESU9fRld9ICR7b2JqfWApO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgdHlwZS5FcnJvclR5cGUuV0VCX1JFU1BPTlNFX0ZXOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7dHlwZS5FcnJvclR5cGUuV0VCX1JFU1BPTlNFX0ZXfSAke29ian1gKTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIHR5cGUuRXJyb3JUeXBlLlNDRU5FX0ZXOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7dHlwZS5FcnJvclR5cGUuU0NFTkVfRld9ICR7b2JqfWApO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgdHlwZS5FcnJvclR5cGUuUFJPQ0VTU19GVzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke3R5cGUuRXJyb3JUeXBlLlBST0NFU1NfRld9ICR7b2JqfWApO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgdHlwZS5FcnJvclR5cGUuTElTVEVORVJfRlc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgJHt0eXBlLkVycm9yVHlwZS5MSVNURU5FUl9GV30gJHtvYmp9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSB0eXBlLkVycm9yVHlwZS5TTE9UX1NUWUxFX0ZXOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7dHlwZS5FcnJvclR5cGUuU0xPVF9TVFlMRV9GV30gJHtvYmp9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSB0eXBlLkVycm9yVHlwZS5URU1QTEFURV9GVzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke3R5cGUuRXJyb3JUeXBlLlRFTVBMQVRFX0ZXfSAke29ian1gKTtcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0IDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51bmtub3duRXJyb3IuY2hlY2tFcnJvclR5cGUobWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuacieS+i+WklumMr+iqpCzkvYbkvaDmnKrplovllZ/moYbmnrZEZWJ1ZyznhKHms5Xmn6XnnItcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vRW51bS9FcnJvclR5cGUudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9GcmFtZVdvcmtFcnJvci50c1wiIC8+XHJcbm5hbWVzcGFjZSBmY2Mge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQEF1dGhvciBYSUFPLUxJLVBJTlxyXG4gICAgICogQERlc2NyaXB0aW9uIOaqoua4rOipsumMr+iqpOaYr+WQpueCuueJqeS7tumMr+iqpFxyXG4gICAgICogQERhdGUgMjAyMS0wNC0xNCDkuIvljYggMjA6MjRcclxuICAgICAqIEBWZXJzaW9uIDEuMVxyXG4gICAgICovXHJcbiAgICBleHBvcnQgY2xhc3MgT2JqZWN0RXJyb3Ige1xyXG5cclxuICAgICAgICBwcml2YXRlIGZyYW1lV29ya0Vycm9yOiBGcmFtZVdvcmtFcnJvcjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoY29uZmlnTWFuYWdlcjogSUYuSUNvbmZpZ01hbmFnZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5mcmFtZVdvcmtFcnJvciA9IG5ldyBGcmFtZVdvcmtFcnJvcihjb25maWdNYW5hZ2VyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNoZWNrRXJyb3JUeXBlKG1lc3NhZ2U6IHN0cmluZyB8IHR5cGUuRXJyb3JUeXBlLCBvYmo/OiBhbnkpOiBhbnkge1xyXG5cclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBtZXNzYWdlID09PSBcInN0cmluZ1wiKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5mcmFtZVdvcmtFcnJvci5jaGVja0Vycm9yVHlwZShtZXNzYWdlLCBvYmopO1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIGlmIChtZXNzYWdlID09PSBudWxsKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hlY2tPYmplY3RUeXBlKG9iaik7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2hlY2tPYmplY3RUeXBlKG9iajogYW55KSB7XHJcbiAgICAgICAgICAgIGlmIChvYmogJiYgb2JqICE9IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihg6Kmy54mp5Lu254K6bnVsbGApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0VudW0vRXJyb3JUeXBlLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0Vycm9yTWFuYWdlci50c1wiIC8+XHJcbm5hbWVzcGFjZSBmY2Mge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQEF1dGhvciBYSUFPLUxJLVBJTlxyXG4gICAgICogQERlc2NyaXB0aW9uIOmhr+ekunNlcnZlcuWbnuWCs+eahOmMr+iqpFxyXG4gICAgICogQERhdGUgMjAyMS0wNC0xNCDkuIvljYggMjA6MjRcclxuICAgICAqIEBWZXJzaW9uIDEuMVxyXG4gICAgICovXHJcbiAgICBleHBvcnQgY2xhc3MgU2VydmVyRXJyb3IgaW1wbGVtZW50cyBJRi5JU2hvd0Vycm9yRGlhbG9nIHtcclxuICAgICAgICBwcml2YXRlIHRpbWVPdXQ6IG51bWJlclxyXG4gICAgICAgIHByaXZhdGUgZXJyb3JNYW5hZ2VyOklGLklFcnJvck1hbmFnZXI7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGVycm9yTWFuYWdlcjpJRi5JRXJyb3JNYW5hZ2VyKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGltZU91dCA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMuZXJyb3JNYW5hZ2VyID0gZXJyb3JNYW5hZ2VyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogIOmhr+ekunNlcnZlcuWbnuWCs+eahOmMr+iqpOS6i+S7tlxyXG4gICAgICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gcGVybWFuZW50U3RhdGUgLSDmmK/lkKbmjIHnuozpoa/npLpcclxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSAtIOmhr+ekuumMr+iqpOioiuaBr+aWh+Wtl1xyXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBidXR0b25UZXh0IC0g5oyJ6YiV5paH5a2XXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgc2hvd0Vycm9yKHBlcm1hbmVudFN0YXRlOiBib29sZWFuLCBtZXNzYWdlOiBzdHJpbmcsIGJ1dHRvblRleHQ6IHN0cmluZykge1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMudGltZU91dCAhPSBudWxsKSBjbGVhclRpbWVvdXQodGhpcy50aW1lT3V0KTtcclxuXHJcbiAgICAgICAgICAgIC8v56K66KqN55W25YmN5pyJ54Sh6Kmy54mp5Lu2LOWmgueEoeipsueJqeS7tizlsIfmnIN0aHJvd+S4reaWt1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuZXJyb3JNYW5hZ2VyLmVycm9yTm9kZSlcclxuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JNYW5hZ2VyLmV4ZWN1dGVFcnJvcih0eXBlLkVycm9yVHlwZS5VTkRFRklORURfRlcsIFwiRXJyb3JNYW5hZ2VyIGVycm9yTm9kZeeCuuepulwiKTtcclxuXHJcbiAgICAgICAgICAgIGlmICghdGhpcy5lcnJvck1hbmFnZXIuZXJyb3JMYWJlbClcclxuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JNYW5hZ2VyLmV4ZWN1dGVFcnJvcih0eXBlLkVycm9yVHlwZS5VTkRFRklORURfRlcsIFwiRXJyb3JNYW5hZ2VyIGVycm9yTGFiZWzngrrnqbpcIik7XHJcblxyXG4gICAgICAgICAgICBpZiAoIXRoaXMuZXJyb3JNYW5hZ2VyLmVycm9yQnV0dG9uKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5lcnJvck1hbmFnZXIuZXhlY3V0ZUVycm9yKHR5cGUuRXJyb3JUeXBlLlVOREVGSU5FRF9GVywgXCJFcnJvck1hbmFnZXIgZXJyb3JCdXR0b27ngrrnqbpcIik7XHJcblxyXG4gICAgICAgICAgICBFcnJvck1hbmFnZXIuZXJyb3JTdGF0ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuZXJyb3JNYW5hZ2VyLmVycm9yTm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmVycm9yTWFuYWdlci5lcnJvckxhYmVsLnN0cmluZyA9IG1lc3NhZ2U7XHJcbiAgICAgICAgICAgIHRoaXMuZXJyb3JNYW5hZ2VyLmVycm9yQnV0dG9uLmFjdGl2ZSA9IHRoaXMuZXJyb3JNYW5hZ2VyLmlzU2hvd0JhY2tIb21lQnV0dG9uO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuZXJyb3JNYW5hZ2VyLmVycm9yQnV0dG9uLmFjdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lcnJvck1hbmFnZXIuZXJyb3JCdXR0b25MYWJlbC5zdHJpbmcgPSBidXR0b25UZXh0O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIXBlcm1hbmVudFN0YXRlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVPdXQgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgRXJyb3JNYW5hZ2VyLmVycm9yU3RhdGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yTWFuYWdlci5lcnJvck5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvck1hbmFnZXIuZXJyb3JCdXR0b24uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aW1lT3V0ID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgICAgICB9LCB0aGlzLmVycm9yTWFuYWdlci5lcnJvckRlbGF5VGltZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vRW51bS9FcnJvclR5cGUudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vRXJyb3JNYW5hZ2VyLnRzXCIgLz5cclxubmFtZXNwYWNlIGZjYyB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAQXV0aG9yIFhJQU8tTEktUElOXHJcbiAgICAgKiBARGVzY3JpcHRpb24g6aGv56S66K2m5ZGK6Yyv6KqkXHJcbiAgICAgKiBARGF0ZSAyMDIxLTA0LTE0IOS4i+WNiCAyMDoyNFxyXG4gICAgICogQFZlcnNpb24gMS4xXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBjbGFzcyBXYXJuaW5nRXJyb3IgaW1wbGVtZW50cyBJRi5JU2hvd0Vycm9yRGlhbG9nIHtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSB0aW1lb3V0OiBudW1iZXJcclxuICAgICAgICBwcml2YXRlIGVycm9yTWFuYWdlcjpJRi5JRXJyb3JNYW5hZ2VyO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihlcnJvck1hbmFnZXI6SUYuSUVycm9yTWFuYWdlcikge1xyXG4gICAgICAgICAgICB0aGlzLnRpbWVvdXQgPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLmVycm9yTWFuYWdlciA9IGVycm9yTWFuYWdlcjtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDpoa/npLrorablkYogRGlhbG9nXHJcbiAgICAgICAgICogQHBhcmFtIHtib29sZWFufSBwZXJtYW5lbnRTdGF0ZSAtIOaYr+WQpuaMgee6jOmhr+ekulxyXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlIC0g6aGv56S66Yyv6Kqk6KiK5oGv5paH5a2XXHJcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGJ1dHRvblRleHQgLSDmjInpiJXmloflrZdcclxuICAgICAgICAgKi9cclxuICAgICAgICBzaG93RXJyb3IocGVybWFuZW50U3RhdGU6IGJvb2xlYW4sIG1lc3NhZ2U6IHN0cmluZywgYnV0dG9uVGV4dDogc3RyaW5nKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy50aW1lb3V0ICE9IG51bGwpIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xyXG5cclxuICAgICAgICAgICAgLy/norroqo3nlbbliY3mnInnhKHoqbLnianku7Ys5aaC54Sh6Kmy54mp5Lu2LOWwh+acg3Rocm935Lit5pa3XHJcblxyXG4gICAgICAgICAgICBpZiAoIXRoaXMuZXJyb3JNYW5hZ2VyLndhcm5pbmdOb2RlKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5lcnJvck1hbmFnZXIuZXhlY3V0ZUVycm9yKHR5cGUuRXJyb3JUeXBlLlVOREVGSU5FRF9GVywgXCJFcnJvck1hbmFnZXIgd2FybmluZ05vZGXngrrnqbpcIik7XHJcblxyXG4gICAgICAgICAgICBpZiAoIXRoaXMuZXJyb3JNYW5hZ2VyLndhcm5pbmdMYWJlbClcclxuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JNYW5hZ2VyLmV4ZWN1dGVFcnJvcih0eXBlLkVycm9yVHlwZS5VTkRFRklORURfRlcsIFwiRXJyb3JNYW5hZ2VyIHdhcm5pbmdMYWJlbOeCuuepulwiKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmVycm9yTWFuYWdlci53YXJuaW5nRGVsYXlUaW1lID09IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JNYW5hZ2VyLmV4ZWN1dGVFcnJvcihg55W25YmNRGVsYXlUaW1lID0gMCA6IOiri+e1puS6iOWAvGApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBFcnJvck1hbmFnZXIud2FybmluZ1N0YXRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5lcnJvck1hbmFnZXIud2FybmluZ05vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5lcnJvck1hbmFnZXIud2FybmluZ0xhYmVsLnN0cmluZyA9IG1lc3NhZ2U7XHJcblxyXG4gICAgICAgICAgICBpZiAocGVybWFuZW50U3RhdGUpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIHRoaXMudGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICBFcnJvck1hbmFnZXIud2FybmluZ1N0YXRlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9yTWFuYWdlci53YXJuaW5nTm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIH0sIHRoaXMuZXJyb3JNYW5hZ2VyLndhcm5pbmdEZWxheVRpbWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogWFhYIDpcclxuICAgICAgICAgKiDnlbbliY3mmqvmmYLnhKHkvb/nlKgs5LiA5qij5L+d55WZXHJcbiAgICAgICAgICog6aGv56S66YeR6aGN5LiN6Laz54Sh5rOV5LiL5rOoXHJcbiAgICAgICAgICogQHBhcmFtIG9iaiDpoa/npLrlnKhsYWJlbOeahOaWh+Wtl1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHNob3dFcnJvckJldChvYmo6IHN0cmluZykge1xyXG5cclxuICAgICAgICAgICAgLy/norroqo3nlbbliY3mnInnhKHoqbLnianku7Ys5aaC54Sh6Kmy54mp5Lu2LOWwh+acg3Rocm935Lit5pa3XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5lcnJvck1hbmFnZXIuZXJyb3JOb2RlKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5lcnJvck1hbmFnZXIuZXhlY3V0ZUVycm9yKHR5cGUuRXJyb3JUeXBlLlVOREVGSU5FRF9GVywgXCJFcnJvck1hbmFnZXIgZXJyb3JOb2Rl54K656m6XCIpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCF0aGlzLmVycm9yTWFuYWdlci5lcnJvckxhYmVsKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5lcnJvck1hbmFnZXIuZXhlY3V0ZUVycm9yKHR5cGUuRXJyb3JUeXBlLlVOREVGSU5FRF9GVywgXCJFcnJvck1hbmFnZXIgZXJyb3JMYWJlbOeCuuepulwiKTtcclxuXHJcbiAgICAgICAgICAgIGlmICghdGhpcy5lcnJvck1hbmFnZXIuZXJyb3JCdXR0b24pXHJcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9yTWFuYWdlci5leGVjdXRlRXJyb3IodHlwZS5FcnJvclR5cGUuVU5ERUZJTkVEX0ZXLCBcIkVycm9yTWFuYWdlciBlcnJvckJ1dHRvbueCuuepulwiKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmVycm9yTWFuYWdlci5lcnJvckRlbGF5VGltZSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9yTWFuYWdlci5leGVjdXRlRXJyb3IodHlwZS5FcnJvclR5cGUuVU5ERUZJTkVEX0ZXLCBcIkVycm9yTWFuYWdlciBlcnJvckRlbGF5VGltZeeCuuepuiDnhKHms5Xpoa/npLpcIik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChFcnJvck1hbmFnZXIuZXJyb3JTdGF0ZSkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgRXJyb3JNYW5hZ2VyLmVycm9yU3RhdGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmVycm9yTWFuYWdlci5lcnJvck5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5lcnJvck1hbmFnZXIuZXJyb3JMYWJlbC5zdHJpbmcgPSBvYmo7XHJcblxyXG4gICAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgRXJyb3JNYW5hZ2VyLmVycm9yU3RhdGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JNYW5hZ2VyLmVycm9yTm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIH0sIHRoaXMuZXJyb3JNYW5hZ2VyLmVycm9yRGVsYXlUaW1lKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0VudW0vRXJyb3JUeXBlLnRzXCIgLz5cclxubmFtZXNwYWNlIGZjYyB7XHJcblxyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBJRiB7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBBdXRob3IgWElBTy1MSS1QSU5cclxuICAgICAgICAgKiBARGVzY3JpcHRpb24gKOS7i+mdoilFcnJvcueuoeeQhuWZqCDpjK/oqqTkuovku7bkuK3ku4vogIVcclxuICAgICAgICAgKiBARGF0ZSAyMDIxLTA0LTE0IOS4i+WNiCAyMDoyNFxyXG4gICAgICAgICAqIEBWZXJzaW9uIDEuMVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGV4cG9ydCBpbnRlcmZhY2UgSUVycm9ySGFuZGxlciB7XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICog56K66KqN6Yyv6Kqk6aGe5Z6LXHJcbiAgICAgICAgICAgICAqIEBzdW1tYXJ5IC0g6LKs5Lu76Y+I5qih5byPIDogT3ZlcmxvYWRcclxuICAgICAgICAgICAgICogQHRocm93cyAobnVsbCxhbnkpIC0gcmV0dXJuIOipsueJqeS7tiBvciB0aHJvdyAoXCLoqbLnianku7bngrpudWxsXCIpXHJcbiAgICAgICAgICAgICAqIEB0aHJvd3MgKGZjYy50eXBlLkVycm9yVHlwZSxzdHJpbmcpIC0gdGhyb3cgKGBFcnJvclR5cGUgKyAke3N0cmluZ31gKVxyXG4gICAgICAgICAgICAgKiBAdGhyb3dzIChzdHJpbmcsYW55KSAtIHRocm93IChgJHtzdHJpbmd9YClcclxuICAgICAgICAgICAgICogQHBhcmFtIHtzdHJpbmcgfCBmY2MudHlwZS5FcnJvclR5cGV9IG1lc3NhZ2VcclxuICAgICAgICAgICAgICogQHBhcmFtIG9ialxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgY2hlY2tFcnJvclR5cGUobWVzc2FnZT86IHN0cmluZyB8IHR5cGUuRXJyb3JUeXBlLCBvYmo/OiBhbnkpOiBhbnk7XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICog56K66KqNc2VydmVy5Zue5YKz6Yyv6Kqk6aGe5Z6LXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gcGVybWFuZW50U3RhdGUgLSDmmK/lkKbmjIHnuozpoa/npLpcclxuICAgICAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgLSDpoa/npLrpjK/oqqToqIrmga/mloflrZdcclxuICAgICAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGJ1dHRvblRleHQgLSDmjInpiJXmloflrZdcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIGNoZWNrU2VydmVyRXJyb3IocGVybWFuZW50U3RhdGU6IGJvb2xlYW4sIG1lc3NhZ2U6IHN0cmluZywgYnV0dG9uVGV4dD86IHN0cmluZyk6IHZvaWQ7XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICog56K66KqN6K2m5ZGK6aGe5Z6LXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gcGVybWFuZW50U3RhdGUgLSDmmK/lkKbmjIHnuozpoa/npLpcclxuICAgICAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgLSDpoa/npLrpjK/oqqToqIrmga/mloflrZdcclxuICAgICAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGJ1dHRvblRleHQgLSDmjInpiJXmloflrZdcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIGNoZWNrV2FybmluZyhwZXJtYW5lbnRTdGF0ZTogYm9vbGVhbiwgbWVzc2FnZTogc3RyaW5nLCBidXR0b25UZXh0Pzogc3RyaW5nKTogdm9pZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9FbnVtL0Vycm9yVHlwZS50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0Vycm9yVHlwZS9PYmplY3RFcnJvci50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0Vycm9yVHlwZS9TZXJ2ZXJFcnJvci50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0Vycm9yVHlwZS9XYXJuaW5nRXJyb3IudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9JRXJyb3JIYW5kbGVyLnRzXCIgLz5cclxubmFtZXNwYWNlIGZjYyB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAQXV0aG9yIFhJQU8tTEktUElOXHJcbiAgICAgKiBARGVzY3JpcHRpb24gRXJyb3LnrqHnkIblmagg6Yyv6Kqk5LqL5Lu25Lit5LuL6ICFXHJcbiAgICAgKiBARGF0ZSAyMDIxLTA0LTE0IOS4i+WNiCAyMDoyNFxyXG4gICAgICogQFZlcnNpb24gMS4xXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBjbGFzcyBFcnJvckhhbmRsZXIgaW1wbGVtZW50cyBJRi5JRXJyb3JIYW5kbGVyIHtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBvYmplY3RFcnJvcjogT2JqZWN0RXJyb3I7XHJcbiAgICAgICAgcHJpdmF0ZSBzZXJ2ZXJFcnJvcjogU2VydmVyRXJyb3I7XHJcbiAgICAgICAgcHJpdmF0ZSB3YXJuaW5nRXJyb3I6IFdhcm5pbmdFcnJvcjtcclxuXHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbmZpZ01hbmFnZXI6IElGLklDb25maWdNYW5hZ2VyLCBlcnJvck1hbmFnZXI6IElGLklFcnJvck1hbmFnZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5vYmplY3RFcnJvciA9IG5ldyBPYmplY3RFcnJvcihjb25maWdNYW5hZ2VyKTtcclxuICAgICAgICAgICAgdGhpcy5zZXJ2ZXJFcnJvciA9IG5ldyBTZXJ2ZXJFcnJvcihlcnJvck1hbmFnZXIpO1xyXG4gICAgICAgICAgICB0aGlzLndhcm5pbmdFcnJvciA9IG5ldyBXYXJuaW5nRXJyb3IoZXJyb3JNYW5hZ2VyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOeiuuiqjemMr+iqpOmhnuWei1xyXG4gICAgICAgICAqIEBzdW1tYXJ5IC0g6LKs5Lu76Y+I5qih5byPIDogT3ZlcmxvYWRcclxuICAgICAgICAgKiBAdGhyb3dzIChudWxsLGFueSkgLSByZXR1cm4g6Kmy54mp5Lu2IG9yIHRocm93IChcIuipsueJqeS7tueCum51bGxcIilcclxuICAgICAgICAgKiBAdGhyb3dzIChmY2MudHlwZS5FcnJvclR5cGUsc3RyaW5nKSAtIHRocm93IChgRXJyb3JUeXBlICsgJHtzdHJpbmd9YClcclxuICAgICAgICAgKiBAdGhyb3dzIChzdHJpbmcsYW55KSAtIHRocm93IChgJHtzdHJpbmd9YClcclxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZyB8IGZjYy50eXBlLkVycm9yVHlwZX0gbWVzc2FnZVxyXG4gICAgICAgICAqIEBwYXJhbSBvYmpcclxuICAgICAgICAgKi9cclxuICAgICAgICBjaGVja0Vycm9yVHlwZShtZXNzYWdlOiBzdHJpbmcgfCB0eXBlLkVycm9yVHlwZSwgb2JqPzogYW55KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9iamVjdEVycm9yLmNoZWNrRXJyb3JUeXBlKG1lc3NhZ2UsIG9iaik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDnorroqo1zZXJ2ZXLlm57lgrPpjK/oqqTpoZ7lnotcclxuICAgICAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHBlcm1hbmVudFN0YXRlIC0g5piv5ZCm5oyB57qM6aGv56S6XHJcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgLSDpoa/npLrpjK/oqqToqIrmga/mloflrZdcclxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gYnV0dG9uVGV4dCAtIOaMiemIleaWh+Wtl1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBjaGVja1NlcnZlckVycm9yKHBlcm1hbmVudFN0YXRlOiBib29sZWFuLCBtZXNzYWdlOiBzdHJpbmcsIGJ1dHRvblRleHQ/OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXJ2ZXJFcnJvci5zaG93RXJyb3IocGVybWFuZW50U3RhdGUsIG1lc3NhZ2UsIGJ1dHRvblRleHQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog56K66KqN6K2m5ZGK6aGe5Z6LXHJcbiAgICAgICAgICogQHBhcmFtIHtib29sZWFufSBwZXJtYW5lbnRTdGF0ZSAtIOaYr+WQpuaMgee6jOmhr+ekulxyXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlIC0g6aGv56S66Yyv6Kqk6KiK5oGv5paH5a2XXHJcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGJ1dHRvblRleHQgLSDmjInpiJXmloflrZdcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgY2hlY2tXYXJuaW5nKHBlcm1hbmVudFN0YXRlOiBib29sZWFuLCBtZXNzYWdlOiBzdHJpbmcsIGJ1dHRvblRleHQ/OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgdGhpcy53YXJuaW5nRXJyb3Iuc2hvd0Vycm9yKHBlcm1hbmVudFN0YXRlLCBtZXNzYWdlLCBidXR0b25UZXh0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9FbnVtL0Vycm9yVHlwZS50c1wiIC8+XHJcbm5hbWVzcGFjZSBmY2Mge1xyXG5cclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgSUYge1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAQXV0aG9yIFhJQU8tTEktUElOXHJcbiAgICAgICAgICogQERlc2NyaXB0aW9uICjku4vpnaIpIOmMr+iqpOioiuaBr+euoeeQhuWZqFxyXG4gICAgICAgICAqIEBEYXRlIDIwMjEtMDQtMTQg5LiL5Y2IIDIwOjI0XHJcbiAgICAgICAgICogQFZlcnNpb24gMS4xXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZXhwb3J0IGludGVyZmFjZSBJRXJyb3JNYW5hZ2VyIHtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiDntoHlrpropoHpoa/npLpFcnJvcue1hOS7tueahOeJqeS7tlxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgZXJyb3JOb2RlOiBjYy5Ob2RlO1xyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICrntoHlrprorablkYroqIrmga9cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHdhcm5pbmdOb2RlOiBjYy5Ob2RlO1xyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICrntoHlrppFcnJvckJ1dHRvblxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgZXJyb3JCdXR0b246IGNjLk5vZGU7XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICog57aB5a6a6K2m5ZGK6KaB6aGv56S655qE6Yyv6Kqk6KiK5oGvXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICB3YXJuaW5nTGFiZWw6IGNjLkxhYmVsO1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIOe2geWumuimgemhr+ekuumMr+iqpOioiuaBr+eahExhYmVsXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBlcnJvckxhYmVsOiBjYy5MYWJlbDtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiDntoHlrprpjK/oqqToqIrmga/nmoTmjInpiJVcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIGVycm9yQnV0dG9uTGFiZWw6IGNjLkxhYmVsO1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIOmhr+ekuuimgemhr+ekuumMr+iqpOioiuaBr+eahOaZgumWk1xyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgZXJyb3JEZWxheVRpbWU6IG51bWJlcjtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiDpoa/npLrorablkYroqIrmga/nmoTmmYLplpNcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHdhcm5pbmdEZWxheVRpbWU6IG51bWJlcjtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiDmmK/lkKbpoa/npLrov5Tlm55CdXR0b25cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIGlzU2hvd0JhY2tIb21lQnV0dG9uOiBib29sZWFuO1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIOiyrOS7u+mPiOaooeW8j1xyXG4gICAgICAgICAgICAgKiDpoa/npLrpjK/oqqToqIrmga8s6IO95YGa5aSa5YCL54mp5Lu25qqi5risXHJcbiAgICAgICAgICAgICAqIEBwYXJhbXtzdHJpbmcgfCB9bWVzc2FnZVxyXG4gICAgICAgICAgICAgKiBAcGFyYW0gb2JqXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBleGVjdXRlRXJyb3IobWVzc2FnZTogc3RyaW5nIHwgdHlwZS5FcnJvclR5cGUsIG9iaj86IGFueSk6IHZvaWQ7XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICog6aGv56S66Yyv6Kqk6KaW56qXXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gcGVybWFuZW50U3RhdGUgOiDmmK/lkKbluLjpp5BcclxuICAgICAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgIDog6Yyv6Kqk6KiK5oGvXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBidXR0b25UZXh0IDogYnV0dG9u5paH5a2XXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBzZXJ2ZXJFcnJvcihwZXJtYW5lbnRTdGF0ZTogYm9vbGVhbiwgbWVzc2FnZTogc3RyaW5nLCBidXR0b25UZXh0Pzogc3RyaW5nKTogdm9pZDtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiDpoa/npLrorablkYos5bCH5pyD6Kq/55So5bey5L+d5a2Y55qE6K2m5ZGKTm9kZVxyXG4gICAgICAgICAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHBlcm1hbmVudFN0YXRlIDog5piv5ZCm5bi46aeQXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlICA6IOmMr+iqpOioiuaBr1xyXG4gICAgICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gYnV0dG9uVGV4dCA6IGJ1dHRvbuaWh+Wtl1xyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgd2FybmluZyhwZXJtYW5lbnRTdGF0ZTogYm9vbGVhbiwgbWVzc2FnZTogc3RyaW5nLCBidXR0b25UZXh0Pzogc3RyaW5nKTogdm9pZDtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiDmt7vliqDopoHntoHlrprnmoRFcnJvcue1hOS7tlxyXG4gICAgICAgICAgICAgKiBAcGFyYW0gbm9kZVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgc2V0RXJyb3JOb2RlKG5vZGU6IGNjLk5vZGUpOiB0aGlzO1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIOa3u+WKoOimgemhr+ekukVycm9y6KiK5oGv55qETGFiZWxcclxuICAgICAgICAgICAgICogQHBhcmFtIGxhYmVsXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBzZXRFcnJvckxhYmVsKGxhYmVsOiBjYy5MYWJlbCk6IHRoaXM7XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICog5re75YqgZXJyb3JCdXR0b27ntoHlrppcclxuICAgICAgICAgICAgICogQHBhcmFtIG5vZGVcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHNldEVycm9yQnV0dG9uKG5vZGU6IGNjLk5vZGUpOiB0aGlzO1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIOa3u+WKoOimgemhr+ekuueahOaZgumWkyznm67liY3lj6rlsI0oRXJyb3JUeXBlLmJldCnnlJ/mlYhcclxuICAgICAgICAgICAgICogQHBhcmFtIHRpbWVcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHNldEVycm9yRGVsYXlUaW1lKHRpbWU6IG51bWJlcik6IHRoaXM7XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICog5re75Yqg6K2m5ZGK6KaB6aGv56S655qE5pmC6ZaTXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBzZXRXYXJuaW5nRGVsYXlUaW1lKHRpbWU6IG51bWJlcik6IHRoaXM7XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICog5re75Yqg6KaB6aGv56S66K2m5ZGK55qETm9kZVxyXG4gICAgICAgICAgICAgKiBAcGFyYW0gbm9kZVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgc2V0V2FybmluZ05vZGUobm9kZTogY2MuTm9kZSk6IHRoaXM7XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICog5re75Yqg6KaB6aGv56S66K2m5ZGK55qETm9kZVxyXG4gICAgICAgICAgICAgKiBAcGFyYW0gbGFiZWxcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHNldFdhcm5pbmdMYWJlbChsYWJlbDogY2MuTGFiZWwpOiB0aGlzO1xyXG5cclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiDmt7vliqDopoHpoa/npLrpjK/oqqToppbnqpfkuK3mjInpiJXnmoRsYWJlbFxyXG4gICAgICAgICAgICAgKiBAcGFyYW0ge2NjLkxhYmVsfSBsYWJlbFxyXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHt0aGlzfVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgc2V0RXJyb3JCdXR0b25MYWJlbChsYWJlbDogY2MuTGFiZWwpOiB0aGlzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0VudW0vRXJyb3JUeXBlLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vRXJyb3JIYW5kbGVyLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vSUVycm9ySGFuZGxlci50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0lFcnJvck1hbmFnZXIudHNcIiAvPlxyXG5uYW1lc3BhY2UgZmNjIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBBdXRob3IgWElBTy1MSS1QSU5cclxuICAgICAqIEBEZXNjcmlwdGlvbiDpjK/oqqTnrqHnkIblmaggOiDmoYbmnrbpjK/oqqTnrqHnkIZcclxuICAgICAqIEBEYXRlIDIwMjEtMDQtMTQg5LiL5Y2IIDIwOjI0XHJcbiAgICAgKiBAVmVyc2lvbiAxLjFcclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGNsYXNzIEVycm9yTWFuYWdlciBpbXBsZW1lbnRzIElGLklFcnJvck1hbmFnZXIge1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogSUYuSUVycm9yTWFuYWdlcjtcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBfZXJyb3JTdGF0ZTogYm9vbGVhbjtcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBfd2FybmluZ1N0YXRlOiBib29sZWFuO1xyXG4gICAgICAgIHByaXZhdGUgY29uZmlnTWFuYWdlcjogSUYuSUNvbmZpZ01hbmFnZXI7XHJcbiAgICAgICAgcHJpdmF0ZSBoYW5kbGVyOiBJRi5JRXJyb3JIYW5kbGVyO1xyXG4gICAgICAgIHByaXZhdGUgX2Vycm9yRGVsYXlUaW1lOiBudW1iZXI7XHJcbiAgICAgICAgcHJpdmF0ZSBfZXJyb3JMYWJlbDogY2MuTGFiZWw7XHJcbiAgICAgICAgcHJpdmF0ZSBfZXJyb3JOb2RlOiBjYy5Ob2RlO1xyXG4gICAgICAgIHByaXZhdGUgX3dhcm5pbmdMYWJlbDogY2MuTGFiZWw7XHJcbiAgICAgICAgcHJpdmF0ZSBfd2FybmluZ05vZGU6IGNjLk5vZGU7XHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBfaXNTaG93QmFja0hvbWVCdXR0b246IGJvb2xlYW47XHJcbiAgICAgICAgcHJpdmF0ZSBfZXJyb3JCdXR0b246IGNjLk5vZGU7XHJcbiAgICAgICAgcHJpdmF0ZSBfZXJyb3JCdXR0b25MYWJlbDogY2MuTGFiZWxcclxuICAgICAgICBwcml2YXRlIF93YXJuaW5nRGVsYXlUaW1lOiBudW1iZXI7XHJcblxyXG4gICAgICAgIHByaXZhdGUgY29uc3RydWN0b3IoY29uZmlnTWFuYWdlcjogSUYuSUNvbmZpZ01hbmFnZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVyID0gbmV3IEVycm9ySGFuZGxlcihjb25maWdNYW5hZ2VyLCB0aGlzKTtcclxuICAgICAgICAgICAgdGhpcy5jb25maWdNYW5hZ2VyID0gY29uZmlnTWFuYWdlcjtcclxuICAgICAgICAgICAgdGhpcy5fZXJyb3JOb2RlID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5fZXJyb3JMYWJlbCA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMuX2Vycm9yRGVsYXlUaW1lID0gMjAwMDsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v6Yyv6Kqk6KiK5oGv6aGv56S65pmC6ZaTIDogMuenklxyXG4gICAgICAgICAgICB0aGlzLl93YXJuaW5nRGVsYXlUaW1lID0gMTAwMDsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+itpuWRiuioiuaBr+mhr+ekuuaZgumWkyA6IDHnp5JcclxuICAgICAgICAgICAgRXJyb3JNYW5hZ2VyLl9lcnJvclN0YXRlID0gZmFsc2U7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/nlbbliY3mmK/lkKbmraPlnKjpoa/npLogRXJyb3JcclxuICAgICAgICAgICAgRXJyb3JNYW5hZ2VyLl93YXJuaW5nU3RhdGUgPSBmYWxzZTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/nlbbliY3mmK/lkKbmraPlnKjpoa/npLrorablkYpcclxuICAgICAgICAgICAgdGhpcy5faXNTaG93QmFja0hvbWVCdXR0b24gPSAhIXRoaXMuY29uZmlnTWFuYWdlci5iYWNrSG9tZVVSTDsgICAgICAgICAgLy/mqqLmn6XnlbbliY3mmK/lkKblm57pppbpoIFVUkws5bCH5LmL6LOm5LqIdHJ1ZTpmYWxzZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogIOaHtua8ouWKoOi8iVxyXG4gICAgICAgICAqICDliJ3lp4vljJYs5Y+q6K6T5LiA5YCL5bCI5qGI55Si55Sf5LiA5qyh6KmyY2xhc3NcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgc3RhdGljIHNldEluc3RhbmNlKGNvbmZpZ01hbmFnZXI6IElGLklDb25maWdNYW5hZ2VyKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5faW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlID0gbmV3IEVycm9yTWFuYWdlcihjb25maWdNYW5hZ2VyKTtcclxuICAgICAgICAgICAgICAgIGVycm9yTWdyID0gdGhpcy5faW5zdGFuY2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqICDnjbLlj5blt7LntpPliJ3lp4vljJbnmoTpnZzmhYvlr6bkvotjbGFzc1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGluc3RhbmNlKCk6IElGLklFcnJvck1hbmFnZXIge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuX2luc3RhbmNlKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEVycm9yTWFuYWdlcumhnumMr+iqpCA6ICDoqbLpoZ7lsJrmnKrlr6bkvovljJZgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOiyrOS7u+mPiOaooeW8j1xyXG4gICAgICAgICAqIOmhr+ekuumMr+iqpOioiuaBryzog73lgZrlpJrlgIvnianku7bmqqLmuKxcclxuICAgICAgICAgKiBAcGFyYW17c3RyaW5nIHwgRXJyb3JUeXBlIH1tZXNzYWdlXHJcbiAgICAgICAgICogQHBhcmFtIG9ialxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGV4ZWN1dGVFcnJvcihtZXNzYWdlOiBzdHJpbmcgfCB0eXBlLkVycm9yVHlwZSwgb2JqOiBhbnkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlci5jaGVja0Vycm9yVHlwZShtZXNzYWdlLCBvYmopO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog6aGv56S66Yyv6Kqk6KaW56qXXHJcbiAgICAgICAgICogQHBhcmFtIHtib29sZWFufSBwZXJtYW5lbnRTdGF0ZSAtIOaYr+WQpuW4uOmnkFxyXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlICAtIOmMr+iqpOioiuaBr1xyXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBidXR0b25UZXh0IC0gYnV0dG9u5paH5a2XXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgc2VydmVyRXJyb3IocGVybWFuZW50U3RhdGU6IGJvb2xlYW4sIG1lc3NhZ2U6IHN0cmluZywgYnV0dG9uVGV4dD86IHN0cmluZykge1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZXIuY2hlY2tTZXJ2ZXJFcnJvcihwZXJtYW5lbnRTdGF0ZSwgbWVzc2FnZSwgYnV0dG9uVGV4dCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDpoa/npLrorablkYos5bCH5pyD6Kq/55So5bey5L+d5a2Y55qE6K2m5ZGKTm9kZVxyXG4gICAgICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gcGVybWFuZW50U3RhdGUgLSDmmK/lkKbluLjpp5BcclxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSAgLSDpjK/oqqToqIrmga9cclxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gYnV0dG9uVGV4dCAtIGJ1dHRvbuaWh+Wtl1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHdhcm5pbmcocGVybWFuZW50U3RhdGU6IGJvb2xlYW4sIG1lc3NhZ2U6IHN0cmluZywgYnV0dG9uVGV4dD86IHN0cmluZykge1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZXIuY2hlY2tXYXJuaW5nKHBlcm1hbmVudFN0YXRlLCBtZXNzYWdlLCBidXR0b25UZXh0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOa3u+WKoOimgee2geWumueahEVycm9y57WE5Lu2XHJcbiAgICAgICAgICogQHBhcmFtIG5vZGVcclxuICAgICAgICAgKi9cclxuICAgICAgICBzZXRFcnJvck5vZGUobm9kZTogY2MuTm9kZSk6IHRoaXMge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fZXJyb3JOb2RlID0gbm9kZTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5re75Yqg6KaB6aGv56S6RXJyb3LoqIrmga/nmoRMYWJlbFxyXG4gICAgICAgICAqIEBwYXJhbSBsYWJlbFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHNldEVycm9yTGFiZWwobGFiZWw6IGNjLkxhYmVsKTogdGhpcyB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9lcnJvckxhYmVsID0gbGFiZWw7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOa3u+WKoGVycm9yQnV0dG9u57aB5a6aXHJcbiAgICAgICAgICogQHBhcmFtIG5vZGVcclxuICAgICAgICAgKi9cclxuICAgICAgICBzZXRFcnJvckJ1dHRvbihub2RlOiBjYy5Ob2RlKTogdGhpcyB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9lcnJvckJ1dHRvbiA9IG5vZGU7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOa3u+WKoOimgemhr+ekuueahOaZgumWkyznm67liY3lj6rlsI0oRXJyb3JUeXBlLmJldCnnlJ/mlYhcclxuICAgICAgICAgKiBAcGFyYW0gdGltZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHNldEVycm9yRGVsYXlUaW1lKHRpbWU6IG51bWJlcik6IHRoaXMge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fZXJyb3JEZWxheVRpbWUgPSB0aW1lO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDmt7vliqDorablkYropoHpoa/npLrnmoTmmYLplpNcclxuICAgICAgICAgKi9cclxuICAgICAgICBzZXRXYXJuaW5nRGVsYXlUaW1lKHRpbWU6IG51bWJlcik6IHRoaXMge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fd2FybmluZ0RlbGF5VGltZSA9IHRpbWU7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOa3u+WKoOimgemhr+ekuuitpuWRiueahE5vZGVcclxuICAgICAgICAgKiBAcGFyYW0gbm9kZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHNldFdhcm5pbmdOb2RlKG5vZGU6IGNjLk5vZGUpOiB0aGlzIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX3dhcm5pbmdOb2RlID0gbm9kZTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5re75Yqg6KaB6aGv56S66K2m5ZGK55qETm9kZVxyXG4gICAgICAgICAqIEBwYXJhbSBsYWJlbFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHNldFdhcm5pbmdMYWJlbChsYWJlbDogY2MuTGFiZWwpOiB0aGlzIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX3dhcm5pbmdMYWJlbCA9IGxhYmVsO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDmt7vliqDopoHpoa/npLrpjK/oqqToppbnqpfkuK3mjInpiJXnmoRsYWJlbFxyXG4gICAgICAgICAqIEBwYXJhbSB7Y2MuTGFiZWx9IGxhYmVsXHJcbiAgICAgICAgICogQHJldHVybiB7dGhpc31cclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgc2V0RXJyb3JCdXR0b25MYWJlbChsYWJlbDogY2MuTGFiZWwpOiB0aGlzIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX2Vycm9yQnV0dG9uTGFiZWwgPSBsYWJlbDtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3RhdGljIGdldCBlcnJvclN0YXRlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZXJyb3JTdGF0ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOeVtuWJjSBlcnJvciBkaWFsb2cg54uA5oWLXHJcbiAgICAgICAgICogQHBhcmFtIHtib29sZWFufSB2YWx1ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHN0YXRpYyBzZXQgZXJyb3JTdGF0ZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgICAgICB0aGlzLl9lcnJvclN0YXRlID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgc3RhdGljIGdldCB3YXJuaW5nU3RhdGUoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl93YXJuaW5nU3RhdGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDnlbbliY0gd2FybmluZyBkaWFsb2cg54uA5oWLXHJcbiAgICAgICAgICogQHBhcmFtIHtib29sZWFufSB2YWx1ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHN0YXRpYyBzZXQgd2FybmluZ1N0YXRlKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3dhcm5pbmdTdGF0ZSA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZ2V0IGVycm9yTm9kZSgpOiBjYy5Ob2RlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2Vycm9yTm9kZTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBnZXQgd2FybmluZ05vZGUoKTogY2MuTm9kZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl93YXJuaW5nTm9kZTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBnZXQgZXJyb3JCdXR0b24oKTogY2MuTm9kZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9lcnJvckJ1dHRvbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGdldCB3YXJuaW5nTGFiZWwoKTogY2MuTGFiZWwge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fd2FybmluZ0xhYmVsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZ2V0IGVycm9yTGFiZWwoKTogY2MuTGFiZWwge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZXJyb3JMYWJlbDtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBnZXQgZXJyb3JEZWxheVRpbWUoKTogbnVtYmVyIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2Vycm9yRGVsYXlUaW1lO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIGdldCB3YXJuaW5nRGVsYXlUaW1lKCk6IG51bWJlciB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl93YXJuaW5nRGVsYXlUaW1lO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIGdldCBpc1Nob3dCYWNrSG9tZUJ1dHRvbigpOiBib29sZWFuIHtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9pc1Nob3dCYWNrSG9tZUJ1dHRvbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGdldCBlcnJvckJ1dHRvbkxhYmVsKCk6IGNjLkxhYmVsIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2Vycm9yQnV0dG9uTGFiZWw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIGZjYyB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAQXV0aG9yIFhJQU8tTEktUElOXHJcbiAgICAgKiBARGVzY3JpcHRpb24g5YuV55Wr6JmV55CGLOiZleeQhuW+jOeahOWLleeVq+WbnuWCs+e1puS6iG1hbmFnZXLkv53lrZhcclxuICAgICAqIEBEYXRlIDIwMjEtMDQtMTQg5LiL5Y2IIDIwOjI0XHJcbiAgICAgKiBAVmVyc2lvbiAxLjFcclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGNsYXNzIEFuaW1hdGlvbkhhbmRsZXIgaW1wbGVtZW50cyBJRi5JQW5pbWF0aW9uSGFuZGxlciB7XHJcblxyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgYW5pbWF0aW9uTWFuYWdlcjogSUYuSUFuaW1hdGlvbk1hbmFnZXI7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGFuaW1hdGlvbk1hbmFnZXI6IElGLklBbmltYXRpb25NYW5hZ2VyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uTWFuYWdlciA9IGFuaW1hdGlvbk1hbmFnZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDmm7TmlrDli5XnlavnrqHnkIblmajlhafnmoRzcGluZU5hbWXmlbjmk5pcclxuICAgICAgICAgKiBAcGFyYW0gcmVzTmFtZVxyXG4gICAgICAgICAqIEBwYXJhbSBrZXlOYW1lXHJcbiAgICAgICAgICogQHBhcmFtIHNwaW5lTmFtZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHVwZGF0ZVNwaW5lQW5pbWF0aW9uTmFtZShyZXNOYW1lOiBzdHJpbmcsIGtleU5hbWU6IHN0cmluZywgc3BpbmVOYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgY29uc3Qgc3BpbmVNYXA6IE1hcDxzdHJpbmcsIHN0cmluZz4gPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nPigpO1xyXG4gICAgICAgICAgICBzcGluZU1hcC5zZXQoa2V5TmFtZSwgc3BpbmVOYW1lKTtcclxuICAgICAgICAgICAgdGhpcy5hbmltYXRpb25NYW5hZ2VyLnNwaW5lTmFtZS5zZXQocmVzTmFtZSwgc3BpbmVNYXApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9FcnJvci9FcnJvck1hbmFnZXIudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vRXJyb3IvRW51bS9FcnJvclR5cGUudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9BbmltYXRpb25IYW5kbGVyLnRzXCIgLz5cclxubmFtZXNwYWNlIGZjYyB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAQXV0aG9yIFhJQU8tTEktUElOXHJcbiAgICAgKiBARGVzY3JpcHRpb24gVE9ETyA6IOWLleeVq+euoeeQhuWZqFxyXG4gICAgICogQERhdGUgMjAyMS0wNC0xNCDkuIvljYggMjA6MjRcclxuICAgICAqIEBWZXJzaW9uIDEuMVxyXG4gICAgICovXHJcbiAgICBleHBvcnQgY2xhc3MgQW5pbWF0aW9uTWFuYWdlciBpbXBsZW1lbnRzIElGLklBbmltYXRpb25NYW5hZ2VyIHtcclxuICAgICAgICBwcml2YXRlIF9zcGluZU5hbWU6IE1hcDxzdHJpbmcsIE1hcDxzdHJpbmcsIHN0cmluZz4+XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBBbmltYXRpb25NYW5hZ2VyO1xyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgX2hhbmRsZXI6IElGLklBbmltYXRpb25IYW5kbGVyXHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBjb25maWdNYW5hZ2VyOiBJRi5JQ29uZmlnTWFuYWdlcjtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBjb25zdHJ1Y3Rvcihjb25maWdNYW5hZ2VyOiBJRi5JQ29uZmlnTWFuYWdlcikge1xyXG4gICAgICAgICAgICB0aGlzLmNvbmZpZ01hbmFnZXIgPSBjb25maWdNYW5hZ2VyO1xyXG4gICAgICAgICAgICB0aGlzLl9zcGluZU5hbWUgPSBuZXcgTWFwPHN0cmluZywgTWFwPHN0cmluZywgc3RyaW5nPj4oKTtcclxuICAgICAgICAgICAgdGhpcy5faGFuZGxlciA9IG5ldyBBbmltYXRpb25IYW5kbGVyKHRoaXMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogIOaHtua8ouWKoOi8iVxyXG4gICAgICAgICAqICDliJ3lp4vljJYs5Y+q6K6T5LiA5YCL5bCI5qGI5Y+q5pyJ5LiA5qyh55Si55Sf5q2kY2xhc3NcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgc3RhdGljIHNldEluc3RhbmNlKGNvbmZpZ01hbmFnZXI6IElGLklDb25maWdNYW5hZ2VyKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5faW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlID0gbmV3IEFuaW1hdGlvbk1hbmFnZXIoY29uZmlnTWFuYWdlcik7XHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb25NZ3IgPSB0aGlzLl9pbnN0YW5jZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogIOeNsuWPluW3sue2k+WIneWni+WMlueahOmdnOaFi+WvpuS+i2NsYXNzXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBnZXQgaW5zdGFuY2UoKTogSUYuSUFuaW1hdGlvbk1hbmFnZXIge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuX2luc3RhbmNlKSB7XHJcbiAgICAgICAgICAgICAgICBFcnJvck1hbmFnZXIuaW5zdGFuY2UuZXhlY3V0ZUVycm9yKHR5cGUuRXJyb3JUeXBlLkFVRElPX0ZXLCBcIuipsumhnuWwmuacquWvpuS+i+WMllwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBnZXRTcGluZU5hbWUocmVzTmFtZTogc3RyaW5nLCBrZXk6IHN0cmluZyB8IG51bWJlcik6IHN0cmluZyB7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5fc3BpbmVOYW1lLmhhcyhyZXNOYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgRXJyb3JNYW5hZ2VyLmluc3RhbmNlLmV4ZWN1dGVFcnJvcih0eXBlLkVycm9yVHlwZS5BTklNQVRJT05fRlcsIFwicmVzb3VyY2VzIOizh+a6kOWQjemMr+iqpFwiKVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX3NwaW5lTmFtZS5nZXQocmVzTmFtZSkuaGFzKGAke2tleX1gKSkge1xyXG4gICAgICAgICAgICAgICAgRXJyb3JNYW5hZ2VyLmluc3RhbmNlLmV4ZWN1dGVFcnJvcih0eXBlLkVycm9yVHlwZS5BTklNQVRJT05fRlcsIFwi5bCa5pyq542y5Y+W6LOH5rqQLOiri+afpeeciyBBbmltYXRpb25NYW5hZ2VyLmluc3RhbmNlLnNwaW5lTmFtZVwiKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNwaW5lTmFtZS5nZXQocmVzTmFtZSkuZ2V0KGAke2tleX1gKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldCBzcGluZU5hbWUodmFsdWU6IE1hcDxzdHJpbmcsIE1hcDxzdHJpbmcsIHN0cmluZz4+KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NwaW5lTmFtZSA9IHZhbHVlXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBnZXQgc3BpbmVOYW1lKCk6IE1hcDxzdHJpbmcsIE1hcDxzdHJpbmcsIHN0cmluZz4+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3NwaW5lTmFtZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZ2V0IGhhbmRsZXIoKTogSUYuSUFuaW1hdGlvbkhhbmRsZXIge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faGFuZGxlclxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBmY2Mge1xyXG5cclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgdHlwZSB7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBBdXRob3IgWElBTy1MSS1QSU5cclxuICAgICAgICAgKiBARGVzY3JpcHRpb24g6Z+z5qiC5pKl5pS+55aK5Yqg5pmCLOWQhOeorueLgOaFi+ioreWumlxyXG4gICAgICAgICAqIEBEYXRlIDIwMjEtMDUtMTMg5LiK5Y2IIDEwOjI0XHJcbiAgICAgICAgICogQFZlcnNpb24gMS4wXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZXhwb3J0IGVudW0gQXVkaW9TdGF0ZVR5cGUge1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAq5qqi5ris5Yiw6Kmy6Z+z5qiC5q2j5Zyo5pKl5pS+5pmCLOa4hemZpOato+WcqOaSpeaUvueahOmfs+aogizlvozph43mlrDmkq3mlL7oqbLpn7PmqIJcclxuICAgICAgICAgICAgICogQHR5cGUge0F1ZGlvU3RhdGVUeXBlLkNMRUFSX1RPX1JFUExBWX1cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIENMRUFSX1RPX1JFUExBWSA9IFwiQ0xFQVJfVE9fUkVQTEFZXCIsXHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICog5qqi5ris5Yiw6Kmy6Z+z5qiC5q2j5Zyo5pKl5pS+5pmCLOS4jeWBmuS7u+S9leS6i+aDhVxyXG4gICAgICAgICAgICAgKiBAdHlwZSB7QXVkaW9TdGF0ZVR5cGUuTk9UX1BMQVlJTkd9XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBOT1RfUExBWUlORyA9IFwiTk9UX1BMQVlJTkdcIixcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiDmqqLmuKzliLDoqbLpn7PmqILmraPlnKjmkqXmlL7mmYIs5bCH5Y+v55aK5Yqg5pKl5pS+XHJcbiAgICAgICAgICAgICAqIEB0eXBlIHtBdWRpb1N0YXRlVHlwZS5TVVBFUklNUE9TRX1cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIFNVUEVSSU1QT1NFID0gXCJTVVBFUklNUE9TRVwiLFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vRW51bS9BdWRpb1N0YXRlVHlwZS50c1wiIC8+XHJcbm5hbWVzcGFjZSBmY2Mge1xyXG5cclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgSUYge1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAQXV0aG9yIFhJQU8tTEktUElOXHJcbiAgICAgICAgICogQERlc2NyaXB0aW9uICjku4vpnaIp6Z+z5qiC5bel5bug6aGeLOa0vueZvOmfs+aoguS6i+S7tlxyXG4gICAgICAgICAqIEBEYXRlIDIwMjEtMDUtMTMg5LiK5Y2IIDEwOjI0XHJcbiAgICAgICAgICogQFZlcnNpb24gMS4xXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZXhwb3J0IGludGVyZmFjZSBJQXVkaW9GYWN0b3J5IHtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiDkv53lrZjoqbLog4zmma/pn7PmqILmkqXmlL7mqKHlvI/oqK3lrppcclxuICAgICAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgOumfs+aoguaqlOWQjeeosVxyXG4gICAgICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gdm9sdW1lIDog6Z+z6YePXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gbG9vcCA6IOaYr+WQpuW+queSsFxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgc2V0dGluZ011c2ljKG5hbWU6IHN0cmluZywgdm9sdW1lPzogbnVtYmVyLCBsb29wPzogYm9vbGVhbik6IHZvaWQ7XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICog5L+d5a2Y6Kmy5pWI5p6c6Z+z5pWI5pKl5pS+5qih5byP6Kit5a6aXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIDrpn7PmqILmqpTlkI3nqLFcclxuICAgICAgICAgICAgICogQHBhcmFtIHtmY2MudHlwZS5BdWRpb1N0YXRlVHlwZX0gY2FuU3VwZXJpbXBvc2UgOiDmmK/lkKbnlorliqDmkqXmlL5cclxuICAgICAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IHZvbHVtZSA6IOmfs+mHj1xyXG4gICAgICAgICAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGxvb3AgOiDmmK/lkKblvqrnkrBcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHNldHRpbmdFZmZlY3QobmFtZTogc3RyaW5nLCBjYW5TdXBlcmltcG9zZT86IHR5cGUuQXVkaW9TdGF0ZVR5cGUsIHZvbHVtZT86IG51bWJlciwgbG9vcD86IGJvb2xlYW4pOiB2b2lkO1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIOaSpeaUvuiDjOaZr+mfs+aoglxyXG4gICAgICAgICAgICAgKiDlpoLmnpzmi7/lj5bkuI3liLDkuqvlhYPmkqXmlL7os4fmlpks5bCH5ou/5Y+W6aCQ6Kit6LOH5paZXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBtdXNpY1BsYXkobmFtZTogc3RyaW5nKTogdm9pZDtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiDmkqXmlL7mlYjmnpzpn7PmlYhcclxuICAgICAgICAgICAgICog5aaC5p6c5ou/5Y+W5LiN5Yiw5Lqr5YWD5pKl5pS+6LOH5paZLOWwh+aLv+WPlumgkOioreizh+aWmVxyXG4gICAgICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgZWZmZWN0UGxheShuYW1lOiBzdHJpbmcpOiB2b2lkO1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIOWBnOatouiDjOaZr+mfs+aoglxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgbXVzaWNTdG9wKCk6IHZvaWQ7XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICog5pqr5YGc6IOM5pmv6Z+z5qiCXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBtdXNpY1BhdXNlKCk6IHZvaWQ7XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICog5YGc5q2i5pWI5p6c6Z+z5qChXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBlZmZlY3RTdG9wKG5hbWU6IHN0cmluZyk7XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICog5YGc5q2i5omA5pyJ5pWI5p6c6Z+z5pWIXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBlZmZlY3RTdG9wQWxsKCk6IHZvaWQ7XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICog542y5Y+W6Kmy6Z+z5qiC5pKl5pS+5qih5byPLOWmguaenOi/lOWbnk5VbGzlsIfnhafljp/poJDoqK1cclxuICAgICAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcclxuICAgICAgICAgICAgICogQHJldHVybnMge01hcDxzdHJpbmcsIHN0cmluZyB8IGZjYy50eXBlLkF1ZGlvU3RhdGVUeXBlIHxib29sZWFuIHwgbnVtYmVyPn1cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIGdldE11c2ljU3RhdGUobmFtZTogc3RyaW5nKTogTWFwPHN0cmluZywgc3RyaW5nIHwgdHlwZS5BdWRpb1N0YXRlVHlwZSB8IGJvb2xlYW4gfCBudW1iZXI+O1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIOeNsuWPluipsumfs+aViOaSpeaUvuaooeW8jyzlpoLmnpzov5Tlm55OVWxs5bCH54Wn5Y6f6aCQ6KitXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXHJcbiAgICAgICAgICAgICAqIEByZXR1cm5zIHtNYXA8c3RyaW5nLCBzdHJpbmcgfCBmY2MudHlwZS5BdWRpb1N0YXRlVHlwZSB8IGJvb2xlYW4gfCBudW1iZXI+fVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgZ2V0RWZmZWN0U3RhdGUobmFtZTogc3RyaW5nKTogTWFwPHN0cmluZywgc3RyaW5nIHwgdHlwZS5BdWRpb1N0YXRlVHlwZSB8IGJvb2xlYW4gfCBudW1iZXI+O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9FbnVtL0F1ZGlvU3RhdGVUeXBlLnRzXCIgLz5cclxubmFtZXNwYWNlIGZjYyB7XHJcblxyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBJRiB7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBBdXRob3IgWElBTy1MSS1QSU5cclxuICAgICAgICAgKiBARGVzY3JpcHRpb24gKOS7i+mdoinpn7PmqILnrqHnkIbpoZ5cclxuICAgICAgICAgKiBARGF0ZSAyMDIxLTA1LTEzIOS4iuWNiCAxMDoyNFxyXG4gICAgICAgICAqIEBWZXJzaW9uIDEuMFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGV4cG9ydCBpbnRlcmZhY2UgSUF1ZGlvTWFuYWdlciB7XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICog55W25YmN5piv5ZCm6Z2c6Z+zXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBtdXNpY09uTXV0ZTogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiDnlbbliY3mmK/lkKbpnZzpn7NcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIGVmZmVjdE9uTXV0ZTogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiDpoY3lpJblsI3oqbLpn7PmqILlgZroqK3lrpos5Y+v5Lul5LiN5YGa6Kit5a6aLOWwh+acg+S+neeFp+m7mOiqjeioreWumuiHquWLleioreWumlxyXG4gICAgICAgICAgICAgKiBgYGBcclxuICAgICAgICAgICAgICogICAgICDpoJDoqK3lj4Pmlbg6XHJcbiAgICAgICAgICAgICAqICAgICAgICAgIHZvbHVtZSA6IOm7mOiqjeeCuiBDb25maWcg5YWn55qE6Z+z6YeP5Y+D5pW4XHJcbiAgICAgICAgICAgICAqICAgICAgICAgIGxvb3AgOiDpu5joqo0gZmFsc2VcclxuICAgICAgICAgICAgICogYGBgXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0g6Z+z5qiC5ZCN56ixXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSB2b2x1bWUgLSDpn7Pph48gMH4xXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gbG9vcCAtIOaYr+WQpumHjeikh+aSpeaUvlxyXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHt0aGlzfVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgc2V0dGluZ011c2ljKG5hbWU6IHN0cmluZywgdm9sdW1lPzogbnVtYmVyLCBsb29wPzogYm9vbGVhbik6IHRoaXM7XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICog6aGN5aSW5bCN6Kmy6Z+z5pWI5YGa6Kit5a6aLOS9oOWPr+S7peS4jeWBmuioreWumizlsIfmnIPkvp3nhafpu5joqo3oqK3lrproh6rli5XoqK3lrppcclxuICAgICAgICAgICAgICogYGBgXHJcbiAgICAgICAgICAgICAqICAgICAg6aCQ6Kit5Y+D5pW4OlxyXG4gICAgICAgICAgICAgKiAgICAgICAgICBjYW5TdXBlcmltcG9zZSA6IGZjYy50eXBlLkF1ZGlvU3RhdGVUeXBlLkNMRUFSX1RPX1JFUExBWVxyXG4gICAgICAgICAgICAgKiAgICAgICAgICB2b2x1bWUgOiDpu5joqo3ngrogQ29uZmlnIOWFp+eahOmfs+mHj+WPg+aVuFxyXG4gICAgICAgICAgICAgKiAgICAgICAgICBsb29wIDrpu5joqo3ngrogZmFsc2VcclxuICAgICAgICAgICAgICogYGBgXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIDog6Z+z5pWI5qqU5ZCNXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7QXVkaW9TdGF0ZVR5cGV9IGNhblN1cGVyaW1wb3NlIDog6IO95ZCm55aK5YqgXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSB2b2x1bWUgOiDpn7Pph48gMH4xXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gbG9vcCA6IOaYr+WQpumHjeikh+aSpeaUvlxyXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHt0aGlzfVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgc2V0dGluZ0VmZmVjdChuYW1lOiBzdHJpbmcsIGNhblN1cGVyaW1wb3NlPzogdHlwZS5BdWRpb1N0YXRlVHlwZSwgdm9sdW1lPzogbnVtYmVyLCBsb29wPzogYm9vbGVhbik6IHRoaXM7XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICog5pKl5pS+6Z+z5qiCLOWwh+acg+S+neeFp+eVtuWIneioreWumueahOWPg+aVuOmAsuihjOaSreaUvlxyXG4gICAgICAgICAgICAgKiDoi6XnhKHnmbznj77lj6/nlKjlj4PmlbjoqK3lrpos5L6d54Wn6buY6KqN5Y+D5pW45pKl5pS+XHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0g6Z+z5qiC5qqU5ZCNXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBtdXNpY1BsYXkobmFtZTogc3RyaW5nKTogdm9pZDtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiDmkqXmlL7pn7PmlYgs5bCH5pyD5L6d54Wn55W25Yid6Kit5a6a55qE5Y+D5pW46YCy6KGM5pKt5pS+XHJcbiAgICAgICAgICAgICAqIOiLpeeEoeeZvOePvuWPr+eUqOWPg+aVuOioreWumizkvp3nhafpu5joqo3lj4PmlbjmkqXmlL5cclxuICAgICAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSDpn7PmlYjmqpTlkI1cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIGVmZmVjdFBsYXkobmFtZTogc3RyaW5nKTogdm9pZDtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiDlgZzmraLpn7PmqIJcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIG11c2ljU3RvcCgpOiB2b2lkO1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIOaaq+WBnOmfs+aoglxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgbXVzaWNQYXVzZSgpOiB2b2lkO1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIOWBnOatoumfs+aViFxyXG4gICAgICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIOmfs+aViOaqlOWQjVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgZWZmZWN0U3RvcChuYW1lOiBzdHJpbmcpOiB2b2lkO1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIOWBnOatouaJgOaciemfs+aViFxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgZWZmZWN0U3RvcEFsbCgpOiB2b2lkO1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIOeNsuWPluaSpeaUvueahOeLgOaFi1xyXG4gICAgICAgICAgICAgKiBgYGBcclxuICAgICAgICAgICAgICogICAgICByZXR1cm4gZGF0YTpcclxuICAgICAgICAgICAgICogICAgICAgICAgdm9sdW1lIDogbnVtYmVyXHJcbiAgICAgICAgICAgICAqICAgICAgICAgIGxvb3AgOiBib29sZWFuXHJcbiAgICAgICAgICAgICAqIGBgYFxyXG4gICAgICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIOmfs+aViOaqlOWQjVxyXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHtNYXA8c3RyaW5nLCBzdHJpbmcgfCBib29sZWFuIHwgbnVtYmVyPn0gLSDmkqXmlL7oqK3lrprlj4PmlbhcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIGdldE11c2ljU3RhdGUobmFtZTogc3RyaW5nKTogTWFwPHN0cmluZywgc3RyaW5nIHwgYm9vbGVhbiB8IG51bWJlcj47XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICog542y5Y+W5pKl5pS+55qE54uA5oWLXHJcbiAgICAgICAgICAgICAqIGBgYFxyXG4gICAgICAgICAgICAgKiAgICAgIHJldHVybiBkYXRhOlxyXG4gICAgICAgICAgICAgKiAgICAgICAgICB2b2x1bWUgOiBudW1iZXJcclxuICAgICAgICAgICAgICogICAgICAgICAgY2FuU3VwZXJpbXBvc2UgOiBmY2MudHlwZS5BdWRpb1N0YXRlVHlwZVxyXG4gICAgICAgICAgICAgKiAgICAgICAgICBsb29wIDogYm9vbGVhblxyXG4gICAgICAgICAgICAgKiBgYGBcclxuICAgICAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSDpn7PmqILmqpTlkI1cclxuICAgICAgICAgICAgICogQHJldHVybiB7TWFwPHN0cmluZywgc3RyaW5nIHwgZmNjLnR5cGUuQXVkaW9TdGF0ZVR5cGUgfGJvb2xlYW4gfCBudW1iZXI+fSAtXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBnZXRFZmZlY3RTdGF0ZShuYW1lOiBzdHJpbmcpOiBNYXA8c3RyaW5nLCBzdHJpbmcgfCBib29sZWFuIHwgbnVtYmVyPjtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiDmm7TmlrDnlbbliY3mmK/lkKbpnZzpn7PmqKHlvI9cclxuICAgICAgICAgICAgICogQHJldHVybiB7Ym9vbGVhbn0g55W25YmN5piv5ZCm6Z2c6Z+zXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICB1cGRhdGVNdXNpY09uTXV0ZSgpOiBib29sZWFuO1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIOabtOaWsOeVtuWJjeaYr+WQpumdnOmfs+aooeW8j1xyXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHtib29sZWFufSDnlbbliY3mmK/lkKbpnZzpn7NcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHVwZGF0ZUVmZmVjdE9uTXV0ZSgpOiBib29sZWFuO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgZmNjIHtcclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgZ2xvYmFsIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAQXV0aG9yIFhJQU8tTEktUElOXHJcbiAgICAgICAgICogQERlc2NyaXB0aW9uIOWFseeUqDrmk43kvZzmlbjlrZd7bnVtYmVyfemhnuaWueazlVxyXG4gICAgICAgICAqIEBEYXRlIDIwMjEtMDQtMTQg5LiL5Y2IIDIwOjI0XHJcbiAgICAgICAgICogQFZlcnNpb24gMS4xXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZXhwb3J0IGNsYXNzIFV0aWwge1xyXG5cclxuICAgICAgICAgICAgcHJpdmF0ZSBzdGF0aWMgZm9ybWF0dGluZyA9IG5ldyBJbnRsLk51bWJlckZvcm1hdCgpO1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIOWbm+aNqOS6lOWFpeWIsOWwj+aVuOm7nuesrE7kvY1cclxuICAgICAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IGZsb2F0IC0g5rWu6bue5pW4XHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBudW1iZXIgLSDopoHlm5vmjajkupTlhaXliLDlk6rkuIDkvY1cclxuICAgICAgICAgICAgICogQHJldHVybiB7bnVtYmVyfVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgc3RhdGljIHJvdW5kT2ZmKGZsb2F0OiBudW1iZXIsIG51bWJlcjogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBNYXRoLnJvdW5kKE1hdGgucm91bmQoZmxvYXQgKiBNYXRoLnBvdygxMCwgKG51bWJlciB8fCAwKSArIDEpKSAvIDEwKSAvIE1hdGgucG93KDEwLCAobnVtYmVyIHx8IDApKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIOeEoeaineS7tuaNqOWOu+WIsOWwj+aVuOm7nuesrE7kvY1cclxuICAgICAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IGZsb2F0IC0g5rWu6bue5pW4XHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBudW1iZXIgLSDopoHnhKHmop3ku7bmjajljrvliLDlk6rkuIDkvY1cclxuICAgICAgICAgICAgICogQHJldHVybiB7bnVtYmVyfVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgc3RhdGljIHJvdW5kRG93bihmbG9hdDogbnVtYmVyLCBudW1iZXI6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLmZsb29yKGZsb2F0ICogTWF0aC5wb3coMTAsIChudW1iZXIgfHwgMCkgKyAxKSkgLyAxMCkgLyBNYXRoLnBvdygxMCwgKG51bWJlciB8fCAwKSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiDnhKHmop3ku7bpgLLkvY3liLDlsI/mlbjpu57nrKxO5L2NXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBmbG9hdCAtIOa1rum7nuaVuFxyXG4gICAgICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gbnVtYmVyIC0g6KaB54Sh5qKd5Lu26YCy5L2N5Yiw5ZOq5LiA5L2NXHJcbiAgICAgICAgICAgICAqIEByZXR1cm4ge251bWJlcn1cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHN0YXRpYyByb3VuZFVwKGZsb2F0OiBudW1iZXIsIG51bWJlcjogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBNYXRoLmNlaWwoTWF0aC5jZWlsKGZsb2F0ICogTWF0aC5wb3coMTAsIChudW1iZXIgfHwgMCkgKyAxKSkgLyAxMCkgLyBNYXRoLnBvdygxMCwgKG51bWJlciB8fCAwKSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiDmqqLmn6XoqbLmlbjlrZfngrrlsI/mlbjmnInlub7kvY1cclxuICAgICAgICAgICAgICogQGV4YW1wbGUgaW5wdXQoMS4wMykgLT4gb3V0cHV0KDIpXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfWZsb2F0IC0g5rWu6bue5pW4XHJcbiAgICAgICAgICAgICAqIEByZXR1cm4ge251bWJlcn1cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHN0YXRpYyBkZWNpbWFsc0NvdW50KGZsb2F0OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgICAgICAgICAgbGV0IGRlY2ltYWxzSW5kZXggPSBTdHJpbmcoZmxvYXQpLmluZGV4T2YoJy4nKSArIDE7XHJcbiAgICAgICAgICAgICAgICBsZXQgY291bnQgPSBTdHJpbmcoZmxvYXQpLmxlbmd0aCAtIGRlY2ltYWxzSW5kZXg7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGVjaW1hbHNJbmRleCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjb3VudDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIOWwh+ipsuaVuOWtl+i9ieWtl+S4suS4puWIpOaWt+aYr+WQpuiDveS9v+eUqChLKeWWruS9jeWPluS7o+mbtlxyXG4gICAgICAgICAgICAgKiBAZXhhbXBsZSBpbnB1dCgxMDAwKSAtPiBvdXRwdXQoMUspXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBudW1iZXIg6ZyA6KaB5qC85byP5YyW55qE5pW45a2XXHJcbiAgICAgICAgICAgICAqIEByZXR1cm4ge3N0cmluZ30gLSDmoLzlvI/ljJblvoznmoTlrZfkuLLmlbjlrZdcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHN0YXRpYyBudW1iZXJGb3JtYXQobnVtYmVyOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgICAgICAgICAgICAgaWYgKG51bWJlciA8IDEwMDApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVtYmVyICsgXCJcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChudW1iZXIgPiAxMDAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGAke251bWJlciAvIDEwMDB9S2A7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiDlsIfoqbLmlbjlrZfmoLzlvI/ljJYs5q+P5LiJ5YCLMOWJjeaWuee1puS6iCcsJ+aomeiomFxyXG4gICAgICAgICAgICAgKiBAZXhhbXBsZSBpbnB1dCgxMDAwMDAwKSAtPiBvdXRwdXQoMSwwMDAsMDAwKVxyXG4gICAgICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gbnVtYmVyIC0g6ZyA6KaB5qC85byP5YyW55qE5pW45a2XXHJcbiAgICAgICAgICAgICAqIEByZXR1cm4ge3N0cmluZ30gLSDmoLzlvI/ljJblvoznmoTlrZfkuLLmlbjlrZdcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHN0YXRpYyBmb3JtYXQobnVtYmVyOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZm9ybWF0dGluZy5mb3JtYXQobnVtYmVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBmY2Mge1xyXG5cclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgdHlwZSB7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBBdXRob3IgWElBTy1MSS1QSU5cclxuICAgICAgICAgKiBARGVzY3JpcHRpb24g5ZCE56iu6aGe5Z6L6LOH5rqQXHJcbiAgICAgICAgICogQERhdGUgMjAyMS0wNC0xNCDkuIvljYggMjA6MjRcclxuICAgICAgICAgKiBAVmVyc2lvbiAxLjFcclxuICAgICAgICAgKi9cclxuICAgICAgICBleHBvcnQgZW51bSBMb2FkVHlwZSB7XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICog5ZyW54mH6aGe5Z6LXHJcbiAgICAgICAgICAgICAqIEB0eXBlIHtmY2MudHlwZS5Mb2FkVHlwZS5pbWd9XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBpbWcsXHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICog6aqo6aq85Yqo55S76aGe5Z6LXHJcbiAgICAgICAgICAgICAqIEB0eXBlIHtmY2MudHlwZS5Mb2FkVHlwZS5zcGluZX1cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHNwaW5lLFxyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIOmgkOi8ieizh+a6kOmhnuWei1xyXG4gICAgICAgICAgICAgKiBAdHlwZSB7ZmNjLnR5cGUuTG9hZFR5cGUucHJlZmFifVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgcHJlZmFiLFxyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIOmfs+aogumhnuWei1xyXG4gICAgICAgICAgICAgKiBAdHlwZSB7ZmNjLnR5cGUuTG9hZFR5cGUubXVzaWN9XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBtdXNpYyxcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiDmloflrZfpoZ7lnoso5rOo5oSPOuebruWJjeWPquaOpeaUtiAuQ1NWIOaqlOahiClcclxuICAgICAgICAgICAgICogQHR5cGUge2ZjYy50eXBlLkxvYWRUeXBlLnRleHR9XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICB0ZXh0LFxyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIOWgtOaZr+mhnuWeiyjms6jmhI865YuV5oWL6LyJ5YWl6LOH5rqQ6ZyA5pS+5YWlcmVzb3VyY2Xos4fmlpnlpL7lhacgb3IgYnVuZGxl6LOH5paZ5aS+5YWnKVxyXG4gICAgICAgICAgICAgKiBAdHlwZSB7ZmNjLnR5cGUuTG9hZFR5cGUuc2NlbmV9XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBzY2VuZSxcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiDlpJbpg6hVUkzohbPmnKxcclxuICAgICAgICAgICAgICogQHR5cGUge2ZjYy50eXBlLkxvYWRUeXBlLnNjcmlwdH1cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHNjcmlwdCxcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiDlpJbpg6hVUkwgQ1NTXHJcbiAgICAgICAgICAgICAqIEB0eXBlIHtmY2MudHlwZS5Mb2FkVHlwZS5zY3JpcHR9XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBjc3MsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0VudW0vTG9hZEVudW0udHNcIiAvPlxyXG5uYW1lc3BhY2UgZmNjIHtcclxuXHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIElGIHtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQEF1dGhvciBYSUFPLUxJLVBJTlxyXG4gICAgICAgICAqIEBEZXNjcmlwdGlvbiAo5LuL6Z2iKeizh+a6kOeuoeeQhuiAhVxyXG4gICAgICAgICAqIEBEYXRlIDIwMjEtMDQtMTQg5LiL5Y2IIDIwOjI0XHJcbiAgICAgICAgICogQFZlcnNpb24gMS4xXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZXhwb3J0IGludGVyZmFjZSBJTG9hZFJlc01hbmFnZXIge1xyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICog5Yid5aeL5Yqg6LyJ54mp5Lu2XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBpbml0aWFsTG9hZFN0YXRlOiBNYXA8c3RyaW5nLCBudW1iZXI+O1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIOasoeWKoOi8iSzlj6/ku6XlnKjpgoTmnKrliqDovInlrozmiJDmmYIs5Lmf6IO96YCy5YWlTWFpbkdhbWUgU2NlbmVcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHNlY29uZGFyeUxvYWRTdGF0ZTogTWFwPHN0cmluZywgbnVtYmVyPjtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBpbWfnianku7bkv53lrZhcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIGltZ1JlczogTWFwPHN0cmluZywgTWFwPHN0cmluZywgY2MuU3ByaXRlRnJhbWU+PjtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBzcGluZSDnianku7bkv53lrZhcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHNwaW5lUmVzOiBNYXA8c3RyaW5nLCBzcC5Ta2VsZXRvbkRhdGE+O1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIOiugOWPluW+jOeahOaWh+S7tuaqlOahiCzkv53lrZjkvY3nva5cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHJlYWRGaWxlUmVzOiBNYXA8c3RyaW5nLCBNYXA8c3RyaW5nLCBzdHJpbmc+PjtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiDoroDlj5blvoznmoRQcmVmYWIs5L+d5a2Y5L2N572uXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBwcmVmYWJSZXM6IE1hcDxzdHJpbmcsIGNjLlByZWZhYj47XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICog6Z+z5qiC5L+d5a2Y5L2N572uXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBtdXNpY1JlczogTWFwPHN0cmluZywgY2MuQXVkaW9DbGlwPjtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiDloLTmma/kv53lrZjkvY3nva5cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHNjZW5lUmVzOiBNYXA8c3RyaW5nLCBjYy5TY2VuZUFzc2V0PjtcclxuXHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICog5aSW6YOo6IWz5pys5L+d5a2YVVJM5Zyw5Z2ALOWWruWtmOWIpOaWt+aYr+WQpumHjeikh+WKoOi8iVxyXG4gICAgICAgICAgICAgKiBAdHlwZSB7U2V0PHN0cmluZz59XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBzY3JpcHRSZXM6IFNldDxzdHJpbmc+O1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIOS4u+izh+a6kOWKoOi8ieeJqeS7tiznm6Pogb3mmK/lkKbmnIljYWxsYmFjayzpmqjkuYvov5Tlm57oqbLni4DmhYtcclxuICAgICAgICAgICAgICogQHBhcmFtIG5hbWVcclxuICAgICAgICAgICAgICogQHBhcmFtIHByb2dyZXNzIOWPiOWKoOi8ieS6huWkmuWwkVxyXG4gICAgICAgICAgICAgKiBAcGFyYW0gc3RhdGUg6Kmy54mp5Lu25Yqg6LyJ5Yiw5bm+6La0XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBsb2FkTWFpbkV2ZW50Q2FsbGJhY2sobmFtZTogc3RyaW5nLCBwcm9ncmVzczogbnVtYmVyLCBzdGF0ZTogbnVtYmVyKTogdm9pZDtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiDmrKHos4fmupDliqDovInnianku7Ys55uj6IG95piv5ZCm5pyJY2FsbGJhY2ss6Zqo5LmL6L+U5Zue6Kmy54uA5oWLXHJcbiAgICAgICAgICAgICAqIOazqOaEjyzoqbLni4DmhYvnhKHnuL3os4fmupDnm6Pogb3lm57lgrPkuovku7ZcclxuICAgICAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcclxuICAgICAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IHN0YXRlXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBsb2FkU2Vjb25kYXJ5RXZlbnRDYWxsYmFjayhuYW1lOiBzdHJpbmcsIHN0YXRlOiBudW1iZXIpOiB2b2lkO1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIOWKoOi8ieipsuizh+aWmeWkvuW6leS4i+aJgOacieizh+a6kFxyXG4gICAgICAgICAgICAgKiDms6jmhI86IOmcgOWtmOaUvuaWvCByZXNvdXJjZXPkuK1cclxuICAgICAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcclxuICAgICAgICAgICAgICogQHBhcmFtIHtMb2FkVHlwZX0gdHlwZVxyXG4gICAgICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNMYW5ndWFnZVVzZWRcclxuICAgICAgICAgICAgICogQHJldHVybnMge3RoaXN9XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBsb2FkQXNzZXQobmFtZTogc3RyaW5nLCB0eXBlOiB0eXBlLkxvYWRUeXBlLCB1cmw6IHN0cmluZywgaXNMYW5ndWFnZVVzZWQ/OiBib29sZWFuKTogdGhpcztcclxuXHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICog5Yqg6LyJ6KmyIGFzc2V0QnVuZGxlIOW6leS4i+izh+a6kFxyXG4gICAgICAgICAgICAgKiDkvb/nlKjmraTmlrnms5XogIUs5Yqg6LyJ54uA5oWL5a2Y5pS+5qyh5Yqg6LyJ5LitIHNlY29uZGFyeUxvYWRTdGF0ZVxyXG4gICAgICAgICAgICAgKiDms6jmhI866aCI5pa8VUnli77pgbjphY3nva7ngrpCdW5kbGXos4fmlpnlpL5cclxuICAgICAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcclxuICAgICAgICAgICAgICogQHBhcmFtIHtMb2FkVHlwZX0gdHlwZVxyXG4gICAgICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXHJcbiAgICAgICAgICAgICAqIEByZXR1cm5zIHt0aGlzfVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgbG9hZEJ1bmRsZShuYW1lOiBzdHJpbmcsIHR5cGU6IHR5cGUuTG9hZFR5cGUsIHVybDogc3RyaW5nKTogdGhpcztcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiDkv53lrZjkvb/nlKjogIXopoFjYWxsYmFja+eahOaWueazlSznlbbmnInlm57lgrPpgLLluqbmmYLlsIfpgI/pgY4gbG9hZEV2ZW50Q2FsbGJhY2vmlrnms5Xlm57lgrPpgLLluqZcclxuICAgICAgICAgICAgICogQHBhcmFtIHsocHJvZ3Jlc3M6IG51bWJlcikgPT4gdm9pZH0gY2FsbEZ1blxyXG4gICAgICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gbWV0aG9kTmFtZVxyXG4gICAgICAgICAgICAgKiBAcmV0dXJucyB7dGhpc306IG1ldGhvZE5hbWUg5pyq5L2/55So5oOF5rOBLOWbnuWCsyB2b2lkXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBjYWxsYmFjayhjYWxsRnVuOiAocHJvZ3Jlc3M6IG51bWJlcikgPT4gdm9pZCwgbWV0aG9kTmFtZT86IHN0cmluZyk6IHRoaXM7XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICog6LyJ5YWl5aSW6YOo6IWz5pysXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7TG9hZFR5cGV9IHR5cGVcclxuICAgICAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxyXG4gICAgICAgICAgICAgKiBAcmV0dXJucyB7dGhpc31cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIGxvYWRFeHRlcm5hbFNjcmlwdChuYW1lOiBzdHJpbmcsIHR5cGU6IHR5cGUuTG9hZFR5cGUsIHVybDogc3RyaW5nKTogdGhpcztcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiDmn6XnnIvoqbLos4fmupDmmK/lkKblt7LliqDovInlroznlaJcclxuICAgICAgICAgICAgICogQHBhcmFtIG5hbWVcclxuICAgICAgICAgICAgICogQHBhcmFtIGlzTWFpblJlc291cmNlc1xyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgZ2V0TG9hZFN0YXRlKG5hbWU6IHN0cmluZywgaXNNYWluUmVzb3VyY2VzOiBib29sZWFuKTogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiDph43nva5cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHJlc2V0KCk6IHZvaWQ7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9FbnVtL0xvYWRFbnVtLnRzXCIgLz5cclxubmFtZXNwYWNlIGZjYyB7XHJcblxyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBJRiB7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBBdXRob3IgWElBTy1MSS1QSU5cclxuICAgICAgICAgKiBARGVzY3JpcHRpb24gKOS7i+mdoikg6LyJ5YWl5ZCE6aGe6LOH5rqQ5bel5bugXHJcbiAgICAgICAgICogQERhdGUgMjAyMS0wNC0xNCDkuIvljYggMjA6MjRcclxuICAgICAgICAgKiBAVmVyc2lvbiAxLjFcclxuICAgICAgICAgKi9cclxuICAgICAgICBleHBvcnQgaW50ZXJmYWNlIElMb2FkRmFjdG9yeSB7XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICog5qqi5ris55W25YmNVHlwZSzlgZrlkIToh6rlsI3mh4nnmoTliqDovInli5XkvZxcclxuICAgICAgICAgICAgICogQHBhcmFtIG5hbWVcclxuICAgICAgICAgICAgICogQHBhcmFtIHR5cGVcclxuICAgICAgICAgICAgICogQHBhcmFtIHVybFxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgZXhlY3V0ZUxvYWQobmFtZTogc3RyaW5nLCB0eXBlOiB0eXBlLkxvYWRUeXBlLCB1cmw6IHN0cmluZyk6IHZvaWQ7XHJcblxyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIOWft+ihjEJ1bmRsZei8ieWFpeWLleS9nFxyXG4gICAgICAgICAgICAgKiBAcGFyYW0gbmFtZVxyXG4gICAgICAgICAgICAgKiBAcGFyYW0gdHlwZVxyXG4gICAgICAgICAgICAgKiBAcGFyYW0gdXJsXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBleGVjdXRlTG9hZEJ1bmRsZShuYW1lOiBzdHJpbmcsIHR5cGU6IHR5cGUuTG9hZFR5cGUsIHVybDogc3RyaW5nKTogdm9pZDtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiDliqDovInlpJbpg6johbPmnKxcclxuICAgICAgICAgICAgICogQHBhcmFtIG5hbWVcclxuICAgICAgICAgICAgICogQHBhcmFtIHR5cGVcclxuICAgICAgICAgICAgICogQHBhcmFtIHVybFxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgZXhlY3V0ZUxvYWRFeHRlcm5hbFNjcmlwdChuYW1lOiBzdHJpbmcsIHR5cGU6IHR5cGUuTG9hZFR5cGUsIHVybDogc3RyaW5nKTogdm9pZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vRXJyb3IvRW51bS9FcnJvclR5cGUudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vRXJyb3IvRXJyb3JNYW5hZ2VyLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vSUV2ZW50TWFuYWdlci50c1wiIC8+XHJcbm5hbWVzcGFjZSBmY2Mge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQEF1dGhvciBYSUFPLUxJLVBJTlxyXG4gICAgICogQERlc2NyaXB0aW9uIOS6i+S7tueuoeeQhuWZqCznlbbliY3ntoHlrprnmoTkuovku7Ys5LqL5Lu25pW46YePXHJcbiAgICAgKiBARGF0ZSAyMDIxLTA0LTE0IOS4i+WNiCAyMDoyNFxyXG4gICAgICogQFZlcnNpb24gMS4xXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBjbGFzcyBFdmVudE1hbmFnZXIgZXh0ZW5kcyBjYy5FdmVudFRhcmdldCBpbXBsZW1lbnRzIElGLklFdmVudE1hbmFnZXIge1xyXG5cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IElGLklFdmVudE1hbmFnZXI7XHJcblxyXG4gICAgICAgIHByaXZhdGUgY29uZmlnTWFuYWdlcjogSUYuSUNvbmZpZ01hbmFnZXI7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOS6i+S7tue4veaVuOmHj1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHByaXZhdGUgX2V2ZW50Q291bnQ6IG51bWJlclxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDpgYrmiLLlhafkuovku7ZcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgdGFyZ2V0OiBjYy5FdmVudFRhcmdldFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDnlbbliY3mraPlnKjnm6Pogb3pgqPkupvkuovku7Y7XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBfZXZlbnRzQ3VycmVudGx5QmVpbmc6IE1hcDxzdHJpbmcsIHN0cmluZz5cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBjb25zdHJ1Y3Rvcihjb25maWdNYW5hZ2VyOiBJRi5JQ29uZmlnTWFuYWdlcikge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbmZpZ01hbmFnZXIgPSBjb25maWdNYW5hZ2VyO1xyXG4gICAgICAgICAgICB0aGlzLl9ldmVudENvdW50ID0gMDtcclxuICAgICAgICAgICAgdGhpcy5fZXZlbnRzQ3VycmVudGx5QmVpbmcgPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nPigpO1xyXG4gICAgICAgICAgICB0aGlzLnRhcmdldCA9IG5ldyBjYy5FdmVudFRhcmdldCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogIOaHtua8ouWKoOi8iVxyXG4gICAgICAgICAqICDliJ3lp4vljJYs5Y+q6K6T5LiA5YCL5bCI5qGI55Si55Sf5LiA5qyh6KmyY2xhc3NcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgc3RhdGljIHNldEluc3RhbmNlKGNvbmZpZ01hbmFnZXI6IElGLklDb25maWdNYW5hZ2VyKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5faW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlID0gbmV3IEV2ZW50TWFuYWdlcihjb25maWdNYW5hZ2VyKTtcclxuICAgICAgICAgICAgICAgIGV2ZW50TWdyID0gdGhpcy5faW5zdGFuY2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqICDnjbLlj5blt7LntpPliJ3lp4vljJbnmoTpnZzmhYvlr6bkvotjbGFzc1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGluc3RhbmNlKCk6IElGLklFdmVudE1hbmFnZXIge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuX2luc3RhbmNlKSB7XHJcbiAgICAgICAgICAgICAgICBFcnJvck1hbmFnZXIuaW5zdGFuY2UuZXhlY3V0ZUVycm9yKHR5cGUuRXJyb3JUeXBlLkxJU1RFTkVSX0ZXLCBcIuipsumhnuWwmuacquWvpuS+i+WMllwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDmt7vliqDkuovku7ZcclxuICAgICAgICAgKiBAcGFyYW0gZXZlbnRUYXJnZXRcclxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lXHJcbiAgICAgICAgICogQHBhcmFtIHthbnl9IGFueSA6IOimgeWbnuWCs+eahOeJqeS7tlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBlbWl0RXZlbnQoZXZlbnROYW1lOiB0eXBlLlNlcnZlckV2ZW50VHlwZSB8IHN0cmluZywgLi4uYW55OiBhbnkpIHtcclxuICAgICAgICAgICAgYW55ID8gdGhpcy50YXJnZXQuZW1pdChldmVudE5hbWUsIC4uLmFueSkgOiB0aGlzLnRhcmdldC5lbWl0KGV2ZW50TmFtZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBzZXJ2ZXLnm6Pogb3lm57lgrPmjqXmlLZcclxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lXHJcbiAgICAgICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbEZ1blxyXG4gICAgICAgICAqIEBwYXJhbSBpc1Blcm1hbmVudCAtIOaYr+WQpuW4uOmnkFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBldmVudExpc3RlbmVyKGV2ZW50TmFtZTogc3RyaW5nLCBjYWxsRnVuOiAoLi4udGFyZ2V0OiBhbnkpID0+IHZvaWQsIGlzUGVybWFuZW50OiBib29sZWFuKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2V2ZW50Q291bnQgKz0gMTtcclxuICAgICAgICAgICAgdGhpcy5fZXZlbnRzQ3VycmVudGx5QmVpbmcuc2V0KFwic2V2ZXJFdmVudFwiLCBldmVudE5hbWUpO1xyXG4gICAgICAgICAgICBpZiAoaXNQZXJtYW5lbnQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0Lm9uKGV2ZW50TmFtZSwgY2FsbEZ1bik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRhcmdldC5vbmNlKGV2ZW50TmFtZSwgY2FsbEZ1bik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOWIqumZpOS5i+WJjeeUqOWQjOmhnuWei++8jOWbnuiqv++8jOebruaomeaIliB1c2VDYXB0dXJlIOiou+WGiueahOS6i+S7tuebo+iBveWZqO+8jOWmguaenOWPquWCs+mBniB0eXBl77yM5bCH5pyD5Yiq6ZmkIHR5cGUg6aGe5Z6L55qE5omA5pyJ5LqL5Lu255uj6IG95Zmo44CCXHJcbiAgICAgICAgICogQHBhcmFtIHtTZXJ2ZXJFdmVudFR5cGUgfCBHYW1lRXZlbnRUeXBlfSBldmVudE5hbWVcclxuICAgICAgICAgKiBAcGFyYW0ge2NjLkV2ZW50VGFyZ2V0fSBldmVudFRhcmdldFxyXG4gICAgICAgICAqIEBwYXJhbSBjYWxsRnVuP3tGdW5jdGlvbn0gOiDopoHliKrpmaTnmoTmlrnms5Us5aaC5p6c5pyq5YKz5Y+D5pW4LOWwh+m7mOiqjeWFqOmDqOebuOmXnOeahGNhbGxGdW7kuIDkuKbliKrpmaRcclxuICAgICAgICAgKiBAcGFyYW0gdGFyZ2V0P3tPYmplY3R9Ouiqv+eUqOWbnuiqv+eahOebruaome+8iOatpOWwjeixoe+8ie+8jOWmguaenOacquaMh+Wumu+8jOWJh+WDheWIqumZpOaykuacieebruaomeeahOWbnuiqv1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBkZXN0cm95RXZlbnQoZXZlbnROYW1lOiBzdHJpbmcsIGNhbGxGdW4/OiBGdW5jdGlvbiwgdGFyZ2V0PzogT2JqZWN0KSB7XHJcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0Lm9mZihldmVudE5hbWUsIGNhbGxGdW4sIHRhcmdldCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDmmK/lkKboqbLkuovku7bmjIHnuoznm6Pogb3kuK1cclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgaGFzTGlzdGVuaW5nKGV2ZW50TmFtZTogc3RyaW5nLCBldmVudFRhcmdldDogY2MuRXZlbnRUYXJnZXQpOiBib29sZWFuIHtcclxuICAgICAgICAgICAgcmV0dXJuIGV2ZW50VGFyZ2V0Lmhhc0V2ZW50TGlzdGVuZXIoZXZlbnROYW1lKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXQgZXZlbnRDb3VudCgpOiBudW1iZXIge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZXZlbnRDb3VudFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldCBldmVudHNDdXJyZW50bHlCZWluZygpOiBNYXA8c3RyaW5nLCBzdHJpbmc+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2V2ZW50c0N1cnJlbnRseUJlaW5nXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIGZjYyB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAQXV0aG9yIFhJQU8tTEktUElOXHJcbiAgICAgKiBARGVzY3JpcHRpb24g6YGK5oiy5rWB56iL566h55CG5ZmoIDog566h55CG55W25YmN5rWB56iLLOWft+ihjOeVtuWJjea1geeoi1xyXG4gICAgICogQERhdGUgMjAyMS0wNS0xNCDkuIvljYggMDM6NDRcclxuICAgICAqIEBWZXJzaW9uIDEuMlxyXG4gICAgICovXHJcbiAgICBleHBvcnQgY2xhc3MgUHJvY2Vzc01hbmFnZXIgaW1wbGVtZW50cyBJRi5JUHJvY2Vzc01hbmFnZXIge1xyXG5cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IElGLklQcm9jZXNzTWFuYWdlclxyXG5cclxuICAgICAgICBwcml2YXRlIGNvbmZpZ01hbmFnZXI6IElGLklDb25maWdNYW5hZ2VyO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDnlbbliY3pgYrmiLLni4DmhYtcclxuICAgICAgICAgKiBAdHlwZSB7ZmNjLnR5cGUuR2FtZVN0YXRlVHlwZX1cclxuICAgICAgICAgKiBAZGVmYXVsdCAtIHR5cGUuR2FtZVN0YXRlVHlwZS5TVEFOREJZXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cclxuICAgICAgICBwcml2YXRlIF9nYW1lU3RhdGU6IHR5cGUuR2FtZVN0YXRlVHlwZTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5piv5ZCm55W25YmN5rWB56iL5Z+36KGM5LitXHJcbiAgICAgICAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cclxuICAgICAgICBwcml2YXRlIGlzU3RhcnRQcm9jZXNzOiBib29sZWFuO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDmtYHnqIvlt6Xlu6BcclxuICAgICAgICAgKiBAdHlwZSB7ZmNjLklGLklHYW1lUHJvY2Vzc0ZhY3Rvcnl9XHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cclxuICAgICAgICBwcml2YXRlIGdhbWVQcm9jZXNzRmFjdG9yeTogSUYuSUdhbWVQcm9jZXNzRmFjdG9yeTtcclxuXHJcblxyXG4gICAgICAgIHByaXZhdGUgY29uc3RydWN0b3IoY29uZmlnTWFuYWdlcjogSUYuSUNvbmZpZ01hbmFnZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5jb25maWdNYW5hZ2VyID0gY29uZmlnTWFuYWdlcjsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v542y5Y+WQ29uZmlnTWFuZ2VyLOmbmeWQkee2geWumlxyXG4gICAgICAgICAgICB0aGlzLmdhbWVQcm9jZXNzRmFjdG9yeSA9IG5ldyBHYW1lUHJvY2Vzc0ZhY3RvcnkodGhpcyk7ICAgICAgLy/liJ3lp4vljJbmtYHnqIvlt6Xlu6BcclxuICAgICAgICAgICAgdGhpcy5fZ2FtZVN0YXRlID0gdHlwZS5HYW1lU3RhdGVUeXBlLlNUQU5EQlk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5Yid5aeL6YGK5oiy54uA5oWLXHJcbiAgICAgICAgICAgIHRoaXMuaXNTdGFydFByb2Nlc3MgPSBmYWxzZTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+WIneWni+eVtuWJjeWft+ihjOa1geeoi+eLgOaFi1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogIOaHtua8ouWKoOi8iVxyXG4gICAgICAgICAqICDliJ3lp4vljJYs5Y+q6K6T5LiA5YCL5bCI5qGI5Y+q5pyJ5LiA5qyh55Si55Sf5q2kY2xhc3NcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgc3RhdGljIHNldEluc3RhbmNlKGNvbmZpZ01hbmFnZXI6IElGLklDb25maWdNYW5hZ2VyKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5faW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlID0gbmV3IFByb2Nlc3NNYW5hZ2VyKGNvbmZpZ01hbmFnZXIpO1xyXG4gICAgICAgICAgICAgICAgcHJvY2Vzc01nciA9IHRoaXMuX2luc3RhbmNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogIOeNsuWPluW3sue2k+WIneWni+WMlueahOmdnOaFi+WvpuS+i2NsYXNzXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBnZXQgaW5zdGFuY2UoKTogSUYuSVByb2Nlc3NNYW5hZ2VyIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLl9pbnN0YW5jZSkge1xyXG4gICAgICAgICAgICAgICAgRXJyb3JNYW5hZ2VyLmluc3RhbmNlLmV4ZWN1dGVFcnJvcih0eXBlLkVycm9yVHlwZS5QUk9DRVNTX0ZXLCBcIuipsumhnuWwmuacquWvpuS+i+WMllwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDoqK3lrprmtYHnqItcclxuICAgICAgICAgKiBAcGFyYW0ge2ZjYy50eXBlLlByb2Nlc3NUeXBlIHwgc3RyaW5nfSBwcm9jZXNzTmFtZSAtIOWPr+S9v+eUqOmgkOiorSBQcm9jZXNzVHlwZSDmiJboh6roqILnvqnmtYHnqIvlkI3nqLFcclxuICAgICAgICAgKiBAcGFyYW0ge2ZjYy5JRi5JUHJvY2Vzc30gcHJvY2VzcyAtIOa1geeoi1xyXG4gICAgICAgICAqIEByZXR1cm4ge3RoaXN9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgc2V0UHJvY2Vzcyhwcm9jZXNzTmFtZTogdHlwZS5Qcm9jZXNzVHlwZSB8IHN0cmluZywgcHJvY2VzczogSUYuSVByb2Nlc3MpOiB0aGlzIHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lUHJvY2Vzc0ZhY3Rvcnkuc2V0UHJvY2Vzcyhwcm9jZXNzTmFtZSwgcHJvY2Vzcyk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5Yid5aeL5rWB56iLLOWft+ihjOe2geWumueahOa1geeoi+WFp+eahG9uQ3JlYXRl5pa55rOVXHJcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmcgfCBmY2MudHlwZS5Qcm9jZXNzVHlwZX0gcHJvY2Vzc05hbWUgLSDmjIflrprlj6ropoHliJ3lp4vlk6rlgIvmtYHnqIsgY2xhc3Ms5aaC5p6c5L2/55So54Sh5Y+D5pa55rOVLOWwh+acg+WIneWni+WMluaJgOaciee2geWumueahOa1geeoi1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBpbml0UHJvY2Vzcyhwcm9jZXNzTmFtZT86IHN0cmluZyB8IGZjYy50eXBlLlByb2Nlc3NUeXBlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZVByb2Nlc3NGYWN0b3J5LmluaXRQcm9jZXNzKHByb2Nlc3NOYW1lKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOioreWumuWIneWni+imgeWft+ihjOeahOa1geeoi1xyXG4gICAgICAgICAqIEBwYXJhbSBwcm9jZXNzTmFtZSAtIOa1geeoi+WQjeeosVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHNldERlZmF1bHRQcm9jZXNzKHByb2Nlc3NOYW1lOiB0eXBlLlByb2Nlc3NUeXBlIHwgc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZVByb2Nlc3NGYWN0b3J5LmNoYW5nZVByb2Nlc3MocHJvY2Vzc05hbWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5pu05o+b5rWB56iLXHJcbiAgICAgICAgICogQHBhcmFtIHtmY2MudHlwZS5Qcm9jZXNzVHlwZSB8IHN0cmluZ30gcHJvY2Vzc05hbWUgLSDopoHmm7Tmj5vnmoTmtYHnqIvlkI3nqLFcclxuICAgICAgICAgKi9cclxuICAgICAgICBjaGFuZ2VQcm9jZXNzKHByb2Nlc3NOYW1lOiB0eXBlLlByb2Nlc3NUeXBlIHwgc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZVByb2Nlc3NGYWN0b3J5LmNoYW5nZVByb2Nlc3MocHJvY2Vzc05hbWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5Z+36KGM6Kit5a6a5aW955qE5rWB56iLXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHBsYXkoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPihhc3luYyAocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzU3RhcnRQcm9jZXNzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVQcm9jZXNzU3RhdGUodHJ1ZSk7Ly/mtYHnqIvplovlp4tcclxuICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmdhbWVQcm9jZXNzRmFjdG9yeS51c2VQcm9jZXNzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVQcm9jZXNzU3RhdGUoZmFsc2UpOy8v5rWB56iL5b6q55Kw57WQ5p2fXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBFcnJvck1hbmFnZXIuaW5zdGFuY2UuZXhlY3V0ZUVycm9yKHR5cGUuRXJyb3JUeXBlLlBST0NFU1NfRlcsIFwi5rWB56iL5bCa5pyq57WQ5p2fLOiri+WLv+mHjeikh+Wft+ihjFwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5pS56K6K55W25YmN5rWB56iL6YCy6KGM54uA5oWLXHJcbiAgICAgICAgICogQHBhcmFtIHtib29sZWFufSBzdGF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHByaXZhdGUgdXBkYXRlUHJvY2Vzc1N0YXRlKHN0YXRlOiBib29sZWFuKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNTdGFydFByb2Nlc3MgPSBzdGF0ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOa4hemZpOWgteWhnueLgOaFi1xyXG4gICAgICAgICAqIOazqOaEjzrmuIXpmaToqbLni4DmhYvlvows6Kmy5qyh55qE5rWB56iL5Y2z5L2/5bCa5pyq5Z+36KGM5a6MLOS5n+iDveWft+ihjOS4i+asoea1geeoi1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHJlbWFrZSgpIHtcclxuICAgICAgICAgICAgdGhpcy5pc1N0YXJ0UHJvY2VzcyA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHNldCBnYW1lU3RhdGUodmFsdWU6IHR5cGUuR2FtZVN0YXRlVHlwZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9nYW1lU3RhdGUgPSB2YWx1ZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldCBnYW1lU3RhdGUoKTogdHlwZS5HYW1lU3RhdGVUeXBlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2dhbWVTdGF0ZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBmY2Mge1xyXG5cclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgdHlwZSB7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBBdXRob3IgWElBTy1MSS1QSU5cclxuICAgICAgICAgKiBARGVzY3JpcHRpb24g6YGK5oiy5aC05pmv5qij5byPXHJcbiAgICAgICAgICogQERhdGUgMjAyMS0wNC0xNCDkuIvljYggMjA6MjRcclxuICAgICAgICAgKiBAVmVyc2lvbiAxLjFcclxuICAgICAgICAgKi9cclxuICAgICAgICBleHBvcnQgZW51bSBTY2VuZVN0eWxlVHlwZSB7XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICog6Ieq5YuV5qih5byPLOWwh+acg+mFjeWQiOeOqeWutuiHquWLleWIh+aPm+ebtOW8j+aIluapq+W8j1xyXG4gICAgICAgICAgICAgKiBAdHlwZSB7U2NlbmVTdHlsZVR5cGUuQVVUT31cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIEFVVE8gPSAnQVVUTycsXHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICog5qmr5byP5qij5byPXHJcbiAgICAgICAgICAgICAqIEB0eXBlIHtTY2VuZVN0eWxlVHlwZS5IT1JJWk9OVEFMfVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgSE9SSVpPTlRBTCA9ICdIT1JJWk9OVEFMJyxcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiDnm7TlvI/mqKPlvI9cclxuICAgICAgICAgICAgICogQHR5cGUge1NjZW5lU3R5bGVUeXBlLlZFUlRJQ0FMfVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgVkVSVElDQUwgPSAnVkVSVElDQUwnXHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBmY2Mge1xyXG5cclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgdHlwZSB7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBBdXRob3Ig6JWt56uL5ZOBXHJcbiAgICAgICAgICogQERlc2NyaXB0aW9uIOeVtuWJjeaWueWQkVxyXG4gICAgICAgICAqIEBEYXRlIDIwMjEtMDYtMjUg5LiL5Y2IIDA1OjE3XHJcbiAgICAgICAgICogQFZlcnNpb24gMS4wXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZXhwb3J0IGVudW0gU2NlbmVEaXJlY3Rpb25UeXBlIHtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiDnm7TlkJFcclxuICAgICAgICAgICAgICogQHR5cGUge1NjZW5lRGlyZWN0aW9uVHlwZS5QT1JUUkFJVH1cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIFBPUlRSQUlUID0gJ1BPUlRSQUlUJyxcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiDmqavlkJFcclxuICAgICAgICAgICAgICogQHR5cGUge1NjZW5lRGlyZWN0aW9uVHlwZS5MQU5EU0NBUEV9XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBMQU5EU0NBUEUgPSAnTEFORFNDQVBFJyxcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vRW51bS9TY2VuZVN0eWxlVHlwZS50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9FbnVtL1NjZW5lRGlyZWN0aW9uVHlwZS50c1wiIC8+XHJcblxyXG5uYW1lc3BhY2UgZmNjIHtcclxuXHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIElGe1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAQXV0aG9yIFhJQU8tTEktUElOXHJcbiAgICAgICAgICogQERlc2NyaXB0aW9uICjku4vpnaIpIOWgtOaZr+euoeeQhuWZqFxyXG4gICAgICAgICAqIEBEYXRlIDIwMjEtMDQtMTQg5LiL5Y2IIDIwOjI0XHJcbiAgICAgICAgICogQFZlcnNpb24gMS4xXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZXhwb3J0IGludGVyZmFjZSBJU2NlbmVNYW5hZ2VyIHtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKlxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgc2NlbmVEaXJlY3Rpb246IHR5cGUuU2NlbmVEaXJlY3Rpb25UeXBlO1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIGNhdmVycyDoqK3oqIjlr6zluqZcclxuICAgICAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoIC0g5a+s5bqmXHJcbiAgICAgICAgICAgICAqIEByZXR1cm5zIHt0aGlzfVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgc2V0RGVzaWduV2lkdGgod2lkdGg6IG51bWJlcik6IHRoaXM7XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogY2F2ZXJzIOioreioiOmrmOW6plxyXG4gICAgICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0IC0g6auY5bqmXHJcbiAgICAgICAgICAgICAqIEByZXR1cm4ge3RoaXN9XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBzZXREZXNpZ25IZWlnaHQoaGVpZ2h0OiBudW1iZXIpOiB0aGlzO1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIOabtOaWsOeVtuWJjeekuumFjeWvrOmrmCzmnIPkv53lrZjkuIrmrKHnmoRzY2VuZeabtOWLleaooeW8j1xyXG4gICAgICAgICAgICAgKiDlpoLkuI3mt7vliqAgc3R5bGUg5Y+D5pW4ICznrKzkuIDmrKHlsIfmnIPkvb/nlKjpoJDoqK3mqKHlvI/mm7Tli5UsXHJcbiAgICAgICAgICAgICAqIOWmguaenOW3sue2k+abtOWLlemBjizlsIfmnIPkvb/nlKjkvaDkuIrmrKHnmoRzdHlsZeaoo+W8j1xyXG4gICAgICAgICAgICAgKiBAcGFyYW0ge1NjZW5lU3R5bGVUeXBlIHwgRnVuY3Rpb259IHN0eWxlIDog5Y+v6Ieq5a6a576p5pu05YuV5qij5byPLOS9huWvpuS9nCjku4vpnaIpSVNjZW5lU3R5bGVcclxuICAgICAgICAgICAgICogQHJldHVybiB7dGhpc31cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHVwZGF0ZVNpemUoc3R5bGU/OiB0eXBlLlNjZW5lU3R5bGVUeXBlIHwgSVNjZW5lU3R5bGUpOiB0aGlzO1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIOebo+iBveeVtuWJjWNhdmVyc+aYr+WQpuacieabtOWLleWkp+WwjyzlpoLmnpzmnInlsIfmnIPoh6rli5Xmm7TmlrDnlbbliY3mmK/phY3lr6zpq5hcclxuICAgICAgICAgICAgICog5bCH5pyD5q+U54Wn5LiK5qyh5pu05YuV55qE5qij5byP6YCy6KGM5pu05YuVXHJcbiAgICAgICAgICAgICAqIOWmguaenOmcgOaxguabtOWLleaoo+W8jyzpoIjlhYjmm7TmlrAgdXBkYXRlU2l6ZSgpXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSB0aW1lIDog5pu05paw55qE6aC7546HIOWWruS9jeavq+enkiBtc1xyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgc3RhcnRMaXN0ZW5lcih0aW1lOiBudW1iZXIpOiB2b2lkO1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIOabtOaPm+WgtOaZr1xyXG4gICAgICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIOWgtOaZr+izh+a6kOWQjeeoseeCuuS9oFJlc+WLleaFi+WKoOi8ieeahOiHquiogue+qeeahHNjZW5l5ZCN56ixXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBjaGFuZ2VTY2VuZShuYW1lOiBzdHJpbmcpOiB2b2lkO1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIOa4hemZpOipsnNjZW5l5omA5pyJ5YuV5L2cXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSBzY2VuZXtjYy5Db21wb25lbnR9IC0g6KaB5riF6Zmk55qEc2NlbmUgY2xhc3NcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHJlbW92ZVNjZW5lKHNjZW5lOiBjYy5Db21wb25lbnQpOiB2b2lkO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9TY2VuZU1hbmFnZXIudHNcIiAvPlxyXG5uYW1lc3BhY2UgZmNjIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBBdXRob3IgWElBTy1MSS1QSU5cclxuICAgICAqIEBEZXNjcmlwdGlvbiDnm6Pogb3nlbbliY3pgYrmiLIs546p5a625piv5ZCm5pyJ5pu05YuV5a+s6auYXHJcbiAgICAgKiBARGF0ZSAyMDIxLTA0LTE0IOS4i+WNiCAyMDoyNFxyXG4gICAgICogQFZlcnNpb24gMS4xXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBjbGFzcyBTY2VuZVNpemVDaGFuZ2VMaXN0ZW5lciB7XHJcblxyXG4gICAgICAgIC8v5piv5ZCm5Y+v5Lul5pu05paw55Wr6Z2iXHJcbiAgICAgICAgcHJpdmF0ZSBfaXNDYW5VcGRhdGVTY2VuZTogYm9vbGVhbiA9IHRydWU7XHJcbiAgICAgICAgcHJpdmF0ZSBjb25maWdNYW5hZ2VyIDogSUYuSUNvbmZpZ01hbmFnZXI7XHJcbiAgICAgICAgcHJpdmF0ZSBzY2VuZU1hbmFnZXI6IElGLklTY2VuZU1hbmFnZXI7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbmZpZ01hbmFnZXIgOklGLklDb25maWdNYW5hZ2VyLHNjZW5lTWFuYWdlcjpJRi5JU2NlbmVNYW5hZ2VyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29uZmlnTWFuYWdlciA9IGNvbmZpZ01hbmFnZXI7XHJcbiAgICAgICAgICAgIHRoaXMuc2NlbmVNYW5hZ2VyID0gc2NlbmVNYW5hZ2VyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog55uj6IG95piv5ZCm6KaB5pu05YuVc2NlbmXlr6zpq5hcclxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gZGVsYXlUaW1lIC0g5pu05paw6aC7546HXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZGVzaWduU2NlbmVFdmVudExpc3RlbmVyKGRlbGF5VGltZTogbnVtYmVyKSB7XHJcbiAgICAgICAgICAgIGNjLnZpZXcub24oXCJjYW52YXMtcmVzaXplXCIsIGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMubWFrZURlc2lnblNjZW5lKGRlbGF5VGltZSk7XHJcbiAgICAgICAgICAgICAgICBjYy5sb2coXCLmm7TmlrDnlavpnaLlroznlaIuLi4uLi5cIik7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDkvp3nhadkZXNpZ25TY2VuZUV2ZW50TGlzdGVuZXIoKeWPg+aVuOS4reeahGRlbGF55pmC6ZaTLOabtOaWsGNhdmVyc1xyXG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSB0aW1lIC0g5pu05paw6aC7546HXHJcbiAgICAgICAgICogQHJldHVybiB7UHJvbWlzZTx2b2lkPn1cclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHByaXZhdGUgbWFrZURlc2lnblNjZW5lKHRpbWU6IG51bWJlcik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9pc0NhblVwZGF0ZVNjZW5lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faXNDYW5VcGRhdGVTY2VuZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjZW5lTWFuYWdlci51cGRhdGVTaXplKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2lzQ2FuVXBkYXRlU2NlbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgdGltZSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvbmZpZ01hbmFnZXIuaXNGcmFtZXdvcmtEZWJ1ZylcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KFwi5q2j5ZyoVXBkYXRlU2NlbmXkuK0g6KuL56iN5b6MLi4uLi4uXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vRXJyb3IvRXJyb3JNYW5hZ2VyLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0Vycm9yL0VudW0vRXJyb3JUeXBlLnRzXCIgLz5cclxubmFtZXNwYWNlIGZjYyB7XHJcblxyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBBQlMge1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAQXV0aG9yIFhJQU8tTEktUElOXHJcbiAgICAgICAgICogQERlc2NyaXB0aW9uIFRPRE9cclxuICAgICAgICAgKiBARGF0ZSAyMDIxLTA2LTEwIOS4iuWNiCAxMToxMlxyXG4gICAgICAgICAqIEBWZXJzaW9uIDEuMFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBQmFzZU5vdGlmaWNhdGlvbiBpbXBsZW1lbnRzIElGLklCYXNlTm90aWZpY2F0aW9uIHtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiAo5oq96LGhKU5vdGlmaWNhdGlvbkhhbmRsZXIg55So5L6G542y5Y+W6YCZ5YCLY2xhc3PnmoTmqJnnsaRcclxuICAgICAgICAgICAgICog6Kmz57Sw55Sx5a2Q6aGe5a+m54++XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBwdWJsaWMgYWJzdHJhY3QgcmVhZG9ubHkgVEFHX05BTUU6IHN0cmluZztcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiDop4Dlr5/ogIVcclxuICAgICAgICAgICAgICogQHR5cGUge1NldDxJQmFzZU9ic2VydmVyPn1cclxuICAgICAgICAgICAgICogQHByb3RlY3RlZFxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgcHJvdGVjdGVkIHJlYWRvbmx5IG9ic2VydmVyOiBTZXQ8SUYuSUJhc2VPYnNlcnZlcj47XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogKOaKveixoSnmjqjmkq3kuovku7Ys5Y+D5pW455Sx5a2Q6aGe6Kmz57Sw5a+m54++XHJcbiAgICAgICAgICAgICAqIEBwYXJhbSBhbnlcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHB1YmxpYyBhYnN0cmFjdCBub3RpZnkoLi4uYW55KTogdm9pZDtcclxuXHJcbiAgICAgICAgICAgIHByb3RlY3RlZCBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXIgPSBuZXcgU2V0PElGLklCYXNlT2JzZXJ2ZXI+KCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiDoqILplrHoqbLkuovku7ZcclxuICAgICAgICAgICAgICogQHBhcmFtIHtJQmFzZU9ic2VydmVyfSBvYnNlcnZlciAtIOmXnOazqOiAhVxyXG4gICAgICAgICAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlzUGVybWFuZW50IC0g5piv5ZCm5bi46aeQXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBwdWJsaWMgc3Vic2NyaWJlKG9ic2VydmVyOiBJRi5JQmFzZU9ic2VydmVyLCBpc1Blcm1hbmVudDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub2JzZXJ2ZXIuaGFzKG9ic2VydmVyKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIEVycm9yTWFuYWdlci5pbnN0YW5jZS5leGVjdXRlRXJyb3IodHlwZS5FcnJvclR5cGUuU0NFTkVfRlcsIGAke29ic2VydmVyfSDoqbJJQmFzZU9ic2VydmVy5bey6Ki75YaK6YGO6Ieq5YuV54uA5oWL5pS56K6K5pmC5LqL5Lu2LOiri+aqouafpWApXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIG9ic2VydmVyLmlzUGVybWFuZW50ID0gaXNQZXJtYW5lbnQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9ic2VydmVyLmFkZChvYnNlcnZlcik7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICog56e76Zmk6KiC6ZaxXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7SUJhc2VPYnNlcnZlcn0gb2JzZXJ2ZXIgLSDpl5zms6jogIVcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHB1YmxpYyB1bnN1YnNjcmliZShvYnNlcnZlcjogSUYuSUJhc2VPYnNlcnZlcik6IHZvaWQge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub2JzZXJ2ZXIuaGFzKG9ic2VydmVyKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXIuZGVsZXRlKG9ic2VydmVyKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgRXJyb3JNYW5hZ2VyLmluc3RhbmNlLmV4ZWN1dGVFcnJvcih0eXBlLkVycm9yVHlwZS5QUk9DRVNTX0ZXLCBgJHtvYnNlcnZlcn0gOiDoqbLop4Dlr5/poZ7lsJrmnKrntoHlrprpgY4s54Sh6aCI56e76Zmk6KeA5a+f5bCN6LGhYCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICog56e76Zmk5omA5pyJ6KiC6ZaxXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICByZW1vdmVBbGwoKTogdm9pZCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9ic2VydmVyLmNsZWFyKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiDnjbLlj5boqbLkuovku7bmiYDmnInoqILplrHmlbjph49cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHB1YmxpYyBnZXRTdWJzY3JpYmVDb3VudCgpOiBudW1iZXIge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMub2JzZXJ2ZXIuc2l6ZTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiDnjbLlj5boqbLkuovku7bmiYDmnInoqILplrHogIVcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHB1YmxpYyBnZXRBbGxTdWJzY3JpYmUoKTogU2V0PElGLklCYXNlT2JzZXJ2ZXI+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm9ic2VydmVyO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBmY2Mge1xyXG5cclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgdHlwZSB7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBBdXRob3IgWElBTy1MSS1QSU5cclxuICAgICAgICAgKiBARGVzY3JpcHRpb24g5o6o5pKt5LqL5Lu2XHJcbiAgICAgICAgICogQERhdGUgMjAyMS0wNi0xMCDkuIvljYggMDQ6NTlcclxuICAgICAgICAgKiBAVmVyc2lvbiAxLjBcclxuICAgICAgICAgKi9cclxuICAgICAgICBleHBvcnQgZW51bSBOb3RpZmljYXRpb25UeXBlIHtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiDoh6rli5Xni4DmhYvmlLnorormmYJcclxuICAgICAgICAgICAgICogQHR5cGUge2ZjYy50eXBlLk5vdGlmaWNhdGlvblR5cGUuQVVUT19DSEFOR0V9XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBBVVRPX0NIQU5HRSA9IFwiQVVUT19DSEFOR0VcIixcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiDnlbbliY3pgYrmiLLpgJ/luqbni4DmhYvmlLnorormmYJcclxuICAgICAgICAgICAgICogQHR5cGUge2ZjYy50eXBlLk5vdGlmaWNhdGlvblR5cGUuU1BFRURfQ0hBTkdFfVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgU1BFRURfQ0hBTkdFID0gXCJTUEVFRF9DSEFOR0VcIixcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiDnlKjmiLbph5HpoY3orormm7TmmYJcclxuICAgICAgICAgICAgICogQHR5cGUge2ZjYy50eXBlLk5vdGlmaWNhdGlvblR5cGUuVVNFUl9NT05FWV9DSEFOR0V9XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBVU0VSX01PTkVZX0NIQU5HRSA9IFwiVVNFUl9NT05FWV9DSEFOR0VcIixcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiDnlKjmiLbmm7Tmj5vnmoTmirzkvY/ph5HpoY3mmYJcclxuICAgICAgICAgICAgICogQHR5cGUge2ZjYy50eXBlLk5vdGlmaWNhdGlvblR5cGUuVVNFUl9CRVRfQ0hBTkdFfVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgVVNFUl9CRVRfQ0hBTkdFID0gXCJVU0VSX0JFVF9DSEFOR0VcIixcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiDnlKjmiLbotI/liIbmmYJcclxuICAgICAgICAgICAgICogQHR5cGUge2ZjYy50eXBlLk5vdGlmaWNhdGlvblR5cGUuVVNFUl9HRVRfV0lOfVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgVVNFUl9HRVRfV0lOID0gXCJVU0VSX0dFVF9XSU5cIixcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiDnlKjmiLbmlLnoroptb2JpbGXmlrnlkJHmmYJcclxuICAgICAgICAgICAgICogQHR5cGUge2ZjYy50eXBlLk5vdGlmaWNhdGlvblR5cGUuU0NFTkVfRElSRUNUSU9OX0NIQU5HRX1cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIFNDRU5FX0RJUkVDVElPTl9DSEFOR0UgPSBcIlNDRU5FX0RJUkVDVElPTl9DSEFOR0VcIixcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBzZXJ2ZXIg5Zue5YKz57WQ5p6c5pmCXHJcbiAgICAgICAgICAgICAqIEB0eXBlIHtmY2MudHlwZS5Ob3RpZmljYXRpb25UeXBlLlJFU1BPTlNFX1JFU1VMVH1cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIFJFU1BPTlNFX1JFU1VMVCA9IFwiUkVTUE9OU0VfUkVTVUxUXCIsXHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICog556H5o6S5LqL5Lu25pmCXHJcbiAgICAgICAgICAgICAqIEB0eXBlIHtmY2MudHlwZS5Ob3RpZmljYXRpb25UeXBlLlNDUk9MTF9GT0NVU19TVEFURX1cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIFNDUk9MTF9GT0NVU19TVEFURSA9IFwiU0NST0xMX0ZPQ1VTX1NUQVRFXCIsXHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICog5Y2z5YGc5LqL5Lu2XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBTVE9QX05PVyA9IFwiU1RPUF9OT1dcIixcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJcclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL1NjZW5lL0VudW0vU2NlbmVEaXJlY3Rpb25UeXBlLnRzXCIgLz5cclxuXHJcbm5hbWVzcGFjZSBmY2Mge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQEF1dGhvciBYSUFPLUxJLVBJTlxyXG4gICAgICogQERlc2NyaXB0aW9uIOWgtOaZr+aWueWQkeaUueiuiuingOWvn+iAhSznlbbmnInkuovku7bmjqjpgIHmmYIs5bCH5pyD5bCH6Kmy5LqL5Lu25o6o5pKt57Wm57aB5a6a6ICFXHJcbiAgICAgKiBARGF0ZSAyMDIxLTA1LTE5IOS4i+WNiCAwMTo0NlxyXG4gICAgICogQFZlcnNpb24gMS4wXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBjbGFzcyBTY2VuZURpcmVjdGlvbkNoYW5nZU9ic2VydmVyIGltcGxlbWVudHMgSUYuSUJhc2VPYnNlcnZlciB7XHJcbiAgICAgICAgcHJpdmF0ZSBfaXNQZXJtYW5lbnQ6IGJvb2xlYW47XHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBzZWxmOiBhbnk7XHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBjYWxsRnVuOiAodHlwZTogdHlwZS5TY2VuZURpcmVjdGlvblR5cGUpID0+IHZvaWQ7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNhbGxGdW46ICh0eXBlOiB0eXBlLlNjZW5lRGlyZWN0aW9uVHlwZSkgPT4gdm9pZCwgc2VsZikge1xyXG4gICAgICAgICAgICB0aGlzLl9pc1Blcm1hbmVudCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnNlbGYgPSBzZWxmO1xyXG4gICAgICAgICAgICB0aGlzLmNhbGxGdW4gPSBjYWxsRnVuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVzaE5vdGlmaWNhdGlvbih0eXBlOiB0eXBlLlNjZW5lRGlyZWN0aW9uVHlwZSkge1xyXG4gICAgICAgICAgICB0aGlzLmNhbGxGdW4uY2FsbCh0aGlzLnNlbGYsIHR5cGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZ2V0IGlzUGVybWFuZW50KCk6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faXNQZXJtYW5lbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXQgaXNQZXJtYW5lbnQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICAgICAgdGhpcy5faXNQZXJtYW5lbnQgPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vU2NlbmUvRW51bS9TY2VuZURpcmVjdGlvblR5cGUudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vQUJhc2VOb3RpZmljYXRpb24udHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vRW51bS9Ob3RpZmljYXRpb25UeXBlLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL09ic2VydmVyVHlwZS9TY2VuZU9ic2VydmVyL1NjZW5lRGlyZWN0aW9uQ2hhbmdlT2JzZXJ2ZXIudHNcIiAvPlxyXG5uYW1lc3BhY2UgZmNjIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBBdXRob3IgWElBTy1MSS1QSU5cclxuICAgICAqIEBEZXNjcmlwdGlvbiDloLTmma/mlrnlkJHmlLnororpgJrnn6XnrqHnkIblmahcclxuICAgICAqIEBEYXRlIDIwMjEtMDUtMTkg5LiL5Y2IIDAxOjU3XHJcbiAgICAgKiBAVmVyc2lvbiAxLjBcclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGNsYXNzIFNjZW5lRGlyZWN0aW9uQ2hhbmdlTm90aWZpY2F0aW9uIGV4dGVuZHMgQUJTLkFCYXNlTm90aWZpY2F0aW9uIHtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogTm90aWZpY2F0aW9uSGFuZGxlciDnlKjkvobnjbLlj5bpgJnlgItjbGFzc+eahOaomeexpFxyXG4gICAgICAgICAqIEB0eXBlIHtzdHJpbmd9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHJlYWRvbmx5IFRBR19OQU1FOiBzdHJpbmc7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgICAgICB0aGlzLlRBR19OQU1FID0gdHlwZS5Ob3RpZmljYXRpb25UeXBlLlNDRU5FX0RJUkVDVElPTl9DSEFOR0VcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOiogumWseipsuS6i+S7tlxyXG4gICAgICAgICAqIEBwYXJhbSB7QXV0b1N0YXRlQ2hhbmdlT2JzZXJ2ZXJ9IG9ic2VydmVyIC0g5o6o5pKl5o6l5pS26ICFXHJcbiAgICAgICAgICogQHBhcmFtIHtib29sZWFufSBpc1Blcm1hbmVudCAtIOaYr+WQpuW4uOmnkOebo+iBvVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHN1YnNjcmliZShvYnNlcnZlcjogU2NlbmVEaXJlY3Rpb25DaGFuZ2VPYnNlcnZlciwgaXNQZXJtYW5lbnQ6IGJvb2xlYW4pIHtcclxuICAgICAgICAgICAgc3VwZXIuc3Vic2NyaWJlKG9ic2VydmVyLCBpc1Blcm1hbmVudCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDnlKjmiLbmm7Tmj5vmlrnlkJHmmYLmjqjpgIHpgJrnn6VcclxuICAgICAgICAgKiBAcGFyYW0ge1NjZW5lRGlyZWN0aW9uVHlwZX0gdHlwZSAtIOeVtuWJjeeUqOaItuaWueWQkVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIG5vdGlmeSh0eXBlOiB0eXBlLlNjZW5lRGlyZWN0aW9uVHlwZSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5vYnNlcnZlci5zaXplID4gMCkge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgb2JzZXJ2ZXIgb2YgdGhpcy5vYnNlcnZlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLnB1c2hOb3RpZmljYXRpb24odHlwZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFvYnNlcnZlci5pc1Blcm1hbmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKG9ic2VydmVyKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vRW51bS9TY2VuZURpcmVjdGlvblR5cGUudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vU2NlbmVNYW5hZ2VyLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL0xpc3RlbmVyL05vdGlmaWNhdGlvblR5cGUvU2NlbmVOb3RpZmljYXRpb24vU2NlbmVEaXJlY3Rpb25DaGFuZ2VOb3RpZmljYXRpb24udHNcIiAvPlxyXG5uYW1lc3BhY2UgZmNjIHtcclxuICAgIC8qKlxyXG4gICAgICogQEF1dGhvciBYSUFPLUxJLVBJTlxyXG4gICAgICogQERlc2NyaXB0aW9uIOiHquWLleaooeW8jyA6IOS+neeFp+eOqeWutueVtuWJjeeahOS9v+eUqOaWueW8jyzoh6rli5Xmm7TmlrDngrrmqavlvI8gb3Ig55u05byPXHJcbiAgICAgKiBARGF0ZSAyMDIxLTA0LTE0IOS4i+WNiCAyMDoyNFxyXG4gICAgICogQFZlcnNpb24gMS4xXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBjbGFzcyBBdXRvU3R5bGUgaW1wbGVtZW50cyBJRi5JU2NlbmVTdHlsZSB7XHJcblxyXG4gICAgICAgIHByaXZhdGUgc2NlbmVNYW5hZ2VyOiBJRi5JU2NlbmVNYW5hZ2VyO1xyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgZXZlbnRMb2NrOiBib29sZWFuOyAgICAvL+mXnOmWieaOqOaSreS6i+S7tueUqFxyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihzY2VuZU1hbmFnZXI6IElGLklTY2VuZU1hbmFnZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5zY2VuZU1hbmFnZXIgPSBzY2VuZU1hbmFnZXI7XHJcbiAgICAgICAgICAgIGlmICghTm90aWZpY2F0aW9uTWFuYWdlclxyXG4gICAgICAgICAgICAgICAgLmluc3RhbmNlKClcclxuICAgICAgICAgICAgICAgIC5oYXNOb3RpZmljYXRpb24odHlwZS5Ob3RpZmljYXRpb25UeXBlLlNDRU5FX0RJUkVDVElPTl9DSEFOR0UpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmV2ZW50TG9jayA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuS9oOWwmuacque2geWumueVtumBiuaIsuaWueWQkeabtOWLleaZgueahOaOqOaSreS6i+S7tizlm6DmraTkuI3mnIPop7jnmbzmlrnlkJHmlLnorornmoTmjqjmkq3kuovku7ZcIilcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRMb2NrID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBleGVjdXRpb25TdHlsZSh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcikge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNjZW5lRGlyZWN0aW9uKCk7XHJcbiAgICAgICAgICAgIGlmICgoY2Mudmlldy5nZXRGcmFtZVNpemUoKS53aWR0aCAvIGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkuaGVpZ2h0KSA+PSAod2lkdGggLyBoZWlnaHQpKSB7XHJcbiAgICAgICAgICAgICAgICAvL+WuveW6pui2heWHulxyXG4gICAgICAgICAgICAgICAgbGV0IG5ld1dpZHRoID0gY2Mudmlldy5nZXRGcmFtZVNpemUoKS53aWR0aCAqICh3aWR0aCAvIGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkuaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgIGNjLnZpZXcuc2V0RGVzaWduUmVzb2x1dGlvblNpemUobmV3V2lkdGgsIGhlaWdodCwgY2MuUmVzb2x1dGlvblBvbGljeS5GSVhFRF9IRUlHSFQpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkud2lkdGggPiBjYy52aWV3LmdldEZyYW1lU2l6ZSgpLmhlaWdodCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXdIZWlnaHQgPSBjYy52aWV3LmdldEZyYW1lU2l6ZSgpLmhlaWdodCAqICh3aWR0aCAvIGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkud2lkdGgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLnZpZXcuc2V0RGVzaWduUmVzb2x1dGlvblNpemUod2lkdGgsIG5ld0hlaWdodCwgY2MuUmVzb2x1dGlvblBvbGljeS5GSVhFRF9XSURUSCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICgoY2Mudmlldy5nZXRGcmFtZVNpemUoKS53aWR0aCAvIGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkuaGVpZ2h0KSA+PSAoMTAwMCAvIDE3NzcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuZXdIZWlnaHQgPSBjYy52aWV3LmdldEZyYW1lU2l6ZSgpLmhlaWdodCAqICgxMDAwIC8gY2Mudmlldy5nZXRGcmFtZVNpemUoKS53aWR0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLnZpZXcuc2V0RGVzaWduUmVzb2x1dGlvblNpemUoMTAwMCwgbmV3SGVpZ2h0LCBjYy5SZXNvbHV0aW9uUG9saWN5LkZJWEVEX0hFSUdIVCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld0hlaWdodCA9IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkuaGVpZ2h0ICogKDEwMDAgLyBjYy52aWV3LmdldEZyYW1lU2l6ZSgpLndpZHRoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2Mudmlldy5zZXREZXNpZ25SZXNvbHV0aW9uU2l6ZSgxMDAwLCBuZXdIZWlnaHQsIGNjLlJlc29sdXRpb25Qb2xpY3kuRklYRURfV0lEVEgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5pu05paw566h55CG5Zmo5YWn55qEIHNjZW5lRGlyZWN0aW9uIOiuiuaVuCzkuKbmjqjmkqXlt7Lmm7TmlrDnlbbliY3loLTmma/mlrnlkJHnmoTkuovku7ZcclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIOazqOaEjyA6IOWmguaenOeVtuWJjeaWueWQkeS4jeiuiizljbvmm7TmlrDkuobpgYrmiLLmmK/phY3luqYs5piv5LiN5pyD5o6o5rOi5LqL5Lu255qEXHJcbiAgICAgICAgICogICAgICAg5Y+q5pyJ5pa55ZCR5pS56K6K5omN5pyD5o6o6YCB5o6o5rOi5LqL5Lu2XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdXBkYXRlU2NlbmVEaXJlY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGlmIChjYy52aWV3LmdldEZyYW1lU2l6ZSgpLndpZHRoIDwgY2Mudmlldy5nZXRGcmFtZVNpemUoKS5oZWlnaHQpIHtcclxuICAgICAgICAgICAgICAgIC8v55u05ZCRXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zY2VuZU1hbmFnZXIuc2NlbmVEaXJlY3Rpb24gPT0gdHlwZS5TY2VuZURpcmVjdGlvblR5cGUuUE9SVFJBSVQpIHJldHVybjtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NlbmVNYW5hZ2VyLnNjZW5lRGlyZWN0aW9uID0gdHlwZS5TY2VuZURpcmVjdGlvblR5cGUuUE9SVFJBSVQ7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmV2ZW50TG9jaykge1xyXG4gICAgICAgICAgICAgICAgICAgIE5vdGlmaWNhdGlvbk1hbmFnZXIuaW5zdGFuY2U8U2NlbmVEaXJlY3Rpb25DaGFuZ2VOb3RpZmljYXRpb24+KClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmdldE5vdGlmaWNhdGlvbih0eXBlLk5vdGlmaWNhdGlvblR5cGUuU0NFTkVfRElSRUNUSU9OX0NIQU5HRSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLm5vdGlmeSh0eXBlLlNjZW5lRGlyZWN0aW9uVHlwZS5QT1JUUkFJVCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvL+apq+WQkVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2NlbmVNYW5hZ2VyLnNjZW5lRGlyZWN0aW9uID09IHR5cGUuU2NlbmVEaXJlY3Rpb25UeXBlLkxBTkRTQ0FQRSkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2VuZU1hbmFnZXIuc2NlbmVEaXJlY3Rpb24gPSB0eXBlLlNjZW5lRGlyZWN0aW9uVHlwZS5MQU5EU0NBUEU7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmV2ZW50TG9jaykge1xyXG4gICAgICAgICAgICAgICAgICAgIE5vdGlmaWNhdGlvbk1hbmFnZXIuaW5zdGFuY2U8U2NlbmVEaXJlY3Rpb25DaGFuZ2VOb3RpZmljYXRpb24+KClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmdldE5vdGlmaWNhdGlvbih0eXBlLk5vdGlmaWNhdGlvblR5cGUuU0NFTkVfRElSRUNUSU9OX0NIQU5HRSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLm5vdGlmeSh0eXBlLlNjZW5lRGlyZWN0aW9uVHlwZS5MQU5EU0NBUEUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIGZjYyB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAQXV0aG9yIFhJQU8tTEktUElOXHJcbiAgICAgKiBARGVzY3JpcHRpb24g5qmr5byP5qij5byP5pu05pawXHJcbiAgICAgKiBARGF0ZSAyMDIxLTA0LTE0IOS4i+WNiCAyMDoyNFxyXG4gICAgICogQFZlcnNpb24gMS4xXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBjbGFzcyBIb3Jpem9udGFsU3R5bGUgaW1wbGVtZW50cyBJRi5JU2NlbmVTdHlsZSB7XHJcblxyXG4gICAgICAgIC8v55W25YmNY2F2ZXJz5a+s6auYXHJcbiAgICAgICAgcHJpdmF0ZSBjdXJEUjogYW55O1xyXG5cclxuICAgICAgICBwdWJsaWMgZXhlY3V0aW9uU3R5bGUod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpIHtcclxuXHJcbiAgICAgICAgICAgIGxldCBjdnMgPSBjYy5maW5kKCdDYW52YXMnKS5nZXRDb21wb25lbnQoY2MuQ2FudmFzKTtcclxuXHJcbiAgICAgICAgICAgIC8v5L+d5a2Y5Y6f5aeL6Kit6KiI5YiG6L6o546H77yM5L6b5bGP5bmV5aSn5bCP6K6K5YyW5pmC5L2/55SoXHJcbiAgICAgICAgICAgIGlmICghdGhpcy5jdXJEUikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJEUiA9IGNjLnNpemUod2lkdGgsIGhlaWdodCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IGRyID0gdGhpcy5jdXJEUjtcclxuICAgICAgICAgICAgbGV0IHMgPSBjYy52aWV3LmdldEZyYW1lU2l6ZSgpO1xyXG4gICAgICAgICAgICBsZXQgcncgPSBzLndpZHRoO1xyXG4gICAgICAgICAgICBsZXQgcmggPSBzLmhlaWdodDtcclxuICAgICAgICAgICAgbGV0IGZpbmFsVyA9IHJ3O1xyXG4gICAgICAgICAgICBsZXQgZmluYWxIID0gcmg7XHJcblxyXG4gICAgICAgICAgICBpZiAoKHJ3IC8gcmgpID4gKGRyLndpZHRoIC8gZHIuaGVpZ2h0KSkge1xyXG4gICAgICAgICAgICAgICAgLy/mqavlkJFcclxuICAgICAgICAgICAgICAgIC8vISN6aDog5piv5ZCm5YSq5YWI5bCH6Kit6KiI5YiG6L6o546H6auY5bqm5pKQ5ru/6KaW5ZyW6auY5bqmIOOAgiAqL1xyXG4gICAgICAgICAgICAgICAgY3ZzLmZpdEhlaWdodCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBjdnMuZml0V2lkdGggPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIC8v5aaC5p6c5pu06ZW377yM5YmH55So5a6a6auYXHJcbiAgICAgICAgICAgICAgICBmaW5hbEggPSBkci5oZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICBmaW5hbFcgPSBmaW5hbEggKiBydyAvIHJoO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy/nm7TlkJFcclxuICAgICAgICAgICAgICAgIC8qISN6aDog5piv5ZCm5YSq5YWI5bCH6Kit6KiI5YiG6L6o546H5a+s5bqm5pKQ5ru/6KaW5ZyW5a+s5bqmIOOAgiAqL1xyXG4gICAgICAgICAgICAgICAgY3ZzLmZpdEhlaWdodCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgY3ZzLmZpdFdpZHRoID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIC8v5aaC5p6c5pu055+t77yM5YmH55So5a6a5a+sXHJcbiAgICAgICAgICAgICAgICBmaW5hbFcgPSBkci53aWR0aDtcclxuICAgICAgICAgICAgICAgIGZpbmFsSCA9IHJoIC8gcncgKiBmaW5hbFc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY3ZzLmRlc2lnblJlc29sdXRpb24gPSBjYy5zaXplKGZpbmFsVywgZmluYWxIKTtcclxuICAgICAgICAgICAgY3ZzLm5vZGUud2lkdGggPSBmaW5hbFc7XHJcbiAgICAgICAgICAgIGN2cy5ub2RlLmhlaWdodCA9IGZpbmFsSDtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL0Vycm9yL0Vycm9yTWFuYWdlci50c1wiIC8+XHJcbm5hbWVzcGFjZSBmY2Mge1xyXG4gICAgLyoqXHJcbiAgICAgKiBAQXV0aG9yIFhJQU8tTEktUElOXHJcbiAgICAgKiBARGVzY3JpcHRpb24g55u05byP5qij5byP5pu05pawXHJcbiAgICAgKiBARGF0ZSAyMDIxLTA0LTE0IOS4i+WNiCAyMDoyNFxyXG4gICAgICogQFZlcnNpb24gMS4xXHJcbiAgICAgKi9cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgVmVydGljYWxTdHlsZSBpbXBsZW1lbnRzIElGLklTY2VuZVN0eWxlIHtcclxuXHJcbiAgICAgICAgcHVibGljIGV4ZWN1dGlvblN0eWxlKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKSB7XHJcblxyXG4gICAgICAgICAgICBFcnJvck1hbmFnZXIuaW5zdGFuY2UuZXhlY3V0ZUVycm9yKFwi5bCa5pyq5a6M5oiQ55u05ZCR5piv6YWN5qih5byPXCIpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vRW51bS9TY2VuZVN0eWxlVHlwZS50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL1NjZW5lU3R5bGUvQXV0b1N0eWxlLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vU2NlbmVTdHlsZS9Ib3Jpem9udGFsU3R5bGUudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9TY2VuZVN0eWxlL1ZlcnRpY2FsU3R5bGUudHNcIiAvPlxyXG5uYW1lc3BhY2UgZmNjIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBBdXRob3IgWElBTy1MSS1QSU5cclxuICAgICAqIEBEZXNjcmlwdGlvbiDkvp3nhafliJ3lp4voqK3lrprlsI3mh4nnmoTmm7TmlrDmqKHlvI8s5pu05paw55W25YmN6YGK5oiy5aC05pmvXHJcbiAgICAgKiBARGF0ZSAyMDIxLTA0LTE0IOS4i+WNiCAyMDoyNFxyXG4gICAgICogQFZlcnNpb24gMS4xXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBjbGFzcyBTY2VuZVN0eWxlSGFuZGxlciB7XHJcblxyXG4gICAgICAgIHByaXZhdGUgYXV0b1N0eWxlOiBBdXRvU3R5bGU7XHJcbiAgICAgICAgcHJpdmF0ZSBob3Jpem9udGFsU3R5bGU6IEhvcml6b250YWxTdHlsZTtcclxuICAgICAgICBwcml2YXRlIHZlcnRpY2FsU3R5bGU6IFZlcnRpY2FsU3R5bGU7XHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBzY2VuZU1hbmFnZXI6IElGLklTY2VuZU1hbmFnZXI7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKHNjZW5lTWFuYWdlcjogSUYuSVNjZW5lTWFuYWdlcikge1xyXG4gICAgICAgICAgICB0aGlzLnNjZW5lTWFuYWdlciA9IHNjZW5lTWFuYWdlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOWMueWwjeWwjeaHieeahOabtOaWsOmhnizlgZrnm7jlsI3mh4nnmoTmm7TmlrBcclxuICAgICAgICAgKiBAcGFyYW0ge2ZjYy50eXBlLlNjZW5lU3R5bGVUeXBlIHwgZmNjLklGLklTY2VuZVN0eWxlfSBzY2VuZVN0eWxlIC0g5bCN5oeJ55qE55qE5qij5byPIG9yIOiHquiogue+qeaoo+W8j1xyXG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSB3aWR0aCAtIOWvrFxyXG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHQgLSDpq5hcclxuICAgICAgICAgKi9cclxuICAgICAgICBnZXRTdHlsZShzY2VuZVN0eWxlOiB0eXBlLlNjZW5lU3R5bGVUeXBlIHwgSUYuSVNjZW5lU3R5bGUsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoc2NlbmVTdHlsZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSB0eXBlLlNjZW5lU3R5bGVUeXBlLkFVVE86XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmF1dG9TdHlsZSkgdGhpcy5hdXRvU3R5bGUgPSBuZXcgQXV0b1N0eWxlKHRoaXMuc2NlbmVNYW5hZ2VyKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmF1dG9TdHlsZS5leGVjdXRpb25TdHlsZSh3aWR0aCwgaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgdHlwZS5TY2VuZVN0eWxlVHlwZS5IT1JJWk9OVEFMOlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5ob3Jpem9udGFsU3R5bGUpIHRoaXMuaG9yaXpvbnRhbFN0eWxlID0gbmV3IEhvcml6b250YWxTdHlsZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaG9yaXpvbnRhbFN0eWxlLmV4ZWN1dGlvblN0eWxlKHdpZHRoLCBoZWlnaHQpXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIHR5cGUuU2NlbmVTdHlsZVR5cGUuVkVSVElDQUw6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLnZlcnRpY2FsU3R5bGUpIHRoaXMudmVydGljYWxTdHlsZSA9IG5ldyBWZXJ0aWNhbFN0eWxlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52ZXJ0aWNhbFN0eWxlLmV4ZWN1dGlvblN0eWxlKHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdCA6XHJcbiAgICAgICAgICAgICAgICAgICAgc2NlbmVTdHlsZS5leGVjdXRpb25TdHlsZSh3aWR0aCwgaGVpZ2h0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9FcnJvci9FbnVtL0Vycm9yVHlwZS50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9FcnJvci9FcnJvck1hbmFnZXIudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vTG9hZC9Mb2FkUmVzTWFuYWdlci50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0VudW0vU2NlbmVTdHlsZVR5cGUudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9FbnVtL1NjZW5lRGlyZWN0aW9uVHlwZS50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0lTY2VuZS9JU2NlbmVNYW5hZ2VyLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vU2NlbmVTaXplQ2hhbmdlTGlzdGVuZXIudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9TY2VuZVN0eWxlSGFuZGxlci50c1wiIC8+XHJcblxyXG5uYW1lc3BhY2UgZmNjIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBBdXRob3IgWElBTy1MSS1QSU5cclxuICAgICAqIEBEZXNjcmlwdGlvbiDloLTmma/nrqHnkIblmaggOiDoh6rli5XljLnphY3pgYrmiLLlr6zpq5gs55uj6IG955W25YmN546p5a626YGK546p5qih5byPKOapq+W8j29y55u05byPKVxyXG4gICAgICogQERhdGUgMjAyMS0wNC0xNCDkuIvljYggMjA6MjRcclxuICAgICAqIEBWZXJzaW9uIDEuMVxyXG4gICAgICovXHJcbiAgICBleHBvcnQgY2xhc3MgU2NlbmVNYW5hZ2VyIGltcGxlbWVudHMgSUYuSVNjZW5lTWFuYWdlciB7XHJcblxyXG4gICAgICAgIHByaXZhdGUgY29uZmlnTWFuYWdlcjogSUYuSUNvbmZpZ01hbmFnZXI7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBJRi5JU2NlbmVNYW5hZ2VyO1xyXG4gICAgICAgIHByaXZhdGUgc3R5bGU6IHR5cGUuU2NlbmVTdHlsZVR5cGUgfCBJRi5JU2NlbmVTdHlsZTtcclxuICAgICAgICBwcml2YXRlIF9kZXNpZ25XaWR0aDogbnVtYmVyO1xyXG4gICAgICAgIHByaXZhdGUgX2Rlc2lnbkhlaWdodDogbnVtYmVyO1xyXG4gICAgICAgIHByaXZhdGUgc2NlbmVTaXplQ2hhbmdlTGlzdGVuZXI6IFNjZW5lU2l6ZUNoYW5nZUxpc3RlbmVyO1xyXG4gICAgICAgIHByaXZhdGUgc2NlbmVTdHlsZUhhbmRsZXI6IFNjZW5lU3R5bGVIYW5kbGVyO1xyXG4gICAgICAgIHByaXZhdGUgX3NjZW5lRGlyZWN0aW9uOiB0eXBlLlNjZW5lRGlyZWN0aW9uVHlwZTtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBjb25zdHJ1Y3Rvcihjb25maWdNYW5hZ2VyOiBJRi5JQ29uZmlnTWFuYWdlcikge1xyXG4gICAgICAgICAgICB0aGlzLmNvbmZpZ01hbmFnZXIgPSBjb25maWdNYW5hZ2VyO1xyXG4gICAgICAgICAgICB0aGlzLl9kZXNpZ25XaWR0aCA9IDEyODA7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/liJ3lp4vpoJDoqK3lr6zluqZcclxuICAgICAgICAgICAgdGhpcy5fZGVzaWduSGVpZ2h0ID0gNzIwOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5Yid5aeL6aCQ6Kit6auY5bqmXHJcbiAgICAgICAgICAgIHRoaXMuc2NlbmVTaXplQ2hhbmdlTGlzdGVuZXIgPSBuZXcgU2NlbmVTaXplQ2hhbmdlTGlzdGVuZXIoY29uZmlnTWFuYWdlciwgdGhpcyk7XHJcbiAgICAgICAgICAgIHRoaXMuc2NlbmVTdHlsZUhhbmRsZXIgPSBuZXcgU2NlbmVTdHlsZUhhbmRsZXIodGhpcyk7ICAgICAgICAgICAvL+WvpuS+i+WMlnNjZW5l5qij5byP5bCO5ZCR5ZmoXHJcbiAgICAgICAgICAgIHRoaXMuc3R5bGUgPSB0eXBlLlNjZW5lU3R5bGVUeXBlLkhPUklaT05UQUw7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+WIneWni+mgkOiorXNjZW5l55Wr6Z2i6Kq/5pW055qE5qih5byPXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiAg5oe25ryi5Yqg6LyJXHJcbiAgICAgICAgICogIOWIneWni+WMlizlj6rorpPkuIDlgIvlsIjmoYjnlKLnlJ/kuIDmrKHoqbJjbGFzc1xyXG4gICAgICAgICAqIEBwYXJhbSB7ZmNjLklGLklDb25maWdNYW5hZ2VyfSBjb25maWdNYW5hZ2VyXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBzZXRJbnN0YW5jZShjb25maWdNYW5hZ2VyOiBJRi5JQ29uZmlnTWFuYWdlcikge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuX2luc3RhbmNlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9pbnN0YW5jZSA9IG5ldyBTY2VuZU1hbmFnZXIoY29uZmlnTWFuYWdlcik7XHJcbiAgICAgICAgICAgICAgICBzY2VuZU1nciA9IHRoaXMuX2luc3RhbmNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiAg542y5Y+W5bey57aT5Yid5aeL5YyW55qE6Z2c5oWL5a+m5L6LY2xhc3NcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgc3RhdGljIGdldCBpbnN0YW5jZSgpOiBJRi5JU2NlbmVNYW5hZ2VyIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLl9pbnN0YW5jZSkge1xyXG4gICAgICAgICAgICAgICAgRXJyb3JNYW5hZ2VyLmluc3RhbmNlLmV4ZWN1dGVFcnJvcih0eXBlLkVycm9yVHlwZS5TQ0VORV9GVywgXCLoqbLpoZ7lsJrmnKrlr6bkvovljJZcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogY2F2ZXJzIOioreioiOWvrOW6plxyXG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSB3aWR0aCAtIOWvrOW6plxyXG4gICAgICAgICAqIEByZXR1cm4ge3RoaXN9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgc2V0RGVzaWduV2lkdGgod2lkdGg6IG51bWJlcik6IHRoaXMge1xyXG4gICAgICAgICAgICB0aGlzLl9kZXNpZ25XaWR0aCA9IHdpZHRoO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIGNhdmVycyDoqK3oqIjpq5jluqZcclxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0IC0g6auY5bqmXHJcbiAgICAgICAgICogQHJldHVybiB7dGhpc31cclxuICAgICAgICAgKi9cclxuICAgICAgICBzZXREZXNpZ25IZWlnaHQoaGVpZ2h0OiBudW1iZXIpOiB0aGlzIHtcclxuICAgICAgICAgICAgdGhpcy5fZGVzaWduSGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOabtOaWsOeVtuWJjeekuumFjeWvrOmrmCzmnIPkv53lrZjkuIrmrKHnmoRzY2VuZeabtOWLleaooeW8j1xyXG4gICAgICAgICAqIOWmguS4jea3u+WKoOWPg+aVuCznrKzkuIDmrKHlsIfmnIPkvb/nlKjpoJDoqK3mqKHlvI/mm7Tli5VcclxuICAgICAgICAgKiBAcGFyYW0ge1NjZW5lU3R5bGVUeXBlIHwgRnVuY3Rpb259IHN0eWxlIC0g5Y+v6Ieq5a6a576p5pu05YuV5qij5byPLOS9humcgOWvpuS9nCjku4vpnaIpSVNjZW5lU3R5bGVcclxuICAgICAgICAgKiBAcmV0dXJuIHt0aGlzfVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHVwZGF0ZVNpemUoc3R5bGU/OiB0eXBlLlNjZW5lU3R5bGVUeXBlIHwgSUYuSVNjZW5lU3R5bGUpOiB0aGlzIHtcclxuICAgICAgICAgICAgaWYgKHN0eWxlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0eWxlID0gc3R5bGU7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHN0eWxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSB0eXBlLlNjZW5lU3R5bGVUeXBlLkhPUklaT05UQUw6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3NjZW5lRGlyZWN0aW9uID0gdHlwZS5TY2VuZURpcmVjdGlvblR5cGUuUE9SVFJBSVQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgdHlwZS5TY2VuZVN0eWxlVHlwZS5WRVJUSUNBTDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2NlbmVEaXJlY3Rpb24gPSB0eXBlLlNjZW5lRGlyZWN0aW9uVHlwZS5MQU5EU0NBUEU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgdHlwZS5TY2VuZVN0eWxlVHlwZS5BVVRPOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuipsuabtOaWsOaooeW8j+WwmuacquWMheWQq+WcqOahhuaetuS4rSzoq4vnorroqo3mmK/lkKbmnInlr6bkvZxJU2NlbmVTdHlsZVwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnNjZW5lU3R5bGVIYW5kbGVyLmdldFN0eWxlKHRoaXMuc3R5bGUsIHRoaXMuX2Rlc2lnbldpZHRoLCB0aGlzLl9kZXNpZ25IZWlnaHQpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOebo+iBveeVtuWJjWNhdmVyc+aYr+WQpuacieabtOWLleWkp+WwjyzlpoLmnpzmnInlsIfmnIPoh6rli5Xmm7TmlrDnlbbliY3mmK/phY3lr6zpq5hcclxuICAgICAgICAgKiDlsIfmnIPmr5TnhafkuIrmrKHmm7Tli5XnmoTmqKPlvI/pgLLooYzmm7Tli5VcclxuICAgICAgICAgKiDlpoLmnpzpnIDmsYLmm7Tli5XmqKPlvI8s6aCI5YWI5pu05pawIHVwZGF0ZVNpemUoKVxyXG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSB0aW1lIDog5pu05paw55qE6aC7546HIOWWruS9jeavq+enkiBtc1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzdGFydExpc3RlbmVyKHRpbWU6IG51bWJlcikge1xyXG4gICAgICAgICAgICB0aGlzLnNjZW5lU2l6ZUNoYW5nZUxpc3RlbmVyLmRlc2lnblNjZW5lRXZlbnRMaXN0ZW5lcih0aW1lKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOabtOaPm+WgtOaZr1xyXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIDog5aC05pmv6LOH5rqQ5ZCN56ix54K65L2gUmVz5YuV5oWL5Yqg6LyJ55qE6Ieq6KiC576p55qEc2NlbmXlkI3nqLFcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgY2hhbmdlU2NlbmUobmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIGlmICghTG9hZFJlc01hbmFnZXIuaW5zdGFuY2Uuc2NlbmVSZXMuaGFzKG5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICBFcnJvck1hbmFnZXIuaW5zdGFuY2UuZXhlY3V0ZUVycm9yKHR5cGUuRXJyb3JUeXBlLlNDRU5FX0ZXLCBcIuWKoOi8ieS4jeWIsOS9oOeahFNjZW5l6LOH5rqQLOiri+aqouafpeipsuizh+a6kOWQjeaYr+WQpuato+eiulwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5ydW5TY2VuZShMb2FkUmVzTWFuYWdlci5pbnN0YW5jZS5zY2VuZVJlcy5nZXQobmFtZSkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5riF6Zmk6Kmyc2NlbmXmiYDmnInli5XkvZxcclxuICAgICAgICAgKiBAcGFyYW0gc2NlbmV7Y2MuQ29tcG9uZW50fSAtIOimgea4hemZpOeahHNjZW5lIGNsYXNzXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHJlbW92ZVNjZW5lKHNjZW5lOiBjYy5Db21wb25lbnQpIHtcclxuICAgICAgICAgICAgc2NlbmUuZGVzdHJveSgpO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIGdldCBzY2VuZURpcmVjdGlvbigpOiB0eXBlLlNjZW5lRGlyZWN0aW9uVHlwZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zY2VuZURpcmVjdGlvbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldCBzY2VuZURpcmVjdGlvbih2YWx1ZTogdHlwZS5TY2VuZURpcmVjdGlvblR5cGUpIHtcclxuICAgICAgICAgICAgdGhpcy5fc2NlbmVEaXJlY3Rpb24gPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vRXJyb3IvRW51bS9FcnJvclR5cGUudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vRXJyb3IvRXJyb3JNYW5hZ2VyLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vSVNsb3RTdHlsZU1hbmFnZXIudHNcIiAvPlxyXG5cclxubmFtZXNwYWNlIGZjYyB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAQXV0aG9yIFhJQU8tTEktUElOXHJcbiAgICAgKiBARGVzY3JpcHRpb24g6ICB6JmO5qmf566h55CG5ZmoIDog566h55CG6ICB6JmO5qmf5qij5byPLOWft+ihjOmAn+W6pizmlYjmnpxcclxuICAgICAqIEBEYXRlIDIwMjEtMDQtMTQg5LiL5Y2IIDIwOjI0XHJcbiAgICAgKiBAVmVyc2lvbiAxLjFcclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGNsYXNzIFNsb3RTdHlsZU1hbmFnZXIgaW1wbGVtZW50cyBJRi5JU2xvdFN0eWxlTWFuYWdlciB7XHJcblxyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogSUYuSVNsb3RTdHlsZU1hbmFnZXI7XHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBjb25maWdNYW5hZ2VyOiBJRi5JQ29uZmlnTWFuYWdlcjtcclxuICAgICAgICBwcml2YXRlIHRlbXBsYXRlOiBuZXcoc3R5bGVEYXRhOiBJRi5JU2xvdFNldHRpbmcsY29uZmlnTWFuYWdlcjpJRi5JQ29uZmlnTWFuYWdlcikgPT4gSUYuSVNsb3RcclxuICAgICAgICBwcml2YXRlIF9zbG90OiBJRi5JU2xvdDtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBjb25zdHJ1Y3Rvcihjb25maWdNYW5hZ2VyOiBJRi5JQ29uZmlnTWFuYWdlcikge1xyXG4gICAgICAgICAgICB0aGlzLmNvbmZpZ01hbmFnZXIgPSBjb25maWdNYW5hZ2VyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogIOaHtua8ouWKoOi8iVxyXG4gICAgICAgICAqICDliJ3lp4vljJYs5Y+q6K6T5LiA5YCL5bCI5qGI55Si55Sf5LiA5qyh6KmyY2xhc3NcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgc3RhdGljIHNldEluc3RhbmNlKGNvbmZpZ01hbmFnZXI6IElGLklDb25maWdNYW5hZ2VyKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5faW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlID0gbmV3IFNsb3RTdHlsZU1hbmFnZXIoY29uZmlnTWFuYWdlcik7XHJcbiAgICAgICAgICAgICAgICBzbG90U3R5bGVNZ3IgPSB0aGlzLl9pbnN0YW5jZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogIOeNsuWPluW3sue2k+WIneWni+WMlueahOmdnOaFi+WvpuS+i2NsYXNzXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBnZXQgaW5zdGFuY2UoKTogSUYuSVNsb3RTdHlsZU1hbmFnZXIge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuX2luc3RhbmNlKSB7XHJcbiAgICAgICAgICAgICAgICBFcnJvck1hbmFnZXIuaW5zdGFuY2UuZXhlY3V0ZUVycm9yKHR5cGUuRXJyb3JUeXBlLlNMT1RfU1RZTEVfRlcsIFwi6Kmy6aGe5bCa5pyq5a+m5L6L5YyWXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOa3u+WKoOWft+ihjOa1geeoi+eahGNsYXNzIOmcgOe5vOaJvyBJU2xvdFxyXG4gICAgICAgICAqIEBwYXJhbSB7QVNsb3R9IHNsb3RUZW1wbGF0ZVxyXG4gICAgICAgICAqIEByZXR1cm4ge3RoaXN9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHNldFNsb3RUZW1wbGF0ZTxUIGV4dGVuZHMgbmV3KHN0eWxlRGF0YTogSUYuSVNsb3RTZXR0aW5nLGNvbmZpZ01hbmFnZXI6SUYuSUNvbmZpZ01hbmFnZXIpID0+IElGLklTbG90PihzbG90VGVtcGxhdGU6IFQpOiB0aGlzIHtcclxuICAgICAgICAgICAgdGhpcy50ZW1wbGF0ZSA9IHNsb3RUZW1wbGF0ZTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDmt7vliqBzbG905Li75LqL5Lu25qij5byP6Kit5a6aXHJcbiAgICAgICAgICogQHBhcmFtIHt7bmV3KHNsb3RTdHlsZU1hbmFnZXI6IGZjYy5JRi5JU2xvdFN0eWxlTWFuYWdlcik6IFR9fSBzbG90U2V0dGluZ1xyXG4gICAgICAgICAqIEByZXR1cm4ge1R9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgc2V0U2xvdFN0eWxlPFQgZXh0ZW5kcyBJRi5JU2xvdFNldHRpbmc+KHNsb3RTZXR0aW5nPzogbmV3KHNsb3RTdHlsZU1hbmFnZXI6IElGLklTbG90U3R5bGVNYW5hZ2VyKSA9PiBUKTogVCB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgc2xvdFNldHRpbmcodGhpcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDliJ3lp4vljJZTbG90IDog5bCHU2xvdOioreWumuWPg+aVuOe1puS6iFNsb3TlgZrliJ3lp4vomZXnkIZcclxuICAgICAgICAgKi9cclxuICAgICAgICBidWlsZChzbG90U2V0dGluZzogSUYuSVNsb3RTZXR0aW5nKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy50ZW1wbGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgRXJyb3JNYW5hZ2VyXHJcbiAgICAgICAgICAgICAgICAgICAgLmluc3RhbmNlXHJcbiAgICAgICAgICAgICAgICAgICAgLmV4ZWN1dGVFcnJvcih0eXBlLkVycm9yVHlwZS5VTkRFRklORURfRlcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiU2xvdCBUZW1wbGF0ZSDmnKros6bkuogs6ZyA5bmr5a6a5oiW5a+m5YGa5LiA5YCLU2xvdFRlbXBsYXRlXCIpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fc2xvdCA9IG5ldyB0aGlzLnRlbXBsYXRlKHNsb3RTZXR0aW5nLHRoaXMuY29uZmlnTWFuYWdlcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0IHNsb3QoKTogSUYuSVNsb3Qge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc2xvdDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgZmNjIHtcclxuXHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIHR5cGUge1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAQXV0aG9yIFhJQU8tTEktUElOXHJcbiAgICAgICAgICogQERlc2NyaXB0aW9uIOmBiuaIsuiHquWLleeLgOaFi+eorumhnlxyXG4gICAgICAgICAqIEBEYXRlIDIwMjEtMDQtMTQg5LiL5Y2IIDIwOjI0XHJcbiAgICAgICAgICogQFZlcnNpb24gMS4xXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZXhwb3J0IGVudW0gQXV0b1R5cGUge1xyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICog54Sh6ZmQQVVUT1xyXG4gICAgICAgICAgICAgKiBAdHlwZSB7QXV0b1R5cGUuQVVUT31cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIEFVVE8gPSAtMSxcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiDnm7TliLBGcmVl5Ye654++5b6MLOe1kOadn0FVVE/ni4DmhYtcclxuICAgICAgICAgICAgICogQHR5cGUge0F1dG9UeXBlLkFVVE99XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBGUkVFX0VORCA9IC0yLFxyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIEFVVE8gNTDmrKFcclxuICAgICAgICAgICAgICogQHR5cGUge0F1dG9UeXBlLkFVVE9fNTB9XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBBVVRPXzUwID0gNTAsXHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogQVVUTyAxMDDmrKFcclxuICAgICAgICAgICAgICogQHR5cGUge0F1dG9UeXBlLkFVVE9fMTAwfVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgQVVUT18xMDAgPSAxMDAsXHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogQVVUTyA1MDDmrKFcclxuICAgICAgICAgICAgICogQHR5cGUge0F1dG9UeXBlLkFVVE9fMTAwfVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgQVVUT181MDAgPSA1MDAsXHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogQVVUTyAxMDAw5qyhXHJcbiAgICAgICAgICAgICAqIEB0eXBlIHtBdXRvVHlwZS5BVVRPXzEwMDB9XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBBVVRPXzEwMDAgPSAxMDAwXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIGZjYyB7XHJcblxyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSB0eXBlIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAQXV0aG9yIFhJQU8tTEktUElOXHJcbiAgICAgICAgICogQERlc2NyaXB0aW9uIFRPRE9cclxuICAgICAgICAgKiBARGF0ZSAyMDIxLTA2LTE1IOS4i+WNiCAwNjowMFxyXG4gICAgICAgICAqIEBWZXJzaW9uIDEuMFxyXG4gICAgICAgICAqL1xyXG5cclxuICAgICAgICBleHBvcnQgZW51bSBMYW5ndWFnZVR5cGUge1xyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICog5Y+w54GjXHJcbiAgICAgICAgICAgICAqIEB0eXBlIHtMYW5ndWFnZVR5cGUuVEFJV0FOfVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgVEFJV0FOID0gXCJOVERcIixcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiDkuK3lnItcclxuICAgICAgICAgICAgICogQHR5cGUge0xhbmd1YWdlVHlwZS5DSElORVNFfVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgQ0hJTkVTRSA9IFwiQ05ZXCIsXHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICog5rOw5ZyLXHJcbiAgICAgICAgICAgICAqIEB0eXBlIHtMYW5ndWFnZVR5cGUuVEhBSUxBTkR9XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBUSEFJTEFORCA9IFwiVEhCXCIsXHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICog576O5ZyLXHJcbiAgICAgICAgICAgICAqIEB0eXBlIHtMYW5ndWFnZVR5cGUuQU1FUklDQX1cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIEFNRVJJQ0EgPSBcIlVTRFwiLFxyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIOi2iuWNl1xyXG4gICAgICAgICAgICAgKiBAdHlwZSB7TGFuZ3VhZ2VUeXBlLlZJRVROQU19XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBWSUVUTkFNID0gXCJWTkRcIixcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiDljbDlsLxcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIElORE9ORVNJQSA9IFwiSURSXCIsXHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICog6aas5L6G6KW/5LqeXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBNQUxBWVNJQSA9IFwiTVlSXCIsXHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9BdWRpby9BdWRpb01hbmFnZXIudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vRXJyb3IvRXJyb3JNYW5hZ2VyLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0xpc3RlbmVyL0V2ZW50TWFuYWdlci50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9Mb2FkL0xvYWRSZXNNYW5hZ2VyLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL1Byb2Nlc3MvUHJvY2Vzc01hbmFnZXIudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vU2NlbmUvU2NlbmVNYW5hZ2VyLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL1Nsb3QvU2xvdFN0eWxlTWFuYWdlci50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9Qcm9jZXNzL0VudW0vQXV0b1R5cGUudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9JQ29uZmlnL0lTbG90Q29uZmlnTWFuYWdlci50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9MYW5ndWFnZS9FbnVtL0xhbmd1YWdlVHlwZS50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9Qcm9jZXNzL0VudW0vQXV0b1R5cGUudHNcIiAvPlxyXG5uYW1lc3BhY2UgZmNjIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBBdXRob3IgWElBTy1MSS1QSU5cclxuICAgICAqIEBEZXNjcmlwdGlvbiDpgYrmiLLliJ3lp4voqK3lrpos5Lim6YCP6YGOYnVpbGRlcuWKoOi8ieaJgOaciU1hbmFnZXJcclxuICAgICAqIEBEYXRlIDIwMjEtMDUtMTMg5LiK5Y2IIDEwOjI0XHJcbiAgICAgKiBAVmVyc2lvbiAxLjFcclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGNsYXNzIFNsb3RDb25maWdNYW5hZ2VyIGltcGxlbWVudHMgSUYuSVNsb3RDb25maWdNYW5hZ2VyIHtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBJRi5JU2xvdENvbmZpZ01hbmFnZXI7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOi8ieWFpeWklumDqOizh+a6kFVSTFxyXG4gICAgICAgICAqIEB0eXBlIHtzdHJpbmd9XHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cclxuICAgICAgICBwcml2YXRlIF9leHRlcm5hbGx5TG9hZFVSTDogc3RyaW5nO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDnlbbliY3pgYrmiLLlkI3nqLFcclxuICAgICAgICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHJpdmF0ZSBfZ2FtZU51bWJlcjogbnVtYmVyO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDmmK/lkKblnKjpgYrmiLLpgLLlhaXlvozplovllZ9hdXRv54uA5oWLXHJcbiAgICAgICAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cclxuICAgICAgICBwcml2YXRlIF9pc0F1dG86IGJvb2xlYW47XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOWIneWni+mBiuaIsuacgOWIneeahGF1dG/mrKHmlbhcclxuICAgICAgICAgKiBAdHlwZSB7QXV0b1R5cGV9XHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cclxuICAgICAgICBwcml2YXRlIF9hdXRvQ291bnQ6IHR5cGUuQXV0b1R5cGU7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOaYr+WQpuWcqOmBiuaIsumAsuWFpeW+jOaYr+WKoOmAn+eahOeLgOaFi1xyXG4gICAgICAgICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHJpdmF0ZSBfaXNTcGVlZFVwOiBib29sZWFuO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDliJ3lp4vog4zmma/pn7PmqILpn7Pph48o6Kmy6Z+z6YeP5bCH5pyD5oiQ54K6QXVkaW9NYW5hZ2Vy5YWn6aCQ6Kit6Z+z6YePKVxyXG4gICAgICAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cclxuICAgICAgICBwcml2YXRlIF9tdXNpY1ZvbHVtZTogbnVtYmVyO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDliJ3lp4vlsIfog4zmma/pn7PmqILpnZzpn7NcclxuICAgICAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHByaXZhdGUgX2lzTXVzaWNPbk11dGU6IGJvb2xlYW47XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOWIneWni+aViOaenOmfs+mHjyjoqbLpn7Pph4/lsIfmnIPmiJDngrpBdWRpb01hbmFnZXLlhafpoJDoqK3pn7Pph48pXHJcbiAgICAgICAgICogQHR5cGUge251bWJlcn1cclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHByaXZhdGUgX2VmZmVjdFZvbHVtZTogbnVtYmVyO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDliJ3lp4vlsIfmlYjmnpzpn7PmlYjpnZzpn7NcclxuICAgICAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHByaXZhdGUgX2lzRWZmZWN0T25NdXRlOiBib29sZWFuO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDnlbbliY3oqp7ns7tcclxuICAgICAgICAgKiBAdHlwZSB7TGFuZ3VhZ2VUeXBlfVxyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHJpdmF0ZSBfbGFuZ3VhZ2U6IHR5cGUuTGFuZ3VhZ2VUeXBlIHwgc3RyaW5nO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOi/lOWbnummlumggVVSTFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHByaXZhdGUgX2JhY2tIb21lVVJMOiBzdHJpbmc7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOaYr+WQpuimgemWi+WVn0ZyYW1ld29yayBEZWJ1Z+aooeW8j1xyXG4gICAgICAgICAqIOazqOaEjzrpgYrmiLLmraPlvI/kuIrnt5rpoIjpl5zplolcclxuICAgICAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHByaXZhdGUgX2lzRnJhbWV3b3JrRGVidWc6IGJvb2xlYW47XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIGNvY29zIOahhuaetiBkZWJ1Z+ioreWumlxyXG4gICAgICAgICAqIEBkZWZhdWx0IDogSU5GT1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHByaXZhdGUgX2NvY29zRGVidWdTZXR0aW5nOiBjYy5kZWJ1Zy5EZWJ1Z01vZGU7XHJcblxyXG4gICAgICAgIHByaXZhdGUgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2dhbWVOdW1iZXIgPSBudWxsOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/oqbLpgYrmiLLlkI3nqLFcclxuICAgICAgICAgICAgdGhpcy5fZXh0ZXJuYWxseUxvYWRVUkwgPSBcIlwiOyAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v6LyJ5YWl5aSW6YOo6LOH5rqQVVJMXHJcbiAgICAgICAgICAgIHRoaXMuX2lzQXV0byA9IGZhbHNlOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/mmK/lkKboh6rli5VcclxuICAgICAgICAgICAgdGhpcy5faXNTcGVlZFVwID0gZmFsc2U7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+aYr+WQpuWKoOmAn1xyXG4gICAgICAgICAgICB0aGlzLl9hdXRvQ291bnQgPSB0eXBlLkF1dG9UeXBlLkFVVE87ICAgICAgICAgICAgICAgICAgIC8v5Yid5aeL6Ieq5YuV54uA5oWLXHJcbiAgICAgICAgICAgIHRoaXMuX211c2ljVm9sdW1lID0gMTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/pgYrmiLLpn7Pph49cclxuICAgICAgICAgICAgdGhpcy5fZWZmZWN0Vm9sdW1lID0gMTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+aViOaenOmfs+mHj1xyXG4gICAgICAgICAgICB0aGlzLl9pc011c2ljT25NdXRlID0gZmFsc2U7ICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5piv5ZCm5bCH6Z+z5qiC6Z2c6Z+zXHJcbiAgICAgICAgICAgIHRoaXMuX2lzRWZmZWN0T25NdXRlID0gZmFsc2U7ICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/mmK/lkKblsIfpn7PmlYjpnZzpn7NcclxuICAgICAgICAgICAgdGhpcy5fbGFuZ3VhZ2UgPSB0eXBlLkxhbmd1YWdlVHlwZS5DSElORVNFICAgICAgICAgICAgICAvL+WIneWni+eVtuWJjeiqnuezuyzlsIfkvp3mk5roqbLoqp7ns7ss6LyJ5YWl5omA5pyJ6ICm5ZCI5ZyW5qqUXHJcbiAgICAgICAgICAgIHRoaXMuX2JhY2tIb21lVVJMID0gbnVsbDsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/liJ3lp4vov5Tlm57pppbpoIFVUkxcclxuICAgICAgICAgICAgdGhpcy5fY29jb3NEZWJ1Z1NldHRpbmcgPSBjYy5kZWJ1Zy5EZWJ1Z01vZGUuSU5GTyAgICAgICAvL+ioree9rmNvY29zIGRlYnVnIOaooeW8j1xyXG4gICAgICAgICAgICB0aGlzLl9pc0ZyYW1ld29ya0RlYnVnID0gdHJ1ZTsgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5piv5ZCm6KaB6ZaL5ZWf5qGG5p6255qERGVidWfmqKHlvI9cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOaHtua8ouWKoOi8iVxyXG4gICAgICAgICAqIOWIneWni+WMlizlj6rorpPkuIDlgIvlsIjmoYjlj6rmnInkuIDmrKHnlKLnlJ/mraRjbGFzc1xyXG4gICAgICAgICAqIEByZXR1cm5zIHtTbG90Q29uZmlnTWFuYWdlcn1cclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgc3RhdGljIGdldCBpbnN0YW5jZSgpOiBJRi5JU2xvdENvbmZpZ01hbmFnZXIge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuX2luc3RhbmNlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9pbnN0YW5jZSA9IG5ldyBTbG90Q29uZmlnTWFuYWdlcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOa3u+WKoOmBiuaIsuWQjeeosVxyXG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBuYW1lIC0g6YGK5oiy5ZCN56ixXHJcbiAgICAgICAgICogQGRlZmF1bHQgbnVsbFxyXG4gICAgICAgICAqIEByZXR1cm5zIHt0aGlzfVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHNldEdhbWVOdW1iZXIobmFtZTogbnVtYmVyKTogdGhpcyB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9nYW1lTnVtYmVyID0gbmFtZTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog6Kit572u5Yid5aeL6aCQ6Kit6Z+z6YePXHJcbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IG51bWJlciAtIOmfs+mHjyAwfjFcclxuICAgICAgICAgKiBAZGVmYXVsdCAxXHJcbiAgICAgICAgICogQHJldHVybnMge3RoaXN9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgc2V0TXVzaWNWb2x1bWUobnVtYmVyOiBudW1iZXIpOiB0aGlzIHtcclxuICAgICAgICAgICAgdGhpcy5fbXVzaWNWb2x1bWUgPSBudW1iZXJcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDoqK3nva7liJ3lp4vpoJDoqK3mlYjmnpzpn7Pph49cclxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gbnVtYmVyIC0g6Z+z6YePIDB+MVxyXG4gICAgICAgICAqIEBkZWZhdWx0IDFcclxuICAgICAgICAgKiBAcmV0dXJucyB7dGhpc31cclxuICAgICAgICAgKi9cclxuICAgICAgICBzZXRFZmZlY3RWb2x1bWUobnVtYmVyOiBudW1iZXIpOiB0aGlzIHtcclxuICAgICAgICAgICAgdGhpcy5fZWZmZWN0Vm9sdW1lID0gbnVtYmVyO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOWIneWni+Wwh+iDjOaZr+mfs+aogumdnOmfs1xyXG4gICAgICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gT25NdXRlIC0g5piv5ZCm6Z2c6Z+zXHJcbiAgICAgICAgICogQGRlZmF1bHQgZmFsc2VcclxuICAgICAgICAgKiBAcmV0dXJucyB7dGhpc31cclxuICAgICAgICAgKi9cclxuICAgICAgICBzZXRNdXNpY09uTXV0ZShPbk11dGU6IGJvb2xlYW4pOiB0aGlzIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX2lzTXVzaWNPbk11dGUgPSBPbk11dGU7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOWIneWni+aYr+WQpuWwh+aViOaenOmfs+aViOmdnOmfs1xyXG4gICAgICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gT25NdXRlIC0g5piv5ZCm6Z2c6Z+zXHJcbiAgICAgICAgICogQGRlZmF1bHQgZmFsc2VcclxuICAgICAgICAgKiBAcmV0dXJucyB7dGhpc31cclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgc2V0RWZmZWN0T25NdXRlKE9uTXV0ZTogYm9vbGVhbik6IHRoaXMge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5faXNFZmZlY3RPbk11dGUgPSBPbk11dGU7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOWIneWni+mBiuaIsuacgOWIneeahGF1dG/mrKHmlbhcclxuICAgICAgICAgKiBAcGFyYW0ge0F1dG9UeXBlfSB0eXBlXHJcbiAgICAgICAgICogQGRlZmF1bHQgdHlwZS5BdXRvVHlwZS5BVVRPXHJcbiAgICAgICAgICogQHJldHVybnMge3RoaXN9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgc2V0QXV0b0NvbnQodHlwZTogdHlwZS5BdXRvVHlwZSk6IHRoaXMge1xyXG4gICAgICAgICAgICB0aGlzLl9hdXRvQ291bnQgPSB0eXBlO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDliJ3lp4vopoHlvp7lpJbpg6jmi7/lj5bos4fmupDnmoRVUkxcclxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsIDog542y5Y+W5aSW6YOo6LOH5rqQ55qEVVJMXHJcbiAgICAgICAgICogQGRlZmF1bHQgXCJcIlxyXG4gICAgICAgICAqIEByZXR1cm5zIHt0aGlzfVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHNldEV4dGVybmFsbHlMb2FkVVJMKHVybDogc3RyaW5nKTogdGhpcyB7XHJcbiAgICAgICAgICAgIHRoaXMuX2V4dGVybmFsbHlMb2FkVVJMID0gdXJsO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOWIneWni+iqnuezu1xyXG4gICAgICAgICAqIEBwYXJhbSB7TGFuZ3VhZ2VUeXBlfSBsYW5ndWFnZVR5cGUgLSDoqp7ns7tcclxuICAgICAgICAgKiBAZGVmYXVsdCBMYW5ndWFnZVR5cGUuQ0hJTkVTRVxyXG4gICAgICAgICAqIEByZXR1cm5zIHt0aGlzfVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHNldExhbmd1YWdlKGxhbmd1YWdlVHlwZTogc3RyaW5nKTogdGhpcyB7XHJcbiAgICAgICAgICAgIHRoaXMuX2xhbmd1YWdlID0gbGFuZ3VhZ2VUeXBlO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOWIneWni+mAsuWFpemBiuaIsuaZgkF1dG/ni4DmhYtcclxuICAgICAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlzQXV0byAtIOaYr+WQpuWcqOmBiuaIsumAsuWFpeW+jOmWi+WVn2F1dG/ni4DmhYtcclxuICAgICAgICAgKiBAZGVmYXVsdCBmYWxzZVxyXG4gICAgICAgICAqIEByZXR1cm5zIHt0aGlzfVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHNldEF1dG9TdGF0ZShpc0F1dG86IGJvb2xlYW4pOiB0aGlzIHtcclxuICAgICAgICAgICAgdGhpcy5faXNBdXRvID0gaXNBdXRvO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOaYr+WQpuWcqOmBiuaIsumAsuWFpeW+jOaYr+WKoOmAn+eahOeLgOaFi1xyXG4gICAgICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNTcGVlZFVwXHJcbiAgICAgICAgICogQGRlZmF1bHQgZmFsc2VcclxuICAgICAgICAgKiBAcmV0dXJucyB7dGhpc31cclxuICAgICAgICAgKi9cclxuICAgICAgICBzZXRTcGVlZFN0YXRlKGlzU3BlZWRVcDogYm9vbGVhbik6IHRoaXMge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5faXNTcGVlZFVwID0gaXNTcGVlZFVwO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDmmK/lkKbopoHplovllZ9GcmFtZXdvcmsgRGVidWfmqKHlvI9cclxuICAgICAgICAgKiDms6jmhI866YGK5oiy5q2j5byP5LiK57ea6aCI6Zec6ZaJXHJcbiAgICAgICAgICogQHBhcmFtIHtib29sZWFufSB1c2VcclxuICAgICAgICAgKiBAZGVmYXVsdCB0cnVlXHJcbiAgICAgICAgICogQHJldHVybnMge3RoaXN9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgc2V0RnJhbWVXb3JrRGVidWcodXNlOiBib29sZWFuKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2lzRnJhbWV3b3JrRGVidWcgPSB1c2U7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogY29jb3Mg5qGG5p62IGRlYnVn6Kit5a6aXHJcbiAgICAgICAgICogQHBhcmFtIHtjYy5kZWJ1Zy5EZWJ1Z01vZGV9IHR5cGUgLSBkZWJ1ZyDmqKPlvI9cclxuICAgICAgICAgKiBAZGVmYXVsdCAtIGNjLmRlYnVnLkRlYnVnTW9kZS5JTkZPXHJcbiAgICAgICAgICogQHJldHVybiB7dGhpc31cclxuICAgICAgICAgKi9cclxuICAgICAgICBzZXRDb2Nvc0RlYnVnKHR5cGU6IGNjLmRlYnVnLkRlYnVnTW9kZSk6IHRoaXMge1xyXG4gICAgICAgICAgICB0aGlzLl9jb2Nvc0RlYnVnU2V0dGluZyA9IHR5cGU7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog6L+U5Zue6aaW6aCBVVJMXHJcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxyXG4gICAgICAgICAqIEBkZWZhdWx0IG51bGxcclxuICAgICAgICAgKiBAcmV0dXJucyB7dGhpc31cclxuICAgICAgICAgKi9cclxuICAgICAgICBzZXRCYWNrSG9tZVVSTCh1cmw6IHN0cmluZyk6IHRoaXMge1xyXG4gICAgICAgICAgICB0aGlzLl9iYWNrSG9tZVVSTCA9IHVybDtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDlr6bkvovljJbmiYDmnIlNYW5hZ2VyIGNsYXNzO1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBidWlsZCgpIHtcclxuICAgICAgICAgICAgY2MuZGVidWdbXCJfcmVzZXREZWJ1Z1NldHRpbmdcIl0odGhpcy5fY29jb3NEZWJ1Z1NldHRpbmcpO1xyXG4gICAgICAgICAgICBFcnJvck1hbmFnZXIuc2V0SW5zdGFuY2UodGhpcyk7XHJcbiAgICAgICAgICAgIEF1ZGlvTWFuYWdlci5zZXRJbnN0YW5jZSh0aGlzKTtcclxuICAgICAgICAgICAgTGFuZ3VhZ2VNYW5hZ2VyLnNldEluc3RhbmNlKHRoaXMpO1xyXG4gICAgICAgICAgICBFdmVudE1hbmFnZXIuc2V0SW5zdGFuY2UodGhpcyk7XHJcbiAgICAgICAgICAgIExvYWRSZXNNYW5hZ2VyLnNldEluc3RhbmNlKHRoaXMpO1xyXG4gICAgICAgICAgICBQcm9jZXNzTWFuYWdlci5zZXRJbnN0YW5jZSh0aGlzKTtcclxuICAgICAgICAgICAgU2NlbmVNYW5hZ2VyLnNldEluc3RhbmNlKHRoaXMpO1xyXG4gICAgICAgICAgICBTbG90U3R5bGVNYW5hZ2VyLnNldEluc3RhbmNlKHRoaXMpO1xyXG4gICAgICAgIH1cclxuXHJcbi8vIGdldCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuICAgICAgICBnZXQgZXh0ZXJuYWxseUxvYWRVUkwoKTogc3RyaW5nIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2V4dGVybmFsbHlMb2FkVVJMO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZ2V0IGdhbWVOdW1iZXIoKTogbnVtYmVyIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2dhbWVOdW1iZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBnZXQgaXNBdXRvKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faXNBdXRvO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZ2V0IGF1dG9Db3VudCgpOiBudW1iZXIge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fYXV0b0NvdW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZ2V0IGlzU3BlZWRVcCgpOiBib29sZWFuIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2lzU3BlZWRVcDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGdldCBtdXNpY1ZvbHVtZSgpOiBudW1iZXIge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbXVzaWNWb2x1bWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBnZXQgZWZmZWN0Vm9sdW1lKCk6IG51bWJlciB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9lZmZlY3RWb2x1bWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBnZXQgbGFuZ3VhZ2UoKTogdHlwZS5MYW5ndWFnZVR5cGUgfCBzdHJpbmcge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbGFuZ3VhZ2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBnZXQgaXNGcmFtZXdvcmtEZWJ1ZygpOiBib29sZWFuIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2lzRnJhbWV3b3JrRGVidWc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBnZXQgaXNFZmZlY3RPbk11dGUoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9pc0VmZmVjdE9uTXV0ZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZ2V0IGlzTXVzaWNPbk11dGUoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9pc011c2ljT25NdXRlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZ2V0IGJhY2tIb21lVVJMKCk6IHN0cmluZyB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9iYWNrSG9tZVVSTDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGdldCBjb2Nvc0RlYnVnU2V0dGluZygpOiBjYy5kZWJ1Zy5EZWJ1Z01vZGUge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY29jb3NEZWJ1Z1NldHRpbmc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIGZjYyB7XHJcblxyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBBQlMge1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAQXV0aG9yIFhJQU8tTEktUElOXHJcbiAgICAgICAgICogQERlc2NyaXB0aW9uICjmir3osaHpoZ4p6LyJ5YWl5aSW6YOo6IWz5pysXHJcbiAgICAgICAgICogQERhdGUgMjAyMS0wNC0xNCDkuIvljYggMjA6MjRcclxuICAgICAgICAgKiBAVmVyc2lvbiAxLjFcclxuICAgICAgICAgKi9cclxuICAgICAgICBleHBvcnQgYWJzdHJhY3QgY2xhc3MgQUxvYWRTY3JpcHRUeXBlIHtcclxuXHJcbiAgICAgICAgICAgIHByb3RlY3RlZCBzY3JpcHROYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIHByb3RlY3RlZCB0eXBlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIHByb3RlY3RlZCB1cmw6IHN0cmluZztcclxuXHJcbiAgICAgICAgICAgIHByb3RlY3RlZCBzdGF0aWMgaGVhZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXTtcclxuXHJcblxyXG4gICAgICAgICAgICBwcm90ZWN0ZWQgY29uc3RydWN0b3Ioc2NyaXB0TmFtZTogc3RyaW5nLCB0eXBlOiBzdHJpbmcsIHVybDogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjcmlwdE5hbWUgPSBzY3JpcHROYW1lXHJcbiAgICAgICAgICAgICAgICB0aGlzLnR5cGUgPSB0eXBlXHJcbiAgICAgICAgICAgICAgICB0aGlzLnVybCA9IHVybFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBhYnN0cmFjdCBsb2FkU2NyaXB0KCk6IHZvaWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL0NvbmZpZy9TbG90Q29uZmlnTWFuYWdlci50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9FcnJvci9FbnVtL0Vycm9yVHlwZS50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9FcnJvci9FcnJvck1hbmFnZXIudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vSUxvYWQvQUxvYWRTY3JpcHRUeXBlLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0xvYWRSZXNNYW5hZ2VyLnRzXCIgLz5cclxubmFtZXNwYWNlIGZjYyB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAQXV0aG9yIFhJQU8tTEktUElOXHJcbiAgICAgKiBARGVzY3JpcHRpb24g5Yqg6LyJ5aSW6YOoY3Nz6LOH5rqQXHJcbiAgICAgKiBARGF0ZSAyMDIxLTA0LTE0IOS4i+WNiCAyMDoyNFxyXG4gICAgICogQFZlcnNpb24gMS4xXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBjbGFzcyBDU1NMb2FkIGV4dGVuZHMgQUJTLkFMb2FkU2NyaXB0VHlwZSB7XHJcblxyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgbGlua0VsZW06IEhUTUxMaW5rRWxlbWVudFxyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihzY3JpcHROYW1lOiBzdHJpbmcsIHR5cGU6IHN0cmluZywgdXJsOiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgc3VwZXIoc2NyaXB0TmFtZSwgdHlwZSwgdXJsKVxyXG4gICAgICAgICAgICB0aGlzLmxpbmtFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsb2FkU2NyaXB0KCkge1xyXG4gICAgICAgICAgICBsZXQgdXJsID0gYCR7U2xvdENvbmZpZ01hbmFnZXIuaW5zdGFuY2UuZXh0ZXJuYWxseUxvYWRVUkx9LyR7dGhpcy51cmx9LyR7dGhpcy5zY3JpcHROYW1lfS5jc3NgO1xyXG4gICAgICAgICAgICBpZiAoTG9hZFJlc01hbmFnZXIuaW5zdGFuY2Uuc2NyaXB0UmVzLmhhcyh1cmwpKSB7XHJcbiAgICAgICAgICAgICAgICBFcnJvck1hbmFnZXIuaW5zdGFuY2UuZXhlY3V0ZUVycm9yKHR5cGUuRXJyb3JUeXBlLkxPQURfRlcsIGDoq4vli7/ph43opIfliqDovInlt7LmnInnmoTlpJbpg6johbPmnKwgOiAke3VybH1gKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMubGlua0VsZW0ucmVsID0gXCJzdHlsZXNoZWV0XCI7XHJcbiAgICAgICAgICAgIHRoaXMubGlua0VsZW0udHlwZSA9IHRoaXMudHlwZTtcclxuICAgICAgICAgICAgdGhpcy5saW5rRWxlbS5ocmVmID0gdXJsO1xyXG4gICAgICAgICAgICBBQlMuQUxvYWRTY3JpcHRUeXBlLmhlYWQuYXBwZW5kQ2hpbGQodGhpcy5saW5rRWxlbSk7XHJcbiAgICAgICAgICAgIExvYWRSZXNNYW5hZ2VyLmluc3RhbmNlLnNjcmlwdFJlcy5hZGQodXJsKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vQ29uZmlnL1Nsb3RDb25maWdNYW5hZ2VyLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL0Vycm9yL0VudW0vRXJyb3JUeXBlLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL0Vycm9yL0Vycm9yTWFuYWdlci50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9JTG9hZC9BTG9hZFNjcmlwdFR5cGUudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vTG9hZFJlc01hbmFnZXIudHNcIiAvPlxyXG5cclxubmFtZXNwYWNlIGZjYyB7XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFNjcmlwdExvYWQgZXh0ZW5kcyBBQlMuQUxvYWRTY3JpcHRUeXBlIHtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQEF1dGhvciBYSUFPLUxJLVBJTlxyXG4gICAgICAgICAqIEBEZXNjcmlwdGlvbiDovInlhaXlpJbpg6gganMg6IWz5pysXHJcbiAgICAgICAgICogQERhdGUgMjAyMS0wNC0xNCDkuIvljYggMjA6MjRcclxuICAgICAgICAgKiBAVmVyc2lvbiAxLjFcclxuICAgICAgICAgKi9cclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IGxpbmtFbGVtOiBIVE1MU2NyaXB0RWxlbWVudFxyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihzY3JpcHROYW1lOiBzdHJpbmcsIHR5cGU6IHN0cmluZywgdXJsOiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgc3VwZXIoc2NyaXB0TmFtZSwgdHlwZSwgdXJsKVxyXG5cclxuICAgICAgICAgICAgdGhpcy5saW5rRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbG9hZFNjcmlwdCgpIHtcclxuICAgICAgICAgICAgbGV0IHVybCA9IGAke1Nsb3RDb25maWdNYW5hZ2VyLmluc3RhbmNlLmV4dGVybmFsbHlMb2FkVVJMfS8ke3RoaXMudXJsfS8ke3RoaXMuc2NyaXB0TmFtZX0uanNgO1xyXG4gICAgICAgICAgICBpZiAoTG9hZFJlc01hbmFnZXIuaW5zdGFuY2Uuc2NyaXB0UmVzLmhhcyh1cmwpKSB7XHJcbiAgICAgICAgICAgICAgICBFcnJvck1hbmFnZXIuaW5zdGFuY2UuZXhlY3V0ZUVycm9yKHR5cGUuRXJyb3JUeXBlLkxPQURfRlcsIGDoq4vli7/ph43opIfliqDovInlt7LmnInnmoTlpJbpg6johbPmnKwgOiAke3VybH1gKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMubGlua0VsZW0udHlwZSA9IHRoaXMudHlwZTtcclxuICAgICAgICAgICAgdGhpcy5saW5rRWxlbS5zcmMgPSB1cmw7XHJcbiAgICAgICAgICAgIEFCUy5BTG9hZFNjcmlwdFR5cGUuaGVhZC5hcHBlbmRDaGlsZCh0aGlzLmxpbmtFbGVtKTtcclxuICAgICAgICAgICAgTG9hZFJlc01hbmFnZXIuaW5zdGFuY2Uuc2NyaXB0UmVzLmFkZCh1cmwpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9FcnJvci9FbnVtL0Vycm9yVHlwZS50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9FcnJvci9FcnJvck1hbmFnZXIudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vR2xvYmFsL1V0aWwudHNcIiAvPlxyXG5uYW1lc3BhY2UgZmNjIHtcclxuXHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIEFCUyB7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBBdXRob3IgWElBTy1MSS1QSU5cclxuICAgICAgICAgKiBARGVzY3JpcHRpb24gKOaKveixoemhninovInlhaXlkITpoZ5jb2Nvc+izh+a6kFxyXG4gICAgICAgICAqIEBEYXRlIDIwMjEtMDQtMTQg5LiL5Y2IIDIwOjI0XHJcbiAgICAgICAgICogQFZlcnNpb24gMS4xXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFMb2FkVHlwZSBpbXBsZW1lbnRzIElGLklMb2FkVHlwZSB7XHJcblxyXG4gICAgICAgICAgICBwcm90ZWN0ZWQgdHlwZTogYW55O1xyXG4gICAgICAgICAgICBwcm90ZWN0ZWQgdXJsOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIHByb3RlY3RlZCBkYXRhTmFtZTogc3RyaW5nO1xyXG4gICAgICAgICAgICBwcm90ZWN0ZWQgZm9sZGVyOiBzdHJpbmdcclxuICAgICAgICAgICAgcHJpdmF0ZSBiZWZvcmVQcm9ncmVzczogbnVtYmVyO1xyXG4gICAgICAgICAgICBwcml2YXRlIGFzc2V0QnVuZGxlOiBjYy5Bc3NldE1hbmFnZXIuQnVuZGxlXHJcblxyXG4gICAgICAgICAgICBwcm90ZWN0ZWQgY29uc3RydWN0b3IoZGF0YU5hbWU6IHN0cmluZywgdHlwZTogY2MuQXNzZXQsIHVybDogc3RyaW5nLCBmb2xkZXI6IHN0cmluZywpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnR5cGUgPSB0eXBlOyAgICAgICAgICAgICAgIC8v55W25YmN6KaB542y5Y+W55qE6LOH5rqQ6aGe5Z6LXHJcbiAgICAgICAgICAgICAgICB0aGlzLnVybCA9IHVybDsgICAgICAgICAgICAgICAgIC8v542y5Y+W55qE5Zyw5Z2AXHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGFOYW1lID0gZGF0YU5hbWU7ICAgICAgIC8v6KaB5ou/5Y+W6LOH5rqQ55qEa2V5XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZvbGRlciA9IGZvbGRlciAgICAgICAgICAgIC8v54i26LOH5paZ5aS+5ZCN56ixLOm7mOiqjSByZXNvdXJjZXNcclxuICAgICAgICAgICAgICAgIHRoaXMuYmVmb3JlUHJvZ3Jlc3MgPSAwOyAgICAgICAgLy/nlbbliY3kuIrmrKHnmoTovInlhaXpgLLluqZcclxuICAgICAgICAgICAgICAgIHRoaXMuYXNzZXRCdW5kbGUgPSBjYy5hc3NldE1hbmFnZXIuZ2V0QnVuZGxlKHRoaXMuZm9sZGVyKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIOWKoOi8ieizh+a6kOaWueazlVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgcHVibGljIGxvYWRSZXNvdXJjZXMoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50eXBlICE9PSBjYy5TY2VuZUFzc2V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hc3NldEJ1bmRsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAubG9hZERpcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXJsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50eXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkUmVzUHJvZ3Jlc3MuYmluZCh0aGlzKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZFJlc0NhbGxCYWNrLmJpbmQodGhpcylcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy/ovInlhaVzY2VuZeizh+a6kCzlpoLmnpzlkI3nqLHpjK/oqqTmnINzY2VuZeWQjeeosemMr+iqpOacg+eEoeazleaLv+WPluizh+a6kFxyXG4gICAgICAgICAgICAgICAgICAgIC8v6LyJ5YWlc2NlbmXos4fmupAs54Sh6aCIVVJM5Zyw5Z2ALOS9huaYrzIuNC5Y6ZyA6KaB5pS+5ZyoUmVzb3VyY2XlupXkuItcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFzc2V0QnVuZGxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5sb2FkU2NlbmUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGFOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuU2NlbmVBc3NldCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZFJlc1Byb2dyZXNzLmJpbmQodGhpcyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRSZXNDYWxsQmFjay5iaW5kKHRoaXMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiDlm57lgrPoqbLliqDovInnmoTos4fmupBcclxuICAgICAgICAgICAgICogQHBhcmFtIHtFcnJvcn0gZXJyb3IgLSDpjK/oqqToqIrmga9cclxuICAgICAgICAgICAgICogQHBhcmFtIHtbXSB8IGNjLlNjZW5lQXNzZXR9IGFzc2V0cyAtIOizh+a6kFxyXG4gICAgICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgcHJpdmF0ZSBsb2FkUmVzQ2FsbEJhY2soZXJyb3I6IEVycm9yLCBhc3NldHM6IFtdIHwgY2MuU2NlbmVBc3NldCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgRXJyb3JNYW5hZ2VyLmluc3RhbmNlLmV4ZWN1dGVFcnJvcih0eXBlLkVycm9yVHlwZS5MT0FEX0ZXLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCEoYXNzZXRzIGluc3RhbmNlb2YgY2MuU2NlbmVBc3NldCkgJiYgYXNzZXRzLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgRXJyb3JNYW5hZ2VyLmluc3RhbmNlLmV4ZWN1dGVFcnJvcih0eXBlLkVycm9yVHlwZS5MT0FEX0ZXLCBg54Sh6LyJ5YWl5Lu75L2V6LOH5rqQICR7dGhpcy51cmx9IGApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRSZXNUb01hbmFnZXIodGhpcy5kYXRhTmFtZSwgYXNzZXRzKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIOWbnuWCs+eVtuWJjei8ieWFpemAsuW6plxyXG4gICAgICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gY29tcGxldGUgLSDku6XovInlhaXlroznlaLnmoTmlbjph49cclxuICAgICAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IFRvdGFsQW1vdW50IC0g57i95pW46YePXHJcbiAgICAgICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBwcml2YXRlIGxvYWRSZXNQcm9ncmVzcyhjb21wbGV0ZTogbnVtYmVyLCBUb3RhbEFtb3VudDogbnVtYmVyKSB7XHJcbiAgICAgICAgICAgICAgICAvL+eNsuWPlueZvuWIhuavlFxyXG4gICAgICAgICAgICAgICAgbGV0IHByb2dyZXNzID0gZ2xvYmFsLlV0aWwucm91bmREb3duKChjb21wbGV0ZSAvIFRvdGFsQW1vdW50KSwgMik7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHByb2dyZXNzID4gdGhpcy5iZWZvcmVQcm9ncmVzcykge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL+S4jeW+numAmeijoeWIpOaWt+eLgOaFiyznm67nmoTop6PmsbrnlbDmraXmk43kvZxcclxuICAgICAgICAgICAgICAgICAgICAvL+eVtuizh+a6kOmDvei8ieWFpeWIsExvYWRNYW5hZ2Vy5pmC5omN5Zue5YKz5Lul6LyJ5YWl5a6M5oiQ55qE54uA5oWLXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb2dyZXNzID49IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3MgPSAwLjk5XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8v5Zue5YKz5LiK5qyh6IiH6YCZ5qyh5LmL6ZaT5aKe5Yqg5LqG5aSa5bCR6YCy5bqmXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVNYW5hZ2VyU3RhdGUodGhpcy5kYXRhTmFtZSwgcHJvZ3Jlc3MsIChwcm9ncmVzcyAtIHRoaXMuYmVmb3JlUHJvZ3Jlc3MpKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJlZm9yZVByb2dyZXNzID0gcHJvZ3Jlc3M7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiDovInlhaXlrozmiJDlvozlm57oqr9cclxuICAgICAgICAgICAgICogQHByb3RlY3RlZFxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgcHJvdGVjdGVkIHVwZGF0ZVByb2dyZXNzRW5kKCkge1xyXG4gICAgICAgICAgICAgICAgLy/nm67nmoTop6PmsbrnlbDmraXmk43kvZxcclxuICAgICAgICAgICAgICAgIC8v55W26LOH5rqQ6YO96LyJ5YWl5YiwTG9hZE1hbmFnZXLmmYLmiY3lm57lgrPku6XovInlhaXlrozmiJDnmoTni4DmhYtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZvbGRlciA9PT0gXCJyZXNvdXJjZXNcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIExvYWRSZXNNYW5hZ2VyLmluc3RhbmNlLmluaXRpYWxMb2FkU3RhdGUuc2V0KHRoaXMuZGF0YU5hbWUsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIExvYWRSZXNNYW5hZ2VyLmluc3RhbmNlLmxvYWRNYWluRXZlbnRDYWxsYmFjayh0aGlzLmRhdGFOYW1lLCAwLjAxLCAxKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgTG9hZFJlc01hbmFnZXIuaW5zdGFuY2Uuc2Vjb25kYXJ5TG9hZFN0YXRlLnNldCh0aGlzLmRhdGFOYW1lLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICBMb2FkUmVzTWFuYWdlci5pbnN0YW5jZS5sb2FkU2Vjb25kYXJ5RXZlbnRDYWxsYmFjayh0aGlzLmRhdGFOYW1lLCAxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIOabtOaWsOeVtuWJjemAsuW6plxyXG4gICAgICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IC0g6Kmy6LOH5rqQ5ZCN56ixXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzdGF0ZSAtIOeVtuWJjemAsuW6plxyXG4gICAgICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gdXBkYXRlIC0g5pu05LiK5qyh6YCy5bqm5q+U6LW3LOaWsOWinuS6huWkmuWwkemAsuW6plxyXG4gICAgICAgICAgICAgKiBAcHJvdGVjdGVkXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBwcm90ZWN0ZWQgdXBkYXRlTWFuYWdlclN0YXRlKGtleTogc3RyaW5nLCBzdGF0ZTogbnVtYmVyLCB1cGRhdGU6IG51bWJlcikge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZm9sZGVyID09PSBcInJlc291cmNlc1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgTG9hZFJlc01hbmFnZXIuaW5zdGFuY2UuaW5pdGlhbExvYWRTdGF0ZS5zZXQoa2V5LCBzdGF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgTG9hZFJlc01hbmFnZXIuaW5zdGFuY2UubG9hZE1haW5FdmVudENhbGxiYWNrKGtleSwgdXBkYXRlLCBzdGF0ZSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIExvYWRSZXNNYW5hZ2VyLmluc3RhbmNlLnNlY29uZGFyeUxvYWRTdGF0ZS5zZXQoa2V5LCBzdGF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgTG9hZFJlc01hbmFnZXIuaW5zdGFuY2UubG9hZFNlY29uZGFyeUV2ZW50Q2FsbGJhY2soa2V5LCBzdGF0ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiDlsIfos4fmupDkv53lrZjlnKjnrqHnkIblmajkuK1cclxuICAgICAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGRhdGFOYW1lIC0g6Ieq6KiC576p6Kmy6LOH5rqQ5ZCN56ixXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSBhc3NldCAtIOizh+a6kFxyXG4gICAgICAgICAgICAgKiBAcHJvdGVjdGVkXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBwcm90ZWN0ZWQgYWJzdHJhY3Qgc2V0UmVzVG9NYW5hZ2VyKGRhdGFOYW1lOiBzdHJpbmcsIGFzc2V0OiBhbnkpOiB2b2lkO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vRXJyb3IvRW51bS9FcnJvclR5cGUudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vRXJyb3IvRXJyb3JNYW5hZ2VyLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0lMb2FkL0FMb2FkVHlwZS50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9Mb2FkUmVzTWFuYWdlci50c1wiIC8+XHJcbm5hbWVzcGFjZSBmY2Mge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQEF1dGhvciBYSUFPLUxJLVBJTlxyXG4gICAgICogQERlc2NyaXB0aW9uIOi8ieWFpeWclueJh+izh+a6kFxyXG4gICAgICogQERhdGUgMjAyMS0wNC0xNCDkuIvljYggMjA6MjRcclxuICAgICAqIEBWZXJzaW9uIDEuMVxyXG4gICAgICovXHJcbiAgICBleHBvcnQgY2xhc3MgSW1nTG9hZCBleHRlbmRzIEFCUy5BTG9hZFR5cGUge1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihkYXRhTmFtZTogc3RyaW5nLCB0eXBlOiBhbnksIHVybDogc3RyaW5nLCBmb2xkZXI6IHN0cmluZykge1xyXG4gICAgICAgICAgICBzdXBlcihkYXRhTmFtZSwgdHlwZSwgdXJsLCBmb2xkZXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5bCH6LOH5rqQ5L+d5a2Y5Zyo566h55CG5Zmo5LitXHJcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGRhdGFOYW1lIC0g6Ieq6KiC576p6Kmy6LOH5rqQ5ZCN56ixXHJcbiAgICAgICAgICogQHBhcmFtIHtjYy5TcHJpdGVBdGxhc30gYXNzZXQgLSDos4fmupBcclxuICAgICAgICAgKiBAcHJvdGVjdGVkXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgc2V0UmVzVG9NYW5hZ2VyKGRhdGFOYW1lOiBzdHJpbmcsIGFzc2V0OiBjYy5TcHJpdGVBdGxhcyk6IHZvaWQge1xyXG5cclxuICAgICAgICAgICAgbGV0IHNwcml0ZU1hcDogTWFwPHN0cmluZywgY2MuU3ByaXRlRnJhbWU+ID0gbmV3IE1hcDxzdHJpbmcsIGNjLlNwcml0ZUZyYW1lPigpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBzcHJpdGUgb2YgYXNzZXRbMF0uZ2V0U3ByaXRlRnJhbWVzKCkpIHtcclxuICAgICAgICAgICAgICAgIC8v5bCH6Y215YC86L2J5bCP5a+rLOWmguaenOacieS9v+eUqGdyaWQga2V5IOS9nOeCuuaQnOWwi+izh+a6kFxyXG4gICAgICAgICAgICAgICAgLy/lsIfnhKHmop3ku7blsIcga2V5IOi9ieaIkCDntJTmlbjlrZcg5L6L5aaCIDogc3ltYm9sMH4xMCA9IDB+MTBcclxuICAgICAgICAgICAgICAgIGxldCBsb3dlckNhc2UgPSBkYXRhTmFtZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGxvd2VyQ2FzZS5tYXRjaChcImdyaWRcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZ3JpZE5hbWUgPSBzcHJpdGUubmFtZS5yZXBsYWNlKC9bYS16IEEtWl0vZywgJycpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNwcml0ZU1hcC5zZXQoZ3JpZE5hbWUsIHNwcml0ZSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzcHJpdGVOYW1lID0gc3ByaXRlLm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgc3ByaXRlTWFwLnNldChzcHJpdGVOYW1lLCBzcHJpdGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBMb2FkUmVzTWFuYWdlci5pbnN0YW5jZS5pbWdSZXMuc2V0KGRhdGFOYW1lLCBzcHJpdGVNYXApO1xyXG5cclxuICAgICAgICAgICAgLy/nm67nmoTop6PmsbrnlbDmraXmk43kvZxcclxuICAgICAgICAgICAgLy/nlbbos4fmupDpg73ovInlhaXliLBMb2FkTWFuYWdlcuaZguaJjeWbnuWCs+S7pei8ieWFpeWujOaIkOeahOeLgOaFi1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVByb2dyZXNzRW5kKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL0Vycm9yL0VudW0vRXJyb3JUeXBlLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL0Vycm9yL0Vycm9yTWFuYWdlci50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9JTG9hZC9BTG9hZFR5cGUudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vTG9hZFJlc01hbmFnZXIudHNcIiAvPlxyXG5uYW1lc3BhY2UgZmNjIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBBdXRob3IgWElBTy1MSS1QSU5cclxuICAgICAqIEBEZXNjcmlwdGlvbiDovInlhaXpn7PmqILos4fmupBcclxuICAgICAqIEBEYXRlIDIwMjEtMDQtMTQg5LiL5Y2IIDIwOjI0XHJcbiAgICAgKiBAVmVyc2lvbiAxLjFcclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGNsYXNzIE11c2ljTG9hZCBleHRlbmRzIEFCUy5BTG9hZFR5cGUge1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihkYXRhTmFtZTogc3RyaW5nLCB0eXBlOiBhbnksIHVybDogc3RyaW5nLCBmb2xkZXI6IHN0cmluZykge1xyXG4gICAgICAgICAgICBzdXBlcihkYXRhTmFtZSwgdHlwZSwgdXJsLCBmb2xkZXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5bCH6LOH5rqQ5L+d5a2Y5Zyo566h55CG5Zmo5LitXHJcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGRhdGFOYW1lIC0g6Ieq6KiC576p6Kmy6LOH5rqQ5ZCN56ixXHJcbiAgICAgICAgICogQHBhcmFtIHtjYy5BdWRpb0NsaXB9IGFzc2V0IC0g6LOH5rqQXHJcbiAgICAgICAgICogQHByb3RlY3RlZFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHNldFJlc1RvTWFuYWdlcihkYXRhTmFtZTogc3RyaW5nLCBhc3NldDogQXJyYXk8Y2MuQXVkaW9DbGlwPikge1xyXG4gICAgICAgICAgICAvL+aLv+WPlumfs+aoguaqlOWQjSznlbbkvZzpjbXlgLxcclxuICAgICAgICAgICAgZm9yIChsZXQgdmFsdWUgb2YgYXNzZXQpIHtcclxuICAgICAgICAgICAgICAgIGxldCBrZXk6IHN0cmluZyA9IHZhbHVlLm5hbWU7XHJcbiAgICAgICAgICAgICAgICBpZiAoTG9hZFJlc01hbmFnZXIuaW5zdGFuY2UubXVzaWNSZXMuaGFzKGtleSkpXHJcbiAgICAgICAgICAgICAgICAgICAgRXJyb3JNYW5hZ2VyLmluc3RhbmNlLmV4ZWN1dGVFcnJvcih0eXBlLkVycm9yVHlwZS5MT0FEX0ZXLCBgJHtrZXl9IOmNteWAvOmHjeikhyzoq4vmqqLmn6XoqbLpn7PmqILos4fmupDmmK/lkKblt7LliqDovInpgY5gKVxyXG4gICAgICAgICAgICAgICAgTG9hZFJlc01hbmFnZXIuaW5zdGFuY2UubXVzaWNSZXMuc2V0KGtleSwgdmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8v55uu55qE6Kej5rG655Ww5q2l5pON5L2cXHJcbiAgICAgICAgICAgIC8v55W26LOH5rqQ6YO96LyJ5YWl5YiwTG9hZE1hbmFnZXLmmYLmiY3lm57lgrPku6XovInlhaXlrozmiJDnmoTni4DmhYtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVQcm9ncmVzc0VuZCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9FcnJvci9FbnVtL0Vycm9yVHlwZS50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9FcnJvci9FcnJvck1hbmFnZXIudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vSUxvYWQvQUxvYWRUeXBlLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0xvYWRSZXNNYW5hZ2VyLnRzXCIgLz5cclxuXHJcbm5hbWVzcGFjZSBmY2Mge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQEF1dGhvciBYSUFPLUxJLVBJTlxyXG4gICAgICogQERlc2NyaXB0aW9uIOi8ieWFpeWclueJh+izh+a6kFxyXG4gICAgICogQERhdGUgMjAyMS0wNC0xNCDkuIvljYggMjA6MjRcclxuICAgICAqIEBWZXJzaW9uIDEuMVxyXG4gICAgICovXHJcbiAgICBleHBvcnQgY2xhc3MgUHJlZmFiTG9hZCBleHRlbmRzIEFCUy5BTG9hZFR5cGUge1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihkYXRhTmFtZTogc3RyaW5nLCB0eXBlOiBhbnksIHVybDogc3RyaW5nLCBmb2xkZXI6IHN0cmluZykge1xyXG4gICAgICAgICAgICBzdXBlcihkYXRhTmFtZSwgdHlwZSwgdXJsLCBmb2xkZXIpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOWwh+izh+a6kOS/neWtmOWcqOeuoeeQhuWZqOS4rVxyXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBkYXRhTmFtZSAtIOiHquiogue+qeipsuizh+a6kOWQjeeosVxyXG4gICAgICAgICAqIEBwYXJhbSB7Y2MuQXVkaW9DbGlwfSBhc3NldCAtIOizh+a6kFxyXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcclxuICAgICAgICAgKi9cclxuICAgICAgICBzZXRSZXNUb01hbmFnZXIoZGF0YU5hbWU6IHN0cmluZywgYXNzZXQ6IEFycmF5PGNjLlByZWZhYj4pIHtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IHByZWZhYiBvZiBhc3NldCkge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChMb2FkUmVzTWFuYWdlci5pbnN0YW5jZS5wcmVmYWJSZXMuaGFzKHByZWZhYi5uYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIEVycm9yTWFuYWdlci5pbnN0YW5jZS5leGVjdXRlRXJyb3IodHlwZS5FcnJvclR5cGUuTE9BRF9GVywgYCR7cHJlZmFiLm5hbWV9IHByZWZhYuWQjeeosemHjeikhyzoq4vmqqLmn6XmmK/lkKbmnInnm7jlkIzlkI3nqLFwcmVmYWJgKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgTG9hZFJlc01hbmFnZXIuaW5zdGFuY2UucHJlZmFiUmVzLnNldChwcmVmYWIubmFtZSwgcHJlZmFiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy/nm67nmoTop6PmsbrnlbDmraXmk43kvZxcclxuICAgICAgICAgICAgLy/nlbbos4fmupDpg73ovInlhaXliLBMb2FkTWFuYWdlcuaZguaJjeWbnuWCs+S7pei8ieWFpeWujOaIkOeahOeLgOaFi1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVByb2dyZXNzRW5kKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL0Vycm9yL0VudW0vRXJyb3JUeXBlLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL0Vycm9yL0Vycm9yTWFuYWdlci50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9JTG9hZC9BTG9hZFR5cGUudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vTG9hZFJlc01hbmFnZXIudHNcIiAvPlxyXG5cclxubmFtZXNwYWNlIGZjYyB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAQXV0aG9yIFhJQU8tTEktUElOXHJcbiAgICAgKiBARGVzY3JpcHRpb24g6LyJ5YWl5aC05pmv6LOH5rqQXHJcbiAgICAgKiBARGF0ZSAyMDIxLTA0LTE0IOS4i+WNiCAyMDoyNFxyXG4gICAgICogQFZlcnNpb24gMS4xXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCAgY2xhc3MgU2NlbmVMb2FkIGV4dGVuZHMgQUJTLkFMb2FkVHlwZSB7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGRhdGFOYW1lOiBzdHJpbmcsIHR5cGU6IGFueSwgdXJsOiBzdHJpbmcsIGZvbGRlcjogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGRhdGFOYW1lLCB0eXBlLCB1cmwsIGZvbGRlcilcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOWwh+izh+a6kOS/neWtmOWcqOeuoeeQhuWZqOS4rVxyXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBkYXRhTmFtZSAtIOiHquiogue+qeipsuizh+a6kOWQjeeosVxyXG4gICAgICAgICAqIEBwYXJhbSB7Y2MuQXVkaW9DbGlwfSBhc3NldCAtIOizh+a6kFxyXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcclxuICAgICAgICAgKi9cclxuICAgICAgICBzZXRSZXNUb01hbmFnZXIoZGF0YU5hbWU6IHN0cmluZywgYXNzZXQ6IGFueSkge1xyXG5cclxuICAgICAgICAgICAgaWYgKExvYWRSZXNNYW5hZ2VyLmluc3RhbmNlLnNjcmlwdFJlcy5oYXMoZGF0YU5hbWUpKVxyXG4gICAgICAgICAgICAgICAgRXJyb3JNYW5hZ2VyLmluc3RhbmNlLmV4ZWN1dGVFcnJvcih0eXBlLkVycm9yVHlwZS5MT0FEX0ZXLCBgJHtkYXRhTmFtZX0g6Y215YC86YeN6KSHLOiri+aqouafpeipsuizh+a6kOaYr+WQpuW3suWKoOi8iemBjmApXHJcblxyXG4gICAgICAgICAgICBMb2FkUmVzTWFuYWdlci5pbnN0YW5jZS5zY2VuZVJlcy5zZXQoZGF0YU5hbWUsIGFzc2V0KTtcclxuXHJcbiAgICAgICAgICAgIC8v55uu55qE6Kej5rG655Ww5q2l5pON5L2cXHJcbiAgICAgICAgICAgIC8v55W26LOH5rqQ6YO96LyJ5YWl5YiwTG9hZE1hbmFnZXLmmYLmiY3lm57lgrPku6XovInlhaXlrozmiJDnmoTni4DmhYtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVQcm9ncmVzc0VuZCgpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vRXJyb3IvRW51bS9FcnJvclR5cGUudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vRXJyb3IvRXJyb3JNYW5hZ2VyLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0lMb2FkL0FMb2FkVHlwZS50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9Mb2FkUmVzTWFuYWdlci50c1wiIC8+XHJcbm5hbWVzcGFjZSBmY2Mge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQEF1dGhvciBYSUFPLUxJLVBJTlxyXG4gICAgICogQERlc2NyaXB0aW9uIOi8ieWFpemqqOmqvOWKqOeUu+izh+a6kFxyXG4gICAgICogQERhdGUgMjAyMS0wNC0xNCDkuIvljYggMjA6MjRcclxuICAgICAqIEBWZXJzaW9uIDEuMVxyXG4gICAgICovXHJcbiAgICBleHBvcnQgY2xhc3MgU3BpbmVMb2FkIGV4dGVuZHMgQUJTLkFMb2FkVHlwZSB7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGRhdGFOYW1lOiBzdHJpbmcsIHR5cGU6IGFueSwgdXJsOiBzdHJpbmcsIGZvbGRlcjogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGRhdGFOYW1lLCB0eXBlLCB1cmwsIGZvbGRlcik7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5bCH6LOH5rqQ5L+d5a2Y5Zyo566h55CG5Zmo5LitXHJcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGRhdGFOYW1lIC0g6Ieq6KiC576p6Kmy6LOH5rqQ5ZCN56ixXHJcbiAgICAgICAgICogQHBhcmFtIHtjYy5Ta2VsZXRvbkRhdGF9IGFzc2V0IC0g6LOH5rqQXHJcbiAgICAgICAgICogQHByb3RlY3RlZFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHNldFJlc1RvTWFuYWdlcihkYXRhTmFtZTogc3RyaW5nLCBhc3NldDogQXJyYXk8c3AuU2tlbGV0b25EYXRhPikge1xyXG5cclxuICAgICAgICAgICAgaWYgKExvYWRSZXNNYW5hZ2VyLmluc3RhbmNlLnNwaW5lUmVzLmhhcyhkYXRhTmFtZSkpIHtcclxuICAgICAgICAgICAgICAgIEVycm9yTWFuYWdlci5pbnN0YW5jZS5leGVjdXRlRXJyb3IodHlwZS5FcnJvclR5cGUuTE9BRF9GVywgXCLoq4vmqqLlr5/os4fmupDmmK/lkKbku6XovInlhaXpgY4s6Y215YC86YeN6KSHXCIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBMb2FkUmVzTWFuYWdlci5pbnN0YW5jZS5zcGluZVJlcy5zZXQoZGF0YU5hbWUsIGFzc2V0WzBdKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBsb3dlckNhc2UgPSBkYXRhTmFtZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICBsZXQgY2hlY2tHcmlkID0gbG93ZXJDYXNlLm1hdGNoKFwiZ3JpZFwiKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgc3BpbmUgb2YgYXNzZXQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgc3BpbmVOYW1lczogQXJyYXk8c3RyaW5nPiA9IE9iamVjdC5rZXlzKHNwaW5lLnNrZWxldG9uSnNvbi5hbmltYXRpb25zKTtcclxuICAgICAgICAgICAgICAgIGxldCBzcGluZVRvTWFwOiBNYXA8c3RyaW5nLCBzdHJpbmc+ID0gbmV3IE1hcDxzdHJpbmcsIHN0cmluZz4oKTtcclxuICAgICAgICAgICAgICAgIC8v5Y+W5Ye6c3BpbmXli5XnlavlkI3nqLFcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IHNwaW5lTmFtZSBvZiBzcGluZU5hbWVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy/mqqLmn6XmmK/lkKbmnIlncmlk6Zec6Y215a2XLOWwh+aKiuWPlnNwaW5lTmFtZSDnmoRrZXkg5pu05o+b54K65pW45a2XXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoZWNrR3JpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3BpbmVOYW1lVG9OdW1iZXIgPSBzcGluZU5hbWUucmVwbGFjZSgvW14wLTldL2lnLCAnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8v5aaC5p6c5YuV55Wr5YWn5YyF5ZCr5LiN5ZCr5pW45a2X55qE55qE5YuV55Wr5ZCNLOWwh+ebtOaOpeWwh+WLleeVq+WQjeaVtOWAi+S/neWtmOaIkGtleVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3BpbmVOYW1lVG9OdW1iZXIgPT09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwaW5lVG9NYXAuc2V0KHNwaW5lTmFtZSwgc3BpbmVOYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzcGluZVRvTWFwLmhhcyhzcGluZU5hbWVUb051bWJlcikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFcnJvck1hbmFnZXIuaW5zdGFuY2UuZXhlY3V0ZUVycm9yKHR5cGUuRXJyb3JUeXBlLkxPQURfRlcsIGAke3NwaW5lTmFtZX0gc3BpbmXli5Xnlavlj5ZudW1iZXLmnInoqqQs6KuL5qqi5p+l6Kmyc3BpbmUgQW5pbWV0aW9u5piv5ZCm5pyJ6YeN6KSH5pW45a2X5oOF5rOBYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGluZVRvTWFwLnNldChzcGluZU5hbWVUb051bWJlciwgc3BpbmVOYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwaW5lVG9NYXAuc2V0KHNwaW5lTmFtZSwgc3BpbmVOYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvL1RPRE865bCa5pyq5oOz5Yiw6KaB5oqKZ3JpZOWLleaPm+izh+a6kOaUvuWcqOWTqlxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL+ebrueahOino+axuueVsOatpeaTjeS9nFxyXG4gICAgICAgICAgICAvL+eVtuizh+a6kOmDvei8ieWFpeWIsExvYWRNYW5hZ2Vy5pmC5omN5Zue5YKz5Lul6LyJ5YWl5a6M5oiQ55qE54uA5oWLXHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUHJvZ3Jlc3NFbmQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vSUxvYWQvQUxvYWRUeXBlLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0xvYWRSZXNNYW5hZ2VyLnRzXCIgLz5cclxuXHJcbm5hbWVzcGFjZSBmY2Mge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQEF1dGhvciBYSUFPLUxJLVBJTlxyXG4gICAgICogQERlc2NyaXB0aW9uIOi8ieWFpeaWh+acrOizh+a6kCznm67liY3lj6rog73ovInlhaUuQ1NWIOaqlOahiFxyXG4gICAgICogQERhdGUgMjAyMS0wNC0xNCDkuIvljYggMjA6MjRcclxuICAgICAqIEBWZXJzaW9uIDEuMVxyXG4gICAgICovXHJcbiAgICBleHBvcnQgY2xhc3MgVGV4dExvYWQgZXh0ZW5kcyBBQlMuQUxvYWRUeXBlIHtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoZGF0YU5hbWU6IHN0cmluZywgdHlwZTogYW55LCB1cmw6IHN0cmluZywgZm9sZGVyOiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgc3VwZXIoZGF0YU5hbWUsIHR5cGUsIHVybCwgZm9sZGVyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqICDnm67liY3lj6rog73lgrPlhaUgLkNTViDmqpTmoYgs55uu5YmN54Sh5b6e5Yik5pa36Kmy5qqU5qGI5Ymv5qqU5ZCNXHJcbiAgICAgICAgICogIOWboOatpOmcgOiHquihjOaqouafpeWbnuWCs+izh+aWmeaYr+WQpuato+eiulxyXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBkYXRhTmFtZSAtIOiHquiogue+qeipsuizh+a6kOWQjeeosVxyXG4gICAgICAgICAqIEBwYXJhbSB7Y2MuU2tlbGV0b25EYXRhfSBhc3NldCAtIOizh+a6kFxyXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcclxuICAgICAgICAgKi9cclxuICAgICAgICBzZXRSZXNUb01hbmFnZXIoZGF0YU5hbWU6IHN0cmluZywgYXNzZXQ6IGNjLlRleHRBc3NldCkge1xyXG5cclxuICAgICAgICAgICAgLy/muIXpmaTlm57ou4pcclxuICAgICAgICAgICAgbGV0IHRleHRBcnJheTogQXJyYXk8c3RyaW5nPiA9IGFzc2V0WzBdW1widGV4dFwiXS5zcGxpdCgvW1xcc1xcbl0vKTtcclxuICAgICAgICAgICAgbGV0IHRleHRNYXAgPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nPigpO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgdGV4dHMgb2YgdGV4dEFycmF5KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgLy/liIflibIgQ1NW54m55pyJ55qEICxcclxuICAgICAgICAgICAgICAgIGxldCBhcnJheTogQXJyYXk8c3RyaW5nPiA9IHRleHRzLnNwbGl0KCcsJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy/kvaDlj6/ku6XlnKjnrKzkuInmoLzmlL7lhaXoqLvop6Ms5oiR5Y+q5oqT5YmN5YWp5qC86LOH5paZXHJcbiAgICAgICAgICAgICAgICBsZXQga2V5ID0gYXJyYXlbMF07XHJcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBhcnJheVsxXTtcclxuICAgICAgICAgICAgICAgIGlmIChrZXkgPT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy/muIXpmaTmiYDmnInljIXlkKvnmoQgXCJcIiAnJyDnrYnnibnmrornrKbomZ9cclxuICAgICAgICAgICAgICAgIGxldCBwcm9jZXNzaW5ndmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC9bJ1wiXS9nLCAnJyk7XHJcbiAgICAgICAgICAgICAgICB0ZXh0TWFwLnNldChrZXksIHByb2Nlc3Npbmd2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIExvYWRSZXNNYW5hZ2VyLmluc3RhbmNlLnJlYWRGaWxlUmVzLnNldChkYXRhTmFtZSwgdGV4dE1hcCk7XHJcblxyXG4gICAgICAgICAgICAvL+ebrueahOino+axuueVsOatpeaTjeS9nFxyXG4gICAgICAgICAgICAvL+eVtuizh+a6kOmDvei8ieWFpeWIsExvYWRNYW5hZ2Vy5pmC5omN5Zue5YKz5Lul6LyJ5YWl5a6M5oiQ55qE54uA5oWLXHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUHJvZ3Jlc3NFbmQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vRXJyb3IvRW51bS9FcnJvclR5cGUudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vRXJyb3IvRXJyb3JNYW5hZ2VyLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vRW51bS9Mb2FkRW51bS50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0xvYWRTY3JpcHRUeXBlL0NTU0xvYWQudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9Mb2FkU2NyaXB0VHlwZS9TY3JpcHRMb2FkLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vTG9hZFR5cGUvSW1nTG9hZC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0xvYWRUeXBlL011c2ljTG9hZC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0xvYWRUeXBlL1ByZWZhYkxvYWQudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9Mb2FkVHlwZS9TY2VuZUxvYWQudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9Mb2FkVHlwZS9TcGluZUxvYWQudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9Mb2FkVHlwZS9UZXh0TG9hZC50c1wiIC8+XHJcbm5hbWVzcGFjZSBmY2Mge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQEF1dGhvciBYSUFPLUxJLVBJTlxyXG4gICAgICogQERlc2NyaXB0aW9uIOi8ieWFpeWQhOmhnuizh+a6kOW3peW7oFxyXG4gICAgICogQERhdGUgMjAyMS0wNC0xNCDkuIvljYggMjA6MjRcclxuICAgICAqIEBWZXJzaW9uIDEuMVxyXG4gICAgICovXHJcbiAgICBleHBvcnQgY2xhc3MgTG9hZFR5cGVGYWN0b3J5IGltcGxlbWVudHMgSUYuSUxvYWRGYWN0b3J5IHtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBpc0xvYWRCdW5kbGU6IGJvb2xlYW47XHJcbiAgICAgICAgcHJpdmF0ZSBhc3NldEJ1bmRsZTogY2MuQXNzZXRNYW5hZ2VyLkJ1bmRsZVxyXG4gICAgICAgIHByaXZhdGUgcHJvbWlzZTogUHJvbWlzZTx1bmtub3duPlxyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgYXNzZXRNZXRob2Q6IEFycmF5PEZ1bmN0aW9uPjtcclxuICAgICAgICBwcml2YXRlIGNvbmZpZ01hbmFnZXI6IElGLklDb25maWdNYW5hZ2VyO1xyXG4gICAgICAgIHByaXZhdGUgbG9hZFJlc01hbmFnZXI6IElGLklMb2FkUmVzTWFuYWdlcjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IobG9hZFJlc01hbmFnZXI6IElGLklMb2FkUmVzTWFuYWdlciwgY29uZmlnTWFuYWdlcjogSUYuSUNvbmZpZ01hbmFnZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5hc3NldE1ldGhvZCA9IG5ldyBBcnJheTxGdW5jdGlvbj4oKTtcclxuICAgICAgICAgICAgdGhpcy5jb25maWdNYW5hZ2VyID0gY29uZmlnTWFuYWdlcjtcclxuICAgICAgICAgICAgdGhpcy5sb2FkUmVzTWFuYWdlciA9IGxvYWRSZXNNYW5hZ2VyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5qyh6LOH5rqQ5Yqg6LyJXHJcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGRhdGFOYW1lIC0g5qqU5qGI5ZCN56ixXHJcbiAgICAgICAgICogQHBhcmFtIHtmY2MudHlwZS5Mb2FkVHlwZX0gdHlwZSAtIOaqlOahiOmhnuWei1xyXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgLSDmqpTmoYjkvY3nva5cclxuICAgICAgICAgKiBAcmV0dXJuIHtQcm9taXNlPHZvaWQ+fVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGxvYWRCdW5kbGUoZGF0YU5hbWU6IHN0cmluZywgdHlwZTogdHlwZS5Mb2FkVHlwZSwgdXJsOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmFzc2V0QnVuZGxlKSByZXR1cm47XHJcbiAgICAgICAgICAgIHRoaXMucHJvbWlzZSA9IG5ldyBQcm9taXNlPHZvaWQ+KCgpID0+IHtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvL+WKoOi8iUJ1bmRsZeizh+a6kOaZgumgiOWFiOWKoOi8iUJ1bmRsZea4heWWrlxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5pc0xvYWRCdW5kbGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzTG9hZEJ1bmRsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MuYXNzZXRNYW5hZ2VyLmxvYWRCdW5kbGUoXCJzZWNvbmRhcnlSZXNcIiwgKGVycm9yLCBidW5kbGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBFcnJvck1hbmFnZXIuaW5zdGFuY2UuZXhlY3V0ZUVycm9yKGZjYy50eXBlLkVycm9yVHlwZS5MT0FEX0ZXLCBlcnJvcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFzc2V0QnVuZGxlID0gYnVuZGxlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIXRoaXMuYXNzZXRCdW5kbGUgJiYgdGhpcy5pc0xvYWRCdW5kbGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFzc2V0TWV0aG9kLnB1c2godGhpcy5jaGVja0xvYWRUeXBlLmJpbmQodGhpcywgZGF0YU5hbWUsIHR5cGUsIHVybCwgXCJzZWNvbmRhcnlSZXNcIikpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOaqoua4rOeVtuWJjVR5cGUs5YGa5ZCE6Ieq5bCN5oeJ55qE5Yqg6LyJ5YuV5L2cXHJcbiAgICAgICAgICogQHBhcmFtIGRhdGFOYW1lIC0g6Ieq6KiC576p6LOH5rqQ5ZCN56ixXHJcbiAgICAgICAgICogQHBhcmFtIHR5cGUgLSDos4fmupDpoZ7lnotcclxuICAgICAgICAgKiBAcGFyYW0gdXJsIC0g6LOH5rqQ5L2N572uXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGV4ZWN1dGVMb2FkKGRhdGFOYW1lOiBzdHJpbmcsIHR5cGU6IHR5cGUuTG9hZFR5cGUsIHVybDogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2tMb2FkVHlwZShkYXRhTmFtZSwgdHlwZSwgdXJsLCBcInJlc291cmNlc1wiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOWft+ihjEJ1bmRsZei8ieWFpeWLleS9nFxyXG4gICAgICAgICAqIEBwYXJhbSBkYXRhTmFtZSAtIOiHquiogue+qeizh+a6kOWQjeeosVxyXG4gICAgICAgICAqIEBwYXJhbSB0eXBlIC0g6LOH5rqQ6aGe5Z6LXHJcbiAgICAgICAgICogQHBhcmFtIHVybCAtIOizh+a6kOS9jee9rlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGFzeW5jIGV4ZWN1dGVMb2FkQnVuZGxlKGRhdGFOYW1lOiBzdHJpbmcsIHR5cGU6IHR5cGUuTG9hZFR5cGUsIHVybDogc3RyaW5nKSB7XHJcblxyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLmxvYWRCdW5kbGUoZGF0YU5hbWUsIHR5cGUsIHVybCk7XHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2tMb2FkVHlwZShkYXRhTmFtZSwgdHlwZSwgdXJsLCBcInNlY29uZGFyeVJlc1wiKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmFzc2V0TWV0aG9kLmxlbmd0aCAhPSAwKSB7XHJcbiAgICAgICAgICAgICAgICB3aGlsZSAodGhpcy5hc3NldE1ldGhvZC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFzc2V0TWV0aG9kWzBdKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hc3NldE1ldGhvZC5zaGlmdCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDnorroqo3nlbbliY3os4fmupDpoZ7lnoss57Wm55u45bCN5oeJY2xhc3Mg6JmV55CGXHJcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGRhdGFOYW1lIC0g6Ieq6KiC576p6LOH5rqQ5ZCN56ixXHJcbiAgICAgICAgICogQHBhcmFtIHtmY2MudHlwZS5Mb2FkVHlwZX0gdHlwZSAtIOizh+a6kOmhnuWei1xyXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgLSDos4fmupDkvY3nva5cclxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gZm9sZGVyIC0g6LOH5rqQ54i26aGe6LOH5paZ5aS+LOm7mOiqjSByZXNvdXJjZVxyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHJpdmF0ZSBjaGVja0xvYWRUeXBlKGRhdGFOYW1lOiBzdHJpbmcsIHR5cGU6IHR5cGUuTG9hZFR5cGUsIHVybDogc3RyaW5nLCBmb2xkZXI6IHN0cmluZykge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgZmNjLnR5cGUuTG9hZFR5cGUuaW1nOlxyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBJbWdMb2FkKGRhdGFOYW1lLCBjYy5TcHJpdGVBdGxhcywgdXJsLCBmb2xkZXIpLmxvYWRSZXNvdXJjZXMoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgZmNjLnR5cGUuTG9hZFR5cGUubXVzaWM6XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IE11c2ljTG9hZChkYXRhTmFtZSwgY2MuQXVkaW9DbGlwLCB1cmwsIGZvbGRlcikubG9hZFJlc291cmNlcygpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBmY2MudHlwZS5Mb2FkVHlwZS5wcmVmYWI6XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IFByZWZhYkxvYWQoZGF0YU5hbWUsIGNjLlByZWZhYiwgdXJsLCBmb2xkZXIpLmxvYWRSZXNvdXJjZXMoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgZmNjLnR5cGUuTG9hZFR5cGUuc3BpbmU6XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IFNwaW5lTG9hZChkYXRhTmFtZSwgc3AuU2tlbGV0b25EYXRhLCB1cmwsIGZvbGRlcikubG9hZFJlc291cmNlcygpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBmY2MudHlwZS5Mb2FkVHlwZS5zY2VuZTpcclxuICAgICAgICAgICAgICAgICAgICBuZXcgU2NlbmVMb2FkKGRhdGFOYW1lLCBjYy5TY2VuZUFzc2V0LCBudWxsLCBmb2xkZXIpLmxvYWRSZXNvdXJjZXMoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgZmNjLnR5cGUuTG9hZFR5cGUudGV4dDpcclxuICAgICAgICAgICAgICAgICAgICBuZXcgVGV4dExvYWQoZGF0YU5hbWUsIGNjLlRleHRBc3NldCwgdXJsLCBmb2xkZXIpLmxvYWRSZXNvdXJjZXMoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQgOlxyXG4gICAgICAgICAgICAgICAgICAgIEVycm9yTWFuYWdlci5pbnN0YW5jZS5leGVjdXRlRXJyb3IoZmNjLnR5cGUuRXJyb3JUeXBlLlRZUEVfRlcsIFwi6LOH5rqQ6aGe5Z6L6Yyv6KqkLOWwmueEoeatpOmhnuWei+i8ieWFpeaWueazlVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5Yqg6LyJ5aSW6YOo6IWz5pysXHJcbiAgICAgICAgICogQHBhcmFtIG5hbWUgLSDmqpTlkI1cclxuICAgICAgICAgKiBAcGFyYW0gdHlwZSAtIOaqlOahiOmhnuWei1xyXG4gICAgICAgICAqIEBwYXJhbSB1cmwgLSB1cmzlnLDlnYBcclxuICAgICAgICAgKi9cclxuICAgICAgICBleGVjdXRlTG9hZEV4dGVybmFsU2NyaXB0KG5hbWU6IHN0cmluZywgdHlwZTogdHlwZS5Mb2FkVHlwZSwgdXJsOiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIGZjYy50eXBlLkxvYWRUeXBlLmNzczpcclxuICAgICAgICAgICAgICAgICAgICBuZXcgQ1NTTG9hZChuYW1lLCBcInRleHQvY3NzXCIsIHVybCkubG9hZFNjcmlwdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICBjYXNlIGZjYy50eXBlLkxvYWRUeXBlLnNjcmlwdDpcclxuICAgICAgICAgICAgICAgICAgICBuZXcgU2NyaXB0TG9hZChuYW1lLCBcInRleHQvamF2YXNjcmlwdFwiLCB1cmwpLmxvYWRTY3JpcHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBFcnJvck1hbmFnZXIuaW5zdGFuY2UuZXhlY3V0ZUVycm9yKGZjYy50eXBlLkVycm9yVHlwZS5UWVBFX0ZXLCBcIkxvYWRUeXBlIOeEoeazleWBtea4rFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9FcnJvci9FbnVtL0Vycm9yVHlwZS50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9FcnJvci9FcnJvck1hbmFnZXIudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9FbnVtL0xvYWRFbnVtLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vSUxvYWQvSUxvYWRGYWN0b3J5LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vSUxvYWQvSUxvYWRSZXNNYW5hZ2VyLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vTG9hZFR5cGVGYWN0b3J5LnRzXCIgLz5cclxubmFtZXNwYWNlIGZjYyB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAQXV0aG9yIFhJQU8tTEktUElOXHJcbiAgICAgKiBARGVzY3JpcHRpb24g6JmV55CG5YCL5Yil6aGe5Z6L6LOH5rqQ6LyJ5YWlXHJcbiAgICAgKiBARGF0ZSAyMDIxLTA0LTE0IOS4i+WNiCAyMDoyNFxyXG4gICAgICogQFZlcnNpb24gMS4xXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBjbGFzcyBMb2FkVHlwZUhhbmRsZXIgaW1wbGVtZW50cyBJRi5JTG9hZEZhY3Rvcnkge1xyXG5cclxuICAgICAgICBwcml2YXRlIGZhY3Rvcnk6IExvYWRUeXBlRmFjdG9yeTtcclxuICAgICAgICBwcml2YXRlIGxvYWRSZXNNYW5hZ2VyOiBJRi5JTG9hZFJlc01hbmFnZXI7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGxvYWRSZXNNYW5hZ2VyOiBJRi5JTG9hZFJlc01hbmFnZXIsY29uZmlnTWFuYWdlcjogSUYuSUNvbmZpZ01hbmFnZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5sb2FkUmVzTWFuYWdlciA9IGxvYWRSZXNNYW5hZ2VyO1xyXG4gICAgICAgICAgICB0aGlzLmZhY3RvcnkgPSBuZXcgTG9hZFR5cGVGYWN0b3J5KGxvYWRSZXNNYW5hZ2VyLGNvbmZpZ01hbmFnZXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5qqi5ris55W25YmNVHlwZSzlgZrlkIToh6rlsI3mh4nnmoTliqDovInli5XkvZxcclxuICAgICAgICAgKiBAcGFyYW0gbmFtZVxyXG4gICAgICAgICAqIEBwYXJhbSB0eXBlXHJcbiAgICAgICAgICogQHBhcmFtIHVybFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBleGVjdXRlTG9hZChuYW1lOiBzdHJpbmcsIHR5cGU6IHR5cGUuTG9hZFR5cGUsIHVybDogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2tSZXBlYXRUaGVOYW1lKG5hbWUpO1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRSZXNNYW5hZ2VyLmluaXRpYWxMb2FkU3RhdGUuc2V0KG5hbWUsIG51bGwpO1xyXG4gICAgICAgICAgICB0aGlzLmZhY3RvcnkuZXhlY3V0ZUxvYWQobmFtZSwgdHlwZSwgdXJsKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOWft+ihjEJ1bmRsZei8ieWFpeWLleS9nFxyXG4gICAgICAgICAqIEBwYXJhbSBuYW1lXHJcbiAgICAgICAgICogQHBhcmFtIHR5cGVcclxuICAgICAgICAgKiBAcGFyYW0gdXJsXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGFzeW5jIGV4ZWN1dGVMb2FkQnVuZGxlKG5hbWU6IHN0cmluZywgdHlwZTogdHlwZS5Mb2FkVHlwZSwgdXJsOiBzdHJpbmcpIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2tSZXBlYXRUaGVOYW1lKG5hbWUpO1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRSZXNNYW5hZ2VyLnNlY29uZGFyeUxvYWRTdGF0ZS5zZXQobmFtZSwgbnVsbCk7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuZmFjdG9yeS5leGVjdXRlTG9hZEJ1bmRsZShuYW1lLCB0eXBlLCB1cmwpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5qqi5p+l6YeN6KSH5ZG95ZCNXHJcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHByaXZhdGUgY2hlY2tSZXBlYXRUaGVOYW1lKG5hbWU6IHN0cmluZykge1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMubG9hZFJlc01hbmFnZXIuaW5pdGlhbExvYWRTdGF0ZS5oYXMobmFtZSkpIHtcclxuICAgICAgICAgICAgICAgIEVycm9yTWFuYWdlci5pbnN0YW5jZS5leGVjdXRlRXJyb3IodHlwZS5FcnJvclR5cGUuTE9BRF9GVywgYCR7bmFtZX0g5q2kKOS4u+izh+a6kCnlt7LovInlhaXpgY7kuoYs5oiW5ZCN56ix6YeN6KSHLOiri+aqouWvn2ApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmxvYWRSZXNNYW5hZ2VyLnNlY29uZGFyeUxvYWRTdGF0ZS5oYXMobmFtZSkpIHtcclxuICAgICAgICAgICAgICAgIEVycm9yTWFuYWdlci5pbnN0YW5jZS5leGVjdXRlRXJyb3IodHlwZS5FcnJvclR5cGUuTE9BRF9GVywgYCR7bmFtZX0g5q2kKOasoeizh+a6kCnlt7LovInlhaXpgY7kuoYs5oiW5ZCN56ix6YeN6KSHLOiri+aqouWvn2ApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDliqDovInlpJbpg6johbPmnKxcclxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxyXG4gICAgICAgICAqIEBwYXJhbSB7TG9hZFR5cGV9IHR5cGVcclxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZXhlY3V0ZUxvYWRFeHRlcm5hbFNjcmlwdChuYW1lOiBzdHJpbmcsIHR5cGU6IHR5cGUuTG9hZFR5cGUsIHVybDogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmFjdG9yeS5leGVjdXRlTG9hZEV4dGVybmFsU2NyaXB0KG5hbWUsIHR5cGUsIHVybCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0Vycm9yL0VudW0vRXJyb3JUeXBlLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0Vycm9yL0Vycm9yTWFuYWdlci50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9HbG9iYWwvVXRpbC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0VudW0vTG9hZEVudW0udHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9JTG9hZC9JTG9hZFJlc01hbmFnZXIudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9Mb2FkVHlwZUhhbmRsZXIudHNcIiAvPlxyXG5uYW1lc3BhY2UgZmNjIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBBdXRob3IgWElBTy1MSS1QSU5cclxuICAgICAqIEBEZXNjcmlwdGlvbiDos4fmupDnrqHnkIbogIUgOiDliqDovInos4fmupAs5L+d5a2Y6LOH5rqQLOaIluWPlueVtuWJjeWKoOi8iemAsuW6plxyXG4gICAgICogQERhdGUgMjAyMS0wNC0xNCDkuIvljYggMjA6MjRcclxuICAgICAqIEBWZXJzaW9uIDEuMVxyXG4gICAgICovXHJcbiAgICBleHBvcnQgY2xhc3MgTG9hZFJlc01hbmFnZXIgaW1wbGVtZW50cyBJRi5JTG9hZFJlc01hbmFnZXIge1xyXG4gICAgICAgIHByaXZhdGUgY29uZmlnTWFuYWdlcjogSUYuSUNvbmZpZ01hbmFnZXI7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBJRi5JTG9hZFJlc01hbmFnZXI7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOWIneWni+WKoOi8ieeJqeS7tumAsuW6plxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHByaXZhdGUgX2luaXRpYWxMb2FkU3RhdGU6IE1hcDxzdHJpbmcsIG51bWJlcj47XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5qyh5Yqg6LyJLOWPr+S7peWcqOmChOacquWKoOi8ieWujOaIkOaZgizkuZ/og73pgLLlhaVNYWluR2FtZSBTY2VuZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHByaXZhdGUgX3NlY29uZGFyeUxvYWRTdGF0ZTogTWFwPHN0cmluZywgbnVtYmVyPjtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBpbWfnianku7bkv53lrZhcclxuICAgICAgICAgKi9cclxuICAgICAgICBwcml2YXRlIF9pbWdSZXM6IE1hcDxzdHJpbmcsIE1hcDxzdHJpbmcsIGNjLlNwcml0ZUZyYW1lPj47XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogc3BpbmUg54mp5Lu25L+d5a2YXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHJpdmF0ZSBfc3BpbmVSZXM6IE1hcDxzdHJpbmcsIHNwLlNrZWxldG9uRGF0YT47XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog6K6A5Y+W5b6M55qE5paH5Lu25qqU5qGILOS/neWtmOS9jee9rlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHByaXZhdGUgX3JlYWRGaWxlUmVzOiBNYXA8c3RyaW5nLCBNYXA8c3RyaW5nLCBzdHJpbmc+PjtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDoroDlj5blvoznmoRQcmVmYWIs5L+d5a2Y5L2N572uXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHJpdmF0ZSBfcHJlZmFiUmVzOiBNYXA8c3RyaW5nLCBjYy5QcmVmYWI+O1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOmfs+aoguS/neWtmOS9jee9rlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHByaXZhdGUgX211c2ljUmVzOiBNYXA8c3RyaW5nLCBjYy5BdWRpb0NsaXA+O1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOWklumDqOiFs+acrOS/neWtmFVSTOWcsOWdgCzllq7lrZjliKTmlrfmmK/lkKbph43opIfliqDovIlcclxuICAgICAgICAgKiBAdHlwZSB7U2V0PHN0cmluZz59XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHJpdmF0ZSBfc2NyaXB0UmVzOiBTZXQ8c3RyaW5nPjtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5aC05pmv5L+d5a2Y5L2N572uXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHJpdmF0ZSBfc2NlbmVSZXM6IE1hcDxzdHJpbmcsIGNjLlNjZW5lQXNzZXQ+XHJcblxyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgbG9hZFR5cGVIYW5kbGVyOiBMb2FkVHlwZUhhbmRsZXI7XHJcbiAgICAgICAgcHJpdmF0ZSBjYWxsRnVuOiBNYXA8c3RyaW5nLCAocHJvZ3Jlc3M6IG51bWJlcikgPT4gdm9pZD47XHJcbiAgICAgICAgcHJpdmF0ZSBjb3VudDogbnVtYmVyO1xyXG4gICAgICAgIHByaXZhdGUgYWxsUHJvZ3Jlc3M6IG51bWJlcjtcclxuICAgICAgICBwcml2YXRlIGJlZm9yZVByb2dyZXNzOiBudW1iZXI7XHJcbiAgICAgICAgcHJpdmF0ZSBhbGxQcm9ncmVzc0VuZENvdW50OiBudW1iZXI7XHJcblxyXG4gICAgICAgIHByaXZhdGUgY29uc3RydWN0b3IoY29uZmlnTWFuYWdlcjogSUYuSUNvbmZpZ01hbmFnZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5jb25maWdNYW5hZ2VyID0gY29uZmlnTWFuYWdlcjtcclxuICAgICAgICAgICAgdGhpcy5sb2FkVHlwZUhhbmRsZXIgPSBuZXcgTG9hZFR5cGVIYW5kbGVyKHRoaXMsY29uZmlnTWFuYWdlcik7ICAgICAgIC8v6YWN55m86KaB55So5ZOq5YCLY2xhc3Pln7fooYzovInlhaXli5XkvZxcclxuICAgICAgICAgICAgdGhpcy5faW5pdGlhbExvYWRTdGF0ZSA9IG5ldyBNYXA8c3RyaW5nLCBudW1iZXI+KCk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/kuLvliqDovInni4DmhYtcclxuICAgICAgICAgICAgdGhpcy5fc2Vjb25kYXJ5TG9hZFN0YXRlID0gbmV3IE1hcDxzdHJpbmcsIG51bWJlcj4oKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/mrKHliqDovInni4DmhYtcclxuICAgICAgICAgICAgdGhpcy5faW1nUmVzID0gbmV3IE1hcDxzdHJpbmcsIE1hcDxzdHJpbmcsIGNjLlNwcml0ZUZyYW1lPj4oKTsgICAgICAgICAgICAgICAgICAgICAgLy/lnJbniYdcclxuICAgICAgICAgICAgdGhpcy5fc3BpbmVSZXMgPSBuZXcgTWFwPHN0cmluZywgc3AuU2tlbGV0b25EYXRhPigpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/pqqjmnrZcclxuICAgICAgICAgICAgdGhpcy5fcmVhZEZpbGVSZXMgPSBuZXcgTWFwPHN0cmluZywgTWFwPHN0cmluZywgc3RyaW5nPj4oKTsgICAgICAgICAgICAgICAgICAgICAgICAgLy90ZXh05paH5Lu2XHJcbiAgICAgICAgICAgIHRoaXMuX3ByZWZhYlJlcyA9IG5ldyBNYXA8c3RyaW5nLCBjYy5QcmVmYWI+KCk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v6aCQ6LyJ6auUXHJcbiAgICAgICAgICAgIHRoaXMuY2FsbEZ1biA9IG5ldyBNYXA8c3RyaW5nLCAocHJvZ3Jlc3M6IG51bWJlcikgPT4gdm9pZD4oKTsgICAgICAgICAgICAgICAgICAgICAgIC8vY2FsbGJhY2vmlrnms5VcclxuICAgICAgICAgICAgdGhpcy5fbXVzaWNSZXMgPSBuZXcgTWFwPHN0cmluZywgY2MuQXVkaW9DbGlwPigpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/pn7PmqIJcclxuICAgICAgICAgICAgdGhpcy5fc2NyaXB0UmVzID0gbmV3IFNldDxzdHJpbmc+KCk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/lpJbpg6johbPmnKzkv53lrZhVUkzlnLDlnYAs5Zau5a2Y5Yik5pa35piv5ZCm6YeN6KSH5Yqg6LyJXHJcbiAgICAgICAgICAgIHRoaXMuX3NjZW5lUmVzID0gbmV3IE1hcDxzdHJpbmcsIGNjLlNjZW5lQXNzZXQ+KCk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5L+d5a2Yc2NlbmXloLTloLTmma/os4fmupBcclxuICAgICAgICAgICAgdGhpcy5jb3VudCA9IDA7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/liJ3lp4vopoHovInlhaXmlbjph49cclxuICAgICAgICAgICAgdGhpcy5hbGxQcm9ncmVzcyA9IDA7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/liJ3lp4vliqDovInpgLLluqZcclxuICAgICAgICAgICAgdGhpcy5iZWZvcmVQcm9ncmVzcyA9IDA7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/liJ3lp4vkuIrmrKHliqDovInnmoTpgLLluqZcclxuICAgICAgICAgICAgdGhpcy5hbGxQcm9ncmVzc0VuZENvdW50ID0gMDsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/lm6Dnsr7mupbluqbllY/poYws6aGN5aSW5Yik5pa35piv5ZCm5omA5pyJ6LOH5rqQ6YO95Yqg6LyJ5a6M55WiXHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogIOaHtua8ouWKoOi8iVxyXG4gICAgICAgICAqICDliJ3lp4vljJYs5Y+q6K6T5LiA5YCL5bCI5qGI55Si55Sf5LiA5qyh6KmyY2xhc3NcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgc3RhdGljIHNldEluc3RhbmNlKGNvbmZpZ01hbmFnZXI6IElGLklDb25maWdNYW5hZ2VyKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5faW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlID0gbmV3IExvYWRSZXNNYW5hZ2VyKGNvbmZpZ01hbmFnZXIpO1xyXG4gICAgICAgICAgICAgICAgbG9hZE1nciA9IHRoaXMuX2luc3RhbmNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogIOeNsuWPluW3sue2k+WIneWni+WMlueahOmdnOaFi+WvpuS+i2NsYXNzXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBnZXQgaW5zdGFuY2UoKTogSUYuSUxvYWRSZXNNYW5hZ2VyIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLl9pbnN0YW5jZSkge1xyXG4gICAgICAgICAgICAgICAgRXJyb3JNYW5hZ2VyLmluc3RhbmNlLmV4ZWN1dGVFcnJvcih0eXBlLkVycm9yVHlwZS5MT0FEX0ZXLCBcIuipsumhnuWwmuacquWvpuS+i+WMllwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDkuLvos4fmupDliqDovInnianku7Ys55uj6IG95piv5ZCm5pyJY2FsbGJhY2ss6Zqo5LmL6L+U5Zue6Kmy54uA5oWLXHJcbiAgICAgICAgICogQHBhcmFtIG5hbWVcclxuICAgICAgICAgKiBAcGFyYW0gcHJvZ3Jlc3Mg5Y+I5Yqg6LyJ5LqG5aSa5bCRXHJcbiAgICAgICAgICogQHBhcmFtIHN0YXRlIOipsueJqeS7tuWKoOi8ieWIsOW5vui2tFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGxvYWRNYWluRXZlbnRDYWxsYmFjayhuYW1lOiBzdHJpbmcsIHByb2dyZXNzOiBudW1iZXIsIHN0YXRlOiBudW1iZXIpIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMub25seVJlc0V2ZW50Q2FsbGJhY2sobmFtZSwgc3RhdGUpO1xyXG4gICAgICAgICAgICAvL+eVtuWJjee4veWKoOi8iemAsuW6plxyXG4gICAgICAgICAgICB0aGlzLmFsbFByb2dyZXNzICs9IHByb2dyZXNzIC8gdGhpcy5jb3VudDtcclxuICAgICAgICAgICAgaWYgKHRoaXMuYWxsUHJvZ3Jlc3MgPj0gMSkgdGhpcy5hbGxQcm9ncmVzcyA9IDAuOTk7Ly/nsr7luqbllY/poYws5LiN5Zue5YKzMVxyXG5cclxuICAgICAgICAgICAgLy/lm6Dngrrmta7pu57mlbjnsr7luqYs55Sx6YCZ6KOP6aGN5aSW5Yik5pa35omA5pyJ6LOH5rqQ5bey5Yqg6LyJ5a6M55Wi5pmCLOWKoOi8iemAsuW6puetieaWvDFcclxuICAgICAgICAgICAgaWYgKHN0YXRlID09IDEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWxsUHJvZ3Jlc3NFbmRDb3VudCArPSAxO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYWxsUHJvZ3Jlc3NFbmRDb3VudCA9PSB0aGlzLmNvdW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGxQcm9ncmVzcyA9IDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8v55W25YmN5omA5pyJ5Yqg6LyJ55qE57i96YCy5bqmXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNhbGxGdW4uaGFzKG51bGwpKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgLy/poJDpmLLlpJrlgIvph43opIfpgLLluqblm57lgrNcclxuICAgICAgICAgICAgICAgIC8v5Yik5pa36IiH5LiK5LiA5YCL6YCy5bqm5piv5LiA5qij55qE6KmxLOWwh+S4jeWft+ihjOWbnuWCsyznrYnlvoXmnInmlrDpgLLluqbov5HkvoZcclxuICAgICAgICAgICAgICAgIGxldCBjaGVja1Byb2dyZXNzOiBib29sZWFuID1cclxuICAgICAgICAgICAgICAgICAgICAoZ2xvYmFsLlV0aWwucm91bmREb3duKHRoaXMuYmVmb3JlUHJvZ3Jlc3MsIDIpID09XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdsb2JhbC5VdGlsLnJvdW5kRG93bih0aGlzLmFsbFByb2dyZXNzLCAyKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGNoZWNrUHJvZ3Jlc3MpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5iZWZvcmVQcm9ncmVzcyA9IHRoaXMuYWxsUHJvZ3Jlc3M7XHJcbiAgICAgICAgICAgICAgICAgICAgLy/lm57lgrPnlbbliY3pgLLluqYs5bCH57K+5bqm5bCH5L2O54K65bCP5pW46bue5b6M5YWp5L2NXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWxsRnVuLmdldChudWxsKShnbG9iYWwuVXRpbC5yb3VuZERvd24odGhpcy5hbGxQcm9ncmVzcywgMikpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmFsbFByb2dyZXNzID49IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy/nlbblhajpg6jliqDovInlrozlvows5riF6Zmk55W25YmN5Yqg6LyJ5aSa5bCR5Lu25p2x6KW/55qE6KiI5pW4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY291bnQgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL+S6i+S7tue1kOadnyzmuIXpmaToqbLmmK/kv53lrZjnmoRmdW5jdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbGxGdW4uZGVsZXRlKG51bGwpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5qyh6LOH5rqQ5Yqg6LyJ54mp5Lu2LOebo+iBveaYr+WQpuaciWNhbGxiYWNrLOmaqOS5i+i/lOWbnuipsueLgOaFi1xyXG4gICAgICAgICAqIOazqOaEjyzoqbLni4DmhYvnhKHnuL3os4fmupDnm6Pogb3lm57lgrPkuovku7ZcclxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxyXG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzdGF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBsb2FkU2Vjb25kYXJ5RXZlbnRDYWxsYmFjayhuYW1lOiBzdHJpbmcsIHN0YXRlOiBudW1iZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5vbmx5UmVzRXZlbnRDYWxsYmFjayhuYW1lLCBzdGF0ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDllq7kuIDos4fmupDov5Tlm57liKTmlrcs55So5oi25piv5ZCm5pyJ5re75YqgY2FsbGJhY2vlj4PmlbhcclxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxyXG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzdGF0ZVxyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHJpdmF0ZSBvbmx5UmVzRXZlbnRDYWxsYmFjayhuYW1lOiBzdHJpbmcsIHN0YXRlOiBudW1iZXIpIHtcclxuXHJcbiAgICAgICAgICAgIC8v5aaC5p6c5pyJ57aB6KiC55qE5Zue5YKz5pa55rOV5pmCLOWwh+WbnuWCs+ipsuizh+a6kOeVtuWJjeeahOWKoOi8iemAsuW6plxyXG4gICAgICAgICAgICBpZiAodGhpcy5jYWxsRnVuLmhhcyhuYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYWxsRnVuLmdldChuYW1lKShzdGF0ZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhdGUgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8v5LqL5Lu257WQ5p2fLOa4hemZpOipsuaYr+S/neWtmOeahGZ1bmN0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWxsRnVuLmRlbGV0ZShuYW1lKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5Yqg6LyJ6Kmy6LOH5paZ5aS+5bqV5LiL5omA5pyJ6LOH5rqQIOazqOaEjzog6ZyA5a2Y5pS+5pa8IHJlc291cmNlc+S4rVxyXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIDog6Ieq6KiC576p5ou/5Y+W6LOH5rqQ5pmC55qE5ZCN56ixXHJcbiAgICAgICAgICogQHBhcmFtIHtMb2FkVHlwZX0gdHlwZSA6IOimgeeNsuWPlueahOizh+a6kOmhnuWei1xyXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgOiDopoHnjbLlj5bnmoTos4fmupDkvY3nva5cclxuICAgICAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlzTGFuZ3VhZ2VVc2VkIDog5piv5ZCm6KaB5L2/55So6Kqe57O75L2N572uXHJcbiAgICAgICAgICogQHJldHVybiB7dGhpc31cclxuICAgICAgICAgKi9cclxuICAgICAgICBsb2FkQXNzZXQobmFtZTogc3RyaW5nLCB0eXBlOiB0eXBlLkxvYWRUeXBlLCB1cmw6IHN0cmluZywgaXNMYW5ndWFnZVVzZWQ/OiBib29sZWFuKTogdGhpcyB7XHJcbiAgICAgICAgICAgIHRoaXMuY291bnQgKz0gMTtcclxuICAgICAgICAgICAgaWYgKGlzTGFuZ3VhZ2VVc2VkKSB7XHJcbiAgICAgICAgICAgICAgICB1cmwgPSBgJHt1cmx9LyR7dGhpcy5jb25maWdNYW5hZ2VyLmxhbmd1YWdlfWA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5sb2FkVHlwZUhhbmRsZXIuZXhlY3V0ZUxvYWQobmFtZSwgdHlwZSwgdXJsKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDliqDovIkg6KmyIGFzc2V0QnVuZGxlIOW6leS4i+izh+a6kFxyXG4gICAgICAgICAqIOS9v+eUqOatpOaWueazleiAhSzliqDovInni4DmhYvlrZjmlL7mrKHliqDovInkuK0gc2Vjb25kYXJ5TG9hZFN0YXRlXHJcbiAgICAgICAgICog5rOo5oSPOumgiOaWvFVJ5Yu+6YG46YWN572u54K6QnVuZGxl6LOH5paZ5aS+XHJcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgOiDoh6roqILnvqnmi7/lj5bos4fmupDmmYLnmoTlkI3nqLFcclxuICAgICAgICAgKiBAcGFyYW0ge0xvYWRUeXBlfSB0eXBlIDog6KaB542y5Y+W55qE6LOH5rqQ6aGe5Z6LXHJcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IHVybCA6IOimgeeNsuWPlueahOizh+a6kOS9jee9rlxyXG4gICAgICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNMYW5ndWFnZVVzZWQgOiDmmK/lkKbopoHkvb/nlKjoqp7ns7vkvY3nva5cclxuICAgICAgICAgKi9cclxuICAgICAgICBsb2FkQnVuZGxlKG5hbWU6IHN0cmluZywgdHlwZTogdHlwZS5Mb2FkVHlwZSwgdXJsOiBzdHJpbmcsIGlzTGFuZ3VhZ2VVc2VkPzogYm9vbGVhbik6IHRoaXMge1xyXG5cclxuICAgICAgICAgICAgaWYgKGlzTGFuZ3VhZ2VVc2VkKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdXJsID0gYCR7dXJsfS8ke3RoaXMuY29uZmlnTWFuYWdlci5sYW5ndWFnZX1gXHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLmxvYWRUeXBlSGFuZGxlci5leGVjdXRlTG9hZEJ1bmRsZShuYW1lLCB0eXBlLCB1cmwpLnRoZW4oKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5L+d5a2Y5L2/55So6ICF6KaBY2FsbGJhY2vnmoTmlrnms5Us55W25pyJ5Zue5YKz6YCy5bqm5pmC5bCH6YCP6YGOIGxvYWRFdmVudENhbGxiYWNr5pa55rOV5Zue5YKz6YCy5bqmXHJcbiAgICAgICAgICogQHBhcmFtIGNhbGxGdW5cclxuICAgICAgICAgKiBAcGFyYW0gcmVzTmFtZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNhbGxiYWNrKGNhbGxGdW46IChwcm9ncmVzczogbnVtYmVyKSA9PiB2b2lkLCByZXNOYW1lPzogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIGlmIChyZXNOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jYWxsRnVuLmhhcyhyZXNOYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIEVycm9yTWFuYWdlci5pbnN0YW5jZS5leGVjdXRlRXJyb3IodHlwZS5FcnJvclR5cGUuTE9BRF9GVywgXCLlpoLmnpzmi7/lj5boqbLos4fmupDpgLLluqYs6KuL5Yu/6YeN6KSHY2FsbGJhY2tcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jYWxsRnVuLnNldChyZXNOYW1lLCBjYWxsRnVuKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2FsbEZ1bi5oYXMobnVsbCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBFcnJvck1hbmFnZXIuaW5zdGFuY2UuZXhlY3V0ZUVycm9yKHR5cGUuRXJyb3JUeXBlLkxPQURfRlcsIFwi5aaC5p6c5ou/5Y+W57i96YCy5bqmLOiri+WLv+WcqOS5i+WJjeizh+a6kOWwmuacquWKoOi8ieWujOWJjSzph43opIdjYWxsYmFja1wiKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbGxGdW4uc2V0KG51bGwsIGNhbGxGdW4pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDmn6XnnIvoqbLos4fmupDmmK/lkKblt7LliqDovInlroznlaJcclxuICAgICAgICAgKiBAcGFyYW0gbmFtZVxyXG4gICAgICAgICAqIEBwYXJhbSBpc01haW5SZXNvdXJjZXNcclxuICAgICAgICAgKi9cclxuICAgICAgICBnZXRMb2FkU3RhdGUobmFtZTogc3RyaW5nLCBpc01haW5SZXNvdXJjZXM6IGJvb2xlYW4pOiBib29sZWFuIHtcclxuXHJcbiAgICAgICAgICAgIGlmIChpc01haW5SZXNvdXJjZXMpIHtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5faW5pdGlhbExvYWRTdGF0ZS5nZXQobmFtZSkgPT0gMTtcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2luaXRpYWxMb2FkU3RhdGUuZ2V0KG5hbWUpID09IDE7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDliqDovInlpJbpg6johbPmnKxcclxuICAgICAgICAgKiBAcGFyYW0gbmFtZVxyXG4gICAgICAgICAqIEBwYXJhbSB0eXBlXHJcbiAgICAgICAgICogQHBhcmFtIHVybFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGxvYWRFeHRlcm5hbFNjcmlwdChuYW1lOiBzdHJpbmcsIHR5cGU6IHR5cGUuTG9hZFR5cGUsIHVybDogc3RyaW5nKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmxvYWRUeXBlSGFuZGxlci5leGVjdXRlTG9hZEV4dGVybmFsU2NyaXB0KG5hbWUsIHR5cGUsIHVybCk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOmHjee9rlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHJlc2V0KCkge1xyXG5cclxuICAgICAgICAgICAgTG9hZFJlc01hbmFnZXIuX2luc3RhbmNlID0gbnVsbDtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tc2V0dGVyLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4gICAgICAgIHNldCBpbml0aWFsTG9hZFN0YXRlKHZhbHVlOiBNYXA8c3RyaW5nLCBudW1iZXI+KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2luaXRpYWxMb2FkU3RhdGUgPSB2YWx1ZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0IHNlY29uZGFyeUxvYWRTdGF0ZSh2YWx1ZTogTWFwPHN0cmluZywgbnVtYmVyPikge1xyXG4gICAgICAgICAgICB0aGlzLl9zZWNvbmRhcnlMb2FkU3RhdGUgPSB2YWx1ZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0IGltZ1Jlcyh2YWx1ZTogTWFwPHN0cmluZywgTWFwPHN0cmluZywgY2MuU3ByaXRlRnJhbWU+Pikge1xyXG4gICAgICAgICAgICB0aGlzLl9pbWdSZXMgPSB2YWx1ZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0IHNwaW5lUmVzKHZhbHVlOiBNYXA8c3RyaW5nLCBzcC5Ta2VsZXRvbkRhdGE+KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NwaW5lUmVzID0gdmFsdWVcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldCByZWFkRmlsZVJlcyh2YWx1ZTogTWFwPHN0cmluZywgTWFwPHN0cmluZywgc3RyaW5nPj4pIHtcclxuICAgICAgICAgICAgdGhpcy5fcmVhZEZpbGVSZXMgPSB2YWx1ZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0IHByZWZhYlJlcyh2YWx1ZTogTWFwPHN0cmluZywgY2MuUHJlZmFiPikge1xyXG4gICAgICAgICAgICB0aGlzLl9wcmVmYWJSZXMgPSB2YWx1ZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0IG11c2ljUmVzKHZhbHVlOiBNYXA8c3RyaW5nLCBjYy5BdWRpb0NsaXA+KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX211c2ljUmVzID0gdmFsdWVcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldCBzY3JpcHRSZXModmFsdWU6IFNldDxzdHJpbmc+KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NjcmlwdFJlcyA9IHZhbHVlXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXQgc2NlbmVSZXModmFsdWU6IE1hcDxzdHJpbmcsIGNjLlNjZW5lQXNzZXQ+KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NjZW5lUmVzID0gdmFsdWVcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1nZXR0ZXItLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiAgICAgICAgZ2V0IGluaXRpYWxMb2FkU3RhdGUoKTogTWFwPHN0cmluZywgbnVtYmVyPiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9pbml0aWFsTG9hZFN0YXRlXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBnZXQgc2Vjb25kYXJ5TG9hZFN0YXRlKCk6IE1hcDxzdHJpbmcsIG51bWJlcj4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc2Vjb25kYXJ5TG9hZFN0YXRlXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBnZXQgaW1nUmVzKCk6IE1hcDxzdHJpbmcsIE1hcDxzdHJpbmcsIGNjLlNwcml0ZUZyYW1lPj4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faW1nUmVzXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBnZXQgc3BpbmVSZXMoKTogTWFwPHN0cmluZywgc3AuU2tlbGV0b25EYXRhPiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zcGluZVJlc1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZ2V0IHJlYWRGaWxlUmVzKCk6IE1hcDxzdHJpbmcsIE1hcDxzdHJpbmcsIHN0cmluZz4+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3JlYWRGaWxlUmVzXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBnZXQgcHJlZmFiUmVzKCk6IE1hcDxzdHJpbmcsIGNjLlByZWZhYj4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcHJlZmFiUmVzXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBnZXQgbXVzaWNSZXMoKTogTWFwPHN0cmluZywgY2MuQXVkaW9DbGlwPiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tdXNpY1Jlc1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZ2V0IHNjcmlwdFJlcygpOiBTZXQ8c3RyaW5nPiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zY3JpcHRSZXNcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGdldCBzY2VuZVJlcygpOiBNYXA8c3RyaW5nLCBjYy5TY2VuZUFzc2V0PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zY2VuZVJlc1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9FcnJvci9FbnVtL0Vycm9yVHlwZS50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9FcnJvci9FcnJvck1hbmFnZXIudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vTG9hZC9Mb2FkUmVzTWFuYWdlci50c1wiIC8+XHJcblxyXG5uYW1lc3BhY2UgZmNjIHtcclxuXHJcbiAgICBlbnVtIE11c2ljU3RhdGVUeXBlIHtcclxuICAgICAgICBTVE9QID0gLTEsICAgICAgLy/nhKHmkqXmlL5cclxuICAgICAgICBQTEFZSU5HID0gMSwgICAgLy/mkqXmlL7kuK1cclxuICAgICAgICBQQVVTRSA9IDIsICAgICAgLy/mmqvlgZzkuK1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBBdXRob3IgWElBTy1MSS1QSU5cclxuICAgICAqIEBEZXNjcmlwdGlvbiDpn7PmqILmkqXmlL585pqr5YGc5o6n5Yi25ZmoLOi3n+mfs+aViOmhnueojeW+ruS4jeWQjCzlj6rkv53lrZjnlbbkuIvkuIDlgItNdXNpY0lEXHJcbiAgICAgKiBARGF0ZSAyMDIxLTA0LTE0IOS4i+WNiCAyMDoyNFxyXG4gICAgICogQFZlcnNpb24gMS4xXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCAgY2xhc3MgTXVzaWNDb250cm9sbGVyIGltcGxlbWVudHMgSUYuSUF1ZGlvVHlwZSB7XHJcblxyXG4gICAgICAgIHByaXZhdGUgbXVzaWNJRDogbnVtYmVyO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAgICAgdGhpcy5tdXNpY0lEID0gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOaSpeaUvuiDjOaZr+mfs+aogizkuKbphY3lkIjkuqvlhYPos4fmlpks5L2c55u45bCN5oeJ55qE5pKl5pS+5qih5byP6JmV55CGXHJcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcclxuICAgICAgICAgKiBAcGFyYW0ge01hcDxzdHJpbmcsIGFueT59IGRhdGFcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgcGxheShuYW1lOiBzdHJpbmcsIGRhdGE6IE1hcDxzdHJpbmcsIGFueT4pOnZvaWQge1xyXG5cclxuICAgICAgICAgICAgbGV0IHZvbHVtZTogbnVtYmVyID0gZGF0YS5nZXQoXCJ2b2x1bWVcIik7ICAgICAgICAgICAgLy/pn7Pph49cclxuICAgICAgICAgICAgbGV0IGxvb3A6IGJvb2xlYW4gPSBkYXRhLmdldChcImxvb3BcIik7ICAgICAgICAgICAgICAgLy/mmK/lkKblvqrnkrBcclxuXHJcbiAgICAgICAgICAgIC8v542y5Y+W55W25YmN6Z+z5qiC5pKl5pS+54uA5oWLLC0xIOeEoeaSpeaUviAsIDEg5pKl5pS+5LitICAyIOaaq+WBnOS4rVxyXG4gICAgICAgICAgICBsZXQgc3RhdGU6IG51bWJlciA9IGNjLmF1ZGlvRW5naW5lLmdldFN0YXRlKHRoaXMubXVzaWNJRCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIUxvYWRSZXNNYW5hZ2VyLmluc3RhbmNlLm11c2ljUmVzLmhhcyhuYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgRXJyb3JNYW5hZ2VyLmluc3RhbmNlLmV4ZWN1dGVFcnJvcih0eXBlLkVycm9yVHlwZS5BVURJT19GVywgYCR7bmFtZX0g54Sh5q2k6LOH5rqQLOiri+aqouWvn+izh+a6kOmhniBtdXNpY1Jlc+WFp+eahOizh+a6kOaYr+WQpumMr+iqpGApO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL+WmguaenOipsumfs+aoguaYr+aaq+WBnOaooeW8jyzlm57lvqnmkqXmlL5cclxuICAgICAgICAgICAgaWYgKHN0YXRlID09IE11c2ljU3RhdGVUeXBlLlBBVVNFKSB7XHJcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5yZXN1bWUodGhpcy5tdXNpY0lEKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy/lpoLmnpzkuIrkuIDpppbog4zmma/pn7PmqILmraPlnKjmkqXmlL4s5YWI5pqr5YGcXHJcbiAgICAgICAgICAgIGlmIChzdGF0ZSA9PSBNdXNpY1N0YXRlVHlwZS5QTEFZSU5HKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3AoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IGF1ZGlvQ2xpcCA9IExvYWRSZXNNYW5hZ2VyLmluc3RhbmNlLm11c2ljUmVzLmdldChuYW1lKTtcclxuICAgICAgICAgICAgbGV0IG11c2ljSUQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWMoYXVkaW9DbGlwLCBsb29wKTtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0Vm9sdW1lKG11c2ljSUQsIHZvbHVtZSk7XHJcbiAgICAgICAgICAgIHRoaXMubXVzaWNJRCA9IG11c2ljSUQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKuWBnOatouiDjOaZr+mfs+aoglxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzdG9wKCk6dm9pZCB7XHJcblxyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRWb2x1bWUodGhpcy5tdXNpY0lELCAwKTtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcCh0aGlzLm11c2ljSUQpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOaaq+WBnOiDjOaZr+mfs+aoglxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBwYXVzZSgpOnZvaWQge1xyXG4gICAgICAgICAgICBpZiAoY2MuYXVkaW9FbmdpbmUuZ2V0U3RhdGUodGhpcy5tdXNpY0lEKSAhPSBjYy5hdWRpb0VuZ2luZS5BdWRpb1N0YXRlLlBMQVlJTkcpIHJldHVybjtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGF1c2UodGhpcy5tdXNpY0lEKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vRXJyb3IvRW51bS9FcnJvclR5cGUudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vRXJyb3IvRXJyb3JNYW5hZ2VyLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL0xvYWQvTG9hZFJlc01hbmFnZXIudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vRW51bS9BdWRpb1N0YXRlVHlwZS50c1wiIC8+XHJcbm5hbWVzcGFjZSBmY2Mge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQEF1dGhvciBYSUFPLUxJLVBJTlxyXG4gICAgICogQERlc2NyaXB0aW9uIOaViOaenOmfs+aViOaSpeaUvnzmmqvlgZzmjqfliLblmahcclxuICAgICAqIEBEYXRlIDIwMjEtMDQtMTQg5LiL5Y2IIDIwOjI0XHJcbiAgICAgKiBAVmVyc2lvbiAxLjFcclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGNsYXNzIEVmZmVjdENvbnRyb2xsZXIgaW1wbGVtZW50cyBJRi5JQXVkaW9UeXBlIHtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBlZmZlY3RJRDogTWFwPHN0cmluZywgbnVtYmVyPjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZWZmZWN0SUQgPSBuZXcgTWFwPHN0cmluZywgbnVtYmVyPigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5pKl5pS+5pWI5p6c6Z+z5pWILOS4pumFjeWQiOS6q+WFg+izh+aWmSzkvZznm7jlsI3mh4nnmoTmkqXmlL7mqKHlvI/omZXnkIZcclxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxyXG4gICAgICAgICAqIEBwYXJhbSB7TWFwPHN0cmluZywgYW55Pn0gZGF0YSA6IOaSpeaUvuaooeW8j+izh+aWmVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBwbGF5KG5hbWU6IHN0cmluZywgZGF0YTogTWFwPHN0cmluZywgYW55Pik6dm9pZCB7XHJcblxyXG4gICAgICAgICAgICBsZXQgdm9sdW1lOiBudW1iZXIgPSBkYXRhLmdldChcInZvbHVtZVwiKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+mfs+mHj1xyXG4gICAgICAgICAgICBsZXQgY2FuU3VwZXJpbXBvc2U6IHR5cGUuQXVkaW9TdGF0ZVR5cGUgPSBkYXRhLmdldChcImNhblN1cGVyaW1wb3NlXCIpOyAgICAgICAvL+WPr+WQpueWiuWKoOaSpeaUvlxyXG4gICAgICAgICAgICBsZXQgbG9vcDogYm9vbGVhbiA9IGRhdGEuZ2V0KFwibG9vcFwiKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+W+queSsOeLgOaFi1xyXG4gICAgICAgICAgICBsZXQgaWQgPSB0aGlzLmVmZmVjdElELmdldChuYW1lKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v6Kmy6Z+z5qiCSURcclxuICAgICAgICAgICAgbGV0IHN0YXRlOiBib29sZWFuO1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5nZXRTdGF0ZShpZCkgPT0gY2MuYXVkaW9FbmdpbmUuQXVkaW9TdGF0ZS5FUlJPUiA/IHN0YXRlID0gZmFsc2UgOiBzdGF0ZSA9IHRydWU7ICAgLy/liKTmlrfoqbLpn7PmqILmmK/lkKblnKjmraPmkqXmlL5cclxuXHJcbiAgICAgICAgICAgIGlmICghTG9hZFJlc01hbmFnZXIuaW5zdGFuY2UubXVzaWNSZXMuaGFzKG5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICBFcnJvck1hbmFnZXIuaW5zdGFuY2UuZXhlY3V0ZUVycm9yKHR5cGUuRXJyb3JUeXBlLkFVRElPX0ZXLCBgJHtuYW1lfSDnhKHmraTos4fmupAs6KuL5qqi5a+f6LOH5rqQ6aGeIG11c2ljUmVz5YWn55qE6LOH5rqQ5piv5ZCm6Yyv6KqkYCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChjYW5TdXBlcmltcG9zZSA9PT0gdHlwZS5BdWRpb1N0YXRlVHlwZS5OT1RfUExBWUlORyAmJiBzdGF0ZSkgcmV0dXJuOyAgICAgICAgIC8v5aaC5p6c55W25YmN5q2j5Zyo5pKl5pS+LOWwh+ebtOaOpemboumWi1xyXG5cclxuICAgICAgICAgICAgaWYgKGNhblN1cGVyaW1wb3NlID09PSB0eXBlLkF1ZGlvU3RhdGVUeXBlLkNMRUFSX1RPX1JFUExBWSAmJiBzdGF0ZSkgeyAgICAgICAgICAgLy/lpoLmnpznlbbliY3mraPlnKjmkqXmlL4s5bCH55u05o6l5YGc5q2i5q2j5Zyo5pKl5pS+55qE6Z+z5qiCLOS4pumHjeaWsOaSpeaUvlxyXG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcChpZCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBhdWRpb0NsaXAgPSBMb2FkUmVzTWFuYWdlci5pbnN0YW5jZS5tdXNpY1Jlcy5nZXQobmFtZSk7XHJcbiAgICAgICAgICAgIGxldCBlZmZJRCA9IGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QoYXVkaW9DbGlwLCBsb29wKTtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0Vm9sdW1lKGVmZklELCB2b2x1bWUpO1xyXG4gICAgICAgICAgICB0aGlzLmVmZmVjdElELnNldChuYW1lLCBlZmZJRCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDlgZzmraLoqbLpn7PmqIIs5Lim5riF6Zmk6KmyTWFwIGVmZmVjdElEXHJcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgc3RvcChuYW1lOiBzdHJpbmcpOnZvaWQge1xyXG5cclxuICAgICAgICAgICAgaWYgKCF0aGlzLmVmZmVjdElELmhhcyhuYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3AodGhpcy5lZmZlY3RJRC5nZXQobmFtZSkpO1xyXG4gICAgICAgICAgICB0aGlzLmVmZmVjdElELmRlbGV0ZShuYW1lKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOWBnOatouaJgOaciemfs+aViCzkuKbmuIXpmaTmlbTlgItNYXAgZWZmZWN0SURcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgc3RvcEFsbCgpOnZvaWQge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBrZXkgb2YgdGhpcy5lZmZlY3RJRC5rZXlzKCkpIHtcclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3AodGhpcy5lZmZlY3RJRC5nZXQoa2V5KSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5lZmZlY3RJRC5jbGVhcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0lBdWRpby9JQXVkaW9GYWN0b3J5LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vSUF1ZGlvL0lBdWRpb01hbmFnZXIudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9BdWRpb1R5cGUvTXVzaWNDb250cm9sbGVyLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vQXVkaW9UeXBlL0VmZmVjdENvbnRyb2xsZXIudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9FbnVtL0F1ZGlvU3RhdGVUeXBlLnRzXCIgLz5cclxubmFtZXNwYWNlIGZjYyB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAQXV0aG9yIFhJQU8tTEktUElOXHJcbiAgICAgKiBARGVzY3JpcHRpb24g6Z+z5qiC5bel5bug6aGeLOa0vueZvOmfs+aoguS6i+S7tlxyXG4gICAgICogQERhdGUgMjAyMS0wNS0xMyDkuIrljYggMTA6MjRcclxuICAgICAqIEBWZXJzaW9uIDEuMVxyXG4gICAgICovXHJcbiAgICBleHBvcnQgY2xhc3MgQXVkaW9GYWN0b3J5IGltcGxlbWVudHMgSUYuSUF1ZGlvRmFjdG9yeSB7XHJcblxyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgbXVzaWNWb2x1bWU6IG51bWJlcjtcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IGVmZmVjdFZvbHVtZTogbnVtYmVyO1xyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgY2FuU3VwZXJpbXBvc2U6IGJvb2xlYW47XHJcbiAgICAgICAgcHJpdmF0ZSBtdXNpY09uTXV0ZTogYm9vbGVhbjtcclxuICAgICAgICBwcml2YXRlIGVmZmVjdE9uTXV0ZTogYm9vbGVhbjtcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IGxvb3A6IGJvb2xlYW47XHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBtdXNpY0RhdGE6IE1hcDxzdHJpbmcsIE1hcDxzdHJpbmcsIHN0cmluZyB8IGJvb2xlYW4gfCBudW1iZXI+PjtcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IGVmZmVjdERhdGE6IE1hcDxzdHJpbmcsIE1hcDxzdHJpbmcsIHN0cmluZyB8IHR5cGUuQXVkaW9TdGF0ZVR5cGUgfCBib29sZWFuIHwgbnVtYmVyPj47XHJcbiAgICAgICAgcHJpdmF0ZSBtdXNpY05vcm1hbERhdGE6IE1hcDxzdHJpbmcsIHN0cmluZyB8IGJvb2xlYW4gfCBudW1iZXI+O1xyXG4gICAgICAgIHByaXZhdGUgZWZmZWN0Tm9ybWFsRGF0YTogTWFwPHN0cmluZywgc3RyaW5nIHwgdHlwZS5BdWRpb1N0YXRlVHlwZSB8IGJvb2xlYW4gfCBudW1iZXI+O1xyXG4gICAgICAgIHByaXZhdGUgbXVzaWNDb250cm9sbGVyOiBNdXNpY0NvbnRyb2xsZXJcclxuICAgICAgICBwcml2YXRlIGVmZmVjdENvbnRyb2xsZXI6IEVmZmVjdENvbnRyb2xsZXJcclxuICAgICAgICBwcml2YXRlIGF1ZGlvTWFuYWdlcjogSUYuSUF1ZGlvTWFuYWdlcjtcclxuICAgICAgICBwcml2YXRlIGNvbmZpZ01hbmFnZXI6IElGLklDb25maWdNYW5hZ2VyO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihhdWRpb01hbmFnZXI6IElGLklBdWRpb01hbmFnZXIsIGNvbmZpZ01hbmFnZXI6IElGLklDb25maWdNYW5hZ2VyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXVkaW9NYW5hZ2VyID0gYXVkaW9NYW5hZ2VyOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/pm5nlkJHntoHlrppcclxuICAgICAgICAgICAgdGhpcy5jb25maWdNYW5hZ2VyID0gY29uZmlnTWFuYWdlcjsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+mbmeWQkee2geWumlxyXG4gICAgICAgICAgICB0aGlzLm11c2ljVm9sdW1lID0gdGhpcy5jb25maWdNYW5hZ2VyLm11c2ljVm9sdW1lOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5Yid5aeL6Z+z6YePXHJcbiAgICAgICAgICAgIHRoaXMuZWZmZWN0Vm9sdW1lID0gdGhpcy5jb25maWdNYW5hZ2VyLmVmZmVjdFZvbHVtZTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/liJ3lp4vpn7Pph49cclxuICAgICAgICAgICAgdGhpcy5jYW5TdXBlcmltcG9zZSA9IGZhbHNlOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+WIneWni+eEoUxvb3DnmoTpn7PmqILmmK/lkKblj6/ku6XnlorliqBcclxuICAgICAgICAgICAgdGhpcy5tdXNpY09uTXV0ZSA9IHRoaXMuY29uZmlnTWFuYWdlci5pc011c2ljT25NdXRlOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+WIneWni+mfs+aoguaYr+WQpuaJk+mWi1xyXG4gICAgICAgICAgICB0aGlzLmVmZmVjdE9uTXV0ZSA9IHRoaXMuY29uZmlnTWFuYWdlci5pc0VmZmVjdE9uTXV0ZTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5Yid5aeL5pWI5p6c6Z+z5piv5ZCm5omT6ZaLXHJcbiAgICAgICAgICAgIHRoaXMubG9vcCA9IGZhbHNlOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/liJ3lp4vpn7PmqILlvqrnkrBcclxuICAgICAgICAgICAgdGhpcy5tdXNpY0RhdGEgPSBuZXcgTWFwPHN0cmluZywgTWFwPHN0cmluZywgc3RyaW5nIHwgYm9vbGVhbiB8IG51bWJlcj4+KCk7ICAgICAgICAgICAgICAgICAgICAgICAgICAvL+WIneWni+S6q+WFg+aooeW8j+eahOmfs+aoglxyXG4gICAgICAgICAgICB0aGlzLmVmZmVjdERhdGEgPSBuZXcgTWFwPHN0cmluZywgTWFwPHN0cmluZywgc3RyaW5nIHwgdHlwZS5BdWRpb1N0YXRlVHlwZSB8IGJvb2xlYW4gfCBudW1iZXI+PigpOyAgIC8v5Yid5aeL5Lqr5YWD5qih5byP55qE5pWI5p6c6Z+z5pWIXHJcbiAgICAgICAgICAgIHRoaXMubXVzaWNDb250cm9sbGVyID0gbmV3IE11c2ljQ29udHJvbGxlcigpICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/liJ3lp4vmkq3mlL5NdXNpY+mfs+aogumhnlxyXG4gICAgICAgICAgICB0aGlzLmVmZmVjdENvbnRyb2xsZXIgPSBuZXcgRWZmZWN0Q29udHJvbGxlcigpICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5Yid5aeL5pKt5pS+RWZmZWN06Z+z5pWI6aGeXHJcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZURhdGEoKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/liJ3lp4vljJbkuqvlhYPpoJDoqK3mkqXmlL7mqKHlvI9cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOWIneWni+WMluS6q+WFg+mgkOioreaSpeaUvuaooeW8j1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHByaXZhdGUgaW5pdGlhbGl6ZURhdGEoKSB7XHJcbiAgICAgICAgICAgIHRoaXMubXVzaWNOb3JtYWxEYXRhID0gbmV3IE1hcDxzdHJpbmcsIHN0cmluZyB8IGJvb2xlYW4gfCBudW1iZXI+KCk7XHJcbiAgICAgICAgICAgIHRoaXMuZWZmZWN0Tm9ybWFsRGF0YSA9IG5ldyBNYXA8c3RyaW5nLCBzdHJpbmcgfCB0eXBlLkF1ZGlvU3RhdGVUeXBlIHwgYm9vbGVhbiB8IG51bWJlcj4oKTtcclxuICAgICAgICAgICAgdGhpcy5tdXNpY05vcm1hbERhdGEuc2V0KFwidm9sdW1lXCIsIHRoaXMubXVzaWNWb2x1bWUpO1xyXG4gICAgICAgICAgICB0aGlzLm11c2ljTm9ybWFsRGF0YS5zZXQoXCJsb29wXCIsIHRoaXMubG9vcCk7XHJcbiAgICAgICAgICAgIHRoaXMuZWZmZWN0Tm9ybWFsRGF0YS5zZXQoXCJjYW5TdXBlcmltcG9zZVwiLCB0eXBlLkF1ZGlvU3RhdGVUeXBlLkNMRUFSX1RPX1JFUExBWSk7XHJcbiAgICAgICAgICAgIHRoaXMuZWZmZWN0Tm9ybWFsRGF0YS5zZXQoXCJ2b2x1bWVcIiwgdGhpcy5lZmZlY3RWb2x1bWUpO1xyXG4gICAgICAgICAgICB0aGlzLmVmZmVjdE5vcm1hbERhdGEuc2V0KFwibG9vcFwiLCB0aGlzLmxvb3ApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5L+d5a2Y6Kmy6IOM5pmv6Z+z5qiC5pKl5pS+5qih5byP6Kit5a6aXHJcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSDpn7PmqILmqpTlkI3nqLFcclxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gdm9sdW1lIC0g6Z+z6YePXHJcbiAgICAgICAgICogQHBhcmFtIHtib29sZWFufSBsb29wIC0g5piv5ZCm5b6q55KwXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHNldHRpbmdNdXNpYyhcclxuICAgICAgICAgICAgbmFtZTogc3RyaW5nLFxyXG4gICAgICAgICAgICB2b2x1bWU6IG51bWJlciA9IHRoaXMubXVzaWNWb2x1bWUsXHJcbiAgICAgICAgICAgIGxvb3A6IGJvb2xlYW4gPSB0aGlzLmxvb3ApIHtcclxuICAgICAgICAgICAgbGV0IGRhdGE6IE1hcDxzdHJpbmcsIHN0cmluZyB8IGJvb2xlYW4gfCBudW1iZXI+ID0gbmV3IE1hcDxzdHJpbmcsIHN0cmluZyB8IGJvb2xlYW4gfCBudW1iZXI+KCk7XHJcbiAgICAgICAgICAgIGRhdGEuc2V0KFwidm9sdW1lXCIsIHZvbHVtZSk7XHJcbiAgICAgICAgICAgIGRhdGEuc2V0KFwibG9vcFwiLCBsb29wKTtcclxuICAgICAgICAgICAgdGhpcy5tdXNpY0RhdGEuc2V0KG5hbWUsIGRhdGEpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOS/neWtmOipsuaViOaenOmfs+aViOaSpeaUvuaooeW8j+ioreWumlxyXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC3pn7PmqILmqpTlkI3nqLFcclxuICAgICAgICAgKiBAcGFyYW0ge0F1ZGlvU3RhdGVUeXBlfSBjYW5TdXBlcmltcG9zZSAtIOaYr+WQpueWiuWKoOaSpeaUvlxyXG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSB2b2x1bWUgLSDpn7Pph49cclxuICAgICAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGxvb3AgLSDmmK/lkKblvqrnkrBcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgc2V0dGluZ0VmZmVjdChuYW1lOiBzdHJpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FuU3VwZXJpbXBvc2U6IHR5cGUuQXVkaW9TdGF0ZVR5cGUgPSB0eXBlLkF1ZGlvU3RhdGVUeXBlLk5PVF9QTEFZSU5HLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZvbHVtZTogbnVtYmVyID0gdGhpcy5tdXNpY1ZvbHVtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb29wOiBib29sZWFuID0gdGhpcy5sb29wKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgZGF0YTogTWFwPHN0cmluZywgc3RyaW5nIHwgdHlwZS5BdWRpb1N0YXRlVHlwZSB8IGJvb2xlYW4gfCBudW1iZXI+ID0gbmV3IE1hcDxzdHJpbmcsIHN0cmluZyB8IHR5cGUuQXVkaW9TdGF0ZVR5cGUgfCBib29sZWFuIHwgbnVtYmVyPigpO1xyXG4gICAgICAgICAgICBkYXRhLnNldChcImNhblN1cGVyaW1wb3NlXCIsIGNhblN1cGVyaW1wb3NlKTtcclxuICAgICAgICAgICAgZGF0YS5zZXQoXCJ2b2x1bWVcIiwgdm9sdW1lKTtcclxuICAgICAgICAgICAgZGF0YS5zZXQoXCJsb29wXCIsIGxvb3ApO1xyXG4gICAgICAgICAgICB0aGlzLmVmZmVjdERhdGEuc2V0KG5hbWUsIGRhdGEpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOaSpeaUvuiDjOaZr+mfs+aoglxyXG4gICAgICAgICAqIOWmguaenOaLv+WPluS4jeWIsOS6q+WFg+aSpeaUvuizh+aWmSzlsIfmi7/lj5bpoJDoqK3os4fmlplcclxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIOmfs+aoguaqlOWQjVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBtdXNpY1BsYXkobmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIGlmICghbmFtZS50cmltKCkpIHJldHVybjsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/mqpTlkI3nqbrlgLzliKTmlrdcclxuICAgICAgICAgICAgaWYgKHRoaXMuYXVkaW9NYW5hZ2VyLm11c2ljT25NdXRlKSByZXR1cm47ICAgICAgICAgICAgICAvL+WmguaenOeVtuWJjeeCuumdnOmfs+aooeW8j1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMubXVzaWNEYXRhLmhhcyhuYW1lKSkgeyAgICAgICAgICAgICAgICAgICAgLy/liKTmlrfmmK/lkKboqbLpn7PmqILmnInmkqXmlL7lhbHnlKjos4fmlplcclxuICAgICAgICAgICAgICAgIHRoaXMubXVzaWNEYXRhLnNldChuYW1lLCB0aGlzLm11c2ljTm9ybWFsRGF0YSk7ICAgICAvL+S/neWtmOmgkOioreizh+aWmVxyXG4gICAgICAgICAgICAgICAgdGhpcy5tdXNpY0NvbnRyb2xsZXIucGxheShuYW1lLCB0aGlzLm11c2ljTm9ybWFsRGF0YSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm11c2ljQ29udHJvbGxlci5wbGF5KG5hbWUsIHRoaXMubXVzaWNEYXRhLmdldChuYW1lKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOaSpeaUvuaViOaenOmfs+aViFxyXG4gICAgICAgICAqIOWmguaenOaLv+WPluS4jeWIsOS6q+WFg+aSpeaUvuizh+aWmSzlsIfmi7/lj5bpoJDoqK3os4fmlplcclxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIOmfs+aoguaqlOWQjVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBlZmZlY3RQbGF5KG5hbWU6IHN0cmluZykge1xyXG4gICAgICAgICAgICBpZiAoIW5hbWUudHJpbSgpKSByZXR1cm47ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+aqlOWQjeepuuWAvOWIpOaWt1xyXG4gICAgICAgICAgICBpZiAodGhpcy5hdWRpb01hbmFnZXIuZWZmZWN0T25NdXRlKSByZXR1cm47ICAgICAgICAgICAgICAvL+WmguaenOeVtuWJjeeCuumdnOmfs+aooeW8j1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuZWZmZWN0RGF0YS5oYXMobmFtZSkpIHsgICAgICAgICAgICAgICAgICAgIC8v5Yik5pa35piv5ZCm6Kmy6Z+z5qiC5pyJ5pKl5pS+6LOH5paZXHJcbiAgICAgICAgICAgICAgICB0aGlzLmVmZmVjdERhdGEuc2V0KG5hbWUsIHRoaXMuZWZmZWN0Tm9ybWFsRGF0YSk7ICAgIC8v5L+d5a2Y6aCQ6Kit6LOH5paZXHJcbiAgICAgICAgICAgICAgICB0aGlzLmVmZmVjdENvbnRyb2xsZXIucGxheShuYW1lLCB0aGlzLmVmZmVjdE5vcm1hbERhdGEpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lZmZlY3RDb250cm9sbGVyLnBsYXkobmFtZSwgdGhpcy5lZmZlY3REYXRhLmdldChuYW1lKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOWBnOatouiDjOaZr+mfs+aoglxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIG11c2ljU3RvcCgpIHtcclxuICAgICAgICAgICAgdGhpcy5tdXNpY0NvbnRyb2xsZXIuc3RvcCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5pqr5YGc6IOM5pmv6Z+z5qiCXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgbXVzaWNQYXVzZSgpIHtcclxuICAgICAgICAgICAgdGhpcy5tdXNpY0NvbnRyb2xsZXIucGF1c2UoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOWBnOatouaViOaenOmfs+agoVxyXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0g6Z+z5qiC5qqU5ZCNXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZWZmZWN0U3RvcChuYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgdGhpcy5lZmZlY3RDb250cm9sbGVyLnN0b3AobmFtZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDlgZzmraLmiYDmnInmlYjmnpzpn7PmlYhcclxuICAgICAgICAgKi9cclxuICAgICAgICBlZmZlY3RTdG9wQWxsKCkge1xyXG4gICAgICAgICAgICB0aGlzLmVmZmVjdENvbnRyb2xsZXIuc3RvcEFsbCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog542y5Y+W6Kmy6Z+z5qiC5pKl5pS+5qih5byPLOWmguaenOi/lOWbnk5VbGzlsIfnhafljp/poJDoqK1cclxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIOmfs+aoguaqlOWQjVxyXG4gICAgICAgICAqIEByZXR1cm5zIHtNYXA8c3RyaW5nLCBzdHJpbmcgfCBib29sZWFuIHwgbnVtYmVyPn1cclxuICAgICAgICAgKi9cclxuICAgICAgICBnZXRNdXNpY1N0YXRlKG5hbWU6IHN0cmluZykge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tdXNpY0RhdGEuZ2V0KG5hbWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog542y5Y+W6Kmy6Z+z5pWI5pKl5pS+5qih5byPLOWmguaenOi/lOWbnk5VbGzlsIfnhafljp/poJDoqK1cclxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIOmfs+aoguaqlOWQjVxyXG4gICAgICAgICAqIEByZXR1cm5zIHtNYXA8c3RyaW5nLCBzdHJpbmcgfCBib29sZWFuIHwgbnVtYmVyPn1cclxuICAgICAgICAgKi9cclxuICAgICAgICBnZXRFZmZlY3RTdGF0ZShuYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZWZmZWN0RGF0YS5nZXQobmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0Vycm9yL0VudW0vRXJyb3JUeXBlLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0Vycm9yL0Vycm9yTWFuYWdlci50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0F1ZGlvRmFjdG9yeS50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0lBdWRpby9JQXVkaW9NYW5hZ2VyLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vRW51bS9BdWRpb1N0YXRlVHlwZS50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0VudW0vQXVkaW9TdGF0ZVR5cGUudHNcIiAvPlxyXG5uYW1lc3BhY2UgZmNjIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBBdXRob3IgWElBTy1MSS1QSU5cclxuICAgICAqIEBEZXNjcmlwdGlvbiDpn7PmqILnrqHnkIblmags5Yid5aeL6Kit5a6a5ZCE6Z+z5qiC54uA5oWLLOS/neWtmOeVtuWJjeaSpeaUvumfs+mHj1xyXG4gICAgICogQERhdGUgMjAyMS0wNS0xMyDkuIrljYggMTA6MjRcclxuICAgICAqIEBWZXJzaW9uIDEuMVxyXG4gICAgICovXHJcbiAgICBleHBvcnQgY2xhc3MgQXVkaW9NYW5hZ2VyIGltcGxlbWVudHMgSUYuSUF1ZGlvTWFuYWdlciB7XHJcblxyXG4gICAgICAgIHByaXZhdGUgY29uZmlnTWFuYWdlcjogSUYuSUNvbmZpZ01hbmFnZXI7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBJRi5JQXVkaW9NYW5hZ2VyO1xyXG4gICAgICAgIHByaXZhdGUgZmFjdG9yeTogQXVkaW9GYWN0b3J5OyAgICAgICAgICAgICAgLy/pn7PmqILlt6Xlu6BcclxuICAgICAgICBwcml2YXRlIF9tdXNpY09uTXV0ZTogYm9vbGVhbjsgICAgICAgICAgICAgIC8v55W25YmN5piv5ZCm6Z2c6Z+zXHJcbiAgICAgICAgcHJpdmF0ZSBfZWZmZWN0T25NdXRlOiBib29sZWFuOyAgICAgICAgICAgICAvL+eVtuWJjeaYr+WQpumdnOmfs1xyXG5cclxuICAgICAgICBwcml2YXRlIGNvbnN0cnVjdG9yKGNvbmZpZ01hbmFnZXI6IElGLklDb25maWdNYW5hZ2VyKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNvbmZpZ01hbmFnZXIgPSBjb25maWdNYW5hZ2VyO1xyXG4gICAgICAgICAgICB0aGlzLmZhY3RvcnkgPSBuZXcgQXVkaW9GYWN0b3J5KHRoaXMsIGNvbmZpZ01hbmFnZXIpO1xyXG4gICAgICAgICAgICB0aGlzLl9lZmZlY3RPbk11dGUgPSB0aGlzLmNvbmZpZ01hbmFnZXIuaXNFZmZlY3RPbk11dGU7XHJcbiAgICAgICAgICAgIHRoaXMuX211c2ljT25NdXRlID0gdGhpcy5jb25maWdNYW5hZ2VyLmlzTXVzaWNPbk11dGU7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogIOaHtua8ouWKoOi8iVxyXG4gICAgICAgICAqICDliJ3lp4vljJYs5Y+q6K6T5LiA5YCL5bCI5qGI5Y+q5pyJ5LiA5qyh55Si55Sf5q2kY2xhc3NcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgc3RhdGljIHNldEluc3RhbmNlKGNvbmZpZ01hbmFnZXI6IElGLklDb25maWdNYW5hZ2VyKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5faW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlID0gbmV3IEF1ZGlvTWFuYWdlcihjb25maWdNYW5hZ2VyKTtcclxuICAgICAgICAgICAgICAgIGF1ZGlvTWdyID0gdGhpcy5faW5zdGFuY2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqICDnjbLlj5blt7LntpPliJ3lp4vljJbnmoTpnZzmhYvlr6bkvotjbGFzc1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGluc3RhbmNlKCk6IElGLklBdWRpb01hbmFnZXIge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuX2luc3RhbmNlKSB7XHJcbiAgICAgICAgICAgICAgICBFcnJvck1hbmFnZXIuaW5zdGFuY2UuZXhlY3V0ZUVycm9yKHR5cGUuRXJyb3JUeXBlLkFVRElPX0ZXLCBcIuipsumhnuWwmuacquWvpuS+i+WMllwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDpoY3lpJblsI3oqbLpn7PmqILlgZroqK3lrpos5Y+v5Lul5LiN5YGa6Kit5a6aLOWwh+acg+S+neeFp+m7mOiqjeioreWumuiHquWLleioreWumlxyXG4gICAgICAgICAqIGBgYFxyXG4gICAgICAgICAqICAgICAg6aCQ6Kit5Y+D5pW4OlxyXG4gICAgICAgICAqICAgICAgICAgIHZvbHVtZSA6IOm7mOiqjeeCuiBDb25maWcg5YWn55qE6Z+z6YeP5Y+D5pW4XHJcbiAgICAgICAgICogICAgICAgICAgbG9vcCA6IOm7mOiqjSBmYWxzZVxyXG4gICAgICAgICAqIGBgYFxyXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0g6Z+z5qiC5ZCN56ixXHJcbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IHZvbHVtZSAtIOmfs+mHjyAwfjFcclxuICAgICAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGxvb3AgLSDmmK/lkKbph43opIfmkqXmlL5cclxuICAgICAgICAgKiBAcmV0dXJuIHt0aGlzfVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzZXR0aW5nTXVzaWMobmFtZTogc3RyaW5nLCB2b2x1bWU/OiBudW1iZXIsIGxvb3A/OiBib29sZWFuKTogdGhpcyB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmZhY3Rvcnkuc2V0dGluZ011c2ljKG5hbWUsIHZvbHVtZSwgbG9vcCk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOmhjeWkluWwjeipsumfs+aViOWBmuioreWumizkvaDlj6/ku6XkuI3lgZroqK3lrpos5bCH5pyD5L6d54Wn6buY6KqN6Kit5a6a6Ieq5YuV6Kit5a6aXHJcbiAgICAgICAgICogYGBgXHJcbiAgICAgICAgICogICAgICDpoJDoqK3lj4Pmlbg6XHJcbiAgICAgICAgICogICAgICAgICAgY2FuU3VwZXJpbXBvc2UgOiBmY2MudHlwZS5BdWRpb1N0YXRlVHlwZS5DTEVBUl9UT19SRVBMQVlcclxuICAgICAgICAgKiAgICAgICAgICB2b2x1bWUgOiDpu5joqo3ngrogQ29uZmlnIOWFp+eahOmfs+mHj+WPg+aVuFxyXG4gICAgICAgICAqICAgICAgICAgIGxvb3AgOum7mOiqjeeCuiBmYWxzZVxyXG4gICAgICAgICAqIGBgYFxyXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIDog6Z+z5pWI5qqU5ZCNXHJcbiAgICAgICAgICogQHBhcmFtIHtBdWRpb1N0YXRlVHlwZX0gY2FuU3VwZXJpbXBvc2UgOiDog73lkKbnlorliqBcclxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gdm9sdW1lIDog6Z+z6YePIDB+MVxyXG4gICAgICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gbG9vcCA6IOaYr+WQpumHjeikh+aSpeaUvlxyXG4gICAgICAgICAqIEByZXR1cm4ge3RoaXN9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHNldHRpbmdFZmZlY3QobmFtZTogc3RyaW5nLCBjYW5TdXBlcmltcG9zZT86IHR5cGUuQXVkaW9TdGF0ZVR5cGUsIHZvbHVtZT86IG51bWJlciwgbG9vcD86IGJvb2xlYW4pOiB0aGlzIHtcclxuXHJcbiAgICAgICAgICAgIGlmIChjYW5TdXBlcmltcG9zZSA9PT0gdHlwZS5BdWRpb1N0YXRlVHlwZS5TVVBFUklNUE9TRSAmJiBsb29wKSB7XHJcbiAgICAgICAgICAgICAgICBFcnJvck1hbmFnZXIuaW5zdGFuY2UuZXhlY3V0ZUVycm9yKHR5cGUuRXJyb3JUeXBlLkFVRElPX0ZXLCBgJHtuYW1lfSDkvb/nlKjnlorliqDmlYjmnpzmmYLkuI3lu7rorbDkvb/nlKjlvqrnkrDmkqXmlL5gKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5mYWN0b3J5LnNldHRpbmdFZmZlY3QobmFtZSwgY2FuU3VwZXJpbXBvc2UsIHZvbHVtZSwgbG9vcClcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5pKl5pS+6Z+z5qiCLOWwh+acg+S+neeFp+eVtuWIneioreWumueahOWPg+aVuOmAsuihjOaSreaUvlxyXG4gICAgICAgICAqIOiLpeeEoeeZvOePvuWPr+eUqOWPg+aVuOioreWumizkvp3nhafpu5joqo3lj4PmlbjmkqXmlL5cclxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIOmfs+aoguaqlOWQjVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBtdXNpY1BsYXkobmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmFjdG9yeS5tdXNpY1BsYXkobmFtZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDmkqXmlL7pn7PmlYgs5bCH5pyD5L6d54Wn55W25Yid6Kit5a6a55qE5Y+D5pW46YCy6KGM5pKt5pS+XHJcbiAgICAgICAgICog6Iul54Sh55m854++5Y+v55So5Y+D5pW46Kit5a6aLOS+neeFp+m7mOiqjeWPg+aVuOaSpeaUvlxyXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0g6Z+z5pWI5qqU5ZCNXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGVmZmVjdFBsYXkobmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmFjdG9yeS5lZmZlY3RQbGF5KG5hbWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5YGc5q2i6Z+z5qiCXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIG11c2ljU3RvcCgpIHtcclxuICAgICAgICAgICAgdGhpcy5mYWN0b3J5Lm11c2ljU3RvcCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5pqr5YGc6Z+z5qiCXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIG11c2ljUGF1c2UoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmFjdG9yeS5tdXNpY1BhdXNlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDlgZzmraLpn7PmlYhcclxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIOmfs+aViOaqlOWQjVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBlZmZlY3RTdG9wKG5hbWU6IHN0cmluZykge1xyXG4gICAgICAgICAgICB0aGlzLmZhY3RvcnkuZWZmZWN0U3RvcChuYW1lKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOWBnOatouaJgOaciemfs+aViFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBlZmZlY3RTdG9wQWxsKCkge1xyXG4gICAgICAgICAgICB0aGlzLmZhY3RvcnkuZWZmZWN0U3RvcEFsbCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog542y5Y+W5pKl5pS+55qE54uA5oWLXHJcbiAgICAgICAgICogYGBgXHJcbiAgICAgICAgICogICAgICByZXR1cm4gZGF0YTpcclxuICAgICAgICAgKiAgICAgICAgICB2b2x1bWUgOiBudW1iZXJcclxuICAgICAgICAgKiAgICAgICAgICBsb29wIDogYm9vbGVhblxyXG4gICAgICAgICAqIGBgYFxyXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0g6Z+z5pWI5qqU5ZCNXHJcbiAgICAgICAgICogQHJldHVybiB7TWFwPHN0cmluZywgc3RyaW5nIHwgYm9vbGVhbiB8IG51bWJlcj59IC0g5pKl5pS+6Kit5a6a5Y+D5pW4XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGdldE11c2ljU3RhdGUobmFtZTogc3RyaW5nKTogTWFwPHN0cmluZywgc3RyaW5nIHwgYm9vbGVhbiB8IG51bWJlcj4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5mYWN0b3J5LmdldE11c2ljU3RhdGUobmFtZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDnjbLlj5bmkqXmlL7nmoTni4DmhYtcclxuICAgICAgICAgKiBgYGBcclxuICAgICAgICAgKiAgICAgIHJldHVybiBkYXRhOlxyXG4gICAgICAgICAqICAgICAgICAgIHZvbHVtZSA6IG51bWJlclxyXG4gICAgICAgICAqICAgICAgICAgIGNhblN1cGVyaW1wb3NlIDogZmNjLnR5cGUuQXVkaW9TdGF0ZVR5cGVcclxuICAgICAgICAgKiAgICAgICAgICBsb29wIDogYm9vbGVhblxyXG4gICAgICAgICAqIGBgYFxyXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0g6Z+z5qiC5qqU5ZCNXHJcbiAgICAgICAgICogQHJldHVybiB7TWFwPHN0cmluZywgc3RyaW5nIHwgZmNjLnR5cGUuQXVkaW9TdGF0ZVR5cGUgfGJvb2xlYW4gfCBudW1iZXI+fSAtXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGdldEVmZmVjdFN0YXRlKG5hbWU6IHN0cmluZyk6IE1hcDxzdHJpbmcsIHN0cmluZyB8IHR5cGUuQXVkaW9TdGF0ZVR5cGUgfCBib29sZWFuIHwgbnVtYmVyPiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZhY3RvcnkuZ2V0RWZmZWN0U3RhdGUobmFtZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDmm7TmlrDnlbbliY3mmK/lkKbpnZzpn7PmqKHlvI9cclxuICAgICAgICAgKiBAcmV0dXJuIHtib29sZWFufSDnlbbliY3mmK/lkKbpnZzpn7NcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgdXBkYXRlRWZmZWN0T25NdXRlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgICB0aGlzLl9lZmZlY3RPbk11dGUgPSAhdGhpcy5fZWZmZWN0T25NdXRlO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fZWZmZWN0T25NdXRlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZhY3RvcnkuZWZmZWN0U3RvcEFsbCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9lZmZlY3RPbk11dGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDmm7TmlrDnlbbliY3mmK/lkKbpnZzpn7PmqKHlvI9cclxuICAgICAgICAgKiBAcmV0dXJuIHtib29sZWFufSDnlbbliY3mmK/lkKbpnZzpn7NcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgdXBkYXRlTXVzaWNPbk11dGUoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIHRoaXMuX211c2ljT25NdXRlID0gIXRoaXMuX211c2ljT25NdXRlO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fbXVzaWNPbk11dGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubXVzaWNQYXVzZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tdXNpY09uTXV0ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOeVtuWJjeaYr+WQpumdnOmfs+iDjOaZr+mfs+aoglxyXG4gICAgICAgICAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBnZXQgZWZmZWN0T25NdXRlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZWZmZWN0T25NdXRlXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDnlbbliY3mmK/lkKbpnZzpn7PmlYjmnpzpn7PmlYhcclxuICAgICAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZ2V0IG11c2ljT25NdXRlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbXVzaWNPbk11dGVcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDoo53po77lmahcclxuICAgICAqIOaSpeaUvuiDjOaZr+mfs+aoglxyXG4gICAgICogQHBhcmFtIG5hbWUge3N0cmluZ30gOiDpn7PmqILmqpTlkI1cclxuICAgICAqIEByZXR1cm5zIHsodGFyZ2V0OiBhbnksIGtleTogc3RyaW5nLCBkZXNjcmlwdG9yOiBQcm9wZXJ0eURlc2NyaXB0b3IpID0+IHZvaWR9XHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIE11c2ljKG5hbWUpIHtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldDogYW55LCBrZXk6IHN0cmluZywgZGVzY3JpcHRvcjogUHJvcGVydHlEZXNjcmlwdG9yKSB7XHJcbiAgICAgICAgICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGNvbnN0IG1ldGhvZCA9IGRlc2NyaXB0b3IudmFsdWU7XHJcbiAgICAgICAgICAgIGRlc2NyaXB0b3IudmFsdWUgPSBmdW5jdGlvbiAoLi4uYW55KSB7XHJcbiAgICAgICAgICAgICAgICBBdWRpb01hbmFnZXIuaW5zdGFuY2UubXVzaWNQbGF5KG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICBtZXRob2QuY2FsbCh0aGlzLCAuLi5hbnkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6KOd6aO+5ZmoXHJcbiAgICAgKiDlgZzmraLog4zmma/pn7PmqIJcclxuICAgICAqIEByZXR1cm5zIHsodGFyZ2V0OiBhbnksIGtleTogc3RyaW5nLCBkZXNjcmlwdG9yOiBQcm9wZXJ0eURlc2NyaXB0b3IpID0+IHZvaWR9XHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIE11c2ljU3RvcCgpIHtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldDogYW55LCBrZXk6IHN0cmluZywgZGVzY3JpcHRvcjogUHJvcGVydHlEZXNjcmlwdG9yKSB7XHJcbiAgICAgICAgICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGNvbnN0IG1ldGhvZCA9IGRlc2NyaXB0b3IudmFsdWU7XHJcbiAgICAgICAgICAgIGRlc2NyaXB0b3IudmFsdWUgPSBmdW5jdGlvbiAoLi4uYW55KSB7XHJcbiAgICAgICAgICAgICAgICBBdWRpb01hbmFnZXIuaW5zdGFuY2UubXVzaWNTdG9wKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbWV0aG9kLmNhbGwodGhpcywgLi4uYW55KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOijnemjvuWZqFxyXG4gICAgICog5pKl5pS+5pWI5p6c6Z+z5pWIXHJcbiAgICAgKiBAcGFyYW0gbmFtZVtdIHtzdHJpbmd9IDog6Z+z5qiC5qqU5ZCNXHJcbiAgICAgKiBAcmV0dXJucyB7KHRhcmdldDogYW55LCBrZXk6IHN0cmluZywgZGVzY3JpcHRvcjogUHJvcGVydHlEZXNjcmlwdG9yKSA9PiB2b2lkfVxyXG4gICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBmdW5jdGlvbiBFZmZlY3QoLi4ubmFtZTogc3RyaW5nW10pIHtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldDogYW55LCBrZXk6IHN0cmluZywgZGVzY3JpcHRvcjogUHJvcGVydHlEZXNjcmlwdG9yKSB7XHJcbiAgICAgICAgICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGNvbnN0IG1ldGhvZCA9IGRlc2NyaXB0b3IudmFsdWU7XHJcbiAgICAgICAgICAgIGRlc2NyaXB0b3IudmFsdWUgPSBmdW5jdGlvbiAoLi4uYW55KSB7XHJcbiAgICAgICAgICAgICAgICBuYW1lLmZvckVhY2goKG5hbWU6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIEF1ZGlvTWFuYWdlci5pbnN0YW5jZS5lZmZlY3RQbGF5KG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIHJldHVybiBtZXRob2QuY2FsbCh0aGlzLCAuLi5hbnkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6KOd6aO+5ZmoXHJcbiAgICAgKiDmmqvlgZzmlYjmnpzpn7PmlYhcclxuICAgICAqIEBwYXJhbSBuYW1lW10ge3N0cmluZ30gOiDpn7PmqILmqpTlkI1cclxuICAgICAqIEByZXR1cm5zIHsodGFyZ2V0OiBhbnksIGtleTogc3RyaW5nLCBkZXNjcmlwdG9yOiBQcm9wZXJ0eURlc2NyaXB0b3IpID0+IHZvaWR9XHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIEVmZmVjdFN0b3AoLi4ubmFtZTogc3RyaW5nW10pIHtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldDogYW55LCBrZXk6IHN0cmluZywgZGVzY3JpcHRvcjogUHJvcGVydHlEZXNjcmlwdG9yKSB7XHJcbiAgICAgICAgICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGNvbnN0IG1ldGhvZCA9IGRlc2NyaXB0b3IudmFsdWU7XHJcbiAgICAgICAgICAgIGRlc2NyaXB0b3IudmFsdWUgPSBmdW5jdGlvbiAoLi4uYW55KSB7XHJcbiAgICAgICAgICAgICAgICBuYW1lLmZvckVhY2goKG5hbWU6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIEF1ZGlvTWFuYWdlci5pbnN0YW5jZS5lZmZlY3RTdG9wKG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIHJldHVybiBtZXRob2QuY2FsbCh0aGlzLCAuLi5hbnkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIGZjYyB7XHJcblxyXG4gICAgY29uc3QgQ05ZOiBJRi5JTGFuZ3VhZ2VTdHlsZSA9IHtcclxuICAgICAgICBmb250U2l6ZTogMzYsXHJcbiAgICAgICAgbGluZUhlaWdodDogNDYsXHJcbiAgICAgICAgdGV4dFNjYWxlOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IDEsXHJcbiAgICAgICAgICAgIHRpdGxlOiAxLjIsXHJcbiAgICAgICAgICAgIHRleHQ6IDAuOFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZm9udEZhbWlseTogXCLlvq7ou5/mraPpu5Hpq5RcIlxyXG4gICAgfVxyXG4gICAgY29uc3QgTlREOiBJRi5JTGFuZ3VhZ2VTdHlsZSA9IHtcclxuICAgICAgICBmb250U2l6ZTogMzYsXHJcbiAgICAgICAgbGluZUhlaWdodDogNDYsXHJcbiAgICAgICAgdGV4dFNjYWxlOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IDEsXHJcbiAgICAgICAgICAgIHRpdGxlOiAxLjIsXHJcbiAgICAgICAgICAgIHRleHQ6IDAuOFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZm9udEZhbWlseTogXCLlvq7ou5/mraPpu5Hpq5RcIlxyXG4gICAgfVxyXG4gICAgY29uc3QgVVNEOiBJRi5JTGFuZ3VhZ2VTdHlsZSA9IHtcclxuICAgICAgICBmb250U2l6ZTogMzAsXHJcbiAgICAgICAgbGluZUhlaWdodDogNDAsXHJcbiAgICAgICAgdGV4dFNjYWxlOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IDEsXHJcbiAgICAgICAgICAgIHRpdGxlOiAxLjIsXHJcbiAgICAgICAgICAgIHRleHQ6IDAuOFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZm9udEZhbWlseTogXCJBcmlhbCBVbmljb2RlIE1TLEFyaWFsXCJcclxuICAgIH1cclxuICAgIGNvbnN0IFZORDogSUYuSUxhbmd1YWdlU3R5bGUgPSB7XHJcbiAgICAgICAgZm9udFNpemU6IDMwLFxyXG4gICAgICAgIGxpbmVIZWlnaHQ6IDQwLFxyXG4gICAgICAgIHRleHRTY2FsZToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiAxLFxyXG4gICAgICAgICAgICB0aXRsZTogMS4yLFxyXG4gICAgICAgICAgICB0ZXh0OiAwLjhcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZvbnRGYW1pbHk6IFwiQXJpYWwgVW5pY29kZSBNUyxBcmlhbFwiXHJcbiAgICB9XHJcbiAgICBjb25zdCBUSEI6IElGLklMYW5ndWFnZVN0eWxlID0ge1xyXG4gICAgICAgIGZvbnRTaXplOiAzMCxcclxuICAgICAgICBsaW5lSGVpZ2h0OiA0NixcclxuICAgICAgICB0ZXh0U2NhbGU6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogMSxcclxuICAgICAgICAgICAgdGl0bGU6IDEuMixcclxuICAgICAgICAgICAgdGV4dDogMC44XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmb250RmFtaWx5OiBcIkFyaWFsIFVuaWNvZGUgTVMsQXJpYWxcIlxyXG4gICAgfVxyXG4gICAgY29uc3QgSURSOiBJRi5JTGFuZ3VhZ2VTdHlsZSA9IHtcclxuICAgICAgICBmb250U2l6ZTogMzAsXHJcbiAgICAgICAgbGluZUhlaWdodDogNDAsXHJcbiAgICAgICAgdGV4dFNjYWxlOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IDEsXHJcbiAgICAgICAgICAgIHRpdGxlOiAxLjIsXHJcbiAgICAgICAgICAgIHRleHQ6IDAuOFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZm9udEZhbWlseTogXCJBcmlhbCBVbmljb2RlIE1TLEFyaWFsXCJcclxuICAgIH1cclxuICAgIGNvbnN0IE1ZUjogSUYuSUxhbmd1YWdlU3R5bGUgPSB7XHJcbiAgICAgICAgZm9udFNpemU6IDMwLFxyXG4gICAgICAgIGxpbmVIZWlnaHQ6IDQwLFxyXG4gICAgICAgIHRleHRTY2FsZToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiAxLFxyXG4gICAgICAgICAgICB0aXRsZTogMS4yLFxyXG4gICAgICAgICAgICB0ZXh0OiAwLjhcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZvbnRGYW1pbHk6IFwiQXJpYWwgVW5pY29kZSBNUyxBcmlhbFwiXHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQEF1dGhvciDola3nq4vlk4FcclxuICAgICAqIEBEZXNjcmlwdGlvbiDoqp7ns7vnrqHnkIblmaggOiDkv53lrZjnlbbliY3oqp7oqIDmnKws6Kqe57O75qij5byPXHJcbiAgICAgKiBARGF0ZSAyMDIxLTA2LTI4IOS4i+WNiCAxMjowNlxyXG4gICAgICogQFZlcnNpb24gMS4wXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBjbGFzcyBMYW5ndWFnZU1hbmFnZXIgaW1wbGVtZW50cyBJRi5JTGFuZ3VhZ2VNYW5hZ2VyIHtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog55W25YmN6Kqe6KiA5paH5a2X57ep5a2YXHJcbiAgICAgICAgICogQHR5cGUge3tbcDogc3RyaW5nXTogc3RyaW5nfX1cclxuICAgICAgICAgKi9cclxuICAgICAgICBsYW5ndWFnZUNhY2hlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDnlbbliY3oqp7ns7tcclxuICAgICAgICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIG5vd0xhbmc6IHN0cmluZyB8IHR5cGUuTGFuZ3VhZ2VUeXBlO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDnlbbliY3ntoHlrprnmoTntYTku7ZcclxuICAgICAgICAgKiBAdHlwZSB7TWFwPGNjLkxhYmVsLCBzdHJpbmc+fVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIG5vd0xhbmd1YWdlTGFiZWw6IE1hcDxjYy5MYWJlbCwgc3RyaW5nPjtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog6Kqe57O757WE5Lu257ep5a2YXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHJpdmF0ZSBsYWJlbENhY2hlOiBjYy5MYWJlbFtdO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDnlbbliY3miYDmnInoqp7ns7vmqKPlvI/liJfooahcclxuICAgICAgICAgKiBAdHlwZSB7b2JqZWN0fVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHN0eWxlOiBNYXA8c3RyaW5nIHwgZmNjLnR5cGUuTGFuZ3VhZ2VUeXBlLCBmY2MuSUYuSUxhbmd1YWdlU3R5bGU+O1xyXG5cclxuICAgICAgICBwcml2YXRlIGNvbmZpZ01hbmFnZXI6IGZjYy5JRi5JQ29uZmlnTWFuYWdlcjtcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IElGLklMYW5ndWFnZU1hbmFnZXI7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbmZpZ01hbmFnZXI6IElGLklDb25maWdNYW5hZ2VyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29uZmlnTWFuYWdlciA9IGNvbmZpZ01hbmFnZXI7XHJcbiAgICAgICAgICAgIHRoaXMuc3R5bGUgPSBuZXcgTWFwPHN0cmluZyB8IGZjYy50eXBlLkxhbmd1YWdlVHlwZSwgZmNjLklGLklMYW5ndWFnZVN0eWxlPigpOyAgLy/liJ3lp4vlkIToqp7ns7vmqKPlvI9cclxuICAgICAgICAgICAgdGhpcy5ub3dMYW5ndWFnZUxhYmVsID0gbmV3IE1hcDxjYy5MYWJlbCwgc3RyaW5nPigpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+WIneWni+eVtuWJjee2geWumueahOaJgOaciWxhYmVsXHJcbiAgICAgICAgICAgIHRoaXMuaW5pdERlZmF1bHRTdHlsZSgpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/liJ3lp4vljJbpoJDoqK3oqp7ns7vmqKPlvI9cclxuICAgICAgICAgICAgdGhpcy5ub3dMYW5nID0gdGhpcy5jb25maWdNYW5hZ2VyLmxhbmd1YWdlOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+WIneWni+eVtuWJjeiqnuezu1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqICDmh7bmvKLliqDovIlcclxuICAgICAgICAgKiAg5Yid5aeL5YyWLOWPquiuk+S4gOWAi+WwiOahiOWPquacieS4gOasoeeUoueUn+atpGNsYXNzXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBzZXRJbnN0YW5jZShjb25maWdNYW5hZ2VyOiBJRi5JQ29uZmlnTWFuYWdlcikge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuX2luc3RhbmNlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9pbnN0YW5jZSA9IG5ldyBMYW5ndWFnZU1hbmFnZXIoY29uZmlnTWFuYWdlcik7XHJcbiAgICAgICAgICAgICAgICBsYW5ndWFnZU1nciA9IHRoaXMuX2luc3RhbmNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiAg542y5Y+W5bey57aT5Yid5aeL5YyW55qE6Z2c5oWL5a+m5L6LY2xhc3NcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgc3RhdGljIGdldCBpbnN0YW5jZSgpOiBJRi5JTGFuZ3VhZ2VNYW5hZ2VyIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLl9pbnN0YW5jZSkge1xyXG4gICAgICAgICAgICAgICAgRXJyb3JNYW5hZ2VyLmluc3RhbmNlLmV4ZWN1dGVFcnJvcih0eXBlLkVycm9yVHlwZS5BVURJT19GVywgXCLoqbLpoZ7lsJrmnKrlr6bkvovljJZcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOa3u+WKoOm7mOiqjeaoo+W8j1xyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHJpdmF0ZSBpbml0RGVmYXVsdFN0eWxlKCkge1xyXG4gICAgICAgICAgICB0aGlzLnN0eWxlLnNldCh0eXBlLkxhbmd1YWdlVHlwZS5UQUlXQU4sIE5URCk7XHJcbiAgICAgICAgICAgIHRoaXMuc3R5bGUuc2V0KHR5cGUuTGFuZ3VhZ2VUeXBlLkNISU5FU0UsIENOWSk7XHJcbiAgICAgICAgICAgIHRoaXMuc3R5bGUuc2V0KHR5cGUuTGFuZ3VhZ2VUeXBlLkFNRVJJQ0EsIFVTRCk7XHJcbiAgICAgICAgICAgIHRoaXMuc3R5bGUuc2V0KHR5cGUuTGFuZ3VhZ2VUeXBlLklORE9ORVNJQSwgSURSKTtcclxuICAgICAgICAgICAgdGhpcy5zdHlsZS5zZXQodHlwZS5MYW5ndWFnZVR5cGUuVEFJV0FOLCBOVEQpO1xyXG4gICAgICAgICAgICB0aGlzLnN0eWxlLnNldCh0eXBlLkxhbmd1YWdlVHlwZS5NQUxBWVNJQSwgTVlSKTtcclxuICAgICAgICAgICAgdGhpcy5zdHlsZS5zZXQodHlwZS5MYW5ndWFnZVR5cGUuVklFVE5BTSwgVk5EKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOmhjeWklua3u+WKoOaWsOeahOiqnuezu+aoo+W8j1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGFkZFN0eWxlKGtleTogc3RyaW5nIHwgdHlwZS5MYW5ndWFnZVR5cGUsIHN0eWxlOiBJRi5JTGFuZ3VhZ2VTdHlsZSkge1xyXG4gICAgICAgICAgICB0aGlzLnN0eWxlLnNldChrZXksIHN0eWxlKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5pu05paw6Kqe57O7LOacg+abtOaWsOeVtuWJjeaJgOacieW3sue2k+e2geWumueahCBjYy5MYWJlbFxyXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nIHwgZmNjLnR5cGUuTGFuZ3VhZ2VUeXBlfSBsYW5ndWFnZSAtIOimgeabtOaWsOeahOiqnuezu1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHVwZGF0ZUxhbmd1YWdlKGxhbmd1YWdlOiBzdHJpbmcgfCB0eXBlLkxhbmd1YWdlVHlwZSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5ub3dMYW5nICE9IGxhbmd1YWdlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vd0xhbmcgPSBsYW5ndWFnZTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGxhYmVsIG9mIHRoaXMubm93TGFuZ3VhZ2VMYWJlbC5rZXlzKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdGV4dEtleSA9IHRoaXMubm93TGFuZ3VhZ2VMYWJlbC5nZXQobGFiZWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVGV4dChsYWJlbCwgdGV4dEtleSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOa3u+WKoOeVtuWJjeiqnuezu1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHNldExhbmd1YWdlKCkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMubGFuZ3VhZ2VDYWNoZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZUxvYWROb3dMYW5ndWFnZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDnjbLlj5bnlbbliY3oqp7ns7tcclxuICAgICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZ2V0TGFuZ3VhZ2UoKTogc3RyaW5nIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubm93TGFuZztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOeNsuWPlueVtuWJjeiqnuezu+aVuOaTmizov5Tlm57oqbJrZXnlsI3mh4nnmoTmloflrZdcclxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZyB8IHVuZGVmaW5lZH0ga2V5IC0g5ou/5Y+W55W25YmN57ep5a2Y6Kqe57O75paH5pys55qE5p+Q5LiA5q615paH5a2XIHwo56m65Y+D5pW4KeeNsuWPlueVtuWJjeiqnuezu+aVuOaTmizov5Tlm57miYDmnInmlbjmk5pcclxuICAgICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IC0g6L+U5Zue6Kmy5q615paH5a2XLOWmguaenOaJvuS4jeWIsOmNteWAvCzpu5joqo3ov5Tlm54ga2V5XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZ2V0VGV4dChrZXk6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxhbmd1YWdlQ2FjaGVba2V5XTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGdldEFsbFRleHQoKTogb2JqZWN0IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubGFuZ3VhZ2VDYWNoZTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDph43mlrDovInlhaXoqp7ns7tcclxuICAgICAgICAgKi9cclxuICAgICAgICByZUxvYWROb3dMYW5ndWFnZSgpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubGFuZ3VhZ2VDYWNoZSA9IHdpbmRvdy5sYW5ndWFnZV9Nb2RlW3RoaXMubm93TGFuZ107XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwid2luZG93Lmxhbmd1YWdlX01vZGUg5p+l5om+5LiN5Yiw6Kmy6Kqe57O7XCIsIGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUT0RPIOa4hemZpOeEoeeUqOeahOiqnuezu+e3qeWtmFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHJlbW92ZVN0cmluZ0J1ZmZlcigpIHtcclxuICAgICAgICAgICAgLy9UT0RPXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB1cGRhdGVUZXh0KHRhcmdldDogY2MuTGFiZWwsIHRleHRLZXk6IHN0cmluZyk6IHRoaXMge1xyXG4gICAgICAgICAgICB0YXJnZXQuc3RyaW5nID0gdGhpcy5nZXRUZXh0KHRleHRLZXkpO1xyXG4gICAgICAgICAgICB0aGlzLmxhYmVsQ2FjaGUucHVzaCh0YXJnZXQpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOabtOaWsOaJgOaciemAj+mBjiB1cGRhdGVUZXh05pu05paw55qE57WE5Lu2LOabtOaWsOipsue1hOS7tuaoo+aYr1xyXG4gICAgICAgICAqIOazqOaEjyA6IOmgiOmFjeWQiCB1cGRhdGVUZXh0IOS4gOi1t+S9v+eUqFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHVwZGF0ZVN0eWxlKCk6IHZvaWQge1xyXG5cclxuICAgICAgICAgICAgbGV0IGxhbmd1YWdlOiBzdHJpbmcgfCBmY2MudHlwZS5MYW5ndWFnZVR5cGUgPSB0aGlzLm5vd0xhbmc7XHJcblxyXG4gICAgICAgICAgICBpZiAoIXRoaXMuc3R5bGUuaGFzKHRoaXMubm93TGFuZykpIHtcclxuICAgICAgICAgICAgICAgIGxhbmd1YWdlID0gdHlwZS5MYW5ndWFnZVR5cGUuQU1FUklDQTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgZm9udEZhbWlseTogc3RyaW5nID0gdGhpcy5zdHlsZS5nZXQobGFuZ3VhZ2UpLmZvbnRGYW1pbHk7XHJcbiAgICAgICAgICAgIGNvbnN0IGZvbnRTaXplOiBudW1iZXIgPSB0aGlzLnN0eWxlLmdldChsYW5ndWFnZSkuZm9udFNpemU7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpbmVIZWlnaHQ6IG51bWJlciA9IHRoaXMuc3R5bGUuZ2V0KGxhbmd1YWdlKS5saW5lSGVpZ2h0O1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgbGFiZWwgb2YgdGhpcy5sYWJlbENhY2hlKSB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbC5mb250RmFtaWx5ID0gZm9udEZhbWlseTtcclxuICAgICAgICAgICAgICAgIGxhYmVsLmZvbnRTaXplID0gZm9udFNpemU7XHJcbiAgICAgICAgICAgICAgICBsYWJlbC5saW5lSGVpZ2h0ID0gbGluZUhlaWdodDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmxhYmVsQ2FjaGUubGVuZ3RoID0gMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vRXJyb3IvRXJyb3JNYW5hZ2VyLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0Vycm9yL0VudW0vRXJyb3JUeXBlLnRzXCIgLz5cclxubmFtZXNwYWNlIGZjYyB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAQXV0aG9yIFhJQU8tTEktUElOXHJcbiAgICAgKiBARGVzY3JpcHRpb24g57aB5a6a6Ieq5bex6ZyA6KaB55qE5omA5pyJ5o6o5pKl6ICFXHJcbiAgICAgKiBARGF0ZSAyMDIxLTA2LTEwIOS4iuWNiCAxMTowMlxyXG4gICAgICogQFZlcnNpb24gMS4wXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBjbGFzcyBOb3RpZmljYXRpb25NYW5hZ2VyPFQgZXh0ZW5kcyBJRi5JQmFzZU5vdGlmaWNhdGlvbj4gaW1wbGVtZW50cyBJRi5JTm90aWZpY2F0aW9uTWFuYWdlcjxUPiB7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOS/neWtmOS9v+eUqOS4reeahOaOqOaSpeiAhVxyXG4gICAgICAgICAqIEB0eXBlIHtNYXA8c3RyaW5nLCBJQmFzZU5vdGlmaWNhdGlvbj59XHJcbiAgICAgICAgICogQHByb3RlY3RlZFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHByb3RlY3RlZCByZWFkb25seSBub3RpZmljYXRpb25Ub01hcDogTWFwPHN0cmluZywgVD47XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOaHtua8ouWKoOi8iVxyXG4gICAgICAgICAqIEB0eXBlIHtOb3RpZmljYXRpb25NYW5hZ2VyPGFueT59XHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IElGLklOb3RpZmljYXRpb25NYW5hZ2VyPGFueT47XHJcblxyXG4gICAgICAgIHByaXZhdGUgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm90aWZpY2F0aW9uVG9NYXAgPSBuZXcgTWFwPHN0cmluZywgVD4oKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOaHtua8ouWKoOi8iVxyXG4gICAgICAgICAqIEByZXR1cm4ge0lOb3RpZmljYXRpb25IYW5kbGVyPFQ+fVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgaW5zdGFuY2U8VCBleHRlbmRzIElGLklCYXNlTm90aWZpY2F0aW9uPigpOiBJRi5JTm90aWZpY2F0aW9uTWFuYWdlcjxUPiB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5faW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlID0gbmV3IE5vdGlmaWNhdGlvbk1hbmFnZXI8VD4oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDmt7vliqDmjqjmkqXogIVcclxuICAgICAgICAgKiBAcGFyYW0ge1R9IG5vdGlmaWNhdGlvbiAtIOaOqOaSpeiAhVxyXG4gICAgICAgICAqIEByZXR1cm4ge3RoaXN9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgc2V0Tm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvbjogVCk6IHRoaXMge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMubm90aWZpY2F0aW9uVG9NYXAuaGFzKG5vdGlmaWNhdGlvbi5UQUdfTkFNRSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm90aWZpY2F0aW9uVG9NYXAuc2V0KG5vdGlmaWNhdGlvbi5UQUdfTkFNRSwgbm90aWZpY2F0aW9uKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOeNsuWPluS7pee2geWumueahOaOqOaSreiAhVxyXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIC0g5LqL5Lu25ZCN56ixXHJcbiAgICAgICAgICogQHJldHVyblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGdldE5vdGlmaWNhdGlvbih0eXBlOiBzdHJpbmcpOiBUIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMubm90aWZpY2F0aW9uVG9NYXAuaGFzKHR5cGUpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ub3RpZmljYXRpb25Ub01hcC5nZXQodHlwZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBFcnJvck1hbmFnZXIuaW5zdGFuY2UuZXhlY3V0ZUVycm9yKGZjYy50eXBlLkVycm9yVHlwZS5MSVNURU5FUl9GVywgYCR7dHlwZX0gOiAg6Kmya2V55bCa5pyq5Yqg5YWl5o6o5pKl5LqL5Lu25LitLOS9oOmcgOWFiOWft+ihjCBzZXROb3RpZmljYXRpb24odHlwZTpJQmFzZU5vdGlmaWNhdGlvbinmlrnms5VgKVxyXG4gICAgICAgICAgICAgICAgLy8gdGhyb3cgbmV3IEVycm9yKGAke3R5cGV9IDogIOipsmNsYXNz5bCa5pyq5Yqg5YWl5o6o5pKl5LqL5Lu25LitLOS9oOmcgOWFiOWft+ihjCBzZXROb3RpZmljYXRpb24oSUJhc2VOb3RpZmljYXRpb24p5pa55rOVYCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDmn6XnnIvoqbLkuovku7bmmK/lkKblt7LntpPliqDlhaXnrqHnkIblmajkuK1cclxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSAtIOS6i+S7tuWQjeeosVxyXG4gICAgICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgaGFzTm90aWZpY2F0aW9uKHR5cGU6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ub3RpZmljYXRpb25Ub01hcC5oYXModHlwZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDmi7/lj5bmiYDmnInku6XntoHlrprnmoTmjqjmkq1cclxuICAgICAgICAgKiBAcmV0dXJuIHtNYXA8U3RyaW5nLCBUPn1cclxuICAgICAgICAgKi9cclxuICAgICAgICBnZXRBbGxOb3RpZmljYXRpb25zKCk6IE1hcDxTdHJpbmcsIFQ+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubm90aWZpY2F0aW9uVG9NYXA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vQW5pbWF0aW9uL0FuaW1hdGlvbk1hbmFnZXIudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9BdWRpby9BdWRpb01hbmFnZXIudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9Db25maWcvU2xvdENvbmZpZ01hbmFnZXIudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9FcnJvci9FcnJvck1hbmFnZXIudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9MYW5ndWFnZS9MYW5ndWFnZU1hbmFnZXIudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9MaXN0ZW5lci9FdmVudE1hbmFnZXIudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9Mb2FkL0xvYWRSZXNNYW5hZ2VyLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vUHJvY2Vzcy9Qcm9jZXNzTWFuYWdlci50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL1NjZW5lL1NjZW5lTWFuYWdlci50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL1Nsb3QvU2xvdFN0eWxlTWFuYWdlci50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0xpc3RlbmVyL05vdGlmaWNhdGlvbk1hbmFnZXIudHNcIiAvPlxyXG5uYW1lc3BhY2UgZmNjIHtcclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDpgYrmiLLliJ3lp4voqK3lrpos5Lim6YCP6YGOYnVpbGRlcuWKoOi8ieaJgOaciU1hbmFnZXJcclxuICAgICAqIEByZXR1cm4ge2ZjYy5JRi5JQ29uZmlnTWFuYWdlcn1cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBsZXQgY29uZmlnTWdyOiBJRi5JU2xvdENvbmZpZ01hbmFnZXIgPSBTbG90Q29uZmlnTWFuYWdlci5pbnN0YW5jZTtcclxuICAgIC8vIGV4cG9ydCBmdW5jdGlvbiBjb25maWdNZ3IoKTogSUYuSUNvbmZpZ01hbmFnZXIge1xyXG4gICAgLy8gICAgIHJldHVybiBTbG90Q29uZmlnTWFuYWdlci5pbnN0YW5jZTtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRPRE8gOiDli5XnlavnrqHnkIblmahcclxuICAgICAqIEByZXR1cm4ge2ZjYy5JRi5JQW5pbWF0aW9uTWFuYWdlcn1cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBsZXQgYW5pbWF0aW9uTWdyOiBJRi5JQW5pbWF0aW9uTWFuYWdlcjtcclxuICAgIC8vICBleHBvcnQgZnVuY3Rpb24gYW5pbWF0aW9uTWdyKCk6IElGLklBbmltYXRpb25NYW5hZ2VyIHtcclxuICAgIC8vICAgICByZXR1cm4gQW5pbWF0aW9uTWFuYWdlci5pbnN0YW5jZTtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOmfs+aogueuoeeQhuWZqCzliJ3lp4voqK3lrprlkITpn7PmqILni4DmhYss5L+d5a2Y55W25YmN5pKl5pS+6Z+z6YePXHJcbiAgICAgKiBAcmV0dXJuIHtmY2MuSUYuSUF1ZGlvTWFuYWdlcn1cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBsZXQgYXVkaW9NZ3I6IElGLklBdWRpb01hbmFnZXI7XHJcbiAgICAvLyBleHBvcnQgZnVuY3Rpb24gYXVkaW9NZ3IoKTogSUYuSUF1ZGlvTWFuYWdlciB7XHJcbiAgICAvLyAgICAgcmV0dXJuIEF1ZGlvTWFuYWdlci5pbnN0YW5jZTtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOahhuaetumMr+iqpOeuoeeQhlxyXG4gICAgICogQHJldHVybiB7ZmNjLklGLklFcnJvck1hbmFnZXJ9XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBleHBvcnQgbGV0IGVycm9yTWdyOiBJRi5JRXJyb3JNYW5hZ2VyO1xyXG4gICAgLy8gZXhwb3J0IGZ1bmN0aW9uIGVycm9yTWdyKCk6IElGLklFcnJvck1hbmFnZXIge1xyXG4gICAgLy8gICAgIHJldHVybiBFcnJvck1hbmFnZXIuaW5zdGFuY2U7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDoqp7ns7vnrqHnkIblmaggOiDkv53lrZjnlbbliY3oqp7oqIDmnKws6Kqe57O75qij5byPXHJcbiAgICAgKiBAcmV0dXJuIHtmY2MuSUYuSUxhbmd1YWdlTWFuYWdlcn1cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBsZXQgbGFuZ3VhZ2VNZ3I6IElGLklMYW5ndWFnZU1hbmFnZXI7XHJcbiAgICAvLyBleHBvcnQgZnVuY3Rpb24gbGFuZ3VhZ2VNZ3IoKTogSUYuSUxhbmd1YWdlTWFuYWdlciB7XHJcbiAgICAvLyAgICAgcmV0dXJuIExhbmd1YWdlTWFuYWdlci5pbnN0YW5jZTtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOS6i+S7tueuoeeQhuWZqCznlbbliY3ntoHlrprnmoTkuovku7Ys5LqL5Lu25pW46YePXHJcbiAgICAgKiBAcmV0dXJuIHtmY2MuSUYuSUV2ZW50TWFuYWdlcn1cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBsZXQgZXZlbnRNZ3I6IElGLklFdmVudE1hbmFnZXI7XHJcbiAgICAvLyBleHBvcnQgZnVuY3Rpb24gZXZlbnRNZ3IoKTogSUYuSUV2ZW50TWFuYWdlciB7XHJcbiAgICAvLyAgICAgcmV0dXJuIEV2ZW50TWFuYWdlci5pbnN0YW5jZTtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOizh+a6kOeuoeeQhuiAhSA6IOWKoOi8ieizh+a6kCzkv53lrZjos4fmupAs542y5Y+W55W25YmN5Yqg6LyJ6YCy5bqmXHJcbiAgICAgKiBAcmV0dXJuIHtmY2MuSUYuSUxvYWRSZXNNYW5hZ2VyfVxyXG4gICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBleHBvcnQgbGV0IGxvYWRNZ3I6IElGLklMb2FkUmVzTWFuYWdlcjtcclxuICAgIC8vIGV4cG9ydCBmdW5jdGlvbiBMb2FkTWdyKCk6IElGLklMb2FkUmVzTWFuYWdlciB7XHJcbiAgICAvLyAgICAgcmV0dXJuIExvYWRSZXNNYW5hZ2VyLmluc3RhbmNlO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog57ay6Lev566h55CGIDog5YKz6YCB5bCB5YyFLOaOpeaUtuWwgeWMhVxyXG4gICAgICogQHJldHVybiB7ZmNjLklGLklMb2FkUmVzTWFuYWdlcn1cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBmdW5jdGlvbiBuZXR3b3JrTWdyKCk6IG51bGwge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6YGK5oiy5rWB56iL566h55CG5ZmoIDog566h55CG55W25YmN5rWB56iLLOWft+ihjOeVtuWJjea1geeoi1xyXG4gICAgICogQHJldHVybiB7ZmNjLklGLklQcm9jZXNzTWFuYWdlcn1cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBsZXQgcHJvY2Vzc01ncjogSUYuSVByb2Nlc3NNYW5hZ2VyO1xyXG4gICAgLy8gZXhwb3J0IGZ1bmN0aW9uIHByb2Nlc3NNZ3IoKTogSUYuSVByb2Nlc3NNYW5hZ2VyIHtcclxuICAgIC8vICAgICByZXR1cm4gUHJvY2Vzc01hbmFnZXIuaW5zdGFuY2U7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDloLTmma/nrqHnkIblmaggOiDoh6rli5XljLnphY3pgYrmiLLlr6zpq5gs55uj6IG955W25YmN546p5a626YGK546p5qih5byPKOapq+W8j29y55u05byPKVxyXG4gICAgICogQHJldHVybiB7ZmNjLklGLklTY2VuZU1hbmFnZXJ9XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBleHBvcnQgbGV0IHNjZW5lTWdyOiBJRi5JU2NlbmVNYW5hZ2VyO1xyXG4gICAgLy8gZXhwb3J0IGZ1bmN0aW9uIHNjZW5lTWdyKCk6IElGLklTY2VuZU1hbmFnZXIge1xyXG4gICAgLy8gICAgIHJldHVybiBTY2VuZU1hbmFnZXIuaW5zdGFuY2U7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDogIHomY7mqZ/nrqHnkIblmaggOiDnrqHnkIbogIHomY7mqZ/mqKPlvI8s5Z+36KGM6YCf5bqmLOaViOaenFxyXG4gICAgICovXHJcbiAgICBleHBvcnQgbGV0IHNsb3RTdHlsZU1ncjogSUYuSVNsb3RTdHlsZU1hbmFnZXI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmjqjmkqXogIXntoHlrproiIfmi7/lj5ZcclxuICAgICAqIEByZXR1cm4ge2ZjYy5JRi5JTm90aWZpY2F0aW9uTWFuYWdlcjxUPn1cclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIG5vdGlmaWNhdGlvbk1ncjxUIGV4dGVuZHMgSUYuSUJhc2VOb3RpZmljYXRpb24+KCk6IElGLklOb3RpZmljYXRpb25NYW5hZ2VyPFQ+IHtcclxuICAgICAgICByZXR1cm4gTm90aWZpY2F0aW9uTWFuYWdlci5pbnN0YW5jZTxUPigpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICog5pO05bGV6Iez5YWo5Z+fLGNvY29z6KaP5a6aXHJcbiAqIEB0eXBlIHtmY2N9XHJcbiAqL1xyXG5nbG9iYWxUaGlzLmZjYyA9IGZjYzsiLCJuYW1lc3BhY2UgZmNjIHtcclxuXHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIGdsb2JhbCB7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBBdXRob3IgWElBTy1MSS1QSU5cclxuICAgICAgICAgKiBARGVzY3JpcHRpb24g5YWx55SoOuaMiemIlemhnuaWueazlVxyXG4gICAgICAgICAqIEBEYXRlIDIwMjEtMDQtMTQg5LiL5Y2IIDIwOjI0XHJcbiAgICAgICAgICogQFZlcnNpb24gMS4xXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZXhwb3J0IGNsYXNzIEJ1dHRvbiB7XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICog5bCN6KmyYnV0dG9u5re75Yqg55uj6IG95LqL5Lu2XHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7Y2MuQnV0dG9ufSBidXR0b25Ob2RlIC0g5oyJ6YiV57WE5Lu2XHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtZXRob2ROYW1lIC0g6Kmy5oyJ6YiV57aB5a6a55qE5pa55rOV5ZCN56ixXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSBzZWxmIC0g6Kmy5pa55rOV5a2Y5Zyo55qE5L2N572uXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSBjdXN0b21FdmVudERhdGEgLSDlm57lgrPlgLxcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHN0YXRpYyBhZGRCdXR0b25FdmVudChidXR0b25Ob2RlOiBjYy5CdXR0b24sIG1ldGhvZE5hbWU6IHN0cmluZywgc2VsZjogYW55LCBjdXN0b21FdmVudERhdGE/OiBhbnkpIHtcclxuICAgICAgICAgICAgICAgIC8v5omL5YuV5re75Yqg55uj6IG95LqL5Lu2XHJcbiAgICAgICAgICAgICAgICBsZXQgdGhpc05vZGUgPSBzZWxmLm5vZGU7XHJcbiAgICAgICAgICAgICAgICBsZXQgc2NyaXB0TmFtZSA9IGNjLmpzLmdldENsYXNzTmFtZShzZWxmKTtcclxuICAgICAgICAgICAgICAgIGxldCBjbGlja19ldmVudCA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7IC8v57Wm5LqI5LiA5YCL5LqL5Lu2XHJcbiAgICAgICAgICAgICAgICBjbGlja19ldmVudC50YXJnZXQgPSB0aGlzTm9kZTsgLy/niLbpoZ7nr4Dpu54s5rOo5oSP54i26aGec2l6ZeS4jeiDveeCuigwLDApXHJcbiAgICAgICAgICAgICAgICBjbGlja19ldmVudC5jb21wb25lbnQgPSBzY3JpcHROYW1lOyAvL+ipsueItumhnueahHNjcmlwdFxyXG4gICAgICAgICAgICAgICAgY2xpY2tfZXZlbnQuaGFuZGxlciA9IG1ldGhvZE5hbWU7IC8v5bCN5LqL5Lu25re75YqgZnVuY3Rpb24s5ZCN56ix5piv5a2X5LiyXHJcbiAgICAgICAgICAgICAgICBpZiAoY3VzdG9tRXZlbnREYXRhIHx8IGN1c3RvbUV2ZW50RGF0YSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xpY2tfZXZlbnQuY3VzdG9tRXZlbnREYXRhID0gY3VzdG9tRXZlbnREYXRhOyAvL+a3u+WKoOWbnuiqv+WPg+aVuFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5ub2RlLmNsaWNrRXZlbnRzID0gW2NsaWNrX2V2ZW50XTsvL+S4gOasoea3u+WKoOWkmuWAi+ebo+iBveS6i+S7tlxyXG4gICAgICAgICAgICAgICAgYnV0dG9uTm9kZS5jbGlja0V2ZW50cy5wdXNoKGNsaWNrX2V2ZW50KTsgLy/nlbbpu57mk4rlvozop7jnmbzkuovku7ZcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIOemgeeUqGJ1dHRvblxyXG4gICAgICAgICAgICAgKiBAcGFyYW0ge2NjLkJ1dHRvbn0gYnV0dG9uIC0g5oyJ6YiV57WE5Lu2XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBzdGF0aWMgZGlzYWJsZUJ1dHRvbihidXR0b246IGNjLkJ1dHRvbikge1xyXG4gICAgICAgICAgICAgICAgYnV0dG9uLmludGVyYWN0YWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICog5ZWf55SoYnV0dG9uXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7Y2MuQnV0dG9ufWJ1dHRvbiAtIOaMiemIlee1hOS7tlxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgc3RhdGljIGVuYWJsZUJ1dHRvbihidXR0b246IGNjLkJ1dHRvbikge1xyXG4gICAgICAgICAgICAgICAgYnV0dG9uLmludGVyYWN0YWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiDlsI3oqbJub2RlIOa3u+WKoCBUT1VDSF9TVEFSVCDkuovku7ZcclxuICAgICAgICAgICAgICogQHBhcmFtIHtjYy5Ob2RlfSBub2RlIC0g6KaB57aB5a6a55qE5LqL5Lu254mp5Lu2XHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IG1ldGhvZCAtIOinuOeZvOS6i+S7tueahOaWueazlVxyXG4gICAgICAgICAgICAgKiBAcGFyYW0ge3RoaXN9IHNlbGYgLSDoqbLmlrnms5XlrZjlnKjnmoTkvY3nva5cclxuICAgICAgICAgICAgICogQHBhcmFtIHtib29sZWFufSB1c2VDYXB0dXJlIDogXCLmmK/lkKbpl5zplonlpJrpu57op7jmjqflip/og71cIlxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgc3RhdGljIGFkZFRvdWNoU3RhcnRFdmVudChub2RlOiBjYy5Ob2RlLCBtZXRob2Q6IEZ1bmN0aW9uLCBzZWxmOiBhbnksIHVzZUNhcHR1cmU/OiBib29sZWFuKSB7XHJcbiAgICAgICAgICAgICAgICBub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCBtZXRob2QsIHNlbGYsIHVzZUNhcHR1cmUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICog5bCN6Kmybm9kZSDpl5zplokgVE9VQ0hfU1RBUlQg5LqL5Lu2XHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7Y2MuTm9kZX0gbm9kZSAtIOimgee2geWumueahOS6i+S7tueJqeS7tlxyXG4gICAgICAgICAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBtZXRob2QgLSDop7jnmbzkuovku7bnmoTmlrnms5VcclxuICAgICAgICAgICAgICogQHBhcmFtIHt0aGlzfSBzZWxmIC0g6Kmy5pa55rOV5a2Y5Zyo55qE5L2N572uXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gdXNlQ2FwdHVyZSAtIOaYr+WQpumXnOmWieWkmum7nuinuOaOp+WKn+iDvVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgc3RhdGljIG9mZlRvdWNoU3RhcnRFdmVudChub2RlOiBjYy5Ob2RlLCBtZXRob2Q6IEZ1bmN0aW9uLCBzZWxmOiBhbnksIHVzZUNhcHR1cmU/OiBib29sZWFuKSB7XHJcbiAgICAgICAgICAgICAgICBub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgbWV0aG9kLCBzZWxmLCB1c2VDYXB0dXJlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBmY2Mge1xyXG5cclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgZ2xvYmFsIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAQXV0aG9yIFhJQU8tTEktUElOXHJcbiAgICAgICAgICogQERlc2NyaXB0aW9uIOWFseeUqDpQcmVmYWLmlrnms5VcclxuICAgICAgICAgKiBARGF0ZSAyMDIxLTA0LTE0IOS4i+WNiCAyMDoyNFxyXG4gICAgICAgICAqIEBWZXJzaW9uIDEuMVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGV4cG9ydCBjbGFzcyBQcmVmYWIge1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIOWwi+ioquipsm5vZGXlupXkuIvkuIDlsaTnr4Dpu57lhafmiYDmnInnianku7ZcclxuICAgICAgICAgICAgICogQHBhcmFtIHtjYy5Ob2RlfSBub2RlIC0g54i256+A6bueXHJcbiAgICAgICAgICAgICAqIEByZXR1cm4ge01hcDxzdHJpbmcsIGNjLk5vZGU+fSAtIE1hcChrZXk6IOipsuWtkOmhnm5vZGUgVVJMLCB2YWx1ZTroqbLlrZDpoZ5ub2Rl54mp5Lu2KVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgc3RhdGljIGdldE5vZGVPbmVDaGlsZHJlbihub2RlOiBjYy5Ob2RlKTogTWFwPHN0cmluZywgY2MuTm9kZT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGFsbE5vZGU6IE1hcDxzdHJpbmcsIGNjLk5vZGU+ID0gbmV3IE1hcCgpO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBub2RlLmNoaWxkcmVuQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBuID0gbm9kZS5jaGlsZHJlbltpXTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8PSBuLmNoaWxkcmVuQ291bnQ7IGorKykgey8v5bCL6Kiqbm9kZeW6leS4i+aYr+WQpuacieWtkOevgOm7nlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGxOb2RlLnNldChub2RlLmNoaWxkcmVuW2ldLm5hbWUsIG4pOy8vdmlld1vlrZDnr4Dpu57kvY3nva4s5a2Q56+A6bue5bGs5oCnXVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBhbGxOb2RlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICog5bCL6Kiq6Kmybm9kZeW6leS4i+WFqeWxpOWtkOevgOm7nlxyXG4gICAgICAgICAgICAgKiBAcGFyYW0ge25vZGUgOiDnianku7Z9IG5vZGUgLSDniLbnr4Dpu55cclxuICAgICAgICAgICAgICogQHJldHVybiB7TWFwPHN0cmluZywgY2MuTm9kZT59IC0gTWFwKGtleTog6Kmy5a2Q6aGebm9kZSBVUkwsIHZhbHVlOuipsuWtkOmhnm5vZGXnianku7YpXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBzdGF0aWMgZ2V0Tm9kZVRvd0NoaWxkcmVuKG5vZGU6IGNjLk5vZGUpOiBNYXA8c3RyaW5nLCBjYy5Ob2RlPiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYWxsTm9kZTogTWFwPHN0cmluZywgY2MuTm9kZT4gPSBuZXcgTWFwKCk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5vZGUuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG4gPSBub2RlLmNoaWxkcmVuW2ldOy8v5bCH6Kmy54i256+A6bue5bGs5oCn5YSy5a2YXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBhdGggPSBuLmNoaWxkcmVuW2ldLm5hbWU7Ly/lsIfniLbnr4Dpu57kvY3nva7lhLLlrZhcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8PSBuLmNoaWxkcmVuQ291bnQ7IGorKykgey8v5bCL6Kiqbm9kZeW6leS4i+aYr+WQpuacieWtkOevgOm7nlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnZpZXdbcm9vdC5jaGlsZHJlbltpXS5uYW1lXSA9IG47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChqID09IDApIHsvL+aykuacieWtkOevgOm7nlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsTm9kZS5zZXQobi5jaGlsZHJlbltpXS5uYW1lLCBuKTsvL3ZpZXdb54i256+A6bue5L2N572uLOeItuevgOm7nuWxrOaAp11cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHsvL+acieWtkOevgOm7nlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aCArPSBcIi9cIiArIG4uY2hpbGRyZW5baiAtIDFdLm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxOb2RlLnNldChwYXRoLCBuLmNoaWxkcmVuW2ogLSAxXSk7Ly92aWV3W+WtkOevgOm7nuS9jee9rizlrZDnr4Dpu57lsazmgKddXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRoID0gbi5jaGlsZHJlbltpXS5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFsbE5vZGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgZmNjIHtcclxuXHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIEFCUyB7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBBdXRob3IgWElBTy1MSS1QSU5cclxuICAgICAgICAgKiBARGVzY3JpcHRpb24g5o6o5pKl5oyB5pyJ6ICFLOWPr+e2geWumuaWvOipsuaOqOaSreiAheW6leS4iyznlbbmnInkuovku7bmjqjmkq3mmYIs5bCH5pyD5o6o5pKt57Wm6KmyY2xhc3NcclxuICAgICAgICAgKiBARGF0ZSAyMDIxLTA2LTExIOS4i+WNiCAwNTowM1xyXG4gICAgICAgICAqIEBWZXJzaW9uIDEuMFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBQmFzZU9ic2VydmVyIGltcGxlbWVudHMgSUYuSUJhc2VPYnNlcnZlciB7XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICog5piv5ZCm5bi46aeQ5o6o5pKlXHJcbiAgICAgICAgICAgICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAgICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgcHJpdmF0ZSBfaXNQZXJtYW5lbnQ6IGJvb2xlYW47XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICog5o6o5pKl5LqL5Lu25oyH5ZCR55qEIHRoaXNcclxuICAgICAgICAgICAgICogQHR5cGUge2FueX1cclxuICAgICAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHByaXZhdGUgcmVhZG9ubHkgX3NlbGY6IGFueTtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiDov5Tlm57mlrnms5VcclxuICAgICAgICAgICAgICogQHR5cGUgeyguLi5hbnkpID0+IHZvaWR9IC0g5q2j56K65Y+D5pW45pW46YeP55Sx5a2Q6aGe5a+m54++XHJcbiAgICAgICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBwcml2YXRlIHJlYWRvbmx5IF9jYWxsRnVuOiAoLi4uYW55KSA9PiB2b2lkO1xyXG5cclxuICAgICAgICAgICAgcHJvdGVjdGVkIGNvbnN0cnVjdG9yKGNhbGxGdW46ICguLi5hbnkpID0+IHZvaWQsIHNlbGYpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2lzUGVybWFuZW50ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zZWxmID0gc2VsZjtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NhbGxGdW4gPSBjYWxsRnVuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICog5o6o5pKt5LqL5Lu2XHJcbiAgICAgICAgICAgICAqIEBwYXJhbSBhbnkgLSDmraPnorrlj4Pmlbjmlbjph4/nlLHlrZDpoZ7lr6bnj75cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHB1YmxpYyBwdXNoTm90aWZpY2F0aW9uKC4uLmFueSk6IHZvaWQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY2FsbEZ1bi5jYWxsKHRoaXMuX3NlbGYsIC4uLmFueSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiDmmK/lkKbluLjpp5DmjqjmkqVcclxuICAgICAgICAgICAgICogQHJldHVybiB7Ym9vbGVhbn1cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIGdldCBpc1Blcm1hbmVudCgpOiBib29sZWFuIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9pc1Blcm1hbmVudDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIOaYr+WQpuW4uOmnkOaOqOaSpVxyXG4gICAgICAgICAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHZhbHVlXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBzZXQgaXNQZXJtYW5lbnQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2lzUGVybWFuZW50ID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgZmNjIHtcclxuICAgIC8qKlxyXG4gICAgICogQEF1dGhvciDola3nq4vlk4FcclxuICAgICAqIEBEZXNjcmlwdGlvbiBUT0RPXHJcbiAgICAgKiBARGF0ZSAyMDIxLTA2LTMwIOS4i+WNiCAwNTozNFxyXG4gICAgICogQFZlcnNpb24gMS4wXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBjbGFzcyBTbWFydEZveExpbmsge1xyXG5cclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBmY2Mge1xyXG5cclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgdHlwZSB7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBBdXRob3IgWElBTy1MSS1QSU5cclxuICAgICAgICAgKiBARGVzY3JpcHRpb24g6YGK5oiy55W25LiL54uA5oWLXHJcbiAgICAgICAgICogQERhdGUgMjAyMS0wNC0xNCDkuIvljYggMjA6MjRcclxuICAgICAgICAgKiBAVmVyc2lvbiAxLjFcclxuICAgICAgICAgKi9cclxuICAgICAgICBleHBvcnQgZW51bSBHYW1lU3RhdGVUeXBlIHtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiDnhKHni4DmhYss5b6F5qmf54uA5oWLLi4uXHJcbiAgICAgICAgICAgICAqIEB0eXBlIHtHYW1lU3RhdGVUeXBlLlNUQU5EQll9XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBTVEFOREJZID0gJ1NUQU5EQlknLFxyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIOS4gOiIrOeLgOaFi+mBiuaIsuS4rS4uLi5cclxuICAgICAgICAgICAgICogQHR5cGUge0dhbWVTdGF0ZVR5cGUuUExBWUlOR31cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIFBMQVlJTkcgPSAnUExBWUlORycsXHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICog5YWN6LK76YGK5oiy5LitLi4uLlxyXG4gICAgICAgICAgICAgKiBAdHlwZSB7R2FtZVN0YXRlVHlwZS5GUkVFSU5HfVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgRlJFRUlORyA9ICdGUkVFSU5HJyxcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAQXV0aG9yIFhJQU8tTEktUElOXHJcbiAgICAgICAgICogQERlc2NyaXB0aW9uIOahhuaetumgkOioreeahOa1geeoi1xyXG4gICAgICAgICAqIEBEYXRlIDIwMjEtMDQtMTQg5LiL5Y2IIDIwOjI0XHJcbiAgICAgICAgICogQFZlcnNpb24gMS4xXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZXhwb3J0IGVudW0gUHJvY2Vzc1R5cGUge1xyXG4gICAgICAgICAgICBGUkVFID0gJ0ZSRUUnLFxyXG4gICAgICAgICAgICBOT1JNQUwgPSAnTk9STUFMJyxcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9FbnVtL0F1dG9UeXBlLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vRW51bS9HYW1lU3RhdGUudHNcIiAvPlxyXG5cclxubmFtZXNwYWNlIGZjYyB7XHJcblxyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBJRiB7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBBdXRob3IgWElBTy1MSS1QSU5cclxuICAgICAgICAgKiBARGVzY3JpcHRpb24gKOS7i+mdoinpgYrmiLLnrqHnkIblmags566h55CG55W25YmN5rWB56iLLOmBiuaIsueVtuWJjeeLgOaFi1xyXG4gICAgICAgICAqIEBEYXRlIDIwMjEtMDUtMTQg5LiL5Y2IIDAzOjQ0XHJcbiAgICAgICAgICogQFZlcnNpb24gMS4xXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZXhwb3J0IGludGVyZmFjZSBJUHJvY2Vzc01hbmFnZXIge1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIOeVtuWJjemBiuaIsueLgOaFi1xyXG4gICAgICAgICAgICAgKiBAdHlwZSB7ZmNjLnR5cGUuR2FtZVN0YXRlVHlwZX1cclxuICAgICAgICAgICAgICogQGRlZmF1bHQgLSB0eXBlLkdhbWVTdGF0ZVR5cGUuU1RBTkRCWVxyXG4gICAgICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgZ2FtZVN0YXRlOiB0eXBlLkdhbWVTdGF0ZVR5cGU7XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICog6Kit5a6a5rWB56iLXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7ZmNjLnR5cGUuUHJvY2Vzc1R5cGUgfCBzdHJpbmd9IHByb2Nlc3NOYW1lIC0g5Y+v5L2/55So6aCQ6KitIFByb2Nlc3NUeXBlIOaIluiHquiogue+qea1geeoi+WQjeeosVxyXG4gICAgICAgICAgICAgKiBAcGFyYW0ge2ZjYy5JRi5JUHJvY2Vzc30gcHJvY2VzcyAtIOa1geeoi1xyXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHt0aGlzfVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgc2V0UHJvY2Vzcyhwcm9jZXNzTmFtZTogdHlwZS5Qcm9jZXNzVHlwZSB8IHN0cmluZywgcHJvY2VzczogSVByb2Nlc3MpOiB0aGlzO1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIOWIneWni+a1geeoiyzln7fooYzntoHlrprnmoTmtYHnqIvlhafnmoRvbkNyZWF0ZeaWueazlVxyXG4gICAgICAgICAgICAgKiBAcGFyYW0ge3N0cmluZyB8IGZjYy50eXBlLlByb2Nlc3NUeXBlfSBwcm9jZXNzTmFtZSAtIOaMh+WumuWPquimgeWIneWni+WTquWAi+a1geeoiyBjbGFzcyzlpoLmnpzkvb/nlKjnhKHlj4Pmlrnms5Us5bCH5pyD5Yid5aeL5YyW5omA5pyJ57aB5a6a55qE5rWB56iLXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBpbml0UHJvY2Vzcyhwcm9jZXNzTmFtZT86IHN0cmluZyB8IGZjYy50eXBlLlByb2Nlc3NUeXBlKTogdm9pZDtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiDoqK3lrprliJ3lp4vopoHln7fooYznmoTmtYHnqItcclxuICAgICAgICAgICAgICogQHBhcmFtIHByb2Nlc3NOYW1lIC0g5rWB56iL5ZCN56ixXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBzZXREZWZhdWx0UHJvY2Vzcyhwcm9jZXNzTmFtZTogc3RyaW5nIHwgdHlwZS5Qcm9jZXNzVHlwZSk6IHZvaWQ7XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICog5pu05o+b5rWB56iLXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7ZmNjLnR5cGUuUHJvY2Vzc1R5cGUgfCBzdHJpbmd9IHByb2Nlc3NOYW1lIC0g5Y6f5pys6Kit5a6a55qE5rWB56iL5ZCN56ixXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBjaGFuZ2VQcm9jZXNzKHByb2Nlc3NOYW1lOiB0eXBlLlByb2Nlc3NUeXBlIHwgc3RyaW5nKTogdm9pZDtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiDln7fooYzoqK3lrprlpb3nmoTmtYHnqItcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHBsYXkoKTogUHJvbWlzZTx2b2lkPjtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiDmuIXpmaTloLXloZ7ni4DmhYtcclxuICAgICAgICAgICAgICog5rOo5oSPOua4hemZpOipsueLgOaFi+W+jCzoqbLmrKHnmoTmtYHnqIvljbPkvb/lsJrmnKrln7fooYzlrows5Lmf6IO95Z+36KGM5LiL5qyh5rWB56iLXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICByZW1ha2UoKTogdm9pZDtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vRW51bS9HYW1lU3RhdGUudHNcIiAvPlxyXG5uYW1lc3BhY2UgZmNjIHtcclxuXHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIElGIHtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQEF1dGhvciBYSUFPLUxJLVBJTlxyXG4gICAgICAgICAqIEBEZXNjcmlwdGlvbiAo5LuL6Z2iKeabtOaWsCznjbLlj5Ys5Yqg5YWlLOiuiuabtCzkvb/nlKjnrYkuLua1geeoi+W3peW7oFxyXG4gICAgICAgICAqIEBEYXRlIDIwMjEtMDUtMTQg5LiK5Y2IIDEwOjUwXHJcbiAgICAgICAgICogQFZlcnNpb24gMS4wXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZXhwb3J0IGludGVyZmFjZSBJR2FtZVByb2Nlc3NGYWN0b3J5IHtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiDnlbbliY3mtYHnqItcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHByb2Nlc3M6IElQcm9jZXNzO1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIOWIneWni+a1geeoiyzln7fooYzntoHlrprnmoTmtYHnqIvlhafnmoRvbkNyZWF0ZeaWueazlVxyXG4gICAgICAgICAgICAgKiBAcGFyYW0ge3N0cmluZyB8IGZjYy50eXBlLlByb2Nlc3NUeXBlfSBwcm9jZXNzTmFtZSAtIOaMh+WumuWPquimgeWIneWni+WTquWAi+a1geeoiyBjbGFzcyzlpoLmnpzkvb/nlKjnhKHlj4Pmlrnms5Us5bCH5pyD5Yid5aeL5YyW5omA5pyJ57aB5a6a55qE5rWB56iLXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBpbml0UHJvY2Vzcyhwcm9jZXNzTmFtZT86IHN0cmluZyB8IHR5cGUuUHJvY2Vzc1R5cGUpOiB2b2lkO1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIOa3u+WKoOa1geeoi1xyXG4gICAgICAgICAgICAgKiBAcGFyYW0ge3N0cmluZyB8IEdhbWVUeXBlfSBwcm9jZXNzTmFtZSAtIOWPr+S9v+eUqOmgkOiorSBQcm9jZXNzVHlwZSDmiJboh6roqILnvqnmtYHnqIvlkI3nqLFcclxuICAgICAgICAgICAgICogQHBhcmFtIHtJUHJvY2Vzc30gcHJvY2VzcyAtIOa1geeoiyBjbGFzc1xyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgc2V0UHJvY2Vzcyhwcm9jZXNzTmFtZTogc3RyaW5nIHwgdHlwZS5Qcm9jZXNzVHlwZSwgcHJvY2VzczogSVByb2Nlc3MpO1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIOeNsuWPluipsua1geeoi1xyXG4gICAgICAgICAgICAgKiBAcGFyYW0ge3N0cmluZyB8IEdhbWVUeXBlfSBwcm9jZXNzTmFtZSAtIOWPr+S9v+eUqOmgkOiorSBQcm9jZXNzVHlwZSDmiJboh6roqILnvqnmtYHnqIvlkI3nqLFcclxuICAgICAgICAgICAgICogQHJldHVybnMge0lQcm9jZXNzfVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgZ2V0UHJvY2Vzcyhwcm9jZXNzTmFtZTogc3RyaW5nIHwgdHlwZS5Qcm9jZXNzVHlwZSk6IElQcm9jZXNzO1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIOaLv+WPluWFqOmDqOW3sue2k+e2geWumueahOa1geeoi1xyXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHtNYXA8c3RyaW5nLCBmY2MuSUYuSVByb2Nlc3M+fVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgZ2V0QWxsUHJvY2VzcygpOiBNYXA8c3RyaW5nLCBJRi5JUHJvY2Vzcz47XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICog5pS56K6K5rWB56iLXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7c3RyaW5nIHwgR2FtZVR5cGV9IHByb2Nlc3NOYW1lIC0g5Y+v5L2/55So6aCQ6KitIFByb2Nlc3NUeXBlIOaIluiHquiogue+qea1geeoi+WQjeeosVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgY2hhbmdlUHJvY2Vzcyhwcm9jZXNzTmFtZTogc3RyaW5nIHwgdHlwZS5Qcm9jZXNzVHlwZSk7XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICog5Z+36KGM5rWB56iLXHJcbiAgICAgICAgICAgICAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgdXNlUHJvY2VzcygpOiBQcm9taXNlPHZvaWQ+O1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vRXJyb3IvRW51bS9FcnJvclR5cGUudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9FbnVtL0dhbWVTdGF0ZS50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0lQcm9jZXNzTWFuYWdlci50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0lHYW1lUHJvY2Vzc0ZhY3RvcnkudHNcIiAvPlxyXG5uYW1lc3BhY2UgZmNjIHtcclxuICAgIC8qKlxyXG4gICAgICogQEF1dGhvciBYSUFPLUxJLVBJTlxyXG4gICAgICogQERlc2NyaXB0aW9uIOa1geeoi+W3peW7oCA6IOabtOaWsCznjbLlj5Ys5Yqg5YWlLOiuiuabtOetiS4uIOazqOaEjzrmraQgY2xhc3Mg55SxIG1hbmFnZXIg5a+m5L6L5YyWLOWmguaenOeEoeeJueauiumcgOaxgizoq4vli7/kvb/nlKhcclxuICAgICAqIEBEYXRlIDIwMjEtMDUtMTMg5LiL5Y2IIDA2OjE3XHJcbiAgICAgKiBAVmVyc2lvbiAxLjFcclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGNsYXNzIEdhbWVQcm9jZXNzRmFjdG9yeSBpbXBsZW1lbnRzIElGLklHYW1lUHJvY2Vzc0ZhY3Rvcnkge1xyXG5cclxuICAgICAgICBwcml2YXRlIGdhbWVNYW5hZ2VyOiBJRi5JUHJvY2Vzc01hbmFnZXI7ICAgICAgICAgICAgICAgICAgICAvL+mBiuaIsuaOp+WItuWZqCzpm5nlkJHntoHlrppcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IHByb2Nlc3NUb01hcDogTWFwPHN0cmluZywgSUYuSVByb2Nlc3M+OyAgICAvL+aJgOaciea1geeoi+a3u+WKoOS/neWtmFxyXG4gICAgICAgIHB1YmxpYyBwcm9jZXNzOiBJRi5JUHJvY2VzczsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v55W25YmN5L2/55So55qE5rWB56iLXHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGdhbWVNYW5hZ2VyOiBJRi5JUHJvY2Vzc01hbmFnZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lTWFuYWdlciA9IGdhbWVNYW5hZ2VyO1xyXG4gICAgICAgICAgICB0aGlzLnByb2Nlc3NUb01hcCA9IG5ldyBNYXA8c3RyaW5nLCBJRi5JUHJvY2Vzcz4oKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOWIneWni+a1geeoiyzln7fooYzntoHlrprnmoTmtYHnqIvlhafnmoRvbkNyZWF0ZeaWueazlVxyXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nIHwgZmNjLnR5cGUuUHJvY2Vzc1R5cGV9IHByb2Nlc3NOYW1lIC0g5oyH5a6a5Y+q6KaB5Yid5aeL5ZOq5YCL5rWB56iLIGNsYXNzLOWmguaenOS9v+eUqOeEoeWPg+aWueazlSzlsIfmnIPliJ3lp4vljJbmiYDmnInntoHlrprnmoTmtYHnqItcclxuICAgICAgICAgKi9cclxuICAgICAgICBpbml0UHJvY2Vzcyhwcm9jZXNzTmFtZT86IHN0cmluZyB8IGZjYy50eXBlLlByb2Nlc3NUeXBlKSB7XHJcbiAgICAgICAgICAgIGlmIChwcm9jZXNzTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnByb2Nlc3NUb01hcC5oYXMocHJvY2Vzc05hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgRXJyb3JNYW5hZ2VyLmluc3RhbmNlLmV4ZWN1dGVFcnJvcih0eXBlLkVycm9yVHlwZS5QUk9DRVNTX0ZXLCBcIuafpeaJvuS4jeWIsOipsua1geeoiyzoq4vnorroqo3mmK/lkKblt7LntoHlrprpgLLmoYbmnrbkuK1cIik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc1RvTWFwLmdldChwcm9jZXNzTmFtZSkuZXhlY3V0aW9uQ29udGFpbmVyLm9uQ3JlYXRlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWVzID0gdGhpcy5wcm9jZXNzVG9NYXAudmFsdWVzKCk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCB2YWx1ZSBvZiB2YWx1ZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZS5leGVjdXRpb25Db250YWluZXIub25DcmVhdGUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOa3u+WKoOa1geeoi1xyXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nIHwgR2FtZVR5cGV9IHByb2Nlc3NOYW1lIC0g5Y+v5L2/55So6aCQ6KitIFByb2Nlc3NUeXBlIOaIluiHquiogue+qea1geeoi+WQjeeosVxyXG4gICAgICAgICAqIEBwYXJhbSB7SVByb2Nlc3N9IHByb2Nlc3MgLSDmtYHnqIsgY2xhc3NcclxuICAgICAgICAgKi9cclxuICAgICAgICBzZXRQcm9jZXNzKHByb2Nlc3NOYW1lOiBzdHJpbmcgfCB0eXBlLlByb2Nlc3NUeXBlLCBwcm9jZXNzOiBJRi5JUHJvY2Vzcykge1xyXG4gICAgICAgICAgICB0aGlzLnByb2Nlc3NUb01hcC5zZXQocHJvY2Vzc05hbWUsIHByb2Nlc3MpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog542y5Y+W6Kmy5rWB56iLXHJcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmcgfCBHYW1lVHlwZX0gcHJvY2Vzc05hbWUgLSDlj6/kvb/nlKjpoJDoqK0gUHJvY2Vzc1R5cGUg5oiW6Ieq6KiC576p5rWB56iL5ZCN56ixXHJcbiAgICAgICAgICogQHJldHVybnMge0lQcm9jZXNzfVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGdldFByb2Nlc3MocHJvY2Vzc05hbWU6IHN0cmluZyB8IHR5cGUuUHJvY2Vzc1R5cGUpOiBJRi5JUHJvY2VzcyB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb2Nlc3NUb01hcC5nZXQocHJvY2Vzc05hbWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5ou/5Y+W5YWo6YOo5bey57aT57aB5a6a55qE5rWB56iLXHJcbiAgICAgICAgICogQHJldHVybiB7TWFwPHN0cmluZywgZmNjLklGLklQcm9jZXNzPn1cclxuICAgICAgICAgKi9cclxuICAgICAgICBnZXRBbGxQcm9jZXNzKCk6IE1hcDxzdHJpbmcsIElGLklQcm9jZXNzPiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb2Nlc3NUb01hcDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOaUueiuiua1geeoi1xyXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nIHwgR2FtZVR5cGV9IHByb2Nlc3NOYW1lIC0g5Y+v5L2/55So6aCQ6KitIFByb2Nlc3NUeXBlIOaIluiHquiogue+qea1geeoi+WQjeeosVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNoYW5nZVByb2Nlc3MocHJvY2Vzc05hbWU6IHN0cmluZyB8IHR5cGUuUHJvY2Vzc1R5cGUpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLnByb2Nlc3NUb01hcC5oYXMocHJvY2Vzc05hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICBFcnJvck1hbmFnZXIuaW5zdGFuY2UuZXhlY3V0ZUVycm9yKHR5cGUuRXJyb3JUeXBlLlBST0NFU1NfRlcsIGAke3Byb2Nlc3NOYW1lfSDmkJzlsIvkuI3liLDmraTmtYHnqIss6KuL5qqi5p+l5rWB56iL5piv5ZCm5re75YqgYCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5wcm9jZXNzID0gdGhpcy5wcm9jZXNzVG9NYXAuZ2V0KHByb2Nlc3NOYW1lKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOWft+ihjOa1geeoi1xyXG4gICAgICAgICAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGFzeW5jIHVzZVByb2Nlc3MoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucHJvY2Vzcy5zdGFydCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBmY2Mge1xyXG5cclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgdHlwZSB7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOW+heWIqumZpFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGV4cG9ydCBlbnVtIEdhbWVFdmVudFR5cGUge1xyXG4gICAgICAgICAgICBURVNUID0gXCJURVNUXCIsXHJcbiAgICAgICAgICAgIC8vIC8qKlxyXG4gICAgICAgICAgICAvLyAgKiDliqDpgJ/mjInpiJXnm6Pogb1cclxuICAgICAgICAgICAgLy8gICogQHR5cGUge0dhbWVFdmVudFR5cGUuU1BFRURfVVB9XHJcbiAgICAgICAgICAgIC8vICAqL1xyXG4gICAgICAgICAgICAvLyBTUEVFRF9VUCA9IFwiU1BFRURfVVBcIixcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gLyoqXHJcbiAgICAgICAgICAgIC8vICAqIOWNs+WBnOebo+iBvVxyXG4gICAgICAgICAgICAvLyAgKiBAdHlwZSB7R2FtZUV2ZW50VHlwZS5JTU1FRElBVEVfU1RPUH1cclxuICAgICAgICAgICAgLy8gICovXHJcbiAgICAgICAgICAgIC8vIElNTUVESUFURV9TVE9QID0gXCJJTU1FRElBVEVfU1RPUFwiLFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyAvKipcclxuICAgICAgICAgICAgLy8gICog556H5o6S5LqL5Lu2XHJcbiAgICAgICAgICAgIC8vICAqIEB0eXBlIHtHYW1lRXZlbnRUeXBlLkxPT0tfQVR9XHJcbiAgICAgICAgICAgIC8vICAqL1xyXG4gICAgICAgICAgICAvLyBMT09LX0FUID0gJ0xPT0tfQVQnLFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyAvKipcclxuICAgICAgICAgICAgLy8gICog546p5a626YeR6aGN5LiN6LazXHJcbiAgICAgICAgICAgIC8vICAqIEB0eXBlIHtHYW1lRXZlbnRUeXBlLlVTRVJfUE9JTlRfSU5TVUZGSUNJRU5UfVxyXG4gICAgICAgICAgICAvLyAgKi9cclxuICAgICAgICAgICAgLy8gVVNFUl9QT0lOVF9JTlNVRkZJQ0lFTlQgPSBcIlVTRVJfUE9JTlRfSU5TVUZGSUNJRU5UXCIsXHJcbiAgICAgICAgICAgIC8vIC8qKlxyXG4gICAgICAgICAgICAvLyAgKiDoqbLmrKHotI/liIbmmYJcclxuICAgICAgICAgICAgLy8gICovXHJcbiAgICAgICAgICAgIC8vIFdJTl9QT0lOVCA9ICdXSU5fUE9JTlQnLFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyAvKipcclxuICAgICAgICAgICAgLy8gICogVVNFUuaKvOazqOmdoumhjeebo+iBvVxyXG4gICAgICAgICAgICAvLyAgKi9cclxuICAgICAgICAgICAgLy8gVVNFUl9UT1RBTF9CRVQgPSAnVVNFUl9UT1RBTF9CRVQnLFxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyAvKipcclxuICAgICAgICAgICAgLy8gICogYXV0b+S6i+S7tlxyXG4gICAgICAgICAgICAvLyAgKi9cclxuICAgICAgICAgICAgLy8gQVVUTyA9ICdBVVRPJyxcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgZmNjIHtcclxuXHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIHR5cGUge1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAQXV0aG9yIFhJQU8tTEktUElOXHJcbiAgICAgICAgICogQERlc2NyaXB0aW9uIHNlcnZlciDlm57lgrPkuovku7Yg5Z6LXHJcbiAgICAgICAgICogQERhdGUgMjAyMS0wNC0xNCDkuIvljYggMjA6MjRcclxuICAgICAgICAgKiBAVmVyc2lvbiAxLjFcclxuICAgICAgICAgKi9cclxuICAgICAgICBleHBvcnQgZW51bSBTZXJ2ZXJFdmVudFR5cGUge1xyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogIOS4gOiIrOeNsueNjuWbnuWCs1xyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgQkVUX1JFU1VMVCA9IFwiQkVUX1JFU1VMVFwiLFxyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIOWFjeiyu+aooeW8j+eNsueNjlxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgRlJFRV9TUElOX1JFU1VMVCA9IFwiRlJFRV9TUElOX1JFU1VMVFwiLFxyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIOW6leWxpOmAsumBiuaIsiDpgJrnn6VMb2FkaW5n6aCB6Z2iIOWPr+S7pemhr+ekuuS4u+mBiuaIsuWgtOaZr1xyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgQ0FOX1BMQVlfR0FNRSA9IFwiQ0FOX1BMQVlfR0FNRVwiLFxyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIOeNsuWPlumBiuaIsuatt+WPsue1kOaenFxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgR0VUX0dBTUVfSElTVE9SWV9SRVNVTFQgPSBcIkdFVF9HQU1FX0hJU1RPUllfUkVTVUxUXCIsXHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICog542y5Y+W6YGK5oiy56Wl5ZauXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBHRVRfSElTVE9SWV9ERVRBSUxfUkVTVUxUID0gXCJHRVRfSElTVE9SWV9ERVRBSUxfUkVTVUxUXCIsXHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICog6Kmy5bGA6YGK5oiy5bqP6JmfXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBHUk9VUF9JRCA9IFwiR1JPVVBfSURcIixcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiDpgLLlhaXpgYrmiLLlvozliJ3lp4vos4foqIpcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIFRBQkxFX0lORk8gPSBcIlRBQkxFX0lORk9cIixcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiDlkITnqK7pjK/oqqToqIrmga9cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIFdBUk5JTkcgPSBcIldBUk5JTkdcIixcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgZmNjIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBBdXRob3IgWElBTy1MSS1QSU5cclxuICAgICAqIEBEZXNjcmlwdGlvbiDku7vkvZXpgYrmiLLnmoblj6/nlKjmtYHnqItcclxuICAgICAqIEBEYXRlIDIwMjEtMDUtMTQg5LiL5Y2IIDAzOjA3XHJcbiAgICAgKiBAVmVyc2lvbiAxLjBcclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGNsYXNzIEdhbWVQcm9jZXNzIGltcGxlbWVudHMgSUYuSUdhbWVQcm9jZXNzIHtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5L+d5a2Y5L2/55So6ICF57aB5a6a55qE5rWB56iL5pa55rOVXHJcbiAgICAgICAgICogQHR5cGUge1NldDxGdW5jdGlvbj59XHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IF9wcm9jZXNzOiBTZXQ8KCkgPT4gUHJvbWlzZTx2b2lkPiB8IHZvaWQ+O1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDmtYHnqIvlrrnlmahcclxuICAgICAgICAgKiBAdHlwZSB7SUdhbWVQcm9jZWR1cmVFeGVjdXRpb25Db250YWluZXJ9XHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IF9leGVjdXRpb25Db250YWluZXI6IElGLklHYW1lUHJvY2VkdXJlRXhlY3V0aW9uQ29udGFpbmVyO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IElGLklHYW1lUHJvY2VkdXJlRXhlY3V0aW9uQ29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2V4ZWN1dGlvbkNvbnRhaW5lciA9IGNvbnRhaW5lcjtcclxuICAgICAgICAgICAgdGhpcy5fcHJvY2VzcyA9IG5ldyBTZXQ8KCkgPT4gUHJvbWlzZTx2b2lkPj4oKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOWft+ihjOa1geeoi1xyXG4gICAgICAgICAqIEByZXR1cm4ge3RoaXN9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgb25FeGVjdXRpb24oKTogdGhpcyB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9wcm9jZXNzLmFkZCh0aGlzLl9leGVjdXRpb25Db250YWluZXIub25FeGVjdXRpb24pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDmtYHnqIvntZDmnZ/mmYJcclxuICAgICAgICAgKiBAcmV0dXJuIHt0aGlzfVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIG9uRW5kKCk6IHRoaXMge1xyXG4gICAgICAgICAgICB0aGlzLl9wcm9jZXNzLmFkZCh0aGlzLl9leGVjdXRpb25Db250YWluZXIub25FbmQpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOabtOaPm+a1geeoi1xyXG4gICAgICAgICAqIEByZXR1cm4ge3RoaXN9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgb25DaGFuZ2VTdGF0dXMoKTogdGhpcyB7XHJcbiAgICAgICAgICAgIHRoaXMuX3Byb2Nlc3MuYWRkKHRoaXMuX2V4ZWN1dGlvbkNvbnRhaW5lci5vbkNoYW5nZVN0YXR1cyk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5bCH5omA5pyJ57aB5a6a55qE5rWB56iL5pa55rOV5L6d5bqP5Z+36KGMXHJcbiAgICAgICAgICogQHJldHVybiB7UHJvbWlzZTx2b2lkPn1cclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgYXN5bmMgc3RhcnQoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IG1ldGhvZCBvZiB0aGlzLl9wcm9jZXNzKSB7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCBtZXRob2QuYXBwbHkodGhpcy5fZXhlY3V0aW9uQ29udGFpbmVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZ2V0IHByb2Nlc3MoKTogU2V0PCgpID0+IChQcm9taXNlPHZvaWQ+IHwgdm9pZCk+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3Byb2Nlc3M7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBnZXQgZXhlY3V0aW9uQ29udGFpbmVyKCk6IGZjYy5JRi5JR2FtZVByb2NlZHVyZUV4ZWN1dGlvbkNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9leGVjdXRpb25Db250YWluZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIGZjYyB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAQXV0aG9yIFhJQU8tTEktUElOXHJcbiAgICAgKiBARGVzY3JpcHRpb24g6ICB6JmO5qmf5rWB56iLXHJcbiAgICAgKiBARGF0ZSAyMDIxLTA1LTE0IOS4i+WNiCAwMzowN1xyXG4gICAgICogQFZlcnNpb24gMS4wXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBjbGFzcyBTbG90R2FtZVByb2Nlc3MgaW1wbGVtZW50cyBJRi5JU2xvdEdhbWVQcm9jZXNzIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDkv53lrZjkvb/nlKjogIXntoHlrprnmoTmtYHnqIvmlrnms5VcclxuICAgICAgICAgKiBAdHlwZSB7U2V0PEZ1bmN0aW9uPn1cclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgX3Byb2Nlc3M6IFNldDwoKSA9PiBQcm9taXNlPHZvaWQ+IHwgdm9pZD47XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5rWB56iL5a655ZmoXHJcbiAgICAgICAgICogQHR5cGUge0lTbG90UHJvY2VkdXJlRXhlY3V0aW9uQ29udGFpbmVyfVxyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBfZXhlY3V0aW9uQ29udGFpbmVyOiBJRi5JU2xvdFByb2NlZHVyZUV4ZWN1dGlvbkNvbnRhaW5lcjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBJRi5JU2xvdFByb2NlZHVyZUV4ZWN1dGlvbkNvbnRhaW5lcikge1xyXG4gICAgICAgICAgICB0aGlzLl9leGVjdXRpb25Db250YWluZXIgPSBjb250YWluZXI7XHJcbiAgICAgICAgICAgIHRoaXMuX3Byb2Nlc3MgPSBuZXcgU2V0KCk7ICAgICAgICAgICAgICAvL+WIneWni+WMlizlrZjmlL7opoHln7fooYznmoTmlrnms5VcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOWIneWni+WMliA6IOiHquiogumWi+Wni+mBiuaIsuWJjeeahOaViOaenFxyXG4gICAgICAgICAqIEBleGFtcGxlIC0g5oyJ6YiVLOiDjOaZr+KApuetiVxyXG4gICAgICAgICAqIEByZXR1cm4ge3RoaXN9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIG9uQ3VzdG9taXplU3RhcnQoKTogdGhpcyB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9wcm9jZXNzLmFkZCh0aGlzLl9leGVjdXRpb25Db250YWluZXIub25DdXN0b21pemVTdGFydCk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOiAgeiZjuapn+mBi+ihjOWJjSzmvLjlhaXmlYjmnpxcclxuICAgICAgICAgKiBAcmV0dXJuIHt0aGlzfVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBvblNpbmVJbkdyaWQoKTogdGhpcyB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9wcm9jZXNzLmFkZCh0aGlzLl9leGVjdXRpb25Db250YWluZXIub25TaW5lSW5HcmlkKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog6YGK5oiy5oyB57qM5Z+36KGM5YuV5L2cXHJcbiAgICAgICAgICogQHJldHVybiB7dGhpc31cclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgb25SdW5uaW5nKCk6IHRoaXMge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fcHJvY2Vzcy5hZGQodGhpcy5fZXhlY3V0aW9uQ29udGFpbmVyLm9uUnVuR3JpZCk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOiHquiogue+qeWBnOatouW+jOS6i+S7tlxyXG4gICAgICAgICAqIEBleGFtcGxlIC0g5pu05o+b6Z+z5qiCLOabtOaPm+iDjOaZr+WcluahiCzmoKHmraPlm57mrbjmtYHnqIvni4DmhYsuLi7nrYlcclxuICAgICAgICAgKiBAcmV0dXJuIHt0aGlzfVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBvbkN1c3RvbWl6ZUVuZCgpOiB0aGlzIHtcclxuICAgICAgICAgICAgdGhpcy5fcHJvY2Vzcy5hZGQodGhpcy5fZXhlY3V0aW9uQ29udGFpbmVyLm9uQ3VzdG9taXplRW5kKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDpoa/npLrntZDmnpxcclxuICAgICAgICAgKiBAcmV0dXJuIHt0aGlzfVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBvblNob3dBbnN3ZXIoKTogdGhpcyB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9wcm9jZXNzLmFkZCh0aGlzLl9leGVjdXRpb25Db250YWluZXIub25TaG93QW5zd2VyKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5pu05o+b5rWB56iLXHJcbiAgICAgICAgICogQGV4YW1wbGUgLSBmY2MucHJvY2Vzc01hbmFnZXIuY2hhbmdlUHJvY2VzcyhHYW1lVHlwZS5OT1JNQUwpO1xyXG4gICAgICAgICAqIEByZXR1cm4ge3RoaXN9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgb25DaGFuZ2VTdGF0dXMoKTogdGhpcyB7XHJcbiAgICAgICAgICAgIHRoaXMuX3Byb2Nlc3MuYWRkKHRoaXMuX2V4ZWN1dGlvbkNvbnRhaW5lci5vbkNoYW5nZVN0YXR1cyk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog6ZaL5aeL5Z+36KGMXHJcbiAgICAgICAgICogQHJldHVybiB7UHJvbWlzZTx2b2lkPn1cclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgYXN5bmMgc3RhcnQoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IG1ldGhvZCBvZiB0aGlzLl9wcm9jZXNzKSB7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCBtZXRob2QuYXBwbHkodGhpcy5fZXhlY3V0aW9uQ29udGFpbmVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZ2V0IGV4ZWN1dGlvbkNvbnRhaW5lcigpOiBmY2MuSUYuSVNsb3RQcm9jZWR1cmVFeGVjdXRpb25Db250YWluZXIge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZXhlY3V0aW9uQ29udGFpbmVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZ2V0IHByb2Nlc3MoKTogU2V0PCgpID0+IChQcm9taXNlPHZvaWQ+IHwgdm9pZCk+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3Byb2Nlc3M7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIGZjYyB7XHJcblxyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBBQlMge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBBdXRob3Ig6JWt56uL5ZOBXHJcbiAgICAgICAgICogQERlc2NyaXB0aW9uIFRPRE9cclxuICAgICAgICAgKiBARGF0ZSAyMDIxLTA2LTI4IOS4i+WNiCAwNjo0MlxyXG4gICAgICAgICAqIEBWZXJzaW9uIDEuMFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBU2xvdFNldHRpbmcgaW1wbGVtZW50cyBJRi5JU2xvdFNldHRpbmcge1xyXG5cclxuICAgICAgICAgICAgcHJpdmF0ZSBfbm9ybWFsUmVzdWx0OiBJU2xvdEJhc2VSZXN1bHRNb2RlbDtcclxuXHJcbiAgICAgICAgICAgIHByaXZhdGUgX2ZyZWVSZXN1bHQ6IElTbG90RnJlZUJhc2VSZXN1bHRNb2RlbDtcclxuXHJcbiAgICAgICAgICAgIHByaXZhdGUgX2NvbHVtbkludGVydmFsVGltZTogbnVtYmVyO1xyXG5cclxuICAgICAgICAgICAgcHJpdmF0ZSBfZ3JpZE5vZGVUb01hcDogTWFwPG51bWJlciwgQXJyYXk8Y2MuTm9kZT4+O1xyXG5cclxuICAgICAgICAgICAgcHJpdmF0ZSBfc2xvdENvbHVtblRvVHdlZW46IEFycmF5PGNjLk5vZGU+O1xyXG5cclxuICAgICAgICAgICAgcHJpdmF0ZSBfc2xvdEdpcmRTcGVlZDogbnVtYmVyO1xyXG5cclxuICAgICAgICAgICAgcHJpdmF0ZSBfc2xvdEdyaWRIZWlnaHQ6IG51bWJlcjtcclxuXHJcbiAgICAgICAgICAgIHByaXZhdGUgX3Nsb3RSb3dHcmlkQ291bnQ6IG51bWJlcjtcclxuXHJcbiAgICAgICAgICAgIHByaXZhdGUgX3Nsb3RUdXJuQ291bnQ6IG51bWJlcjtcclxuXHJcbiAgICAgICAgICAgIHByaXZhdGUgX3NwZWVkVXBNdWx0aXBsZTogbnVtYmVyO1xyXG5cclxuICAgICAgICAgICAgcHJpdmF0ZSByZWFkb25seSBfc2xvdFN0eWxlTWFuYWdlcjogSUYuSVNsb3RTdHlsZU1hbmFnZXJcclxuXHJcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yKHNsb3RTdHlsZU1hbmFnZXI6IElGLklTbG90U3R5bGVNYW5hZ2VyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zbG90U3R5bGVNYW5hZ2VyID0gc2xvdFN0eWxlTWFuYWdlcjtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiDogIHomY7mqZ/poa/npLrnrZTmoYjliY3nmoTmnIDlsJHovYnli5XmrKHmlbhcclxuICAgICAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IGNvdW50XHJcbiAgICAgICAgICAgICAqIEByZXR1cm4ge3RoaXN9XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBwdWJsaWMgc2V0U2xvdFR1cm5Db3VudChjb3VudDogbnVtYmVyKTogdGhpcyB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zbG90VHVybkNvdW50ID0gY291bnQ7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpc1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICog6ICB6JmO5qmf5q+P6ZqU5qC85a2Q6auY5bqmXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHRcclxuICAgICAgICAgICAgICogQHJldHVybiB7dGhpc31cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHB1YmxpYyBzZXRTbG90R3JpZEhlaWdodChoZWlnaHQ6IG51bWJlcik6IHRoaXMge1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuX3Nsb3RHcmlkSGVpZ2h0ID0gaGVpZ2h0O1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICog6YGK5oiy5q+P5qC85qC85a2Q6ZaT55qE6YCf5bqmXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSB0aW1lXHJcbiAgICAgICAgICAgICAqIEByZXR1cm4ge3RoaXN9XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBwdWJsaWMgc2V0U2xvdEdpcmRTcGVlZCh0aW1lOiBudW1iZXIpOiB0aGlzIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zbG90R2lyZFNwZWVkID0gdGltZTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIOWKoOmAn+aZgueahOWKoOmAn+iiq+eOh1xyXG4gICAgICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gbXVsdGlwbGVcclxuICAgICAgICAgICAgICogQHJldHVybiB7dGhpc31cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHNldFNwZWVkVXBNdWx0aXBsZShtdWx0aXBsZTogbnVtYmVyKTogdGhpcyB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5fc3BlZWRVcE11bHRpcGxlID0gbXVsdGlwbGU7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiDoqbLogIHomY7mqZ8g5q+P5YiX55qE5qC85a2Q5pW46YePXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBncmlkQ291bnRcclxuICAgICAgICAgICAgICogQHJldHVybiB7dGhpc31cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHNldFNsb3RSb3dHcmlkQ291bnQoZ3JpZENvdW50OiBudW1iZXIpOiB0aGlzIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zbG90Um93R3JpZENvdW50ID0gZ3JpZENvdW50O1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICog6Z2e5Yqg6YCf5qih5byPLOavj+WIl+WBnOatoueahOaZgumWk+mWk+agvFxyXG4gICAgICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gdGltZVxyXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHt0aGlzfVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgc2V0Q29sdW1uSW50ZXJ2YWxUaW1lKHRpbWU6IG51bWJlcik6IHRoaXMge1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuX2NvbHVtbkludGVydmFsVGltZSA9IHRpbWU7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiDopoHln7fooYzovKrmkq3li5XljJbovYnli5XogIHomY7mqZ/nmoRub2RlXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7QXJyYXk8Y2MuTm9kZT59IG5vZGVcclxuICAgICAgICAgICAgICogQHJldHVybiB7dGhpc31cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHNldFNsb3RDb2x1bW5Ub1R3ZWVuKG5vZGU6IEFycmF5PGNjLk5vZGU+KTogdGhpcyB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5fc2xvdENvbHVtblRvVHdlZW4gPSBub2RlO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIOaJgOacieagvOWtkCzlgZrlvqrnkrDogIHomY7mqZ/mmYIs6ZyA5pu05YuV6KmyTm9kZeeahOS9jee9rlxyXG4gICAgICAgICAgICAgKiBAcGFyYW0ge01hcDxudW1iZXIsIEFycmF5PGNjLk5vZGU+Pn0gbm9kZVxyXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHt0aGlzfVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgcHVibGljIHNldEdyaWROb2RlVG9NYXAobm9kZTogTWFwPG51bWJlciwgQXJyYXk8Y2MuTm9kZT4+KTogdGhpcyB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5fZ3JpZE5vZGVUb01hcCA9IG5vZGU7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogc2VydmVy5YWN6LK7562U5qGI5Zue5YKz57WQ5p6cXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBzZXROb3JtYWxSZXN1bHQobm9ybWFsUmVzdWx0OiBJU2xvdEJhc2VSZXN1bHRNb2RlbCk6IHRoaXMge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbm9ybWFsUmVzdWx0ID0gbm9ybWFsUmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBzZXJ2ZXLkuIDoiKznrZTmoYjlm57lgrNtb2RlbFxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgc2V0RnJlZVJlc3VsdChmcmVlUmVzdWx0OiBJU2xvdEZyZWVCYXNlUmVzdWx0TW9kZWwpOiB0aGlzIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2ZyZWVSZXN1bHQgPSBmcmVlUmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiDoqK3lrprntZDmnZ9cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIGNvbXBsZXRlKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc2xvdFN0eWxlTWFuYWdlci5idWlsZCh0aGlzKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZ2V0IGNvbHVtbkludGVydmFsVGltZSgpOiBudW1iZXIge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NvbHVtbkludGVydmFsVGltZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZ2V0IGdyaWROb2RlVG9NYXAoKTogTWFwPG51bWJlciwgQXJyYXk8Y2MuTm9kZT4+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9ncmlkTm9kZVRvTWFwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBnZXQgc2xvdENvbHVtblRvVHdlZW4oKTogQXJyYXk8Y2MuTm9kZT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3Nsb3RDb2x1bW5Ub1R3ZWVuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBnZXQgc2xvdEdpcmRTcGVlZCgpOiBudW1iZXIge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3Nsb3RHaXJkU3BlZWQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGdldCBzbG90R3JpZEhlaWdodCgpOiBudW1iZXIge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3Nsb3RHcmlkSGVpZ2h0O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBnZXQgc2xvdFJvd0dyaWRDb3VudCgpOiBudW1iZXIge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3Nsb3RSb3dHcmlkQ291bnQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGdldCBzbG90VHVybkNvdW50KCk6IG51bWJlciB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fc2xvdFR1cm5Db3VudDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZ2V0IHNwZWVkVXBNdWx0aXBsZSgpOiBudW1iZXIge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3NwZWVkVXBNdWx0aXBsZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZ2V0IHNsb3RTdHlsZU1hbmFnZXIoKTogZmNjLklGLklTbG90U3R5bGVNYW5hZ2VyIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9zbG90U3R5bGVNYW5hZ2VyO1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgZ2V0IGZyZWVSZXN1bHQoKTogSVNsb3RGcmVlQmFzZVJlc3VsdE1vZGVsICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fZnJlZVJlc3VsdDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZ2V0IG5vcm1hbFJlc3VsdCgpOiBJU2xvdEJhc2VSZXN1bHRNb2RlbHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9ub3JtYWxSZXN1bHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgZmNjIHtcclxuICAgIC8qKlxyXG4gICAgICogQEF1dGhvciDola3nq4vlk4FcclxuICAgICAqIEBEZXNjcmlwdGlvbiBUT0RPXHJcbiAgICAgKiBARGF0ZSAyMDIxLTA2LTI4IOS4i+WNiCAwNjo0MVxyXG4gICAgICogQFZlcnNpb24gMS4wXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBjbGFzcyBTbG90SW1nU2V0dGluZyBleHRlbmRzIEFCUy5BU2xvdFNldHRpbmcge1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDmm7Tmj5vlnJbniYfnmoTmiYDmnInmoLzlrZBcclxuICAgICAgICAgKiBAcGFyYW0ge01hcDxudW1iZXIsIEFycmF5PGNjLlNwcml0ZT4+fSBzcHJpdGVcclxuICAgICAgICAgKiBAcmV0dXJuIHt0aGlzfVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHByaXZhdGUgX2dyaWRTcHJpdGVUb01hcDogTWFwPG51bWJlciwgQXJyYXk8Y2MuU3ByaXRlPj47XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIHNsb3Qg5omA5pyJ6Z2c5oWL5qC85a2Q5ZyW54mHXHJcbiAgICAgICAgICogQHBhcmFtIHtNYXA8c3RyaW5nLCBjYy5TcHJpdGVGcmFtZT59IGltZ1xyXG4gICAgICAgICAqIEByZXR1cm4ge3RoaXN9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHJpdmF0ZSBfZ3JpZEltZzogTWFwPHN0cmluZywgY2MuU3ByaXRlRnJhbWU+O1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBzbG90IOaJgOaciemdnOaFi+agvOWtkOWclueJh1xyXG4gICAgICAgICAqIEBwYXJhbSB7QXJyYXk8Y2MuU3ByaXRlRnJhbWU+fSBpbWdcclxuICAgICAgICAgKiBAcmV0dXJuIHt0aGlzfVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzZXRHcmlkSW1nKGltZzogTWFwPHN0cmluZywgY2MuU3ByaXRlRnJhbWU+KTogdGhpcyB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9ncmlkSW1nID0gaW1nO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDmiYDmnInmoLzlrZDnmoTlnJbniYcs5YGa5b6q55Kw6ICB6JmO6Zue5pmCLOmcgOabtOWLleeahOWclueJh1xyXG4gICAgICAgICAqIEBwYXJhbSB7TWFwPG51bWJlciwgQXJyYXk8Y2MuU3ByaXRlPj59IHNwcml0ZVxyXG4gICAgICAgICAqIEByZXR1cm4ge3RoaXN9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHNldEdpcmRTcHJpdGVUb01hcChzcHJpdGU6IE1hcDxudW1iZXIsIEFycmF5PGNjLlNwcml0ZT4+KTogdGhpcyB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9ncmlkU3ByaXRlVG9NYXAgPSBzcHJpdGU7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBnZXQgZ3JpZFNwcml0ZVRvTWFwKCk6IE1hcDxudW1iZXIsIEFycmF5PGNjLlNwcml0ZT4+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2dyaWRTcHJpdGVUb01hcDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGdldCBncmlkSW1nKCk6IE1hcDxzdHJpbmcsIGNjLlNwcml0ZUZyYW1lPiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9ncmlkSW1nO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgZmNjIHtcclxuICAgIC8qKlxyXG4gICAgICogQEF1dGhvciDola3nq4vlk4FcclxuICAgICAqIEBEZXNjcmlwdGlvbiBUT0RPXHJcbiAgICAgKiBARGF0ZSAyMDIxLTA2LTI4IOS4i+WNiCAwNjo0MVxyXG4gICAgICogQFZlcnNpb24gMS4wXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBjbGFzcyBTbG90U3BpblNldHRpbmcgZXh0ZW5kcyBBQlMuQVNsb3RTZXR0aW5nIHtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5pu05o+b5ZyW54mH55qE5omA5pyJ5qC85a2QXHJcbiAgICAgICAgICogQHBhcmFtIHtNYXA8bnVtYmVyLCBBcnJheTxjYy5TcHJpdGU+Pn0gc3ByaXRlXHJcbiAgICAgICAgICogQHJldHVybiB7dGhpc31cclxuICAgICAgICAgKi9cclxuICAgICAgICBwcml2YXRlIF9ncmlkU3ByaXRlVG9NYXA6IE1hcDxudW1iZXIsIEFycmF5PGNjLlNwcml0ZT4+O1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBzbG90IOaJgOaciemdnOaFi+agvOWtkOWclueJh1xyXG4gICAgICAgICAqIEBwYXJhbSB7TWFwPHN0cmluZywgY2MuU3ByaXRlRnJhbWU+fSBpbWdcclxuICAgICAgICAgKiBAcmV0dXJuIHt0aGlzfVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHByaXZhdGUgX2dyaWRJbWc6IE1hcDxzdHJpbmcsIGNjLlNwcml0ZUZyYW1lPjtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogc2xvdCDmiYDmnIkgc3BpbmUg5qC85a2Q5ZyW54mHXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHJpdmF0ZSBfZ2lyZFNwaW5lOiBNYXA8c3RyaW5nLCBzcC5Ta2VsZXRvbj47XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIHNsb3Qg5omA5pyJIHNwaW5lIOagvOWtkOWclueJh1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHByaXZhdGUgX2dpcmRTcGluZVRvTWFwOiBNYXA8bnVtYmVyLCBBcnJheTxzcC5Ta2VsZXRvbj4+O1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBzbG90IOaJgOaciemdnOaFi+agvOWtkOWclueJh1xyXG4gICAgICAgICAqIEBwYXJhbSB7QXJyYXk8Y2MuU3ByaXRlRnJhbWU+fSBpbWdcclxuICAgICAgICAgKiBAcmV0dXJuIHt0aGlzfVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzZXRHcmlkSW1nKGltZzogTWFwPHN0cmluZywgY2MuU3ByaXRlRnJhbWU+KTogdGhpcyB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9ncmlkSW1nID0gaW1nO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDmiYDmnInmoLzlrZDnmoTlnJbniYcs5YGa5b6q55Kw6ICB6JmO5qmf5pmCLOmcgOabtOWLleeahOWclueJh1xyXG4gICAgICAgICAqIEBwYXJhbSB7TWFwPG51bWJlciwgQXJyYXk8Y2MuU3ByaXRlPj59IHNwcml0ZVxyXG4gICAgICAgICAqIEByZXR1cm4ge3RoaXN9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHNldEdpcmRTcHJpdGVUb01hcChzcHJpdGU6IE1hcDxudW1iZXIsIEFycmF5PGNjLlNwcml0ZT4+KTogdGhpcyB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9ncmlkU3ByaXRlVG9NYXAgPSBzcHJpdGU7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOaJgOacieagvOWtkOeahHNwaW4s5YGa5b6q55Kw6ICB6JmO5qmf5pmCLOmcgOabtOWLleeahOWclueJh1xyXG4gICAgICAgICAqIEBwYXJhbSB7TWFwPG51bWJlciwgQXJyYXk8Y2MuU3ByaXRlPj59IHNwcml0ZVxyXG4gICAgICAgICAqIEByZXR1cm4ge3RoaXN9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHNldEdpcmRTcGluZVRvTWFwKHNwcml0ZTogTWFwPG51bWJlciwgQXJyYXk8c3AuU2tlbGV0b24+Pik6IHRoaXMge1xyXG4gICAgICAgICAgICB0aGlzLl9naXJkU3BpbmVUb01hcCA9IHNwcml0ZTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIGZjYyB7XHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIElGIHtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQEF1dGhvciBYSUFPLUxJLVBJTlxyXG4gICAgICAgICAqIEBEZXNjcmlwdGlvbiAo5LuL6Z2iKUV2ZW50VGFyZ2V0IOS6i+S7tlxyXG4gICAgICAgICAqIEBEYXRlIDIwMjEtMDQtMTQg5LiL5Y2IIDIwOjI0XHJcbiAgICAgICAgICogQFZlcnNpb24gMS4xXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZXhwb3J0IGludGVyZmFjZSBJRXZlbnRNYW5hZ2VyIHtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiDkuovku7bnuL3mlbjph49cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIGV2ZW50Q291bnQ6IG51bWJlcjtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiDnlbbliY3mraPlnKjnm6Pogb3pgqPkupvkuovku7Y7XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBldmVudHNDdXJyZW50bHlCZWluZzogTWFwPHN0cmluZywgc3RyaW5nPjtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiDnmbzlsITkuovku7ZcclxuICAgICAgICAgICAgICogQHBhcmFtIGV2ZW50VGFyZ2V0XHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWVcclxuICAgICAgICAgICAgICogQHBhcmFtIHthbnl9IGFueSA6IOimgeWbnuWCs+eahOeJqeS7tlxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgZW1pdChldmVudE5hbWU6IHN0cmluZywgLi4uYW55OiBhbnkpOiB2b2lkO1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIHNlcnZlcuebo+iBveWbnuWCs+aOpeaUtlxyXG4gICAgICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxGdW5cclxuICAgICAgICAgICAgICogQHBhcmFtIGlzUGVybWFuZW50IC0g5piv5ZCm5bi46aeQXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBldmVudExpc3RlbmVyKGV2ZW50TmFtZTogc3RyaW5nLCBjYWxsRnVuOiAodGFyZ2V0PzogYW55KSA9PiB2b2lkLCBpc1Blcm1hbmVudDogYm9vbGVhbik6IHZvaWQ7XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICog5Yiq6Zmk5LqL5Lu2LOe2geWumueahOWbnuWCs+S5n+S4gOS4puWIqumZpFxyXG4gICAgICAgICAgICAgKiBAcGFyYW0ge1NlcnZlckV2ZW50VHlwZSB8IEdhbWVFdmVudFR5cGV9IGV2ZW50TmFtZVxyXG4gICAgICAgICAgICAgKiBAcGFyYW0ge2NjLkV2ZW50VGFyZ2V0fSBldmVudFRhcmdldFxyXG4gICAgICAgICAgICAgKiBAcGFyYW0gY2FsbEZ1blxyXG4gICAgICAgICAgICAgKiBAcGFyYW0gdGFyZ2V0XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBkZXN0cm95RXZlbnQoZXZlbnROYW1lOiBzdHJpbmcsIGNhbGxGdW4/OiBGdW5jdGlvbiwgdGFyZ2V0PzogT2JqZWN0KTogdm9pZDtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiDoqbLkuovku7bmmK/lkKbmjIHnuoznm6Pogb3kuK1cclxuICAgICAgICAgICAgICogQHBhcmFtIHtTZXJ2ZXJFdmVudFR5cGUgfCBHYW1lRXZlbnRUeXBlfSBldmVudE5hbWVcclxuICAgICAgICAgICAgICogQHBhcmFtIGV2ZW50VGFyZ2V0XHJcbiAgICAgICAgICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBoYXNMaXN0ZW5pbmcoZXZlbnROYW1lOiB0eXBlLlNlcnZlckV2ZW50VHlwZSB8IHN0cmluZywgZXZlbnRUYXJnZXQpOiBib29sZWFuO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgZmNjIHtcclxuXHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIElGIHtcclxuXHJcblxyXG4gICAgICAgIGV4cG9ydCBpbnRlcmZhY2UgSVNsb3RTdHlsZU1hbmFnZXIge1xyXG5cclxuICAgICAgICAgICAgcmVhZG9ubHkgc2xvdDogSUYuSVNsb3Q7XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICog5re75Yqg6ICB6JmO5qmf5Li75rWB56iLIOmcgOe5vOaJvyBJU2xvdFxyXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHt0aGlzfVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgc2V0U2xvdFRlbXBsYXRlPFQgZXh0ZW5kcyBuZXcoc3R5bGVEYXRhOiBJRi5JU2xvdFNldHRpbmcsY29uZmlnTWFuYWdlcjpJRi5JQ29uZmlnTWFuYWdlcikgPT4gSUYuSVNsb3Q+KHNsb3RUZW1wbGF0ZTogVCk6IHRoaXM7XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICog5re75Yqgc2xvdOS4u+S6i+S7tuaoo+W8j+ioreWumlxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgc2V0U2xvdFN0eWxlPFQgZXh0ZW5kcyBJRi5JU2xvdFNldHRpbmc+KHNsb3RTZXR0aW5nPzogbmV3KHNsb3RTdHlsZU1hbmFnZXI6IElGLklTbG90U3R5bGVNYW5hZ2VyKSA9PiBUKTogVDtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiDliJ3lp4vmiYDmnInmk43kvZws5Lim5a+m5L6L5YyWICDntoHlrprnmoQgc2xvdCBDbGFzc1xyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgYnVpbGQoc2xvdFNldHRpbmc6IElGLklTbG90U2V0dGluZyk6IHZvaWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIGZjYyB7XHJcblxyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBJRiB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQEF1dGhvciBYSUFPLUxJLVBJTlxyXG4gICAgICAgICAqIEBEZXNjcmlwdGlvbiAo5LuL6Z2iKSDogIHomY7mqZ/poZ7pgYrmiLLliJ3mnJ/oqK3lrppcclxuICAgICAgICAgKiBARGF0ZSAyMDIxLTA1LTE3IOS4iuWNiCAxMTo0MVxyXG4gICAgICAgICAqIEBWZXJzaW9uIDEuMFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGV4cG9ydCBpbnRlcmZhY2UgSVNsb3RDb25maWdNYW5hZ2VyIGV4dGVuZHMgSUNvbmZpZ01hbmFnZXIge1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIOaYr+WQpuWcqOmBiuaIsumAsuWFpeW+jOmWi+WVn2F1dG/ni4DmhYtcclxuICAgICAgICAgICAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICAgICAgICAgICAqIEBkZWZhdWx0IGZhbHNlXHJcbiAgICAgICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICByZWFkb25seSBpc0F1dG86IGJvb2xlYW47XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICog5Yid5aeL6YGK5oiy5pyA5Yid55qEYXV0b+asoeaVuFxyXG4gICAgICAgICAgICAgKiBAdHlwZSB7QXV0b1R5cGV9XHJcbiAgICAgICAgICAgICAqIEBkZWZhdWx0IHR5cGUuQXV0b1R5cGUuQVVUT1xyXG4gICAgICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgcmVhZG9ubHkgYXV0b0NvdW50OiBudW1iZXI7XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICog5Yid5aeL6ZaL5aeL6YGK5oiy5YmN5piv5ZCm5piv5Yqg6YCf54uA5oWLXHJcbiAgICAgICAgICAgICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAgICAgICAgICAgKiBAZGVmYXVsdCBmYWxzZVxyXG4gICAgICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgcmVhZG9ubHkgaXNTcGVlZFVwOiBib29sZWFuO1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIOWIneWni+mBiuaIsuacgOWIneeahGF1dG/mrKHmlbhcclxuICAgICAgICAgICAgICogQHBhcmFtIHtBdXRvVHlwZX0gdHlwZVxyXG4gICAgICAgICAgICAgKiBAZGVmYXVsdCB0eXBlLkF1dG9UeXBlLkFVVE9cclxuICAgICAgICAgICAgICogQHJldHVybnMge3RoaXN9XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBzZXRBdXRvQ29udCh0eXBlOiBudW1iZXIpOiB0aGlzO1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIOWIneWni+mAsuWFpemBiuaIsuaZgkF1dG/ni4DmhYtcclxuICAgICAgICAgICAgICogQHBhcmFtIHtib29sZWFufSBpc0F1dG8gLSDmmK/lkKblnKjpgYrmiLLpgLLlhaXlvozplovllZ9hdXRv54uA5oWLXHJcbiAgICAgICAgICAgICAqIEBkZWZhdWx0IGZhbHNlXHJcbiAgICAgICAgICAgICAqIEByZXR1cm5zIHt0aGlzfVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgc2V0QXV0b1N0YXRlKGlzQXV0bzogYm9vbGVhbik6IHRoaXM7XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICog5piv5ZCm5Zyo6YGK5oiy6YCy5YWl5b6M5piv5Yqg6YCf55qE54uA5oWLXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNTcGVlZFVwXHJcbiAgICAgICAgICAgICAqIEBkZWZhdWx0IGZhbHNlXHJcbiAgICAgICAgICAgICAqIEByZXR1cm5zIHt0aGlzfVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgc2V0U3BlZWRTdGF0ZShpc1NwZWVkVXA6IGJvb2xlYW4pOiB0aGlzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBmY2Mge1xyXG5cclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgSUYge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBBdXRob3IgWElBTy1MSS1QSU5cclxuICAgICAgICAgKiBARGVzY3JpcHRpb24gKOS7i+mdoikg5YuV55Wr6aGe6JmV55CGXHJcbiAgICAgICAgICogQERhdGUgMjAyMS0wNC0xNCDkuIvljYggMjA6MjRcclxuICAgICAgICAgKiBAVmVyc2lvbiAxLjFcclxuICAgICAgICAgKi9cclxuICAgICAgICBleHBvcnQgaW50ZXJmYWNlIElBbmltYXRpb25IYW5kbGVyIHtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiDmm7TmlrDli5XnlavnrqHnkIblmajlhafnmoRzcGluZeaVuOaTmlxyXG4gICAgICAgICAgICAgKiBAcGFyYW0gcmVzTmFtZVxyXG4gICAgICAgICAgICAgKiBAcGFyYW0ga2V5TmFtZVxyXG4gICAgICAgICAgICAgKiBAcGFyYW0gc3BpbmVOYW1lXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICB1cGRhdGVTcGluZUFuaW1hdGlvbk5hbWUocmVzTmFtZTogc3RyaW5nLCBrZXlOYW1lOiBzdHJpbmcsIHNwaW5lTmFtZTogc3RyaW5nKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIGZjYyB7XHJcblxyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBJRiB7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBBdXRob3IgWElBTy1MSS1QSU5cclxuICAgICAgICAgKiBARGVzY3JpcHRpb24gKOS7i+mdoikg5YuV55Wr6aGe566h55CG5ZmoXHJcbiAgICAgICAgICogQERhdGUgMjAyMS0wNC0xNCDkuIvljYggMjA6MjRcclxuICAgICAgICAgKiBAVmVyc2lvbiAxLjFcclxuICAgICAgICAgKi9cclxuICAgICAgICBleHBvcnQgaW50ZXJmYWNlIElBbmltYXRpb25NYW5hZ2VyIHtcclxuXHJcbiAgICAgICAgICAgIGhhbmRsZXI6IElBbmltYXRpb25IYW5kbGVyO1xyXG5cclxuICAgICAgICAgICAgc3BpbmVOYW1lOiBNYXA8c3RyaW5nLCBNYXA8c3RyaW5nLCBzdHJpbmc+PjtcclxuXHJcbiAgICAgICAgICAgIGdldFNwaW5lTmFtZShyZXNOYW1lOiBzdHJpbmcsIGtleTogc3RyaW5nKTogc3RyaW5nO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBmY2Mge1xyXG5cclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgSUYge1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAQXV0aG9yIOiVreeri+WTgVxyXG4gICAgICAgICAqIEBEZXNjcmlwdGlvbiAo5LuL6Z2iKSDoqp7oqIDmqKPmmK/mqKPlvI/ooahcclxuICAgICAgICAgKiBARGF0ZSAyMDIxLTA2LTI4IOS4i+WNiCAxMjowN1xyXG4gICAgICAgICAqIEBWZXJzaW9uIDEuMFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGV4cG9ydCBpbnRlcmZhY2UgSUxhbmd1YWdlU3R5bGUge1xyXG4gICAgICAgICAgICBmb250U2l6ZTogbnVtYmVyLFxyXG4gICAgICAgICAgICBsaW5lSGVpZ2h0OiBudW1iZXIsXHJcbiAgICAgICAgICAgIHRleHRTY2FsZToge1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogbnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IG51bWJlcixcclxuICAgICAgICAgICAgICAgIHRleHQ6IG51bWJlcixcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb250RmFtaWx5OiBzdHJpbmc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAQXV0aG9yIOiVreeri+WTgVxyXG4gICAgICAgICAqIEBEZXNjcmlwdGlvbiAo5LuL6Z2iKeiqnuezu+euoeeQhlxyXG4gICAgICAgICAqIEBEYXRlIDIwMjEtMDYtMjgg5LiL5Y2IIDEyOjA3XHJcbiAgICAgICAgICogQFZlcnNpb24gMS4wXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZXhwb3J0IGludGVyZmFjZSBJTGFuZ3VhZ2VNYW5hZ2VyIHtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiDnlbbliY3oqp7ns7tcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIG5vd0xhbmc6IHN0cmluZyB8IHR5cGUuTGFuZ3VhZ2VUeXBlO1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIOeVtuWJjee2geWumueahOe1hOS7tlxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgbm93TGFuZ3VhZ2VMYWJlbDogTWFwPGNjLkxhYmVsLCBzdHJpbmc+O1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIOeVtuWJjeaJgOacieiqnuezu+aoo+W8j+WIl+ihqFxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgc3R5bGU6IE1hcDxzdHJpbmcgfCB0eXBlLkxhbmd1YWdlVHlwZSwgSUYuSUxhbmd1YWdlU3R5bGU+O1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIOmhjeWklua3u+WKoOaWsOeahOiqnuezu+aoo+W8j1xyXG4gICAgICAgICAgICAgKiBAcGFyYW0ge3N0cmluZyB8IGZjYy50eXBlLkxhbmd1YWdlVHlwZX0ga2V5IC0g6aGN5aSW6Kqe57O76Y215YC8XHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7ZmNjLklGLklMYW5ndWFnZVN0eWxlfSBzdHlsZSAtIOaWsOaoo+W8j1xyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgYWRkU3R5bGUoa2V5OiBzdHJpbmcgfCB0eXBlLkxhbmd1YWdlVHlwZSwgc3R5bGU6IElGLklMYW5ndWFnZVN0eWxlKTogdm9pZDtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiDmm7TmlrDoqp7ns7ss5pyD5pu05paw55W25YmN5omA5pyJ5bey57aT57aB5a6a55qEIGNjLkxhYmVsXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7c3RyaW5nIHwgZmNjLnR5cGUuTGFuZ3VhZ2VUeXBlfSBsYW5ndWFnZSAtIOimgeabtOaWsOeahOiqnuezu1xyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgdXBkYXRlTGFuZ3VhZ2UobGFuZ3VhZ2U6IHN0cmluZyB8IHR5cGUuTGFuZ3VhZ2VUeXBlKTogdm9pZDtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiDph43mlrDovInlhaXoqp7ns7tcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHJlTG9hZE5vd0xhbmd1YWdlKCk7XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICog5pu05paw5paH5a2XLOacg+mghuS+v+abtOaWsOeVtuWJjeiqnuezu+aoo+W8j1xyXG4gICAgICAgICAgICAgKiBAcGFyYW0ge2NjLkxhYmVsfSB0YXJnZXQgLSDopoHmm7TmlrDnmoTnm67mqJlcclxuICAgICAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IHRleHRLZXkgLVxyXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHt0aGlzfVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgdXBkYXRlVGV4dCh0YXJnZXQ6IGNjLkxhYmVsLCB0ZXh0S2V5OiBzdHJpbmcpOiB0aGlzO1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIOabtOaWsOaJgOaciemAj+mBjiB1cGRhdGVUZXh05pu05paw55qE57WE5Lu2LOabtOaWsOipsue1hOS7tuaoo+aYr1xyXG4gICAgICAgICAgICAgKiDms6jmhI8gOiDpoIjphY3lkIggdXBkYXRlVGV4dCDkuIDotbfkvb/nlKhcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHVwZGF0ZVN0eWxlKCk6IHZvaWQ7XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICog5riF6Zmk54Sh55So55qE6Kqe57O757ep5a2YXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICByZW1vdmVTdHJpbmdCdWZmZXIoKTogdm9pZDtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiDnjbLlj5bnlbbliY3oqp7ns7vmlbjmk5os6L+U5Zue6Kmya2V55bCN5oeJ55qE5paH5a2XXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7c3RyaW5nIHwgdW5kZWZpbmVkfSBrZXkgLSDmi7/lj5bnlbbliY3nt6nlrZjoqp7ns7vmlofmnKznmoTmn5DkuIDmrrXmloflrZdcclxuICAgICAgICAgICAgICogQHJldHVybiB7c3RyaW5nfSAtIOi/lOWbnuipsuauteaWh+WtlyzlpoLmnpzmib7kuI3liLDpjbXlgLws6buY6KqN6L+U5ZueIGtleVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgZ2V0VGV4dChrZXk6IHN0cmluZyk6IHN0cmluZztcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiDnjbLlj5bnlbbliY3oqp7ns7vmlbjmk5pcclxuICAgICAgICAgICAgICogQHJldHVybiB7b2JqZWN0fSAtIOeNsuWPlueVtuWJjeiqnuezu+aVuOaTmizov5Tlm57miYDmnInmlbjmk5pcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIGdldEFsbFRleHQoKTogb2JqZWN0O1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIOeNsuWPlueVtuWJjeiqnuezu1xyXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBnZXRMYW5ndWFnZSgpOiBzdHJpbmc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIGZjYyB7XHJcblxyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBJRiB7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBBdXRob3IgWElBTy1MSS1QSU5cclxuICAgICAgICAgKiBARGVzY3JpcHRpb24gKOS7i+mdoinpgJrnn6Xkuovku7bnrqHnkIblmahcclxuICAgICAgICAgKiBARGF0ZSAyMDIxLTA1LTE5IOS4i+WNiCAwMjowMFxyXG4gICAgICAgICAqIEBWZXJzaW9uIDEuMFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGV4cG9ydCBpbnRlcmZhY2UgSUJhc2VOb3RpZmljYXRpb24ge1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIE5vdGlmaWNhdGlvbkhhbmRsZXIg55So5L6G542y5Y+W6YCZ5YCLY2xhc3PnmoTmqJnnsaRcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHJlYWRvbmx5IFRBR19OQU1FOiBzdHJpbmc7XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICog6KiC6Zax6Kmy5LqL5Lu2XHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7SUJhc2VPYnNlcnZlcn0gb2JzZXJ2ZXIgLSDpl5zms6jogIVcclxuICAgICAgICAgICAgICogQHBhcmFtIHtib29sZWFufSBpc1Blcm1hbmVudCAtIOaYr+WQpuW4uOmnkFxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgc3Vic2NyaWJlKG9ic2VydmVyOiBJQmFzZU9ic2VydmVyLCBpc1Blcm1hbmVudDogYm9vbGVhbik6IHZvaWQ7XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICog56e76Zmk6KiC6ZaxXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7SUJhc2VPYnNlcnZlcn0gb2JzZXJ2ZXIgLSDpl5zms6jogIVcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHVuc3Vic2NyaWJlKG9ic2VydmVyOiBJQmFzZU9ic2VydmVyKTogdm9pZDtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiDmuIXpmaTmiYDmnInoqILplrFcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHJlbW92ZUFsbCgpOiB2b2lkO1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIOeZvOmAgemAmuefpVxyXG4gICAgICAgICAgICAgKiBAcGFyYW0gYW55IC0g55m86YCB5Y+D5pW4XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBub3RpZnkoLi4uYW55KTogdm9pZDtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiDnjbLlj5boqbLkuovku7bmiYDmnInoqILplrHmlbjph49cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIGdldFN1YnNjcmliZUNvdW50KCk6IG51bWJlcjtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiDnjbLlj5boqbLkuovku7bmiYDmnInoqILplrHogIVcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIGdldEFsbFN1YnNjcmliZSgpOiBTZXQ8YW55PjtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIGZjYyB7XHJcblxyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBJRiB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQEF1dGhvciBYSUFPLUxJLVBJTlxyXG4gICAgICAgICAqIEBEZXNjcmlwdGlvbiAo5LuL6Z2iKee2geWumuiHquW3semcgOimgeeahOaJgOacieaOqOaSpeiAhVxyXG4gICAgICAgICAqIEBEYXRlIDIwMjEtMDYtMTAg5LiL5Y2IIDA0OjAzXHJcbiAgICAgICAgICogQFZlcnNpb24gMS4wXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZXhwb3J0IGludGVyZmFjZSBJTm90aWZpY2F0aW9uTWFuYWdlcjxUIGV4dGVuZHMgSUJhc2VOb3RpZmljYXRpb24+IHtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiDmt7vliqDmjqjmkqXogIVcclxuICAgICAgICAgICAgICogQHBhcmFtIHtUfSBub3RpZmljYXRpb24gLSDmjqjmkqXogIVcclxuICAgICAgICAgICAgICogQHJldHVybiB7dGhpc31cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHNldE5vdGlmaWNhdGlvbihub3RpZmljYXRpb246IFQpOiB0aGlzO1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIOeNsuWPluS7pee2geWumueahOaOqOaSreiAhVxyXG4gICAgICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSAtIOS6i+S7tuWQjeeosVxyXG4gICAgICAgICAgICAgKiBAcmV0dXJuXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBnZXROb3RpZmljYXRpb24odHlwZTogc3RyaW5nKTogVDtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiDmn6XnnIvoqbLkuovku7bmmK/lkKblt7LntpPliqDlhaXnrqHnkIblmajkuK1cclxuICAgICAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgLSDkuovku7blkI3nqLFcclxuICAgICAgICAgICAgICogQHJldHVybiB7Ym9vbGVhbn1cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIGhhc05vdGlmaWNhdGlvbih0eXBlOiBzdHJpbmcpOiBib29sZWFuXHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICog5p+l55yL55W25YmN5omA5pyJ5Lul57aB5a6a55qE6YCa55+lXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBnZXRBbGxOb3RpZmljYXRpb25zKCk6IE1hcDxTdHJpbmcsIFQ+O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBmY2Mge1xyXG5cclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgSUYge1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAQXV0aG9yIFhJQU8tTEktUElOXHJcbiAgICAgICAgICogQERlc2NyaXB0aW9uICjku4vpnaIp5Z+36KGM6ICB6JmO5qmf5Li76KaB5pa55rOVXHJcbiAgICAgICAgICogQERhdGUgMjAyMS0wNC0xNCDkuIvljYggMjA6MjRcclxuICAgICAgICAgKiBAVmVyc2lvbiAxLjFcclxuICAgICAgICAgKi9cclxuICAgICAgICBleHBvcnQgaW50ZXJmYWNlIElTbG90IHtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiDliJ3lp4vljJboqbLovKrmiYDmnInni4DmhYtcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIGluaXRpYWxpemVTdGF0ZSgpOnZvaWQ7XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogTG9vcCDogIHomY7mqZ/mlrnms5VcclxuICAgICAgICAgICAgICogQHJldHVybiB7UHJvbWlzZTx2b2lkPn1cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHJ1blNsb3RBbmltYXRpb24oKTogUHJvbWlzZTx2b2lkPjtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiDllZ/li5XogIHomY7mqZ/mmYLpgY7loLTli5Xnlavmlrnms5VcclxuICAgICAgICAgICAgICogQHJldHVybiB7UHJvbWlzZTx2b2lkPn1cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHNpbmVJblNsb3QoKTogUHJvbWlzZTx2b2lkPjtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIGZjYyB7XHJcblxyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBJRiB7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBBdXRob3IgWElBTy1MSS1QSU5cclxuICAgICAgICAgKiBARGVzY3JpcHRpb24gKOS7i+mdoinpn7PmqILmjqfliLblmags55Sx6Z+z5qiC5bel5bug5YGa55u45bCN5oeJ5ZG85Y+r5bCN5oeJ55qE5o6n5Yi25ZmoXHJcbiAgICAgICAgICogQERhdGUgMjAyMS0wNS0xMyDkuIrljYggMTA6MjRcclxuICAgICAgICAgKiBAVmVyc2lvbiAxLjBcclxuICAgICAgICAgKi9cclxuICAgICAgICBleHBvcnQgaW50ZXJmYWNlIElBdWRpb1R5cGUge1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIOaSpeaUvumfs+aoglxyXG4gICAgICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSA6IOizh+a6kOWQjeeosVxyXG4gICAgICAgICAgICAgKiBAcGFyYW0ge01hcDxzdHJpbmcsIGFueT59IGRhdGEgOiDoqbLpn7PmqILmkqXmlL7mlbjmk5pcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHBsYXkobmFtZTogc3RyaW5nLCBkYXRhOiBNYXA8c3RyaW5nLCBhbnk+KTogdm9pZDtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiDlgZzmraLoqbLpn7PmqIJcclxuICAgICAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHN0b3AobmFtZT86IHN0cmluZyk6IHZvaWQ7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBmY2Mge1xyXG5cclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgSUYge1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAQXV0aG9yIFhJQU8tTEktUElOXHJcbiAgICAgICAgICogQERlc2NyaXB0aW9uICjku4vpnaIp5LiA6Iis6YGK5oiy5Yid5pyf6Kit5a6aXHJcbiAgICAgICAgICogQERhdGUgMjAyMS0wNC0xNCDkuIvljYggMjA6MjRcclxuICAgICAgICAgKiBAVmVyc2lvbiAxLjFcclxuICAgICAgICAgKi9cclxuICAgICAgICBleHBvcnQgaW50ZXJmYWNlIElDb25maWdNYW5hZ2VyIHtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiDovInlhaXlpJbpg6jos4fmupBVUkxcclxuICAgICAgICAgICAgICogQHR5cGUge3N0cmluZ31cclxuICAgICAgICAgICAgICogQGRlZmF1bHQgXCJcIlxyXG4gICAgICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgcmVhZG9ubHkgZXh0ZXJuYWxseUxvYWRVUkw6IHN0cmluZztcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiDnlbbliY3pgYrmiLLlkI3nqLFcclxuICAgICAgICAgICAgICogQHR5cGUge251bWJlcn1cclxuICAgICAgICAgICAgICogQGRlZmF1bHQgbnVsbFxyXG4gICAgICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgcmVhZG9ubHkgZ2FtZU51bWJlcjogbnVtYmVyO1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIOWIneWni+iDjOaZr+mfs+aogumfs+mHjyjoqbLpn7Pph4/lsIfmnIPmiJDngrpBdWRpb01hbmFnZXLlhafpoJDoqK3pn7Pph48pXHJcbiAgICAgICAgICAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAgICAgICAgICAqIEBkZWZhdWx0IDFcclxuICAgICAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHJlYWRvbmx5IG11c2ljVm9sdW1lOiBudW1iZXI7XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICog5Yid5aeL5bCH6IOM5pmv6Z+z5qiC6Z2c6Z+zXHJcbiAgICAgICAgICAgICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAgICAgICAgICAgKiBAZGVmYXVsdCBmYWxzZVxyXG4gICAgICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgcmVhZG9ubHkgaXNNdXNpY09uTXV0ZTogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiDliJ3lp4vmlYjmnpzpn7Pph48o6Kmy6Z+z6YeP5bCH5pyD5oiQ54K6QXVkaW9NYW5hZ2Vy5YWn6aCQ6Kit6Z+z6YePKVxyXG4gICAgICAgICAgICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAgICAgICAgICAgKiBAZGVmYXVsdCAxXHJcbiAgICAgICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICByZWFkb25seSBlZmZlY3RWb2x1bWU6IG51bWJlcjtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiDliJ3lp4vlsIfmlYjmnpzpn7PmlYjpnZzpn7NcclxuICAgICAgICAgICAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICAgICAgICAgICAqIEBkZWZhdWx0IGZhbHNlXHJcbiAgICAgICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICByZWFkb25seSBpc0VmZmVjdE9uTXV0ZTogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiDliJ3lp4vnlbbliY3oqp7ns7tcclxuICAgICAgICAgICAgICogQHR5cGUge0xhbmd1YWdlVHlwZX1cclxuICAgICAgICAgICAgICogQGRlZmF1bHQgTGFuZ3VhZ2VUeXBlLkNISU5FU0VcclxuICAgICAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHJlYWRvbmx5IGxhbmd1YWdlOiBzdHJpbmcgfCB0eXBlLkxhbmd1YWdlVHlwZTtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiDov5Tlm57pppbpoIFVUkxcclxuICAgICAgICAgICAgICogQGRlZmF1bHQgbnVsbFxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgcmVhZG9ubHkgYmFja0hvbWVVUkw6IHN0cmluZztcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiDmmK/lkKbopoHplovllZ9GcmFtZXdvcmsgRGVidWfmqKHlvI9cclxuICAgICAgICAgICAgICog5rOo5oSPOumBiuaIsuato+W8j+S4iue3mumgiOmXnOmWiVxyXG4gICAgICAgICAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgICAgICAgICAgICogQGRlZmF1bHQgdHJ1ZVxyXG4gICAgICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgcmVhZG9ubHkgaXNGcmFtZXdvcmtEZWJ1ZzogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBjb2NvcyDmoYbmnrYgZGVidWfoqK3lrppcclxuICAgICAgICAgICAgICogQGRlZmF1bHQgLSBjYy5kZWJ1Zy5EZWJ1Z01vZGUuSU5GT1xyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgcmVhZG9ubHkgY29jb3NEZWJ1Z1NldHRpbmc6IGNjLmRlYnVnLkRlYnVnTW9kZTtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiDmt7vliqDpgYrmiLLlkI3nqLFcclxuICAgICAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IG5hbWUgLSDpgYrmiLLlkI3nqLFcclxuICAgICAgICAgICAgICogQGRlZmF1bHQgbnVsbFxyXG4gICAgICAgICAgICAgKiBAcmV0dXJucyB7dGhpc31cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHNldEdhbWVOdW1iZXIobmFtZTogbnVtYmVyKTogdGhpcztcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiDoqK3nva7liJ3lp4vpoJDoqK3pn7Pph49cclxuICAgICAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IG51bWJlciAtIOmfs+mHjyAwfjFcclxuICAgICAgICAgICAgICogQGRlZmF1bHQgMVxyXG4gICAgICAgICAgICAgKiBAcmV0dXJucyB7dGhpc31cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHNldE11c2ljVm9sdW1lKG51bWJlcjogbnVtYmVyKTogdGhpcztcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiDoqK3nva7liJ3lp4vpoJDoqK3mlYjmnpzpn7Pph49cclxuICAgICAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IG51bWJlciAtIOmfs+mHjyAwfjFcclxuICAgICAgICAgICAgICogQGRlZmF1bHQgMVxyXG4gICAgICAgICAgICAgKiBAcmV0dXJucyB7dGhpc31cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHNldEVmZmVjdFZvbHVtZShudW1iZXI6IG51bWJlcik6IHRoaXM7XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICog5Yid5aeL6KaB5b6e5aSW6YOo5ou/5Y+W6LOH5rqQ55qEVVJMXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgOiDnjbLlj5blpJbpg6jos4fmupDnmoRVUkxcclxuICAgICAgICAgICAgICogQGRlZmF1bHQgXCJcIlxyXG4gICAgICAgICAgICAgKiBAcmV0dXJucyB7dGhpc31cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHNldEV4dGVybmFsbHlMb2FkVVJMKHVybDogc3RyaW5nKTogdGhpcztcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiDliJ3lp4voqp7ns7tcclxuICAgICAgICAgICAgICogQHBhcmFtIHtMYW5ndWFnZVR5cGV9IGxhbmd1YWdlVHlwZSAtIOiqnuezu1xyXG4gICAgICAgICAgICAgKiBAZGVmYXVsdCBMYW5ndWFnZVR5cGUuQ0hJTkVTRVxyXG4gICAgICAgICAgICAgKiBAcmV0dXJucyB7dGhpc31cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHNldExhbmd1YWdlKGxhbmd1YWdlVHlwZTogc3RyaW5nIHwgdHlwZS5MYW5ndWFnZVR5cGUpOiB0aGlzO1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIOWIneWni+Wwh+iDjOaZr+mfs+aogumdnOmfs1xyXG4gICAgICAgICAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IE9uTXV0ZSAtIOaYr+WQpumdnOmfs1xyXG4gICAgICAgICAgICAgKiBAZGVmYXVsdCBmYWxzZVxyXG4gICAgICAgICAgICAgKiBAcmV0dXJucyB7dGhpc31cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHNldE11c2ljT25NdXRlKE9uTXV0ZTogYm9vbGVhbik6IHRoaXM7XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICog5Yid5aeL5piv5ZCm5bCH5pWI5p6c6Z+z5pWI6Z2c6Z+zXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gT25NdXRlIC0g5piv5ZCm6Z2c6Z+zXHJcbiAgICAgICAgICAgICAqIEBkZWZhdWx0IGZhbHNlXHJcbiAgICAgICAgICAgICAqIEByZXR1cm5zIHt0aGlzfVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgc2V0RWZmZWN0T25NdXRlKE9uTXV0ZTogYm9vbGVhbik6IHRoaXM7XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICog5piv5ZCm6KaB6ZaL5ZWfRnJhbWV3b3JrIERlYnVn5qih5byPXHJcbiAgICAgICAgICAgICAqIOazqOaEjzrpgYrmiLLmraPlvI/kuIrnt5rpoIjpl5zplolcclxuICAgICAgICAgICAgICogQHBhcmFtIHtib29sZWFufSB1c2VcclxuICAgICAgICAgICAgICogQGRlZmF1bHQgdHJ1ZVxyXG4gICAgICAgICAgICAgKiBAcmV0dXJucyB7dGhpc31cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHNldEZyYW1lV29ya0RlYnVnKHVzZTogYm9vbGVhbik6IHRoaXM7XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogY29jb3Mg5qGG5p62IGRlYnVn6Kit5a6aXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7Y2MuZGVidWcuRGVidWdNb2RlfSB0eXBlIC0gZGVidWcg5qij5byPXHJcbiAgICAgICAgICAgICAqIEBkZWZhdWx0IC0gY2MuZGVidWcuRGVidWdNb2RlLklORk9cclxuICAgICAgICAgICAgICogQHJldHVybiB7dGhpc31cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHNldENvY29zRGVidWcodHlwZTogY2MuZGVidWcuRGVidWdNb2RlKTogdGhpcztcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiDov5Tlm57pppbpoIFVUkxcclxuICAgICAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxyXG4gICAgICAgICAgICAgKiBAZGVmYXVsdCBudWxsXHJcbiAgICAgICAgICAgICAqIEByZXR1cm5zIHt0aGlzfVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgc2V0QmFja0hvbWVVUkwodXJsOiBzdHJpbmcpOiB0aGlzO1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIOWvpuS+i+WMluaJgOaciU1hbmFnZXIgY2xhc3M7XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBidWlsZCgpOiB2b2lkO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIGZjYyB7XHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIElGe1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBBdXRob3Ig6JWt56uL5ZOBXHJcbiAgICAgICAgICogQERlc2NyaXB0aW9uIFRPRE9cclxuICAgICAgICAgKiBARGF0ZSAyMDIxLTA2LTI1IOS4i+WNiCAwMjoxMVxyXG4gICAgICAgICAqIEBWZXJzaW9uIDEuMFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGV4cG9ydCBpbnRlcmZhY2UgSVNob3dFcnJvckRpYWxvZyB7XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICog6aGv56S66Yyv6KqkXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gcGVybWFuZW50U3RhdGUgLSDmmK/lkKbmjIHnuozpoa/npLpcclxuICAgICAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgLSDpoa/npLrpjK/oqqToqIrmga/mloflrZdcclxuICAgICAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGJ1dHRvblRleHQgLSDmjInpiJXmloflrZdcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHNob3dFcnJvcihwZXJtYW5lbnRTdGF0ZTogYm9vbGVhbiwgbWVzc2FnZTogc3RyaW5nLCBidXR0b25UZXh0OiBzdHJpbmcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBmY2Mge1xyXG5cclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgSUYge1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAQXV0aG9yIFhJQU8tTEktUElOXHJcbiAgICAgICAgICogQERlc2NyaXB0aW9uIOaJgOacieeahOmAmuefpeaOqOazouWvpuS9nOaOpee5vOaJv+mAmeWAi+S7i+mdolxyXG4gICAgICAgICAqIEBEYXRlIDIwMjEtMDUtMTkg5LiL5Y2IIDEyOjA1XHJcbiAgICAgICAgICogQFZlcnNpb24gMS4wXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZXhwb3J0IGludGVyZmFjZSBJQmFzZU9ic2VydmVyIHtcclxuXHJcbiAgICAgICAgICAgIGlzUGVybWFuZW50OiBib29sZWFuO1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIOaOqOazoumAmuefpVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgcHVzaE5vdGlmaWNhdGlvbiguLi5hbnkpOiB2b2lkO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgZmNjIHtcclxuXHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIElGIHtcclxuXHJcbiAgICAgICAgZXhwb3J0IGludGVyZmFjZSBJTG9hZFR5cGUge1xyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICog5Yqg6LyJ6LOH5rqQ5pa55rOVXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBsb2FkUmVzb3VyY2VzKCk6IHZvaWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufSIsIm5hbWVzcGFjZSBmY2Mge1xyXG5cclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgSUYge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBBdXRob3IgWElBTy1MSS1QSU5cclxuICAgICAgICAgKiBARGVzY3JpcHRpb24gKOS7i+mdoinmiYDmnInln7fooYzlrrnlmajmjqXnubzmib/mlrzku5ZcclxuICAgICAgICAgKiBARGF0ZSAyMDIxLTA1LTE0IOS4i+WNiCAwMzo1MFxyXG4gICAgICAgICAqIEBWZXJzaW9uIDEuMFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGV4cG9ydCBpbnRlcmZhY2UgSUV4ZWN1dGlvbkNvbnRhaW5lciB7XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICog5pu05o+b5rWB56iLXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBvbkNoYW5nZVN0YXR1cygpOiB2b2lkO1xyXG5cclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiDliJ3lp4vljJbmtYHnqItcclxuICAgICAgICAgICAgICogQHJldHVybnMge1Byb21pc2U8dm9pZD59XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBvbkNyZWF0ZSgpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgZmNjIHtcclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgSUYge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBBdXRob3IgWElBTy1MSS1QSU5cclxuICAgICAgICAgKiBARGVzY3JpcHRpb24gKOS7i+mdoinkuIDoiKzpgYrmiLLnqIvluo/ln7fooYzlrrnlmahcclxuICAgICAgICAgKiBARGF0ZSAyMDIxLTA1LTE0IOS4i+WNiCAwMzoxNVxyXG4gICAgICAgICAqIEBWZXJzaW9uIDEuMFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGV4cG9ydCBpbnRlcmZhY2UgSUdhbWVQcm9jZWR1cmVFeGVjdXRpb25Db250YWluZXIgZXh0ZW5kcyBJRXhlY3V0aW9uQ29udGFpbmVyIHtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiDln7fooYzmtYHnqItcclxuICAgICAgICAgICAgICogQHJldHVybnMge1Byb21pc2U8dm9pZD59XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBvbkV4ZWN1dGlvbigpOiBQcm9taXNlPHZvaWQ+O1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIOa1geeoi+e1kOadn+aZglxyXG4gICAgICAgICAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn1cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIG9uRW5kKCk6IFByb21pc2U8dm9pZD47XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBmY2Mge1xyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBJRiB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQEF1dGhvciBYSUFPLUxJLVBJTlxyXG4gICAgICAgICAqIEBEZXNjcmlwdGlvbiAo5LuL6Z2iKeiAgeiZjuapn+eoi+W8j+a1geeoi+Wft+ihjOWuueWZqFxyXG4gICAgICAgICAqIEBEYXRlIDIwMjEtMDUtMTQg5LiL5Y2IIDAzOjQ0XHJcbiAgICAgICAgICogQFZlcnNpb24gMS4wXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZXhwb3J0IGludGVyZmFjZSBJU2xvdFByb2NlZHVyZUV4ZWN1dGlvbkNvbnRhaW5lciBleHRlbmRzIElFeGVjdXRpb25Db250YWluZXIge1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIOiHquiogua1geeoi+mWi+Wni+aZguWIpOaWt1xyXG4gICAgICAgICAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn1cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIG9uQ3VzdG9taXplU3RhcnQoKTogUHJvbWlzZTx2b2lkPjtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiDogIHomY7mqZ/plovlp4vliY3mvLjlhaXln7fooYxcclxuICAgICAgICAgICAgICogQHJldHVybnMge1Byb21pc2U8dm9pZD59XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBvblNpbmVJbkdyaWQoKTogUHJvbWlzZTx2b2lkPjtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiDogIHomY7mqZ/ovYnli5VcclxuICAgICAgICAgICAgICogQHJldHVybnMge1Byb21pc2U8dm9pZD59XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBvblJ1bkdyaWQoKTogUHJvbWlzZTx2b2lkPjtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiDogIHomY7mqZ/mvLjlh7rlgZzmraJcclxuICAgICAgICAgICAgICogQHJldHVybnMge1Byb21pc2U8dm9pZD59XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBvblNpbmVPdXRHcmlkKCk6IFByb21pc2U8dm9pZD47XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICog6aGv56S657WQ5p6c5YuV55WrXHJcbiAgICAgICAgICAgICAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgb25TaG93QW5zd2VyKCk6IFByb21pc2U8dm9pZD47XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICog6Ieq6KiC576p57WQ5p2fXHJcbiAgICAgICAgICAgICAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgb25DdXN0b21pemVFbmQoKTogUHJvbWlzZTx2b2lkPjtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIGZjYyB7XHJcblxyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBJRiB7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBBdXRob3IgWElBTy1MSS1QSU5cclxuICAgICAgICAgKiBARGVzY3JpcHRpb24gKOS7i+mdoinkuIDoiKzmtYHnqItcclxuICAgICAgICAgKiBARGF0ZSAyMDIxLTA1LTE0IOS4i+WNiCAwMzowOFxyXG4gICAgICAgICAqIEBWZXJzaW9uIDEuMFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGV4cG9ydCBpbnRlcmZhY2UgSUdhbWVQcm9jZXNzIGV4dGVuZHMgSVByb2Nlc3Mge1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIOWft+ihjOa1geeoi1xyXG4gICAgICAgICAgICAgKiBAcmV0dXJucyB7dGhpc31cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIG9uRXhlY3V0aW9uKCk6IHRoaXM7XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICog5rWB56iL57WQ5p2f5pmCXHJcbiAgICAgICAgICAgICAqIEByZXR1cm5zIHt0aGlzfVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgb25FbmQoKTogdGhpcztcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIGZjYyB7XHJcblxyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBJRiB7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBBdXRob3IgWElBTy1MSS1QSU5cclxuICAgICAgICAgKiBARGVzY3JpcHRpb24gKOS7i+mdoinmiYDmnInnmoTmtYHnqIvniLbpoZ5cclxuICAgICAgICAgKiBARGF0ZSAyMDIxLTA1LTE0IOS4i+WNiCAwMzo0NFxyXG4gICAgICAgICAqIEBWZXJzaW9uIDEuMFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGV4cG9ydCBpbnRlcmZhY2UgSVByb2Nlc3Mge1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIOWEsuWtmOS9v+eUqOiAhee2geWumueahOa1geeoi+aWueazlVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgcmVhZG9ubHkgcHJvY2VzczogU2V0PCgpID0+IFByb21pc2U8dm9pZD4gfCB2b2lkPlxyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIOa1geeoi+WuueWZqFxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgcmVhZG9ubHkgZXhlY3V0aW9uQ29udGFpbmVyOiBJRi5JRXhlY3V0aW9uQ29udGFpbmVyO1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIOabtOaPm+a1geeoi1xyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgb25DaGFuZ2VTdGF0dXMoKTogdGhpcztcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiDlsIfmiYDmnInntoHlrprnmoTmtYHnqIvmlrnms5Xkvp3luo/ln7fooYxcclxuICAgICAgICAgICAgICogQHJldHVybnMge1Byb21pc2U8dm9pZD59XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBzdGFydCgpOiBQcm9taXNlPHZvaWQ+O1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgZmNjIHtcclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgSUYge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBBdXRob3IgWElBTy1MSS1QSU5cclxuICAgICAgICAgKiBARGVzY3JpcHRpb24gKOS7i+mdoinogIHomY7mqZ/mtYHnqItcclxuICAgICAgICAgKiBARGF0ZSAyMDIxLTA1LTE0IOS4i+WNiCAwMzowN1xyXG4gICAgICAgICAqIEBWZXJzaW9uIDEuMFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGV4cG9ydCBpbnRlcmZhY2UgSVNsb3RHYW1lUHJvY2VzcyBleHRlbmRzIElQcm9jZXNzIHtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiDliJ3lp4vljJYgOiDoh6roqILplovlp4vpgYrmiLLliY3nmoTmlYjmnpxcclxuICAgICAgICAgICAgICogQGV4YW1wbGUgLSDmjInpiJUs6IOM5pmv4oCm562JXHJcbiAgICAgICAgICAgICAqIEByZXR1cm4ge3RoaXN9XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBvbkN1c3RvbWl6ZVN0YXJ0KCk6IHRoaXM7XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICog6ICB6JmO5qmf6YGL6KGM5YmNLOa8uOWFpeaViOaenFxyXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHt0aGlzfVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgb25TaW5lSW5HcmlkKCk6IHRoaXM7XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICog6YGK5oiy5oyB57qM5Z+36KGM5YuV5L2cXHJcbiAgICAgICAgICAgICAqIEByZXR1cm4ge3RoaXN9XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBvblJ1bm5pbmcoKTogdGhpcztcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiDoh6roqILnvqnlgZzmraLlvozkuovku7ZcclxuICAgICAgICAgICAgICogQGV4YW1wbGUgLSDmm7Tmj5vpn7PmqIIs5pu05o+b6IOM5pmv5ZyW5qGILOagoeato+WbnuatuOa1geeoi+eLgOaFiy4uLuetiVxyXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHt0aGlzfVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgb25DdXN0b21pemVFbmQoKTogdGhpcztcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiDpoa/npLrntZDmnpxcclxuICAgICAgICAgICAgICogQHJldHVybnMge3RoaXN9XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBvblNob3dBbnN3ZXIoKTogdGhpcztcclxuXHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBmY2Mge1xyXG5cclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgSUYge1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAQXV0aG9yIFhJQU8tTEktUElOXHJcbiAgICAgICAgICogQERlc2NyaXB0aW9uICjku4vpnaIpIOWwjeaHieipsuaoo+W8jyzmm7TmlrDnlbbliY3loLTmma9cclxuICAgICAgICAgKiBARGF0ZSAyMDIxLTA0LTE0IOS4i+WNiCAyMDoyNFxyXG4gICAgICAgICAqIEBWZXJzaW9uIDEuMVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGV4cG9ydCBpbnRlcmZhY2UgSVNjZW5lU3R5bGUge1xyXG5cclxuICAgICAgICAgICAgZXhlY3V0aW9uU3R5bGUod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpOiB2b2lkO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIvKipcclxuICogQEF1dGhvciBYSUFPLUxJLVBJTlxyXG4gKiBARGVzY3JpcHRpb24gKOS7i+mdoinmiYDmnInpoZ7lnotTbG905YWN6LK754uA5oWL5o6l5pS25bCB5YyF55qE54i26aGeXHJcbiAqIEBEYXRlIDIwMjEtMDUtMzEg5LiL5Y2IIDAzOjQ1XHJcbiAqIEBWZXJzaW9uIDEuMFxyXG4gKi9cclxuaW50ZXJmYWNlIElTbG90RnJlZUJhc2VSZXN1bHRNb2RlbCB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiAwOiDmirzms6jmiJDlip8gMTog6Z2e5YWN6LK75pmC6ZaT5oq85rOoXHJcbiAgICAgKi9cclxuICAgIFN0YXRlOiBudW1iZXI7XHJcbiAgICAvKipcclxuICAgICAqIOeOqeWutuePvuaciemHkemhjSjotI/liIblvowpXHJcbiAgICAgKi9cclxuICAgIFVzZXJQb2ludEFmdGVyOiBudW1iZXI7XHJcbiAgICAvKipcclxuICAgICAqIOaOpeS4i+S+humBiuaIsueLgOaFiygwOuS4gOiIrCAxOuWFjeiyu+mBiuaIsiAyOuWwj+mBiuaIsilcclxuICAgICAqL1xyXG4gICAgR2FtZVN0YXRlOiBudW1iZXI7XHJcbiAgICAvKipcclxuICAgICAqIOWJqemkmOWFjeiyu+mBiuaIsuasoeaVuCAoMDrmspLmnIkgMX45OeasoSlcclxuICAgICAqL1xyXG4gICAgQ291bnQ6IG51bWJlcjtcclxuICAgIC8qKlxyXG4gICAgICog5YWN6LK76YGK5oiy57Sv6KiI6LSP5YiGXHJcbiAgICAgKi9cclxuICAgIEZyZWVTcGluV2luOiBudW1iZXI7XHJcbiAgICAvKipcclxuICAgICAqIOe4vei0j+W+l+mHkemhjSAoMDrovLjkuoYg5aSn5pa8MDrotI/kuoYgKVxyXG4gICAgICovXHJcbiAgICBUb3RhbFdpblBvaW50OiBudW1iZXI7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAQXV0aG9yIFhJQU8tTEktUElOXHJcbiAqIEBEZXNjcmlwdGlvbiAo5LuL6Z2iKeaJgOaciemhnuWei1Nsb3TkuIDoiKzni4DmhYvmjqXmlLblsIHljIXnmoTniLbpoZ5cclxuICogQERhdGUgMjAyMS0wNS0zMSDkuIvljYggMDM6NDVcclxuICogQFZlcnNpb24gMS4wXHJcbiAqL1xyXG5pbnRlcmZhY2UgSVNsb3RCYXNlUmVzdWx0TW9kZWwge1xyXG4gICAgLyoqXHJcbiAgICAgKiAwOiDmirzms6jmiJDlip8gMTrpgYrmiLLni4DmhYvkuI3nrKYgMjrotoXpgY5cclxuICAgICAqL1xyXG4gICAgU3RhdGU6IG51bWJlcjtcclxuICAgIC8qKlxyXG4gICAgICog57i96LSP5b6X6YeR6aGNICgwOui8uOS6hiDlpKfmlrwwOui0j+S6hiApXHJcbiAgICAgKi9cclxuICAgIFRvdGFsV2luUG9pbnQ6IG51bWJlcjtcclxuICAgIC8qKlxyXG4gICAgICog546p5a6254++5pyJ6YeR6aGNKOi0j+WIhuW+jClcclxuICAgICAqL1xyXG4gICAgVXNlclBvaW50QWZ0ZXI6IG51bWJlcjtcclxuICAgIC8qKlxyXG4gICAgICog546p5a6254++5pyJ6YeR6aGNKOaKvOazqOW+jClcclxuICAgICAqL1xyXG4gICAgVXNlclBvaW50QmVmb3JlOiBudW1iZXI7XHJcbn1cclxuXHJcbm5hbWVzcGFjZSBmY2Mge1xyXG5cclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgSUYge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBBdXRob3IgWElBTy1MSS1QSU5cclxuICAgICAgICAgKiBARGVzY3JpcHRpb24gKOS7i+mdoinlj4PmlbjoqK3lrppcclxuICAgICAgICAgKiBARGF0ZSAyMDIxLTA0LTE0IOS4i+WNiCAyMDoyNFxyXG4gICAgICAgICAqIEBWZXJzaW9uIDEuMVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGV4cG9ydCBpbnRlcmZhY2UgSVNsb3RTZXR0aW5nIHtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiDogIHomY7mqZ/poa/npLrnrZTmoYjliY3nmoTmnIDlsJHovYnli5XmrKHmlbhcclxuICAgICAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IGNvdW50XHJcbiAgICAgICAgICAgICAqIEByZXR1cm4ge3RoaXN9XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBzbG90VHVybkNvdW50OiBudW1iZXI7XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICog6ICB6JmO5qmf5q+P5qC85qC85a2Q6auY5bqmXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHRcclxuICAgICAgICAgICAgICogQHJldHVybiB7dGhpc31cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHNsb3RHcmlkSGVpZ2h0OiBudW1iZXI7XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICog6YGK5oiy5q+P5qC85qC85a2Q6ZaT55qE6YCf5bqmXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSB0aW1lXHJcbiAgICAgICAgICAgICAqIEByZXR1cm4ge3RoaXN9XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBzbG90R2lyZFNwZWVkOiBudW1iZXI7XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICog6Kmy6ICB6JmO5qmfIOavj+WIl+eahOagvOWtkOaVuOmHj1xyXG4gICAgICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gZ3JpZENvdW50XHJcbiAgICAgICAgICAgICAqIEByZXR1cm4ge3RoaXN9XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBzbG90Um93R3JpZENvdW50OiBudW1iZXI7XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICog5Yqg6YCf5pmC55qE5Yqg6YCf5YCN546HXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBtdWx0aXBsZVxyXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHt0aGlzfVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgc3BlZWRVcE11bHRpcGxlOiBudW1iZXI7XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICog6KaB5Z+36KGM6Lyq5pKt5YuV55WrLOi9ieWLleiAgeiZjuapn+eahOaJgOacieWIlyBjYy5Ob2RlXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7QXJyYXk8Y2MuTm9kZT59IG5vZGVcclxuICAgICAgICAgICAgICogQHJldHVybiB7dGhpc31cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHNsb3RDb2x1bW5Ub1R3ZWVuOiBBcnJheTxjYy5Ob2RlPjtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiDpnZ7liqDpgJ/mqKHlvI8s5q+P5YiX5YGc5q2i55qE5pmC6ZaT6ZaT5qC8XHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSB0aW1lXHJcbiAgICAgICAgICAgICAqIEByZXR1cm4ge3RoaXN9XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBjb2x1bW5JbnRlcnZhbFRpbWU6IG51bWJlcjtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiDmiYDmnInmoLzlrZAs5Z+36KGM5YuV55Wr55qE5omA5pyJ5qC85a2QXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7TWFwPG51bWJlciwgQXJyYXk8Y2MuTm9kZT4+fSBub2RlXHJcbiAgICAgICAgICAgICAqIEByZXR1cm4ge3RoaXN9XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBncmlkTm9kZVRvTWFwOiBNYXA8bnVtYmVyLCBBcnJheTxjYy5Ob2RlPj47XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogc2VydmVy5LiA6Iis562U5qGI5Zue5YKz57WQ5p6cXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBub3JtYWxSZXN1bHQ6IElTbG90QmFzZVJlc3VsdE1vZGVsO1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIHNlcnZlcuWFjeiyu+etlOahiOWbnuWCs+e1kOaenFxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgZnJlZVJlc3VsdDogSVNsb3RGcmVlQmFzZVJlc3VsdE1vZGVsO1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIOiAgeiZjuapn+mhr+ekuuetlOahiOWJjeeahOacgOWwkei9ieWLleasoeaVuFxyXG4gICAgICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gY291bnRcclxuICAgICAgICAgICAgICogQHJldHVybiB7dGhpc31cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHNldFNsb3RUdXJuQ291bnQoY291bnQ6IG51bWJlcik6IHRoaXM7XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICog6ICB6JmO5qmf5q+P5qC85qC85a2Q6auY5bqmXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHRcclxuICAgICAgICAgICAgICogQHJldHVybiB7dGhpc31cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHNldFNsb3RHcmlkSGVpZ2h0KGhlaWdodDogbnVtYmVyKTogdGhpcztcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiDogIHomY7mqZ/kuIDoiKzni4DmhYvpgJ/luqZcclxuICAgICAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IHRpbWVcclxuICAgICAgICAgICAgICogQHJldHVybiB7dGhpc31cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHNldFNsb3RHaXJkU3BlZWQodGltZTogbnVtYmVyKTogdGhpcztcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiDoqbLogIHomY7mqZ8g5q+P5YiX55qE5qC85a2Q5pW46YePXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBncmlkQ291bnRcclxuICAgICAgICAgICAgICogQHJldHVybiB7dGhpc31cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHNldFNsb3RSb3dHcmlkQ291bnQoZ3JpZENvdW50OiBudW1iZXIpOiB0aGlzXHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICog5Yqg6YCf5pmC55qE5Yqg6YCf5YCN546HXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBtdWx0aXBsZVxyXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHt0aGlzfVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgc2V0U3BlZWRVcE11bHRpcGxlKG11bHRpcGxlOiBudW1iZXIpOiB0aGlzO1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIOimgeWft+ihjOi8quaSreWLleeVqyzovYnli5XogIHomY7mqZ/nmoTmiYDmnInliJcgY2MuTm9kZVxyXG4gICAgICAgICAgICAgKiBAcGFyYW0ge0FycmF5PGNjLk5vZGU+fSBub2RlXHJcbiAgICAgICAgICAgICAqIEByZXR1cm4ge3RoaXN9XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBzZXRTbG90Q29sdW1uVG9Ud2Vlbihub2RlOiBBcnJheTxjYy5Ob2RlPik6IHRoaXM7XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICog6Z2e5Yqg6YCf5qih5byPLOavj+WIl+WBnOatoueahOaZgumWk+mWk+agvFxyXG4gICAgICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gdGltZVxyXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHt0aGlzfVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgc2V0Q29sdW1uSW50ZXJ2YWxUaW1lKHRpbWU6IG51bWJlcik6IHRoaXM7XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICog5omA5pyJ5qC85a2QLOWft+ihjOWLleeVq+eahOaJgOacieagvOWtkFxyXG4gICAgICAgICAgICAgKiBAcGFyYW0ge01hcDxudW1iZXIsIEFycmF5PGNjLk5vZGU+Pn0gbm9kZVxyXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHt0aGlzfVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgc2V0R3JpZE5vZGVUb01hcChub2RlOiBNYXA8bnVtYmVyLCBBcnJheTxjYy5Ob2RlPj4pOiB0aGlzO1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIHNlcnZlcuS4gOiIrOetlOahiOWbnuWCs21vZGVsXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBzZXROb3JtYWxSZXN1bHQobm9ybWFsUmVzdWx0OiBJU2xvdEJhc2VSZXN1bHRNb2RlbCk6IHRoaXM7XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogc2VydmVy5YWN6LK7562U5qGI5Zue5YKz57WQ5p6cXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBzZXRGcmVlUmVzdWx0KGZyZWVSZXN1bHQ6SVNsb3RGcmVlQmFzZVJlc3VsdE1vZGVsKTp0aGlzO1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIOioreWumue1kOadn1xyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgY29tcGxldGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0=

}).call(this,require("2ionoC"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/fake_c91cc6e0.js","/")
},{"2ionoC":5,"buffer":3}],2:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
var lookup = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

;(function (exports) {
	'use strict';

  var Arr = (typeof Uint8Array !== 'undefined')
    ? Uint8Array
    : Array

	var PLUS   = '+'.charCodeAt(0)
	var SLASH  = '/'.charCodeAt(0)
	var NUMBER = '0'.charCodeAt(0)
	var LOWER  = 'a'.charCodeAt(0)
	var UPPER  = 'A'.charCodeAt(0)
	var PLUS_URL_SAFE = '-'.charCodeAt(0)
	var SLASH_URL_SAFE = '_'.charCodeAt(0)

	function decode (elt) {
		var code = elt.charCodeAt(0)
		if (code === PLUS ||
		    code === PLUS_URL_SAFE)
			return 62 // '+'
		if (code === SLASH ||
		    code === SLASH_URL_SAFE)
			return 63 // '/'
		if (code < NUMBER)
			return -1 //no match
		if (code < NUMBER + 10)
			return code - NUMBER + 26 + 26
		if (code < UPPER + 26)
			return code - UPPER
		if (code < LOWER + 26)
			return code - LOWER + 26
	}

	function b64ToByteArray (b64) {
		var i, j, l, tmp, placeHolders, arr

		if (b64.length % 4 > 0) {
			throw new Error('Invalid string. Length must be a multiple of 4')
		}

		// the number of equal signs (place holders)
		// if there are two placeholders, than the two characters before it
		// represent one byte
		// if there is only one, then the three characters before it represent 2 bytes
		// this is just a cheap hack to not do indexOf twice
		var len = b64.length
		placeHolders = '=' === b64.charAt(len - 2) ? 2 : '=' === b64.charAt(len - 1) ? 1 : 0

		// base64 is 4/3 + up to two characters of the original data
		arr = new Arr(b64.length * 3 / 4 - placeHolders)

		// if there are placeholders, only get up to the last complete 4 chars
		l = placeHolders > 0 ? b64.length - 4 : b64.length

		var L = 0

		function push (v) {
			arr[L++] = v
		}

		for (i = 0, j = 0; i < l; i += 4, j += 3) {
			tmp = (decode(b64.charAt(i)) << 18) | (decode(b64.charAt(i + 1)) << 12) | (decode(b64.charAt(i + 2)) << 6) | decode(b64.charAt(i + 3))
			push((tmp & 0xFF0000) >> 16)
			push((tmp & 0xFF00) >> 8)
			push(tmp & 0xFF)
		}

		if (placeHolders === 2) {
			tmp = (decode(b64.charAt(i)) << 2) | (decode(b64.charAt(i + 1)) >> 4)
			push(tmp & 0xFF)
		} else if (placeHolders === 1) {
			tmp = (decode(b64.charAt(i)) << 10) | (decode(b64.charAt(i + 1)) << 4) | (decode(b64.charAt(i + 2)) >> 2)
			push((tmp >> 8) & 0xFF)
			push(tmp & 0xFF)
		}

		return arr
	}

	function uint8ToBase64 (uint8) {
		var i,
			extraBytes = uint8.length % 3, // if we have 1 byte left, pad 2 bytes
			output = "",
			temp, length

		function encode (num) {
			return lookup.charAt(num)
		}

		function tripletToBase64 (num) {
			return encode(num >> 18 & 0x3F) + encode(num >> 12 & 0x3F) + encode(num >> 6 & 0x3F) + encode(num & 0x3F)
		}

		// go through the array every three bytes, we'll deal with trailing stuff later
		for (i = 0, length = uint8.length - extraBytes; i < length; i += 3) {
			temp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
			output += tripletToBase64(temp)
		}

		// pad the end with zeros, but make sure to not forget the extra bytes
		switch (extraBytes) {
			case 1:
				temp = uint8[uint8.length - 1]
				output += encode(temp >> 2)
				output += encode((temp << 4) & 0x3F)
				output += '=='
				break
			case 2:
				temp = (uint8[uint8.length - 2] << 8) + (uint8[uint8.length - 1])
				output += encode(temp >> 10)
				output += encode((temp >> 4) & 0x3F)
				output += encode((temp << 2) & 0x3F)
				output += '='
				break
		}

		return output
	}

	exports.toByteArray = b64ToByteArray
	exports.fromByteArray = uint8ToBase64
}(typeof exports === 'undefined' ? (this.base64js = {}) : exports))

}).call(this,require("2ionoC"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/..\\node_modules\\gulp-browserify\\node_modules\\base64-js\\lib\\b64.js","/..\\node_modules\\gulp-browserify\\node_modules\\base64-js\\lib")
},{"2ionoC":5,"buffer":3}],3:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */

var base64 = require('base64-js')
var ieee754 = require('ieee754')

exports.Buffer = Buffer
exports.SlowBuffer = Buffer
exports.INSPECT_MAX_BYTES = 50
Buffer.poolSize = 8192

/**
 * If `Buffer._useTypedArrays`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (compatible down to IE6)
 */
Buffer._useTypedArrays = (function () {
  // Detect if browser supports Typed Arrays. Supported browsers are IE 10+, Firefox 4+,
  // Chrome 7+, Safari 5.1+, Opera 11.6+, iOS 4.2+. If the browser does not support adding
  // properties to `Uint8Array` instances, then that's the same as no `Uint8Array` support
  // because we need to be able to add all the node Buffer API methods. This is an issue
  // in Firefox 4-29. Now fixed: https://bugzilla.mozilla.org/show_bug.cgi?id=695438
  try {
    var buf = new ArrayBuffer(0)
    var arr = new Uint8Array(buf)
    arr.foo = function () { return 42 }
    return 42 === arr.foo() &&
        typeof arr.subarray === 'function' // Chrome 9-10 lack `subarray`
  } catch (e) {
    return false
  }
})()

/**
 * Class: Buffer
 * =============
 *
 * The Buffer constructor returns instances of `Uint8Array` that are augmented
 * with function properties for all the node `Buffer` API functions. We use
 * `Uint8Array` so that square bracket notation works as expected -- it returns
 * a single octet.
 *
 * By augmenting the instances, we can avoid modifying the `Uint8Array`
 * prototype.
 */
function Buffer (subject, encoding, noZero) {
  if (!(this instanceof Buffer))
    return new Buffer(subject, encoding, noZero)

  var type = typeof subject

  // Workaround: node's base64 implementation allows for non-padded strings
  // while base64-js does not.
  if (encoding === 'base64' && type === 'string') {
    subject = stringtrim(subject)
    while (subject.length % 4 !== 0) {
      subject = subject + '='
    }
  }

  // Find the length
  var length
  if (type === 'number')
    length = coerce(subject)
  else if (type === 'string')
    length = Buffer.byteLength(subject, encoding)
  else if (type === 'object')
    length = coerce(subject.length) // assume that object is array-like
  else
    throw new Error('First argument needs to be a number, array or string.')

  var buf
  if (Buffer._useTypedArrays) {
    // Preferred: Return an augmented `Uint8Array` instance for best performance
    buf = Buffer._augment(new Uint8Array(length))
  } else {
    // Fallback: Return THIS instance of Buffer (created by `new`)
    buf = this
    buf.length = length
    buf._isBuffer = true
  }

  var i
  if (Buffer._useTypedArrays && typeof subject.byteLength === 'number') {
    // Speed optimization -- use set if we're copying from a typed array
    buf._set(subject)
  } else if (isArrayish(subject)) {
    // Treat array-ish objects as a byte array
    for (i = 0; i < length; i++) {
      if (Buffer.isBuffer(subject))
        buf[i] = subject.readUInt8(i)
      else
        buf[i] = subject[i]
    }
  } else if (type === 'string') {
    buf.write(subject, 0, encoding)
  } else if (type === 'number' && !Buffer._useTypedArrays && !noZero) {
    for (i = 0; i < length; i++) {
      buf[i] = 0
    }
  }

  return buf
}

// STATIC METHODS
// ==============

Buffer.isEncoding = function (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'binary':
    case 'base64':
    case 'raw':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.isBuffer = function (b) {
  return !!(b !== null && b !== undefined && b._isBuffer)
}

Buffer.byteLength = function (str, encoding) {
  var ret
  str = str + ''
  switch (encoding || 'utf8') {
    case 'hex':
      ret = str.length / 2
      break
    case 'utf8':
    case 'utf-8':
      ret = utf8ToBytes(str).length
      break
    case 'ascii':
    case 'binary':
    case 'raw':
      ret = str.length
      break
    case 'base64':
      ret = base64ToBytes(str).length
      break
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      ret = str.length * 2
      break
    default:
      throw new Error('Unknown encoding')
  }
  return ret
}

Buffer.concat = function (list, totalLength) {
  assert(isArray(list), 'Usage: Buffer.concat(list, [totalLength])\n' +
      'list should be an Array.')

  if (list.length === 0) {
    return new Buffer(0)
  } else if (list.length === 1) {
    return list[0]
  }

  var i
  if (typeof totalLength !== 'number') {
    totalLength = 0
    for (i = 0; i < list.length; i++) {
      totalLength += list[i].length
    }
  }

  var buf = new Buffer(totalLength)
  var pos = 0
  for (i = 0; i < list.length; i++) {
    var item = list[i]
    item.copy(buf, pos)
    pos += item.length
  }
  return buf
}

// BUFFER INSTANCE METHODS
// =======================

function _hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  assert(strLen % 2 === 0, 'Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; i++) {
    var byte = parseInt(string.substr(i * 2, 2), 16)
    assert(!isNaN(byte), 'Invalid hex string')
    buf[offset + i] = byte
  }
  Buffer._charsWritten = i * 2
  return i
}

function _utf8Write (buf, string, offset, length) {
  var charsWritten = Buffer._charsWritten =
    blitBuffer(utf8ToBytes(string), buf, offset, length)
  return charsWritten
}

function _asciiWrite (buf, string, offset, length) {
  var charsWritten = Buffer._charsWritten =
    blitBuffer(asciiToBytes(string), buf, offset, length)
  return charsWritten
}

function _binaryWrite (buf, string, offset, length) {
  return _asciiWrite(buf, string, offset, length)
}

function _base64Write (buf, string, offset, length) {
  var charsWritten = Buffer._charsWritten =
    blitBuffer(base64ToBytes(string), buf, offset, length)
  return charsWritten
}

function _utf16leWrite (buf, string, offset, length) {
  var charsWritten = Buffer._charsWritten =
    blitBuffer(utf16leToBytes(string), buf, offset, length)
  return charsWritten
}

Buffer.prototype.write = function (string, offset, length, encoding) {
  // Support both (string, offset, length, encoding)
  // and the legacy (string, encoding, offset, length)
  if (isFinite(offset)) {
    if (!isFinite(length)) {
      encoding = length
      length = undefined
    }
  } else {  // legacy
    var swap = encoding
    encoding = offset
    offset = length
    length = swap
  }

  offset = Number(offset) || 0
  var remaining = this.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }
  encoding = String(encoding || 'utf8').toLowerCase()

  var ret
  switch (encoding) {
    case 'hex':
      ret = _hexWrite(this, string, offset, length)
      break
    case 'utf8':
    case 'utf-8':
      ret = _utf8Write(this, string, offset, length)
      break
    case 'ascii':
      ret = _asciiWrite(this, string, offset, length)
      break
    case 'binary':
      ret = _binaryWrite(this, string, offset, length)
      break
    case 'base64':
      ret = _base64Write(this, string, offset, length)
      break
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      ret = _utf16leWrite(this, string, offset, length)
      break
    default:
      throw new Error('Unknown encoding')
  }
  return ret
}

Buffer.prototype.toString = function (encoding, start, end) {
  var self = this

  encoding = String(encoding || 'utf8').toLowerCase()
  start = Number(start) || 0
  end = (end !== undefined)
    ? Number(end)
    : end = self.length

  // Fastpath empty strings
  if (end === start)
    return ''

  var ret
  switch (encoding) {
    case 'hex':
      ret = _hexSlice(self, start, end)
      break
    case 'utf8':
    case 'utf-8':
      ret = _utf8Slice(self, start, end)
      break
    case 'ascii':
      ret = _asciiSlice(self, start, end)
      break
    case 'binary':
      ret = _binarySlice(self, start, end)
      break
    case 'base64':
      ret = _base64Slice(self, start, end)
      break
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      ret = _utf16leSlice(self, start, end)
      break
    default:
      throw new Error('Unknown encoding')
  }
  return ret
}

Buffer.prototype.toJSON = function () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function (target, target_start, start, end) {
  var source = this

  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (!target_start) target_start = 0

  // Copy 0 bytes; we're done
  if (end === start) return
  if (target.length === 0 || source.length === 0) return

  // Fatal error conditions
  assert(end >= start, 'sourceEnd < sourceStart')
  assert(target_start >= 0 && target_start < target.length,
      'targetStart out of bounds')
  assert(start >= 0 && start < source.length, 'sourceStart out of bounds')
  assert(end >= 0 && end <= source.length, 'sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length)
    end = this.length
  if (target.length - target_start < end - start)
    end = target.length - target_start + start

  var len = end - start

  if (len < 100 || !Buffer._useTypedArrays) {
    for (var i = 0; i < len; i++)
      target[i + target_start] = this[i + start]
  } else {
    target._set(this.subarray(start, start + len), target_start)
  }
}

function _base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function _utf8Slice (buf, start, end) {
  var res = ''
  var tmp = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; i++) {
    if (buf[i] <= 0x7F) {
      res += decodeUtf8Char(tmp) + String.fromCharCode(buf[i])
      tmp = ''
    } else {
      tmp += '%' + buf[i].toString(16)
    }
  }

  return res + decodeUtf8Char(tmp)
}

function _asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; i++)
    ret += String.fromCharCode(buf[i])
  return ret
}

function _binarySlice (buf, start, end) {
  return _asciiSlice(buf, start, end)
}

function _hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; i++) {
    out += toHex(buf[i])
  }
  return out
}

function _utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i+1] * 256)
  }
  return res
}

Buffer.prototype.slice = function (start, end) {
  var len = this.length
  start = clamp(start, len, 0)
  end = clamp(end, len, len)

  if (Buffer._useTypedArrays) {
    return Buffer._augment(this.subarray(start, end))
  } else {
    var sliceLen = end - start
    var newBuf = new Buffer(sliceLen, undefined, true)
    for (var i = 0; i < sliceLen; i++) {
      newBuf[i] = this[i + start]
    }
    return newBuf
  }
}

// `get` will be removed in Node 0.13+
Buffer.prototype.get = function (offset) {
  console.log('.get() is deprecated. Access using array indexes instead.')
  return this.readUInt8(offset)
}

// `set` will be removed in Node 0.13+
Buffer.prototype.set = function (v, offset) {
  console.log('.set() is deprecated. Access using array indexes instead.')
  return this.writeUInt8(v, offset)
}

Buffer.prototype.readUInt8 = function (offset, noAssert) {
  if (!noAssert) {
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset < this.length, 'Trying to read beyond buffer length')
  }

  if (offset >= this.length)
    return

  return this[offset]
}

function _readUInt16 (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 1 < buf.length, 'Trying to read beyond buffer length')
  }

  var len = buf.length
  if (offset >= len)
    return

  var val
  if (littleEndian) {
    val = buf[offset]
    if (offset + 1 < len)
      val |= buf[offset + 1] << 8
  } else {
    val = buf[offset] << 8
    if (offset + 1 < len)
      val |= buf[offset + 1]
  }
  return val
}

Buffer.prototype.readUInt16LE = function (offset, noAssert) {
  return _readUInt16(this, offset, true, noAssert)
}

Buffer.prototype.readUInt16BE = function (offset, noAssert) {
  return _readUInt16(this, offset, false, noAssert)
}

function _readUInt32 (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 3 < buf.length, 'Trying to read beyond buffer length')
  }

  var len = buf.length
  if (offset >= len)
    return

  var val
  if (littleEndian) {
    if (offset + 2 < len)
      val = buf[offset + 2] << 16
    if (offset + 1 < len)
      val |= buf[offset + 1] << 8
    val |= buf[offset]
    if (offset + 3 < len)
      val = val + (buf[offset + 3] << 24 >>> 0)
  } else {
    if (offset + 1 < len)
      val = buf[offset + 1] << 16
    if (offset + 2 < len)
      val |= buf[offset + 2] << 8
    if (offset + 3 < len)
      val |= buf[offset + 3]
    val = val + (buf[offset] << 24 >>> 0)
  }
  return val
}

Buffer.prototype.readUInt32LE = function (offset, noAssert) {
  return _readUInt32(this, offset, true, noAssert)
}

Buffer.prototype.readUInt32BE = function (offset, noAssert) {
  return _readUInt32(this, offset, false, noAssert)
}

Buffer.prototype.readInt8 = function (offset, noAssert) {
  if (!noAssert) {
    assert(offset !== undefined && offset !== null,
        'missing offset')
    assert(offset < this.length, 'Trying to read beyond buffer length')
  }

  if (offset >= this.length)
    return

  var neg = this[offset] & 0x80
  if (neg)
    return (0xff - this[offset] + 1) * -1
  else
    return this[offset]
}

function _readInt16 (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 1 < buf.length, 'Trying to read beyond buffer length')
  }

  var len = buf.length
  if (offset >= len)
    return

  var val = _readUInt16(buf, offset, littleEndian, true)
  var neg = val & 0x8000
  if (neg)
    return (0xffff - val + 1) * -1
  else
    return val
}

Buffer.prototype.readInt16LE = function (offset, noAssert) {
  return _readInt16(this, offset, true, noAssert)
}

Buffer.prototype.readInt16BE = function (offset, noAssert) {
  return _readInt16(this, offset, false, noAssert)
}

function _readInt32 (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 3 < buf.length, 'Trying to read beyond buffer length')
  }

  var len = buf.length
  if (offset >= len)
    return

  var val = _readUInt32(buf, offset, littleEndian, true)
  var neg = val & 0x80000000
  if (neg)
    return (0xffffffff - val + 1) * -1
  else
    return val
}

Buffer.prototype.readInt32LE = function (offset, noAssert) {
  return _readInt32(this, offset, true, noAssert)
}

Buffer.prototype.readInt32BE = function (offset, noAssert) {
  return _readInt32(this, offset, false, noAssert)
}

function _readFloat (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset + 3 < buf.length, 'Trying to read beyond buffer length')
  }

  return ieee754.read(buf, offset, littleEndian, 23, 4)
}

Buffer.prototype.readFloatLE = function (offset, noAssert) {
  return _readFloat(this, offset, true, noAssert)
}

Buffer.prototype.readFloatBE = function (offset, noAssert) {
  return _readFloat(this, offset, false, noAssert)
}

function _readDouble (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset + 7 < buf.length, 'Trying to read beyond buffer length')
  }

  return ieee754.read(buf, offset, littleEndian, 52, 8)
}

Buffer.prototype.readDoubleLE = function (offset, noAssert) {
  return _readDouble(this, offset, true, noAssert)
}

Buffer.prototype.readDoubleBE = function (offset, noAssert) {
  return _readDouble(this, offset, false, noAssert)
}

Buffer.prototype.writeUInt8 = function (value, offset, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset < this.length, 'trying to write beyond buffer length')
    verifuint(value, 0xff)
  }

  if (offset >= this.length) return

  this[offset] = value
}

function _writeUInt16 (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 1 < buf.length, 'trying to write beyond buffer length')
    verifuint(value, 0xffff)
  }

  var len = buf.length
  if (offset >= len)
    return

  for (var i = 0, j = Math.min(len - offset, 2); i < j; i++) {
    buf[offset + i] =
        (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
            (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function (value, offset, noAssert) {
  _writeUInt16(this, value, offset, true, noAssert)
}

Buffer.prototype.writeUInt16BE = function (value, offset, noAssert) {
  _writeUInt16(this, value, offset, false, noAssert)
}

function _writeUInt32 (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 3 < buf.length, 'trying to write beyond buffer length')
    verifuint(value, 0xffffffff)
  }

  var len = buf.length
  if (offset >= len)
    return

  for (var i = 0, j = Math.min(len - offset, 4); i < j; i++) {
    buf[offset + i] =
        (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function (value, offset, noAssert) {
  _writeUInt32(this, value, offset, true, noAssert)
}

Buffer.prototype.writeUInt32BE = function (value, offset, noAssert) {
  _writeUInt32(this, value, offset, false, noAssert)
}

Buffer.prototype.writeInt8 = function (value, offset, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset < this.length, 'Trying to write beyond buffer length')
    verifsint(value, 0x7f, -0x80)
  }

  if (offset >= this.length)
    return

  if (value >= 0)
    this.writeUInt8(value, offset, noAssert)
  else
    this.writeUInt8(0xff + value + 1, offset, noAssert)
}

function _writeInt16 (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 1 < buf.length, 'Trying to write beyond buffer length')
    verifsint(value, 0x7fff, -0x8000)
  }

  var len = buf.length
  if (offset >= len)
    return

  if (value >= 0)
    _writeUInt16(buf, value, offset, littleEndian, noAssert)
  else
    _writeUInt16(buf, 0xffff + value + 1, offset, littleEndian, noAssert)
}

Buffer.prototype.writeInt16LE = function (value, offset, noAssert) {
  _writeInt16(this, value, offset, true, noAssert)
}

Buffer.prototype.writeInt16BE = function (value, offset, noAssert) {
  _writeInt16(this, value, offset, false, noAssert)
}

function _writeInt32 (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 3 < buf.length, 'Trying to write beyond buffer length')
    verifsint(value, 0x7fffffff, -0x80000000)
  }

  var len = buf.length
  if (offset >= len)
    return

  if (value >= 0)
    _writeUInt32(buf, value, offset, littleEndian, noAssert)
  else
    _writeUInt32(buf, 0xffffffff + value + 1, offset, littleEndian, noAssert)
}

Buffer.prototype.writeInt32LE = function (value, offset, noAssert) {
  _writeInt32(this, value, offset, true, noAssert)
}

Buffer.prototype.writeInt32BE = function (value, offset, noAssert) {
  _writeInt32(this, value, offset, false, noAssert)
}

function _writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 3 < buf.length, 'Trying to write beyond buffer length')
    verifIEEE754(value, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }

  var len = buf.length
  if (offset >= len)
    return

  ieee754.write(buf, value, offset, littleEndian, 23, 4)
}

Buffer.prototype.writeFloatLE = function (value, offset, noAssert) {
  _writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function (value, offset, noAssert) {
  _writeFloat(this, value, offset, false, noAssert)
}

function _writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 7 < buf.length,
        'Trying to write beyond buffer length')
    verifIEEE754(value, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }

  var len = buf.length
  if (offset >= len)
    return

  ieee754.write(buf, value, offset, littleEndian, 52, 8)
}

Buffer.prototype.writeDoubleLE = function (value, offset, noAssert) {
  _writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function (value, offset, noAssert) {
  _writeDouble(this, value, offset, false, noAssert)
}

// fill(value, start=0, end=buffer.length)
Buffer.prototype.fill = function (value, start, end) {
  if (!value) value = 0
  if (!start) start = 0
  if (!end) end = this.length

  if (typeof value === 'string') {
    value = value.charCodeAt(0)
  }

  assert(typeof value === 'number' && !isNaN(value), 'value is not a number')
  assert(end >= start, 'end < start')

  // Fill 0 bytes; we're done
  if (end === start) return
  if (this.length === 0) return

  assert(start >= 0 && start < this.length, 'start out of bounds')
  assert(end >= 0 && end <= this.length, 'end out of bounds')

  for (var i = start; i < end; i++) {
    this[i] = value
  }
}

Buffer.prototype.inspect = function () {
  var out = []
  var len = this.length
  for (var i = 0; i < len; i++) {
    out[i] = toHex(this[i])
    if (i === exports.INSPECT_MAX_BYTES) {
      out[i + 1] = '...'
      break
    }
  }
  return '<Buffer ' + out.join(' ') + '>'
}

/**
 * Creates a new `ArrayBuffer` with the *copied* memory of the buffer instance.
 * Added in Node 0.12. Only available in browsers that support ArrayBuffer.
 */
Buffer.prototype.toArrayBuffer = function () {
  if (typeof Uint8Array !== 'undefined') {
    if (Buffer._useTypedArrays) {
      return (new Buffer(this)).buffer
    } else {
      var buf = new Uint8Array(this.length)
      for (var i = 0, len = buf.length; i < len; i += 1)
        buf[i] = this[i]
      return buf.buffer
    }
  } else {
    throw new Error('Buffer.toArrayBuffer not supported in this browser')
  }
}

// HELPER FUNCTIONS
// ================

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

var BP = Buffer.prototype

/**
 * Augment a Uint8Array *instance* (not the Uint8Array class!) with Buffer methods
 */
Buffer._augment = function (arr) {
  arr._isBuffer = true

  // save reference to original Uint8Array get/set methods before overwriting
  arr._get = arr.get
  arr._set = arr.set

  // deprecated, will be removed in node 0.13+
  arr.get = BP.get
  arr.set = BP.set

  arr.write = BP.write
  arr.toString = BP.toString
  arr.toLocaleString = BP.toString
  arr.toJSON = BP.toJSON
  arr.copy = BP.copy
  arr.slice = BP.slice
  arr.readUInt8 = BP.readUInt8
  arr.readUInt16LE = BP.readUInt16LE
  arr.readUInt16BE = BP.readUInt16BE
  arr.readUInt32LE = BP.readUInt32LE
  arr.readUInt32BE = BP.readUInt32BE
  arr.readInt8 = BP.readInt8
  arr.readInt16LE = BP.readInt16LE
  arr.readInt16BE = BP.readInt16BE
  arr.readInt32LE = BP.readInt32LE
  arr.readInt32BE = BP.readInt32BE
  arr.readFloatLE = BP.readFloatLE
  arr.readFloatBE = BP.readFloatBE
  arr.readDoubleLE = BP.readDoubleLE
  arr.readDoubleBE = BP.readDoubleBE
  arr.writeUInt8 = BP.writeUInt8
  arr.writeUInt16LE = BP.writeUInt16LE
  arr.writeUInt16BE = BP.writeUInt16BE
  arr.writeUInt32LE = BP.writeUInt32LE
  arr.writeUInt32BE = BP.writeUInt32BE
  arr.writeInt8 = BP.writeInt8
  arr.writeInt16LE = BP.writeInt16LE
  arr.writeInt16BE = BP.writeInt16BE
  arr.writeInt32LE = BP.writeInt32LE
  arr.writeInt32BE = BP.writeInt32BE
  arr.writeFloatLE = BP.writeFloatLE
  arr.writeFloatBE = BP.writeFloatBE
  arr.writeDoubleLE = BP.writeDoubleLE
  arr.writeDoubleBE = BP.writeDoubleBE
  arr.fill = BP.fill
  arr.inspect = BP.inspect
  arr.toArrayBuffer = BP.toArrayBuffer

  return arr
}

// slice(start, end)
function clamp (index, len, defaultValue) {
  if (typeof index !== 'number') return defaultValue
  index = ~~index;  // Coerce to integer.
  if (index >= len) return len
  if (index >= 0) return index
  index += len
  if (index >= 0) return index
  return 0
}

function coerce (length) {
  // Coerce length to a number (possibly NaN), round up
  // in case it's fractional (e.g. 123.456) then do a
  // double negate to coerce a NaN to 0. Easy, right?
  length = ~~Math.ceil(+length)
  return length < 0 ? 0 : length
}

function isArray (subject) {
  return (Array.isArray || function (subject) {
    return Object.prototype.toString.call(subject) === '[object Array]'
  })(subject)
}

function isArrayish (subject) {
  return isArray(subject) || Buffer.isBuffer(subject) ||
      subject && typeof subject === 'object' &&
      typeof subject.length === 'number'
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; i++) {
    var b = str.charCodeAt(i)
    if (b <= 0x7F)
      byteArray.push(str.charCodeAt(i))
    else {
      var start = i
      if (b >= 0xD800 && b <= 0xDFFF) i++
      var h = encodeURIComponent(str.slice(start, i+1)).substr(1).split('%')
      for (var j = 0; j < h.length; j++)
        byteArray.push(parseInt(h[j], 16))
    }
  }
  return byteArray
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; i++) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; i++) {
    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(str)
}

function blitBuffer (src, dst, offset, length) {
  var pos
  for (var i = 0; i < length; i++) {
    if ((i + offset >= dst.length) || (i >= src.length))
      break
    dst[i + offset] = src[i]
  }
  return i
}

function decodeUtf8Char (str) {
  try {
    return decodeURIComponent(str)
  } catch (err) {
    return String.fromCharCode(0xFFFD) // UTF 8 invalid char
  }
}

/*
 * We have to make sure that the value is a valid integer. This means that it
 * is non-negative. It has no fractional component and that it does not
 * exceed the maximum allowed value.
 */
function verifuint (value, max) {
  assert(typeof value === 'number', 'cannot write a non-number as a number')
  assert(value >= 0, 'specified a negative value for writing an unsigned value')
  assert(value <= max, 'value is larger than maximum value for type')
  assert(Math.floor(value) === value, 'value has a fractional component')
}

function verifsint (value, max, min) {
  assert(typeof value === 'number', 'cannot write a non-number as a number')
  assert(value <= max, 'value larger than maximum allowed value')
  assert(value >= min, 'value smaller than minimum allowed value')
  assert(Math.floor(value) === value, 'value has a fractional component')
}

function verifIEEE754 (value, max, min) {
  assert(typeof value === 'number', 'cannot write a non-number as a number')
  assert(value <= max, 'value larger than maximum allowed value')
  assert(value >= min, 'value smaller than minimum allowed value')
}

function assert (test, message) {
  if (!test) throw new Error(message || 'Failed assertion')
}

}).call(this,require("2ionoC"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/..\\node_modules\\gulp-browserify\\node_modules\\buffer\\index.js","/..\\node_modules\\gulp-browserify\\node_modules\\buffer")
},{"2ionoC":5,"base64-js":2,"buffer":3,"ieee754":4}],4:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}

}).call(this,require("2ionoC"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/..\\node_modules\\gulp-browserify\\node_modules\\ieee754\\index.js","/..\\node_modules\\gulp-browserify\\node_modules\\ieee754")
},{"2ionoC":5,"buffer":3}],5:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
// shim for using process in browser

var process = module.exports = {};

process.nextTick = (function () {
    var canSetImmediate = typeof window !== 'undefined'
    && window.setImmediate;
    var canPost = typeof window !== 'undefined'
    && window.postMessage && window.addEventListener
    ;

    if (canSetImmediate) {
        return function (f) { return window.setImmediate(f) };
    }

    if (canPost) {
        var queue = [];
        window.addEventListener('message', function (ev) {
            var source = ev.source;
            if ((source === window || source === null) && ev.data === 'process-tick') {
                ev.stopPropagation();
                if (queue.length > 0) {
                    var fn = queue.shift();
                    fn();
                }
            }
        }, true);

        return function nextTick(fn) {
            queue.push(fn);
            window.postMessage('process-tick', '*');
        };
    }

    return function nextTick(fn) {
        setTimeout(fn, 0);
    };
})();

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
}

// TODO(shtylman)
process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};

}).call(this,require("2ionoC"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/..\\node_modules\\gulp-browserify\\node_modules\\process\\browser.js","/..\\node_modules\\gulp-browserify\\node_modules\\process")
},{"2ionoC":5,"buffer":3}]},{},[1])