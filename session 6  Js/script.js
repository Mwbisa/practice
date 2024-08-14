const userNameCheck=prompt("Enter your Username:");
const users = [{username : "marsh",password: "m1122",role : "sa"},
               {username : "albert",password: "a3344",role : "ad"},
               {username : "rally22",password:"r5566",role : "us"}];
    console.log(document)
    const show=document.querySelector("h3");
    for(const newUsers of users)
    {
        if(userNameCheck === newUsers["username"])
            { const passCheck=prompt("Enter your Password:")
    if(passCheck === newUsers["password"])
        {show.innerText=`Username: ${userNameCheck} \n  Password: ${passCheck} \n Role: ${newUsers["role"]} `;}
 else   show.innerText=`Error: Wrong Password entered!`; break; 
      }
          else show.innerText=`Error: Wrong Username entered!`;
    }