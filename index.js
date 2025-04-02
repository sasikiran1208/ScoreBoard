let home = 0;
let guest = 0;

function add(team , score){
    if (team === "home") {
        home += score;
        document.getElementById("home-score").innerText = home;
    } else if (team === "guest") {
        guest += score;
        document.getElementById("guest-score").innerText = guest;
    }
}

function reset() {
    home = 0;
    guest = 0;
    document.getElementById("home-score").innerText = home;
    document.getElementById("guest-score").innerText = guest;  
    document.getElementById("compare-result").innerText = ''; 

}

function compare() {
    let result = "";

    if (home > guest) {
        result = "🏠 Home team wins!";
    } else if (guest > home) {
        result = "🚗 Guest team wins!";
    } else {
        result = "🤝 It's a tie!";
    }

    document.getElementById("compare-result").innerText = result;
}
