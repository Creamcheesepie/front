//test1.js
'use strict'

function regexCheck(){
  //정규표현식 변수를 먼저 만들어 놓는다.
  const regex= /atom/g; //atom이라는 문자열이 포함되어 있다면 true, 아니면 false 반환
  const regex2= /mbc|kbs|sbs/g; //mbc or kbs or sbs 문자열을 포함하고 잇는디?
  const regex3= /홍길(동|순)/g;
  const regex4= /[a-z]/gm; //g //영문 소문자 포함하고 있는지?
  const regex5= /[^a-z]/gm; //g //영문 소문자만 포함하고 있는지?
  const regex6= /[A-Z]/gm; 
  const regex7= /[^A-Z]/gm; //영문 대문자만 포함하고 있는지?
  const regex8= /[0-9]/gm; //숫자? 
  const regex9= /[^A-Z]/gm; //수만?
  const regex10= /[가-힣]/gm; 
  const regex11= /[^가-힣]/gm; //수만?
  const regex12= /[a-zA-Z0-9]/gm; //영문자/숫자? 
  const regex13= /[^a-zA-Z0-9]/gm; 
  const regex14= /[^a-zA-Z0-9_]/gm; //영문자와 숫자와 밑줄만 포함하고 있는지? 
  
  const regex21= /\./g; //.을 포함하고 있는지?
  const regex22= /\d/g; //숫자를 포함하고 있는지?
  const regex23= /\D/g; //숫자를 포함하고 있지 않은지?
  const regex24= /\w/g; //영문자, 숫자, _을 포함하고 있는지?
  const regex25= /\W/g; //영문자, 숫자, _을 포함하고 있지 않은지?
  const regex26= /\s/g; //공백을 포함하고 있는지??

  //와일드카드 : 1개글자만 포함유무[?] 복수개의 문자 포함유무는[+,*]
  const regex31= /홍길동?이/g; 
  const regex32= /홍길동+/g; //홍길동의 동 1개이상?
  const regex33= /홍길동*/g; //홍길동의 동 0개이상?

  let content = document.getElementById("content").value.trim();

  if(content == ""){
  alert("문자열을 입력하세요.");
  }
  else if(regex31.test(content))alert("홍길동'동'을 포함하고 잇습니다");
  else alert("조건에 안맞아용")
  // else if(!regex24.test(content))alert("아이디는 알파벳 대,소문자, 숫자, 밑줄만 가능합니다.");
  // else if(regex13.test(content))alert("영문자나 숫자만 포함하고 있지 않습니다.");
  // else if(!regex12.test(content))alert("영문자나 숫자를 포함하고 있지 않습니다.");
  // else if(regex11.test(content))alert("한글외 다른 문자를 포함하고 있습니다.");
  // else if(!regex10.test(content))alert("한글을 포함하고 있지 않습니다.");
  // else if(!regex8.test(content))alert("수를 포함하고 있지 않습니다.");
  // else if(regex7.test(content))alert("영문 대문자만 포함하고 있지 않습니다.");
  // else if(!regex6.test(content))alert("영문 대문자를 포함하고 있지 않습니다.");
  // else if(regex5.test(content))alert("영문 소문자 외 다른 문자가 있습니다.");
  // else if(!regex4.test(content))alert("영문 소문자를 포함하고 있지 않습니다.");
  // else if(!content.match(regex3))alert("홍길동/홍길순이 아닙니다.");
  // else if(!content.match(regex2))alert("방송국을 선택하세용");
  // if(!content.match(regex))alert("atom문자열을 포함하지 않습니다.")

}