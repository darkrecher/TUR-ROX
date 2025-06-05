async function cipherDetailsFromPassword(password) {

    // https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/digest
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hash = await crypto.subtle.digest("SHA-512", data);
    const keyData = new Uint8Array(hash).slice(0, 32);
    const iv = new Uint8Array(hash).slice(33, 45);
    return { keyData: keyData, iv: iv }
}


async function downloadFile(url) {
  let response = await fetch(url);
  if (!response.ok) throw new Error('Download failed');
  return await response.arrayBuffer();
}


async function importKey(keyData, usage) {
  return await crypto.subtle.importKey(
    "raw", keyData, "AES-GCM", false, [usage]
  );
}


async function downloadAndEncryptFile(url, password, fileNameResult) {
    const clearBuffer = await downloadFile(url);
    const cipherDetails = await cipherDetailsFromPassword(password);
    const key = await importKey(cipherDetails.keyData, "encrypt");
    const encryptedBuffer = await crypto.subtle.encrypt(
        { name: "AES-GCM", iv: cipherDetails.iv },
        key,
        clearBuffer
    );

    const encryptedBlob = new Blob([encryptedBuffer]);
    const elemA = document.createElement('a');
    elemA.href = URL.createObjectURL(encryptedBlob);
    elemA.download = fileNameResult;
    document.body.appendChild(elemA);
    elemA.click();
    document.body.removeChild(elemA);
}


// https://stackoverflow.com/questions/14226803/wait-5-seconds-before-executing-next-line
const delay = ms => new Promise(res => setTimeout(res, ms));


// Ouh, que c'est sale ! (J'aime pas le Javascript).
let waitingCharIndex = 0;
const waitingChars = ["/", "-", "\\", "|", "/", "-", "\\", "|"]


function updateWaiting(divResult) {
    divResult.innerHTML = "Grumble grumble... " + waitingChars[waitingCharIndex];
    waitingCharIndex += 1;
    if (waitingCharIndex == 8) {
        waitingCharIndex = 0;
    }
}


async function tryPassword(url, password, divResult, fileNameResult) {

    updateWaiting(divResult);
    intervIdUpdateWaiting = setInterval(() => updateWaiting(divResult), 200);
    // Illusion de labeur. Ha ha ha ! (TODO)
    await delay(2000);
    let passwordOK = true;
    let elemA;
    const cipherDetails = await cipherDetailsFromPassword(password);
    const encrypted = await downloadFile(url);
    const key = await importKey(cipherDetails.keyData, "decrypt");
    try {
        const decrypted = await crypto.subtle.decrypt(
            { name: "AES-GCM", iv: cipherDetails.iv },
            key,
            encrypted
        );
        const blob = new Blob([decrypted]);
        elemA = document.createElement('a');
        elemA.href = URL.createObjectURL(blob);
        elemA.download = fileNameResult;
    } catch {
        passwordOK = false;
    }

    clearInterval(intervIdUpdateWaiting);
    if (passwordOK) {
        divResult.innerHTML = '<span class="password-success">Bravo !! :-) :-) :-)</span><br>';
        elemA.innerHTML = "T&eacute;l&eacute;charger la solution";
        divResult.appendChild(elemA);
    } else {
        divResult.innerHTML = '<span class="password-fail">&Eacute;chec</span>';
    }

}
