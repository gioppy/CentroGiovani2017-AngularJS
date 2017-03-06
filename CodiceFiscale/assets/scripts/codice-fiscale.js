/**
* Calcolo del codice fiscale
*/

var partialCode = cognome('Buffa') + nome('Giovanni') + anno(1983) + mese('maggio') + giornoESesso(16,'M') + comuneOStato(true);
console.log(partialCode);
console.log(carattereControllo(partialCode));

/**
* @cognome: string
* return string
*/
function  cognome (cognome){
  cognome =  cognome.toUpperCase();
  var vocali = ['A','E','I','O','U'];

  var consonanti_cognome = [];
  var vocali_cognome = [];

  for(var i = 0;i < cognome.length ;i++){
    if(vocali.indexOf(cognome[i]) !== -1){
      vocali_cognome.push(cognome[i]);
    }else{
      consonanti_cognome.push(cognome[i]);
    }
  }

  var output = consonanti_cognome.concat(vocali_cognome);

  if(output.length < 3){
    output.push('X','X');
  }

  var result = output.slice(0,3);
  return result.join('');
}

/**
* @nome: string
* return string
*/
function nome(nome){
  nome = nome.toUpperCase();
  var vocali = ['A','E','I','O','U'];

  var consonanti_nome = [];
  var vocali_nome = [];
  var output = [];

  for(var i = 0; i < nome.length; i++){
    if(vocali.indexOf(nome[i]) !== -1){
      vocali_nome.push(nome[i]);
    }else{
      consonanti_nome.push(nome[i]);
    }
  }

  if(nome.length >= 3){
    // se il nome non ha meno di tre lettere...
    if (consonanti_nome.length < 4) {
      output = consonanti_nome.concat(vocali_nome);
    }else{
      output.push(consonanti_nome[0], consonanti_nome[2], consonanti_nome[3]);
    }
  }else{
    // significa che il nome ha meno di 3 lettere
    output = consonanti_nome.concat(vocali_nome);
    output.push('X','X');
  }

  var result = output.slice(0,3);
  return result.join('');
}

/**
* @anno: string
* return string
*/
function anno(anno){
  var annoStr = anno.toString();
  var result = annoStr.slice(2,4); // se lasciavo 2 mi includeva i caratteri fino alla fine di default
  return result;
}

/**
* @mese: string
* return string
*/
function mese(mese){
  var mesi = {
    'gennaio':'A',
    'febbraio':'B',
    'marzo':'C',
    'aprile':'D',
    'maggio':'E',
    'giugno':'H',
    'luglio':'L',
    'agosto':'M',
    'settembre':'P',
    'ottobre':'R',
    'novembre':'S',
    'dicembre':'T'
  };

  return mesi[mese];
}

/**
* @giorno: number
* @sesso: string
* return string
*/
function giornoESesso(giorno,sesso){
  if(sesso === 'F'){
    return (giorno + 40).toString();
  }

  if(giorno < 10){
    var giornoStr = giorno.toString();
    var result = '0' + giornoStr;
    return result;
  }

  return giorno.toString();
}

/**
* @natoInItalia: boolean
* return string
*/
function comuneOStato (natoInItalia){
  //operatore ternario: il risultato è il medesimo dell'if..else sottostante
  return natoInItalia ? 'E098' : 'Z000';
  /*
  if(natoInItalia){
    return 'X000';
  } else {
    return 'Z000';
  }
  */
}

/**
* @codice: string
* return string
*/
function carattereControllo (codice) {
  var caratteri_pari =[];
  var caratteri_dispari = [];

  for(var i = 0; i < codice.length;i++){
    if(i % 2 === 0 ){
      // mettiamo  in caratteri_dispari i caratteri di codice ad indici pari  perchè  iniziamo a contare da uno (vedi algoritmo wikipedia)
      caratteri_dispari.push(codice[i]);
    }else{
      caratteri_pari.push(codice[i]);
    }
  }

  //tabelle di conversione (sotto forma di oggetti javascript)
  var tabellaDispari = {
    '0':1,
    '1':0,
    '2':5,
    '3':7,
    '4':9,
    '5':13,
    '6':15,
    '7':17,
    '8':19,
    '9':21,
    'A':1,
    'B':0,
    'C':5,
    'D':7,
    'E':9,
    'F':13,
    'G':15,
    'H':17,
    'I':19,
    'J':21,
    'K':2,
    'L':4,
    'M':18,
    'N':20,
    'O':11,
    'P':3,
    'Q':6,
    'R':8,
    'S':12,
    'T':14,
    'U':16,
    'V':10,
    'W':22,
    'X':25,
    'Y':24,
    'Z':23
  };

  var tabellaPari = {
    '0':0,
    '1':1,
    '2':2,
    '3':3,
    '4':4,
    '5':5,
    '6':6,
    '7':7,
    '8':8,
    '9':9,
    'A':0,
    'B':1,
    'C':2,
    'D':3,
    'E':4,
    'F':5,
    'G':6,
    'H':7,
    'I':8,
    'J':9,
    'K':10,
    'L':11,
    'M':12,
    'N':13,
    'O':14,
    'P':15,
    'Q':16,
    'R':17,
    'S':18,
    'T':19,
    'U':20,
    'V':21,
    'W':22,
    'X':23,
    'Y':24,
    'Z':25
  };

  //valutazione numerica arrays
  var valore_dispari = 0;
  for(var j = 0; j < caratteri_dispari.length; j++) {
    valore_dispari += tabellaDispari[caratteri_dispari[j]];
  }

  var valore_pari = 0;
  for(var k = 0; k < caratteri_pari.length; k++) {
    valore_pari += tabellaPari[caratteri_pari[k]];
  }

  var resto = (valore_pari + valore_dispari) % 26;

  return resto;
}