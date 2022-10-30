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

    public List<Map<String, Integer>> findEmoByPoet(String poetName) {
        return poemMapper.selectEmoByPoet(poetName);
    }

    public List<Map<String, Integer>> findImages() {
        return poemMapper.selectImages();
    }

    public List<Map<String, Integer>> findEmo() {
        return poemMapper.selectEmo();
    }

    public List<Map<String, Integer>> findPoemImagesCountByName(String poetName, String images) {
        return poemMapper.selectPoemImagesCountByName(poetName, images);
    }

    public List<Map<String, Integer>> findPoemImagesCount(String images) {
        return poemMapper.selectPoemImagesCount(images);
    }

}
