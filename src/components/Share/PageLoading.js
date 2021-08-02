import React, { useState,useEffect } from 'react';
import './PageLoading.css';
import logo from '../../image/logo.PNG';

const PageLoading = () => {
    const [pageLoad, setPageLoad] = useState(true);
    useEffect(()=>{
        setTimeout(()=>{
            setPageLoad(false)
        },1200)
    },[])
    return (
        <div className={pageLoad?'page_loading_div open':'page_loading_div close'}>
                <div className='page_loading_content_box'>
                    <img className="page_load_logo" src={logo} alt="logo" />
                    <p className='page_load_title'>Mamun Ahmed</p>
                    <p className='page_load_sub_title'>Mamun is working</p>
                    <div className="progress">
                 
    
          
            <div className="progress">
                <div className="progress-bar" style={{width:"100%", background:"linear-gradient(90deg, rgba(177,5,23,1) 6%, rgba(226,227,52,0.9332107843137255) 51%, rgba(3,200,184,1) 92%)"}}>
                    <div className="progress-value"></div>
                </div>
            </div>
      

            </div>
                </div>
        </div>
    );
};

export default PageLoading;