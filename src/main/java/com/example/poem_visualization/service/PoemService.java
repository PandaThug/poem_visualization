package com.example.poem_visualization.service;

import com.example.poem_visualization.dao.PoemMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class PoemService {

    @Autowired
    private PoemMapper poemMapper;

    public List<Map<String, Integer>> findImagesByPoet(String poetName) {
        return poemMapper.selectImagesByPoet(poetName);
    }

}
