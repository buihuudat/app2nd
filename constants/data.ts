import {ImageSourcePropType} from 'react-native';

export const sexData: string[] = ['Nam', 'Nữ', 'Khác'];

export interface CategoryType {
  id: string;
  source: ImageSourcePropType;
  title: string;
  type: string;
}

export const dataCateGories: CategoryType[] = [
  {
    id: '1',
    source: require('./images/categories/do-dien-tu.png'),
    title: 'Đồ điện tử',
    type: 'dientu',
  },
  {
    id: '2',
    source: require('./images/categories/cho-tot-xe.png'),
    title: 'Xe cộ',
    type: 'xeco',
  },
  {
    id: '3',
    source: require('./images/categories/do-van-phong.png'),
    title: 'Văn phòng',
    type: 'vanphong',
  },
  {
    id: '4',
    source: require('./images/categories/dich-vu-du-lich.png'),
    title: 'Dịch vụ,du lịch',
    type: 'dichvudulich',
  },
  {
    id: '5',
    source: require('./images/categories/noi-ngoai-that.png'),
    title: 'Gia dụng, nội thất',
    type: 'giadungnoithat',
  },
  {
    id: '6',
    source: require('./images/categories/thu-cung.png'),
    title: 'Thú cưng',
    type: 'thucung',
  },
  {
    id: '7',
    source: require('./images/categories/viec-lam.png'),
    title: 'Việc làm',
    type: 'vieclam',
  },
  {
    id: '8',
    source: require('./images/categories/thoi-trang-do-dung-ca-nhan.png'),
    title: 'Thời trang',
    type: 'thoitrang',
  },
  {
    id: '9',
    source: require('./images/categories/cho-tang-mien-phi.png'),
    title: 'Cho tặng miễn phí',
    type: 'free',
  },
  {
    id: '10',
    source: require('./images/categories/tat-ca-danh-muc.png'),
    title: 'Tất cả danh mục',
    type: 'all',
  },
];
export const filterCateGories = [
  'Đồ điện tử',
  'Xe cộ',
  'Văn phòng',
  'Dịch vụ,du lịch',
  'Gia dụng, nội thất',
  'Thú cưng',
  'Việc làm',
  'Thời trang',
  'Cho tặng miễn phí',
];

export interface ChatListType {
  id: number;
  content: string;
}

export const chatList: Array<ChatListType> = [
  {
    id: 1,
    content: 'Sản phẩm này còn không?',
  },
  {
    id: 2,
    content: 'Sản phẩm này có ship không?',
  },
  {
    id: 3,
    content: 'Sản phẩm này còn bảo hành không?',
  },
];
