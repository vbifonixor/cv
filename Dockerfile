FROM alpine:latest
WORKDIR /usr/share/site

COPY --from=builder /app/dist .

# Keep the container alive so volume is available
CMD ["sh", "-c", "sleep infinity"]
