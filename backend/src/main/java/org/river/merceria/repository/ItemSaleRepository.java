package org.river.merceria.repository;

import org.river.merceria.model.ItemSale;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

/**
 * Created by marina on 21/09/17.
 */

public interface ItemSaleRepository extends CrudRepository<ItemSale, Long>{

  //ItemSale findBysku(String sku);
  List<ItemSale> findAll();

  ItemSale findBysku(String sku);

}
