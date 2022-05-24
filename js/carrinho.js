const items = [
    {
        id:0,
        img: './img/product.png',
        nomeItem: 'camiseta',
        tamanhoItem: 'M',
        precoItem: 69.90,
        estoque:2,
        qtd:0
    },
    
    {
        id:1,
        img: './img/product.png',
        nomeItem: 'Camisa Manga Longa',
        tamanhoItem: 'M',
        precoItem: 69.90,
        estoque:2,
        qtd:0
    },
    {
        id:2,
        img: './img/product.png',
        nomeItem: 'Camisa Manga Curta',
        tamanhoItem: 'M',
        precoItem: 69.90,
        estoque:2,
        qtd:0
    },
    
    {
        id:3,
        img: './img/product.png',
        nomeItem: 'Sapato',
        tamanhoItem: 'M',
        precoItem: 69.90,
        estoque:2,
        qtd:0
    }

]

//Quando o cliente clicar no botao de comprar
//Descobrir a id do item selecionado
//Incrementar a quantidade

function inicializaLoja(){
    const divProdutos=document.querySelector('#produtos')
    //Cria um card de produto +
    //com informações dos objetos em items +
    //card-produto(div) +
    //>Nome do produto, imagem, *link comprar +

    for(let i=0;i<items.length;i++){
        if(items[i].estoque>0){
            //Configurando a div do post
            let divItem = document.createElement("div");
            divItem.className="card-prod";
            divItem.innerHTML+='<img src="'+items[i].img+'"></img><br>'
            divItem.innerHTML+=items[i].nomeItem+'<br>'
            divItem.innerHTML+=items[i].precoItem+'<br>'
            divItem.innerHTML+=items[i].estoque+'<br>'
            divItem.innerHTML+='<a href="javascript:incluirItem('+items[i].id+')">Comprar</a><br><br>'
            
            //efetivando a inclusão da div no html     
            divProdutos.appendChild(divItem);
        }
    }
}

function incluirItem(id){
    for(let i=0;i<items.length;i++){
        if(items[i].id==id){
            items[i].qtd++;
        }
    }
    atualizaCarrinho()
}


function atualizaCarrinho(){
    let divItens=document.querySelector('#itens-carrinho')
    
    //Limpando os itens do carrinho:
    divItens.innerHTML=""
    
    for(let i=0;i<items.length;i++){
        if(items[i].qtd>0){
            divItens.innerHTML+=items[i].nomeItem
            divItens.innerHTML+="  ------  "
            divItens.innerHTML+=items[i].qtd+'<br>'
        }
    }
}