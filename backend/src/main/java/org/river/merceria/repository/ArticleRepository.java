package org.river.merceria.repository;

import org.river.merceria.model.Article;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

/**
 * Created by charly on 4/8/17.
 */
public interface ArticleRepository extends CrudRepository<Article, Long> {

    List<Article> findByName( String name);
}
