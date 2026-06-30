export const consoleLog = logString => console.log(`RESOURCE_MONITOR: ${logString}`);
export const consoleError = errorString => console.error(`RESOURCE_MONITOR: ${errorString}`);

export const authorizePUP = () => {
    return restAPI.isAuthorized().then(function(isAuthorized) {
        // Confirmed via comment code enters this block
      if (!isAuthorized) {
        consoleLog('Not authorized, requesting authorization...');
        return restAPI.authorize({ scope: 'read' }).then(function(result) {
          consoleLog('Authorization completed, result: ' + JSON.stringify(result));
          return result;
        });
      } else {
        return Promise.resolve();
      }
    })
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

