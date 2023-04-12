//test18.html
'use strict';

//오늘날짜
const today = new Date();
const year = today.getFullYear(); //Fullyear 연도 4자리
const month = today.getMonth()+1; //월(0~11>배열개념<) 기존월보다 -1됨
const date = today.getDate();
const hour = today.getHours();
const minute = today.getMinutes();
const second = today.getSeconds();

let yymmdd = year +"-"+month+"-"+date+" "+hour+":"+minute+":"+second;


//표준날짜 출력
function fCheck1(){
  yymmdd=year +"-"+month+"-"+date
  document.getElementById("date1").value=yymmdd;
  demo.innerHTML= today
}
//날짜 비교하기 (isSameDay(날자형식1,날짜형식2));
function fCheck2(){
  let st = document.getElementById("date1").value;
  let end = document.getElementById("date2").value;
  const stDate =new Date(st);
  const endDate = new Date(end);
  let temp;

  if(isSameDay(stDate,endDate)) temp ="같다"
  else temp="다르다"

  demo.innerHTML="비교한 날짜는?" + temp;

}
