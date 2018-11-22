var return_list;

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
}
console.log(return_list);