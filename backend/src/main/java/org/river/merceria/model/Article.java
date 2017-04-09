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

    //This constructor is for the sake of JPA
    protected Article() {}

    public Article(String name) {
        this.name = name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public  String getName() {
        return this.name;
    }

    @Override
    public String toString() {
        return String.format( "Article[id=%d, name='%s]", this.id, this.name );
    }
}
