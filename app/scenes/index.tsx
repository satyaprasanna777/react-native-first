import React from 'react';
import {Scene} from 'react-native-router-flux';

import {
  APP_LAUNCH_SCENE,
  APP_SCENE,
  // SAMPLE_SCENE,
  SIGNIN_SCENE,
} from '../constants/NavigationConstants';

import LaunchScene from './LaunchScene';
import AppScene from './AppScene';
// import {SampleScene} from './SampleScene';
import {SigninScene} from './SigninScene';

const scenes = [
  <Scene key={APP_LAUNCH_SCENE} component={LaunchScene} />,
  // <Scene key={SAMPLE_SCENE} component={SampleScene} />,
  <Scene key={SIGNIN_SCENE} component={SigninScene} />,
  <Scene initial key={APP_SCENE} component={AppScene} />,
];

const modalScenes: any = [];

export {scenes as default, modalScenes};
