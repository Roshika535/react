import './App.css'
import Card from './components/Card'
import Ourteam from './components/Ourteam'
import PropsDestruct, { PropsDestruct1 } from './components/PropsDestruct'
import Propspass from './components/Propspass'
import Task1 from './components/Task1'


function App() {
  const person = [
    "Roshika",
    "Aditya",
    "Dipika",
    "Ashok",
    "Claude",
    "Roshika",
    "Aditya",
    "Dipika",
    "Ashok",
    "Claude"
  ]

 
  return (
    <>
      <Card name="Roshika Sharma" desc="Hi I am Roshika. I live in Bharatpur-10, Nepal." img="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D"  /> 
      <Card name="Roshika Sharma" desc="Hi I am Roshika. I live in Bharatpur-10, Nepal." img="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D" /> 
      <Card name="Roshika Sharma" desc="Hi I am Roshika. I live in Bharatpur-10, Nepal." img="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D" />  
      <Ourteam />

    <div className="mx-auto max-w-3xl md:text-center mt-16">
    <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">
      People who made it successful
    </h2>
    <p className="mx-auto mt-4 max-w-2xl text-gray-600 md:text-xl">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam reiciendis
      a vel error explicabo voluptatum nihil possimus veritatis eos culpa.
    </p>
  </div>
      <Task1 img="https://scontent.xx.fbcdn.net/v/t1.15752-9/444788927_2419447181583411_2159830062016199310_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGzmKTeoG4N5Cp5ndcDgiyqKmYbS2IZKNIqZhtLYhko0vBzGDwargCGHvgbaSBrBV8UjIvxVKPsCkHDUkOE4bS7&_nc_ohc=3dLzZaBDoUcQ7kNvgEdHVR-&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QEZSzmzywhOGQPUqm6dZGWQeGNuAocXpkutZ_WZUs4_Dg&oe=667EE830" name="Dipika Bhandari" position="Founder and CEO, DevUI" facebook="https://www.facebook.com/dipika.bhandari.399?mibextid=ZbWKwL"/>
      <Task1 img="https://scontent.xx.fbcdn.net/v/t1.15752-9/444761549_374681812257486_4809299333947676194_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeF_kBWIsKS7EDSOBxZu_GtCQtqelwVZn-5C2p6XBVmf7jgZuOcypNS9cn-T-Ew3_thPw0xJ6wVXblzyauf0bGP4&_nc_ohc=IysZ8jf7cx8Q7kNvgGWRm_r&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QFQvOPuP7rqIemMuDKj4KQD2hEe4hDAVefQ2FIIaAgoaQ&oe=667EE8B3" name="Ashok Subedi" position="Software Engineer" facebook="https://www.facebook.com/Claude.355.ashok?mibextid=ZbWKwL" />
      <Task1 img="https://scontent.xx.fbcdn.net/v/t1.15752-9/445375955_442194931757511_5257596651859659574_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFwqsXzv2k0mpWicFrrNQLG4xJAQVQQiv3jEkBBVBCK_WNX_gQAlr_XnxetTPKoa5heDTHyjRSnjJ33q7vEB6SL&_nc_ohc=Trmk8nnd2p4Q7kNvgEHRdql&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QEtseHhin9fQXXTFWrHbdRmVLMTa6HlAgD5E0lZSkcztg&oe=667EE84C" name="Aditya Neupane" position="System Analyst" facebook="https://www.facebook.com/profile.php?id=100005990386360&mibextid=ZbWKwL"/>
      <Task1 img="" name="" position="Founder and CEO, DevUI" />
      
     <Propspass name="Dipika Bhandari" age={23} isMarried={false} person={person}/>
     <PropsDestruct email="aXvzT@example.com" password="123456"/>
     <PropsDestruct1 />
    </>

  )
}


export default App
