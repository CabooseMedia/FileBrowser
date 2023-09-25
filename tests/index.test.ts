import { describe, expect, test, jest } from '@jest/globals';
import { PluginEvents } from '@caboosemedia/sdk';

import plugin from '../lib/index.js'

describe('on ready', () => {
    test('print hello world', () => {
        const consolelog = jest.spyOn(global.console, 'log');

        plugin.emit(PluginEvents.READY);

        expect(consolelog).toHaveBeenCalledWith('Hello, world!');

        consolelog.mockRestore();
    });
    }
);