"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sdk_1 = require("@caboosemedia/sdk");
const helloworld = new sdk_1.CabooseSDK({
    id: 'caboose-plugin-template',
});
helloworld.on(sdk_1.PluginEvents.READY, () => {
    console.log('Hello, world!');
});
exports.default = helloworld;
