const main = document.getElementById('chess');

for(let x = 0; x < 8; x++){
    for(let y = 0; y < 8; y++){
        let cell = document.createElement("div");
        let black;

        if(y%2 != 0){
            if(x%2 != 0) black = true;
            else black = false;
        }else{
            if(x%2 == 0) black = true;
            else black = false;
        }
        cell.setAttribute("class", black?"black":"white");
        cell.setAttribute("id", String(x)+String(y))
        cell.innerHTML = "<p>.</p>";   
        main.appendChild(cell);
    }
}

for(let x = 0; x < 8; x++){
    for(let y = 0; y < 8; y++){
        let cell = document.getElementById(String(x)+String(y))
        if(x == 1 ){
            cell.innerText = "P";
        }
    }
}
