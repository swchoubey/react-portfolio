import React, { useEffect } from 'react'
import TagCloud from 'TagCloud';

const Textsphere = () => {
    useEffect(() => {

        const container = '.tagcloud';
        let radii;
        const texts = [
          'HTML',
          'CSS',
          'JavaScript',
          'React',
          'Java',
          'Python',
          'NodeJS',
          'C#',
          'TypeScript',
          'SQL Server',
          'PostgreSQL',
          'Splunk',
          'Tableau',
          'GIT',
          'GITHUB',
          'Azure',
          'AWS',
        ];
    
        function radiusValue() {
          if (window.screen.width <= 778) {
            radii = 150;
          } else {
            radii = 290;
          }
          return radii;
        }
    
        const options = {
          radius: radiusValue(),
          maxSpeed: 'normal',
          initSpeed: 'normal',
          keep: true,
        };
    
        TagCloud(container, texts, options);
      }, []);
    
    return (
        <>
            <div className='text-sphere'>
                <span className='tagcloud'></span>
            </div>
        </>
    )
}

export default Textsphere