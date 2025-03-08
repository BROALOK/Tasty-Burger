import React from 'react'
import Layout from '../../components/Layouts/Layout'
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import Section6 from './Section6';
import Section7 from './Section7';
function Home() {
  return (
    
<>
    <Layout>
    {/* Home Section hero banner */}
      <Section1 />
      {/* Home Section ABout */}
      <Section2/>
      {/* Home section cards */}
      <Section3/>
      {/* home promotion section */}
      <Section4/>
      {/* home section shop */}
      <Section5/>
      {/* Home section 6.0 */}
      <Section6/>
      {/* Home section footer */}
      <Section7/>
     </Layout>
</>
    
  )
}

export default Home
