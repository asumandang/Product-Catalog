import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'product-catalog',
  webDir: '../../dist/apps/product-catalog',
  bundledWebRuntime: false,
  server: {
    androidScheme: 'https',
  },
};

export default config;
