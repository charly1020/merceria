package org.river.merceria.model;

/**
 * Created by marina on 26/06/17.
 */
// se refiere a la factura
public class Item {

  public float quantity;
  public String tipoProd;
  public int code;
  public float parcialCost;
  public float priceTotal;

  public void calcularPrice(){

    float priceTotal = quantity * parcialCost;
  }
}
