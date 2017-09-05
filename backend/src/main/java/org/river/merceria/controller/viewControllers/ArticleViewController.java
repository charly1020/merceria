package org.river.merceria.controller.viewControllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

/**
 * Created by marina on 11/08/17.
 */
@Controller
public class ArticleViewController {

  @RequestMapping("/article/new")
  public String greeting(@RequestParam(value="name", defaultValue="World") String name) {

    return "new";
  }
  @RequestMapping("/article/list")
  public String list(@RequestParam(value="name", defaultValue="World") String name) {
    return "list";
  }

  @RequestMapping("/article/searchArticle")
  public String search(@RequestParam(value="name", defaultValue="World") String name) {
    return "searchArticle";
  }
}