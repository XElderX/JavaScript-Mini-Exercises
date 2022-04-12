// 1. Sukurti masyą, kurio ilgis 20, o reikšmės – skaičiai, nuo 1 iki 20.
/* let array=[];
let i=0;
let n=20 ///kiek skaiciu sugeneruoti i masyva
do{ 
    array.push(Math.floor(Math.random()*(20-1+1)+1));
    i++;
} while (i<n);
console.log(array) */

// 2. Sukurti atsitiktinio ilgio masyvą, nuo 40 iki 60, kurio reikšmės būtų skaičiai nuo 1 iki masyvo ilgio.

/* let array=[];
let randomLength = Math.floor(Math.random()*(60-40+1)+40);
let i = 0;
do{ 
    array.push(Math.floor(Math.random()*(randomLength-1+1)+1));
    i++;
} while (i<randomLength);
console.log(array) */


// 3. Sukurti atsitiktinio ilgio masyva, kurio ilgis nuo 10 iki 15, o reikšmės – atsitiktiniai skaičiai nuo 5 
// iki 47. Surasti didžiausia skaičių masyve, nenaudojant sort ir Math.max funkcijų.

/* let array=[];
let randomLength = Math.floor(Math.random()*(15-10+1)+10);
let i = 0;
let max = null
do{ 
    let rand = (Math.floor(Math.random()*(47-5+1)+1));
    array.push(rand)
    i++;
    rand>max ? max=rand : max=max;
} while (i<randomLength);
console.log(array)
console.log(max) */

// 4. Sukurti masyvą, kurio ilgis 100, o reikšmės – raidės D, E, F, G, H. 20. 
/* let array= [];
i = 0;
do{ 
    let rand = (Math.floor(Math.random()*(5-1+1)+1));
    rand===1 ? array.push("D") 
    : rand===2 ? array.push("E") 
    : rand===3 ? array.push("F") 
    : rand===4? array.push("G") 
    : array.push("H")
    i++;
} while (i<100);
console.log(array) */


// 5. Sukurti masyvą, kurio ilgis 100, o reikšmės – raidės M,N,O,P. Suskaičiuoti, kurios raidės buvo 
// daugiausia.

/* let array= [];
i = 0;
let countM=null;
let countN=null;
let countO=null;
let countP=null;
do{ 
    let rand = (Math.floor(Math.random()*(4-1+1)+1));
    rand===1 ? (array.push("M"), countM++) 
    : rand===2 ? (array.push("N"), countN++) 
    : rand===3 ? (array.push("O"), countO++) 
    : (array.push("P"), countP++)
    i++;
} while (i<100);
console.log(array)
console.log(`M raidziu - ${countM}`)
console.log(`N raidziu - ${countN}`)
console.log(`O raidziu - ${countO}`)
console.log(`P raidziu - ${countP}`) */
// 6. Sugeneruoti masyvą, kurio ilgis 20, o reikšmės masyve turi būti nuo 10 iki 50. Reikšmės masyve 
// turi būti unikalios, tai yra – nesikartoti.

/* let rand=(min, max)=>{
    
    
    return random=Math.floor(Math.random()*(max-min+1)+min);
}
let random = null
let array = [];
let randomLength = 20;
while (array.length<randomLength){
        if(array.indexOf(rand(10,50))=== -1){
            array.push(random)
    }
}
console.log(array)

 */