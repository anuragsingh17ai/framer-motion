import './App.css'
import Typewriter from 'typewriter-effect';
import Elon from './components/Elon';
import LordKrishna from './components/LordKrishna';
import Jesus from './components/Jesus';
import Topper from './components/Topper';
import LoveGuru from './components/LoveGuru';
import Warren from './components/Warren';
import Richard from './components/Richard';

function App() {

  return (
    <div className='min-h-screen bg-black'>
      <div className='text-white text-4xl font-bold inline items-center shadow-md shadow-gray-200'>
        <Typewriter 
          onInit={(typewriter) => {
            typewriter.typeString('Are you ready! ')
            .pauseFor(1000)
            .typeString("To talk with greats")
            .start();
            }}
        />
      </div>
      <div className='grid grid-cols-4'>
        <div className='LordKrishna'> <LordKrishna/> </div>
        <div className='Jesus'> <Jesus/> </div>
        <div className='Topper'><Topper/></div>
        <div className="LoveGuru"><LoveGuru/></div>
        <div className="Elon"><Elon/></div>
        <div className="Warren"><Warren/></div>
        <div className="Richard"><Richard/></div>
      </div>
    </div>
  )
}

export default App
