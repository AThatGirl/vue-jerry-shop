function getCookieValue(key){
    let res="";
    let cookies=document.cookie.replaceAll(" ","");
    let cookie_array=cookies.split(";");
    for (let i=0; i<cookie_array.length;i++){
        let cookie=cookie_array[i];
        let array=cookie.split("=");
        if (array[0]===key){
            res=array[1];
        }
    }
    return res;
}
function setCookieValue(key,value){
    document.cookie=key+"="+value;
}