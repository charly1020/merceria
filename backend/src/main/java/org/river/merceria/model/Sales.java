package org.river.merceria.model;

import javax.persistence.*;

/**
 * Created by marina on 19/09/17.
 */
@Entity
public class Sales {

  private Long id;
  private float montoTotal;

  @Id
  @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "seq_gen")
  @SequenceGenerator(name = "seq_gen", sequenceName = "id_seq_sales")
  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public float getMontoTotal() {
    return montoTotal;
  }

  public void setMontoTotal(float montoTotal) {
    this.montoTotal = montoTotal;
  }

  @Override
  public String toString(){
    return String.format("Sales[id='%s, montoTotal='%f]",
        this.id, this.montoTotal);
  }
}
