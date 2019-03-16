
/*基础配置*/
const config={
  //服务器api 全局设置   默认为空，更换服务器可在这设置api
  baseUrl:"/api",
  mapKey:"",
  siteTitle:"金奔腾车联网云服务平台",   //平台title设置


  /*
  设置循环请求时间  单位（ms）
  setIntervalUser : 平台用户信息
  setIntervalReport : 平台检测信息
  setIntervalOrderToday : 今日订单数据
  setIntervalOrder : 平台订单数据
  */
  defaultCity:"南宁",         //设置默认当前城市

  mapDefault:["广西","北京"],  //设置地图默认显示的两个地区

  allDefault:"全国",           //设置全国

  lineEchartCity:"全国",       //设置曲线图读取的数据，可设置为其他省份



  isSetInterval:true,  //是否开启自动请求


  setIntervalUser:600000,
  setIntervalReport:600000,
  setIntervalOrderToday:600000,
  setIntervalOrder:600000,

  setNumber:3,
}