import React from 'react'
import './nav.css'
import { LiaHomeSolid } from "react-icons/lia";
import { AiOutlineUser } from "react-icons/ai";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { GoProjectRoadmap } from "react-icons/go";
import { MdConnectWithoutContact } from "react-icons/md";
import { GiBookmarklet } from "react-icons/gi";
import { useState } from 'react';
import { useEffect } from 'react';
const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionId = `#${section.id}`;
        const navLinks = document.querySelectorAll('nav a');

        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + section.offsetHeight
        ) {
          setActiveNav(sectionId);
        }
      });
      if(window.scrollY === 0){
        setActiveNav('#');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><LiaHomeSolid /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><LiaLaptopCodeSolid /></a>
      <a href="#education" onClick={() => setActiveNav('#education')} className={activeNav === '#education' ? 'active' : ''}><GiBookmarklet /></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><GoProjectRoadmap /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><MdConnectWithoutContact /></a>
    </nav>
  )
}

export default Nav