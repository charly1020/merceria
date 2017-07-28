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
 * Created by charly on 2/20/17.
 */
@Controller
public class PruebaController {

    @Autowired
    private ArticleRepository repository;

    @RequestMapping("/greeting")
    public String greeting(@RequestParam(value="name", defaultValue="World") String name) {
        return "index";
    }

    @PostMapping("/article")
    public String articleSubmit(@ModelAttribute Article article) {
        //article.setId(1L);
        System.out.println(article.toString());
        repository.save(article);
        return "result";
    }
}
