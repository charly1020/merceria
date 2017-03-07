package org.river.merceria;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by charly on 2/20/17.
 */
@RestController
public class PruebaController {

    @RequestMapping("/greeting")
    public String greeting(@RequestParam(value="name", defaultValue="World") String name) {
        return "Buenos Dias Prueba 2";
    }
}
