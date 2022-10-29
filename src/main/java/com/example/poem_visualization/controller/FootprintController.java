package com.example.poem_visualization.controller;

import com.example.poem_visualization.service.FootprintService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;
import java.util.Map;

@Controller
public class FootprintController {

    @Autowired
    private FootprintService footprintService;

    // 查询诗人的路径——未指定诗人未指定时间——mode0
    @RequestMapping(path = "/footprint/mode0", method = RequestMethod.GET)
    @ResponseBody
    public List<Map<String, String>> getFootprints() {

        return footprintService.findFootprints();

    }

    // 查询诗人的路径——未指定诗人指定时间——mode1
    @RequestMapping(path = "/footprint/mode1", method = RequestMethod.GET)
    @ResponseBody
    public List<Map<String, String>> getFootprintsByTime(
            @RequestParam("beginTime") String beginTime, @RequestParam("endTime") String endTime) {

        return footprintService.findFootprintsByTime(Integer.parseInt(beginTime), Integer.parseInt(endTime));

    }

    // 查询诗人的路径——指定诗人未指定时间——mode2
    @RequestMapping(path = "/footprint/mode2", method = RequestMethod.GET)
    @ResponseBody
    public Map<String, String> getFootprintsByName(@RequestParam("name") String name) {

        return footprintService.findFootprintsByName(name);

    }

    // 查询诗人的路径——指定诗人指定时间——mode3
    @RequestMapping(path = "/footprint/mode3", method = RequestMethod.GET)
    @ResponseBody
    public Map<String, String> getFootprintsByNameAndTime(@RequestParam("name") String name,
                                                          @RequestParam("beginTime") String beginTime,
                                                          @RequestParam("endTime") String endTime) {

        return footprintService.findFootprintsByNameAndTime(name, Integer.parseInt(beginTime), Integer.parseInt(endTime));

    }

}
