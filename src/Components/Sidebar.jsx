import React from 'react'
import {HiHome} from "react-icons/hi"
import {BiVideo, BiHistory} from "react-icons/bi"
import {CiYoutube} from "react-icons/ci"
import {MdVideoLibrary, MdOutlineWatchLater, MdOutlineExpandMore} from "react-icons/md"
import {AiOutlineLike} from "react-icons/ai"
export default function Sidebar() {
  return (
    <div className='col-2 mt-5'>
        <div className='row'>
          <div className='col-1'><HiHome size={25}/></div>
          <div className='col-1'></div>
          <div className='col-5'><h6>Accueil</h6></div>
        </div>
        <div className='row mt-3'>
          <div className='col-1'><BiVideo size={25}/></div>
          <div className='col-1'></div>
          <div className='col-8'><h6>Shorts</h6></div>
        </div>
        <div className='row mt-3'>
          <div className='col-1'><CiYoutube size={25}/></div>
          <div className='col-1'></div>
          <div className='col-8'><h6>Abonnements</h6></div>
        </div>
        <div className='row mt-3' >
          <div className='col-12' style={{border:'1px solid black', borderColor:"black"}}></div>
        </div>
        <div className='row mt-3'>
          <div className='col-1'><MdVideoLibrary size={25}/></div>
          <div className='col-1'></div>
          <div className='col-8'><h6>Bibliothèque</h6></div>
        </div>
        <div className='row mt-3'>
          <div className='col-1'><BiHistory size={25}/></div>
          <div className='col-1'></div>
          <div className='col-8'><h6>Historique</h6></div>
        </div>
        <div className='row mt-3'>
          <div className='col-1'><CiYoutube size={25}/></div>
          <div className='col-1'></div>
          <div className='col-8'><h6>Vos vidéos</h6></div>
        </div>
        <div className='row mt-3'>
          <div className='col-1'><MdOutlineWatchLater size={25}/></div>
          <div className='col-1'></div>
          <div className='col-8'><h6>À regarder plus tard</h6></div>
        </div>
        <div className='row mt-3'>
          <div className='col-1'><AiOutlineLike size={25}/></div>
          <div className='col-1'></div>
          <div className='col-8'><h6>Vidéos "J'aime"</h6></div>
        </div>
        <div className='row mt-3'>
          <div className='col-1'><MdOutlineExpandMore size={25}/></div>
          <div className='col-1'></div>
          <div className='col-8'><h6>Plus</h6></div>
        </div>
    </div>
  )
}
