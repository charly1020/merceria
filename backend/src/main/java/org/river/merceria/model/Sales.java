package org.river.merceria.model;

import javax.persistence.*;
import java.util.*;

/**
 * Created by marina on 19/09/17.
 */
@Entity
public class Sales {

  @Id
  @GeneratedValue
  private Long id;
  private String description;

  @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
  @JoinColumn(name = "sale_id")
  private List<ItemSale> itemsale = new ArrayList<ItemSale>();

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
