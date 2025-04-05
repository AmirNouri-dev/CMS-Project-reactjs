import { useEffect } from "react";

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
export { transActions };

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
