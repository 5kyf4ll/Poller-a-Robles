const MapaEstrategicoPage = () => {
  return (
    <>
      <div className="container container-mapa">
        <div className="row" id="titulo">
          <div className="col-sm-12">
            <h1 className="">
              Mapa Estratégico / <b>2024 - 2025</b> / Polleria Robles
            </h1>
          </div>
        </div>
        <div className="fundo-branco row-eq-height row" id="linha-um">
          <div className="cabecalho col-lg-2 col-md-12">
            <img src="/LogoRobles.jpg" alt="logo" id="logo" />
          </div>
          <div className="cabecalho col-lg-4 col-md-12">
            <h2>Misión</h2>
            <p>
              En Pollería Robles 7 Sabores, nos dedicamos a ofrecer a nuestros clientes una experiencia única en cada visita, mediante la preparación y servició de deliciosos platillos de pollos a la brasa y platos a la carta, que resaltan por su frescura y autenticidad.{" "}
            </p>
          </div>
          <div className="cabecalho col-lg-6 col-md-12">
            <h2>Visión</h2>
            <p>
              Ser reconocidos como la pollería líder en la ciudad de Huaraz, destacando por nuestra excelencia en sabor, calidad y servicio al cliente. Aspiramos a expandirnos en la región, manteniendo siempre nuestros altos estándares y siendo referentes en la industria de la comida rápida de pollo y platos a la carta. {" "}
            </p>
          </div>
          <div className="cabecalho col-lg-4 col-md-12">
            <h2>Valores</h2>
            <p>
              <li type="disc">Atencion </li>
              <li>Puntualidad</li>
              <li>Honestidad</li>
              <li>Confianza</li>
            
            </p>
            
          </div>
        </div>

        <div className="row fundo-branco linha-padding" id="linha-dois">
          <div className="col-lg-3 col-md-12">
            <h3
              data-toggle="tooltip"
              title="Lorem ipsum dolor sit amett cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            >
              Perspectiva Financiera
            </h3>
          </div>
          <div className="col-lg-2 col-md-12">
            <p className="btn-1 btn-roxo">Aumentar la rentabilidad promedio por cliente</p>
          </div>
          <div className="col-lg-2 col-md-12">
            <p className="btn-1 btn-roxo">Desarrollar y lanzar un servicio de catering</p>
          </div>
          <div className="col-lg-2 col-md-12">
            <p className="btn-1 btn-roxo">
              Aumentar en un 20% los ingresos generados
            </p>
          </div>
          <div className="col-lg-2 col-md-12">
            <p className="btn-1 btn-roxo">Reducir los costos operativos en un 10%</p>
          </div>
        </div>

        <div
          className="row fundo-branco row-eq-height linha-padding"
          id="linha-quatro"
        >
          <div className="col-lg-3 col-md-12">
            <h3
              data-toggle="tooltip"
              title="Lorem ipsum dolor sit amett cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            >
              Perspectiva Cliente
            </h3>
          </div>
          <div className="col-lg-3 col-md-12">
            <p className="btn-1 btn-amarelo" id="linha-quatro-irregular">
              Mejora de atencion al cliente
            </p>
          </div>
          <div className="col-lg-3 col-md-12">
            <p className="btn-1 btn-amarelo" id="linha-quatro-irregular">
              Sistema de evaluacion de la satisfaccion del cliente
            </p>
          </div>
          <div className="col-lg-3 col-md-12">
            <p className="btn-1 btn-amarelo" id="linha-quatro-irregular">
              Programa de recomendaciones que recompense a los clientes
            </p>
          </div>
        </div>

        <div
          className="row-eq-height fundo-branco row linha-padding"
          id="linha-tres"
        >
          <div className="col-lg-3 col-md-12">
            <h3
              data-toggle="tooltip"
              title="Lorem ipsum dolor sit amett cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            >
              Perspectivas Procesos
            </h3>
          </div>
          <div className="col-md-3 col-sm-12" id="padding-left">
            <p className="btn-1 btn-vermelho">
              Reducir el tiempo de preparacion de platos a la carta en un 15%
            </p>
          </div>
          <div className="col-md-3 col-sm-12" id="padding-left">
            <p className="btn-1 btn-vermelho">
              Implementar un sistema de reservas en linea
            </p>
          </div>
          <div className="col-md-2 col-sm-12" id="padding-left">
            <p className="btn-1 btn-vermelho">Implementar un sistema automatizado</p>
          </div>
        </div>

        <div className="row fundo-branco linha-padding" id="linha-cinco">
          <div className="col-lg-3 col-md-12">
            <h3
              data-toggle="tooltip"
              title="Lorem ipsum dolor sit amett cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            >
              Perspectiva Crecimiento
            </h3>
          </div>
          <div className="col-lg-3 col-md-12">
            <p className="btn-1 btn-azul">
              Abrir una suscursal adicional en una ubicacion estrategica de la ciudad
            </p>
          </div>
          <div className="col-lg-3 col-md-12">
            <p className="btn-1 btn-azul">
              Introducir al menos tres nuevos platos innovadores y tratactivos en el menú
            </p>
          </div>
          <div className="col-lg-3 col-md-12">
            <p className="btn-1 btn-azul">
              Implementar un programa de fidelizacion de clientes que incluya recompensas y descuentos
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MapaEstrategicoPage;
