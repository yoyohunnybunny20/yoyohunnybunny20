FROM quay.io/toxic_devil/whatsalexa:latest

RUN git clone https://github.com/TOXIC-DEVIL/WhatsAlexa 
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
