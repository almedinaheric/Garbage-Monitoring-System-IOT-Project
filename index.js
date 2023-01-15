const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    databaseURL: "YOUR_DATABASE_URL",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID",
    measurementId: "YOUR_MEASUREMENT_ID"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();

let x1=2000;
let x2=10000;
let x3=8000;
let x4=6000;

let popunjenostRandom1 = 12;
let popunjenostRandom2 = 15;
let popunjenostRandom3 = 17;
let popunjenostRandom4 = 19;

function prikazi(id1,id2,id3,id4,id5, x, popunjenost, h2ElementID){
    let pocetniBroj=Math.floor(Math.random()*(20-10+1))+10;
    let a=pocetniBroj;
    
    console.log("pocinje");
    
    document.querySelector(h2ElementID).innerHTML="Trenutna popunjenost kante:"+popunjenost+"%";
    
    let intervalPopunjavanja=setInterval(function(){  
        console.log(a);
        if(a>=90){
            clearInterval(intervalPopunjavanja);
            a=0;
            popunjenost=pocetniBroj;
            isprazni(id1,id2,id3,id4,id5,x,popunjenost, h2ElementID);    
        }
        else if(a>80)
        {
            a+=10;
            popunjenost+=10;
        }
        else{
            a+=20;
            popunjenost+=20;
        }

        if(a>=21 && a<=40){
            document.getElementById(id1).style.display="none";
            document.getElementById(id2).style.display="block";
            document.getElementById(id3).style.display="none";
            document.getElementById(id4).style.display="none";
            document.getElementById(id5).style.display="none";

            document.querySelector(h2ElementID).innerHTML="Trenutna popunjenost kante:"+popunjenost+"%";
        }
        else if(a>=41 && a<=60){
            document.getElementById(id1).style.display="none";
            document.getElementById(id2).style.display="none";
            document.getElementById(id3).style.display="block";
            document.getElementById(id4).style.display="none";
            document.getElementById(id5).style.display="none";

            document.querySelector(h2ElementID).innerHTML="Trenutna popunjenost kante:"+popunjenost+"%";
        }
        else if(a>=61 && a<=80){
            document.getElementById(id1).style.display="none";
            document.getElementById(id2).style.display="none";
            document.getElementById(id3).style.display="none";
            document.getElementById(id4).style.display="block";
            document.getElementById(id5).style.display="none";

            document.querySelector(h2ElementID).innerHTML="Trenutna popunjenost kante:"+popunjenost+"%";
        }
        else if (a>=81 && a<=100) {
            document.getElementById(id1).style.display="none";
            document.getElementById(id2).style.display="none";
            document.getElementById(id3).style.display="none";
            document.getElementById(id4).style.display="none";
            document.getElementById(id5).style.display="block";

            document.querySelector(h2ElementID).innerHTML="Trenutna popunjenost kante:"+popunjenost+"%";
        }

    },x);
}

prikazi("2s1","2s2","2s3","2s4","2s5", x1,popunjenostRandom1, "#popunjenost2");
prikazi("3s1","3s2","3s3","3s4","3s5", x2,popunjenostRandom2, "#popunjenost3");
prikazi("4s1","4s2","4s3","4s4","4s5", x3,popunjenostRandom3, "#popunjenost4");
prikazi("5s1","5s2","5s3","5s4","5s5", x4,popunjenostRandom4, "#popunjenost5");

function isprazni(id1,id2,id3,id4,id5, y,popunjenost, h2ElementID){
        document.getElementById(id1).style.display="block";
        document.getElementById(id2).style.display="none";
        document.getElementById(id3).style.display="none";
        document.getElementById(id4).style.display="none";
        document.getElementById(id5).style.display="none";

        document.querySelector(h2ElementID).innerHTML="Trenutna popunjenost kante:"+popunjenost+"%";

        setTimeout(() => {
        prikazi(id1,id2,id3,id4,id5,y,popunjenost,h2ElementID);
        }, 4000);
}

var counter=0;
var dataDistanca=0;
var firebaseRef=firebase.database().ref("distanca");

firebaseRef.on("value",function(snapshot){
    var data=snapshot.val();
    dataDistanca=data;
    console.log("firebase vrijednost",data);
    console.log("distanca vrijednost",dataDistanca);

    let udaljenost=0;
    if(data>10){
        udaljenost=100;
    }
    else{
        udaljenost=(10-data)*10;
    }

    document.querySelector("#popunjenost1").innerHTML="Trenutna popunjenost kante: "+udaljenost+"%";

    if(data<=2){
        document.getElementById("1s1").style.display="none";
        document.getElementById("1s2").style.display="none";
        document.getElementById("1s3").style.display="none";
        document.getElementById("1s4").style.display="none";
        document.getElementById("1s5").style.display="block";
    }
    else if (data>=3 && data<=4){
        document.getElementById("1s1").style.display="none";
        document.getElementById("1s2").style.display="none";
        document.getElementById("1s3").style.display="none";
        document.getElementById("1s4").style.display="block";
        document.getElementById("1s5").style.display="none";
    }
    else if(data>=5 && data<=6){
        document.getElementById("1s1").style.display="none";
        document.getElementById("1s2").style.display="none";
        document.getElementById("1s3").style.display="block";
        document.getElementById("1s4").style.display="none";
        document.getElementById("1s5").style.display="none";
    }
    else if(data>=7 && data<=8){
        document.getElementById("1s1").style.display="none";
        document.getElementById("1s2").style.display="block";
        document.getElementById("1s3").style.display="none";
        document.getElementById("1s4").style.display="none";
        document.getElementById("1s5").style.display="none";
    }
    else if(data>=9 && data<=10){
        document.getElementById("1s1").style.display="block";
        document.getElementById("1s2").style.display="none";
        document.getElementById("1s3").style.display="none";
        document.getElementById("1s4").style.display="none";
        document.getElementById("1s5").style.display="none";
    }
    else{
        document.getElementById("1s1").style.display="none";
        document.getElementById("1s2").style.display="none";
        document.getElementById("1s3").style.display="none";
        document.getElementById("1s4").style.display="none";
        document.getElementById("1s5").style.display="block";
    }
});

var intervalProvjeri=setInterval(() => {
    if(dataDistanca==1 ||dataDistanca==2 || dataDistanca>10 || distanca==0){
        alert("UPOZORENJE! KANTA U ULICI MUHSINA RIZVIĆA JE PUNA!");
    }
}, 20000);