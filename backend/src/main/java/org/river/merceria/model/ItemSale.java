package org.river.merceria.model;

import javax.persistence.*;

/**
 * Created by marina on 26/06/17.
 */
// se refiere a la factura
@Entity
public class ItemSale {

  private Long id;
  private String sku;
  private String description;
  private double cost;
  private double price;
  private double quantity;

  private Sales sales;

  @Id
  @GeneratedValue(strategy = GenerationType.SEQUENCE , generator = "seq_gen")
  @SequenceGenerator(name = "seq_gen" , sequenceName = "id_seq_ItemSales")
  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getSku() {
    return sku;
  }

  public void setSku(String sku) {
    this.sku = sku;
  }

  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public double getCost() {
    return cost;
  }

  public void setCost(double cost) {
    this.cost = cost;
  }

  public double getPrice() {
    return price;
  }

  public void setPrice(double price) {
    this.price = price;
  }

  public double getQuantity() {
    return quantity;
  }

  public void setQuantity(double quantity) {
    this.quantity = quantity;
  }

  @ManyToOne
  @JoinColumn(name="sales_id")
  public Sales getSales() {
    return sales;
  }

  public void setSales(Sales sales) {
    this.sales = sales;
  }

  @Override
  public String toString(){
    return String.format("ItemSale[sku='%s,description='%s, cost='%f, price='%f, quantity='%f]",
        this.sku, this.description, this.cost, this.price, this.quantity);
  }

}
