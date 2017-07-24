package org.river.merceria.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
/**
 * Created by marina on 26/06/17.
 */
@Entity
public class Article {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  private double quantity;
  private String typeProd;
  private String description;
  private String category;
  private int sku;
  private double parcialCost;
  private double priceParcial;

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public double getQuantity() {
    return quantity;
  }

  public void setQuantity(int quantity) {
    this.quantity = quantity;
  }

  public String getTypeProd() {
    return typeProd;
  }

  public void setTypeProd(String typeProd) {
    this.typeProd = typeProd;
  }

  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public String getCategory() {
    return category;
  }

  public void setCategory(String category) {
    this.category = category;
  }

  public int getSku() {return sku;}

  public void setSku(int sku) {
    this.sku = sku;
  }

  public double getParcialCost() {
    return parcialCost;
  }

  public void setParcialCost(float parcialCost) {
    this.parcialCost = parcialCost;
  }

  public double getPriceParcial() {
    return priceParcial;
  }

  public void setPriceParcial(float priceParcial) {
    this.priceParcial = priceParcial;
  }

  @Override
  public String toString() {
    return String.format("Article[quantity='%s, typeProd='%s, sku='%s description='%s, category='%s, parcialCost=%f," + " priceParcial%f]",
        this.quantity, this.typeProd,this.category,this.sku, this.description,this.parcialCost,this.priceParcial);
  }
  }
