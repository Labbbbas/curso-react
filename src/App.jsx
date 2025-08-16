import Card from './components/Card'
import Counter from './components/Counter'
import ToggleButton from './components/ToggleButton'
import NameForm from './components/NameForm'
import StylizedCard from './components/stylizedCard'
import UsersList from './components/UsersList'
import SearchPosts from './components/searchPosts'
import CounterUseReducer from './components/CounterUseReducer'
import ThemeButton from './ThemeButton'
import ThemeProvider from './context/ThemeContext'
import CounterWithCustomHook from './components/CounterWithCustomHook'

function App() {

  const items = ['React', 'JavaScript', 'Vite']

  const info = [
    { title: 'Teresa', description: 'Capibara' },
    { title: 'Gatita', description: 'Bonita' },
    { title: 'Ilia', description: 'Topuria' }
  ]

  const Separador = () => (
    <hr className='w-1/2 mx-auto' />
  )

  return (
    <div className='min-h-screen flex justify-center items-center'>
      <div className='flex flex-col items-center text-center space-y-3 w-full max-w-xl p-4 py-10'>
        <h1 className='font-bold text-3xl text-red-600'>Hola Mundo!</h1>

        <Separador />

        <ul className='list-disc'>
          {
            items.map((item, index) => (
              <li key={index}>{item}</li>
            ))
          }
        </ul>

        <Separador />

        {
          info.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              description={item.description}
            />
          ))
        }

        <Separador />

        <Counter />

        <Separador />

        <ToggleButton />

        <Separador />

        <NameForm />

        <Separador />

        <StylizedCard />

        <Separador />

        <UsersList />

        <Separador />

        <SearchPosts />

        <Separador />

        <CounterUseReducer />

        <Separador />

        <ThemeProvider>
          <ThemeButton />
        </ThemeProvider>
        
        <Separador />

        <CounterWithCustomHook />
        
      </div>
    </div>

  )
}

export default App
