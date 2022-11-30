import React from "react"
import CompraSegura from '../images/compra-segura.png'
export default function AboutSection(){
    return (
   <>
      {/* video section */}
      <section className="section-video">
        <div className="container">

          <div className="row">
            <div className="col-md-12 pt-3 text-center">
              <div className="text">
                <h1>O método para ter um cão equilibrado e saudável,<br /> <b>apenas 20 minutos</b> por dia para resolver seus problemas !   </h1>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="video-iframe col-md-12 d-flex justify-content-center mt-4">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/eg11Cu1xfI8" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
            </div>
          </div>

          <div className="row offer">
            <div className="col-md-12 pt-5 text-center ">
              <a className='button-action' href='https://www.google.com'>Quero me inscrever agora !</a>
            </div>
            <div className="col-md-12 text-center mt-5 pt-3 d-flex flex-column justify-content-center align-items-center">
              <span className='offer-text'> 12x de R$12,50 para melhorar a qualidade de vida do seu cãozinho ! </span>
              <span className='offer-time'>*OFERTA ENCERRA EM 24HORAS*</span>
              <img className='compra-segura' src={CompraSegura} alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* end video section  */}
   </>
    )
}