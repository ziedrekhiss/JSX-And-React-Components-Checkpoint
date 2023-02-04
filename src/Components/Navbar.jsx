import React from 'react'
import Logo from "../Assets/youtube.jpg"
import {Form} from "react-bootstrap"
import {IoMdNotificationsOutline} from "react-icons/io"
import {BiVideoPlus,BiUserCircle} from "react-icons/bi"
import {CiSearch} from "react-icons/ci"
import{MdKeyboardVoice} from "react-icons/md"

export default function Navbar() {
  return (
    <div className='row' style={{padding: "10px"}}>
        <div className='col-3'>
          <img  alt="logo" src={Logo} width={100} />
        </div>
        <div className='col-7 row'>
          <div className='col-10'>
            <Form>
              <Form.Control type='text'></Form.Control>
            </Form>
          </div> 
          <div className='col-1'>
            <CiSearch size={25} style={{marginRight:'5px'}}/>
            <MdKeyboardVoice size={25} />
          </div>
        </div>
        <div className='col-2 row'>
        <div className='col-4 ml-3' >
          <BiVideoPlus size={25}/>
        </div>
        <div className='col-4 ml-3'>
          <IoMdNotificationsOutline size={25} />
        </div>
        <div className='col-4 ml-3'>
          <BiUserCircle size={25} />
        </div>
        </div>
    </div>
  )
}
