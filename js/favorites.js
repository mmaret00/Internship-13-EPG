import  { printProgramme, getInfoAboutProgramme } from './printProgrammes.js';
import  { sortArrayOfProgrammesByBeginningTime, stringifyAndParseDate } from './utility.js';

let favorites = localStorage.getItem('favorites');
if(!favorites){
    localStorage.setItem('favorites', JSON.stringify([]));
    favorites = localStorage.getItem('favorites');
}

function favoriteProgrammesMenu(channels){
    let stringToPutInPrompt = printFavoriteProgrammesLayout();
    if(stringToPutInPrompt === null){
        return;
    }
    let idToGetInfoAbout = prompt(stringToPutInPrompt);
    
    switch(idToGetInfoAbout){
        case '0':
        case null:
            return;
        default:
            let chosenProgramme = getFavoriteProgrammeFromId(parseInt(idToGetInfoAbout));
            getInfoAboutProgramme(chosenProgramme, true);
            return favoriteProgrammesMenu(channels);
    }
}

function getFavoriteProgrammeFromId(id){
    let parsedFavorites = JSON.parse(favorites);

    if(parsedFavorites.some(p => p.id === id)){
        return parsedFavorites.find(p => p.id === id);
    }
    return 'id not found';
}

function printFavoriteProgrammesLayout(){
    let parsedFavorites = JSON.parse(favorites);
    if(parsedFavorites.length === 0){
        alert('Nema favorita!');
        return null;
    }

    parsedFavorites = sortArrayOfProgrammesByBeginningTime(parsedFavorites);

    let programmesOutput = '';

    for(let programme of parsedFavorites){
        programmesOutput += printFavoriteProgramme(programme);
    }

    return 'Favoriti:\n\n' + programmesOutput + 'Odaberite ID programa za ' +
        'pregled dodatnih informacija\n(za povratak unesite 0):';
}

function printFavoriteProgramme(programme){
    programme.beginning = stringifyAndParseDate(programme.beginning);
    programme.end = stringifyAndParseDate(programme.end);
    
    if(programme.end < new Date()) return '';

    return `Kanal: ${programme.channel}\n` +
        printProgramme(programme) + `\n\n`;
}

function changeProgrammesFavoriteStatus(programme){
    if(programme.end < new Date()){
        alert('Program koji je već prošao ne može biti u favoritima!');
        return;
    }

    let parsedFavorites = JSON.parse(favorites);
    let programmeIsInFavorites = parsedFavorites.some(p => p.id === programme.id);

    if(programmeIsInFavorites){
        parsedFavorites = parsedFavorites.filter(function(p){
            return p.id !== programme.id;
        });
    }
    else{
        parsedFavorites.push(programme);
    }

    localStorage.setItem('favorites', JSON.stringify(parsedFavorites));
    favorites = localStorage.getItem('favorites');

    alert(`Program je uspješno ` +
        `${programmeIsInFavorites ? 'skinut s liste' : 'stavljen na listu'} ` +
        `favorita.`);
}

export { favorites, favoriteProgrammesMenu, changeProgrammesFavoriteStatus, printFavoriteProgramme };