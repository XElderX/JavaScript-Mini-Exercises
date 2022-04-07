/* 1. Naudojant ciklą atspausdinti penkias eilutes ‘Labas’. */

/* for (i=5; i>0; i--){
    console.log("Labas")
} */

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/* 2. Naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 1 2 3 4 (vienas skaičius vienoje 
eilutėje). */

/* for (i=0; i>=0 && i<=5; i++){
    console.log(i)
}
 */

/*
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
3. Naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 10 20 30 40 (vienas skaičius 
vienoje eilutėje). */

/* for(i=0;i<=40; i+=10){
    console.log(i)
} */

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 
4. Naudojant ciklą penkiose eilutėse atspausdinti skaičius 49 50 51 52 53 (vienas skaičius 
vienoje eilutėje). */
 

/* for(i=49; i>48 && i<54; i++){
    console.log(i)  
} */

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/* 5. Naudojant ciklą penkiose eilutėse atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 
10 (vienas skaičius vienoje eilutėje). */


/* for(i=0; i<=10; i++){
function rand(min, max) {
    
    return Math.floor(Math.random()*(max-min+1)+min);
}

    console.log(rand(0,10))
} */


/* ~~~~~~~~~~~~~~~~~ */
/* function rand(min, max) {
Return Math.floor(Math.random()*(max-min+1)+min);
} */

/*
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 6. Naudojant ciklą, atspausdinti skaičius nuo 1 iki 20. Nespausdinti skaičių, kurie dalinasi iš 
3. */

/* for(i=0; i<=20 ; i++){
    if(i%3!==0){
        console.log(i)
    }
} */

/*
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 7. Parašykite programą, kuri atspausdintų įvesto skaičiaus daugybos lentelę nuo 1 iki 10. */

/* let n=6
let m

for(i=1; i<=10; i++){
    console.log(m=n*i)
}
 */

/*
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 8. Vienas colis yra 2,54 cm. Sudarykite programą kuri pateiktų ekrane lentelę nuo 1 iki n 
colius centimetrais. */

/* let c = 2.54
let n = 8

for(i=1; i<=n; i++) {
    console.log(i,"coliu yra: ", i*c,"cm")
} */

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 9. Bankas moka 2% metinių palūkanų. Indėlininkas pasidėjo į banką 100e. Sudarykite 
kasmetinę banko atskaitą klientui iki n metų. Ataskaitoje pateikite: metus, palūkanas, 
indėlį. */


/* let n= 40 //metai
let suma=100 // ideta suma i banka
let pelnas=0

for(i=1; i<=n; suma=suma+pelnas, i++){

    pelnas=suma*0.02;
    console.log(i,"metais, bankui mokant 2% palukanas jusu indelis buvo: "+suma,"euru. Jums prisidejo: ",pelnas,"Eur")
} */


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
10. Keliamieji metai turi 366 dienas, paprastieji – 365. Visi metai, išskyrus šimtmečius, yra 
keliamieji, jie dalūs iš 4. Šimtmečių metai yra keliamieji, jeigu dalūs 400. Pvz.: 1600 
metai yra keliamieji, nes dalūs iš 400, o 1700 – paprastieji. Raskite visus mūsų eros 
keliamuosius metus. */

/* let m = 2022

for(i=0; i<=m;i++){
    if(i%4==0 && i%100!==0 || i%400==0 ){
        console.log(i,"metai - keliamieji")
    }
}
 */

/* 
function rand(min, max) {
Return Math.floor(Math.random()*(max-min+1)+min);
} */
