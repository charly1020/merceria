package org.river.merceria.controller.viewControllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

/**
 * Created by marina on 07/11/17.
 */
@Controller
public class LoginViewController {

  @GetMapping(value="/login")
  public String getHome() {
    return "login";
  }
}
