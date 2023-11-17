import Navbar from "./components/navbar"
import Footer from "./components/Footer"

function App() {

  return (
    <div className='w-full h-screen '>
      <Navbar logo = 'CYRS'/>
      <div className="hero 1 flex flex-col justify-center items-center py-20">
        <div className="w-full max-w-3xl flex flex-row justify-center gap-10">
          <div className="w-full flex flex-col items-start">
            <div className="uppercase font-bold text-4xl">Hey! I'm Cyrus, a student at Holy Angel University with the intent to be a future 
              software developer.
            </div>
            <div className="flex flex-row gap-4">
              <div className="font-bold">Designer</div>
              <div className="font-bold">Figma</div>
              <div className="font-bold">Developer</div>
            </div>
            <div className="flex flex-row gap-4">
              <button className="border-2 px-4 py-1 border-black rounded-full">Want to discuss?</button>
              <button className="border-2 border-black bg-yellow-400 rounded-full px-4 py-2">HIRE ME</button>
            </div>
          </div>
          <div className="hero-2"><img src="./img/cyrus2.jpg" alt="" className="rounded-full"/></div>
        </div>
      </div>
      <div className="skill py-20">
        <div className="text-center text-3xl font-extrabold bg-slate-400 py-3">About Me</div>
        <div className="flex flex-row gap-20 items-center justify-between py-10">
          <div className="p-5 font-light text-2xl uppercase">I am proficient in Website development using HTML, CSS and also using framework such as react.
            In addition to web development I am also with programming languages such as, java,python, and C++.
          </div>
          <div className="flex flex-col h-40 w-80 gap-20">
            <img src="./img/react.png" alt="" className="object-cover" />
            <img src="./img/java.png" alt="" className="object-cover"/>
            </div>
          <div className="flex flex-col h-40 w-80 gap-20">
            <img src="./img/html5.png" alt="" className="object-cover"/>
            <img src="./img/python.png" alt="" className="object-cover"/>
            </div>
          <div className="flex flex-col h-40 w-80 gap-20 mr-20">
            <img src="./img/css.png" alt="" className="object-cover"/>
            <img src="./img/c++.png" alt="" className="object-cover"/>
            </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default App
