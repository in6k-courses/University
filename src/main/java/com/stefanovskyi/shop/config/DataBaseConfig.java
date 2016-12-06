package com.stefanovskyi.shop.config;

import com.stefanovskyi.shop.PropertyHandler;
import org.hibernate.SessionFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.dao.annotation.PersistenceExceptionTranslationPostProcessor;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.orm.hibernate4.HibernateTransactionManager;
import org.springframework.orm.hibernate4.LocalSessionFactoryBean;
import org.springframework.orm.jpa.JpaVendorAdapter;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter;

import javax.persistence.EntityManager;
import javax.sql.DataSource;
import java.net.URISyntaxException;
import java.util.Properties;

@Configuration
public class DataBaseConfig {
    @Bean
    public DataSource getDataSource() throws URISyntaxException {
        final DriverManagerDataSource dataSource = new DriverManagerDataSource();
        dataSource.setDriverClassName(getPropertyHandler().getDriverClass());
        dataSource.setUrl(getPropertyHandler().getUrl());
        dataSource.setUsername(getPropertyHandler().getUserName());
        dataSource.setPassword(getPropertyHandler().getUserPass());
        return dataSource;
    }

    @Bean
    public Properties getHibernateProperties() throws URISyntaxException {
        Properties properties = new Properties();
        properties.put("hibernate.dialect", getPropertyHandler().getDialect());
        properties.put("hibernate.show_sql", getPropertyHandler().getShowSql());
        properties.put("hibernate.hbm2ddl.auto", getPropertyHandler().getHbm2ddlAuto());
        return properties;
    }

    @Bean
    public LocalSessionFactoryBean getSessionFactoryBean(DataSource dataSource) throws URISyntaxException {
        LocalSessionFactoryBean sessionFactoryBean = new LocalSessionFactoryBean();
        sessionFactoryBean.setDataSource(dataSource);
        String currentPackage = "/com/stefanovskyi/shop";
        sessionFactoryBean.setPackagesToScan(currentPackage);
        sessionFactoryBean.setHibernateProperties(this.getHibernateProperties());
        return sessionFactoryBean;
    }

    @Bean
    public HibernateTransactionManager getTransactionManager(SessionFactory sessionFactory) {
        HibernateTransactionManager transactionManager = new HibernateTransactionManager();
        transactionManager.setSessionFactory(sessionFactory);
        return transactionManager;
    }

    @Bean
    public PropertyHandler getPropertyHandler() throws URISyntaxException {
        return new PropertyHandler(System.getenv("DATABASE_URL"));
    }

    @Bean
    public EntityManager entityManager() throws URISyntaxException {
        return entityManagerFactory().getObject().createEntityManager();
    }

    @Bean
    public LocalContainerEntityManagerFactoryBean entityManagerFactory() throws URISyntaxException {
        LocalContainerEntityManagerFactoryBean em = new LocalContainerEntityManagerFactoryBean();
        em.setDataSource(getDataSource());
        em.setPackagesToScan("com.stefanovskyi.shop");

        JpaVendorAdapter vendorAdapter = new HibernateJpaVendorAdapter();
        em.setJpaVendorAdapter(vendorAdapter);
        em.setJpaProperties(getHibernateProperties());
        return em;
    }

    @Bean
    public PersistenceExceptionTranslationPostProcessor exceptionTranslation(){
        return new PersistenceExceptionTranslationPostProcessor();
    }
}
