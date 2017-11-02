package org.river.merceria.controller.restControllers;

import org.river.merceria.model.Article;
import org.river.merceria.repository.ArticleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by marina on 11/08/17.
 */
@RestController
public class ArticleRestController {

  @Autowired
  private ArticleRepository repository;

  @PostMapping("/article")
  public String articleSubmit(@RequestBody Article article) {
    System.out.println(article.toString());
    repository.save(article);
    return "result";
  }

  @GetMapping(value="/articles", produces = MediaType.APPLICATION_JSON_VALUE)
  public List<Article> getArticles(){

    List<Article> listPrueba = repository.findAll();
    return listPrueba;
  }

  @GetMapping(value="/articles/{sku}", produces = MediaType.APPLICATION_JSON_VALUE)
  public Article getRepository(@PathVariable String sku) {

    Article article1 = repository.findBysku(sku);

    return article1;
  }
  @DeleteMapping(value="/article/{sku}", produces = MediaType.APPLICATION_JSON_VALUE)
  public ResponseEntity deleteArticle(@PathVariable String sku){

    Article article1 = repository.findBysku(sku);
    repository.delete(article1.getId());

    return new ResponseEntity(sku, HttpStatus.OK);

  }

}
