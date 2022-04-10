// 1. Parašyti funkciją, kuri priima du skaičius. Grąžina tų skaičių sumą.
/* let add=(a,b)=>{
    return a*b;
};
console.log(add(4,4))
 */


// 2. Parašyti funkciją, kuri priima du kintamuosius. Palygina tuos du skaičius ir grąžina 
// rezultatą ar pirmas skaičius yra didesnis, ar antras, ar jie yra lygūs.


/* let comparin=(a,b)=>{
    if (a>b){
        return "Pirmas skaicius yra diidesnis uz antraji";
    }
    else if(a==b){
        return "Skaiciai - lygus";
    }
    else{
        return ("Pirmas skaicius yra mazesnis uz antraji");
    }
}

console.log(comparin(2,7)) */

// 3. Parašyti funkciją, kuri priimtų vieną skaičių. Turi būti grąžinamas rezultatas ar tie metai 
// yra keliemieji.

/* function keliamiejiMetai(metai){
    if(metai%4==0 && metai%100!==0 || metai%400==0){
        return (+metai,"metai yra keliamieji")
    }
    return (+metai," metai, nera keliamieji")
}

console.log(keliamiejiMetai(2022)) */

// 4. Parašyti funkciją, kuri priimtų vieną skaičių. Grąžinti skaičiaus kvadratą.

/* let square=powSquare(2)

    function powSquare(pow){
    return function(number){
        return number**pow;
    }
} 
console.log(square(5)) */

// 5. Parašyti funkciją, kuri priimtų vieną skaičių, kuris turi būti didesnis už vienetą. Funkcija 
// turi grąžinti visų skaičių sumą, nuo 1 iki įvesto skaičiaus.

/* let skaiciuSuma=(n)=>{
    let suma=n
    
    if(n<2){
    return ("skaicius turi but didesnis uz 1");
    }
    else{
        for(i=1;i<=n;i++){
         suma+=(i-1)
   }
   return suma
    }
}
console.log(skaiciuSuma(7)) */


// 6. Parašykite funkciją, kuri priimtų skaičių ir suskaičiuotų, iš kiek sveikų skaičių jos 
// argumentas dalijasi be liekanos (išskyrus vienetą ir patį save).

/* let sveikiSkaiciai = function (skaicius){
    for(i=skaicius-1, kartai=0, temp=skaicius-1; i>1; i--,temp--){
        if(skaicius%temp==0){
            kartai++
        }
    }
return kartai

}
console.log(sveikiSkaiciai(21)) */



// 7. Parašyti funkciją, kuri priimtų vieną kintamąjį - tekstą. Funkcija turi išvesti tekstą į 
// ekraną ir dar papildomai parodyti jo ilgį (simbolių kiekį).

/* 
let stringy=(a)=>{
    return string +" "+string.length
}
let string = "tekstas stringas"
console.log(stringy(string)) */

// 8. Parašyti funkciją telefonoNumeris, kuri priima vieną kintamąjį – masyvą su 10 skaičių 
// jame. Funkcija turi grąžinti telefono numerį tokiu formatu - "(XXX) XXX-XXXX".
/* let telephoneNo=(skaiciai) => {

} */

/* 
let telefonoNr=(numbers)=>{
    if(numbers.length!==10){
        return "masyve nera 10 skaiciu"
    } 
    else{
        let telNo="("
        for(i=0;i<10;i++){
            if(i===3){
                telNo+=") "+numbers[3]
            }
            else if(i===6){
                telNo+="-"+numbers[6]
            }
            else{
                telNo+=numbers[i]
            }
        }
        return telNo
    }
    }

const masyvas = []
for(i=0;i<10;i++){
    masyvas.push(Math.floor(Math.random()*(9-0+1)+0))
}

console.log(masyvas)
console.log(telefonoNr(masyvas)) */


// 9. Parašyti funkciją, kuri priimtų du kintamuosius - tekstus. Palyginti kuris tekstas yra 
// ilgesnis.

/* let compare = function(a,b){
    if(a.length>b.length){
        return "pirmas tekstas ilgesnis"
    }
    else if(a.length<b.length){
        return("antras tekstas ilgesnis")
    }
    else{
        return "abu tekstai vienodo ilgio"
    }
}

let tekstas1 = "briedis"
let tekstas2 = "elnias"
console.log(compare(tekstas1, tekstas2)) */

// 10. Parašyti funkciją, kuri priimtų vieną kintamąjį - tekstą. Suskaičiuoti, kiek tekste yra ‚a‘ 
// raidžių.

/* function checkAletter(text) {
    if(typeof text==='string'){
        for(i=0;i<text.length;i++){

        }
    }

} */
