package com.example.poem_visualization.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@CrossOrigin
public class HomeController {

    @RequestMapping(path = "/index", method = RequestMethod.GET)
    public String getIndexPage() {
        return "/index";
    }

}
