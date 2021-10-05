const  cardInfo=document.querySelectorAll(".info");
const btns=document.querySelectorAll("#timeframes span");
var data=[];
var frame="weekly";
var value={"daily":{text:"day",btnIndex:0},"weekly":{text:"week",btnIndex:1}, "monthly":{text:"month",btnIndex:2}};

const fetchData= async()=>{
var response=await fetch ("https://nafis2003.github.io/time-tracking-dashboard/data.json");
data=await response.json();
}

const showData=()=>{
     let index=0;
     let btnIndex=value[frame].btnIndex;
btns[btnIndex].style.color="#fff";
if (btnIndex>0){btns[btnIndex-1].style.color="var(--Pale-blue)";}
else{btns[btnIndex+2].style.color="var(--Pale-blue)";}
if (btnIndex<2){btns[btnIndex+1].style.color="var(--Pale-blue)";}
				data.map((info)=>{
							var {title,timeframes}=info;
							var timeframe=timeframes[frame];
							var text=`<h2>${title}</h2>
				<p>${timeframe.current}hrs</p><span>Last ${value[frame].text} - ${timeframe.previous}hrs</span>	`
							cardInfo[index].innerHTML=text;
							index++;
				}			
				);
}

fetchData().then(()=>{showData()},()=>alert ("SOMETHING WENT WRONG"));

btns.forEach(btn=>{
btn.addEventListener("click",()=>{	frame=btn.textContent.toLowerCase();showData();});
});
