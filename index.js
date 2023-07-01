const dateLeave = document.querySelector("#dateLeave")
const dateReturn = document.querySelector("#dateReturn")

const dateLeaveText = document.querySelector("#date-leave-text")
const dateToText = document.querySelector("#date-to-text")

const btnMobile = document.querySelector("#btnMobile")

const listNav = document.querySelector("#listNav")

const getFormatDate = (date) => {
  const givenDate = date.toString()

  const dayOfWeek = givenDate.substring(0, 3)
  const day = givenDate.substring(8, 10)
  const month = givenDate.substring(4, 7)

  return `${day} ${month}, ${dayOfWeek}`
}

const setTodayDate = () => {
  const todayDate = {
    day: new Date().getDate(),
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear(),
  }
  const formatedTodayDate = `${todayDate.year}-${
    todayDate.month < 10 ? `0${todayDate.month}` : `${todayDate.month}`
  }-${todayDate.day < 10 ? `0${todayDate.day}` : `${todayDate.day}`}`
  dateLeave.setAttribute("min", formatedTodayDate)
  dateReturn.setAttribute("min", formatedTodayDate)
  dateLeave.value = formatedTodayDate

  const date = new Date().toString()

  dateLeaveText.innerText = getFormatDate(date)
}
setTodayDate()

const handleDateChange = (dateElement, e) => {
  if (e.target === dateLeave) dateReturn.setAttribute("min", e.target.value)
  if (e.target === dateReturn) dateLeave.setAttribute("max", e.target.value)

  const date = e.target.valueAsDate.toString()

  dateElement.innerText = getFormatDate(date)
}

const handleMobileMenu = () => {
  listNav.classList.toggle("show")
}

dateLeaveText.addEventListener("click", () => dateLeave.showPicker())
dateToText.addEventListener("click", () => dateReturn.showPicker())

dateLeave.addEventListener("input", (e) => handleDateChange(dateLeaveText, e))
dateReturn.addEventListener("input", (e) => handleDateChange(dateToText, e))

btnMobile.addEventListener("click", handleMobileMenu)
