package org.river.merceria.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

/**
 * Created by charly on 3/27/17.
 */
@Entity
public class Article {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String description;
    private double price;

    //This constructor is for the sake of JPA
    protected Article() {}

    public Article(String name) {
        this.name = name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public  String getName() {return this.name; }


    public void setDescription(String description) {
        this.description = description;
    }

    public  String getDescription() { return this.description; }

    public void setPrice(double price) {
        this.price = price;
    }

    public double getPrice(){ return this.price;}

    @Override
    public String toString() {
        return String.format( "Article[id=%d, name='%s, description='%s, price=%d]", this.id, this.name , this.description, this.price);

    }
}
