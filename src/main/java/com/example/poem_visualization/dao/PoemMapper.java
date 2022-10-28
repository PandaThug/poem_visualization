package com.example.poem_visualization.dao;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Map;

@Mapper
public interface PoemMapper {

    // 按诗人查询其诗歌中的意象及出现次数
    List<Map<String, Integer>> selectImagesByPoet(@Param("name") String name);

}
