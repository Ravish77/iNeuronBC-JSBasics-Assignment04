function matchStickRequired(noOfHouse){

    let matchForOneHome = 6;
    let differenceHome = 5;

    // Using the logic of Arithmatic Progression
    let strickReq = matchForOneHome +((noOfHouse-1)* differenceHome);

    console.log("Sticks Required to Build "+noOfHouse+" houses are "+ strickReq);

}


matchStickRequired(2);
matchStickRequired(1);
matchStickRequired(87);
matchStickRequired(4);