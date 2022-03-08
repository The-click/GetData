function getDayInfo(data){
    const daysWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    const monthName = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];

    data = data.split('.');
    const currentDate = new Date(+data[2], +data[1] - 1, +data[0]);

    const dayWeek = daysWeek[currentDate.getDay()];
    const month = monthName[currentDate.getMonth()];

    const daysCount = Math.ceil((currentDate - (new Date(+data[2], 0))) / 86400000);
    const weekCount = Math.ceil(((daysCount - 1) / 7) + 1);

  
    return `${dayWeek}, ${weekCount} неделя ${month} ${data[2]} года`;
}




document.querySelector('input[name=submit]').addEventListener('click', startFunc)

function startFunc(e){
  // e.preventDefault();
  let errorValue = false;
  let day = document.querySelector('input[name=day]').value;
  if (!(day >= 1 && day <= 31)) errorValue = true;
  let month = document.querySelector('input[name=month]').value;
  if (!(month >= 1 && month <= 12)) errorValue = true;
  let year = document.querySelector('input[name=year]').value;
  if (!( year >= 1970 && year <= 3000)) errorValue = true;

  if (errorValue){
    alert("Некорректное значение");
    return ;
  }
  document.querySelector('.answer-in').innerHTML = getDayInfo(`${day}.${month}.${year}`);  


}




  