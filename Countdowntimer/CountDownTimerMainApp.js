import React,{useState ,useEffect} from 'react'
import CountDownTimer from './CountDownTimer'

const CountDownTimerMainApp = () => {
  
  // document.title='Timer'

            const LastDay=new Date( "December 25,2021").getTime();
            // console.log(LastDay);
            const [Today,SetToday]=useState (new Date().getTime());
            // console.log(Today);
            const gap=LastDay - Today;
            const abcd=Math.floor(gap);
            // console.log(abcd);


            const S=1000
            const M=S * 60;
            const H=M*60;
            const D=H*24;
            // console.log(D);

            const days=Math.floor(gap/D);
            // console.log(days);
            const hours=Math.floor((gap%D)/H);
            // console.log(hours);
            const minutes=Math.floor((gap%H)/M);
            const seconds=Math.floor((gap%M)/S);


          const time=()=>SetToday(new Date().getTime())  
          setTimeout(time,1000)

          useEffect(() => {
              time()

              return ()=>{clearTimeout(time)}
            // setTimeout(()=>SetToday(new Date().getTime()),1000)
            }, [Today])
            
             
   
    return (
        <div >
            <CountDownTimer Days={days} Hours={hours} Min={minutes} Sec={seconds}/>
            
       </div>
    )
}

export default CountDownTimerMainApp
