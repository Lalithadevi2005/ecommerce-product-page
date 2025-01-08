import React from 'react';
import {Routes,Route} from 'react-router-dom'
import LandingPages from './stores/pages/LandingPages'; 
import './App.css';
import Mobilepage from './stores/pages/mobilepage';
import Laptopspage from './stores/pages/laptopspage';
import Headphones from './stores/pages/headphonespage';
import Haircare from './stores/pages/haircarepage';
import Fridges from './stores/pages/fridgespage';
import Mens from './stores/pages/menspage';
import Womens from './stores/pages/womenspage';
import Makeup from './stores/pages/makeuppage';
import Fragrances from './stores/pages/fragrancespage';
import Furniture from './stores/pages/furniturepage';
import Cookware from './stores/pages/cookwarepage';
import Tvpage from './stores/pages/tvspage';
import MobileSingle from './single/mobilesingle';
import UserCart from './stores/userCart';
import LaptopSingle from './single/laptopssingle';
import HeadphonesSingle from './single/headphonessingle';
import FridgeSingle from './single/fridgessingle';
import MensSingle from './single/menssingle';
import WomensSingle from './single/womenssingle';
import FragranceSingle from './single/fragrancesingle';
import CookwareSingle from './single/cookwaresingle';
import TVSingle from './single/tvssingle';
import MakeupSingle from './single/makeupsingle';
import HaircareSingle from './single/haircaresingle';
import FurnitureSingle from './single/furnituresingle';
import SearchResults from './stores/components/searchresults';
 

const App = () => {
  return (
    <div>
       <Routes>
        <Route path='/' element={<LandingPages />}/>
         <Route path='/Mobiles' element={<Mobilepage />}/>
         <Route path='/Laptops' element={<Laptopspage />}/>
         <Route path='/Headphones' element={<Headphones />}/>
         <Route path='/Fridges'   element={<Fridges />}/>
         <Route path='/Mens' element={<Mens />}/>
         <Route path='/Womens' element={<Womens />}/>
         <Route path='/Makeup' element={<Makeup />}/>
         <Route path='/Haircare' element={<Haircare />}/>
         <Route path='/Fragrances' element={<Fragrances />}/>
         <Route path="/Search-results" element={<SearchResults />}/>
          
         <Route path='/Furniture' element={<Furniture />}/>
         <Route path='/Cookware' element={<Cookware />}/>
         <Route path='/Tvs' element={<Tvpage />}/>
           <Route path='/mobiles/:id' element={<MobileSingle />}/>
           <Route path='/laptops/:id' element={<LaptopSingle />}/>
           <Route path='/headphones/:id' element={<HeadphonesSingle />}/>
           <Route path='/fridges/:id' element={<FridgeSingle />}/>
           <Route path='/mens/:id' element={<MensSingle />}/>
           <Route path='/womens/:id' element={<WomensSingle />}/>
           <Route path='/makeup/:id' element={<MakeupSingle />}/>
           <Route path='/haircare/:id' element={<HaircareSingle />}/>
           <Route path='/fragrances/:id' element={<FragranceSingle />}/>
           <Route path='/furniture/:id' element={<FurnitureSingle />}/>
           <Route path='/cookware/:id' element={<CookwareSingle />}/>
           <Route path='/tv/:id' element={<TVSingle />}/>
           
           


         <Route path='/cart' element={<UserCart />}/>

       </Routes>
    
    </div>
  );
}

export default App;
