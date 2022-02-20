import { getInfoAboutProgramme, getCurrentProgrammesOnChannel } from './printProgrammes.js';
import { favoriteProgrammesMenu } from './favorites.js';
import { changePIN } from './PIN.js';
import { getProgrammeFromId } from './utility.js';

function mainMenu(channels, offset){
    let menuChoice = mainMenuOutput(channels, offset, 'main menu');
    switch(menuChoice){
        case '1':
            let selectedID = parseInt(mainMenuOutput(channels, offset,
                'choose programme ID'))
            let selectedProgramme = getProgrammeFromId(selectedID);
            getInfoAboutProgramme(selectedProgramme);
            return mainMenu(channels, offset);
        case '2':
            favoriteProgrammesMenu(channels);
            return mainMenu(channels, offset);
        case '3':
            changePIN();
            return mainMenu(channels, offset);
        case '4':
            return mainMenu(channels, offset + 1);
        case '5':
            return mainMenu(channels, offset - 1);
        case '0':
        case null:
            alert('Izašli ste. Pozdrav!')
            return;
        default:
            alert('Molimo unesite broj između 0 i 5!');
            return mainMenu(channels, offset);
    }
}

function mainMenuOutput(channels, offset, outputChoice){
    let stringToPrint = '';
    if(offset !== 1){
        stringToPrint += `Trenutno se nalazite ${Math.abs(offset-1)} ` +
            `programa u ${offset < 1 ? 'budućnosti' : 'prošlosti'}.\n\n`
    }
    for(let channel of channels){
        stringToPrint += getCurrentProgrammesOnChannel(channel, offset);
    }
    if(outputChoice === 'main menu'){
        return prompt(stringToPrint + mainMenuOutputChoices());
    }
    return prompt(stringToPrint + '\nMolimo izaberite ID programa\n' +
        '(za odustajanje unesite 0):');
}

function mainMenuOutputChoices(){
    return 'Unesite izbor:\n' +
        '1 - Pregled dodatnih informacija o određenom programu\n' +
        '2 - Pregled favorita\n' +
        '3 - Promjena PIN-a\n' +
        '4 - Pregled za jedan program unazad\n' +
        '5 - Pregled za jedan program unaprijed\n' +
        '0 - Izlaz';
}

export { mainMenu };