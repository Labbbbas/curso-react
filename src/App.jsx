import './App.css'

function App() {

  const items = ['React', 'JavaScript', 'Vite']

  return  (
    <div>
      <ul>
        {
          items.map((item, index) => (
            <li key={index}>{item}</li>
          ))
        }
      </ul>
    </div>
    
  )
}

export default App
