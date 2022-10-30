package com.example.poem_visualization.dao;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Map;

@Mapper
public interface PoemMapper {

    // 按诗人查询其诗歌中的意象及出现次数
    List<Map<String, Integer>> selectImagesByPoet(@Param("name") String name);

    // 按诗人查询其诗歌中的情感词及出现次数
    List<Map<String, Integer>> selectEmoByPoet(@Param("name") String name);

    // 查询全部诗歌中的意象及出现次数
    List<Map<String, Integer>> selectImages();

    // 查询全部诗歌中的情感词及出现次数
    List<Map<String, Integer>> selectEmo();

    // 按诗人查询包含某意象词的诗的情感返回诗歌数量
    List<Map<String, Integer>> selectPoemImagesCountByName(@Param("name") String name, @Param("images") String images);

    // 查询包含某意象词的诗的情感返回诗歌数量
    List<Map<String, Integer>> selectPoemImagesCount(@Param("images") String images);

}
