import Card from './components/Card'
import Counter from './components/Counter'
import './App.css'

function App() {

  const items = ['React', 'JavaScript', 'Vite']

  const info = [
    { title: 'Teresa', description: 'Capibara' },
    { title: 'Gatita', description: 'Bonita'},
    { title: 'Ilia', description: 'Topuria'}
  ]

  return  (
    <div>
      
      <h1>Hola Mundo!</h1>

      {
        info.map((item, index) => (
          <Card 
            key={index}
            title={item.title}
            description={item.description}
          />
        ))
      }
      
      <ul>
        {
          items.map((item, index) => (
            <li key={index}>{item}</li>
          ))
        }
      </ul>

      <Counter />

    </div> 
  )
}

export default App
