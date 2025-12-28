FROM postgres:18-alpine
EXPOSE 5432
COPY ./initdb /docker-entrypoint-initdb.d/
RUN chmod -R 755 /docker-entrypoint-initdb.d