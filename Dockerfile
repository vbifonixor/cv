FROM alpine:latest
WORKDIR /usr/share/site

COPY ./dist .

# Keep the container alive so volume is available
CMD ["sh", "-c", "sleep infinity"]
