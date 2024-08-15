

function validate(){
    let name = document.getElementById('name').value;
    if(name==""){
        document.getElementById('valName').innerHTML="Please Enter Your Name";
        return false;
    }
    let email = document.getElementById('email').value;
    let reg =/^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;
    let result= reg.test(email);

    if(result==false){
        document.getElementById('valemail').innerHTML="Enter A Valid Email";
        return false;
    }
    let subject = document.getElementById('subject').value;
    if(subject==""){
        document.getElementById('valSubject').innerHTML="Please Fill This Field";
        return false;
    }
    
    return true;

}
