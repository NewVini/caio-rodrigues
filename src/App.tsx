import VideoSection from './sections/VideoSection'
import AboutSection from './sections/AboutSection'
import Waves from './images/wave.svg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.scss';
import HowWorksSection from './sections/HowWorksSection';
import GarantiSection from './sections/GarantiSection';
import FaqSection from './sections/FaqSection';
import { useEffect } from 'react';
import DepoiMentsSection from './sections/DepoimentsSection';

function App() {
  const nomes = [
    'Maria',
    'Victor',
    'Roberto',
    'Junior',
    'Victor',
    'Vitoria',
    'Vinicus',
    'Caio',
    'João Paulo',
    'Ana Maria,',
    'Paulo Roberto',
    'Ricardo',
    'Josué',
    'Caio Macedo',
    'Roberta',
    'Marcela',
    'Ana Beatriz',
    'Ana Lima',
    'José Freitas',
    'Paulo Ricardo',
    'Diogo',
    'Marcia',
    'Yres'
  ]
  const compNomes = []
  const nomeSorteado = () => {
    for (var i = 0; i < nomes.length; i++) {
      for (var j = i + 1; j < nomes.length; j++) {
        for (var n = 1; i < nomes.length; n++) {
          return nomes[compNomes.push(nomes[i] + nomes[j] + nomes[n])]
        }
      }
    }
  }


  const notify = () => toast.success(`${nomeSorteado() === undefined ? 'Maria' : nomeSorteado()} Inscreveu-se no curso, restam poucas vagas !`, {
    position: 'top-left',
    autoClose: 2000,
  });

  useEffect(() => {
    setInterval(() => {
      notify()
    }, 30000)
  }, [])

  return (
    <>
      <div className="shine-item"></div>
      <ToastContainer style={{ width: "270px", marginTop: "10px" }} />
      <VideoSection />
      <AboutSection />
      <DepoiMentsSection />
      <HowWorksSection />
      <GarantiSection />
      <FaqSection />
      <footer>
        <p>2022 - Todos os direitos reservados a Caio Rodrigues</p>
      </footer>
    </>
  );
}

export default App;
