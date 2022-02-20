import { getInfoAboutProgrammeValidation, checkIfProgrammeIsAReprise } from './utility.js';

function getCurrentProgrammesOnChannel(channel, offset){
    for(let i = 0; i < channel.length; i++){
        if(new Date() > channel[i].beginning) continue;
        return printProgrammesLayout(channel, i - offset);
    }
}

function printProgrammesLayout(channel, i){
    let stringToPrint = '';
    if(channel[i]){
        stringToPrint += `Kanal: ${channel[i].channel}\n\n`;
    }
    else{
        return `Nema programa u ovom periodu!\n\n=============\n\n`
    }

    stringToPrint += `TRENUTNI PROGRAM: ${printProgramme(channel[i])}\n\n`;

    if(channel[i - 1]){
        stringToPrint += `Prethodni program: ${printProgramme(channel[i - 1])}\n\n`;
    }
    if(channel[i + 1]){
        stringToPrint += `Slijedeći program: ${printProgramme(channel[i + 1])}\n\n`;
    }
    return `${stringToPrint}=============\n\n`;
}

function printProgramme(programme){
    return `${programme.name} (ID: ${programme.id})\n` +
        `Kategorija: ${programme.category}\n` +
        `${programme.beginning
            .toLocaleTimeString('en-GB', {hour: '2-digit', minute:'2-digit'})}` +
        ` - ${programme.end
            .toLocaleTimeString('en-GB', {hour: '2-digit', minute:'2-digit'})}`;
}

function getInfoAboutProgramme(programme, isFavorite){
    if(!getInfoAboutProgrammeValidation(programme, isFavorite)){
        return;
    }

    switch(prompt(getInfoAboutProgrammeOutput(programme, isFavorite))){
            case '1':
                changeProgrammesFavoriteStatus(programme);
                return getInfoAboutProgramme(programme);
            case '2':
                rateProgramme(programme);
                return getInfoAboutProgramme(programme);
            case '0':
            case null:
                return;
            default:
                alert('Molimo unesite broj između 0 i 2!');
                return getInfoAboutProgramme(programme);
        }
}

function getInfoAboutProgrammeOutput(programme, isFavorite){
    return `${isFavorite ? 
        printFavoriteProgramme(programme) : 
        `${printProgramme(programme)}\n\n`}` + 

        `Opis: ${programme.description}\n` +
        `Repriza: ${checkIfProgrammeIsAReprise(programme) ? 'da' : 'ne'}\n` +

        `${printRatingStatusOfProgramme(programme)}\n\n` +
        getInfoAboutProgrammeOutputChoices(programme)
}

function printRatingStatusOfProgramme(programme){
    let parsedRatings = JSON.parse(ratings);

    return parsedRatings.some(c => c.some(p => p.id === programme.id)) ?
        `Ocjena: ${parsedRatings.find(c => c.find(p => p.id === programme.id))[1]}` :
        'Nije ocijenjeno';
}

function getInfoAboutProgrammeOutputChoices(programme){
    return `Unesite broj:\n` +
        `1 - ${JSON.parse(favorites).some(p => p.id === programme.id) 
            ? 'Uklanjanje programa s liste' : 
            'Dodavanje programa na listu'} favorita\n` +
        `2 - Ocijeni program\n` +
        `0 - Povratak`;
}

export { getInfoAboutProgramme, getCurrentProgrammesOnChannel };