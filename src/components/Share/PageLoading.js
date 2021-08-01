import React, { useState,useEffect } from 'react';
import './PageLoading.css';
import logo from '../../image/logo.PNG';

const PageLoading = () => {
    const [pageLoad, setPageLoad] = useState(true);
    useEffect(()=>{
        setTimeout(()=>{
            setPageLoad(false)
        },1500)
    },[])
    return (
        <div className={pageLoad?'page_loading_div open':'page_loading_div close'}>
                <div className='page_loading_content_box'>
                    <img className="page_load_logo" src={logo} alt="logo" />
                    <p className='page_load_title'>Mamun Ahmed</p>
                    <p className='page_load_sub_title'>Mamun is working</p>
                    <div class="progress">
                 
    
          
            <div class="progress">
                <div class="progress-bar" style={{width:"100%", background:"rgb(252 255 30)"}}>
                    <div class="progress-value"></div>
                </div>
            </div>
      

            </div>
                </div>
        </div>
    );
};

export default PageLoading;