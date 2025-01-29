# API_Libros
# Buscador de Libros - Gutendex API

## Descripción del Proyecto

Enlace a Github Pages: https://marinalp04.github.io/API_Libros/

Este proyecto es una aplicación web que permite buscar libros en la API de Gutendex en tiempo real.  
Los usuarios pueden ingresar un término en la barra de búsqueda y ver una lista de libros que coincidan con su consulta.  

🔹 **Características principales**:  
- **Búsqueda en tiempo real** de libros por título.  
- **Muestra imágenes de portada** junto con el título del libro.  
- **Optimización con AbortController** para cancelar solicitudes anteriores y mejorar el rendimiento.  

---

## URL de la API utilizada

La API de **Gutendex** se encuentra en:  
🔗 [https://gutendex.com/books](https://gutendex.com/books)

### Ejemplo de consulta

1️⃣ Para **buscar libros por título** con la palabra `Sherlock`:  

GET https://gutendex.com/books?search=Sherlock

 Problemas encontrados y soluciones

1. Peticiones duplicadas al escribir en el campo de búsqueda
Problema: Cada vez que el usuario ingresaba una letra, se enviaba una nueva solicitud a la API.
Solución: Implementamos AbortController para cancelar la solicitud anterior y evitar sobrecarga.

2. Algunos libros no tienen imagen de portada
Solución: Se muestra una imagen por defecto en caso de que la API no proporcione una portada.
