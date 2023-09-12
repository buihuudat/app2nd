import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import React from 'react';

export default function KeyboardView({children}: {children: React.ReactNode}) {
  return (
    <KeyboardAwareScrollView style={{flex: 1}} enableAutomaticScroll={true}>
      {children}
    </KeyboardAwareScrollView>
  );
}
