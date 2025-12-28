FROM oven/bun:alpine
RUN apk add --no-cache bash busybox-suid
COPY crontab /etc/crontabs/root
CMD ["crond", "-f", "-l", "2"]