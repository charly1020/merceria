package org.river.merceria.model;

import javax.persistence.*;

/**
 * Created by marina on 26/06/17.
 */
@Entity
public class Article{

  private Long id;
  private int quantity;
  private String typeProd;
  private String description;
  private String category;
  private String sku;
  private double parcialCost;
  private double priceParcial;
  private double costo;
  private double precio;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "seq_gen")
    @SequenceGenerator(name = "seq_gen", sequenceName = "id_seq")
  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public int getQuantity() {
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

  public String getSku() {
    return sku;
  }

  public void setSku(String sku) {
    this.sku = sku;
  }

  public double getParcialCost() {
    return parcialCost;
  }

  public void setParcialCost(double parcialCost) {
    this.parcialCost = parcialCost;
  }

  public double getPriceParcial() {
    return priceParcial;
  }

  public void setPriceParcial(double priceParcial) {
    this.priceParcial = priceParcial;
  }

  public double getCosto() {
    return costo;
  }

  public void setCosto(double costo) {
    this.costo = costo;
  }

  public double getPrecio() {
    return precio;
  }

  public void setPrecio(double precio) {
    this.precio = precio;
  }

  @Override
  public String toString() {
    return String.format("Article[quantity='%d, typeProd='%s, sku='%s, description='%s, category='%s, parcialCost=%f, priceParcial='%f, costo='%f, precio='%f]",
        this.quantity, this.typeProd, this.sku, this.description, this.category, this.parcialCost, this.priceParcial, this.costo, this.precio);
  }
  }
