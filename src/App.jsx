import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'

const imgURL = "https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg";

function App() {
  return (
    <>
        <h1>Sung Yi</h1>
        <div>
            <p>
                This is a bunch of information about myself. I'm from here and there and
                discovered my love of programming when this happened. When I'm not
                working I'm busy doing this and that.
            </p>
        </div>

        <img
            src={ imgURL }
            alt=""
        />

        <div className='skill_list'>
            <h3>Here are some of my Skills!</h3>
            <ul>
                <h3>Languages</h3>
                <li>JavaScript</li>
                <li>SQL</li>
                <li>HTML5</li>
                <li>CSS3</li>
            </ul>

            <ol>
                <h3>Libraries</h3>
                <li>React</li>
                <li>PostgreSQL</li>
                <li>Node</li>
                <li>Bootstrap</li>
            </ol>
        </div>

        <div>
            <h3>Hardest Bug So Far</h3>
            <p>
                My hardest bug I ever came across was this infinite loop I couldn't
                escape.
            </p>
            <p>I came up with a totally sick solution though by doing ...</p>
        </div>

        <h2>Contact Me</h2>
        <div>
            Email me at:
            <a href="mailto:hello@pursuit.org" target="_top">hello@pursuit.org</a>
        </div>

        <ul>
            <li><a href="github.com">github link</a></li>
            <li><a href="linkedin.com">LinkedIn link</a></li>
            <li><a href="angellist.com">Angel list link</a></li>
        </ul>
    </>
  )
}

export default App
