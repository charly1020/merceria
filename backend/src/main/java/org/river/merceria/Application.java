package org.river.merceria;

import org.river.merceria.repository.ArticleRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

/**
 * Created by charly on 2/9/17.
 */
@SpringBootApplication
public class Application {

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

    @Bean
    public CommandLineRunner demo(ArticleRepository repository) {

        return ( args ) -> {
            //repository.save( new Article("Aguja"));
            //repository.save( new Article("Hilo"));
            //repository.save( new Article("Tijera"));


        };
    }
}
