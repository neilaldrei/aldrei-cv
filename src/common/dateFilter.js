export default date => {
  const months = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  let toFormat = new Date(date.toDate());
  let d = toFormat.getDate();
  let m = months[toFormat.getMonth()];
  let y = toFormat.getFullYear();

  return `${m} ${d}, ${y}`;
};