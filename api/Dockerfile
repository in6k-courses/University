FROM dostiharise/ubuntu-java-mysql

ENV MYSQL_USER=root
ENV MYSQL_PASSWORD=root
ENV MYSQL_DATABASE=student
ENV HOST=localhost
ENV MYSQL_PORT=3306

RUN \
    service mysql start
    mysql -u root
    SET PASSWORD FOR '$MYSQL_USER'@'$HOST' = PASSWORD('$MYSQL_PASSWORD');
    CREATE DATABASE $MYSQL_DATABASE;
    \q


ENV DATABASE_URL=mysql://$MYSQL_USER:$MYSQL_PASSWORD@$HOST:MYSQL_PORT/$MYSQL_DATABASE
ENV PORT=8080

EXPOSE $PORT

ADD /target/university-0.0.1.jar university-0.0.1.jar
ENTRYPOINT ["java","-jar","university-0.0.1.jar"]