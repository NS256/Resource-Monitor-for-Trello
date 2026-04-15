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
        let listItem = document.createElement('li');
        listItem.classList = `limits-list-item limit-key-${i}`;
        listItem.textContent = KEYSLIST[i];
        limitsList.appendChild(listItem);
    }

    //return completed list
    return limitsList;
}


