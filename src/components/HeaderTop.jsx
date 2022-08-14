import React  from 'react';
import { IoMdCall} from 'react-icons/io'
import {HiOutlineMail} from 'react-icons/hi'
import {BsPerson} from 'react-icons/bs'
import {RiGlobalLine} from 'react-icons/ri'
import {GoLocation} from 'react-icons/go'

import "./headerTop.css"

export default function headerTop(){
  return(
    <div className="section">
      <div className="leftSection">
        <ul >
          <li>
            <span><IoMdCall size="1.2em" color="#fed700" /> (+800) 123 456 7890</span>
          </li>
          
          <li> <span className='pipe'>|</span></li>
          <li>
            <span><HiOutlineMail size="1.2em"  color="#fed700"/> sample@email.com</span>
          </li>
        </ul>
      </div>
      <div className="rightSection">
      <ul>
          <li>
            <span><GoLocation size="1.2em"  /> Store Loction </span>
          </li>
          <li> <span className='pipe'>|</span></li>
          <li >
            <span><BsPerson size="1.2em" /> Sign in or Register</span>
          </li>
          <li> <span className='pipe'>|</span></li>
          <li>
            <span><RiGlobalLine size="1.5em"/></span>
          </li>
        </ul>
      </div>
    </div>
  );
}