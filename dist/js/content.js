let lastClipboardData = "";
let noCheckClipboard = false;
const origin = window.location.origin;
const wp_admin = origin + '/wp-admin';
const gestione = origin + '/gestione';


function goToFront() {
    function isUrlValid(url) {
        return fetch(url, {method: 'HEAD'})
            .then(response => {
                return response.ok;
            })
            .catch(() => {
                return false;
            });
    }

    isUrlValid(wp_admin)
        .then(valid => {
            if (valid) {
                window.location = wp_admin;
            } else {
                isUrlValid(gestione)
                    .then(valid => {
                        if (valid) {
                            window.location = gestione;
                        } else {
                            console.log('url non valid')
                        }
                    })
                    .catch(error => {
                        console.error('An error occurred while checking the URL:', error);
                    });
            }
        })
        .catch(error => {
            console.error('An error occurred while checking the URL:', error);
        });
}

function goToAdmin() {
    window.location = origin;
}

const startHandleClipboard = () => {
    document.addEventListener("mouseup", goToFront);
};
const stopHandleClipboard = () => {
    document.removeEventListener("mouseup", goToAdmin);
};
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    switch (request.type) {
        case "enable": {
            if (request.value) {
                console.log('value true')
                goToFront();
                // startHandleClipboard();
            } else {
                console.log('value false')
                goToAdmin();
                // stopHandleClipboard();
            }
            sendResponse({ok: true});
            return;
        }
    }
    sendResponse({ok: true});
});
chrome.runtime.sendMessage({type: "status"}, (res) => {
    if (res?.active) {
        startHandleClipboard();
    } else {
        stopHandleClipboard();
    }
});
