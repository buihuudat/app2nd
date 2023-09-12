import AsyncStorage from "@react-native-async-storage/async-storage";

type Key = "user";

const storageData = {
  getItem: async (key: Key) => {
    try {
      const item = await AsyncStorage.getItem(key);
      return item;
    } catch (error) {
      return null;
    }
  },

  setItem: async (key: Key, value: any) => {
    try {
      const item = await AsyncStorage.setItem(key, value);
      // if (!item) return null;
      return item;
    } catch (error) {
      return null;
    }
  },

  removeItem: async (key: Key) => {
    await AsyncStorage.removeItem(key);
  },

  logout: () => AsyncStorage.clear(),
};

export default storageData;
