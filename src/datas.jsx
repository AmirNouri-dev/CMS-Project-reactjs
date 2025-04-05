import { useEffect } from "react";
const products = [
  { id: 1, title: "ASUS", avatar: "./public/images/laptop.jfif", price: 890 },
  { id: 2, title: "HP", avatar: "./public/images/laptop.jfif", price: 990 },
  { id: 3, title: "DELL", avatar: "./public/images/laptop.jfif", price: 1120 },
  { id: 4, title: "LENOVO", avatar: "./public/images/laptop.jfif", price: 890 },
  {
    id: 5,
    title: "IPHONE 11",
    avatar: "./public/images/iphone11.jfif",
    price: 390,
  },
  {
    id: 6,
    title: "IPHONE 13",
    avatar: "./public/images/iphone13.jfif",
    price: 490,
  },
  {
    id: 7,
    title: "Samsung A55",
    avatar: "./public/images/samsungA55.jfif",
    price: 299,
  },
  { id: 8, title: "Xiaomi", avatar: "./public/images/xiaomi.jfif", price: 259 },
  { id: 9, title: "PS4", avatar: "./public/images/ps4.jfif", price: 999 },
  { id: 10, title: "PS5", avatar: "./public/images/ps5.jfif", price: 1199 },
  {
    id: 11,
    title: "XBOX-One",
    avatar: "./public/images/xboxOne.jfif",
    price: 890,
  },
];

const userRows = [
  {
    id: 1,
    userName: "John Doe",
    avatar: "./public/images/avatar.png",
    status: "active",
    transAction: "$129.52",
    email: "example@yahoo.com",
  },
  {
    id: 2,
    userName: "John Doe",
    avatar: "./public/images/avatar.png",
    status: "not-active",
    transAction: "$129.52",
    email: "example@yahoo.com",
  },
  {
    id: 3,
    userName: "Amir Nouri",
    avatar: "./public/images/avatar.png",
    status: "not-active",
    transAction: "$129.52",
    email: "example@yahoo.com",
  },
  {
    id: 4,
    userName: "Amir Nouri",
    avatar: "./public/images/avatar.png",
    status: "active",
    transAction: "$129.52",
    email: "example@yahoo.com",
  },
  {
    id: 5,
    userName: "Amir Nouri",
    avatar: "./public/images/avatar.png",
    status: "active",
    transAction: "$129.52",
    email: "example@yahoo.com",
  },
  {
    id: 6,
    userName: "John Doe",
    avatar: "./public/images/avatar.png",
    status: "not-active",
    transAction: "$129.52",
    email: "example@yahoo.com",
  },
  {
    id: 7,
    userName: "Omid Rohani",
    avatar: "./public/images/avatar.png",
    status: "not-active",
    transAction: "$129.52",
    email: "example@yahoo.com",
  },
  {
    id: 8,
    userName: "Farzad Farzin",
    avatar: "./public/images/avatar.png",
    status: "active",
    transAction: "$129.52",
    email: "example@yahoo.com",
  },
  {
    id: 9,
    userName: "Sohrab Sepehri",
    avatar: "./public/images/avatar.png",
    status: "active",
    transAction: "$129.52",
    email: "example@yahoo.com",
  },
  {
    id: 10,
    userName: "John Doe",
    avatar: "./public/images/avatar.png",
    status: "active",
    transAction: "$129.52",
    email: "example@yahoo.com",
  },
];

const transActions = [
  {
    id: 1,
    customer: "Ali Davoodi",
    amount: 246,
    img: "./public/images/avatar.png",
    status: "Pending",
    date: "20 Feb 2025",
  },
  {
    id: 2,
    customer: "Ahmad Davoodi",
    amount: 333,
    img: "./public/images/avatar.png",
    status: "Declined",
    date: "20 Jan 2025",
  },
  {
    id: 3,
    customer: "Bahram Amiri",
    amount: 542,
    img: "./public/images/avatar.png",
    status: "Approved",
    date: "20 Oct 2024",
  },
  {
    id: 4,
    customer: "Koroush Daneshvar",
    amount: 89,
    img: "./public/images/avatar.png",
    status: "Approved",
    date: "15 Sep 2024",
  },
];

// const xAxisData = [
//   { name: "Jan", sale: 112_000 },
//   { name: "Feb", sale: 99_000 },
//   { name: "Mar", sale: 77_000 },
//   { name: "Apr", sale: 85_000 },
//   { name: "May", sale: 87_700 },
//   { name: "Jun", sale: 110_500 },
//   { name: "Jul", sale: 120_550 },
//   { name: "Agu", sale: 11_440 },
//   { name: "Sep", sale: 19_200 },
//   { name: "Oct", sale: 56_000 },
//   { name: "Nov", sale: 66_666 },
//   { name: "Dec", sale: 112_112 },
// ];
// const newJoinUsers = [
//   {
//     id: 1,
//     name: "AmirHossein Nouri",
//     title: "Web developer",
//     img: "./public/images/avatar.png",
//   },
//   {
//     id: 2,
//     name: "Ali Ahmadi",
//     title: "backEnd developer",
//     img: "./public/images/avatar2.jfif",
//   },
//   {
//     id: 3,
//     name: "Hasan Azizi",
//     title: "SEO Eng",
//     img: "./public/images/avatar3.jfif",
//   },
//   {
//     id: 4,
//     name: "Maral Shams",
//     title: "Designer",
//     img: "./public/images/avatar5.jfif",
//   },
// ];
// export { xAxisData, newJoinUsers };
export { transActions, userRows };

const sendData = (datas, tableName) => {
  const isDataSent = localStorage.getItem(`isDataSent_${tableName}`);

  if (isDataSent) {
    console.log(`Data for ${tableName} already sent.`);
    return;
  }
  datas.forEach((data) => {
    fetch(
      `https://cms-panel-54050-default-rtdb.firebaseio.com/${tableName}.json`,
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      localStorage.setItem(`isDataSent_${tableName}`, "true");
      console.log(res);
    });
    // .then((info) => console.log(info));
  });
};

// useEffect(() => {
// sendData(newJoinUsers, "newJoinUsers");
// sendData(xAxisData, "xAxisData");
// }, []);
