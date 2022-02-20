let PIN = localStorage.getItem('PIN');
if(!PIN){
    localStorage.setItem('PIN', JSON.stringify('1234'));
    PIN = localStorage.getItem('PIN');
}

function enterPINIfProgrammeIsProtected(programme){
    if(programme.category !== 'Odrasli program'){
        return true;
    }
    let enteredPIN = prompt('Da biste vidjeli ' +
        'informacije o programu za odrasle molimo unesite PIN ' +
        '(za odustajanje unesite prazan unos):');

    let validityOfPin = validatePIN(enteredPIN);

    if(validityOfPin === 'give up'){
        alert('Odustali ste.')
        return false;
    }
    if(validityOfPin === 'incorrect'){
        return enterPINIfProgrammeIsProtected(programme);
    }
    return true;
}

function validatePIN(enteredPIN){
    if(!enteredPIN){
        return 'give up';
    }

    if(enteredPIN !== JSON.parse(PIN)){
        alert('Unijeli ste pogrešan PIN!\n' +
        'Molimo ponovite unos.')
        return 'incorrect';
    }
    return 'correct';
}

function changePIN(){
    let enteredCurrentPIN = enterCurrentPIN();
    let validityOfPin = validatePIN(enteredCurrentPIN);

    if(validityOfPin === 'give up'){
        alert('Odustali ste.')
        return;
    }
    if(validityOfPin === 'incorrect'){
        return changePIN();
    }

    let newPIN = enterNewPIN();
    if(!newPIN){
        alert('Odustali ste.')
        return;
    }
    localStorage.setItem('PIN', JSON.stringify(newPIN));
    PIN = localStorage.getItem('PIN');
    alert('PIN je uspješno promijenjen!');
}

function enterCurrentPIN(){
    return prompt('Molimo unesite trenutni PIN\n' +
        '(za odustajanje unesite prazan unos):');
}

function enterNewPIN(){
    let newPIN = prompt('Molimo unesite novi PIN\n' +
        '(za odustajanje unesite prazan unos):');
    if(!newPIN){
        return null;
    }
    if(!checkLengthOfPIN(newPIN) || !checkIfPINIsNumbersOnly(newPIN)){
        return enterNewPIN();
    }
    if(!confirm('Jeste li sigurni da želite promijeniti PIN?')){
        return null;
    }
    return newPIN;
}

function checkLengthOfPIN(newPIN){
    let correctLengthOfPin = newPIN.length >= 4 && newPIN.length <= 8;
    if(!correctLengthOfPin){
        alert('PIN treba biti dug između 4 i 8 znamenki! Molimo ponovite unos.');
    }
    return correctLengthOfPin;
}

function checkIfPINIsNumbersOnly(newPIN){
    let newPINIsNumbersOnly = /^\d+$/.test(newPIN);
    if(!newPINIsNumbersOnly){
        alert('PIN smije sadržavati samo brojeve!');
    }
    return newPINIsNumbersOnly;
}

export { enterPINIfProgrammeIsProtected, changePIN };