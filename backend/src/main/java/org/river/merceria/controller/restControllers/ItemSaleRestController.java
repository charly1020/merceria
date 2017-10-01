package org.river.merceria.controller.restControllers;

import org.river.merceria.model.ItemSale;
import org.river.merceria.repository.ItemSaleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;


/**
 * Created by marina on 21/09/17.
 */
@RestController
public class ItemSaleRestController {

  @Autowired
  private ItemSaleRepository repository;


  @PostMapping("/itemSale")
  public String newItemSale(@ModelAttribute ItemSale itemSale) {
    System.out.println(itemSale.toString());
    repository.save(itemSale);
    return "result";

  }
  @GetMapping(value="/itemSale", produces = MediaType.APPLICATION_JSON_VALUE)
  public List<ItemSale> getItemSale(@PathVariable String sku){

    List<ItemSale> listaVenta = repository.findAll();

    return listaVenta;
  }

  @GetMapping(value="/itemSale/{sku}", produces = MediaType.APPLICATION_JSON_VALUE)
  public ItemSale getSale(@PathVariable String sku){

    ItemSale itemSale = repository.findBysku(sku);

    return itemSale;
  }

}
