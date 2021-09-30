function App() {
  return (
    <body class="md:text bg-gray-800">
      <div class="pt-16 pl-16 pr-16 text-center">
        <h1 class="text-5xl text-red-400">Dylan Cherry</h1>
        <div class="md:flex space-x-4 pt-12">
          <div class="border-b-4 border-red-400 pb-12">
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
        <div class="text-white border-b-4 border-red-400 pb-12">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?</p>
        </div>
      </div>
      <div class="pb-16 pl-16 pr-16">
        <div class="text-center mb-12">
          <h2 class="text-4xl text-red-400 font-bold mb-12">Projects</h2>
          <div>
            <div class="text-center content-center border-4 rounded-lg border-red-400 max-w-sm  p-8">
              <h3 class="text-3xl text-white p-4">Tastogether</h3>
              <img class="w-32 rounded-md mx-auto" src="https://res.cloudinary.com/dploqe2ts/image/upload/v1633025089/tastogether_iixk95.png" alt="Screencap of Tastogether project."/>
              <p class="text-white p-4">Ruby on Rails | Heroku</p>
              <p class="text-red-300 p-2">Tastogether allows food lovers to connect with other food lovers and create shared tasting experiences.</p>
              <ul class="text-gray-300 text-left">
                <li>Worked alongside my teammates to come up with and prioritize features.</li>
                <li>Helped design and build the application's schema.</li>
                <li>Initialized and configured the application's Pundit policies.</li>
                <li>Helped build the application's seed file.</li>
                <li>Installed and configured Geocoder.</li>
                <li>Worked on front-end design alongside a colleague and built various view
                  pages.</li>
                <li>Implemented and designed various features such as a working calendar and modal.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}

export default App;
