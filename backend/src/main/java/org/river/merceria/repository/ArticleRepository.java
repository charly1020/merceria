package org.river.merceria.repository;

import org.river.merceria.model.Article;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

/**
 * Created by marina on 4/8/17.
 * JDBC libreria
 * "select * "
 * Esto genera una instancia que se guardaa en el container de spring
 */
public interface ArticleRepository extends CrudRepository<Article, Long> {

    List<Article> findAll();
    //dentro de articlerepository tenes q tener un metodo q t devuelva un articulo by sku
    //y en el controller hacer otro get para q t devuelva ese articulo

    Article findBysku(String sku);

}
