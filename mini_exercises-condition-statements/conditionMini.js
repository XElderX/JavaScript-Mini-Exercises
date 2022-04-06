/* 1. Žinomas skaičius n. Parašykite programą, kuri nustatytų ar skaičius yra blogas ar geras? 
Neigiamas – „Blogas“, teigiamas „Geras“. Pasitikrinkite: Kai n = 20, turėtume gauti: 
Skaičius geras. */

/* let n = 20; 

if(n<0) {
    console.log("Blogas");
}
    else {
        console.log("Geras");

    }
 */
/*  ~~~~~~~~~~~~~~~~~~~~~~~~ */

/* 2. Mokinys eina gatve ir prieina sankryžą reguliuojamą šviesoforu. Sudarykite programą, 
kuri nustatytu, kaip turi pasielgti mokinys? Žinome šviesoforo spalvos kodą n, 1-žalia, 2-
geltona, 3-raudona. Pasitikrinkite: Kai n= 2, turėtume gauti: Palaukite */

/* let n=2;

if (n==1) {
    console.log("galite eiti")
}
else if (n==2) {
    console.log ("Palaukitė")
}
else if (n==3) {
    console.log("Sustokitė")
}
else {
    console.log("Pateikta neteisinga reikšmė")
} */

/* ~~~~~~~~~~~~~~~~~~~~~~~~~ */

/* 3. Gintautas planuoja persikraustyti į naujus namus ir jam reikia sudėti visas turimas knygas 
į dėžes. Gintautas turi d dėžių ir k knygų. Parašykite programą, kuri apskaičiuotų, ar 
Gintauto turimos knygos tilps į dėžes, jei į vieną dėžę telpa po n knygų. Pasitikrinkite: 
Kai d=2, k=8, n=5 tuomet ekrane turi būti rodomas pranešimas: Knygos telpa į dėžes; kai 
d=3, k=18, n=5 tuomet ekrane turi būti rodomas pranešimas: Knygos netelpa į dėžes. */

/* let d=3
let k=18
let n=5

if ((k/n)<=d){
   console.log("Knygos telpa į dėžes") 
}
else {
    console.log("Knygos netelpa į dėžes")
} */

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

/* 4. Duoti du sveikieji skaičiai a ir b. Parašykite programą, kuri didesnį skaičių pamažintu 
vienetu, o mažesnį padidintu vienetu.
 */
/* let a=7;
let b=6;

if(a>b) {
    a-=1
    b+=1
    console.log("a skaicius= ", +a  +"; b skaicius = ", +b)
}
else {
    a+=1
    b-=1
    console.log("a skaicius= ", +a  +"; b skaicius = ", +b)
} */

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

/* 5. Saulius sutaupė c centų ir už juos nusprendė nusipirkti ledų. Parduotuvėje porcija ledų 
kainuoja p centų. Parašykite programą, kuri suranda, kiek porcijų ledų k nusipirks Saulius 
ir kiek centų m dar liks. Pasitikrinkite Kai c=50, p=20, turi būti : Saulius nusipirks 2 
porcijas, liks centų 10. Gali prireikti panaudoti Math.floor() funkciją */


/* let c=50
let p=20
let k
let m

k=c/p;
m=(c%p);

if( m > 0) {
    console.log("Saulius nusipirks: " +Math.floor(k), "porcijų ledų, ir jam liks", m, "centu")
}
else {
    console.log(" Saulius nusipirks: " +Math.floor(k), "porcijų ledų." )
} */



/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */


/* 6. Yra n degtukų. Parašykite programą, kuri nustatytų, ar iš tų degtukų galima sudėti 
lygiakraštį trikampį. Dėliojamai figūrai turi būti panaudoti visi degtukai. Degtukų laužyti 
negalima. Pasitikrinkite: jei n = 6, turi būti: Trikampį sudėlioti galima. jei n = 4, turi būti: 
Trikampį sudėlioti negalima. */

/* let n = 4

if(n % 3 == 0) {
    console.log("Trikampį sudelioti galima")
}
else {
    console.log("Trikampį sudelioti negalima")
}
 */


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

/* 7. Parašykite programą, kuri žinant mėnesio numerį n atspausdintų to mėnesio dienų kiekį 
d. (tarkime, kad metai yra paprastieji) (pvz. n=5, ats. d=31; n=2 ats. d=28) */

/* let m=2

if (m<1 || m>12) {
    console.log("tokio mėnesio nėra")
}
else if ((m!==2) && (m % 2 !==0)) {
    console.log("mėnesis turi: 31 dieną")
}
else if (m==2) {
    console.log("mėnesis turi 28 dieną")
}
else {
    console.log("mėnesis turi 30 dieną")
} */



/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/* 8. Du broliai nesutaria, kuriam tvarkyti kambarį. Jie meta kauliuką. Jei iškrenta skaičius 1, 3 
arba 5 – kambarį tvarko jaunėlis, jei 2, 4 arba 6 – vyresnėlis. Parašykite programą, kuri 
įvedus iškritusį skaičių k, ekrane rodytų pranešimą „Kambarį tvarkys jaunėlis“, arba 
„Kambarį tvarkys vyresnėlis“. Pasitikrinkite: kai k = 1, ekrane turi būti: Kambarį tvarkys 
jaunėlis. Kai k = 4, ekrane turi būti: Kambarį tvarkys vyresnėlis. */

/* let k=2

 if((k % 2 == 0) && (k > 0) && (k<7) ) {
    console.log("Kambarį tvarkys vyresnėlis.");
 }
 else if ((k % 2 !== 0) && (k > 0) && (k<7)) {
        console.log("Kambarį tvarkys jaunėlis");
     }

 else {
     console.log("toks kauliuko skaičius negalimas")
 }
 */

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/* 9. Pirmosios olimpinės žaidynės įvyko 1896 metais ir toliau organizuojamos kas ketveri 
metai. Jei žaidynės neįvyksta, tie metai vis tiek laikomi olimpiniais, o žaidynėms 
skiriamas eilės numeris. Parašykite programą, kuri surastų m-ųjų metų olimpinių 
žaidynių numerį n. Jei metai neolimpiniai, turi būti spausdinama „Metai neolimpiniai“. 
Pasitikrinkite. Kai m = 1904, turi būti spausdinama: n = 3. Kai m = 2005, turi būti 
spausdinama: Metai neolimpiniai. */


/* let m=2005 
let n
n=(((m-1896)/4)+1);
if(m < 1896 ){
console.log("Tais metais olimpinės dar neegzistavo")
}
else if (n%1==0) {
console.log("tais metais vyko: "+n+"-osios olimpinės") 
}
else {
    console.log("Metai neolimpiniai")
}
 */




/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/* 10. Petras išėjo iš namų, kai laikrodis rodė v1 valandų ir m1 minučių. Į gimnaziją Petro 
kelionė trunka m2 minučių. Parašykite programą, kuri ekrane parodytų pranešimą apie 
tai, ar Petras nepavėluos į pamoką, prasidedančią v valandų ir m minučių. 

Pasitikrinkite: 
jei v1 = 8, m1 = 29, m2 = 43, v = 9, m = 5, turi būti: Petras į pamoką pavėluos; jei v1 = 8, 
m1 = 29, m2 = 23, v = 9, m = 5, turi būti: Petras į pamoką nepavėluos */

/* let v1 = 8 
let m1 = 29
let m2 = 23
let v = 9
let m = 5

if (((v1*60+m1)+m2) > ((v*60)+m)){
    console.log("Petras į pamoką pavėluos")
}
else {
    console.log("Petras į pamoką nepavėluos")
}
 */
