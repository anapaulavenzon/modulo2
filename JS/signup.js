let campoEmail = document.querySelector('#input-email');

let labelEmail = document.querySelector('#label-input-email');
let validEmail = false;

let campoSenha = document.querySelector('#input-senha');

let labelSenha = document.querySelector('#label-input-senha');
let validSenha = false;

let campoConfirmaSenha = document.querySelector('#input-confirma-senha');
let labelConfirmaSenha = document.querySelector('#label-input-confirm-senha');
let validConfirmaSenha = false;

let formularioCadastro = document.querySelector('#formulario-cadastro');
let botaocadastrar = document.querySelector('#btn-cadastrar');



//Pegamos a lista de usuarios aqui!
let usuarios = JSON.parse(localStorage.getItem("usuarios"));



//EVENTOS
campoEmail.addEventListener('keyup', verificaEmail);
campoSenha.addEventListener('keyup', verificaSenha);
campoConfirmaSenha.addEventListener('keyup', verificaConfirmaSenha);
formularioCadastro.addEventListener('submit', (e) => {
    e.preventDefault();

    verificaCampos();
});

  
//FUNÇÕES
function verificaEmail(){
    if(campoEmail.value.length < 10){
        labelEmail.setAttribute('style', 'color: brown');
        labelEmail.innerHTML = 'E-mail: *Insira no mínimo 15 caracteres';
        campoEmail.setAttribute('style', 'display: block; margin-bottom: 15px; width: 415px; border-color: chocolate;');
        validEmail = false;
    
    }else{
        labelEmail.setAttribute('style', 'color: chocolate ');
        labelEmail.innerHTML = 'E-mail:';
        campoEmail.setAttribute('style', 'display: block; margin-bottom: 15px; width: 415px; border-color: chocolate;');
        validEmail = true;
    }
}

function verificaSenha(){
    if(campoSenha.value.length < 6 ){
        labelSenha.setAttribute('style', 'color: brown');
        labelSenha.innerHTML = 'Senha: *Insira no mínimo 6 caracteres';
        campoSenha.setAttribute('style', 'display: block; margin-bottom: 15px; width: 415px; border-color: chocolate;');
        validSenha = false;
    
    }else{
        labelSenha.setAttribute('style', 'color: chocolate');
        labelSenha.innerHTML = 'Senha:';
        campoSenha.setAttribute('style', 'display: block; margin-bottom: 15px; width: 415px; border-color: chocolate;');
        validSenha = true;
    }
}

function verificaConfirmaSenha(){
    if(campoSenha.value !== campoConfirmaSenha.value){
        labelConfirmaSenha.setAttribute('style', 'color: brown');
        labelConfirmaSenha.innerHTML = 'Confirme a Senha: *A senha digitada não corresponde';
        campoConfirmaSenha.setAttribute('style', 'display: block; margin-bottom: 15px; width: 415px; border-color: chocolate;');
        validConfirmaSenha = false;

    }else{
        labelConfirmaSenha.setAttribute('style', 'color: chocolate');
        labelConfirmaSenha.innerHTML = 'Confirme a Senha:';
        campoConfirmaSenha.setAttribute('style', 'display: block; margin-bottom: 15px; width: 415px; border-color: chocolate;');
        validConfirmaSenha = true;
    }
}

function verificaCampos(){
    console.log(validEmail);
    console.log(validSenha);
    console.log(validConfirmaSenha);

    if(campoEmail.value === '' || campoSenha.value === ''  || campoConfirmaSenha.value === ''){
        alert('Algo deu errado! Por favor verifique se você preencheu todos os campos.');
        return
       
    }else if(!validEmail || !validSenha || !validConfirmaSenha){
        alert('Campos incorretos! Por favor verifique se você preencheu todos os campos.');
        return
        
    }else {

         
        if(usuarios)
        {
           
             let veri = usuarios.some(el=>el.email === campoEmail.value);

             

             if(veri)
             {
                 alert("usuario ja cadastrado!");
                 
                 limpaCampos();

                 

                 return;
             }


          
             
             let novoUsuario = {
                                    email: campoEmail.value,
                                    senha:campoSenha.value,
                                    lembretes:[]

                                }
            
               usuarios.push(novoUsuario);

               localStorage.setItem("usuarios", JSON.stringify(usuarios));

             //Posicao!
               let pos = usuarios.findIndex(el => el.email === campoEmail.value);

            

               //salvamos a posicao no localStorage daquele user
               localStorage.setItem("posicao", pos);

               alert("Usuario cadastrado com sucesso!");

               location.href = 'cadastro.html';
             

            
            
            
         
           
        }
        else
        {

            

             let lista = [];


             let novoUsuario = {
                                   email: campoEmail.value,
                                   senha: campoSenha.value,
                                   lembretes:[]

                                }
            
             lista.push(novoUsuario);

             localStorage.setItem("usuarios", JSON.stringify(lista));

             //Posicao!

             let peg = JSON.parse(localStorage.getItem('usuarios'));
             let posx = peg.findIndex(el => el.email === campoEmail.value);

            

             //salvamos a posicao no localStorage daquele user
             localStorage.setItem("posicao", posx);


             alert('Conta criada com sucesso!');

             location.href="cadastro.html";



        }


       
    }
}


function limpaCampos()
{
    campoEmail.value = "";
    campoSenha.value = "";
    campoConfirmaSenha.value="";
}

