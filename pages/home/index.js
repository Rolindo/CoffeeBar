// pages/home/index.js
Page({

 
  data: {
   array:[
     "/images/banner/baner1.jpg",
     "/images/banner/baner2.jpg",
    " /images/banner/baner3.jpg",
     " /images/banner/baner4.jpg"
   ],
   array2:{
     item0:{
       src:"/images/home/card01.jpg",
        text:"给特别的你"
     },
     item1: {
       src: "/images/home/card02.jpg",
       text: "我想对你说"
     },
     item2: {
       src: "/images/home/card03.jpg",
       text: "勇敢爱"
     },
     item3: {
       src: "/images/home/card04.jpg",
       text: "一个人的精彩"
     },
     item4: {
       src: "/images/home/card05.jpg",
       text: "萌萌哒"
     },
     item5: {
       src: "/images/home/card06.jpg",
       text: "友谊万岁"
     },
     item6: {
       src: "/images/home/card07.jpg",
       text: "恋人未满"
     },
     item7: {
       src: "/images/home/card08.jpg",
       text: "生日快乐"
     }
   },
   array3:[
     "/images/banner/ban1.jpg",
     "/images/banner/ban2.jpg",
     " /images/banner/ban3.jpg",
     " /images/banner/ban4.jpg",
     " /images/banner/ban5.jpg"
   ],
    array4: {
      item0: {
        src: "/images/home/newPro1.jpg",
        text: "卡布奇诺"
      },
      item1: {
        src: "/images/home/newPro2.jpg",
        text: "白咖啡"
      },
      item2: {
        src: "/images/home/newPro3.jpg",
        text: "摩卡咖啡"
      },
      item3: {
        src: "/images/home/newPro4.jpg",
        text: "爱尔兰咖啡"
      },
      item4: {
        src: "/images/home/newPro5.jpg",
        text: "甜品咖啡"
      },
      item5: {
        src: "/images/home/newPro6.jpg",
        text: "意大利咖啡"
      },
      item6: {
        src: "/images/home/newPro7.jpg",
        text: "拿铁咖啡"
      },
      item7: {
        src: "/images/home/newPro8.jpg",
        text: "中式咖啡"
      }
    },
    indicatorDots:false,
    autoplay:true,
    circular:true,
    number:0,

    indicatorDots1: true,
    autoplay1: false,
    circular1: true,
  },
  // 获取当前的索引值
  swiperFn(event){
    this.setData({
      number: event.detail.current
    })
  }
})