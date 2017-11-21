package org.river.merceria.repository;

import org.river.merceria.model.ItemSale;
import org.river.merceria.model.Sales;
import org.springframework.data.repository.CrudRepository;

import java.util.List;


/**
 * Created by marina on 21/09/17.
 */
public interface SalesRepository extends CrudRepository<Sales, Long> {

 //Sales findBysku(String sku);
 List<Sales> findAll();

}
