function submit(){
    
    var uid=document.getElementById("username").value;
    
    
     var pw=document.getElementById("password").value;
     
     var email= document.getElementById("email").value;
    
    //localstoring data
    
    //   var user = localStorage.setItem("uid", uid);
    //   var pass = localStorage.setItem("pw",pw);
    //   var em =   localStorage.setItem("email",email);
    
    var obj={
        uid, 
        pw,
        email
    }

    localStorage.setItem(obj.email, JSON.stringify(obj));
    showNewUserOnScreen(obj)
}


function showNewUserOnScreen(user){
    var parentNode = document.getElementById('listOfUsers');
    var childHTML =`<li> ${user.uid} - ${user.email} <li>`
   parentNode.innerHTML = parentNode.innerHTML+ childHTML ;


}
