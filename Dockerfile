FROM alpine:latest
WORKDIR /usr/share/site


COPY ./dist/ .

RUN ["ls"]

# Keep the container alive so volume is available
CMD ["sh", "-c", "sleep infinity"]
