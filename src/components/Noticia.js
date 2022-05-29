function Noticia(){
    const noticia = {
      titulo: 'Curso React 2022',
      descripcion: 'Esto es una demostración de desustruración de objetos.',
    }
  
    const {titulo, descripcion} = noticia
  
    return (
      <div className="mi-clase">
        <h1 className="mi-titulo">
          Mi noticia: {titulo} 
        </h1>
      </div>
    )
  }

export default Noticia