import { validateNewRating } from './utility.js';

let ratings = localStorage.getItem('ratings');
if(!ratings){
    localStorage.setItem('ratings', JSON.stringify([]));
    ratings = localStorage.getItem('ratings');
}

function rateProgramme(programme){
    let newRating = enterNewRating();
    if(!newRating){
        return;
    }
    let parsedRatings = JSON.parse(ratings);
    let existingRating = parsedRatings.find(
        c => c.find(p => p.id === programme.id));

    if(existingRating){
        existingRating[1] = newRating;
    }
    else{
        parsedRatings.push([programme, newRating]);
    }

    localStorage.setItem('ratings', JSON.stringify(parsedRatings));
    ratings = localStorage.getItem('ratings');

    alert('Ocjena je uspješno promijenjena.');
}

function enterNewRating(){
    let newRating = prompt('Unesi novu ocjenu programa (1-5)\n' +
        '(za odustajanje unesite prazan unos):');
    if(!newRating){
        alert('Odustali ste.');
        return null;
    }
    if(!validateNewRating(newRating)){
        return enterNewRating();
    }
    return newRating;
}

export {rateProgramme, ratings};