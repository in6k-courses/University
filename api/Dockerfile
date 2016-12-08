FROM dostiharise/ubuntu-java-mysql
EXPOSE 8080
EXPOSE 3306
ENV DATABASE_URL=mysql://$MYSQL_USER:$MYSQL_PASSWORD@localhost:3306/$MYSQL_DATABASE
ENV PORT=8080
ADD /target/university-0.0.1.jar university-0.0.1.jar
ENTRYPOINT ["java","-jar","university-0.0.1.jar"]