import { CabooseSDK, PluginEvents } from '@caboosemedia/sdk'

const helloworld = new CabooseSDK({
    id: 'caboose-plugin-template',
});

helloworld.on(PluginEvents.READY, () => {
    console.log('Hello, world!');
});

export default helloworld;