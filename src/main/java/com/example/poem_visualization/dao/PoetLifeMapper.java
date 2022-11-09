package com.example.poem_visualization.dao;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface PoetLifeMapper {

    // 查询某诗人的出生年份
    int selectBirthYearByName(@Param("name") String name);

    // 查询某诗人的死亡年份
    int selectDeathYearByName(@Param("name") String name);

}
