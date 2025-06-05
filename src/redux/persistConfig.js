import AsyncStorage from '@react-native-async-storage/async-storage';

export const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['savedFacts', 'settings', 'score', 'lives'],
};
