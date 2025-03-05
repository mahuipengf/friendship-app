import {
    headImg_1,
    headImg_2,
    instantImg_1_1,
    instantImg_1_2,
    instantImg_1_3,
    instantImg_2_1,
    instantImg_2_2,
    instantImg_2_3,
} from './img/index';

export const MockFollowInfoList = [{
    name: '金金小张', // 名称
    headImg: headImg_1, // 头像
    involved: '1', // 
    follow: '1',
    followed: '1', // 被关注数量
    followStatus: true, // 关注状态
    followStatusText: '已关注',
    followStatusColor: '#f00',
    instantText: '', // 关注发布的文案
    instantList: [
        instantImg_1_1,
        instantImg_1_2,
        instantImg_1_3,] // 上传图片列表 max 6
  },
  {
    name: 'DDL展示',
    headImg: headImg_2,
    involved: '1',
    follow: '1',
    followed: '1',
    followStatus: true,
    followStatusText: '已关注',
    followStatusColor: '#f00',
    instantText: '',
    instantList: [
        instantImg_2_1,
        instantImg_2_2,
        instantImg_2_3,]
  },
 
]