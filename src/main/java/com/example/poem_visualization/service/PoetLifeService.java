package com.example.poem_visualization.service;

import com.example.poem_visualization.dao.PoetLifeMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.LinkedHashMap;
import java.util.Map;

@Service
public class PoetLifeService {

    @Autowired
    private PoetLifeMapper poetLifeMapper;

    // 返回诗人的出生年份和死亡年份
    public Map<String, Integer> findPoetLifeTimeByName(String name) {
        Map<String, Integer> map = new LinkedHashMap<>();
        int birthYear = poetLifeMapper.selectBirthYearByName(name);
        int deathYear = poetLifeMapper.selectDeathYearByName(name);
        map.put("birth", birthYear);
        map.put("death", deathYear);
        return map;
    }

}
