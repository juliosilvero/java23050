document.addEventListener('DOMContentLoaded', function() {
  const nombreInput = document.getElementById('nombre');
  const apellidoInput = document.getElementById('apellido');
  const correoInput = document.getElementById('correo');
  const cantidadInput = document.getElementById('cantidad');
  const categoriaInput = document.getElementById('categoria');
  const totalPagarContainer = document.getElementById('total-pagar');
  const borrarBtn = document.getElementById('borrar-btn');
  const resumenBtn = document.getElementById('resumen-btn');

  nombreInput.addEventListener('input', function() {
    if (nombreInput.value !== '') {
      nombreInput.placeholder = 'Nombre';
    } else {
      nombreInput.placeholder = 'Nombre';
    }
  });

  apellidoInput.addEventListener('input', function() {
    if (apellidoInput.value !== '') {
      apellidoInput.placeholder = 'Apellido';
    } else {
      apellidoInput.placeholder = 'Apellido';
    }
  });

  correoInput.addEventListener('blur', function() {
    var correo = correoInput.value.trim();
    var correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (correo !== '') {
      if (correoRegex.test(correo)) {
        correoInput.placeholder = 'Correo';
      } else {
        correoInput.value = '';
        correoInput.placeholder = 'Correo inválido';
        correoInput.focus();
      }
    } else {
      correoInput.placeholder = 'Correo';
    }
  });

  cantidadInput.addEventListener('input', function() {
    if (!/^\d+$/.test(cantidadInput.value)) {
      cantidadInput.value = '';
    }
  });

  resumenBtn.addEventListener('click', function() {
    const correo = correoInput.value.trim();
    const cantidad = parseInt(cantidadInput.value);
    const categoria = categoriaInput.value;

    if (!correo || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
      alert('Debe ingresar un correo válido antes de continuar.');
      return;
    }

    if (!cantidad || cantidad <= 0) {
      alert('Debe indicar un valor en cantidad antes de continuar.');
      return;
    }

    if (
      categoria !== 'estudiante' &&
      categoria !== 'trainee' &&
      categoria !== 'junior' &&
      categoria !== 'sin categoria'
    ) {
      alert('Debe seleccionar una categoría  para continuar.');
      return;
    }

    let descuento = 0;

    if (categoria === 'estudiante') {
      descuento = 0.8;
    } else if (categoria === 'trainee') {
      descuento = 0.5;
    } else if (categoria === 'junior') {
      descuento = 0.15;
    }

    const totalPagar = cantidad * 200 * (1 - descuento);
    totalPagarContainer.textContent = 'Total a pagar: $ ' + totalPagar.toFixed(2);

    setTimeout(function() {
      const confirmar = confirm(
        `Confirmar la compra:
        Cantidad de entradas: ${cantidad}
        Categoría elegida: ${categoria}
        Monto total: $ ${totalPagar.toFixed(2)}`
      );

      if (confirmar) {
        alert('Compra confirmada, se enviará la/s entrada/s a su correo.');
        borrarFormulario();
      } else {
        alert('Usted no confirmó la compra, vuelva al formulario a realizar los cambios necesarios.');
      }
    }, 100);
  });

  function borrarFormulario() {
    nombreInput.value = '';
    apellidoInput.value = '';
    correoInput.value = '';
    cantidadInput.value = '';
    categoriaInput.value = '';
    totalPagarContainer.textContent = 'Total a pagar: $ ';
  }

  borrarBtn.addEventListener('click', function() {
    borrarFormulario();
  });
});










  
  