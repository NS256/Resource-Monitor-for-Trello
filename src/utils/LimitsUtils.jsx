const createLimitsList = (limitsJSON, listClassName) => {
    if (!limitsJSON || typeof limitsJSON !== 'object') {
        throw new Error('limitsJSON parameter is required and must be an object');
    }

    //DOM element for outputting the board limits
    let limitsList = document.createElement('ul');
    limitsList.classList = `limits-list-container ${listClassName}`;

    //array to track all the limits that have been reached or warned on teh board.
    let limitsReached = [];

    /**planning for next step
     * Create an array to capture each limit that's either met or warning
     * Array of objects with name and status
     * 
     */

    /**
     * Go through each key provided in the limits list and create an item in the list for it
     * 
     * IMPORTANT:
     * Even though the specific limits that generally cause issues are the same, these aren't hard coded to be called out in this list to future proof and cover any potential limits that could be implemented in future.
     */
    const KEYSLIST = Object.keys(limitsJSON)
    for (let i=0; i < KEYSLIST.length; i++){
        //get status of the current limit
        let limitOK = true;
        const LIMITSKEYS = Object.keys(limitsJSON[KEYSLIST[i]]);
        for (let j=0; j < LIMITSKEYS.length; j++) {
            if (limitsJSON[KEYSLIST[i]][LIMITSKEYS[j]].status !== "ok") {
                limitOK = false;
                limitsReached.push({
                    name: `${limitsJSON[KEYSLIST[i]]}`,
                    scope: LIMITSKEYS[j],
                    warningType: limitsJSON[KEYSLIST[i]][LIMITSKEYS[j]].status
                });
                break;
            }
        }

        //create list item
        let listItem = document.createElement('li');
        listItem.className = `limits-list-item limit-key-${i} ${(limitOK) ? "limit-passed" : "limit-failed"}`;
        listItem.innerHTML = `${checkOrCross(limitOK)} ${camelCaseToPlainText(KEYSLIST[i])}`;
        limitsList.appendChild(listItem);

        t.sizeTo('#content');
    }

    console.log(limitsReached);
    //return completed list
    return limitsList;
}

const getLimitsAdvice = (reason) => {
    if (!limitsAdvice[reason]) {
        throw new Error(`Unable to find limits advice matching "${reason}"`); 
    }

    return limitsAdvice[reason];
}

const limitsAdvice = {
    "tooManyCards": "Try reducing the number of cards on your board, you can do this by creating a new board and moving some of your cards/lists to that board.",
    "tooManyLists": "Try reducing the number of lists on your board, you can do this by creating a new board and moving some of your lists to that board.",
    "archivedCards": "Your board has a high number of archived cards, "
}
