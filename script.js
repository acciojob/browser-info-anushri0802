//your JS code here. If required.
// Function to detect browser name and version
function getBrowserInfo() {
    const userAgent = navigator.userAgent; // Get the user agent string
    let browserName = 'Unknown';
    let version = 'Unknown';

    // Check if the browser is Chrome
    if (userAgent.indexOf("Chrome") > -1) {
        browserName = "Chrome";
        version = userAgent.match(/Chrome\/([0-9\.]+)/)[1]; // Extract version number
    }
    // Check if the browser is Firefox
    else if (userAgent.indexOf("Firefox") > -1) {
        browserName = "Firefox";
        version = userAgent.match(/Firefox\/([0-9\.]+)/)[1]; // Extract version number
    }
    // Check if the browser is Safari
    else if (userAgent.indexOf("Safari") > -1) {
        browserName = "Safari";
        version = userAgent.match(/Version\/([0-9\.]+)/)[1]; // Extract version number
    }
    // Check if the browser is Edge
    else if (userAgent.indexOf("Edg") > -1) {
        browserName = "Edge";
        version = userAgent.match(/Edg\/([0-9\.]+)/)[1]; // Extract version number
    }
    // Check if the browser is Internet Explorer
    else if (userAgent.indexOf("MSIE") > -1 || userAgent.indexOf("Trident") > -1) {
        browserName = "Internet Explorer";
        version = userAgent.match(/(MSIE |rv:)([0-9\.]+)/)[2]; // Extract version number
    }

    // Create a message with browser name and version
    const message = `You are using ${browserName} version ${version}`;
    
    // Display the message inside the div with id 'browser-info'
    document.getElementById('browser-info').innerText = message;
}

// Call the function to display the browser information
getBrowserInfo();
