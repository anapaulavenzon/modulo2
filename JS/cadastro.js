let usuarios = JSON.parse(localStorage.getItem('usuarios'));

let posX = localStorage.getItem('posicao');

let descricao = document.querySelector('#input-descricao');
let lembrete = document.querySelector('#input-recado');
let btnSalvar = document.querySelector('#btn-salvar');
let btnSair = document.querySelector('#sair');

btnSalvar.addEventListener('click',salvarLembrete);

btnSair.addEventListener('click', sair);



let iLembrete="";

 for(let p1 in usuarios[posX].lembretes)
 {
     iLembrete = document.createElement('tr');
     iLembrete.innerHTML = `<td>${p1}</td>
                            <td>${usuarios[posX].lembretes[p1].descricao}</td>
                            <td>${usuarios[posX].lembretes[p1].lembrete}</td>
                            <td><button class='btn-apagar' onclick='deletar(${p1})'> APAGAR </button> <button class='btn-editar' onclick='editar(${p1})'> EDITAR </button></td>`

     document.querySelector('#dados').appendChild(iLembrete);

 }



 function salvarLembrete(){

    let novoLembrete = {

        descricao: descricao.value,
        lembrete: lembrete.value
    }
    usuarios[posX].lembretes.push(novoLembrete);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    alert("Lembrete salvo com sucesso!");

    location.reload();
}



function deletar(id){

    let apaga = confirm("Desejarealmente apagar este lembrete?");

    if(apaga){
        usuarios[posX].lembretes.splice(id,1);
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
        location.reload();
    }

}



function editar(id)
     {
                    let novaDescricao = prompt('Qual a nova descricao');
                    let novoLembrete = prompt('Qual o novo lembrete');

                //pegamos a lista de ususarios


                usuarios[posX].lembretes[id].descricao = novaDescricao;
                usuarios[posX].lembretes[id].lembrete = novoLembrete;

                localStorage.setItem('usuarios',JSON.stringify(usuarios));

                alert("Lembrete editado com sucesso!");

                location.reload();
     }


     function sair(){

        localStorage.removeItem('posicao');
        location.href = 'index.html';

     }
