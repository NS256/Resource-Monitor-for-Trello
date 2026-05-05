const consoleLog = logString => console.log(`RESOURCE_MONITOR: ${logString}`);
const consoleError = errorString => console.error(`RESOURCE_MONITOR: ${errorString}`);


const createLimitsList = (limitsJSON, listClassName) => {
    if (!limitsJSON || typeof limitsJSON !== 'object') {
        throw new Error('limitsJSON parameter is required and must be an object');
    }

    let limitsList = document.createElement('ul');
    limitsList.classList = `limits-list-container ${listClassName}`;

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
                break;
            }
        }

        //create list item
        let listItem = document.createElement('li');
        listItem.className = `limits-list-item limit-key-${i} ${(limitOK) ? "limit-passed" : "limit-failed"}`;
        listItem.innerHTML = `${checkOrCross(limitOK)} ${camelCaseToPlainText(KEYSLIST[i])}`;
        limitsList.appendChild(listItem);


    }

    //return completed list
    return limitsList;
}

const camelCaseToPlainText = (text) => {

    let textArray = text.split(/(?=[A-Z])/);

    for (let i = 0; i < textArray.length; i++){
        textArray[i] = textArray[i][0].toUpperCase() + textArray[i].substring(1);
    }

    return textArray.join(' ');
}

/**Return either a green check or a red cross depending on the value of the passed in  boolean*/
const checkOrCross = (showCheck) => {
    
    let iconClass = (showCheck) ? "green-checkmark" : "red-cross";
    let icon = (showCheck) ? "&#x2714;" : "&#x2718;";

    return `<span class=" check-or-cross ${iconClass}">${icon}</span>`;
}