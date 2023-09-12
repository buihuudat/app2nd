import React, {useState} from 'react';
import {
  ActivityIndicator,
  RefreshControl,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import colors from '../constants/colors';
import {Header} from 'react-native-elements';
import {FlatList} from 'react-native-gesture-handler';
import {PostProductType} from '../constants/types/postProductType';
import {darkmode} from '../utils/handlers/getDarkmode';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../RootStack';
import CategoryDetailItem from '../components/CategoryDetailItem';

const Favorite = () => {
  const [refreshing, setRefreshing] = useState(false);

  const isLoading = false;
  const posts: PostProductType[] = [];

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const onRefresh = () => {};
  return (
    <View>
      <StatusBar barStyle={darkmode} />
      <Header
        leftComponent={{
          icon: 'chevron-left',
          color: colors.DEFAULT_WHITE,
          onPress: () => navigation.goBack(),
        }}
        centerComponent={{
          text: 'Tin đã lưu',
          style: {fontSize: 20, color: colors.DEFAULT_WHITE},
        }}
        backgroundColor={colors.DEFAULT_BLUE}
      />

      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <View style={styles.mainContainer}>
          {isLoading ? (
            <ActivityIndicator size={'large'} color={colors.DEFAULT_BLUE} />
          ) : posts.length > 0 ? (
            <FlatList
              data={posts}
              numColumns={1}
              keyExtractor={item => item._id as string}
              renderItem={({item}) => (
                <CategoryDetailItem
                  post={item}
                  navigate={() =>
                    navigation.navigate('PostDetails', {post: item})
                  }
                />
              )}
            />
          ) : (
            <Text style={{textAlign: 'center', padding: 5, fontSize: 20}}>
              Chưa có tin lưu
            </Text>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default Favorite;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundCurvedContainer: {
    flexDirection: 'row',
    backgroundColor: colors.DEFAULT_BLUE,
    height: 70,
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    alignSelf: 'center',
    zIndex: -1,
    paddingHorizontal: 10,
  },
  mainContainer: {
    marginHorizontal: 10,
  },

  title: {
    marginTop: 20,
    fontSize: 19,
    fontWeight: '600',
    color: colors.DEFAULT_WHITE,
  },
});
