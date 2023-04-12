//test17.html
'use strict';

//오늘날짜
const today = new Date();
const year = today.getFullYear(); //Fullyear 연도 4자리
const month = today.getMonth()+1; //월(0~11>배열개념<) 기존월보다 -1됨
const date = today.getDate();
const hour = today.getHours();
const minute = today.getMinutes();
const second = today.getSeconds();

const yymmdd = year +"-"+month+"-"+date+" "+hour+":"+minute+":"+second;


//표준날짜 출력
function fCheck1(){
  console.log("표준날짜 : " +today);
  demo.innerHTML= today
}
function fCheck2(){
  console.log("편집날짜 : " +yymmdd);
  demo.innerHTML= yymmdd
}
//편집날짜(요일) 출력 : 0(일), 1(월),2(화),3(수),4(목)...
function fCheck3(){
  let str = today.getDay();
  let week=['일','월','화','수','목','금','토'];
  let day = week[str]+"요일";
  demo.innerHTML=day + "요일";
}
//월말일
function fCheck4(){
  let mon=prompt("말일을 출력할 년-월을 입력하세요(yyyy-mm)");
  
  let temp=mon.split("-");
  let yy=temp[0];
  let mm=temp[1];

  let str = new Date(yy,mm,0); //new date(년,월,일,시,분,초);
  let strDate = str.getFullYear() + "-";
  strDate+= str.getMonth()+1 + "-";
  strDate+= str.getDate();
  strDate="해당 월의 마지막 일자?" + strDate;
  demo.innerHTML= strDate;
}