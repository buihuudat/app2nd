import React, {useMemo, useState} from 'react';
import {Text, View} from 'react-native';
import {Header} from 'react-native-elements';
import colors from '../../constants/colors';
import {Route, SceneMap, TabBar, TabView} from 'react-native-tab-view';
import ShowPost from './components/ShowPost';
import {
  PostProductStatusProps,
  PostProductType,
} from '../../constants/types/postProductType';

const routes: Array<Route> = [
  {key: '1', title: 'Hiển thị'},
  {key: '2', title: 'Chờ duyệt'},
  {key: '3', title: 'Từ chối'},
];

const RenderTabBar = (props: any) => (
  <TabBar
    {...props}
    indicatorStyle={{backgroundColor: colors.DEFAULT_YELLOW}}
    style={{backgroundColor: colors.DEFAULT_WHITE, width: '100%'}}
    renderLabel={({route}) => (
      <Text
        style={{
          fontSize: 14,
          fontWeight: '500',
          color: colors.DEFAULT_BLACK,
          textAlign: 'center',
        }}>
        {route.title}
      </Text>
    )}
  />
);

const PostManager = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [index, setIndex] = useState(0);

  const posts: Array<PostProductType> = [];
  const postFilter = useMemo(() => {
    return (type: PostProductStatusProps) =>
      posts.filter(post => post.status === type);
  }, [posts]);

  const handleRefresh = () => {};

  const renderScene = ({route}: {route: Route}) => {
    switch (route.key) {
      case '1':
        return (
          <ShowPost
            posts={postFilter(PostProductStatusProps.access)}
            refreshing={refreshing}
            onRefresh={handleRefresh}
          />
        );
      case '2':
        return (
          <ShowPost
            posts={postFilter(PostProductStatusProps.pending)}
            refreshing={refreshing}
            onRefresh={handleRefresh}
          />
        );
      case '3':
        return (
          <ShowPost
            posts={postFilter(PostProductStatusProps.done)}
            refreshing={refreshing}
            onRefresh={handleRefresh}
          />
        );
      default:
        return null;
    }
  };

  return (
    <View style={{flex: 1}}>
      <Header
        backgroundColor={colors.DEFAULT_BLUE}
        centerComponent={{
          text: 'Quản lý tin',
          style: {
            textAlign: 'center',
            fontSize: 20,
            fontWeight: '500',
            color: 'white',
          },
        }}
      />
      <TabView
        renderTabBar={props => <RenderTabBar {...props} />}
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        overScrollMode={'auto'}
      />
    </View>
  );
};

export default PostManager;
