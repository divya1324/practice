let time = 20;

if (time < 12) {
    console.log("Good morning!");
} else if (time < 18) {
    console.log("Good afternoon!");
} else {
    console.log("Good evening!");
}


let seasons= 4;

switch (seasons) {
    case 1:
        seasons = "Spring";
        break;
    case 2:
        seasons = "Summer";
        break;
    case 3:
        seasons = "Monsoon";
        break;
    case 4:
        seasons = "Autumn";
        break;
    case 5:
        seasons = "Pre-Winter Seasons";
        break;
    case 6:
        seasons = "Winter";
        break;
     default:
        seasons = "unknow";
}
console.log("Season is " + seasons);