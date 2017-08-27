package org.river.merceria.controller.restControllers;

import org.river.merceria.model.Article;
import org.river.merceria.repository.ArticleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.annotation.Id;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import javax.xml.ws.Response;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by marina on 11/08/17.
 */
@RestController
public class ArticleRestController {

  @Autowired
  private ArticleRepository repository;

  @PostMapping("/article")
  public String articleSubmit(@ModelAttribute Article article) {
    System.out.println(article.toString());
    repository.save(article);
    return "result";
  }

  @GetMapping(value="/articles", produces = MediaType.APPLICATION_JSON_VALUE)
  public List<Article> getArticles(){

    List<Article> listPrueba = repository.findAll();
    return listPrueba;

  }

  @GetMapping(value="/articles/{sku}")
  public Article getRepository(@PathVariable String sku) {

    Article art1 = repository.findBysku(sku);

    return art1;
  }
}
