import React from "react"
import vg from "../styles/2.webp"
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillInstagram, AiFillYoutube} from "react-icons/ai"

const Home = () => {
  return (
    <>
    <div className="home">
        <main>
            <h1>Techystar</h1>
            <p>Solution to all your problems</p>
        </main>
    </div>

    <div className="home2">
      <img src={vg} alt="Graphics" />

      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eos quidem illum. Explicabo enim, mollitia sapiente provident maiores itaque nemo officia commodi facilis voluptatibus velit repellendus ut, quam sit. Nisi.
        </p>
      </div>
    </div>

    <div className="home3">
      <div>
        <h1>Who we are?</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur autem illum ab necessitatibus sint minima dolorum quidem corrupti possimus. Odit, magni? Incidunt eveniet dolorem architecto magnam distinctio, excepturi ab atque.</p>
      </div>
    </div>

    <div className="home4">
      <div>
        <h1>Brands</h1>
        <article>
          <div style={{
            animationDelay:"0.5s"
          }}>
                <AiFillGoogleCircle />
                <p>Google</p>
          </div>

          <div style={{
            animationDelay:"0.5s"
          }}>
                <AiFillAmazonCircle />
                <p>Google</p>
          </div>

          <div style={{
            animationDelay:"0.5s"
          }}>
                <AiFillYoutube />
                <p>Google</p>
          </div>
        </article>
      </div>
    </div>

    </>
  )
};

export default Home;
