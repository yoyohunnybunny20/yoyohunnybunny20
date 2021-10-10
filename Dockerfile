FROM node:15.11.0-alpine3.10

RUN apk add git libwebp-tools ffmpeg-libs ffmpeg

RUN git clone https://github.com/TOXIC-DEVIL/WhatsAlexa /root/WhatsAlexa
WORKDIR /root/WhatsAlexa/

ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install

CMD ["node", "bot.js"]
