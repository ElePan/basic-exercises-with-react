const ES = {
    'Quiero ser traducido': 'quiero ser traducido'
}

const IT = {
    'Quiero ser traducido': 'voglio essere tradotto'
}

export function translate(texto, lang) {
    switch (lang){
        case 'es':
            return ES[texto] ? ES[texto] : 'No tenemos la traduccion'
        case 'it':
            return IT[texto] ? IT[texto] : 'No tenemos la traduccion'
        default:
            return 'idioma no reconocido'
    }
}
