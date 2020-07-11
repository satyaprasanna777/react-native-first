import {Actions} from 'react-native-router-flux';
import {
  APP_LAUNCH_SCENE,
  SAMPLE_SCENE,
  SIGNIN_SCENE,
} from '../../constants/NavigationConstants';

export function goToLaunchScene(props = {}) {
  Actions.push(APP_LAUNCH_SCENE, props);
}

export function goToSampleScene(props = {}) {
  Actions.push(SAMPLE_SCENE, props);
}

export function goToSigninScene(props = {}) {
  Actions.push(SIGNIN_SCENE, props);
}
