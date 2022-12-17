import react from 'react';
import "./Aside.css";
import cross from "./images/x-button.png";


function Aside(){
    return(
        <>
           <div className='Abox'>
             <div className='RCBOX'>
                 <p className="Rc">Related Category</p>
                 <ul className='Aside_ul'>
                     <li>Paracetomol Tablets</li>
                     <li>Paracetomol Syrup</li>
                     <li>Paracetomol Powder</li>
                     <li className='select1'style={{color:"white"}}>Aceclofenac<img src={cross} className="cross3" /></li>
                     <li>Magaladrate Simeticone Oral Suspension</li>
                     <li>Mefinamic Paracetomol Syrup</li>
                 </ul>
             </div>
           </div>


           <div className='Abox2'  >
             <div className='RCBOX'>
                 <p className="Rc">Related Brands</p>
                 <ul className='Aside_ul'>
                     <li>Cipmol Paracetamol</li>
                     <li>Pandal Paracetamol</li>
                     <li>Combiflame</li>
                     <li>Crocin Tablet</li>
                     <li>Calpol Paracetamol Tablet</li>
                     <li>Sumo Tablet</li>
                 </ul>
             </div>
           </div>

           <div className='Abox3'  >
             <div className='RCBOX'>
                 <p className="Rc">Bussines Type</p>
                 <ul className='Aside_ul'>
                     <li>WholeSaler</li>
                     <li>Manufactuor</li>
                     <li>Retailer</li>
                     <li>Exporter</li>
                 </ul>
             </div>
           </div>

           
           <div className='Abox4'  >
             <div className='RCBOX'>
                 <p className="Rc">Strength</p>
                 <ul className='Aside_ul'> 
                     <li className='select2' style={{color:"white"}}>500mg <img src={cross} className="cross4"/></li>
                     <li>650mg</li>
                 </ul>
             </div>
           </div>


           <div className='Abox5'  >
             <div className='RCBOX'>
                 <p className="Rc">Manufactuor</p>
                 <ul className='Aside_ul'>
                     <li>Intas Pharmaceutical Ltd</li>
                     <li>Alkam Laboratories Ltd</li>
                 </ul>
             </div>
           </div>
        </>
    );
}

export default Aside;