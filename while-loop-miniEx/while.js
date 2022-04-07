/* 1. Generuoti atsitiktinius skaičius nuo 1 iki 10 tol, kol skaičių suma bus mažesnė už 100.
 */

/* let i = 0
while (i<99){
    i++
function rand(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}
    console.log(i, "skaicius yra: ",rand(1,10))
} */

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/* 2. Generuoti atsitiktinius skaičius nuo 1 iki 10 tol, kol sugeneruotų skaičių suma bus dali iš 
7. */


/* let m=0
    do {      
        m=Math.floor(Math.random()*(10-1+1)+1);
        if(m%7==0){
            console.log(m,"yra dalus is 7")
        }
        else{
            console.log(m, "nėra dalus iš 7")
        }
    }
    while (m%7!==0); */


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
3. Tadas mėgsta skaityti knygas, tačiau jam labai sunku pradėti skaityti. Knygoje yra m 
skyrių. Pirmą dieną Tadas perskaitė 1 skyrių, antrą – 2, trečią – 3 ir t.t. Kiekvieną kitą 
dieną jis perskaito vienu skyriumi daugiau, negu prieš tai buvusią dieną. Programa turi 
apskaičiuoti, per kelias dienas d Tadas perskaitys visą knygą ir kelis skyrius s vidutiniškai 
per dieną perskaito Tadas. Paskutinei dienai gali likti mažiau skyrių.
Kontroliniai duomenys:
Įveskite knygos skyrių skaičių: 8
Tadas visą knygą perskaitys per 4 dienas (-ų).
Tadas vidutiniškai per dieną perskaitė 2 skyrius(-ų).
Įveskite knygos skyrių skaičių: 17
Tadas visą knygą perskaitys per 6 dienas (-ų).
Tadas vidutiniškai per dieną perskaitė 2.83 skyrius (-ų). */


/* let m=17 // skyriai
let d=0 // dienos
let s // perskaitytu skyriu vidurkis per diena
let n //ta diena perskaityti skyriai

let i=0 //perskaityti skyriai
while (m>i){
    n=d*1+1
    d++
    i+=n
    if(i>m){
        let z=i-m
        s=(i-z)/d
        console.log("Knyga perskaityta buvo per:",d,"dienas. Jis vidutiniskai perskaitydavo po",s,"skyrius per dieną" )
    }
    else if(i==m){
        s=i/d
        console.log("Knyga perskaityta buvo per:",d,"dienas. Jis vidutiniskai perskaitydavo po",s,"skyrius per dieną" )
    }
} */

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/* 4. Naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius 
vienoje eilutėje). Paskutinis atspausdintas skaičius turi būti 5. */


/* let n
do{
    n=Math.floor(Math.random()*(10-1+1)+1);
    console.log(n)
} while(n!==5);
 */


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
5. naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius 
vienoje eilutėje). Paskutinis atspausdintas skaičius turi būti 5 arba 7; Suskaičiuoti kiek 
ciklų prasisuko */

/* let n
do{
    n=Math.floor(Math.random()*(10-1+1)+1);
    console.log(n)
} while((n!==5)&&(n!==7));
 */
