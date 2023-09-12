import {Appearance, StatusBarStyle} from 'react-native';

export const colorScheme = Appearance.getColorScheme();

export const darkmode = (colorScheme?.toString() + '-content') as
  | StatusBarStyle
  | null
  | undefined;
