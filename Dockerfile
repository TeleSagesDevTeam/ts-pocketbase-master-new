FROM alpine:3.17
# ARG POCKETBASE_VERSION=0.9.2
# RUN apk add --no-chache ca-certificates unzip wget zip zlib-dev
# TODO: encryption key
WORKDIR /bakend/
COPY pocketbase .
COPY LICENSE.md .
COPY pb_migrations ./pb_migrations
COPY pb_hooks ./pb_hooks

RUN chmod +x /bakend/pocketbase
VOLUME /bakend/pb_data
EXPOSE 8080
CMD ["/bakend/pocketbase", "serve", "--http=0.0.0.0:8080", "--dev"]