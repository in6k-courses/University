FROM java:8

ENV HOST=localhost
ENV MYSQL_PORT=3306

ENV DATABASE_URL=mysql://$MYSQL_USER:$MYSQL_PASSWORD@$HOST:MYSQL_PORT/$MYSQL_DATABASE
ENV PORT=8080

EXPOSE $PORT

ADD /target/university-0.0.1.jar university-0.0.1.jar
ENTRYPOINT ["java","-jar","university-0.0.1.jar"]