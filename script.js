const  cardInfo=document.querySelectorAll(".info");
const btns=document.querySelectorAll("#timeframes span");
var data=[];
var frame="weekly";
var value={"daily":"day","weekly":"week", "monthly":"month"};

const fetchData= async()=>{
var response=await fetch ("https://nafis2003.github.io/time-tracking-dashboard/data.json");
data=await response.json();
}

const showData=()=>{
     btns[Object.keys(value).indexOf(frame)]. style.color="#fff";
     let index=0;
				data.map((info)=>{
							var {title,timeframes}=info;
							var timeframe=timeframes[frame];
							var text=`<h2>${title}</h2>
				<p>${timeframe.current}hrs<span>Last ${value[frame]} - ${timeframe.previous}hrs</span></p>	`
							cardInfo[index].innerHTML=text;
							index++;
				}			
				);
}

fetchData().then(()=>{showData()},()=>alert ("SOMETHING WENT WRONG"));

btns.forEach(btn=>{
				btn.addEventListener("click",()=>{frame=btn.textContent.toLowerCase();showData();});
});

