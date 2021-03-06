import {Injectable, Provider} from 'angular2/core'
import {window} from 'angular2/src/facade/browser';
import {unimplemented} from 'angular2/src/facade/exceptions';

function _window(): Window {
  return window
}

export abstract class WINDOW {
  get nativeWindow(): Window {
      return unimplemented();
  }
}

class WindowRef_ extends WINDOW {
    constructor() {
        super();
    }
    get nativeWindow(): Window {
        return _window();
    }
}

export const WINDOW_PROVIDERS = [
    new Provider(WINDOW, {useClass: WindowRef_}),
];
