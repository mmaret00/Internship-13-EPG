const today = new Date();

let programme11 = {
    id: 1,
    beginning: new Date(today.setHours(0, 0, 0)),
    end: new Date(today.setHours(6, 11, 0)),
    name: 'Noćne reklame',
    description: 'Reklamni blok',
    category: 'Promidžbeni program',
    reprise: false,
    channel: 'HRT 1',
    rating: 0,
    favorite: true,
}

let programme12 = {
    id: 2,
    beginning: new Date(today.setHours(6, 11, 0)),
    end: new Date(today.setHours(6, 30, 0)),
    name: 'TV Kalendar',
    description: 'Dokumentarno-povijesna emisija.',
    category: 'Informativni program',
    reprise: false,
    channel: 'HRT 1',
    rating: 0,
    favorite: false,
}

let programme13 = {
    id: 3,
    beginning: new Date(today.setHours(6, 30, 0)),
    end: new Date(today.setHours(10, 0, 0)),
    name: 'Dobro jutro, Hrvatska',
    description: 'Mozaična emisija koja od ponedjeljka do subote...',
    category: 'Informativni program',
    reprise: false,
    channel: 'HRT 1',
    rating: 0,
    favorite: false,
}

let programme14 = {
    id: 4,
    beginning: new Date(today.setHours(10, 0, 0)),
    end: new Date(today.setHours(10, 17, 0)),
    name: 'Vijesti',
    description: 'Kratki pregled vijesti iz Hrvatske i svijeta.',
    category: 'Informativni program',
    reprise: false,
    channel: 'HRT 1',
    rating: 0,
    favorite: false,
}

let programme15 = {
    id: 5,
    beginning: new Date(today.setHours(10, 17, 0)),
    end: new Date(today.setHours(11, 8, 0)),
    name: 'Iz kuhinje s ljubavlju',
    description: 'Toni iznenađuje susret s ocem Kurtom koji je napustio svoju obitelj',
    category: 'Serija',
    reprise: true,
    channel: 'HRT 1',
    rating: 0,
    favorite: false,
}

let programme16 = {
    id: 6,
    beginning: new Date(today.setHours(11, 8, 0)),
    end: new Date(today.setHours(11, 42, 0)),
    name: 'Riječ i život: Svećeništvo',
    description: 'Emisija razmatra probleme u društvu.',
    category: 'Informativni program',
    reprise: false,
    channel: 'HRT 1',
    rating: 0,
}

let programme17 = {
    id: 7,
    beginning: new Date(today.setHours(11, 42, 0)),
    end: new Date(today.setHours(13, 20, 0)),
    name: 'Pobjeda srca',
    description: 'Calixto Bojórquez dođe Ariadni i kaže joj da je agent za nekretnine.',
    category: 'Serija',
    reprise: true,
    channel: 'HRT 1',
    rating: 0,
}

let programme18 = {
    id: 8,
    beginning: new Date(today.setHours(13, 20, 0)),
    end: new Date(today.setHours(17, 50, 0)),
    name: 'Pogled s neba - Afrika',
    description: 'Dokumentarni film donosi divan pogled iz ptičje perspektive.',
    category: 'Dokumentarac',
    reprise: true,
    channel: 'HRT 1',
    rating: 0,
}

let programme19 = {
    id: 9,
    beginning: new Date(today.setHours(17, 50, 0)),
    end: new Date(today.setHours(23, 0, 0)),
    name: 'Potjera',
    description: 'Kviz općeg znanja u kojem četiri natjecatelja odgovaraju...',
    category: 'Zabavni program',
    reprise: false,
    channel: 'HRT 1',
    rating: 0,
}

let programme110 = {
    id: 10,
    beginning: new Date(today.setHours(23, 0, 0)),
    end: new Date(today.setHours(23, 59, 59)),
    name: 'Meta',
    description: 'Akcijsko-špijunski triler.',
    category: 'Film',
    reprise: false,
    channel: 'HRT 1',
    rating: 0,
}

let programme21 = {
    id: 11,
    beginning: new Date(today.setHours(0, 0, 0)),
    end: new Date(today.setHours(7, 35, 0)),
    name: 'ZOI Peking 2022',
    description: 'Pratimo Zimske olimpijske igre iz Pekinga.',
    category: 'Sport',
    reprise: false,
    channel: 'HRT 2',
    rating: 0,
}

let programme22 = {
    id: 12,
    beginning: new Date(today.setHours(7, 35, 0)),
    end: new Date(today.setHours(7, 39, 0)),
    name: 'Mali Malabar',
    description: 'Mali Malabar poziva djecu u dobi od 3 do 7 godina da otkrivaju prirodu.',
    category: 'Dječji program',
    reprise: true,
    channel: 'HRT 2',
    rating: 0,
}

let programme23 = {
    id: 13,
    beginning: new Date(today.setHours(7, 39, 0)),
    end: new Date(today.setHours(8, 0, 0)),
    name: 'Slonko',
    description: 'Lutkarska serija za djecu rane vrtićke dobi.',
    category: 'Dječji program',
    reprise: true,
    channel: 'HRT 2',
    rating: 0,
}

let programme24 = {
    id: 14,
    beginning: new Date(today.setHours(8, 0, 0)),
    end: new Date(today.setHours(11, 0, 0)),
    name: 'Raj za dame',
    description: 'Nakon napada SSSR-a na Mađarsku, osoblje...',
    category: 'Serije',
    reprise: false,
    channel: 'HRT 2',
    rating: 0,
}

let programme25 = {
    id: 15,
    beginning: new Date(today.setHours(11, 0, 0)),
    end: new Date(today.setHours(12, 0, 0)),
    name: 'Psi, ta izvanredna bića',
    description: 'U Maleziji se svake godine ilegalno kopiraju milijuni...',
    category: 'Dokumentarac',
    reprise: false,
    channel: 'HRT 2',
    rating: 0,
}

let programme26 = {
    id: 16,
    beginning: new Date(today.setHours(12, 0, 0)),
    end: new Date(today.setHours(16, 0, 0)),
    name: 'Život je lijep - Milka Milinković',
    description: 'Dokumentarni film o Milki Milinković, najtrofejnijoj jugoslavenskoj i hrvatskoj paraolimpijki.',
    category: 'Dokumentarac',
    reprise: false,
    channel: 'HRT 2',
    rating: 0,
}

let programme27 = {
    id: 17,
    beginning: new Date(today.setHours(16, 0, 0)),
    end: new Date(today.setHours(19, 0, 0)),
    name: 'ZOI Peking 2022',
    description: 'Pratimo Zimske olimpijske igre iz Pekinga.',
    category: 'Sport',
    reprise: false,
    channel: 'HRT 2',
    rating: 0,
}

let programme28 = {
    id: 18,
    beginning: new Date(today.setHours(19, 0, 0)),
    end: new Date(today.setHours(20, 0, 0)),
    name: 'Tko ubija u Brokenwoodu ',
    description: 'Istražujući sumnjivo samoubojstvo u brokenwoodskom ženskom zatvoru...',
    category: 'Serija',
    reprise: false,
    channel: 'HRT 2',
    rating: 0,
}

let programme29 = {
    id: 19,
    beginning: new Date(today.setHours(20, 0, 0)),
    end: new Date(today.setHours(23, 0, 0)),
    name: 'Zauvijek u mojem srcu',
    description: 'Jenna (M. Patterson) i Charlie (J. Turner) pronašli su ljubav u Irskoj',
    category: 'Odrasli program',
    reprise: false,
    channel: 'HRT 2',
    rating: 0,
}

let programme210 = {
    id: 20,
    beginning: new Date(today.setHours(23, 0, 0)),
    end: new Date(today.setHours(23, 59, 59)),
    name: 'Nijemi svjedok',
    description: 'Kad ostaci druge žrtve budu pronađeni u postrojenju za reciklažu...',
    category: 'Odrasli program',
    reprise: true,
    channel: 'HRT 2',
    rating: 0,
}

let channel1 = [programme11, programme12, programme13, programme14, programme15,
    programme16, programme17, programme18, programme19, programme110];
let channel2 = [programme21, programme22, programme23, programme24, programme25,
    programme26, programme27, programme28, programme29, programme210];

export let channels = [channel1, channel2];