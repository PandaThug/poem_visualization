package com.example.poem_visualization.controller;

import com.example.poem_visualization.service.PoetLifeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.Map;

@Controller
@CrossOrigin
public class PoetController {

    @Autowired
    private PoetLifeService poetLifeService;

    @RequestMapping(path = "/poet/lifetime", method = RequestMethod.GET, params = {"name"})
    @ResponseBody
    public Map<String, Integer> getPoetBirthAndDeath(String name) {
        return poetLifeService.findPoetLifeTimeByName(name);
    }

}
