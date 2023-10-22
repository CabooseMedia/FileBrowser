import { CabooseSDK } from '@caboosemedia/sdk'

export default class HelloWorld extends CabooseSDK {

    public async start() {
        console.log('Hello, world!');
    }

}