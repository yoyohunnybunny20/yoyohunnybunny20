FROM fusuf/whatsasena:latest

RUN git clone https://github.com/yoyohunnybunny20/yoyohunnybunny20 /root/yoyohunnybunny20
WORKDIR /root/yoyohunnybunny20/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
