cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "com.robobloq.cordovaplugin.hotpatch.hotpatch",
        "file": "plugins/com.robobloq.cordovaplugin.hotpatch/www/hotpatch.js",
        "pluginId": "com.robobloq.cordovaplugin.hotpatch",
        "clobbers": [
            "hotpatch"
        ]
    },
    {
        "id": "cordova-plugin-ble-central.ble",
        "file": "plugins/cordova-plugin-ble-central/www/ble.js",
        "pluginId": "cordova-plugin-ble-central",
        "clobbers": [
            "ble"
        ]
    },
    {
        "id": "cordova-plugin-fullscreen.AndroidFullScreen",
        "file": "plugins/cordova-plugin-fullscreen/www/AndroidFullScreen.js",
        "pluginId": "cordova-plugin-fullscreen",
        "clobbers": [
            "AndroidFullScreen"
        ]
    },
    {
        "id": "cordova-plugin-splashscreen.SplashScreen",
        "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
        "pluginId": "cordova-plugin-splashscreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    },
    {
        "id": "cordova-plugin-statusbar.statusbar",
        "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
        "pluginId": "cordova-plugin-statusbar",
        "clobbers": [
            "window.StatusBar"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.robobloq.cordovaplugin.hotpatch": "1.0-dev",
    "cordova-custom-config": "4.0.2",
    "cordova-plugin-compat": "1.1.0",
    "cordova-plugin-ble-central": "1.1.4",
    "cordova-plugin-crosswalk-webview": "2.3.0",
    "cordova-plugin-fullscreen": "1.1.0",
    "cordova-plugin-splashscreen": "4.1.0",
    "cordova-plugin-statusbar": "2.2.3",
    "cordova-plugin-whitelist": "1.3.2"
};
// BOTTOM OF METADATA
});