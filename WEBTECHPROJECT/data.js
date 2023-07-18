const firebaseConfig = {
  //* SORRY CANT PROVIDE YOU THE DATA BASE CONFIGURATION 
  };

  firebase.initializeApp(firebaseConfig);
  var correctcount=0;
  var wrongans=5;
  var total=0;
  var QUESTIONcounts=1;
  var Q1,O1,O2,O3,O4;
  var AQ1=0,AQ2=0,AQ3=0,AQ4=0,AQ5=0;
var name1,lastname,DOB,gender,phone,Branch1;
document.getElementById("userform").addEventListener("submit",nik);
function nik(e)
{  e.preventDefault();
   
     name1=document.getElementById("firstname").value;
     lastname=document.getElementById("lastname").value;
     DOB=document.getElementById("dob").value;
     gender=document.getElementById("gender").value;
     phone=document.getElementById("phone").value;
     Branch1=document.getElementById("branch").value;
     
     console.log(name1,lastname,DOB,gender,phone,Branch1);
    savemassage(name1,lastname,DOB,gender,phone,Branch1);

}

function savemassage(name1,lastname,DOB,gender,phone,Branch1)
{
    var massageRef= firebase.database().ref("/").child(phone).update({
name: name1,
lastname: lastname,
DOB: DOB,
GENDER:gender,
Phone:phone,
branch:Branch1
});

setTimeout(callMainScreen,2000);
}

function callMainScreen()
{
    document.getElementById("information").style.display="none";
    document.getElementById("question").style.display="block";
    document.getElementById("editbranch").style.display="block";
    showQ();
    
}

function nextQUE()
{ 
    if(QUESTIONcounts==5)
    {  
      document.getElementById("nextQue1").style.display="none";
      document.getElementById("previousQue1").style.display="block";
      document.getElementById("ansSubmit").style.display="block"; 
    }
    else 
    {
      QUESTIONcounts=QUESTIONcounts+1;
    }
    if(QUESTIONcounts>1)
    {
        document.getElementById("previousQue1").style.display="block";
    }
    else
    {
        document.getElementById("previousQue1").style.display="none";
    }
document.getElementById("O1").style.backgroundColor="rgba(255, 255, 255, 0)";
document.getElementById("O2").style.backgroundColor="rgba(255, 255, 255, 0)";
document.getElementById("O3").style.backgroundColor="rgba(255, 255, 255, 0)";
document.getElementById("O4").style.backgroundColor="rgba(255, 255, 255, 0)";
    showQ();
    
}

function prevQUE()
{   
    if(QUESTIONcounts==1)
    {
        document.getElementById("previousQue1").style.display="none"
        document.getElementById("nextQue1").style.display="block";
    }
    if(QUESTIONcounts<=5)
    {
        
        document.getElementById("nextQue1").style.display="block";
    }
    if(QUESTIONcounts>1)
    {
        QUESTIONcounts=QUESTIONcounts-1;
    }
    else 
    {   
        document.getElementById("nextQue1").style.display="block";
    }
    document.getElementById("O1").style.backgroundColor="rgba(255, 255, 255, 0)";
document.getElementById("O2").style.backgroundColor="rgba(255, 255, 255, 0)";
document.getElementById("O3").style.backgroundColor="rgba(255, 255, 255, 0)";
document.getElementById("O4").style.backgroundColor="rgba(255, 255, 255, 0)";
    showQ();
}

function showQ()
{
    if(Branch1=='electronic')
    {     if(QUESTIONcounts==1)
       {
         Q1="What is a diode?";
         O1="A device that amplifies signals";
         O2="A device that generates electrical energy";
         O3="A device that stores electrical energy";
         O4="A device that allows current to flow in only one direction";
         document.getElementById("Q1").innerHTML =Q1;
         document.getElementById("O1").innerHTML =O1;
         document.getElementById("O2").innerHTML =O2;
         document.getElementById("O3").innerHTML =O3;
         document.getElementById("O4").innerHTML =O4;
         
       }
       if(QUESTIONcounts==2)
       {
         Q1="What is the unit of resistance?";
         O1="Ohm";
         O2="Ampere";
         O3="Volt";
         O4="Watt";
         document.getElementById("Q1").innerHTML =Q1;
         document.getElementById("O1").innerHTML =O1;
         document.getElementById("O2").innerHTML =O2;
         document.getElementById("O3").innerHTML =O3;
         document.getElementById("O4").innerHTML =O4;
       }
       if(QUESTIONcounts==3)
       {
         Q1="Which component is used to store electrical charge?";
         O1="Resistor";
         O2="Capacitor";
         O3="Inductor";
         O4="Transformer";
         document.getElementById("Q1").innerHTML =Q1;
         document.getElementById("O1").innerHTML =O1;
         document.getElementById("O2").innerHTML =O2;
         document.getElementById("O3").innerHTML =O3;
         document.getElementById("O4").innerHTML =O4;
       }
       if(QUESTIONcounts==4)
       {
         Q1="What is the purpose of a transistor?";
         O1="To regulate voltage";
         O2="To amplify or switch electronic signals";
         O3="To store electrical energy";
         O4=" To convert AC to DC";
         document.getElementById("Q1").innerHTML =Q1;
         document.getElementById("O1").innerHTML =O1;
         document.getElementById("O2").innerHTML =O2;
         document.getElementById("O3").innerHTML =O3;
         document.getElementById("O4").innerHTML =O4;
       }
       if(QUESTIONcounts==5)
       {
         Q1="What is the basic unit of current?";
         O1="Ohm";
         O2="Ampere";
         O3="Volt";
         O4="Watt";
         document.getElementById("Q1").innerHTML =Q1;
         document.getElementById("O1").innerHTML =O1;
         document.getElementById("O2").innerHTML =O2;
         document.getElementById("O3").innerHTML =O3;
         document.getElementById("O4").innerHTML =O4;
       }   }
       if(Branch1=='mechanical')
       {     if(QUESTIONcounts==1)
          {
            Q1="Which of the following is a type of screw thread?";
            O1="Acme thread";
            O2="Bevel thread";
            O3="Buttress thread";
            O4="Taper thread";
            document.getElementById("Q1").innerHTML =Q1;
            document.getElementById("O1").innerHTML =O1;
            document.getElementById("O2").innerHTML =O2;
            document.getElementById("O3").innerHTML =O3;
            document.getElementById("O4").innerHTML =O4;
   
          }
          if(QUESTIONcounts==2)
          {
            Q1="Which of the following is a property of a fluid?";
            O1="Rigidity";
            O2="Compressibility";
            O3="Elasticity";
            O4="Plasticity";
            document.getElementById("Q1").innerHTML =Q1;
            document.getElementById("O1").innerHTML =O1;
            document.getElementById("O2").innerHTML =O2;
            document.getElementById("O3").innerHTML =O3;
            document.getElementById("O4").innerHTML =O4;
          }
          if(QUESTIONcounts==3)
          {
            Q1="Which law states that for every action, there is an equal and opposite reaction?";
            O1="Newton's first law";
            O2="Newton's second law";
            O3="Newton's third law";
            O4="Boyle's law";
            document.getElementById("Q1").innerHTML =Q1;
            document.getElementById("O1").innerHTML =O1;
            document.getElementById("O2").innerHTML =O2;
            document.getElementById("O3").innerHTML =O3;
            document.getElementById("O4").innerHTML =O4;
          }
          if(QUESTIONcounts==4)
          {
            Q1="Which of the following is a type of gear?";
            O1="Bevel gear";
            O2="Friction gear";
            O3="Helical gear";
            O4="Worm gear";
            document.getElementById("Q1").innerHTML =Q1;
            document.getElementById("O1").innerHTML =O1;
            document.getElementById("O2").innerHTML =O2;
            document.getElementById("O3").innerHTML =O3;
            document.getElementById("O4").innerHTML =O4;
          }
          if(QUESTIONcounts==5)
          {
            Q1="Which of the following is a method of heat transfer that does not require a medium to propagate?";
            O1="Conduction";
            O2="Convection";
            O3="Radiation";
            O4="Insulation";
            document.getElementById("Q1").innerHTML =Q1;
            document.getElementById("O1").innerHTML =O1;
            document.getElementById("O2").innerHTML =O2;
            document.getElementById("O3").innerHTML =O3;
            document.getElementById("O4").innerHTML =O4;
          }   }
          if(Branch1=='civil')
          {     if(QUESTIONcounts==1)
             {
               Q1="What is the unit of measurement for work in civil engineering?";
               O1="Watts";
               O2="Joules";
               O3="Newton-meters";
               O4="Foot-pounds";
               document.getElementById("Q1").innerHTML =Q1;
               document.getElementById("O1").innerHTML =O1;
               document.getElementById("O2").innerHTML =O2;
               document.getElementById("O3").innerHTML =O3;
               document.getElementById("O4").innerHTML =O4;
      
             }
             if(QUESTIONcounts==2)
             {
               Q1="What is the formula for calculating the area of a triangle?";
               O1="A = lw";
               O2="A = 1/2bh";
               O3="A = πr^2";
               O4=" A = l + w + h";
               document.getElementById("Q1").innerHTML =Q1;
               document.getElementById("O1").innerHTML =O1;
               document.getElementById("O2").innerHTML =O2;
               document.getElementById("O3").innerHTML =O3;
               document.getElementById("O4").innerHTML =O4;
             }
             if(QUESTIONcounts==3)
             {
               Q1="Which of the following is not a type of foundation?";
               O1="Strip foundation";
               O2="Raft foundation";
               O3="Piled foundation";
               O4="Skyscraper foundation";
               document.getElementById("Q1").innerHTML =Q1;
               document.getElementById("O1").innerHTML =O1;
               document.getElementById("O2").innerHTML =O2;
               document.getElementById("O3").innerHTML =O3;
               document.getElementById("O4").innerHTML =O4;
             }
             if(QUESTIONcounts==4)
             {
               Q1="Which of the following is a type of concrete mix?";
               O1="Lean mix";
               O2="Fat mix";
               O3="Rich mix";
               O4=" None of the above";
               document.getElementById("Q1").innerHTML =Q1;
               document.getElementById("O1").innerHTML =O1;
               document.getElementById("O2").innerHTML =O2;
               document.getElementById("O3").innerHTML =O3;
               document.getElementById("O4").innerHTML =O4;
             }
             if(QUESTIONcounts==5)
             {
               Q1="What is the standard length of a steel reinforcement bar?";
               O1="6 meters";
               O2="9 meters";
               O3="12 meters";
               O4="15 meters";
               document.getElementById("Q1").innerHTML =Q1;
               document.getElementById("O1").innerHTML =O1;
               document.getElementById("O2").innerHTML =O2;
               document.getElementById("O3").innerHTML =O3;
               document.getElementById("O4").innerHTML =O4;
             }   }

}

function OptionA()
{
  if(Branch1=='electronic')
  {
     if(QUESTIONcounts==1)
  { if(AQ1==0){
  document.getElementById("O1").style.backgroundColor="red";
  document.getElementById("O2").style.backgroundColor="rgba(255, 255, 255, 0)";
  document.getElementById("O3").style.backgroundColor="rgba(255, 255, 255, 0)";
  document.getElementById("O4").style.backgroundColor="rgba(255, 255, 255, 0)";
  AQ1="chukla";
  }else{
    alert("you have already attempted this Question!!");
  }}
   if(QUESTIONcounts==2)
  {if(AQ2==0){
  document.getElementById("O1").style.backgroundColor="green";
  document.getElementById("O2").style.backgroundColor="rgba(255, 255, 255, 0)";
  document.getElementById("O3").style.backgroundColor="rgba(255, 255, 255, 0)";
  document.getElementById("O4").style.backgroundColor="rgba(255, 255, 255, 0)";
  AQ2="barobar";}
  else{
    alert("you have already attempted this Question!!");
  }
  }
  if(QUESTIONcounts==3)
  { if(AQ3==0){
    document.getElementById("O1").style.backgroundColor="red";
  document.getElementById("O2").style.backgroundColor="rgba(255, 255, 255, 0)";
  document.getElementById("O3").style.backgroundColor="rgba(255, 255, 255, 0)";
  document.getElementById("O4").style.backgroundColor="rgba(255, 255, 255, 0)";
  AQ3="chukla";
  }else{
    alert("you have already attempted this Question!!");
  }}
  if(QUESTIONcounts==4)
  {if(AQ4==0){
    document.getElementById("O1").style.backgroundColor="red";
  document.getElementById("O2").style.backgroundColor="rgba(255, 255, 255, 0)";
  document.getElementById("O3").style.backgroundColor="rgba(255, 255, 255, 0)";
  document.getElementById("O4").style.backgroundColor="rgba(255, 255, 255, 0)";
  AQ4="chukla";
  }else{
    alert("you have already attempted this Question!!");
  }}
  if(QUESTIONcounts==5)
  {if(AQ5==0){
    document.getElementById("O1").style.backgroundColor="red";
  document.getElementById("O2").style.backgroundColor="rgba(255, 255, 255, 0)";
  document.getElementById("O3").style.backgroundColor="rgba(255, 255, 255, 0)";
  document.getElementById("O4").style.backgroundColor="rgba(255, 255, 255, 0)";
  AQ5="chukla";
  }  else{
    alert("you have already attempted this Question!!");
  } }}
  if(Branch1=='mechanical')
  {
    if(QUESTIONcounts==1)
  { if(AQ1==0){
  document.getElementById("O1").style.backgroundColor="green";
  document.getElementById("O2").style.backgroundColor="rgba(255, 255, 255, 0)";
  document.getElementById("O3").style.backgroundColor="rgba(255, 255, 255, 0)";
  document.getElementById("O4").style.backgroundColor="rgba(255, 255, 255, 0)";
  AQ1="barobar";
  }else{
   alert("you have already attempted this Question!!");
  }}
  if(QUESTIONcounts==2)
  {if(AQ2==0){
  document.getElementById("O1").style.backgroundColor="red";
  document.getElementById("O2").style.backgroundColor="rgba(255, 255, 255, 0)";
  document.getElementById("O3").style.backgroundColor="rgba(255, 255, 255, 0)";
  document.getElementById("O4").style.backgroundColor="rgba(255, 255, 255, 0)";
  AQ2="chukla";}
  else{
   alert("you have already attempted this Question!!");
  }
  }
  if(QUESTIONcounts==3)
  { if(AQ3==0){
   document.getElementById("O1").style.backgroundColor="red";
  document.getElementById("O2").style.backgroundColor="rgba(255, 255, 255, 0)";
  document.getElementById("O3").style.backgroundColor="rgba(255, 255, 255, 0)";
  document.getElementById("O4").style.backgroundColor="rgba(255, 255, 255, 0)";
  AQ3="chukla";
  }else{
   alert("you have already attempted this Question!!");
  }}
  if(QUESTIONcounts==4)
  {if(AQ4==0){
   document.getElementById("O1").style.backgroundColor="green";
  document.getElementById("O2").style.backgroundColor="rgba(255, 255, 255, 0)";
  document.getElementById("O3").style.backgroundColor="rgba(255, 255, 255, 0)";
  document.getElementById("O4").style.backgroundColor="rgba(255, 255, 255, 0)";
  AQ4="barobar";
  }else{
   alert("you have already attempted this Question!!");
  }}
  if(QUESTIONcounts==5)
  {if(AQ5==0){
   document.getElementById("O1").style.backgroundColor="red";
  document.getElementById("O2").style.backgroundColor="rgba(255, 255, 255, 0)";
  document.getElementById("O3").style.backgroundColor="rgba(255, 255, 255, 0)";
  document.getElementById("O4").style.backgroundColor="rgba(255, 255, 255, 0)";
  AQ5="chukla";
  }  else{
   alert("you have already attempted this Question!!");
  } }}
  if(Branch1=='civil')
  {
    if(QUESTIONcounts==1)
  { if(AQ1==0){
  document.getElementById("O1").style.backgroundColor="red";
  document.getElementById("O2").style.backgroundColor="rgba(255, 255, 255, 0)";
  document.getElementById("O3").style.backgroundColor="rgba(255, 255, 255, 0)";
  document.getElementById("O4").style.backgroundColor="rgba(255, 255, 255, 0)";
  AQ1="chukla";
  }else{
   alert("you have already attempted this Question!!");
  }}
  if(QUESTIONcounts==2)
  {if(AQ2==0){
  document.getElementById("O1").style.backgroundColor="red";
  document.getElementById("O2").style.backgroundColor="rgba(255, 255, 255, 0)";
  document.getElementById("O3").style.backgroundColor="rgba(255, 255, 255, 0)";
  document.getElementById("O4").style.backgroundColor="rgba(255, 255, 255, 0)";
  AQ2="chukla";}
  else{
   alert("you have already attempted this Question!!");
  }
  }
  if(QUESTIONcounts==3)
  { if(AQ3==0){
   document.getElementById("O1").style.backgroundColor="red";
  document.getElementById("O2").style.backgroundColor="rgba(255, 255, 255, 0)";
  document.getElementById("O3").style.backgroundColor="rgba(255, 255, 255, 0)";
  document.getElementById("O4").style.backgroundColor="rgba(255, 255, 255, 0)";
  AQ3="chukla";
  }else{
   alert("you have already attempted this Question!!");
  }}
  if(QUESTIONcounts==4)
  {if(AQ4==0){
   document.getElementById("O1").style.backgroundColor="red";
  document.getElementById("O2").style.backgroundColor="rgba(255, 255, 255, 0)";
  document.getElementById("O3").style.backgroundColor="rgba(255, 255, 255, 0)";
  document.getElementById("O4").style.backgroundColor="rgba(255, 255, 255, 0)";
  AQ4="chukla";
  }else{
   alert("you have already attempted this Question!!");
  }}
  if(QUESTIONcounts==5)
  {if(AQ5==0){
   document.getElementById("O1").style.backgroundColor="red";
  document.getElementById("O2").style.backgroundColor="rgba(255, 255, 255, 0)";
  document.getElementById("O3").style.backgroundColor="rgba(255, 255, 255, 0)";
  document.getElementById("O4").style.backgroundColor="rgba(255, 255, 255, 0)";
  AQ5="chukla";
  }  else{
   alert("you have already attempted this Question!!");
  } }}
  }
function OptionB()
{
  if(Branch1=='electronic')
  {
     if(QUESTIONcounts==1)
  { if(AQ1==0){
  document.getElementById("O2").style.backgroundColor="red";
  document.getElementById("O1").style.backgroundColor="rgba(255, 255, 255, 0)";
  document.getElementById("O3").style.backgroundColor="rgba(255, 255, 255, 0)";
  document.getElementById("O4").style.backgroundColor="rgba(255, 255, 255, 0)";
  AQ1="chukla";
  }else{
    alert("you have already attempted this Question!!");
  }}
   if(QUESTIONcounts==2)
  {if(AQ2==0){
  document.getElementById("O2").style.backgroundColor="red";
  document.getElementById("O1").style.backgroundColor="rgba(255, 255, 255, 0)";
  document.getElementById("O3").style.backgroundColor="rgba(255, 255, 255, 0)";
  document.getElementById("O4").style.backgroundColor="rgba(255, 255, 255, 0)";
  AQ2="chukla";}
  else{
    alert("you have already attempted this Question!!");
  }
  }
  if(QUESTIONcounts==3)
  { if(AQ3==0){
    document.getElementById("O2").style.backgroundColor="green";
  document.getElementById("O1").style.backgroundColor="rgba(255, 255, 255, 0)";
  document.getElementById("O3").style.backgroundColor="rgba(255, 255, 255, 0)";
  document.getElementById("O4").style.backgroundColor="rgba(255, 255, 255, 0)";
  AQ3="barobar";
  }else{
    alert("you have already attempted this Question!!");
  }}
  if(QUESTIONcounts==4)
  {if(AQ4==0){
    document.getElementById("O2").style.backgroundColor="green";
  document.getElementById("O1").style.backgroundColor="rgba(255, 255, 255, 0)";
  document.getElementById("O3").style.backgroundColor="rgba(255, 255, 255, 0)";
  document.getElementById("O4").style.backgroundColor="rgba(255, 255, 255, 0)";
  AQ4="barobar";
  }else{
    alert("you have already attempted this Question!!");
  }}
  if(QUESTIONcounts==5)
  {if(AQ5==0){
    document.getElementById("O2").style.backgroundColor="green";
  document.getElementById("O1").style.backgroundColor="rgba(255, 255, 255, 0)";
  document.getElementById("O3").style.backgroundColor="rgba(255, 255, 255, 0)";
  document.getElementById("O4").style.backgroundColor="rgba(255, 255, 255, 0)";
  AQ5="barobar";
  }  else{
    alert("you have already attempted this Question!!");
  } }}
  if(Branch1=='mechanical')
  {
    if(QUESTIONcounts==1)
  { if(AQ1==0){
  document.getElementById("O2").style.backgroundColor="red";
  document.getElementById("O1").style.backgroundColor="rgba(255, 255, 255, 0)";
  document.getElementById("O3").style.backgroundColor="rgba(255, 255, 255, 0)";
  document.getElementById("O4").style.backgroundColor="rgba(255, 255, 255, 0)";
  AQ1="chukla";
  }else{
   alert("you have already attempted this Question!!");
  }}
  if(QUESTIONcounts==2)
  {if(AQ2==0){
  document.getElementById("O2").style.backgroundColor="green";
  document.getElementById("O1").style.backgroundColor="rgba(255, 255, 255, 0)";
  document.getElementById("O3").style.backgroundColor="rgba(255, 255, 255, 0)";
  document.getElementById("O4").style.backgroundColor="rgba(255, 255, 255, 0)";
  AQ2="barobar";}
  else{
   alert("you have already attempted this Question!!");
  }
  }
  if(QUESTIONcounts==3)
  { if(AQ3==0){
   document.getElementById("O2").style.backgroundColor="red";
  document.getElementById("O1").style.backgroundColor="rgba(255, 255, 255, 0)";
  document.getElementById("O3").style.backgroundColor="rgba(255, 255, 255, 0)";
  document.getElementById("O4").style.backgroundColor="rgba(255, 255, 255, 0)";
  AQ3="chukla";
  }else{
   alert("you have already attempted this Question!!");
  }}
  if(QUESTIONcounts==4)
  {if(AQ4==0){
   document.getElementById("O2").style.backgroundColor="red";
  document.getElementById("O1").style.backgroundColor="rgba(255, 255, 255, 0)";
  document.getElementById("O3").style.backgroundColor="rgba(255, 255, 255, 0)";
  document.getElementById("O4").style.backgroundColor="rgba(255, 255, 255, 0)";
  AQ4="chukla";
  }else{
   alert("you have already attempted this Question!!");
  }}
  if(QUESTIONcounts==5)
  {if(AQ5==0){
   document.getElementById("O2").style.backgroundColor="red";
  document.getElementById("O1").style.backgroundColor="rgba(255, 255, 255, 0)";
  document.getElementById("O3").style.backgroundColor="rgba(255, 255, 255, 0)";
  document.getElementById("O4").style.backgroundColor="rgba(255, 255, 255, 0)";
  AQ5="chukla";
  }  else{
   alert("you have already attempted this Question!!");
  } }}
  if(Branch1=='civil')
  {
    if(QUESTIONcounts==1)
  { if(AQ1==0){
  document.getElementById("O2").style.backgroundColor="red";
  document.getElementById("O1").style.backgroundColor="rgba(255, 255, 255, 0)";
  document.getElementById("O3").style.backgroundColor="rgba(255, 255, 255, 0)";
  document.getElementById("O4").style.backgroundColor="rgba(255, 255, 255, 0)";
  AQ1="chukla";
  }else{
   alert("you have already attempted this Question!!");
  }}
  if(QUESTIONcounts==2)
  {if(AQ2==0){
  document.getElementById("O2").style.backgroundColor="green";
  document.getElementById("O1").style.backgroundColor="rgba(255, 255, 255, 0)";
  document.getElementById("O3").style.backgroundColor="rgba(255, 255, 255, 0)";
  document.getElementById("O4").style.backgroundColor="rgba(255, 255, 255, 0)";
  AQ2="barobar";}
  else{
   alert("you have already attempted this Question!!");
  }
  }
  if(QUESTIONcounts==3)
  { if(AQ3==0){
   document.getElementById("O2").style.backgroundColor="red";
  document.getElementById("O1").style.backgroundColor="rgba(255, 255, 255, 0)";
  document.getElementById("O3").style.backgroundColor="rgba(255, 255, 255, 0)";
  document.getElementById("O4").style.backgroundColor="rgba(255, 255, 255, 0)";
  AQ3="chukla";
  }else{
   alert("you have already attempted this Question!!");
  }}
  if(QUESTIONcounts==4)
  {if(AQ4==0){
   document.getElementById("O2").style.backgroundColor="red";
  document.getElementById("O1").style.backgroundColor="rgba(255, 255, 255, 0)";
  document.getElementById("O3").style.backgroundColor="rgba(255, 255, 255, 0)";
  document.getElementById("O4").style.backgroundColor="rgba(255, 255, 255, 0)";
  AQ4="chukla";
  }else{
   alert("you have already attempted this Question!!");
  }}
  if(QUESTIONcounts==5)
  {if(AQ5==0){
   document.getElementById("O2").style.backgroundColor="red";
  document.getElementById("O1").style.backgroundColor="rgba(255, 255, 255, 0)";
  document.getElementById("O3").style.backgroundColor="rgba(255, 255, 255, 0)";
  document.getElementById("O4").style.backgroundColor="rgba(255, 255, 255, 0)";
  AQ5="chukla";
  }  else{
   alert("you have already attempted this Question!!");
  } }}
  }
function OptionC()
{
  if(Branch1=='electronic')
  {
     if(QUESTIONcounts==1)
  { if(AQ1==0){
  document.getElementById("O3").style.backgroundColor="red";
  document.getElementById("O2").style.backgroundColor="rgba(255, 255, 255, 0)";
  document.getElementById("O1").style.backgroundColor="rgba(255, 255, 255, 0)";
  document.getElementById("O4").style.backgroundColor="rgba(255, 255, 255, 0)";
  AQ1="chukla";
  }else{
    alert("you have already attempted this Question!!");
  }}
   if(QUESTIONcounts==2)
  {if(AQ2==0){
  document.getElementById("O3").style.backgroundColor="red";
  document.getElementById("O2").style.backgroundColor="rgba(255, 255, 255, 0)";
  document.getElementById("O1").style.backgroundColor="rgba(255, 255, 255, 0)";
  document.getElementById("O4").style.backgroundColor="rgba(255, 255, 255, 0)";
  AQ2="chukla";}
  else{
    alert("you have already attempted this Question!!");
  }
  }
  if(QUESTIONcounts==3)
  { if(AQ3==0){
    document.getElementById("O3").style.backgroundColor="red";
  document.getElementById("O2").style.backgroundColor="rgba(255, 255, 255, 0)";
  document.getElementById("O1").style.backgroundColor="rgba(255, 255, 255, 0)";
  document.getElementById("O4").style.backgroundColor="rgba(255, 255, 255, 0)";
  AQ3="chukla";
  }else{
    alert("you have already attempted this Question!!");
  }}
  if(QUESTIONcounts==4)
  {if(AQ4==0){
    document.getElementById("O3").style.backgroundColor="red";
  document.getElementById("O2").style.backgroundColor="rgba(255, 255, 255, 0)";
  document.getElementById("O1").style.backgroundColor="rgba(255, 255, 255, 0)";
  document.getElementById("O4").style.backgroundColor="rgba(255, 255, 255, 0)";
  AQ4="chukla";
  }else{
    alert("you have already attempted this Question!!");
  }}
  if(QUESTIONcounts==5)
  {if(AQ5==0){
    document.getElementById("O3").style.backgroundColor="red";
  document.getElementById("O2").style.backgroundColor="rgba(255, 255, 255, 0)";
  document.getElementById("O1").style.backgroundColor="rgba(255, 255, 255, 0)";
  document.getElementById("O4").style.backgroundColor="rgba(255, 255, 255, 0)";
  AQ5="chukla";
  }  else{
    alert("you have already attempted this Question!!");
  } }}
  if(Branch1=='mechanical')
  {
    if(QUESTIONcounts==1)
  { if(AQ1==0){
  document.getElementById("O3").style.backgroundColor="red";
  document.getElementById("O2").style.backgroundColor="rgba(255, 255, 255, 0)";
  document.getElementById("O1").style.backgroundColor="rgba(255, 255, 255, 0)";
  document.getElementById("O4").style.backgroundColor="rgba(255, 255, 255, 0)";
  AQ1="chukla";
  }else{
   alert("you have already attempted this Question!!");
  }}
  if(QUESTIONcounts==2)
  {if(AQ2==0){
  document.getElementById("O3").style.backgroundColor="red";
  document.getElementById("O2").style.backgroundColor="rgba(255, 255, 255, 0)";
  document.getElementById("O1").style.backgroundColor="rgba(255, 255, 255, 0)";
  document.getElementById("O4").style.backgroundColor="rgba(255, 255, 255, 0)";
  AQ2="chukla";}
  else{
   alert("you have already attempted this Question!!");
  }
  }
  if(QUESTIONcounts==3)
  { if(AQ3==0){
   document.getElementById("O3").style.backgroundColor="green";
  document.getElementById("O2").style.backgroundColor="rgba(255, 255, 255, 0)";
  document.getElementById("O1").style.backgroundColor="rgba(255, 255, 255, 0)";
  document.getElementById("O4").style.backgroundColor="rgba(255, 255, 255, 0)";
  AQ3="barobar";
  }else{
   alert("you have already attempted this Question!!");
  }}
  if(QUESTIONcounts==4)
  {if(AQ4==0){
   document.getElementById("O3").style.backgroundColor="red";
  document.getElementById("O2").style.backgroundColor="rgba(255, 255, 255, 0)";
  document.getElementById("O1").style.backgroundColor="rgba(255, 255, 255, 0)";
  document.getElementById("O4").style.backgroundColor="rgba(255, 255, 255, 0)";
  AQ4="chukla";
  }else{
   alert("you have already attempted this Question!!");
  }}
  if(QUESTIONcounts==5)
  {if(AQ5==0){
   document.getElementById("O3").style.backgroundColor="green";
  document.getElementById("O2").style.backgroundColor="rgba(255, 255, 255, 0)";
  document.getElementById("O1").style.backgroundColor="rgba(255, 255, 255, 0)";
  document.getElementById("O4").style.backgroundColor="rgba(255, 255, 255, 0)";
  AQ5="barobar";
  }  else{
   alert("you have already attempted this Question!!");
  } }}
  if(Branch1=='civil')
  {
    if(QUESTIONcounts==1)
  { if(AQ1==0){
  document.getElementById("O3").style.backgroundColor="red";
  document.getElementById("O2").style.backgroundColor="rgba(255, 255, 255, 0)";
  document.getElementById("O1").style.backgroundColor="rgba(255, 255, 255, 0)";
  document.getElementById("O4").style.backgroundColor="rgba(255, 255, 255, 0)";
  AQ1="chukla";
  }else{
   alert("you have already attempted this Question!!");
  }}
  if(QUESTIONcounts==2)
  {if(AQ2==0){
  document.getElementById("O3").style.backgroundColor="red";
  document.getElementById("O2").style.backgroundColor="rgba(255, 255, 255, 0)";
  document.getElementById("O1").style.backgroundColor="rgba(255, 255, 255, 0)";
  document.getElementById("O4").style.backgroundColor="rgba(255, 255, 255, 0)";
  AQ2="chukla";}
  else{
   alert("you have already attempted this Question!!");
  }
  }
  if(QUESTIONcounts==3)
  { if(AQ3==0){
   document.getElementById("O3").style.backgroundColor="red";
  document.getElementById("O2").style.backgroundColor="rgba(255, 255, 255, 0)";
  document.getElementById("O1").style.backgroundColor="rgba(255, 255, 255, 0)";
  document.getElementById("O4").style.backgroundColor="rgba(255, 255, 255, 0)";
  AQ3="chukla";
  }else{
   alert("you have already attempted this Question!!");
  }}
  if(QUESTIONcounts==4)
  {if(AQ4==0){
   document.getElementById("O3").style.backgroundColor="green";
  document.getElementById("O2").style.backgroundColor="rgba(255, 255, 255, 0)";
  document.getElementById("O1").style.backgroundColor="rgba(255, 255, 255, 0)";
  document.getElementById("O4").style.backgroundColor="rgba(255, 255, 255, 0)";
  AQ4="barobar";
  }else{
   alert("you have already attempted this Question!!");
  }}
  if(QUESTIONcounts==5)
  {if(AQ5==0){
   document.getElementById("O3").style.backgroundColor="green";
  document.getElementById("O2").style.backgroundColor="rgba(255, 255, 255, 0)";
  document.getElementById("O1").style.backgroundColor="rgba(255, 255, 255, 0)";
  document.getElementById("O4").style.backgroundColor="rgba(255, 255, 255, 0)";
  AQ5="barobar";
  }  else{
   alert("you have already attempted this Question!!");
  } }}
  }
function OptionD()
{
  if(Branch1=='electronic')
  {
     if(QUESTIONcounts==1)
  { if(AQ1==0){
  document.getElementById("O4").style.backgroundColor="green";
  document.getElementById("O2").style.backgroundColor="rgba(255, 255, 255, 0)";
  document.getElementById("O3").style.backgroundColor="rgba(255, 255, 255, 0)";
  document.getElementById("O1").style.backgroundColor="rgba(255, 255, 255, 0)";
  AQ1="barobar";
  }else{
    alert("you have already attempted this Question!!");
  }}
   if(QUESTIONcounts==2)
  {if(AQ2==0){
  document.getElementById("O4").style.backgroundColor="red";
  document.getElementById("O2").style.backgroundColor="rgba(255, 255, 255, 0)";
  document.getElementById("O3").style.backgroundColor="rgba(255, 255, 255, 0)";
  document.getElementById("O1").style.backgroundColor="rgba(255, 255, 255, 0)";
  AQ2="barobar";}
  else{
    alert("you have already attempted this Question!!");
  }
  }
  if(QUESTIONcounts==3)
  { if(AQ3==0){
    document.getElementById("O4").style.backgroundColor="red";
  document.getElementById("O2").style.backgroundColor="rgba(255, 255, 255, 0)";
  document.getElementById("O3").style.backgroundColor="rgba(255, 255, 255, 0)";
  document.getElementById("O1").style.backgroundColor="rgba(255, 255, 255, 0)";
  AQ3="chukla";
  }else{
    alert("you have already attempted this Question!!");
  }}
  if(QUESTIONcounts==4)
  {if(AQ4==0){
    document.getElementById("O4").style.backgroundColor="red";
  document.getElementById("O2").style.backgroundColor="rgba(255, 255, 255, 0)";
  document.getElementById("O3").style.backgroundColor="rgba(255, 255, 255, 0)";
  document.getElementById("O1").style.backgroundColor="rgba(255, 255, 255, 0)";
  AQ4="chukla";
  }else{
    alert("you have already attempted this Question!!");
  }}
  if(QUESTIONcounts==5)
  {if(AQ5==0){
    document.getElementById("O4").style.backgroundColor="red";
  document.getElementById("O2").style.backgroundColor="rgba(255, 255, 255, 0)";
  document.getElementById("O3").style.backgroundColor="rgba(255, 255, 255, 0)";
  document.getElementById("O1").style.backgroundColor="rgba(255, 255, 255, 0)";
  AQ5="chukla";
  }  else{
    alert("you have already attempted this Question!!");
  } }}
  if(Branch1=='mechanical')
  {
    if(QUESTIONcounts==1)
  { if(AQ1==0){
  document.getElementById("O4").style.backgroundColor="red";
  document.getElementById("O2").style.backgroundColor="rgba(255, 255, 255, 0)";
  document.getElementById("O3").style.backgroundColor="rgba(255, 255, 255, 0)";
  document.getElementById("O1").style.backgroundColor="rgba(255, 255, 255, 0)";
  AQ1="chukla";
  }else{
   alert("you have already attempted this Question!!");
  }}
  if(QUESTIONcounts==2)
  {if(AQ2==0){
  document.getElementById("O4").style.backgroundColor="red";
  document.getElementById("O2").style.backgroundColor="rgba(255, 255, 255, 0)";
  document.getElementById("O3").style.backgroundColor="rgba(255, 255, 255, 0)";
  document.getElementById("O1").style.backgroundColor="rgba(255, 255, 255, 0)";
  AQ2="chukla";}
  else{
   alert("you have already attempted this Question!!");
  }
  }
  if(QUESTIONcounts==3)
  { if(AQ3==0){
   document.getElementById("O4").style.backgroundColor="red";
  document.getElementById("O2").style.backgroundColor="rgba(255, 255, 255, 0)";
  document.getElementById("O3").style.backgroundColor="rgba(255, 255, 255, 0)";
  document.getElementById("O1").style.backgroundColor="rgba(255, 255, 255, 0)";
  AQ3="chukla";
  }else{
   alert("you have already attempted this Question!!");
  }}
  if(QUESTIONcounts==4)
  {if(AQ4==0){
   document.getElementById("O4").style.backgroundColor="red";
  document.getElementById("O2").style.backgroundColor="rgba(255, 255, 255, 0)";
  document.getElementById("O3").style.backgroundColor="rgba(255, 255, 255, 0)";
  document.getElementById("O1").style.backgroundColor="rgba(255, 255, 255, 0)";
  AQ4="chukla";
  }else{
   alert("you have already attempted this Question!!");
  }}
  if(QUESTIONcounts==5)
  {if(AQ5==0){
   document.getElementById("O4").style.backgroundColor="red";
  document.getElementById("O2").style.backgroundColor="rgba(255, 255, 255, 0)";
  document.getElementById("O3").style.backgroundColor="rgba(255, 255, 255, 0)";
  document.getElementById("O1").style.backgroundColor="rgba(255, 255, 255, 0)";
  AQ5="chukla";
  }  else{
   alert("you have already attempted this Question!!");
  } }}
  if(Branch1=='civil')
  {
    if(QUESTIONcounts==1)
  { if(AQ1==0){
  document.getElementById("O4").style.backgroundColor="green";
  document.getElementById("O2").style.backgroundColor="rgba(255, 255, 255, 0)";
  document.getElementById("O3").style.backgroundColor="rgba(255, 255, 255, 0)";
  document.getElementById("O1").style.backgroundColor="rgba(255, 255, 255, 0)";
  AQ1="barobar";
  }else{
   alert("you have already attempted this Question!!");
  }}
  if(QUESTIONcounts==2)
  {if(AQ2==0){
  document.getElementById("O4").style.backgroundColor="red";
  document.getElementById("O2").style.backgroundColor="rgba(255, 255, 255, 0)";
  document.getElementById("O3").style.backgroundColor="rgba(255, 255, 255, 0)";
  document.getElementById("O1").style.backgroundColor="rgba(255, 255, 255, 0)";
  AQ2="chukla";}
  else{
   alert("you have already attempted this Question!!");
  }
  }
  if(QUESTIONcounts==3)
  { if(AQ3==0){
   document.getElementById("O4").style.backgroundColor="green";
  document.getElementById("O2").style.backgroundColor="rgba(255, 255, 255, 0)";
  document.getElementById("O3").style.backgroundColor="rgba(255, 255, 255, 0)";
  document.getElementById("O1").style.backgroundColor="rgba(255, 255, 255, 0)";
  AQ3="barobar";
  }else{
   alert("you have already attempted this Question!!");
  }}
  if(QUESTIONcounts==4)
  {if(AQ4==0){
   document.getElementById("O4").style.backgroundColor="red";
  document.getElementById("O2").style.backgroundColor="rgba(255, 255, 255, 0)";
  document.getElementById("O3").style.backgroundColor="rgba(255, 255, 255, 0)";
  document.getElementById("O1").style.backgroundColor="rgba(255, 255, 255, 0)";
  AQ4="chukla";
  }else{
   alert("you have already attempted this Question!!");
  }}
  if(QUESTIONcounts==5)
  {if(AQ5==0){
   document.getElementById("O4").style.backgroundColor="red";
  document.getElementById("O2").style.backgroundColor="rgba(255, 255, 255, 0)";
  document.getElementById("O3").style.backgroundColor="rgba(255, 255, 255, 0)";
  document.getElementById("O1").style.backgroundColor="rgba(255, 255, 255, 0)";
  AQ5="chukla";
  }  else{
   alert("you have already attempted this Question!!");
  } }}
  }

function result()
{if(AQ1==0||AQ2==0||AQ3==0||AQ4==0||AQ5==0)
  {
  alert("Please Answer all the Questions");
}else{
  
if(AQ1=="barobar")
{
  console.log(correctcount += 1);
}
if(AQ2=="barobar")
{
  console.log(correctcount += 1);
}
if(AQ3=="barobar")
{
  console.log(correctcount += 1);
}
if(AQ4=="barobar")
{
  console.log(correctcount += 1);
}
if(AQ5=="barobar")
{
  console.log(correctcount += 1);
}


wrongans=wrongans-correctcount;

total=correctcount*2;
document.getElementById("question").style.display="none";
  document.getElementById("result").style.display="block";

  document.getElementById("Ans1").innerHTML =name1+('&nbsp')+lastname;
  document.getElementById("Ans2").innerHTML =parseInt(correctcount);
  document.getElementById("Ans3").innerHTML =parseInt(wrongans);
  document.getElementById("Ans4").innerHTML =parseInt(total);

}}
