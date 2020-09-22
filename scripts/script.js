document.getElementById('buttonSend').addEventListener('click', () => {
    if(document.getElementById('name').value  != "" && document.getElementById('email').value != "") {
        alert("Prontinho! você receberá as novidades por e-mail")
    
    }
    else{
        alert('Preencha todos os campos!')
    
    }
});


