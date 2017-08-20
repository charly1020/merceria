package org.river.merceria.controller.restControllers;

import org.river.merceria.model.Article;
import org.river.merceria.repository.ArticleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

  @RequestMapping(value="/articles", method= RequestMethod.GET)
  public String getArticles(){

    
    //1-traiga todos los articulos de la BD.
    //List articulos
    //2-devolver esta lista como un json.
    return "Hola mundo";
  }

}
