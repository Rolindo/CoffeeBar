// pages/menu/menu.js
Page({
  data: {
    array: [
      "/images/banner/menubanner1.jpg",
      "/images/banner/menubanner2.jpg",
      " /images/banner/menubanner3.jpg"
    ],
    indicatorDots: false,
    autoplay: true,
    circular: true,
    number: 0,
    navList: [{
        id: "0",
        c_name: '人气Top',
        list: [{
            id: 1,
            url: '/images/menu/1-1.jpg',
            goodsName: '拿铁',
          },
          {
            id: 2,
            url: '/images/menu/1-1.jpg',
            goodsName: '桃桃芝士红宝石茶',
          },
          {
            id: 3,
            url: '/images/menu/1-1.jpg',
            goodsName: '咖啡风味安慕希',
          },
          {
            id: 4,
            url: '/images/menu/1-1.jpg',
            goodsName: '陨石拿铁',
          },
          {
            id: 5,
            url: '/images/menu/1-1.jpg',
            goodsName: '冲绳拿铁',
          },
        ]
      },
      {
        id: "1",
        c_name: '大师咖啡',
        list: [{
            id: 1,
            url: '/images/menu/1-1.jpg',
            goodsName: '冲绳黑糖拿铁',
          },
          {
            id: 2,
            url: '/images/menu/1-1.jpg',
            goodsName: '陨石拿铁',
          },
          {
            id: 3,
            url: '/images/menu/1-1.jpg',
            goodsName: '拿铁',
          },
          {
            id: 4,
            url: '/images/menu/1-1.jpg',
            goodsName: '香草拿铁',
          },
          {
            id: 5,
            url: '/images/menu/1-1.jpg',
            goodsName: '焦糖拿铁',
          },
        ]
      },
      {
        id: "2",
        c_name: '小鹿茶精选',
        list: [{
            id: 1,
            url: '/images/menu/1-1.jpg',
            goodsName: '标准美式',
          },
          {
            id: 2,
            url: '/images/menu/1-1.jpg',
            goodsName: '加浓美式',
          },
          {
            id: 3,
            url: '/images/menu/1-1.jpg',
            goodsName: '焦糖标准美式',
          },
          {
            id: 4,
            url: '/images/menu/1-1.jpg',
            goodsName: '焦糖加浓美式',
          },
          {
            id: 5,
            url: '/images/menu/1-1.jpg',
            goodsName: '银河气泡美式',
          },
        ]
      },
      {
        id: "3",
        c_name: '瑞纳冰',
        list: [{
            id: 1,
            url: '/images/menu/1-1.jpg',
            goodsName: '楽岛桃桃冰',
          },
          {
            id: 2,
            url: '/images/menu/1-1.jpg',
            goodsName: '巧克力瑞纳冰',
          },
          {
            id: 3,
            url: '/images/menu/1-1.jpg',
            goodsName: '抹茶瑞纳冰',
          },
          {
            id: 4,
            url: '/images/menu/1-1.jpg',
            goodsName: '卡布奇诺瑞纳冰',
          },
          {
            id: 5,
            url: '/images/menu/1-1.jpg',
            goodsName: '咖啡瑞纳冰',
          },
        ]
      },
      {
        id: "4",
        c_name: '鲜榨果蔬汁',
        list: [{
            id: 1,
            url: '/images/menu/1-1.jpg',
            goodsName: 'NFC鲜榨橙汁',
          },
          {
            id: 2,
            url: '/images/menu/1-1.jpg',
            goodsName: 'NFC鲜榨西柚汁',
          },
          {
            id: 3,
            url: '/images/menu/1-1.jpg',
            goodsName: '猕猴桃复合果汁',
          },
          {
            id: 4,
            url: '/images/menu/1-1.jpg',
            goodsName: 'NFC鲜榨蓝莓草莓混合果汁',
          },
          {
            id: 5,
            url: '/images/menu/1-1.jpg',
            goodsName: 'NFC鲜榨芒果汁',
          },
        ]
      },
      {
        id: "5",
        c_name: '经典饮品',
        list: [{
            id: 1,
            url: '/images/menu/1-1.jpg',
            goodsName: '巧克力',
          },
          {
            id: 2,
            url: '/images/menu/1-1.jpg',
            goodsName: '纯牛奶',
          },
          {
            id: 3,
            url: '/images/menu/1-1.jpg',
            goodsName: '巴黎水330ml',
          },
          {
            id: 4,
            url: '/images/menu/1-1.jpg',
            goodsName: '小红莓苏打水',
          },
          {
            id: 5,
            url: '/images/menu/1-1.jpg',
            goodsName: '苏打水',
          },
        ]
      },
      {
        id: "6",
        c_name: '健康轻食',
        list: [{
            id: 1,
            url: '/images/menu/1-1.jpg',
            goodsName: '京味烤鸭鲜蔬卷',
          },
          {
            id: 2,
            url: '/images/menu/1-1.jpg',
            goodsName: '夏威夷菠萝火腿卷',
          },
          {
            id: 3,
            url: '/images/menu/1-1.jpg',
            goodsName: '火腿芝士羊角',
          },
          {
            id: 4,
            url: '/images/menu/1-1.jpg',
            goodsName: '鸡肉卷',
          },
          {
            id: 5,
            url: '/images/menu/1-1.jpg',
            goodsName: '老北京鸡肉卷',
          },
        ]
      }
    ],
    rightViewId: '',
    currentIndex: 0
  },
  swiperFn(event) {
    this.setData({
      number: event.detail.current
    })
  },
  // 点击左侧导航-滑动到右侧相对应的区域
  changeMenu(event) {
    // console.log(event.currentTarget.datasetid);
    let rightViewId = event.currentTarget.dataset.id;
    let currentIndex = event.currentTarget.dataset.i;
    this.setData({
      rightViewId,
      currentIndex
    })
  },
  // 滑动到右侧固定的区域,显示左侧对应的高光区域
  getScroll(event) {
    let that = this;
    let sTop = event.detail.scrollTop; //通过event事件获取右侧菜单,滚到顶部,隐藏部分的高度。
    // 拿到数组
    let navList = that.data.navList;
    let sumHeight = 0; //存放每个菜单和菜单的高度
    for (let index in navList) {
      // 获取数组数量
      index = navList[index];
      let size = index.list.length;
      sumHeight += 4 + size * 30;
      if (sTop <= sumHeight) {
        let id = index.id;
        this.setData({
          currentIndex: id
        })
        break;
      }
    }
  }
})