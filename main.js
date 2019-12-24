var RPS0 = ['Rock', 'Paper', 'Scissors'];
/*
//oyuna versiyon eklemek için bu fonksiyorn gerekiyor
function DecisionArrays(i) {    //variable i defnes the user preferance about game option amount
    //Those arrays designed like domination order.Like [i] dominated by [i+1]
    var RPS0 = ['Rock', 'Paper', 'Scissors'];
    var RPS1 = ['Rock', 'Paper', 'Scissors', 'Lizzard'];
    var RPS2 = ['just', 'over', 'crowd'];
    var RPSi;
    
    if( i == 0 ) {
        RPSi = RPS0;
    } else if(i==1){
        RPSi = RPS1;
    } else {
        RPSi = RPS2;
    }
    return(RPSi);               //RPSi : is an holder of array of selected game type options
}
*/
var W = 0;          //win score counter
var L = 0;          //lose score counter
var D = 0;          //draw score counter
var result;         //it will declare the current game result on html
var ResultPic;      //for visualization of result :D

alert('To play the game click the image which will be represent Your move then see that if you beat the comp or not. Have fun')

function RPSComputerDecision() {
    var RanDecNum = Math.floor(Math.random()*3);
    console.log(RanDecNum);
    return(RanDecNum)
}

function UserPrefR() {
    RanDecNum = RPSComputerDecision();
    if (RanDecNum == 0){
//        console.log('its a draw');        It is just checking is it working or not?
        D++;
        result = 'Draw';
        document.getElementById("ResultImg").src="DrawPic.png";
    }   else if(RanDecNum == 1) {
//        console.log('it s a lose');       It is just checking is it working or not?
        L++;
        result = 'Lose';
        document.getElementById("ResultImg").src="DefeatPic.png";
    }   else{
//        console.log('it s a win');        It is just checking is it working or not?
        W++;
        result = 'Win';
        document.getElementById("ResultImg").src="WinPic.png";
    }
//    console.log(`${W}w  ${D}D  ${L}L`)        It is just checking is it working or not?
    ResultPrint();
}

function UserPrefP() {
    RanDecNum = RPSComputerDecision();
    if (RanDecNum == 0){
//        console.log('it s a win');        It is just checking is it working or not?
        W++;
        result = 'Win';
        document.getElementById("ResultImg").src="WinPic.png";
    }   else if(RanDecNum == 1) {
//        console.log('its a draw');        It is just checking is it working or not?
        D++;
        result = 'Draw';
        document.getElementById("ResultImg").src="DrawPic.png";
    }   else{
//        console.log('it s a lose');       It is just checking is it working or not?
        L++;
        result = 'Lose';
        document.getElementById("ResultImg").src="DefeatPic.png";
    }
//    console.log(`${W}w  ${D}D  ${L}L`)        It is just checking is it working or not?
    ResultPrint();
}

function UserPrefS() {
    RanDecNum = RPSComputerDecision();
    if (RanDecNum == 0){
//        console.log('it s a lose');       It is just checking is it working or not?
        L++;
        result = 'Lose';
        document.getElementById("ResultImg").src="DefeatPic.png";
    }   else if(RanDecNum == 1) {
//        console.log('it s a win');        It is just checking is it working or not?
        W++;
        result = 'Win';
        document.getElementById("ResultImg").src="WinPic.png";
    }   else{
//        console.log('its a draw');        It is just checking is it working or not?
        D++;
        result = 'Draw';
        document.getElementById("ResultImg").src="DrawPic.png";
    }
//    console.log(`${W}w  ${D}D  ${L}L`)        It is just checking is it working or not?
    ResultPrint();
}

function ResultPrint() {
    document.getElementById("WinScore").innerHTML = `Win : ${W}`;
    document.getElementById("DrawScore").innerHTML = `Draw : ${D}`;
    document.getElementById("LoseScore").innerHTML = `Lose : ${L}`;
    document.getElementById("ResultOfLastGame").innerHTML = `${result}`;

}

function ResetScoreBoards() {
    W=0;
    D=0;
    L=0;
    result = 'the game resetted';
    document.getElementById("ResultImg").src="ResetPic.png";
    ResultPrint();
//    console.log('it is working');     It is just checking is it working or not?
}



/*          //bu kısım iyileştirme gerektiyiryor
var id;
function RPSComputerDecision() {
    id = document.getElementById('FirstImage');
    if(id == 'FirstImage'){
        var RanDecNum = Math.floor(Math.random()*3);
        var CompDec = RPS0[RanDecNum];
        console.log(RanDecNum + ' ' + 'if');
        return(CompDec)
    }
    else{
        console.log('it works' + ' ' + 'else');
        return
    }
}
alert(RPSComputerDecision());

function RPSPlayerDecision() {
    return;
}
*/
                        /*
                        //-----------------------------------------------
                        // geliştime kısmı için bitince sil // array seçiliimi ile ilgili çıktı üzerinden kontrol
                        var check = window.prompt('enter');
                        var newCheck;
                        newCheck = check % 3;
                        console.log(newCheck);
                        console.log(DecisionArrays(newCheck));

                        newCheck = (check+1) % 3;
                        console.log(newCheck);
                        DecisionArrays(newCheck);
                        console.log(DecisionArrays(newCheck));

                        newCheck = (check+2) % 3;
                        console.log(newCheck);
                        console.log(DecisionArrays(newCheck));
                        //--------------------------------------------------
                        


                        //tek bir array oluşturup gerektiğinde içeriden gereken arrayleri çekmek için bir prototyp
/*
var RPSAll = [['Rock', 'Paper', 'Scissors'],['Rock', 'Paper', 'Scissors', 'Lizzard'],['just', 'over', 'crowd']]
var i;

for (let i = 1; i < RPSAll.length; i++) {
    var j = i-1;
    var this["RPS" +(j)] = RPSAll[j];
    console.log(RPS[j]);
    console.log(typeof(RPS[j]));

    
}
*/