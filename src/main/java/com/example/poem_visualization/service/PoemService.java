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

    // 根据诗人姓名获取诗歌意象——名称和次数
    public List<Map<String, Integer>> findImagesByPoet(String poetName) {
        return poemMapper.selectImagesByPoet(poetName);
    }

    // 根据时间获取诗歌意象——名称和次数
    public List<Map<String, Integer>> findImagesByTime(Integer beginTime, Integer endTime) {
        return poemMapper.selectImagesByTime(beginTime, endTime);
    }

    // 获取全部诗歌意象——名称和次数
    public List<Map<String, Integer>> findImages() {
        return poemMapper.selectImages();
    }

    // 根据时间和诗人姓名获取诗歌意象——名称和次数
    public List<Map<String, Integer>> findImagesByPoetAndTime(String poetName, Integer beginTime, Integer endTime) {
        return poemMapper.selectImagesByPoetAndTime(poetName, beginTime, endTime);
    }

    // 根据诗人姓名获取诗歌情感——名称和次数
    public List<Map<String, Integer>> findEmoByPoet(String poetName) {
        return poemMapper.selectEmoByPoet(poetName);
    }

    // 根据时间获取诗歌情感——名称和次数
    public List<Map<String, Integer>> findEmoByTime(Integer beginTime, Integer endTime) {
        return poemMapper.selectEmoByTime(beginTime, endTime);
    }

    // 获取全部诗歌情感——名称和次数
    public List<Map<String, Integer>> findEmo() {
        return poemMapper.selectEmo();
    }

    // 根据时间和诗人姓名获取诗歌情感——名称和次数
    public List<Map<String, Integer>> findEmoByPoetAndTime(String poetName, Integer beginTime, Integer endTime) {
        return poemMapper.selectEmoByPoetAndTime(poetName, beginTime, endTime);
    }

    // 获取包含指定意象的不同情感的诗歌数量——通过意象词、诗人姓名、时间查询
    public List<Map<String, Integer>> findPoemImagesCountByNameAndTime(String poetName, Integer beginTime, Integer endTime, String images) {
        return poemMapper.selectPoemImagesCountByNameAndTime(poetName, beginTime, endTime, images);
    }

    // 获取包含指定意象的不同情感的诗歌数量——通过意象词、时间查询
    public List<Map<String, Integer>> findPoemImagesCountByTime(Integer beginTime, Integer endTime, String images) {
        return poemMapper.selectPoemImagesCountByTime(beginTime, endTime, images);
    }

    // 获取包含指定意象的不同情感的诗歌数量——通过意象词、诗人姓名查询
    public List<Map<String, Integer>> findPoemImagesCountByName(String poetName, String images) {
        return poemMapper.selectPoemImagesCountByName(poetName, images);
    }

    // 获取包含指定意象的不同情感的诗歌数量——通过意象词查询
    public List<Map<String, Integer>> findPoemImagesCount(String images) {
        return poemMapper.selectPoemImagesCount(images);
    }

}
