var return_list;
var return_list2;

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



function return_checked2() {
    for(i=0; i < my_form.mycheck2.length; i++) {
        
        
        if (i == 0 && return_list2 != []){
            return_list2 = [];
        }
        if(my_form.mycheck2[i].checked){
            return_list2.push(i);
            console.log(return_list2);
        }
    }
    console.log(return_list2);
    document.cookie = "list2 ="+ return_list2+"";
    console.log(document.cookie);
    
}