function App() {
  return (
    <body class="md:text bg-gray-800">
      <div class="p-16 text-center">
        <h1 class="text-4xl text-red-400">Dylan Cherry</h1>
        <div class="md:flex space-x-4 pt-12 ">
          <div class="text-left pr-48 space-y-24">
            <p class="font-bold text-white">Hi, I am Dylan Cherry. I am an aspiring full-stack developer living in Montreal, Canada. I recently graduated Le Wagon Montreal's full-time intensive web development bootcamp. I am interested in full-time work.</p>
            <button class="mt-12 bg-red-400 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded">Contact me</button>
          </div>
          <div>
            <img src="https://res.cloudinary.com/dploqe2ts/image/upload/v1633016623/T02NE0241-U026Z2X2YV7-a31615815abe-512_tfvvjs.png" alt="Picture of Dylan Cherry" class="rounded-md"></img>
          </div>
        </div>
      </div>
    </body>
  );
}

export default App;
