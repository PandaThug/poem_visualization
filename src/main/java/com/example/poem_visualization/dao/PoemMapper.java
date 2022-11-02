package com.example.poem_visualization.dao;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Map;

@Mapper
public interface PoemMapper {

    // 按诗人查询其诗歌中的意象及出现次数
    List<Map<String, Integer>> selectImagesByPoet(@Param("name") String name);

    // 按时间查询全部诗歌中的意象及出现次数
    List<Map<String, Integer>> selectImagesByTime(@Param("beginTime") int beginTime, @Param("endTime") int endTime);

    // 查询全部诗歌中的意象及出现次数
    List<Map<String, Integer>> selectImages();

    // 按诗人+时间查询诗歌中的意象及出现次数
    List<Map<String, Integer>> selectImagesByPoetAndTime(@Param("name") String name, @Param("beginTime") int beginTime, @Param("endTime") int endTime);

    // 按诗人查询其诗歌中的情感词及出现次数
    List<Map<String, Integer>> selectEmoByPoet(@Param("name") String name);

    // 按时间查询全部诗歌中的情感词及出现次数
    List<Map<String, Integer>> selectEmoByTime(@Param("beginTime") int beginTime, @Param("endTime") int endTime);

    // 查询全部诗歌中的情感词及出现次数
    List<Map<String, Integer>> selectEmo();

    // 按诗人+时间查询诗歌中的情感词及出现次数
    List<Map<String, Integer>> selectEmoByPoetAndTime(@Param("name") String name, @Param("beginTime") int beginTime, @Param("endTime") int endTime);

    // 按诗人查询包含某意象词的诗的情感返回诗歌数量
    List<Map<String, Integer>> selectPoemImagesCountByName(@Param("name") String name, @Param("images") String images);

    // 按时间查询包含某意象词的诗的情感返回诗歌数量
    List<Map<String, Integer>> selectPoemImagesCountByTime(@Param("beginTime") int beginTime, @Param("endTime") int endTime, @Param("images") String images);

    // 查询包含某意象词的诗的情感返回诗歌数量
    List<Map<String, Integer>> selectPoemImagesCount(@Param("images") String images);

    // 按诗人+时间查询包含某意象词的诗的情感返回诗歌数量
    List<Map<String, Integer>> selectPoemImagesCountByNameAndTime(@Param("name") String name, @Param("beginTime") int beginTime, @Param("endTime") int endTime, @Param("images") String images);

}
