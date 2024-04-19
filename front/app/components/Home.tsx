'use client'

// import Switch from '@mui/material/Switch';
import Navbar from "./Navbar" ;
import ServicesPage  from './ServicesPage';
import TeamMembers from './TeamMembers';
import Testimonial from './Testimonial';
import Footer from'./Footer'
import "../styles/Home.css"
import img1 from '../img/img1.png'
import { FaPlayCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Image from 'next/image';
import React, { useState } from 'react';
import {PaginationProps} from '../types/types'
import { useAppSelector, useAppDispatch, useAppStore } from '../lib/hooks'

function Home() {
  // fetchCurrentUser

  
  const data = Array.from({ length: 9 }, (_, i) => ({
    id: i,
    name: `Doctor ${i}`,
    specialty: `Specialty ${i % 4}`,
    image:'https://s3-alpha-sig.figma.com/img/2df0/0dda/ab39ba7d7cf3c90f3f813b583341f20e?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=l~Jvo99x-sbhOhfqx75UCp4VqwsnxElc2vXxojY-OaTAybX2DW3BD7jIy0TbPVkx56I5I1mT5GEq0d7z3WwIFst6YJN6SP~hiq6KVOS2CLhkgRwHVugXbrcru6Qko9B2qRpUMHOEk3k0wzvsgAGoQCelqObVuFn12oCeO-iwbTKQDYkINUnqvWhY3a2mtMoFqoEy3wO6zmb~vTyHY0VK15uOhiCOV-nL9ElZHI~4-UTsjFga-ZYW2EFJC0aAr29WCBVzT~PBnBhoGJGNlLEwnNpWH68D4Q7upal8hiBe3eJ4xvwLN~YIdBj7z879kkRFKT5ZYjmOfqZs4H~uOK~0zg__'
  }));

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const paginate = (pageNumber:number)=> setCurrentPage(pageNumber);

  return (
    <div className='body'>
       <main className="flex min-h flex-col items-center ">
       <Navbar />
        </main>  
      
    <div className="DoctorImg">
    <Image
                    src={img1}
                    alt="" 
                    layout='responsive'
                />
        
    </div>
       <div className="title">
      <h1  id='h1'>Providing Quality Healthcare for A <br/> Brighter and  Healthy  Future</h1>
<br/>
      <p  style={{color:'#5D5D5D'}} id='p1'>At our hospital, we are dedicated to providing exceptional <br/> medical care to our patients and their families. Our <br/> experienced team of medical professionals, cutting-edge<br/> technology, and compassionate approach make us a leader <br/> in the healthcare industry</p>
<br/>
    </div>
<div id='divplay'>
<button type="button" className="bt">appointments</button>
<FaPlayCircle id='play' />
<h4>watch now </h4>
</div>
   <div className="divSearch" style={{background:'white'}}>
        <h3>Find A Doctor </h3>
        <div className='search'> 
        <input className='input' type="text" placeholder="Name"/>
        <input  className='input' type="text" placeholder="speciality"/>
      
      
        <div className='ButtonSearch'> 
        <button type="button" className="ButtonSearch">Search</button>

        </div>  
        </div>
    </div>
    
      
    <div className="doctor-grid">
        {currentItems.map(item => (
          <div key={item.id} className="doctor-card">
            <Image
              src={item.image}
              alt={`Image of ${item.name}`}
              width={200}
              height={200}
              layout='responsive'
            />
            <div className="card-body">
              <h2>{item.name}</h2>
              <p>{item.specialty}</p>
            </div>
          </div>
        ))}
      </div>
      <Pagination itemsPerPage={itemsPerPage} totalItems={data.length} paginate={paginate} />
    
    <div className='divResult' style={{textAlign: 'center' ,}}>
         <h2 style={{color:'rgba(0, 126, 133, 1)'}}>Our results in numbers</h2>
         <br/>
         <br/>
    <div style={{color:'rgba(0, 126, 133, 1)'}}>   
    <h2 id='numbers'> 99%  15k 12k 240%</h2>
    </div>
    <div id='words'>
     <p id='words1'>Customer satisfaction    </p>  <p id='words2'>Online Patients</p> <p id='words3'>Patients Recovered</p> <p id='words4'>Company growth</p> 
    </div>
    </div>

    <div className="divStart">
       <img className='img2' src='https://s3-alpha-sig.figma.com/img/ecde/e03a/8c87bbb9dbd9ce4757dcccfa5e15b856?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Yxo7qcBoVhRyL5T0ocwKsqE4wQg-~53WsAMq3poUOZNgkhNrWscHsyGi2EV4a6PxP7bJpw6c4GYlDdE~aEcuKj4o2nL-W5ltxVHOJQkStUSuH3qhn5F3nF02R1cF~lKe00HrsVLLccZgMCq9igwz95~u86Ruw4Meyitd4J-be1Bw49lnPduAt27e~pk2TukF9KMXkbKKh6GVNvxN1reig3dEuCujgb-UbUogm0ETuTQ~CspmxiLOGHhWu224Jv0bxDVmNHqZnLzTOgbx4AvSU44ai07Rb~UNifwgQXkUE0Uya8h4lYiMSltaActlyIbWVJ3KTmj~5Rogsuwg6~pdzA__'/>
       <br/>
       <br/>
    
      <h1 style={{color:'rgba(0, 126, 133, 1)'}}>You have lots of reasons <br/>to choose us</h1>
      <br/>
      <p>Lorem ipsum dolor sit amet consectetur adipiscing eli <br/>mattis sit phasellus mollis sit aliquam sit nullam.</p>
     <br/>
      <button type="button" className="get-Started">get Started</button>
      <button type="button" className="Talk-To-Sales">Talk To Sales</button>
    </div>
    <div className="service" style={{textAlign: 'center' ,}}>
    <ServicesPage />
       <br/>
       <br/>
    </div>
    <TeamMembers/>
    <br/>
    <br/>
    <br/>
  
    <Testimonial/>
    <br/>
    <br/>

    <Footer />
 </div>
  )
}
  
  const Pagination: React.FC<PaginationProps> = ({ itemsPerPage, totalItems, paginate }) => {
    const pageNumbers = [];
  
    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
      pageNumbers.push(i);
    }
  
    return (
      <nav>
        <ul className='pagination'>
          {pageNumbers.map(number => (
            <li key={number} className='page-item'>
              <button onClick={() => paginate(number)} className='page-link'>
                {number}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    );
  };
  

export default Home