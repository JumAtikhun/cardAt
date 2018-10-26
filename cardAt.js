function cardAt() {  
  var a = document.getElementById("inputCardnum").value; 
  if( a>=0 && a<13 ){
     if( a % 13 < 9 ){ myCard = (a % 13) + 2; document.writeln(myCard); }
     else if( a % 13 == 9 ){ myCard = "J"; document.writeln(myCard); }
     else if( a % 13 == 10 ){ myCard = "Q"; document.writeln(myCard); }
     else if( a % 13 == 11 ){ myCard = "K"; document.writeln(myCard); }
     else if( a % 13 == 12 ){ myCard = "A"; document.writeln(myCard); }
   document.writeln("C");
   }
   else if( a>=13 && a<26 ){
     if( a % 13 < 9 ){ myCard = (a % 13) + 2; document.writeln(myCard); }
     else if( a % 13 == 9 ){ myCard = "J"; document.writeln(myCard); }
     else if( a % 13 == 10 ){ myCard = "Q"; document.writeln(myCard); }
     else if( a % 13 == 11 ){ myCard = "K"; document.writeln(myCard); }
     else if( a % 13 == 12 ){ myCard = "A"; document.writeln(myCard); }
   document.writeln("D");
   }
  else if( a>=26 && a<39 ){
     if( a % 13 < 9 ){ myCard = (a % 13) + 2; document.writeln(myCard); }
     else if( a % 13 == 9){ myCard = "J"; document.writeln(myCard); }
     else if ( a % 13 == 10){ myCard = "Q"; document.writeln(myCard); }
     else if ( a % 13 == 11){ myCard = "K"; document.writeln(myCard); }
     else if ( a % 13 == 12){ myCard = "A"; document.writeln(myCard); }
   document.writeln("H");
  }
  else if( a>=39 && a<52 ){
     if ( a % 13 < 9 ){ myCard = (a % 13) + 2; document.writeln(myCard); }
     else if ( a % 13 == 9){ myCard = "J"; document.writeln(myCard); }
     else if ( a % 13 == 10){ myCard = "Q"; document.writeln(myCard); }
     else if ( a % 13 == 11){ myCard = "K"; document.writeln(myCard); }
     else if ( a % 13 == 12){ myCard = "A"; document.writeln(myCard); }
   document.writeln("S");
  }
}
