FROM mhart/alpine-node

RUN mkdir -p /opt

WORKDIR /opt

# Bundle app source
COPY / /opt/

EXPOSE 3232

ENV NODE_ENV=production

CMD [ "node", "index.js" ]
