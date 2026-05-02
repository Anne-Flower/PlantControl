import Footer from './components/Footer'
import Header from './components/Header'
import Login from './components/Login'

const LoginPage = () => {
  
  return (
    <>
      <div className="flex flex-col min-h-screen font-sans">
        <Header></Header>
        <div className="pt-48 flex-1 bg-[url('./assets/images/plant-add.jpg')] bg-cover bg-center">
          <Login/>
        </div>
        <Footer></Footer>
      </div>
    </>
  )
}

export default LoginPage