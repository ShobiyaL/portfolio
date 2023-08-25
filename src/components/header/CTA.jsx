import React from 'react';
//  import CV from "../../assets/Resume1.pdf"
const CTA = () => {
  return (
    <div className='cta'>
      <a
        href='https://drive.google.com/file/d/17HcXB1LTPGxx19zryh9FVFtXdUX407lM/view?usp=drive_link'
        target='_blank'
        className='btn'
        download
      >
        Resume
      </a>
      <a href='#contact' className='btn primary'>
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
