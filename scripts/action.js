
  /****************************function for Time******************************/
  function time(){
    let dd = new Date();
    let daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
    let day = daylist[dd.getDay()];

      let min = dd.getMinutes();
      let sec = dd.getSeconds();
      let hourt =dd.getHours();
      let amPM =""; 

      if (hourt > 12 && hourt < 24){
              hourt = hourt -12; 
              if(hourt <10){
                hourt = "0"+hourt;
              }   
             amPM = "PM";
        }else if(hourt == 0){
                hourt=12;
                amPM = "AM";
        }else if(hourt == 12){
          hourt = 12;
          amPM = "PM";
        }else{
          if(hourt <10){
            hourt = "0"+hourt;
          }  
          amPM = "AM";
        }
        if(sec < 10){
          sec = "0" + sec;
        }
        document.querySelector('.time').innerHTML= `${hourt} : ${min} : ${sec} : ${amPM}`;
}
time();
setInterval(time, 1000);

/********************************Rotate String*******************************/
let element = document.querySelector('p'); //တကယ်လို ခုစာရဲ့အပေါမှာ paragraph ရှိမယ်ဆိုရင်အဲ့ဟာကိုပဲပြမယ်။ 
                         // ကိုယ်ကြိုက်တဲ့စာကြောင်းပြစေချင်ရင်တော့ id or class ထည့်ပီး ပြန်ခေါ်ပါ၊၊
let textNode = element.childNodes[0]; // assuming no other children
let text = textNode.data;
setInterval(() => {
  text = text.slice(1,text.length) + text[0];
  textNode.data = text;
}, 200);






const img_slides = document.querySelectorAll(".img-slide");
console.log(img_slides.length);
