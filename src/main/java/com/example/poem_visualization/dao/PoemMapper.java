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

    // 查询某一年所有诗人创作的诗歌数量
    int selectPoemCountInOneYear(@Param("time") int time);

    // 查询某时间范围内总共创作的诗歌数量
    int selectPoemCountByTime(@Param("beginTime") int beginTime, @Param("endTime") int endTime);

    // 按时间查询指定诗人某一年创作的诗歌数量
    int selectPoemCountInOneYearByName(@Param("time") int time, @Param("name") String name);

    // 查询某时间范围内指定诗人创作的诗歌数量
    int selectPoemCountByTimeAndName(@Param("beginTime") int beginTime, @Param("endTime") int endTime, @Param("name") String name);

}
