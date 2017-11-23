package org.river.merceria.controller.restControllers;

import org.river.merceria.model.ItemSale;
import org.river.merceria.model.Sales;
import org.river.merceria.repository.SalesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by marina on 21/09/17.
 */
@RestController
public class SalesRestController {

  @Autowired
  private SalesRepository repository;
  private Sales sales;

  @PostMapping("/sales")
  public Sales addSales(@RequestBody Sales sales){
    System.out.println(sales.toString());
    repository.save(sales);
    return sales;
  }

  @GetMapping(value = "/list", produces = MediaType.APPLICATION_JSON_VALUE)
  public List<Sales> getSale(){

    List<Sales> salesList = repository.findAll();

    return salesList;
  }
  @GetMapping(value="/sales/Show", produces = MediaType.APPLICATION_JSON_VALUE)
  public Sales getSales(@RequestBody String id){
    Sales detailSale = repository.findById(id);

    
    return sales;
  }

}

