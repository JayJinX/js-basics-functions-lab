// Code your solution in this file!
function distanceFromHqInBlocks(blockNum){
    return blockNum>=42 ? blockNum - 42 : 42 - blockNum;
}

function distanceFromHqInFeet(blockNum){
    return distanceFromHqInBlocks(blockNum)*264;
}

function distanceTravelledInFeet(start, end){
    return start > end? (start-end)*264 : (end-start)*264;
}

function calculatesFarePrice(start, end){
    if(distanceTravelledInFeet(start, end)>0&&distanceTravelledInFeet(start, end)<=400){
        return 0;
    }else if(distanceTravelledInFeet(start, end)>400&&distanceTravelledInFeet(start, end)<=2000){
        return (distanceTravelledInFeet(start, end)-400) * 0.02;
    }else if(distanceTravelledInFeet(start, end)>2000&&distanceTravelledInFeet(start, end)<=2500){
        return 25;
    }else{
        return 'cannot travel that far';
    }
}
