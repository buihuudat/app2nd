import React from 'react';
import {PostProductType} from '../../../constants/types/postProductType';
import {ScrollView, View} from 'react-native';
import {RefreshControl} from 'react-native-gesture-handler';
import NoOrder from '../../../components/NoOrder';
import PostItem from './PostItem';

interface Props {
  posts: Array<PostProductType>;
  refreshing: boolean;
  onRefresh: () => void;
}

const ShowPost = (props: Props) => {
  const {posts, refreshing, onRefresh} = props;
  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}>
        {posts.length ? (
          posts.map(post => <PostItem {...post} key={post._id} />)
        ) : (
          <NoOrder />
        )}
      </View>
    </ScrollView>
  );
};

export default ShowPost;
