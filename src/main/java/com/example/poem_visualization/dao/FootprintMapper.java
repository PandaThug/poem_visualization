package com.example.poem_visualization.dao;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Map;

@Mapper
public interface FootprintMapper {

    // 查询全部诗人全部时间的路线
    List<Map<String, String>> selectFootprints();

    // 查询指定时间全部诗人的路线
//    List<Map<String, String>> selectFootprintsByTime(@Param("begin") int begin, @Param("end") int end);

    // 查询指定诗人全部时间的路线
    Map<String, String> selectFootprintsByName(@Param("name") String name);

    // 查询指定诗人指定时间的路线
    Map<String, String> selectFootprintByNameAndTime(@Param("name") String name, @Param("begin") int begin, @Param("end") int end);

    // 查询所有的诗人名字
    List<String> selectPoemNames();

}
