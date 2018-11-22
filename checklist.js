var return_list;

function setCookie(cookie_name, value, days) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + days);
    // 설정 일수만큼 현재시간에 만료값으로 지정
  
    var cookie_value = escape(value) + ((days == null) ? '' : ';    expires=' + exdate.toUTCString());
    document.cookie = cookie_name + '=' + cookie_value;
  }

function return_checked() {
    for(i=0; i < my_form2.mycheck.length; i++) {
        
        
        if (i == 0 && return_list != []){
            return_list = [];
        }
        if(my_form2.mycheck[i].checked){
            return_list.push(i);
            console.log(return_list);
        }
    }
    console.log(return_list);
    document.cookie = "list1 ="+ return_list+"";
    console.log(document.cookie);
    
}
