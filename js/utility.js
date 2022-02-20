function checkIfProgrammeIsAReprise(programme){
    return channels.find(c => c
       .find(p => p.name === programme.name))
       .find(p => p.name === programme.name
       && p.beginning < programme.beginning);
}

function getProgrammeFromId(id){
    if(id === 0){
        alert('Odustali ste.')
        return null;
    }
    if(channels.some(c => c.some(p => p.id === id))){
        return channels.find(c => c.find(p => p.id === id))
            .find(p => p.id === id);
    }
    return 'id not found';
}

function validateNewRating(newRating){
    let validityOfRating = newRating >= 1 && newRating <= 5;
    if(!validityOfRating){
        alert('Ocjena mora biti između 1 i 5!\nMolimo ponovite unos.');
    }
    return validityOfRating;
}

function sortArrayOfProgrammesByBeginningTime(array){
    return array.sort((a,b) => 
        (a.beginning > b.beginning) ? 1 : ((b.beginning > a.beginning) ? -1 : 0));
}

function stringifyAndParseDate(date){
    date = JSON.stringify(date);
    return new Date(JSON.parse(date));
}

function getInfoAboutProgrammeValidation(programme, isFavorite){
    if(programme === null){
        return false;
    }
    if(programme === 'id not found'){
        alert(`Ne postoji program s tim ID-om ${isFavorite ? 'među favoritima' : ''}!`);
        return false;
    }
    if(!enterPINIfProgrammeIsProtected(programme)){
        return false;
    };
    return true
}

export { sortArrayOfProgrammesByBeginningTime, stringifyAndParseDate,
    validateNewRating, getInfoAboutProgrammeValidation,
    getProgrammeFromId, checkIfProgrammeIsAReprise };