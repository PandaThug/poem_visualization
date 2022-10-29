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
    public Map<String, Integer> getImage(String name) {
        List<Map<String, Integer>> images = poemService.findImagesByPoet(name);
        Map<String, Integer> map = new HashMap<>();
        for (Map<String, Integer> image : images) {
            for (String key : image.keySet()) {
                Integer value = Integer.parseInt(String.valueOf(image.get(key)));
                map.put(key, value);
            }
        }
        return map;
    }

    @RequestMapping(path = "/poem/emo", method = RequestMethod.GET)
    @ResponseBody
    public Map<String, Integer> getEmo(String name) {
        List<Map<String, Integer>> emos = poemService.findEmoByPoet(name);
        Map<String, Integer> map = new HashMap<>();
        for (Map<String, Integer> emo : emos) {
            for (String key : emo.keySet()) {
                Integer value = Integer.parseInt(String.valueOf(emo.get(key)));
                map.put(key, value);
            }
        }
        return map;
    }

}
