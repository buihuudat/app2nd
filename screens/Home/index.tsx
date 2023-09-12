import React, {useCallback, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  RefreshControl,
  ScrollView,
  StatusBar,
  View,
} from 'react-native';
import {PostProductType} from '../../constants/types/postProductType';
import {CategoryType, dataCateGories} from '../../constants/data';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../RootStack';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {styles} from './styles';
import {banner1, banner2, banner3, banner4} from '../../constants/images';
import colors from '../../constants/colors';
import Swiper from 'react-native-swiper';
import Navbar from '../../components/Navbar';
import TitleContainer from '../../components/TitleContainer';
import CategoryItem from '../../components/CategoryItem';
import PostProductItem from '../../components/PostProductItem';

const Home = () => {
  const [refreshing, setRefreshing] = useState(false);

  const isLoading = false;
  const posts: Array<PostProductType> = [];

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const onRefresh = () => {};
  const handleViewCategory = useCallback(
    (item: CategoryType) => {
      navigation.navigate('Category', {
        posts: posts.filter(post => post.category === item.type),
      });
    },
    [posts],
  );

  const handleViewProduct = useCallback(
    (post: PostProductType) => {
      navigation.navigate('PostDetails', {post});
    },
    [posts],
  );

  return (
    <View style={styles.container}>
      <Navbar />
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <View style={{flex: 1, width: '100%', height: 120}}>
          <Swiper
            containerStyle={styles.wrapper}
            showsButtons={false}
            loop
            autoplay
            paginationStyle={false}
            showsPagination={false}>
            <View style={styles.slide}>
              <Image style={styles.image} source={banner1} />
            </View>
            <View style={styles.slide}>
              <Image style={styles.image} source={banner2} />
            </View>
            <View style={styles.slide}>
              <Image style={styles.image} source={banner3} />
            </View>
            <View style={styles.slide}>
              <Image style={styles.image} source={banner4} />
            </View>
          </Swiper>
        </View>

        <TitleContainer content="Khám phá danh mục" />
        <View style={styles.mainContainer}>
          <FlatList
            data={dataCateGories}
            horizontal={true}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
              <CategoryItem
                item={item}
                onViewCategory={() => handleViewCategory(item)}
              />
            )}
          />
        </View>

        <TitleContainer content="Tin dành cho bạn" />
        <View
          style={
            styles.mainContainer && {
              paddingBottom: 200,
              marginLeft: 'auto',
              marginRight: 'auto',
            }
          }>
          {isLoading ? (
            <ActivityIndicator size={'large'} color={colors.DEFAULT_BLUE} />
          ) : (
            <FlatList
              data={posts}
              numColumns={2}
              keyExtractor={item => item._id as string}
              renderItem={({item}) => (
                <PostProductItem
                  post={item}
                  onViewProduct={() => handleViewProduct(item)}
                />
              )}
            />
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
