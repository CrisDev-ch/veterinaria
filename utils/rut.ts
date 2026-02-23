// utils/rut.ts
export function validarRut(rutCompleto: string): boolean {
  // Limpiar puntos y guiones, pero mantener el guion para separar cuerpo y dv
  const rutLimpio = rutCompleto.replace(/\./g, '').toUpperCase();
  if (!/^\d{1,8}-[0-9K]$/.test(rutLimpio)) return false;

  const [cuerpo, dv] = rutLimpio.split('-');
  const dvCalculado = calcularDigitoVerificador(parseInt(cuerpo, 10));
  return dv === dvCalculado;
}

function calcularDigitoVerificador(rut: number): string {
  let suma = 0;
  let multiplicador = 2;
  let rutAux = rut;

  while (rutAux > 0) {
    suma += (rutAux % 10) * multiplicador;
    rutAux = Math.floor(rutAux / 10);
    multiplicador = multiplicador === 7 ? 2 : multiplicador + 1;
  }

  const resto = suma % 11;
  const dv = 11 - resto;
  if (dv === 11) return '0';
  if (dv === 10) return 'K';
  return dv.toString();
}

// Función para formatear automáticamente mientras el usuario escribe
export function formatearRut(rut: string): string {
  // Eliminar todo lo que no sea número o K (solo para el dígito)
  let valor = rut.replace(/[^0-9Kk]/g, '').toUpperCase();
  if (valor.length === 0) return '';

  // Separar cuerpo y dígito verificador
  if (valor.length <= 1) return valor;

  let cuerpo = valor.slice(0, -1);
  const dv = valor.slice(-1);

  // Formatear cuerpo con puntos (opcional, pero se ve mejor)
  cuerpo = cuerpo.replace(/\B(?=(\d{3})+(?!\d))/g, '.');

  return `${cuerpo}-${dv}`;
}