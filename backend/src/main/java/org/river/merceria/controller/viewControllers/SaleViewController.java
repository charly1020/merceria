package org.river.merceria.controller.viewControllers;

import org.river.merceria.model.Sales;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * Created by marina on 12/10/17.
 */
@Controller
public class SaleViewController {

  @RequestMapping("/article/sale")
  public String Sales(){
    return "sale";
  }

  @GetMapping("/article/viewSales")
  public String viewSales(){
  return "viewSales";
  }
}
