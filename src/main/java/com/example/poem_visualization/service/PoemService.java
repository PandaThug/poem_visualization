package com.example.poem_visualization.service;

import com.example.poem_visualization.dao.PoemMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class PoemService {

    @Autowired
    private PoemMapper poemMapper;

    // 根据诗人姓名获取诗歌意象——名称和次数
    public List<Map<String, Integer>> findImagesByPoet(String poetName) {
        List<Map<String, Integer>> maps = poemMapper.selectImagesByPoet(poetName);
        // 空值处理
        if (maps.get(0) == null) {
            maps.remove(0);
        }
        return maps;
    }

    // 根据时间获取诗歌意象——名称和次数
    public List<Map<String, Integer>> findImagesByTime(Integer beginTime, Integer endTime) {
        List<Map<String, Integer>> maps = poemMapper.selectImagesByTime(beginTime, endTime);
        // 空值处理
        if (maps.get(0) == null) {
            maps.remove(0);
        }
        return maps;
    }

    // 获取全部诗歌意象——名称和次数
    public List<Map<String, Integer>> findImages() {
        List<Map<String, Integer>> maps = poemMapper.selectImages();
        // 空值处理
        if (maps.get(0) == null) {
            maps.remove(0);
        }
        return maps;
    }

    // 根据时间和诗人姓名获取诗歌意象——名称和次数
    public List<Map<String, Integer>> findImagesByPoetAndTime(String poetName, Integer beginTime,
                                                              Integer endTime) {
        List<Map<String, Integer>> maps = poemMapper.selectImagesByPoetAndTime(poetName, beginTime, endTime);
        // 空值处理
        if (maps.get(0) == null) {
            maps.remove(0);
        }
        return maps;
    }

    // 根据诗人姓名获取诗歌情感——名称和次数
    public List<Map<String, Integer>> findEmoByPoet(String poetName) {
        List<Map<String, Integer>> maps = poemMapper.selectEmoByPoet(poetName);
        // 空值处理
        if (maps.get(0) == null) {
            maps.remove(0);
        }
        return maps;
    }

    // 根据时间获取诗歌情感——名称和次数
    public List<Map<String, Integer>> findEmoByTime(Integer beginTime, Integer endTime) {
        List<Map<String, Integer>> maps = poemMapper.selectEmoByTime(beginTime, endTime);
        // 空值处理
        if (maps.get(0) == null) {
            maps.remove(0);
        }
        return maps;
    }

    // 获取全部诗歌情感——名称和次数
    public List<Map<String, Integer>> findEmo() {
        List<Map<String, Integer>> maps = poemMapper.selectEmo();
        // 空值处理
        if (maps.get(0) == null) {
            maps.remove(0);
        }
        return maps;
    }

    // 根据时间和诗人姓名获取诗歌情感——名称和次数
    public List<Map<String, Integer>> findEmoByPoetAndTime(String poetName, Integer beginTime,
                                                           Integer endTime) {
        List<Map<String, Integer>> maps = poemMapper.selectEmoByPoetAndTime(poetName, beginTime, endTime);
        // 空值处理
        if (maps.get(0) == null) {
            maps.remove(0);
        }
        return maps;
    }

    // 获取包含指定意象的不同情感的诗歌数量——通过意象词、诗人姓名、时间查询
    public List<Map<String, Integer>> findPoemImagesCountByNameAndTime(String poetName, Integer beginTime,
                                                                       Integer endTime, String images) {
        List<Map<String, Integer>> maps = poemMapper
                .selectPoemImagesCountByNameAndTime(poetName, beginTime, endTime, images);
        // 空值处理
        if (maps.get(0) == null) {
            maps.remove(0);
        }
        return maps;
    }

    // 获取包含指定意象的不同情感的诗歌数量——通过意象词、时间查询
    public List<Map<String, Integer>> findPoemImagesCountByTime(Integer beginTime, Integer endTime,
                                                                String images) {
        List<Map<String, Integer>> maps = poemMapper.selectPoemImagesCountByTime(beginTime, endTime, images);
        if (maps.get(0) == null) {
            maps.remove(0);
        }
        return maps;
    }

    // 获取包含指定意象的不同情感的诗歌数量——通过意象词、诗人姓名查询
    public List<Map<String, Integer>> findPoemImagesCountByName(String poetName, String images) {
        List<Map<String, Integer>> maps = poemMapper.selectPoemImagesCountByName(poetName, images);
        if (maps.get(0) == null) {
            maps.remove(0);
        }
        return maps;
    }

    // 获取包含指定意象的不同情感的诗歌数量——通过意象词查询
    public List<Map<String, Integer>> findPoemImagesCount(String images) {
        List<Map<String, Integer>> maps = poemMapper.selectPoemImagesCount(images);
        if (maps.get(0) == null) {
            maps.remove(0);
        }
        return maps;
    }

}
