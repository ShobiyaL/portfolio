import React from 'react'
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import {MdEmail} from 'react-icons/md';

const HeaderS = () => {
  return (
    <div className='header__socials'>
        <a href='http://linkedin.com/ShobiyaL' target="_blank"><BsLinkedin /></a>
        <a href='http://github.com/ShobiyaL' target="_blank"><FaGithub/></a>
        <a href='shobiyalakshmanan11@gmail.com' target="_blank"><MdEmail/></a>
    </div>
  )
}

export default HeaderS;