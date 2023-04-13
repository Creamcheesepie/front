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
  // yymmdd=year +"-"+month+"-"+date
  document.getElementById("date1").value=yymmdd;
  demo.innerHTML= yymmdd
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
//날짜 비교하기(경과된 시간으로 비교하기)
function fCheck3(){
  let st = document.getElementById("date1").value;
  let end = document.getElementById("date2").value;

  const stDate =new Date(st);
  const endDate = new Date(end);
  
  //getTime() : 1/1000초
  let temp = endDate.getTime() - stDate.getTime();
  temp = temp / (60*60*26*1000) // 1/1000초 단위를 날짜로 변환


  demo.innerHTML="비교한 날짜는? : " + temp.toFixed() + "일 차이가 납니다";

}

function isSameDay(stDate, endDate){
  return stDate.getFullYear() === endDate.getFullYear() &&
  stDate.getMonth() === endDate.getMonth() &&
  stDate.getDate() === endDate.getDate();
}
