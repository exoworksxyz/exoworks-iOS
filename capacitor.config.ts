import { CapacitorConfig } from '@capacitor/cli'

const config: CapacitorConfig = {
  appId: 'com.exoworks.ios',
  appName: 'ExoWorks',
  webDir: 'out',
  server: {
    android: {
      allowMixedContent: true,
    },
    ios: {
      allowMixedContent: true,
    },
  },
  ios: {
    contentInset: 'automatic',
    scrollEnabled: true,
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      launchAutoHide: true,
      backgroundColor: '#000000',
      androidSplashResourceName: 'splash',
      androidScaleType: 'CENTER_CROP',
      showSpinner: false,
      iosSpinnerStyle: 'small',
      spinnerColor: '#6B3CFF',
    },
    StatusBar: {
      style: 'dark',
      backgroundColor: '#000000',
    },
  },
}

export default config


