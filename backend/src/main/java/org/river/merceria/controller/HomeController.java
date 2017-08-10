package org.river.merceria;

import org.river.merceria.model.Article;
import org.river.merceria.repository.ArticleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PostMapping;

/**
 * Created by marina on 8/9/17.
 */

@Controller
public class HomeController{

  @Autowired
  private ArticleRepository repository;

  @RequestMapping("/home")
  public String greeting(@RequestParam(value="name", defaultValue="World") String name) {
    return "home";
  }
}
