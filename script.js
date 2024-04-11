class Persona {
    constructor(nombre, apellidos, identificacion, estadoCivil) {
      this.nombre = nombre;
      this.apellidos = apellidos;
      this.identificacion = identificacion;
      this.estadoCivil = estadoCivil;
    }
  }
  
  class Empleado extends Persona {
    constructor(nombre, apellidos, identificacion, estadoCivil, anioIncorporacion, despacho) {
      super(nombre, apellidos, identificacion, estadoCivil);
      this.anioIncorporacion = anioIncorporacion;
      this.despacho = despacho;
    }
  }
  
  class Estudiante extends Persona {
    constructor(nombre, apellidos, identificacion, estadoCivil, cursoMatriculado) {
      super(nombre, apellidos, identificacion, estadoCivil);
      this.cursoMatriculado = cursoMatriculado;
    }
  }
  
  class Profesor extends Empleado {
    constructor(nombre, apellidos, identificacion, estadoCivil, anioIncorporacion, despacho, departamento) {
      super(nombre, apellidos, identificacion, estadoCivil, anioIncorporacion, despacho);
      this.departamento = departamento;
    }
  }
  
  class PersonalServicio extends Empleado {
    constructor(nombre, apellidos, identificacion, estadoCivil, anioIncorporacion, despacho, seccionAsignada) {
      super(nombre, apellidos, identificacion, estadoCivil, anioIncorporacion, despacho);
      this.seccionAsignada = seccionAsignada;
    }
  }
  
  class CentroEducativo {
    constructor() {
      this.personas = [];
    }
  
    darDeAltaPersona(persona) {
      this.personas.push(persona);
    }
  
    darDeBajaPersona(persona) {
      const index = this.personas.indexOf(persona);
      if (index > -1) {
        this.personas.splice(index, 1);
      }
    }
  
    listarInformacion() {
      return this.personas.map(persona => `${persona.nombre} ${persona.apellidos} - ${persona.constructor.name}`).join('\n');
    }



    
  }
  
  const centroEducativo = new CentroEducativo();
  
  function altaPersona() {
    const tipo = prompt('Ingrese el tipo de persona (Estudiante, Profesor, PersonalServicio)');
    const nombre = prompt('Ingrese el nombre');
    const apellidos = prompt('Ingrese los apellidos');
    const identificacion = prompt('Ingrese el número de identificación');
    const estadoCivil = prompt('Ingrese el estado civil');
  
    let persona;
  
    switch (tipo.toLowerCase()) {
      case 'estudiante':
        const cursoMatriculado = prompt('Ingrese el curso matriculado');
        persona = new Estudiante(nombre, apellidos, identificacion, estadoCivil, cursoMatriculado);
        break;
      case 'profesor':
        const anioIncorporacion = prompt('Ingrese el año de incorporación');
        const despacho = prompt('Ingrese el número de despacho');
        const departamento = prompt('Ingrese el departamento');
        persona = new Profesor(nombre, apellidos, identificacion, estadoCivil, anioIncorporacion, despacho, departamento);
        break;
      case 'personalservicio':
        const anioIncorporacionPS = prompt('Ingrese el año de incorporación');
        const despachoPS = prompt('Ingrese el número de despacho');
        const seccionAsignada = prompt('Ingrese la sección asignada');
        persona = new PersonalServicio(nombre, apellidos, identificacion, estadoCivil, anioIncorporacionPS, despachoPS, seccionAsignada);
        break;
      default:
        alert('Tipo de persona inválido');
        return;
    }
  
    centroEducativo.darDeAltaPersona(persona);
  }
  
  function bajaPersona() {
    const identificacion = prompt('Ingrese el número de identificación de la persona a dar de baja');
    const persona = centroEducativo.personas.find(persona => persona.identificacion === identificacion);
    if (persona) {
      centroEducativo.darDeBajaPersona(persona);
      alert('Persona dada de baja exitosamente');
    } else {
      alert('Persona no encontrada');
    }
  }
  
  function listarInformacion() {
    const informacion = centroEducativo.listarInformacion();
    document.getElementById('result').textContent = informacion;
  }
  