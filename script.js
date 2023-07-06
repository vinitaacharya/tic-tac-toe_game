
let player = true;
let box = document.querySelector(".box");
let val;
let endGame = false;
let turn = document.querySelector('#turn');
let pos; //stores column;
let clicked = false;
let winner = document.querySelector("#change");
let r1c1 = document.getElementById('r1c1').innerHTML;
let r1c2 = document.getElementById('r1c2').innerHTML;
let r1c3 = document.getElementById('r1c3').innerHTML;
let r2c1 = document.getElementById('r2c1').innerHTML;
let r2c2 = document.getElementById('r2c2').innerHTML;
let r2c3 = document.getElementById('r2c3').innerHTML;
let r3c1 = document.getElementById('r3c1').innerHTML;
let r3c2 = document.getElementById('r3c2').innerHTML;
let r3c3 = document.getElementById('r3c3').innerHTML;
let restart = document.getElementById('restart');


const onClick = (event)=> {
    if(endGame){
        endGame=!endGame;
        console.log("went");
        document.getElementById('r1c1').textContent = "";
        document.getElementById('r1c2').textContent = "";
        document.getElementById('r1c3').textContent = "";
        document.getElementById('r2c1').textContent = "";
        document.getElementById('r2c2').textContent = "";
        document.getElementById('r2c3').textContent = "";
        document.getElementById('r3c1').textContent = "";
        document.getElementById('r3c2').textContent = "";
        document.getElementById('r3c3').textContent = "";
        document.querySelector(".winner").style.visibility="hidden";
        turn.style.visibility="visible";
        player=false;
    }

    if (!endGame){
        if(event.target.nodeName !== "LI"){
            return 0;
        }

        console.log("working")

        //displays whos turn it is
        console.log(event.srcElement);
            val = event.srcElement.id;
            pos = document.querySelector(`#${val}`);
            console.log(event);

        if(pos.innerHTML === ""){
            if(player){
                turn.textContent = "Player Two GO!";
                
            }
            else{
                turn.textContent="Player One GO!";
            }    

            //adds the X's and O's:
            
                if (player){
                    pos.append("X");
                    player = !player;
                }
                else{
                    pos.append("O");
                    player = !player;
                }
        }   
        
        //reasign values
        r1c1 = document.getElementById('r1c1').innerHTML;
        r1c2 = document.getElementById('r1c2').innerHTML;
        r1c3 = document.getElementById('r1c3').innerHTML;
        r2c1 = document.getElementById('r2c1').innerHTML;
        r2c2 = document.getElementById('r2c2').innerHTML;
        r2c3 = document.getElementById('r2c3').innerHTML;
        r3c1 = document.getElementById('r3c1').innerHTML;
        r3c2 = document.getElementById('r3c2').innerHTML;
        r3c3 = document.getElementById('r3c3').innerHTML;

        //conditions to win/tie:
        if ((r1c1 === r2c1) && (r2c1 === r3c1) && (r1c1 !== '') && (r2c1 !=='') && (r3c1 !== '')){
            endGame=!endGame;
            document.querySelector(".winner").style.
            visibility="visible";
            if (player){
                winner.textContent = "Player Two Wins!";
                turn.style.visibility="hidden";
            }
            else{
                winner.textContent = "Player One Wins!"
                turn.style.
                visibility="hidden";
            }
        
        }
        else if (r1c2 === r2c2 && r2c2 === r3c2 && r1c2 !== "" && r2c2 !=="" && r3c2 !== ""){
            endGame=!endGame;
            document.querySelector(".winner").style.
            visibility="visible";
            if (player){
                winner.textContent = "Player Two Wins!";
                turn.style.visibility="hidden";
            }
            else{
                winner.textContent = "Player One Wins!"
                turn.style.
                visibility="hidden";
            }
        }
        else if (r1c3 === r2c3 && r2c3 === r3c3 && r1c3 !== "" && r2c3 !=="" && r1c3 !== ""){
            endGame=!endGame;
            document.querySelector(".winner").style.
            visibility="visible";
            if (player){
                winner.textContent = "Player Two Wins!";
                turn.style.visibility="hidden";
            }
            else{
                winner.textContent = "Player One Wins!"
                turn.style.
                visibility="hidden";
            }
        }
        else if (r1c1 === r1c2 && r1c3 === r1c2 && r1c1 !== '' && r1c2 !=='' && r1c2 !== ''){
            endGame=!endGame;
            document.querySelector(".winner").style.
            visibility="visible";
            if (player){
                winner.textContent = "Player Two Wins!";
                turn.style.visibility="hidden";
            }
            else{
                winner.textContent = "Player One Wins!"
                turn.style.
                visibility="hidden";
            }
        }
        else if (r2c1 === r2c2 && r2c3 === r2c2 && r2c1 !== "" && r2c3 !== "" && r2c2 !== ""){
            endGame=!endGame;
            document.querySelector(".winner").style.
            visibility="visible";
            if (player){
                winner.textContent = "Player Two Wins!";
                turn.style.visibility="hidden";
            }
            else{
                winner.textContent = "Player One Wins!"
                turn.style.
                visibility="hidden";
            }
        }
        else if (r3c1 === r3c2 && r3c3 === r3c2  && r3c1 !== "" && r3c2 !=="" && r3c3 !== ""){
            endGame=!endGame;
            document.querySelector(".winner").style.
            visibility="visible";
            if (player){
                winner.textContent = "Player Two Wins!";
                turn.style.visibility="hidden";
            }
            else{
                winner.textContent = "Player One Wins!"
                turn.style.
                visibility="hidden";
            }
        }
        else if (r1c1 === r2c2 && r1c1 === r3c3 && r1c1 !== "" && r2c2 !=="" && r3c3 !== ""){
            endGame=!endGame;
            document.querySelector(".winner").style.
            visibility="visible";
            if (player){
                winner.textContent = "Player Two Wins!";
                turn.style.visibility="hidden";
            }
            else{
                winner.textContent = "Player One Wins!"
                turn.style.
                visibility="hidden";
            }
        }
        else if (r1c3 === r2c2 && r2c2 === r3c1 && r1c3 !== "" && r2c2 !=="" && r3c1 !== ""){
            endGame=!endGame;
            document.querySelector(".winner").style.
            visibility="visible";
            if (player){
                winner.textContent = "Player Two Wins!";
                turn.style.visibility="hidden";
            }
            else{
                winner.textContent = "Player One Wins!"
                turn.style.
                visibility="hidden";
            
            }
        }
            else if (r1c1 !== "" && r1c2 !== "" && r1c3 !== "" && r2c1 !== "" && r2c2 !== "" && r2c3 !== "" && r3c1 !== "" && r3c2 !== "" && r3c3 !== "" ){
                endGame=!endGame;
                document.querySelector(".winner").style.
                visibility="visible";
                winner.textContent = "You Tied!";
                turn.style.visibility="hidden";
            }

            
    }
}
box.addEventListener("click", onClick);
restart.addEventListener("click", onClick);
//document.querySelectorAll("#winner").style.visibility = "hidden";






