const xAxisData = [
  { name: "Jan", sale: 112_000 },
  { name: "Feb", sale: 99_000 },
  { name: "Mar", sale: 77_000 },
  { name: "Apr", sale: 85_000 },
  { name: "May", sale: 87_700 },
  { name: "Jun", sale: 110_500 },
  { name: "Jul", sale: 120_550 },
  { name: "Agu", sale: 11_440 },
  { name: "Sep", sale: 19_200 },
  { name: "Oct", sale: 56_000 },
  { name: "Nov", sale: 66_666 },
  { name: "Dec", sale: 112_112 },
];

const sendData = (datas, tableName) => {
  datas.forEach((data) => {
    fetch(
      `https://cms-panel-54050-default-rtdb.firebaseio.com/${tableName}.json`,
      {
        method: "POST",
        body: JSON.stringify(data),
      }
    ).then((res) => console.log(res));
    // .then((info) => console.log(info));
  });
};

const newJoinUsers = [
  {
    id: 1,
    name: "AmirHossein Nouri",
    title: "Web developer",
    img: "./public/images/avatar.png",
  },
  {
    id: 2,
    name: "Ali Ahmadi",
    title: "backEnd developer",
    img: "./public/images/avatar2.jfif",
  },
  {
    id: 3,
    name: "Hasan Azizi",
    title: "SEO Eng",
    img: "./public/images/avatar3.jfif",
  },
  {
    id: 4,
    name: "Maral Shams",
    title: "Designer",
    img: "./public/images/avatar5.jfif",
  },
];
export { xAxisData, newJoinUsers };

sendData(newJoinUsers, "newJoinUsers");
sendData(xAxisData, "xAxisData");
