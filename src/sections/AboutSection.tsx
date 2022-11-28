import React from "react"
import Bronca from '../images/bronca-cachorro-xixi.jpg'
import Waves from '../images/wave.svg'
import { GrAlert } from 'react-icons/gr'

export default function AboutSection() {
  return (
    <>
      <section className="section-about pb-5">
        <img src={Waves} alt="" />
        <div className="container negative-margin">
          <div className="row text-center">
            <h1 className='mb-5'>Para quem é este conteúdo ?</h1>
          </div>
          <div className="row">
            <div className="col-md-6">
              <img className='bronca' src={Bronca} alt="" />
            </div>
            <div className="col-md-6">
              <ul>
                <li>Se o seu cachorro:</li>
                <li> <GrAlert /> Tem medo ou problema com fogos</li>
                <li><GrAlert />  Faz xixi e cocô por toda casa</li>
                <li><GrAlert />  Morde tudo o que ver pela frente</li>
                <li><GrAlert />  Puxa coleira nos passeios</li>
                <li><GrAlert />  Não te obedece</li>
                <li><GrAlert />  Pula nas visitas</li>
                <li><GrAlert />  Rosna para todo mundo</li>
                <p>ESTE MÉTODO É PARA VOCÊ !</p>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}