import './App.css'
import CardProduct from './components/card/CardProduct'
import CardFeedback from './components/card/CardFeedback'
import Footers from './components/footer/Footer'
import Navbars from './components/header/Navbar'
function App() {
  return (
    <>
      <Navbars/>
      <Main>
          <h2 className='text-lg md:text-2xl text-center font-bold m-6'>Products</h2>
          {/* // Produt section  */}
          <section className='container mx-auto p-5'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 items-center justify-center'>
              <CardProduct/>
              <CardProduct/>
              <CardProduct/>
              <CardProduct/>
            </div>
          </section>
          <h2 className='text-lg md:text-2xl text-center font-bold m-6'>Feedback</h2>
          <section className='container mx-auto p-5 m-6'>
            <div className='grid grid-cols-1 grid-cols-3 md:grid-cols-4 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
              <CardFeedback/>
              <CardFeedback/>
              <CardFeedback/>
              <CardFeedback/>
            </div>
          </section>
      </Main>
      

      <Footers/>
    </>
  )
}
export default App
