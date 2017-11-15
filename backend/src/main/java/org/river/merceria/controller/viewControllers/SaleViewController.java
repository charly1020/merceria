package org.river.merceria.controller.viewControllers;

import org.river.merceria.model.Sales;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

/**
 * Created by marina on 12/10/17.
 */
@Controller
public class SaleViewController {

  @RequestMapping("/article/sale")
  public String Sales(@RequestParam(value="name", defaultValue = "World")String name){
    return "sale";
  }

  @RequestMapping("/article/viewSales")
  public String viewSales(@RequestParam(value = "name", defaultValue = "World")String name){
  return "viewSales";
  }
}
