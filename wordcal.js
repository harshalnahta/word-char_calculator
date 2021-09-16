function calcf(){
    var text = document.getElementById("abc").value
    var c1=0,c2=0,c3=0,c4=0,c5=0,c6=1,c8=1;
    var c7=text.length;
    function isLetter(str) {
return str.length === 1 && str.match(/[a-z]/i);
}
function isnum(str) {
return str.length === 1 && str.match(/[0-9]/i);
}
    for(var i=0;i<text.length;i++)
    {
     if(isLetter(text[i]))
     c1++;
       else if(isnum(text[i]))
      c2++;
      else if(text[i]==" ")
      c3++;
      else if((text[i]=="\n" && text[i+1]!="\n") || (text[i]=="\n"&&text[i+1]=="\n"))
     c8++;
      else if(text[i]=='.')
      c4++;
     else
     c5++;
     if((text[i]==" "||text[i]=="\n") && text[i+1]!=" "  )
     c6++;
     
     
    }
     
    var c11=c22=c33=c44=c55=c66=c77=c88=0;
     var u1=setInterval(update1 , 30)
    function update1()
    {
       document.getElementById("lett").innerHTML=c11;
        if(c11!=c1)
           c11++;
           if(c11==c1){
        document.getElementById("lett").innerHTML=c1;
        clearInterval(u1);
           }
    }
     
    var u2=setInterval(update2 , 30)
    function update2()
    {
       document.getElementById("tot").innerHTML=c77;

     if(c77!=c7)
           c77++;
           if(c77==c7){
        document.getElementById("tot").innerHTML=c7;
        clearInterval(u2);
           }
    }

    var u3=setInterval(update3 , 30)
    function update3()
    {
       document.getElementById("word").innerHTML=c66;

   if(c66!=c6)
           c66++;
           if(c66==c6){
        document.getElementById("word").innerHTML=c6;
        clearInterval(u3);
           }
    }

    var u4=setInterval(update4 , 30)
    function update4()
    {
       document.getElementById("num").innerHTML=c22;
       if(c22!=c2)
           c22++;
           if(c22==c2){
        document.getElementById("num").innerHTML=c2;
        clearInterval(u4);
           }
    }

    var u5=setInterval(update5 , 30)
    function update5()
    {
       document.getElementById("space").innerHTML=c33;

      if(c33!=c3)
           c33++;
           if(c33==c3){
        document.getElementById("space").innerHTML=c3;
        clearInterval(u5);
           }
    }

    var u6=setInterval(update6 , 30)
    function update6()
    {
       document.getElementById("line").innerHTML=c44;

        if(c44!=c4)
           c44++;
           if(c44==c4){
        document.getElementById("line").innerHTML=c4;
        clearInterval(u6);
           }
    }

    var u7=setInterval(update7 , 30)
    function update7()
    {
       document.getElementById("oc").innerHTML=c55;

        if(c55!=c5)
           c55++;
           if(c55==c5){
        document.getElementById("oc").innerHTML=c5;
        clearInterval(u7);
           }
    }
    var u8=setInterval(update8 , 30)
    function update8()
    {
       document.getElementById("para").innerHTML=c88;

        if(c88!=c8)
           c88++;
           if(c88==c8){
        document.getElementById("para").innerHTML=c8;
        clearInterval(u8);
           }
    }

}