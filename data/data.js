// data.js
const tariffs = [
  {
    id: 1,
    name: "Red START",
    price: 240,
    discont: 200,
    disconteMonth: 6,
    premium: {
      main: 140,
      migration: 110,
    },
    services: false,
    filling: {
      internet: { infinity: false, amount: 20 },
      minuteOther: { infinity: false, amount: 200 },
      minuteVodafone: true,
      minuteWorld: 0,
      sms: 200,
    },
    profit() {
      return (this.price - this.discont) * this.disconteMonth;
    },
  },
  {
    id: 2,
    name: "Red PRO",
    price: 330,
    discont: 250,
    disconteMonth: 6,
    premium: {
      main: 180,
      migration: 140,
    },
    services: false,
    filling: {
      internet: { infinity: false, amount: 50 },
      minuteOther: { infinity: false, amount: 400 },
      minuteVodafone: true,
      minuteWorld: 50,
      sms: 350,
    },
    profit() {
      return (this.price - this.discont) * this.disconteMonth;
    },
  },
  {
    id: 3,
    name: "Red UNLIM",
    price: 400,
    discont: 300,
    disconteMonth: 6,
    premium: {
      main: 180,
      migration: 140,
    },
    services: false,
    filling: {
      internet: { infinity: true, amount: 0 },
      minuteOther: { infinity: false, amount: 500 },
      minuteVodafone: true,
      minuteWorld: 75,
      sms: 400,
    },
    profit() {
      return (this.price - this.discont) * this.disconteMonth;
    },
  },
  {
    id: 4,
    name: "Red UNLIME PLUS",
    price: 470,
    discont: 350,
    disconteMonth: 6,
    premium: {
      main: 230,
      migration: 180,
    },
    services: true,
    filling: {
      internet: { infinity: true, amount: 0 },
      minuteOther: { infinity: false, amount: 600 },
      minuteVodafone: true,
      minuteWorld: 100,
      sms: 500,
    },
    profit() {
      return (this.price - this.discont) * this.disconteMonth;
    },
  },
  {
    id: 5,
    name: "Red UNLIME MAX",
    price: 575,
    discont: 430,
    disconteMonth: 6,
    premium: {
      main: 230,
      migration: 180,
    },
    services: true,
    filling: {
      internet: { infinity: true, amount: 0 },
      minuteOther: { infinity: false, amount: 800 },
      minuteVodafone: true,
      minuteWorld: 150,
      sms: 700,
    },
    profit() {
      return (this.price - this.discont) * this.disconteMonth;
    },
  },
  {
    id: 6,
    name: "Red ULTRA",
    price: 700,
    discont: 525,
    disconteMonth: 6,
    premium: {
      main: 230,
      migration: 180,
    },
    services: true,
    filling: {
      internet: { infinity: true, amount: 0 },
      minuteOther: { infinity: false, amount: 1000 },
      minuteVodafone: true,
      minuteWorld: 300,
      sms: 1000,
    },
    profit() {
      return (this.price - this.discont) * this.disconteMonth;
    },
  },
  {
    id: 7,
    name: "Red ULTRA VIP",
    price: 1500,
    discont: 1125,
    disconteMonth: 6,
    premium: {
      main: 230,
      migration: 180,
    },
    services: true,
    filling: {
      internet: { infinity: true, amount: 0 },
      minuteOther: { infinity: true, amount: 0 },
      minuteVodafone: true,
      minuteWorld: 750,
      sms: 2500,
    },
    profit() {
      return (this.price - this.discont) * this.disconteMonth;
    },
  },
];
