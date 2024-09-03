
$(function(){
    // https://rafaelescalfoni.github.io/desenv_web/receitas.json
    var url = 'js/receitas.json';
    var receitas = document.querySelector(".receitas")

    $.ajax({
        url: url,
        dataType: 'json',
        success: function(data) {
            data.forEach((item) => {
                let div = document.createElement("div");
    
                //percorrendo cada chave dentro de um objeto
                for (let key in item) {
                    if (item.hasOwnProperty(key) && key !== "id") {
                        let p = document.createElement("p");
    
                        if (Array.isArray(item[key])) {
                            //se a chave for um array percorre os elementos do array
                            item[key].forEach(subItem => {
                                p.innerHTML += subItem + '<br>';
                            });

                        } else {
                            if(key == "nome"){
                            let h3 = document.createElement("h3");
                            h3.innerHTML = `${item[key]}`;
                            div.appendChild(h3);
                            }
                            if(key == "foto"){
                                let img = document.createElement("img");
                                img.src = `${item[key]}`;
                                div.appendChild(img);
                                } else {
                                    p.innerHTML = `${item[key]}`;
                                }
                        }
    
                        div.appendChild(p);
                    }
                }
    
                receitas.appendChild(div);
            });
        }
    });
    
 


});                  