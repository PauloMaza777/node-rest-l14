#Crear una imagen a partir de Node.js
#La version soporte a largo plazo - Ligera (Long Time Soport)
FROM node:lts-slim

#Crear y cambiamos al directorio /app
WORKDIR /app

#copia el contenido del proyecto a /app
COPY . /app

#Exponer el puerto 80
EXPOSE 80

#Iniciar el servidor de node
CMD [ "node", "app.js" ]
