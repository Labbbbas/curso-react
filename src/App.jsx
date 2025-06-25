import Card from './components/Card'
import Counter from './components/Counter'
import ToggleButton from './components/ToggleButton'
import NameForm from './components/NameForm'
import './App.css'

function App() {

  const items = ['React', 'JavaScript', 'Vite']

  const info = [
    { title: 'Teresa', description: 'Capibara' },
    { title: 'Gatita', description: 'Bonita' },
    { title: 'Ilia', description: 'Topuria' }
  ]

  return (
    <div>

      <h1>Hola Mundo!</h1>

      <hr />

      <ul>
        {
          items.map((item, index) => (
            <li key={index}>{item}</li>
          ))
        }
      </ul>

      <hr />

      {
        info.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            description={item.description}
          />
        ))
      }

      <hr />

      <Counter />

      <hr />

      <ToggleButton />

      <hr />

      <NameForm />

    </div>
  )
}

export default App
