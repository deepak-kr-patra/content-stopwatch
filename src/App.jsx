import './App.css'
import CounterButtons from './components/CounterButtons'


function App() {
  return (
    <>
      <div className='h-full w-full flex flex-col items-center justify-start gap-8'>
        <div className='flex items-center justify-center'>
          <h3 className='header'>CONTENT STOPWATCH</h3>
        </div>

        <div className='h-full flex flex-col items-center justify-center gap-4'>
          <CounterButtons />
        </div>
      </div>
    </>
  )
}

export default App