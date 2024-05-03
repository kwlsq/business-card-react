import './App.css'
import ProfilePhoto from "./assets/Vincent3x4.png"
import EmailIcon from "./assets/email-ic.svg"
import LinkedinIcon from "./assets/linkedin-ic.svg"
import InstagramIcon from "./assets/ig-ic.svg"
import GithubIcon from "./assets/github-ic.svg"
import FacebookIcon from "./assets/facebook-ic.svg"
import TwitterIcon from "./assets/twitter-ic.svg"

function App() {


  return (
    <div className='business-card-container'>
      <header>
        <img src={ProfilePhoto} alt="profile phote of Vincent" ></img>
      </header>

      <main>
        <h1>Vincentius</h1>
        <h2>Frontend Developer</h2>
        <h3>Indonesia</h3>

        <div className='link-container'>
          <a target="_blank" href='mailto:vincentius.prime@gmail.com' className='email'><img src={EmailIcon}></img>Email</a>
          <a target="_blank" href='https://www.linkedin.com/in/vincentius-vincentius/' className='linkedin'><img src={LinkedinIcon}></img>LinkedIn</a>
        </div>

        <h4>About</h4>
        <p>I am a frontend developer with a believe that coding is work of art, thus it needs to be done with heart and creativity. Collaboration is one thing I always keep on my mind in order to write codes that are easy to read and develop.</p>


        <h4>Interests</h4>
        <p>FnB, Hospitality and Service Industries. Anime. Badminton. Game. Lemonade. Steak.</p>
      </main>

      <footer>
        <a target="_blank" href='https://www.instagram.com/vincentius26/'><img src={InstagramIcon}></img></a>
        <a target="_blank" href='https://github.com/kwlsq'><img src={GithubIcon}></img></a>
        <a target="_blank" href='https://www.facebook.com/profile.php?id=61552361856311'><img src={FacebookIcon}></img></a>
        <a target="_blank" href='https://twitter.com/Vincentiussss'><img src={TwitterIcon}></img></a>
      </footer>
    </div>
  )
}

export default App
