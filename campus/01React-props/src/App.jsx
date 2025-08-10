import './App.css'
import ilustracion from './assets/img/ilustracion.svg'
import ilustracion1 from './assets/img/ilustracion1.svg'
import uno from './assets/img/uno.jpg'
import dos from './assets/img/dos.jpg'
import tres from './assets/img/tres.jpg'
import cuatro from './assets/img/cuatro.jpg'
import cinco from './assets/img/cinco.jpg'
import seis from './assets/img/seis.jpg'
import Info from './components/Info'
import Card from './components/card'
import Tarjeta from './components/Tarjeta'
import Header from './components/Header'
import Contacto from './components/Contacto'

function App() {

  return (
  <>
    <Header />
    <section className="wave-contenedor website">
      <img src={ilustracion1} alt="" />
      <div className="contenedor-textos-main">
        <Tarjeta nombre="Axel López" profesion="Desarrollador" mensaje="Full-Stack"/>
        <Tarjeta />
      </div>
    </section>

    <Info title='Juntos podemos apoyar' desc='lorep ipsum'/>

    <section className="cards contenedor">
      <h2 className="titulo">Our services</h2>
      <div className="content-cards">
        <Card title="Tarjeta 1"/>
        <Card title="Tarjeta 2"/>
        <Card title="Tarjeta 3"/>
      </div>
    </section>

    <section className="galeria">
      <div className="contenedor">
        <h2 className="titulo">Our work</h2>
        <article className="galeria-cont">
          <img src={uno} alt="" />
          <img src={dos} alt="" />
          <img src={tres} alt="" />
          <img src={cuatro} alt="" />
          <img src={cinco} alt="" />
          <img src={seis} alt="" />
        </article>
      </div>
    </section>

    <Info title='Los proyectos más Cool' desc='Mira lo que hemos hecho'/>

    <section className="info-last">
      <div className="contenedor last-section">
        <div className="contenedor-textos-main">
          <h2 className="titulo left">Title of section</h2>
          <p className="parrafo">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
            reprehenderit nostrum expedita quasi odio architecto laudantium sunt
            nemo dicta atque?
          </p>
          <a href="" className="cta">
            Learn more
          </a>
        </div>
        <img src={ilustracion} alt="" />
      </div>
      <div className="svg-wave" style={{ height: 150, overflow: "hidden" }}>
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          style={{ height: "100%", width: "100%" }}
        >
          <path
            d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
            style={{ stroke: "none", fill: "#f5576c" }}
          />
        </svg>
      </div>
    </section>
    <Contacto />
  </>
  )
}

export default App