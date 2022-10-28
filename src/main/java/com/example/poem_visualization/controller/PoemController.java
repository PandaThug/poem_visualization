package com.example.poem_visualization.controller;

import com.example.poem_visualization.service.PoemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

@Controller
public class PoemController {

    @Autowired
    private PoemService poemService;

    @RequestMapping(path = "/poem/images", method = RequestMethod.GET)
    @ResponseBody
    public String getImage(Model model, String name) {
        List<Map<String, Integer>> images = poemService.findImagesByPoet(name);
        for (Map<String, Integer> map : images) {
            for (String key : map.keySet()) {
                Integer value = Integer.parseInt(String.valueOf(map.get(key)));
                model.addAttribute(key, value);
            }
        }
        return model.toString();
    }

}
