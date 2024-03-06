function addUser(){
    var name= document.getElementById("name").value;
    var accountType=document.getElementById("accountType").value;
    var countryCode=document.getElementById("countryCode").value;
    var contactNumber=document.getElementById("contactNumber").value;

    var userBlock = document.createElement("div");

    userBlock.classList.add("user-block");

    userBlock.innerHTML="<strong>Name:</strong>" + name + "<br>" + "<strong>Account Type:</strong> " + accountType + "<br>" + "<strong>Contact Number:</strong> " + countryCode + " " + contactNumber;

    document.getElementById("userList").appendChild(userBlock);

    document.getElementById("name").value = "";
    document.getElementById("accountType").value = "domestic";
    document.getElementById("countryCode").value = "+1";
    document.getElementById("contactNumber").value = "";
}
