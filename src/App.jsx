import './index.css'; 
import React from "react";
import {useState} from "react";
 


const Header=()=>{
  return(
    <div className="header-section">
      <nav>
        <label for="destination">Destination</label>
        <select id="destination">
          <option value="">Popular Destination</option>
          <option value="spiritual Destination">Spiritual Destination</option>
          <option value="Heritage Destination">Heritage Destination</option>
          <option value="The Land of Buddha">The Land oF Buddha </option>
        </select>
        <span>Experience</span>
        <span>Travel</span>
        <h1 className='heading'>Incredible India<span className='exclamation'>!</span></h1>

        <span>Search</span>
        <input type="text" placeholder="Type it here.."></input>
        <span>Language</span>
</nav>
      
    </div>
  )
};

const ReadMoreLess =()=>{
  const [isExpanded,setIsExpanded] = useState(false);
  const toggleText = ()=>{
    setIsExpanded(!isExpanded);
  };
  return(
    <div className="read-more-less-section">
      <p >
        One of the oldest civilisations in the world, India is a mosaic of multicultural experiences.
       With a rich heritage and myriad attractions, the country is among the most popular tourist destinations in the world.
       It covers an area of 32, 87,263 sq. km, extending from the snow-covered Himalayan heights to the tropical rain forests of the south.As the 7th largest country in the world, India stands apart from the rest of Asia, marked off as it is by mountains and the sea, which give the country a distinct geographical entity.
      {isExpanded &&(<span className="more-text">
      Fringed by the Great Himalayas in the north, it stretches southwards and at the Tropic of Cancer, tapers off into the Indian Ocean between the Bay of Bengal on the east and the Arabian Sea on the west. As you travel the expanse of the country, you are greeted by diverse nuances of cuisines, faiths, arts, crafts, music, nature, lands, tribes, history and adventure sports. India has a mesmeric conflation of the old and the new. As the bustling old bazaars rub shoulders with swanky shopping malls, and majestic monuments accompany luxurious heritage hotels, the quintessential traveller can get the best of both worlds. Head to the mountains, enjoy a beach retreat or cruise through the golden Thar,India has options galore for all.
    </span>)}
    </p>
    <div className='button-container'>
    <span className='read-more-btn' onClick={toggleText}>{isExpanded?"Read Less":"Read More"}</span>
</div>
      

    </div>
  )

}
const BodyPart =()=>{
  return(
    <div className='body-section'>
      <div className='video-container'>
      <video width="100%"  controls>
      <source src="https://www.incredibleindia.org/content/dam/incredible-india-v2/video/original/Incredible_india_Edit_v10_1980x786_resolution.mp4" type="video/mp4"/>
      
      </video>
      </div>
      < ReadMoreLess/>
    </div>
  )
}

const AppLayout=()=>{
  return(
    <div className="app-section">
      <Header/>
      <BodyPart/>
    </div>
  )
}
export default AppLayout;
