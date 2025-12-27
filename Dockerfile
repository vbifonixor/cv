FROM caddy:alpine

COPY ./dist /usr/share/caddy

EXPOSE 9999

CMD ["caddy", "file-server", "--listen", ":9999", "--root", "/usr/share/caddy"]
