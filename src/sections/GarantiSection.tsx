import Garantia from '../images/garantia-de-7-dias-1.png'

export default function GarantiSection() {
  return (
    <>
      <section className="section-garanti">
        <div className="container ">
          <div className="row pt-4 pb-4">
            <div className="col-md-6 text-center">
              <img src={Garantia} alt="" />
            </div>
            <div className="col-md-6 pt-5 text-center d-flex align-items-center">
              <h3>Garantia de qualidade ! Se comprar o curso e não te ajudar, em até 7 dias pós compras devolvemos seu dinheiro !</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}