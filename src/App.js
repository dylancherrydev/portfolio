import { FaJsSquare, FaHtml5, FaCss3Alt, FaReact, FaGithub, FaBootstrap } from "react-icons/fa";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { SiTailwindcss, SiRails } from "react-icons/si";
import { DiRuby } from "react-icons/di";

function App() {
  return (
    <body class="md:text bg-gray-800">
      <div class="pt-16 pl-16 pr-16 text-center">
        <h1 class="text-5xl text-red-400">Dylan Cherry</h1>
        <div class="md:flex space-x-4 pt-12">
          <div class="border-b-4 border-red-400 pb-16">
            <div class="md:items-center pb-12 w-200px">
              <img class="w-64 rounded-md mx-auto border-4 border-red-400" src="https://res.cloudinary.com/dploqe2ts/image/upload/v1633016623/T02NE0241-U026Z2X2YV7-a31615815abe-512_tfvvjs.png" alt="Portrait of Dylan Cherry"></img>
            </div>
            <p class="font-bold text-white">Hi, I am Dylan Cherry. I am an aspiring full-stack developer living in Montreal, Canada. I recently graduated Le Wagon Montreal's full-time intensive web development bootcamp. I am interested in full-time work.</p>
            <button class="mt-12 bg-red-400 hover:bg-gray-200 text-white hover:text-red-400 font-bold py-2 px-4 rounded">Contact Me</button>
          </div>
          <div>
          </div>
        </div>
      </div>
      <div class="p-16">
        <div class="text-center mb-12">
          <h2 class="text-4xl text-red-400 font-bold">About Me</h2>
        </div>
        <div class="text-white border-b-4 border-red-400 pb-16">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?</p>
        </div>
      </div>
      <div class="pb-16 pl-16 pr-16">
        <div class="text-center border-b-4 border-red-400 pb-20">
          <h2 class="text-4xl text-red-400 font-bold mb-16">Projects</h2>
          <div class="md:flex pl-16 pr-16 justify-between">
            <div class="text-center content-center border-4 rounded-lg border-red-400 max-w-sm  p-8">
              <h3 class="text-3xl text-white p-4">Tastogether</h3>
              <img class="w-32 rounded-md mx-auto mt-4" src="https://res.cloudinary.com/dploqe2ts/image/upload/v1633025089/tastogether_iixk95.png" alt="Screencap of Tastogether project."/>
              <p class="text-white pt-8 p-4">Ruby on Rails | Heroku</p>
              <p class="text-red-300 p-2">Tastogether allows food lovers to connect with other food lovers and create shared tasting experiences.</p>
            </div>
            <div class="text-center content-center border-4 rounded-lg border-red-400 max-w-sm  p-8">
              <h3 class="text-3xl text-white p-4">Soundlet</h3>
              <img class="w-64 rounded-md mx-auto mt-4" src="https://res.cloudinary.com/dploqe2ts/image/upload/v1633031003/soundlet_kqhciv.png" alt="Screencap of Soundlet project."/>
              <p class="text-white pt-8 p-4">Ruby on Rails | Heroku</p>
              <p class="text-red-300 p-2">Whether you're looking to rent someone's equipment or rent out your own gear,
                Soundlet will make your experience effortless!</p>
              <p class="text-red-300 p-2">[Airbnb clone]</p>
            </div>
          </div>
        </div>
      </div>
      <div class="pb-16 pl-16 pr-16">
        <div class="text-center mb-12 border-b-4 border-red-400 pb-20">
          <h2 class="text-4xl text-red-400 font-bold mb-16">Tech Stack</h2>
          <ul class="grid grid-cols-4 mb-8">
            <li class="text-center">
              <FaJsSquare class="text-red-400 text-6xl mx-auto mb-2"/>
              <p class="text-white">JavaScript</p>
            </li>
            <li>
              <FaHtml5 class="text-red-400 text-6xl mx-auto mb-2" />
              <p class="text-white">HTML</p>
            </li>
            <li>
              <FaCss3Alt class="text-red-400 text-6xl mx-auto mb-2" />
              <p class="text-white">CSS</p>
            </li>
            <li>
              <FaReact class="text-red-400 text-6xl mx-auto mb-2" />
              <p class="text-white">React</p>
            </li>
          </ul>
          <ul class="grid grid-cols-4 mb-8">
            <li>
              <FaGithub class="text-red-400 text-6xl mx-auto mb-2" />
              <p class="text-white">GitHub</p>
            </li>
            <li>
              <AiOutlineConsoleSql class="text-red-400 text-6xl mx-auto mb-2" />
              <p class="text-white">SQL</p>
            </li>
            <li>
              <SiTailwindcss class="text-red-400 text-6xl mx-auto mb-2" />
              <p class="text-white">TailwindCSS</p>
            </li>
            <li>
              <FaBootstrap class="text-red-400 text-6xl mx-auto mb-2" />
              <p class="text-white">Bootstrap</p>
            </li>
          </ul>
          <ul class="grid grid-cols-4">
            <li></li>
            <li>
              <DiRuby class="text-red-400 text-6xl mx-auto mb-2" />
              <p class="text-white">Ruby</p>
            </li>
            <li>
              <SiRails class="text-red-400 text-6xl mx-auto mb-2" />
              <p class="text-white">Rails</p>
            </li>
          </ul>
        </div>
      </div>
    </body>
  );
}

export default App;
