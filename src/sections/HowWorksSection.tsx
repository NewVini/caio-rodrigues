import React from "react"
import Bronca from '../images/bronca-cachorro-xixi.jpg'
import Waves from '../images/wave.svg'
import { GrAlert } from 'react-icons/gr'

export default function HowWorksSection() {
  const modules = [
    {
      modulo: "Módulo 1",
      titulo: "Comportamento caníno",
      paragrafo: "Toda teoria sobre comportamento canino e como isto pode mudar a sua vida e a do seu PET"
    },
    {
      modulo: "Módulo 2",
      titulo: "Comandos para seu cão",
      paragrafo: "Aprenda a ter controle total do seu cão através de comandos como 'Fica, deita, senta, rola' "
    },
    {
      modulo: "Módulo 3",
      titulo: "Como passear com seu cão",
      paragrafo: "O guia completo para ter um cão obediente em passeios e evitar que ele puxe a guia"
    },
    {
      modulo: "Módulo 4",
      titulo: "Xixi e Côcô",
      paragrafo: "Depois deste módulo seu cão NUNCA MAIS irá fazer as necessidades em lugar indevido "
    },
    {
      modulo: "Módulo 5",
      titulo: "BÔNUS - Fogos e Festas",
      paragrafo: "Como lidar com seu cão em situação de fogos e festas."
    }
  ]
  return (
    <>
      <section className="section-how-works">
        <div className="container">
          <div className="row text-center mt-3">
            <h1>Como irá funcionar nosso curso:</h1>
            <b>Após anos praticando, estudando e validando meus métodos eu trouxe mastigado para todos minha metodologia que vem mudando a vida de donos de pet !</b>
          </div>
          <div className="row ">
            {
              modules.map((obj, index) => {
                return (
                  <div className="col-md-3 d-flex justify-content-center align-items-center">
                    <div className="module-box mt-4">
                      <h1>{obj.modulo}</h1>
                      <h2>{obj.titulo}</h2>
                      <p>{obj.paragrafo}</p>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>
    </>
  )
}