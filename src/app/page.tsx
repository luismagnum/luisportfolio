import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero";
import Tecnologias from "../components/tecnologias/Tecnologias";
import Proyectos from "../components/proyectos/Proyectos";
import Simulacion from "../components/Simulacion/Simulacion";
import Contacto from "../components/contacto/Contacto";
import Footer from "../components/footer/Footer";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <div id="tecnologias">
      <Tecnologias />
      </div>
      <div id="proyectos">
      <Proyectos />
      </div>
      <Simulacion />
      <div id="contacto">
      <Contacto />
      </div>
      <Footer />
    </div>
  );
}
