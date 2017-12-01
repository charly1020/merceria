package org.river.merceria.security;

import org.springframework.context.annotation.Bean;
import org.thymeleaf.extras.springsecurity4.dialect.SpringSecurityDialect;

/**
 * Created by marina on 01/12/17.
 */
public class ThymeleafConfig {

  @Bean
  public SpringSecurityDialect springSecurityDialect(){
    return new SpringSecurityDialect();
  }
}
