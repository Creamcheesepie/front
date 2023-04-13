// 유효성 검사용 정규식 작성부.
const regexID = /[a-zA-Z0-9_]{4,20}/g;
const regexPW = /[\w]{7}[\W]{1}/g;
const regexName = /[a-zA-Z가-힣]{1}/g;
const regexNick = /[가-힣ㄱ-ㅎ]{2}/g;
const regexEmail = /[\w]+@[\w]+[.]{1}[\w]/g;
const regexURL = /[https://][\w]+[.][\w]/g;
const regexTEL = /[0-9]{3}-[0-9]{3,4}-[0-9]{4}/g;
const regexJUMIN = /[0-9]{6}-[0-9]{7}/


//다음 페이지 이동 위한 변수
let idcheck =false;
let pwcheck =false;

//정규식 사용해서 유효성 검사하는 함수부
function IdCheck(){
    let id=document.getElementById("id").value.trim();
    if(id =='') alert("아이디를 입력해주세요.");
    else if(regexID.test(id)){
        alert("아이디가 올바르게 입력했습니다.");
        return true;
    }
    else if(!regexID.test(id)){
        alert("아이디를 틀리게 입력했습니다. 다시 입력해 주세요.");
        document.getElementById("id").focus();
        return false;
    }
}

function PwCheck(){
    let pw =document.getElementById("pw").value.trim();
    if(pw =='') alert("비밀번호를 입력해주세요.");
    else if(regexPW.test(pw)){
        alert("비밀번호가 올바르게 입력했습니다.");
        return true;
    }
    else if(!regexPW.test(pw)){
        alert("비밀번호를 틀리게 입력했습니다. 다시 입력해 주세요. 영문,숫자, 특수문자 하나 이상 포함되어야합니다");
        document.getElementById("pw").focus();
    }

}
function NameCheck(){
    let name =document.getElementById("pw").value.trim();
    if(name =='') alert("비밀번호를 입력해주세요.");
    else if(regexName.test(name)){
        alert("비밀번호가 올바르게 입력했습니다.");
        return true;
    }
    else if(!regexName.test(name)){
        alert("비밀번호를 틀리게 입력했습니다. 다시 입력해 주세요. 영문,숫자, 특수문자 하나 이상 포함되어야합니다");
        document.getElementById("pw").focus();
    }

}

function nickCheck(){
    let nickname=document.getElementById("nickname").value.trim();
    if(nickname =='') alert("닉네임을 입력해주세요.");
    else if(regexNick.test(nickname)){
        alert("닉네임이 올바르게 입력했습니다.");
    }
    else {
        alert("닉네임을 틀리게 입력했습니다. 다시 입력해 주세요. 닉네임은 한글만 됩니다.");
        document.getElementById("nickname").focus();
        return false;
    }
}

function telCheck(){
    let tel=document.getElementById("tel").value;
    if(tel =='') alert("전화번호를 입력해주세요.");
    else if(regexTEL.test(tel)){
        alert("전화번호가 올바르게 입력했습니다.");
    }
    else {
        alert("전화번호를 틀리게 입력했습니다. 다시 입력해 주세요.");
        document.getElementById("tel").focus();
        return false;
    }
}

function emailCheck(){
    let email=document.getElementById("email").value.trim();
    if(nickname =='') alert("이메일을 입력해주세요.");
    else if(regexEmail.test(email)){
        alert("이메일이 올바르게 입력했습니다.");
    }
    else {
        alert("이메일을 틀리게 입력했습니다. 다시 확인해 주세요.");
        document.getElementById("email").focus();
        return false;
    }
}

