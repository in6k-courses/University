package com.stefanovskyi.shop.util;

import java.net.URI;
import java.net.URISyntaxException;


public class PropertyHandler {
    private URI uri;
    private String[] userInfo;
    private String driver = "com.mysql.jdbc.Driver";
    private String dialect = "org.hibernate.dialect.MySQLDialect";
    private String show_sql = "false";
    private String hbm2ddlAuto = "update";

    public PropertyHandler(String rawUri) throws URISyntaxException {
        uri = new URI(rawUri);
        userInfo = uri.getUserInfo().split(":");
    }

    private String getHost() {
        return uri.getHost();
    }

    private Integer getPort() {
        return uri.getPort();
    }

    public String getUserName() {
        return userInfo[0];
    }

    public String getUserPass() {
        return userInfo[1];
    }

    private String getDatabase() {
        return uri.getPath().split("/")[1];
    }

    public String getUrl() {
        return "jdbc:mysql://" + getHost() + ":" + getPort() +
                "/" + getDatabase();
    }

    public String getDriverClass() {
        return driver;
    }

    public String getDialect() {
        return dialect;
    }

    public String getShowSql() {
        return show_sql;
    }

    public String getHbm2ddlAuto() {
        return hbm2ddlAuto;
    }
}