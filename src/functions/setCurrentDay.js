const setCurrentDay = (extra_day) => {
  const setCurrentDate = new Date();
  setCurrentDate.setDate(setCurrentDate.getDate() + extra_day)
  let today = setCurrentDate.getDate();
  let month = setCurrentDate.getMonth() + 1;
  let year = setCurrentDate.getFullYear();
  let selectedDate = `${year} ${month} ${today}`;
  return selectedDate;
}

export default setCurrentDay;