const cells = document.querySelectorAll(".cell");
var Sign = ["X", "O"], Winer = ["First One", "Second One"];
var Board = [];
var flag = 0;
ReMake();
var WinBom = [
    [1, 5, 9],
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [3, 5, 7]
];

function ReMake() {
    document.getElementById("EndGame").style.display = "none";
    for(let i=0;i<cells.length;i++) {
        cells[i].innerHTML= "";
        flag = 0;
        Board[i] = -6;
        cells[i].addEventListener('click', turnClick, false);
    }
}

function turnClick(cellTarget) {
    let id = cellTarget.target.id;
    if(Board[id] >= 0){
        window.alert("我知道你很急,\n但是,\n你先别急");
        return ;
    }
    console.log(`Run is ${flag} on ${id}`);
    Board[id] = flag;
    document.getElementById(id).innerHTML = Sign[flag];
    flag ^= 1;
    let CheckId = CheckWin();
    if(CheckId != -1) GameOver(CheckId);
    return ;
}

function CheckWin() {
    for(let i=1;i<=9;i++){
        let fruit = Board[WinBom[i][0]]+Board[WinBom[i][1]]+Board[WinBom[i][2]];
        if(fruit == 0) return 0;
        if(fruit == 3) return 1;
    }
    return -1;
}

function GameOver(WinId){
    for(let i=0;i<cells.length;i++) {
        cells[i].removeEventListener(`click`, turnClick, false);
    }
    window.alert(`Winer is ${Winer[WinId]}!`);
    window.alert(`To ${Winer[WinId^1]}:
        骗哥们可以，别把你自己也骗到了就行。\n
        哥们被你骗了真无所谓的，打个哈哈就过了。但希望你打完这段话后擦一下眼角，别让眼泪掉在手机屏幕上了就行。\n
        你说的这些话，哥们信一下也是没什么的。\n
        还能让你有个心里安慰，但这种话说出来骗骗兄弟就差不多得了，哥们信你一下也不会少块肉，但是你别搞得自己也当真了就行。\n
        哥们被你骗一下是真无所谓的，兄弟笑笑也就过去了。\n
        真不是哥们想要破你防，你擦擦眼泪好好想想，除了兄弟谁还会信你这些话？`);
    document.getElementById("EndGame").style.display = "inline";
    document.getElementById("EndGame").innerHTML = Winer[WinId];
}