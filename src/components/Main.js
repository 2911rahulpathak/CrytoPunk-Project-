import React from 'react'
import instagramLogo from '../assets/owner/instagram.png'
import twitterLogo from '../assets/owner/twitter.png'
import moreIcon from '../assets/owner/more.png'
import './Main.css'
import  {useState,useEffect} from 'react'
const Main = ({selectedPunk,punkListData}) => {
    const[activePunk,setActivePunk]=useState(punkListData[0])

    useEffect(()=>{
        setActivePunk(punkListData[selectedPunk])
    }, [punkListData,selectedPunk])

    return (
        <div className='main'>
            <div className='mainContent'>
            <div className='punkHighlight'>
            <div className='punkContainer'>
                <img className='selectedPunk'
                 src={activePunk.image_original_url} 
                 alt=""
                  />
            </div>

            </div>  

            <div className='punkDetails' style={{color:'#ffff'}}>
                <div className='title'>
                   {activePunk.name}
                </div>
                <span className='itemNumber'> •#{activePunk.token_id}</span>
                </div>
                <div className='owner'>
                    <div className='ownerImageContainer'></div>
                    <img src={activePunk.owner.profile_img_url} alt="" />
                </div>
                <div className='ownerDetails'>
                    <div className='ownerNameAndHandle'>
                        <div >0xd0c91f50565679e0442D48B164B41997a7C96E70</div>
                        <div className='ownerHandle'>@rahulpathak
                        </div>

                        <div className='ownerLink'>
                        <img src={instagramLogo} alt="" srcset="" />
                        </div>
                        <div className='ownerLink'>
                        <img src={twitterLogo} alt="" srcset="" />
                        </div>
                        <div className='ownerLink'>
                        <img src={moreIcon} alt="" srcset="" />
                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default Main
