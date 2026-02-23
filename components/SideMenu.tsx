"use client";
import React, { useState } from "react";
import { FaWhatsapp, FaHome } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import Link from "next/link";

const SideMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  const toggleServices = () => setServicesOpen(!servicesOpen);

  // Función para manejar el clic en Agendar Hora
  const handleAgendarClick = () => {
    // Buscar el botón con clase agendar-hora-btn y hacer clic
    const agendarBtn = document.querySelector('.agendar-hora-btn') as HTMLElement;
    if (agendarBtn) {
      agendarBtn.click();
    }
    closeMenu(); // Cerrar el menú
  };

  // Función para desplazarse a Servicios disponibles
  const handleServiciosDisponiblesClick = () => {
    const serviciosSection = document.getElementById('infoServicios');
    if (serviciosSection) {
      serviciosSection.scrollIntoView({ behavior: 'smooth' });
    }
    closeMenu();
  };

  // Función para desplazarse al final de la página (Contacto)
  const handleContactoClick = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
    closeMenu();
  };

  const styles: { [key: string]: React.CSSProperties } = {
    fixedButton: {
      position: "fixed",
      top: "20px",
      left: "20px",
      zIndex: 1000,
      background: "#D9FFE2",
      border: "none",
      width: "50px",
      height: "50px",
      borderRadius: "50%",
      padding: "10px 12px",
      fontSize: "24px",
      cursor: "pointer",
      boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    overlay: {
      position: "fixed",
      inset: 0,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      zIndex: 1000,
    },
    menuPanel: {
      position: "fixed",
      top: 0,
      left: 0,
      height: "100%",
      width: "280px",
      backgroundColor: "#C5E6CC",
      boxShadow: "2px 0 12px rgba(0,0,0,0.2)",
      zIndex: 1001,
      padding: "20px 16px",
      overflowY: "auto",
      transition: "transform 0.3s ease",
      transform: isOpen ? "translateX(0)" : "translateX(-100%)",
    },
    title: {
      fontSize: "22px",
      fontWeight: "bold",
      color: "#2c3e50",
      marginBottom: "20px",
      borderBottom: "1px solid #ecf0f1",
      paddingBottom: "8px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    homeButton: {
      background: "none",
      border: "none",
      fontSize: "24px",
      cursor: "pointer",
      color: "#2c3e50",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "4px",
      borderRadius: "50%",
      transition: "all 0.2s ease",
    },
    contactContainer: {
      display: "flex",
      gap: "10px",
      marginBottom: "8px",
    },
    whatsappLabel: {
      width: "100%",
      height: "60px",
      backgroundColor: "#00C21D",
      border: "solid #FFFEFE 1px",
      color: "#FFF",
      padding: "6px 14px",
      borderRadius: "10px",
      fontSize: "13px",
      fontWeight: 600,
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
      cursor: "pointer",
      boxShadow: "0 2px 4px rgba(37,211,102,0.3)",
    },
    phoneLabel: {
      width: "100%",
      height: "60px",
      backgroundColor: "#00C21D",
      border: "solid #FFFEFE 1px",
      color: "#FFFEFE",
      padding: "6px 14px",
      borderRadius: "10px",
      fontSize: "13px",
      fontWeight: 600,
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
      cursor: "pointer",
      boxShadow: "0 2px 4px rgba(255,152,0,0.3)",
    },
    servicesSection: {
      marginBottom: "16px",
    },
    servicesButton: {
      background: "none",
      border: "none",
      fontSize: "15px",
      fontWeight: 600,
      color: "#34495e",
      padding: "6px 0",
      width: "100%",
      textAlign: "left",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      cursor: "pointer",
      borderBottom: servicesOpen ? "none" : "1px solid #ecf0f1",
    },
    arrowStyle: {
      fontSize: "12px",
      marginLeft: "6px",
    },
    subItemContainer: {
      overflow: "hidden",
      transition: "all 0.3s ease",
      maxHeight: servicesOpen ? "200px" : "0px",
      opacity: servicesOpen ? 1 : 0,
    },
    subItem: {
      padding: "8px 0 8px 16px",
      color: "#7f8c8d",
      fontSize: "14px",
      cursor: "pointer",
      transition: "color 0.2s ease",
    },
    card: {
      backgroundColor: "#f8f9fa",
      borderRadius: "12px",
      padding: "14px",
      boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
      marginTop: "12px",
    },
    cardTitle: {
      fontSize: "15px",
      fontWeight: 600,
      color: "#2c3e50",
      marginBottom: "8px",
    },
    cardText: {
      fontSize: "13px",
      color: "#34495e",
      marginBottom: "4px",
      display: "flex",
      alignItems: "center",
      gap: "6px",
    },
    buttonGroup: {
      display: "flex",
      gap: "10px",
      marginTop: "14px",
    },
    callButton: {
      backgroundColor: "#2ecc71",
      color: "#fff",
      border: "none",
      borderRadius: "30px",
      padding: "8px 16px",
      fontSize: "13px",
      fontWeight: 600,
      cursor: "pointer",
      flex: 1,
      boxShadow: "0 2px 4px rgba(46,204,113,0.3)",
    },
    mapButton: {
      backgroundColor: "#3498db",
      color: "#fff",
      border: "none",
      borderRadius: "30px",
      padding: "8px 16px",
      fontSize: "13px",
      fontWeight: 600,
      cursor: "pointer",
      flex: 1,
      boxShadow: "0 2px 4px rgba(52,152,219,0.3)",
    },
    iconWsp: {
      fontSize: "40px",
    },
    iconLlamar: {
      fontSize: "40px",
    },
    newsCard: {
      backgroundColor: "#f8f9fa",
      borderRadius: "12px",
      padding: "14px",
      boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
      marginTop: "12px",
      cursor: "pointer",
      transition: "transform 0.2s, box-shadow 0.2s",
      position: "relative",
      overflow: "hidden",
    },
    pawOverlay: {
      position: "absolute",
      bottom: -5,
      right: -5,
      fontSize: "60px",
      opacity: 0.1,
      color: "#FFB6C1",
      transform: "rotate(-15deg)",
      pointerEvents: "none",
    },
    secondPaw: {
      position: "absolute",
      top: 0,
      left: 0,
      fontSize: "40px",
      opacity: 0.1,
      color: "#ADD8E6",
      transform: "rotate(25deg)",
      pointerEvents: "none",
    },
    dogIcon: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      fontSize: "80px",
      opacity: 0.05,
      color: "#2c3e50",
      pointerEvents: "none",
    },
  };

  // Manejadores para hover del botón home
  const handleHomeMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.transform = "scale(1.1)";
    e.currentTarget.style.color = "#059669";
  };

  const handleHomeMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.transform = "scale(1)";
    e.currentTarget.style.color = "#2c3e50";
  };

  // Manejadores para hover de los subítems
  const handleSubItemMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.color = "#2ecc71";
    e.currentTarget.style.paddingLeft = "20px";
  };

  const handleSubItemMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.color = "#7f8c8d";
    e.currentTarget.style.paddingLeft = "16px";
  };

  return (
    <>
      <button style={styles.fixedButton} onClick={toggleMenu} aria-label="Abrir menú">
        ☰
      </button>

      {isOpen && <div style={styles.overlay} onClick={closeMenu} />}

      <div style={styles.menuPanel}>
        <div style={styles.title}>
          <span>Menú Veterinaria</span>
          <Link 
            href="/" 
            style={styles.homeButton}
            onMouseEnter={handleHomeMouseEnter}
            onMouseLeave={handleHomeMouseLeave}
            onClick={closeMenu}
            aria-label="Ir al inicio"
          >
            <FaHome />
          </Link>
        </div>

        <div style={styles.contactContainer}>
          <span style={styles.whatsappLabel}>
            <span style={styles.iconWsp}><FaWhatsapp /></span> WhatsApp
          </span>
        </div>
        <div style={styles.contactContainer}>
          <span style={styles.phoneLabel}>
            <span style={styles.iconLlamar}><BsTelephone /></span> Llamar
          </span>
        </div>

        <div style={styles.servicesSection}>
          <button style={styles.servicesButton} onClick={toggleServices}>
            <span>Servicios</span>
            <span style={styles.arrowStyle}>
              {servicesOpen ? "▲" : "▼"}
            </span>
          </button>
          
          {/* Submenús con funcionalidades específicas */}
          <div style={styles.subItemContainer}>
            <div 
              style={styles.subItem} 
              onClick={handleAgendarClick}
              onMouseEnter={handleSubItemMouseEnter}
              onMouseLeave={handleSubItemMouseLeave}
            >
              Agendar Hora
            </div>
          </div>
          
          <div style={styles.subItemContainer}>
            <div 
              style={styles.subItem} 
              onClick={handleServiciosDisponiblesClick}
              onMouseEnter={handleSubItemMouseEnter}
              onMouseLeave={handleSubItemMouseLeave}
            >
              Servicios disponibles
            </div>
          </div>
          
          <div style={styles.subItemContainer}>
            <div 
              style={styles.subItem} 
              onClick={handleContactoClick}
              onMouseEnter={handleSubItemMouseEnter}
              onMouseLeave={handleSubItemMouseLeave}
            >
              Contacto
            </div>
          </div>
        </div>

        {/* Card Noticias */}
        <Link href="/noticiasvetchile" onClick={closeMenu}>
          <div
            style={styles.newsCard}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 8px 12px rgba(0,0,0,0.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "none";
              e.currentTarget.style.boxShadow = "0 4px 6px rgba(0,0,0,0.05)";
            }}
          >
            <div style={styles.pawOverlay}>🐾</div>
            <div style={styles.secondPaw}>🐾</div>
            <div style={styles.dogIcon}>🐕</div>
            <div style={styles.cardTitle}>📰 Noticias</div>
            <div style={styles.cardText}>Enterate de las últimas novedades</div>
          </div>
        </Link>

        {/* Card Editar Noticias */}
        <Link href="/editnoticias" onClick={closeMenu}>
          <div
            style={styles.newsCard}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 8px 12px rgba(0,0,0,0.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "none";
              e.currentTarget.style.boxShadow = "0 4px 6px rgba(0,0,0,0.05)";
            }}
          >
            <div style={styles.pawOverlay}>✏️</div>
            <div style={styles.secondPaw}>🐾</div>
            <div style={styles.dogIcon}>🐈</div>
            <div style={styles.cardTitle}>✏️ Editar noticias</div>
            <div style={styles.cardText}>Administrá el contenido</div>
          </div>
        </Link>

        <div style={styles.card}>
          <div style={styles.cardTitle}>📍 Ubicación y horario</div>
          <div style={styles.cardText}>🏥 Av. Principal 123, Ciudad</div>
          <div style={styles.cardText}>🕒 Lun-Vie: 9:00 - 19:00</div>
          <div style={styles.cardText}>🕒 Sáb: 10:00 - 14:00</div>
          <div style={styles.buttonGroup}>
            <button style={styles.callButton}>Llamar</button>
            <button style={styles.mapButton}>Ver mapa</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideMenu;