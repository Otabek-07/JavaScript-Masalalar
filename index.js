/* 14 - Masala
let son = +prompt("Uch xonali Sonni kiriting");
let brinchi = son%10;
let ikkinchi = (son%100-brinchi)/10;
let uchunchi = (son-son%100)/100;
alert(`${brinchi} ${uchunchi} ${ikkinchi}`);*/


/* 15 - Masala
 let son=+prompt("Uch xonali Sonni kiriting: ");
 let uch=son%10; 
 let ikki=(son%100-son%10)/10; 
 let bir=(son-son%100)/100;
 alert(`${ikki} ${bir} ${uch}`);


 16 - Masala
 let son=+prompt("Uch xonali Sonni kiriting: ");
 let uch=son%10; 
 let ikki=(son%100-son%10)/10; 
 let bir=(son-son%100)/100;
 alert(`${bir} ${uch} ${ikki}`);

 17 - Masala
 let son=+prompt("Sonni kiriting: ");
 let yuzlar=(son%1000-son%100)/100;
 alert(`${yuzlar}`)

  18 - Masala
  let son=+prompt("Sonni kiriting: ");
  let yuzlar=(son%10000-son%1000)/1000;
  alert(`${yuzlar}`)


   19 - Masala
   let N=+prompt("Sekundlarni kiriting: ");
   let qoldiq=N%60;
   let natija=(N-qoldiq)/60;
   alert(`${natija}`);

   20 - Masala
   let N=+prompt("Sekundlarni kiriting: ");
   let qoldiq=N%3600;
   let natija=(N-qoldiq)/3600;
   alert(`${natija}`);


   21 - Masala
   let N=+prompt("Sekundlarni kiriting: ");
   let qoldiq=N%60;
   let natija=(N-qoldiq)/60;
   alert(`${natija} Minut ${qoldiq} Sekunt`);

    22 - Masala
   let N=+prompt("Sekundlarni kiriting: ");
   let qoldiq=N%3600;
   let natija=(N-qoldiq)/3600;
   alert(`${natija} Soat ${qoldiq} Sekund utgan`);

   23 - Masala
   let N=+prompt("Sekundlarni kiriting: ");
   let soat=(N-N%3600)/3600;
   let minut=(N%3600-N%60)/60;
   let sekund=N%60;
   alert(`${soat} Soat ${minut} Minut ${sekund} Sekund utgan`);

  
      for 1 - masala
          let k = +prompt("k sinini kiriting");
          let n = +prompt("n sononi kiriting");
          for ( i = 0; i < n; i++){
            console.log(k);
          }

        for 2 - masala
        
        let a = +prompt("A Sono kiriting");
        let b = +prompt("B Soni kiriting");

        for ( i = a; i <= b; i++){
            console.log(i);
        }


        for 3 - masala
        
         let a = +prompt("A Sono kiriting");
         let b = +prompt("B Soni kiriting");
        
         for ( i = b-1; i > a; i--){

            console.log(i);
         }

        //for 4 -masala
          
        let narx = 3000;
        
        for( i = 1; i < 10 ; i++){
           
            console.log(`${i}kilogram konfetni narxi ${i*narx} ga teng`);
        }

        for 5 - masala
        let narx = 3000;
        
        for( i = 1; i <= 10 ; i++){
           
            console.log(`${i/10} kilogram konfetni narxi ${(i*narx)/10} ga teng`);
        }
        
         for 6 - masala
      let narx = 3000;
        
        for( i = 1; i <= 2 ; i = i+0.2){
           
           let kg = i.toFixed(1);
           console.log(`${kg} kilo konfetni narxi ga teng ${kg * narx} `); 
        }

         for 7 - masala
         let  sum = 0;
         let a = 1;
         let b = 9;
         if ( a < b){
             for ( let i = b; i > a; i-- ){
          sum += i;
        }
        console.log('sum=' + sum);
         }
    
        for - 8 masala
        let  sum = 0;
        let a = 3;
        let b = 5;
        if (a < b){
            for ( let i = b; i > a; i-- ){
            sum *= i;
            }
            console.log('sum=' + sum);
        }

        for 9 - masala
        let  sum = 0;
        let a = 4;
        let b = 10;
        if ( a < b) {
            for (  i = a; i < b; i++ ){
         sum =+ i * i;
        }
        console.log('sum=' + sum); 
        }

        for 10 - masala
       
        let n = 5;
        let sum = 0;
        if ( n > 0) {

         for (i = 1; i <= n; i++) {
            sum += i;

            
         }
         console.log(sum);

        }*/
        

