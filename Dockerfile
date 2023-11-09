#Crear una imagen a partir de Node.js
#La version soporte a largo plazo - Ligera (Long Time Soport)
FROM node:lts-slim

#Crear y cambiamos al directorio /app
WORKDIR /app

#Copiar el archivo package.jason y pasckage-lock.jason a app/
COPY ./package*.json /app/

#Instalar las de dependencias de node
RUN npm install 

#copia el contenido del proyecto a /app
COPY . /app

#Exponer el puerto 80
EXPOSE 80

#Iniciar el servidor de node
CMD [ "node", "app.js" ]
