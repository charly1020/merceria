package org.river.merceria.model;

import javax.persistence.*;
import java.util.*;

/**
 * Created by marina on 19/09/17.
 */
@Entity
public class Sales {

  private Long id;
  private String description;
  private List<ItemSale> itemsale;

  @Id
  @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "seq_gen")
  @SequenceGenerator(name = "seq_gen", sequenceName = "id_seq_sales")
  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  @OneToMany(mappedBy = "sales", cascade = CascadeType.ALL)
  public List<ItemSale> getItemsale() {
    return itemsale;
  }

  public void setItemsale(List<ItemSale> itemsale) {
    this.itemsale = itemsale;
  }

  @Override
  public String toString(){
    return String.format("Sales[id='%s]",
        this.id);
  }

}
