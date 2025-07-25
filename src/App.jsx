import Header from "./component/Header"
import Hero from "./component/Hero"
import Space from "./component/Space"
import SpaceTitle from "./component/SpaceTitle"
import About from "./component/About"
import RadioInput from "./component/RadioInput"
import Contact from "./component/Contact"
import Footer from "./component/Footer"

function App() {

const spaces=[{image:"https://images.pexels.com/photos/159839/office-home-house-desk-159839.jpeg",
  title:"renting office",
  description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis saepe totam blanditiis distinctio tenetur nisi explicabo rem praesentium, Doloribus sunt natus nisi deserunt fugiat?",
  link:"learn more",
},
{image:"https://images.pexels.com/photos/5709248/pexels-photo-5709248.jpeg",
  title:"coffee shop",
  description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis saepe totam blanditiis distinctio tenetur nisi explicabo rem praesentium, esse odio inventore, doloribus culpa error.",
  link:"learn more",
},
{image:"https://images.pexels.com/photos/16985186/pexels-photo-16985186.jpeg",
  title:"private event space",
  description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis saepe totam blanditiis distinctio tenetur nisi explicabo rem praesentium, esse odio inventore, doloribus culpa error. ",
  link:"learn more",
},]

  return (
   <>
   <div>
      <Header  />
      <Hero image="https://images.pexels.com/photos/1045199/pexels-photo-1045199.jpeg"/>
      <SpaceTitle/>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:px-20 md:px-4 md:gap-2">
  {spaces.map((space, index) => (
    <Space
      key={index}
      image={space.image}
      title={space.title}
      description={space.description}
      link={space.link}
      
    />
  ))}
</div>

<div><RadioInput/></div>
<div>
  <About/>
</div>
<div>
  <Contact/>
</div>
<div>
   <Footer /> 
</div>
     
    </div>
   </>
  )
}

export default App
