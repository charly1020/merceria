package org.river.merceria.model;

import javax.persistence.*;
import java.util.*;

/**
 * Created by marina on 19/09/17.
 */
@Entity
public class Sales {

  private Long id;

  @Id
  @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "seq_gen")
  @SequenceGenerator(name = "seq_gen", sequenceName = "id_seq_sales")
  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  private List<Sales> sales = new ArrayList<Sales>(){
  };

  @Override
  public String toString(){
    return String.format("Sales[id='%s]",
        this.id);
  }

}
