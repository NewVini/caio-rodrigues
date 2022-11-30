import React from "react"
import Dep1 from '../images/depoimentos/dep1.jpg'
import Dep2 from '../images/depoimentos/dep2.jpg'
import Dep3 from '../images/depoimentos/dep3.jpg'
import Dep4 from '../images/depoimentos/dep4.jpg'
import Dep5 from '../images/depoimentos/dep5.jpg'
import Dep6 from '../images/depoimentos/dep6.jpg'
import Dep7 from '../images/depoimentos/dep7.jpg'
import Dep8 from '../images/depoimentos/dep8.jpg'

export default function DepoiMentsSection() {
  return (
    <>
      <section className="section-depoiments ">
        <div className="container">
          <div className="row text-center mt-3">
            <h1>Veja abaixo resultado dos meus alunos:</h1>
            <b>Todos estes alunos utilizaram a mesma metodologia ensinada neste curso !</b>
          </div>
          <div className="row mt-4">
            <div className="col-md-3 d-flex justify-content-center align-items-center">
              <img src={Dep1} alt="" />
            </div>
            <div className="col-md-3 d-flex justify-content-center align-items-center">
              <img src={Dep2} alt="" />
            </div>
            <div className="col-md-3 d-flex justify-content-center align-items-center">
              <img src={Dep3} alt="" />
            </div>
            <div className="col-md-3 d-flex justify-content-center align-items-center">
              <img src={Dep4} alt="" />
            </div>
            <div className="col-md-3 d-flex justify-content-center align-items-center">
              <img src={Dep5} alt="" />
            </div>
            <div className="col-md-3 d-flex justify-content-center align-items-center">
              <img src={Dep6} alt="" />
            </div>
            <div className="col-md-3 d-flex justify-content-center align-items-center">
              <img src={Dep7} alt="" />
            </div>
            <div className="col-md-3 d-flex justify-content-center align-items-center">
              <img src={Dep8} alt="" />
            </div>
          </div>
          <div className="row text-center">
            <div className="col-md-12 pt-5 text-center ">
              <a className='button-action' href='https://www.google.com'>Quero me inscrever agora !</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}