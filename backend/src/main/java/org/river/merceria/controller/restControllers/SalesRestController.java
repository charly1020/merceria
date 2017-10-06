package org.river.merceria.controller.restControllers;

import org.river.merceria.model.Sales;
import org.river.merceria.repository.SalesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * Created by marina on 21/09/17.
 */
@RestController
public class SalesRestController {

  @Autowired
  private SalesRepository repository;

  @PostMapping("/sales")
  public Sales addSales(@ModelAttribute Sales sales){
    System.out.println(sales.toString());
    repository.save(sales);
    return sales;

  }

}

