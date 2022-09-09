function addNewWEField()
{
   // console.log("hjkl");
   let newNode=document.createElement('textarea');
   newNode.classList.add("form-control");
   newNode.classList.add("weField");
   newNode.classList.add("mt-2");
   newNode.setAttribute('placeholder',"Enter Here")
   newNode.setAttribute('row',3);
   let weOb =document.getElementById('we');
   let weAddButtonOb = document.getElementById('weAddButton');
   weOb.insertBefore(newNode,weAddButtonOb)

}
function addNewAQField()
{
   let newNod= document.createElement('textarea');
   newNod.classList.add("form-control");
   newNod.classList.add("eqField");
   newNod.classList.add("mt-2");
   newNod.setAttribute('placeholder',"Enter Here")
   newNod.setAttribute('row',3);
   let aqOb=document.getElementById('aq');
   let aqAddButtonOb =  document.getElementById('aqAddButton');
   aqOb.insertBefore(newNod,aqAddButtonOb);
}
function genratecv()
{
   // console.log("loading ankur");
          let nameField = document.getElementById('nameField').value;
          let nameT1   = document.getElementById('nameT1');
          nameT1.innerHTML=nameField;
          document.getElementById('nameT2').innerHTML=nameField;
          document.getElementById('contactT').innerHTML=document.getElementById('contactField').value;
          document.getElementById('addressT').innerHTML=document.getElementById('addressField').value;
          document.getElementById('emailT').innerHTML    = document.getElementById('gmailField').value;
          document.getElementById('dobT').innerHTML    = document.getElementById('dobField').value;
          document.getElementById('fbT').innerHTML=document.getElementById('fbField').value;
          document.getElementById('instaT').innerHTML=document.getElementById('instaField').value;
          document.getElementById('linkedT').innerHTML=document.getElementById('linkedField').value;
          document.getElementById('objectiveT').innerHTML=document.getElementById('objectiveField').value;
          // work experince

          let wes=document.getElementsByClassName('weField');
          let str="";
          for(let e of wes)
          {  
                str=str+`<li>${e.value}</li>`;
          } 
          document.getElementById('weT').innerHTML=str;

          // Acdemic qualification
          let aqs=document.getElementsByClassName('eqField');
          let stri="";
          for(let q of aqs)
          {
            stri = stri+`<li>${q.value}</li>`;
           // stri=stri+" "+<li>+q.value+</li>
          }
          document.getElementById('aqT').innerHTML=stri;

          document.getElementById('cv-form').style.display="none";
          document.getElementById('cv-template').style.display="block";
          
}
document.getElementById('cv-template').style.display="none";
function printcv()
          {
            window.print();
          }