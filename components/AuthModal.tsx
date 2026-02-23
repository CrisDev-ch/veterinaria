// components/AuthModal.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { validarRut, formatearRut } from '@/utils/rut';

interface Usuario {
  rut: string;
  nombre: string;
  fechaNacimiento: string;
}

interface Mascota {
  id: string;
  nombre: string;
  especie: string;
  edad: number;
}

interface Cita {
  id: string;
  mascotaId: string;
  mascotaNombre: string;
  fecha: string;
  hora: string;
}

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const [modo, setModo] = useState<'ingreso' | 'registro'>('ingreso');
  const [usuarioActual, setUsuarioActual] = useState<Usuario | null>(null);
  const [mensajeError, setMensajeError] = useState('');
  const [mensajeExito, setMensajeExito] = useState('');

  // Formularios
  const [rutIngreso, setRutIngreso] = useState('');
  const [anioNacimientoIngreso, setAnioNacimientoIngreso] = useState('');
  const [nombreRegistro, setNombreRegistro] = useState('');
  const [rutRegistro, setRutRegistro] = useState('');
  const [fechaNacimientoRegistro, setFechaNacimientoRegistro] = useState('');

  // Touched
  const [rutIngresoTouched, setRutIngresoTouched] = useState(false);
  const [rutRegistroTouched, setRutRegistroTouched] = useState(false);

  // Datos simulados
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [mascotas, setMascotas] = useState<Mascota[]>([]);
  const [citas, setCitas] = useState<Cita[]>([]);

  // Dashboard
  const [mostrarAgregarMascota, setMostrarAgregarMascota] = useState(false);
  const [nuevaMascota, setNuevaMascota] = useState({ nombre: '', especie: '', edad: '' });
  const [mascotaEditando, setMascotaEditando] = useState<Mascota | null>(null);
  const [paso, setPaso] = useState<'mascotas' | 'buscarHora' | 'citas'>('mascotas');
  const [mascotaSeleccionada, setMascotaSeleccionada] = useState('');
  const [fechaSeleccionada, setFechaSeleccionada] = useState('');
  const [horaSeleccionada, setHoraSeleccionada] = useState('');

  // Horas disponibles
  const horasDisponibles = [];
  for (let h = 9; h <= 17; h++) {
    horasDisponibles.push(`${h.toString().padStart(2, '0')}:00`);
    horasDisponibles.push(`${h.toString().padStart(2, '0')}:30`);
  }

  useEffect(() => {
    if (mensajeExito) {
      const timer = setTimeout(() => setMensajeExito(''), 3000);
      return () => clearTimeout(timer);
    }
  }, [mensajeExito]);

  useEffect(() => {
    setMensajeExito('');
  }, [paso]);

  const handleIngreso = (e: React.FormEvent) => {
    e.preventDefault();
    setMensajeError('');

    if (!validarRut(rutIngreso)) {
      setMensajeError('RUT inválido');
      return;
    }
    const usuario = usuarios.find(u => u.rut === rutIngreso);
    if (!usuario) {
      setMensajeError('Usuario no encontrado');
      return;
    }
    const anioNacimiento = usuario.fechaNacimiento.split('-')[0];
    if (anioNacimiento !== anioNacimientoIngreso) {
      setMensajeError('Año de nacimiento incorrecto');
      return;
    }
    setUsuarioActual(usuario);
  };

  const handleRegistro = (e: React.FormEvent) => {
    e.preventDefault();
    setMensajeError('');

    if (!validarRut(rutRegistro)) {
      setMensajeError('RUT inválido');
      return;
    }
    if (!nombreRegistro || !fechaNacimientoRegistro) {
      setMensajeError('Todos los campos son obligatorios');
      return;
    }
    if (usuarios.find(u => u.rut === rutRegistro)) {
      setMensajeError('El RUT ya está registrado');
      return;
    }
    const nuevoUsuario: Usuario = {
      rut: rutRegistro,
      nombre: nombreRegistro,
      fechaNacimiento: fechaNacimientoRegistro,
    };
    setUsuarios([...usuarios, nuevoUsuario]);
    setUsuarioActual(nuevoUsuario);
  };

  const handleAgregarMascota = () => {
    if (!nuevaMascota.nombre || !nuevaMascota.especie || !nuevaMascota.edad) {
      setMensajeError('Completa todos los campos de la mascota');
      return;
    }
    const mascota: Mascota = {
      id: Date.now().toString(),
      nombre: nuevaMascota.nombre,
      especie: nuevaMascota.especie,
      edad: parseInt(nuevaMascota.edad, 10),
    };
    setMascotas([...mascotas, mascota]);
    setNuevaMascota({ nombre: '', especie: '', edad: '' });
    setMostrarAgregarMascota(false);
    setMensajeExito('Mascota agregada correctamente');
  };

  const handleActualizarMascota = () => {
    if (!mascotaEditando) return;
    const actualizadas = mascotas.map(m =>
      m.id === mascotaEditando.id
        ? {
            ...m,
            nombre: nuevaMascota.nombre,
            especie: nuevaMascota.especie,
            edad: parseInt(nuevaMascota.edad, 10),
          }
        : m
    );
    setMascotas(actualizadas);
    setMascotaEditando(null);
    setNuevaMascota({ nombre: '', especie: '', edad: '' });
    setMostrarAgregarMascota(false);
    setMensajeExito('Mascota actualizada correctamente');
  };

  const handleEliminarMascota = (id: string) => {
    setMascotas(mascotas.filter(m => m.id !== id));
    setMensajeExito('Mascota eliminada');
  };

  const handleAgendarCita = () => {
    if (!mascotaSeleccionada || !fechaSeleccionada || !horaSeleccionada) {
      setMensajeError('Selecciona mascota, fecha y hora');
      return;
    }
    const mascota = mascotas.find(m => m.id === mascotaSeleccionada);
    if (!mascota) return;
    const nuevaCita: Cita = {
      id: Date.now().toString(),
      mascotaId: mascota.id,
      mascotaNombre: mascota.nombre,
      fecha: fechaSeleccionada,
      hora: horaSeleccionada,
    };
    setCitas([...citas, nuevaCita]);
    setMascotaSeleccionada('');
    setFechaSeleccionada('');
    setHoraSeleccionada('');
    setMensajeExito('¡Cita agendada con éxito!');
    setPaso('citas');
  };

  const handleEliminarCita = (id: string) => {
    setCitas(citas.filter(c => c.id !== id));
    setMensajeExito('Cita eliminada');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white z-10 flex justify-between items-center p-4 sm:p-6 border-b border-gray-200">
          <h2 className="text-xl sm:text-2xl font-bold text-emerald-700 flex items-center gap-2">
            <span className="text-2xl sm:text-3xl">🐾</span> Agendar Hora
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors p-2"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Toast de éxito */}
        {mensajeExito && (
          <div className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-emerald-500 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full shadow-lg flex items-center gap-2 z-50 animate-fade-in-down text-sm sm:text-base">
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            {mensajeExito}
          </div>
        )}

        {/* Contenido principal */}
        <div className="p-4 sm:p-6">
          {!usuarioActual ? (
            // Pantalla de ingreso/registro
            <div className="max-w-md mx-auto">
              {/* Pestañas */}
              <div className="flex justify-center mb-6 sm:mb-8">
                <button
                  className={`flex-1 sm:flex-none px-4 sm:px-6 py-2 sm:py-3 font-medium rounded-l-xl transition-all ${
                    modo === 'ingreso'
                      ? 'bg-emerald-500 text-white shadow-md'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                  onClick={() => setModo('ingreso')}
                >
                  Ingreso
                </button>
                <button
                  className={`flex-1 sm:flex-none px-4 sm:px-6 py-2 sm:py-3 font-medium rounded-r-xl transition-all ${
                    modo === 'registro'
                      ? 'bg-emerald-500 text-white shadow-md'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                  onClick={() => setModo('registro')}
                >
                  Registro
                </button>
              </div>

              {/* Formularios con floating labels simplificados */}
              {modo === 'ingreso' ? (
                <form onSubmit={handleIngreso} className="space-y-5">
                  {/* RUT Ingreso */}
                  <div className="relative">
                    <input
                      type="text"
                      id="rutIngreso"
                      value={rutIngreso}
                      onChange={(e) => setRutIngreso(formatearRut(e.target.value))}
                      onBlur={() => setRutIngresoTouched(true)}
                      className={`peer w-full px-4 py-3 border-2 rounded-lg outline-none transition-colors bg-transparent ${
                        rutIngresoTouched && !validarRut(rutIngreso) && rutIngreso
                          ? 'border-red-500 focus:border-red-500'
                          : 'border-gray-300 focus:border-emerald-500'
                      }`}
                      placeholder=" "
                    />
                    <label
                      htmlFor="rutIngreso"
                      className={`absolute left-4 transition-all pointer-events-none ${
                        rutIngreso
                          ? '-top-2 text-xs bg-white px-1 text-gray-700'
                          : 'top-3 text-gray-400 peer-focus:-top-2 peer-focus:text-xs peer-focus:bg-white peer-focus:px-1 peer-focus:text-emerald-600'
                      }`}
                    >
                      RUT
                    </label>
                    {rutIngresoTouched && !validarRut(rutIngreso) && rutIngreso && (
                      <p className="text-red-500 text-xs sm:text-sm mt-1">RUT inválido</p>
                    )}
                  </div>

                  {/* Año de nacimiento */}
                  <div className="relative">
                    <input
                      type="text"
                      id="anioNacimiento"
                      value={anioNacimientoIngreso}
                      onChange={(e) => setAnioNacimientoIngreso(e.target.value.replace(/\D/g, '').slice(0, 4))}
                      className="peer w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-emerald-500 outline-none transition-colors bg-transparent"
                      placeholder=" "
                    />
                    <label
                      htmlFor="anioNacimiento"
                      className={`absolute left-4 transition-all pointer-events-none ${
                        anioNacimientoIngreso
                          ? '-top-2 text-xs bg-white px-1 text-gray-700'
                          : 'top-3 text-gray-400 peer-focus:-top-2 peer-focus:text-xs peer-focus:bg-white peer-focus:px-1 peer-focus:text-emerald-600'
                      }`}
                    >
                      Año de nacimiento (clave)
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors shadow-md"
                  >
                    Ingresar
                  </button>
                </form>
              ) : (
                <form onSubmit={handleRegistro} className="space-y-5">
                  {/* Nombre */}
                  <div className="relative">
                    <input
                      type="text"
                      id="nombreRegistro"
                      value={nombreRegistro}
                      onChange={(e) => setNombreRegistro(e.target.value)}
                      className="peer w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-emerald-500 outline-none transition-colors bg-transparent"
                      placeholder=" "
                    />
                    <label
                      htmlFor="nombreRegistro"
                      className={`absolute left-4 transition-all pointer-events-none ${
                        nombreRegistro
                          ? '-top-2 text-xs bg-white px-1 text-gray-700'
                          : 'top-3 text-gray-400 peer-focus:-top-2 peer-focus:text-xs peer-focus:bg-white peer-focus:px-1 peer-focus:text-emerald-600'
                      }`}
                    >
                      Nombre completo
                    </label>
                  </div>

                  {/* RUT Registro */}
                  <div className="relative">
                    <input
                      type="text"
                      id="rutRegistro"
                      value={rutRegistro}
                      onChange={(e) => setRutRegistro(formatearRut(e.target.value))}
                      onBlur={() => setRutRegistroTouched(true)}
                      className={`peer w-full px-4 py-3 border-2 rounded-lg outline-none transition-colors bg-transparent ${
                        rutRegistroTouched && !validarRut(rutRegistro) && rutRegistro
                          ? 'border-red-500 focus:border-red-500'
                          : 'border-gray-300 focus:border-emerald-500'
                      }`}
                      placeholder=" "
                    />
                    <label
                      htmlFor="rutRegistro"
                      className={`absolute left-4 transition-all pointer-events-none ${
                        rutRegistro
                          ? '-top-2 text-xs bg-white px-1 text-gray-700'
                          : 'top-3 text-gray-400 peer-focus:-top-2 peer-focus:text-xs peer-focus:bg-white peer-focus:px-1 peer-focus:text-emerald-600'
                      }`}
                    >
                      RUT
                    </label>
                    {rutRegistroTouched && !validarRut(rutRegistro) && rutRegistro && (
                      <p className="text-red-500 text-xs sm:text-sm mt-1">RUT inválido</p>
                    )}
                  </div>

                  {/* Fecha de nacimiento */}
                  <div className="relative">
                    <input
                      type="date"
                      id="fechaNacimiento"
                      value={fechaNacimientoRegistro}
                      onChange={(e) => setFechaNacimientoRegistro(e.target.value)}
                      className="peer w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-emerald-500 outline-none transition-colors bg-transparent"
                      placeholder=" "
                    />
                    <label
                      htmlFor="fechaNacimiento"
                      className={`absolute left-4 transition-all pointer-events-none ${
                        fechaNacimientoRegistro
                          ? '-top-2 text-xs bg-white px-1 text-gray-700'
                          : 'top-3 text-gray-400 peer-focus:-top-2 peer-focus:text-xs peer-focus:bg-white peer-focus:px-1 peer-focus:text-emerald-600'
                      }`}
                    >
                      Fecha de nacimiento
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors shadow-md"
                  >
                    Registrarse
                  </button>
                </form>
              )}

              {/* Mensaje de error */}
              {mensajeError && (
                <div className="mt-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-center gap-2 text-sm">
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {mensajeError}
                </div>
              )}
            </div>
          ) : (
            // Dashboard
            <div>
              {/* Header usuario */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 bg-gradient-to-r from-emerald-50 to-blue-50 p-4 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-emerald-200 rounded-full flex items-center justify-center text-emerald-700 text-lg sm:text-xl font-bold">
                    {usuarioActual.nombre.charAt(0)}
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-gray-500">Bienvenido,</p>
                    <p className="text-base sm:text-xl font-semibold text-gray-800">{usuarioActual.nombre}</p>
                  </div>
                </div>
                <button
                  onClick={() => setUsuarioActual(null)}
                  className="text-sm text-red-600 hover:text-red-800 flex items-center gap-1 self-end sm:self-auto"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                  Cerrar sesión
                </button>
              </div>

              {/* Tabs responsivas */}
              <div className="flex flex-wrap gap-1 sm:gap-2 mb-6 border-b border-gray-200">
                {[
                  { id: 'mascotas', label: 'Mis mascotas', icon: '🐶' },
                  { id: 'buscarHora', label: 'Buscar hora', icon: '📅' },
                  { id: 'citas', label: 'Citas', icon: '📋' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setPaso(tab.id as any)}
                    className={`flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 text-sm sm:text-base font-medium transition-all border-b-2 ${
                      paso === tab.id
                        ? 'border-emerald-500 text-emerald-700'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    <span>{tab.icon}</span>
                    <span className="hidden xs:inline">{tab.label}</span>
                  </button>
                ))}
              </div>

              {/* Contenido */}
              <div className="space-y-6">
                {/* Mascotas */}
                {paso === 'mascotas' && (
                  <div>
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-4">
                      <h3 className="text-lg font-medium text-gray-800">Tus mascotas</h3>
                      <button
                        onClick={() => {
                          setMostrarAgregarMascota(true);
                          setMascotaEditando(null);
                          setNuevaMascota({ nombre: '', especie: '', edad: '' });
                        }}
                        className="bg-emerald-100 hover:bg-emerald-200 text-emerald-700 px-4 py-2 rounded-lg flex items-center gap-2 transition-colors text-sm sm:text-base w-full sm:w-auto justify-center"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                        Agregar mascota
                      </button>
                    </div>

                    {/* Formulario agregar/editar */}
                    {mostrarAgregarMascota && (
                      <div className="bg-gray-50 p-4 sm:p-6 rounded-xl mb-6 border border-gray-200">
                        <h4 className="font-medium text-gray-700 mb-4">
                          {mascotaEditando ? '✏️ Editar mascota' : '➕ Nueva mascota'}
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                          <div className="relative">
                            <input
                              type="text"
                              value={nuevaMascota.nombre}
                              onChange={(e) => setNuevaMascota({ ...nuevaMascota, nombre: e.target.value })}
                              className="peer w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-emerald-500 outline-none bg-transparent"
                              placeholder=" "
                            />
                            <label className="absolute left-4 -top-2 text-xs bg-gray-50 px-1 text-gray-700">Nombre</label>
                          </div>
                          <div className="relative">
                            <input
                              type="text"
                              value={nuevaMascota.especie}
                              onChange={(e) => setNuevaMascota({ ...nuevaMascota, especie: e.target.value })}
                              className="peer w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-emerald-500 outline-none bg-transparent"
                              placeholder=" "
                            />
                            <label className="absolute left-4 -top-2 text-xs bg-gray-50 px-1 text-gray-700">Especie</label>
                          </div>
                          <div className="relative">
                            <input
                              type="number"
                              value={nuevaMascota.edad}
                              onChange={(e) => setNuevaMascota({ ...nuevaMascota, edad: e.target.value })}
                              className="peer w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-emerald-500 outline-none bg-transparent"
                              placeholder=" "
                            />
                            <label className="absolute left-4 -top-2 text-xs bg-gray-50 px-1 text-gray-700">Edad (años)</label>
                          </div>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3 mt-4">
                          <button
                            onClick={mascotaEditando ? handleActualizarMascota : handleAgregarMascota}
                            className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg transition-colors"
                          >
                            {mascotaEditando ? 'Actualizar' : 'Agregar'}
                          </button>
                          <button
                            onClick={() => {
                              setMostrarAgregarMascota(false);
                              setMascotaEditando(null);
                              setNuevaMascota({ nombre: '', especie: '', edad: '' });
                            }}
                            className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-6 py-2 rounded-lg transition-colors"
                          >
                            Cancelar
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Lista de mascotas */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {mascotas.map((m) => (
                        <div key={m.id} className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
                          <div className="flex items-start gap-3">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-emerald-100 rounded-full flex items-center justify-center text-xl sm:text-2xl">
                              {m.especie.toLowerCase().includes('perro') ? '🐕' : m.especie.toLowerCase().includes('gato') ? '🐈' : '🐾'}
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold text-gray-800 text-base sm:text-lg">{m.nombre}</h4>
                              <p className="text-xs sm:text-sm text-gray-500">{m.especie} • {m.edad} años</p>
                            </div>
                          </div>
                          <div className="flex justify-end gap-3 mt-3">
                            <button
                              onClick={() => {
                                setMascotaEditando(m);
                                setNuevaMascota({ nombre: m.nombre, especie: m.especie, edad: m.edad.toString() });
                                setMostrarAgregarMascota(true);
                              }}
                              className="text-blue-600 hover:text-blue-800 text-sm flex items-center gap-1"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                              </svg>
                              Editar
                            </button>
                            <button
                              onClick={() => handleEliminarMascota(m.id)}
                              className="text-red-600 hover:text-red-800 text-sm flex items-center gap-1"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                              </svg>
                              Eliminar
                            </button>
                          </div>
                        </div>
                      ))}
                      {mascotas.length === 0 && (
                        <div className="col-span-2 text-center py-8 text-gray-500 bg-gray-50 rounded-xl text-sm sm:text-base">
                          No tienes mascotas registradas. ¡Agrega una!
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Buscar hora */}
                {paso === 'buscarHora' && (
                  <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6">
                    <h3 className="text-lg font-medium text-gray-800 mb-4">📅 Agenda una cita</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Mascota</label>
                        <select
                          value={mascotaSeleccionada}
                          onChange={(e) => setMascotaSeleccionada(e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none bg-white"
                        >
                          <option value="">Selecciona una mascota</option>
                          {mascotas.map((m) => (
                            <option key={m.id} value={m.id}>{m.nombre} ({m.especie})</option>
                          ))}
                        </select>
                      </div>

                      {mascotaSeleccionada && (
                        <>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Fecha</label>
                            <input
                              type="date"
                              value={fechaSeleccionada}
                              onChange={(e) => setFechaSeleccionada(e.target.value)}
                              min={new Date().toISOString().split('T')[0]}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
                            />
                          </div>

                          {fechaSeleccionada && (
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">Hora</label>
                              <select
                                value={horaSeleccionada}
                                onChange={(e) => setHoraSeleccionada(e.target.value)}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none bg-white"
                              >
                                <option value="">Selecciona una hora</option>
                                {horasDisponibles.map((h) => (
                                  <option key={h} value={h}>{h}</option>
                                ))}
                              </select>
                            </div>
                          )}
                        </>
                      )}

                      <button
                        onClick={handleAgendarCita}
                        disabled={!mascotaSeleccionada || !fechaSeleccionada || !horaSeleccionada}
                        className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-semibold py-3 px-4 rounded-lg transition-colors"
                      >
                        Agendar cita
                      </button>
                    </div>
                  </div>
                )}

                {/* Citas */}
                {paso === 'citas' && (
                  <div>
                    <h3 className="text-lg font-medium text-gray-800 mb-4">📋 Tus citas</h3>
                    {citas.length === 0 ? (
                      <div className="text-center py-8 text-gray-500 bg-gray-50 rounded-xl text-sm sm:text-base">
                        No tienes citas agendadas.
                      </div>
                    ) : (
                      <div className="space-y-3">
                        {citas.map((cita) => (
                          <div key={cita.id} className="bg-white border border-gray-200 rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700">
                                🐾
                              </div>
                              <div>
                                <p className="font-semibold text-gray-800">{cita.mascotaNombre}</p>
                                <p className="text-xs sm:text-sm text-gray-500">
                                  {new Date(cita.fecha).toLocaleDateString('es-CL')} a las {cita.hora}
                                </p>
                              </div>
                            </div>
                            <button
                              onClick={() => handleEliminarCita(cita.id)}
                              className="text-red-600 hover:text-red-800 text-sm flex items-center gap-1 self-end sm:self-auto"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                              </svg>
                              Eliminar
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Mensaje de error en dashboard */}
              {mensajeError && (
                <div className="mt-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-center gap-2 text-sm">
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {mensajeError}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}