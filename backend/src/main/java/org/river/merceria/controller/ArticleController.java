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
 * Created by marina on 2/20/17.
 */
@Controller
public class ArticleController {

    @Autowired
    private ArticleRepository repository;

    @RequestMapping("/article")
    public String greeting(@RequestParam(value="name", defaultValue="World") String name) {
        return "article";
    }

    @RequestMapping("/list")
    public String list(@RequestParam(value="name", defaultValue="World") String name) {
        return "list";
    }

    @PostMapping("/article")
    public String articleSubmit(@ModelAttribute Article article) {
        System.out.println(article.toString());
        repository.save(article);
        return "result";
    }

}
