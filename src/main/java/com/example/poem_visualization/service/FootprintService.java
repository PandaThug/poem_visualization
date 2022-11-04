package com.example.poem_visualization.service;

import com.example.poem_visualization.dao.FootprintMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Service
public class FootprintService {

    private final FootprintMapper footprintMapper;

    public FootprintService(FootprintMapper footprintMapper) {
        this.footprintMapper = footprintMapper;
    }

    // 查询全部诗人全部时间的路线
    public List<Map<String, String >> findFootprints() {
        return footprintMapper.selectFootprints();
    }

    // 查询指定时间全部诗人的路线
    public List<Map<String, String>> findFootprintsByTime(int beginTime, int endTime) {
//        return footprintMapper.selectFootprintsByTime(beginTime, endTime);

        List<Map<String, String>> maps = new ArrayList<>();
        List<String> names = footprintMapper.selectPoemNames();
        Map<String, String> map;
        for (String name : names) {
            map = footprintMapper.selectFootprintByNameAndTime(name, beginTime, endTime);
            maps.add(map);
        }

        return maps;

    }

    // 查询指定诗人全部时间的路线
    public Map<String, String> findFootprintsByName(String name) {
        return footprintMapper.selectFootprintsByName(name);
    }

    // 查询指定诗人指定时间的路线
    public Map<String, String> findFootprintsByNameAndTime(String name, int beginTime, int endTime) {
        return footprintMapper.selectFootprintByNameAndTime(name, beginTime, endTime);
    }

}
