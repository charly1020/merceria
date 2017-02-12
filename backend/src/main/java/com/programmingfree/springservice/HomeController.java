package com.programmingfree.springservice;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by charly on 2/9/17.
 */
@Controller
public class HomeController {

    @RequestMapping("/home")
    public String home() {
        return "index";
    }
}
