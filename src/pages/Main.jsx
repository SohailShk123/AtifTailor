
import Home from './Home'
import About from './About'
import Services from './Services'
import Gallery from './Gallery'
import Contact from './Contact'

const Main = () => {
  return (
    <div className="flex flex-col min-h-screen">
    <main className="flex-grow">
      {/* Each section has a unique ID for navigation */}
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="gallery">
        <Gallery />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </main>
  </div>
  )
}

export default Main