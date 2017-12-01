package org.river.merceria.controller.restControllers;

import org.river.merceria.model.Article;
import org.river.merceria.model.ItemSale;
import org.river.merceria.model.Sales;
import org.river.merceria.repository.ArticleRepository;
import org.river.merceria.repository.SalesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by marina on 21/09/17.
 */
@RestController
public class SalesRestController {

  @Autowired
  private SalesRepository repository;

  @Autowired
  private ArticleRepository articleRepository;

  private Sales sales;

  @PostMapping("/sales")
  public ResponseEntity<Object> addSales(@RequestBody Sales sale){
    System.out.println(sale.toString());
    repository.save(sale);
    //Descontar cantidad vendida
    for(ItemSale is : sale.getItemsale()) {
      Article art =articleRepository.findBysku(is.getSku());
      double restante = art.getQuantity()-is.getQuantity();

      if( restante < 0) {
        return new ResponseEntity<Object>(null, HttpStatus.CONFLICT);
      }

      art.setQuantity(restante);
      articleRepository.save(art);
    }

    return new ResponseEntity<Object>(sale, HttpStatus.OK);
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

