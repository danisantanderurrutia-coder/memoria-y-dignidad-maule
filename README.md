# Memoria y Dignidad Maule - Museo Digital

Plataforma digital y museo virtual interactivo orientado al rescate, divulgación y reflexión crítica sobre la memoria histórica, los derechos humanos y las expresiones culturales y comunitarias de la **Región del Maule, Chile**.

🌐 **Sitio Web Oficial:** [https://danisantanderurrutia-coder.github.io/memoria-y-dignidad-maule/](https://danisantanderurrutia-coder.github.io/memoria-y-dignidad-maule/)

---

## 🏛️ Módulos de la Plataforma

1. **🗺️ Mapa Interactivo de Sitios de Memoria:**
   - Georreferenciación de más de 23 sitios en las 4 provincias del Maule (Talca, Curicó, Linares y Cauquenes).
   - Filtros en tiempo real por época histórica (*Pre-dictadura y Reforma Agraria*, *Dictadura Cívico-Militar*, *Transición y Post-dictadura*, *Revuelta Popular 2019*) y tipología del sitio.
   - Fichas históricas, testimoniales, expedientes judiciales y enlaces a informes oficiales (Rettig, Valech, MemoriaViva, INDH).

2. **🏛️ Museo Digital:**
   - Fichas y escenarios multimedia con visor interactivo en modo carrusel.
   - Menú flotante por categorías: *Lugares*, *Momentos*, *Acciones*, *Documentos* y *Prensa*.
   - Síntesis de voz (Text-to-Speech) para escuchar relatos orales y zoom en alta resolución.

3. **✨ Los Sueños que Construían (Vidas, Oficios y Alegría Popular):**
   - Rescate intergeneracional de oficios populares, asentamientos campesinos de la Reforma Agraria, peñas parroquiales solidarias y navidades populares.
   - Estructura testimonial enfocada en tres ejes: *¿Quiénes eran?*, *¿Qué soñaban?* y *¿Cómo celebraban?*.
   - Fichas de *«Sabor y sonido del encuentro»* con comidas típicas y paisajes sonoros.

4. **🎨 Arte, Memoria y Derechos Universales:**
   - Galería de murales de brigadas barriales, poesía campesina en décima espinela, pliegos de lira popular y música/hip-hop maulino.
   - Declamación oral interactiva y botón directo para visualizar las obras georreferenciadas en el Mapa.

5. **📖 Talleres y Metodologías Comunitarias (Caja de Herramientas):**
   - Fichas pedagógicas descargables e imprimibles para escuelas, juntas de vecinos y agrupaciones de adultos mayores (*Cartografía Social Familiar*, *Arpilleras de la Memoria*, *Micrófono Abierto*).

6. **📚 Biblioteca Digital y Archivo Documental:**
   - Repositorio con buscador y filtros por formato (PDF, Audio, Fotografía, Video).
   - Informes Rettig, Valech, expedientes de Colonia Dignidad y archivos desclasificados.

7. **📰 Noticias & Crónicas Territoriales:**
   - Doble columna paralela con crónicas históricas y noticias de derechos humanos en el Maule.
   - Sistema ciudadano de comentarios comunitarios con moderación.

8. **💌 Archivo Abierto (Buzón Ciudadano):**
   - Formulario para que la comunidad aporte testimonios, documentos familiares y sugerencias de nuevos hitos de memoria.

9. **🔒 Panel de Administración (Backoffice):**
   - Acceso con PIN de seguridad.
   - CRUD completo de Sitios, Artículos, Museo, Sueños, Arte y Talleres.
   - Bandeja de moderación de comentarios y revisión de aportes ciudadanos.
   - **Herramientas de Respaldo:** Exportación e importación de copias de seguridad en formato JSON.

---

## 🛠️ Tecnologías y Arquitectura

- **Framework:** React 18 + TypeScript + Vite.
- **Estilos:** Tailwind CSS con paleta cálida de papel de archivo (`#faf6ee`, tonos terracota `#c2410c`, ocre `#a06a0e` y zinc).
- **Iconografía:** Lucide React.
- **Cartografía:** Leaflet + React-Leaflet con OpenStreetMap.
- **Persistencia:** LocalStorage sincronizado con control de versiones y migraciones automáticas.
- **CI/CD:** GitHub Actions con despliegue automático a GitHub Pages.

---

## 🚀 Instalación y Desarrollo Local

```bash
# Clonar el repositorio
git clone git@github.com:danisantanderurrutia-coder/memoria-y-dignidad-maule.git

# Entrar al directorio
cd memoria-y-dignidad-maule

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

La aplicación estará disponible localmente en `http://localhost:5173`.

---

## 📄 Licencia y Memoria

Este proyecto está dedicado a la preservación del patrimonio inmaterial, la educación en derechos humanos y la memoria viva de las comunidades de la Región del Maule.
