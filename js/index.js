const div_especialidades = document.getElementById('div_detalle_especialidades');
div_especialidades.style.display = 'none';
const especialidades = [
  {
    "especialidades_medicas": {
      "medicina_interna": {
        "nombre": "Medicina Interna",
        "subespecialidades": [
          {
            "nombre": "Cardiología",
            "horas_disponibles": true
          },
          {
            "nombre": "Gastroenterología",
            "horas_disponibles": false
          },
          {
            "nombre": "Endocrinología",
            "horas_disponibles": false
          },
          {
            "nombre": "Neumología",
            "horas_disponibles": false
          }
        ]
      },
      "cirugia": {
        "nombre": "Cirugía",
        "subespecialidades": [
          {
            "nombre": "Cirugía General",
            "horas_disponibles": true
          },
          {
            "nombre": "Cirugía Cardíaca",
            "horas_disponibles": false
          },
          {
            "nombre": "Cirugía Plástica",
            "horas_disponibles": true
          },
          {
            "nombre": "Cirugía Pediátrica",
            "horas_disponibles": false
          },
          {
            "nombre": "Cirugía Vascular",
            "horas_disponibles": false
          }
        ]
      },
      "pediatria": {
        "nombre": "Pediatría",
        "subespecialidades": [
          {
            "nombre": "Neonatología",
            "horas_disponibles": false
          },
          {
            "nombre": "Pediatría General",
            "horas_disponibles": false
          },
          {
            "nombre": "Cardiología Pediátrica",
            "horas_disponibles": true
          },
          {
            "nombre": "Neurología Pediátrica",
            "horas_disponibles": true
          }
        ]
      }
    }
  }
];
const cargarEspecialidades = (filtro) =>{
  const lista = document.createElement('ul');
  especialidades.forEach(especialidad => {
    const especialidadesMedicas = especialidad.especialidades_medicas;
    for (const key in especialidadesMedicas) {
      const especialidadInfo  = especialidadesMedicas[key];
      const itemPrincipal     = document.createElement('li');
      itemPrincipal.innerHTML = `<strong>${especialidadInfo.nombre}</strong>`;
      const subLista          = document.createElement('ul');
      console.log(`Especialidad: ${especialidadInfo.nombre}`);
      especialidadInfo.subespecialidades.forEach(subespecialidad => {
        const subItem       = document.createElement('li');
        subItem.textContent = subespecialidad.nombre;
        console.log(`  Subespecialidad: ${subespecialidad.nombre}, horas disponibles: ${subespecialidad.horas_disponibles}`);
        if (filtro) {
          if (subespecialidad.horas_disponibles === true) {
            subLista.appendChild(subItem);
          }
        } else {
          subLista.appendChild(subItem);
        }
      });
      itemPrincipal.appendChild(subLista);
      lista.appendChild(itemPrincipal);
    }
  });
  div_especialidades.innerHTML = '';
  div_especialidades.appendChild(lista);
  div_especialidades.style.display = 'block'; 
}

const btnVerEspecialidades = document.getElementById('btnVerEspecialidades');
const btnVerEspecialidadesDisp = document.getElementById('btnVerEspecialidadesDisp');

btnVerEspecialidades.addEventListener('click', function() {
  console.log(`Click boton espacialidades`);
  if (this.textContent === 'Ver todas') {
    this.textContent = 'Cerrar';
    btnVerEspecialidadesDisp.textContent = 'Solo con horas disponibles';
    cargarEspecialidades(false);
  } else {
    this.textContent = 'Ver todas';
    div_especialidades.style.display = 'none';
  }
});
btnVerEspecialidadesDisp.addEventListener('click', function() {
  console.log(`Click boton espacialidades con horas disponibles`);
  if (this.textContent === 'Solo con horas disponibles') {
    this.textContent = 'Cerrar';
    btnVerEspecialidades.textContent = 'Ver todas';
    cargarEspecialidades(true);
  } else {
    this.textContent = 'Solo con horas disponibles';
    div_especialidades.style.display = 'none';
  }
});