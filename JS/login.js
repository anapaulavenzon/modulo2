//Pegamos as listas de usuarios!
let usuarios = JSON.parse(localStorage.getItem("usuarios"));

//pegamos o email
let email = document.querySelector('#email');
//pegamos as senha
let senha =document.querySelector('#senha');

//eventos!
let btn = document.querySelector('#entrar');
    btn.addEventListener('click', login);



function login()
{

    if(usuarios)
    {
                    let verificaDados = usuarios.some(el=>el.email === email.value && el.senha === senha.value);
                    
                    if (verificaDados)
                    {
                        let pos = usuarios.findIndex(el => el.email === email.value);

                        //salvamos a posicao no localStorage daquele user
                        localStorage.setItem("posicao", pos);

                        location.href="cadastro.html";

                    }
                    else
                    {
                        alert("Usuario ou senha estão errados");
                        limpar();
                        return;

                    }


    }
    else
    {
        alert("Senha ou email estão errados!");
        limpar();


    }


}

function limpar(){

     email.value= "";
     senha.value="";


}






