package com.example.poem_visualization.service;

import com.example.poem_visualization.dao.PoemMapper;
import com.example.poem_visualization.utils.TimeIntervalUtil;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class PoemService {

    private final PoemMapper poemMapper;

    public PoemService(PoemMapper poemMapper) {
        this.poemMapper = poemMapper;
    }

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

    // 按时间查询此时间范围内每一年创作的诗歌数量
    public Map<String, Integer> findPoemCountByTime(Integer beginTime, Integer endTime) {
        int interval = TimeIntervalUtil.timeInterval(beginTime, endTime);  // 时间间隔类型
        Map<String, Integer> map = new LinkedHashMap<>();
        if (interval == 1) {
            for (int i = beginTime; i <= endTime; i++) {
                map.put(String.valueOf(i), poemMapper.selectPoemCountInOneYear(i));
            }
        } else if (interval == 2) {
            int left = beginTime, right = beginTime + 4;
            do {
                map.put(left+"-"+right, poemMapper.selectPoemCountByTime(left, right));
                left += 5;
                right += 5;
            } while (left + 5 <= endTime);
            left = right + 1 - 5;
            right = endTime;
            map.put(left+"-"+right, poemMapper.selectPoemCountByTime(left, right));
        } else {
            int left = beginTime, right = beginTime + 9;
            do {
                map.put(left+"-"+right, poemMapper.selectPoemCountByTime(left, right));
                left += 10;
                right += 10;
            } while (left + 10 <= endTime);
            left = right + 1 - 10;
            right = endTime;
            map.put(left+"-"+right, poemMapper.selectPoemCountByTime(left, right));
        }
        return map;
    }

    // 按时间和诗人姓名查询此时间范围内指定诗人每一年创作的诗歌数量
    public Map<String, Integer> findPoemCountByTimeAndName(String name, Integer beginTime, Integer endTime) {
        int interval = TimeIntervalUtil.timeInterval(beginTime, endTime);  // 时间间隔类型
        Map<String, Integer> map = new LinkedHashMap<>();
        if (interval == 1) {
            for (int i = beginTime; i <= endTime; i++) {
                map.put(String.valueOf(i), poemMapper.selectPoemCountInOneYearByName(i, name));
            }
        } else if (interval == 2) {
            int left = beginTime, right = beginTime + 4;
            do {
                map.put(left+"-"+right, poemMapper.selectPoemCountByTimeAndName(left, right, name));
                left += 5;
                right += 5;
            } while (left + 5 <= endTime);
            left = right + 1 - 5;
            right = endTime;
            map.put(left+"-"+right, poemMapper.selectPoemCountByTimeAndName(left, right, name));
        } else {
            int left = beginTime, right = beginTime + 9;
            do {
                map.put(left+"-"+right, poemMapper.selectPoemCountByTimeAndName(left, right, name));
                left += 10;
                right += 10;
            } while (left + 10 <= endTime);
            left = right + 1 - 10;
            right = endTime;
            map.put(left+"-"+right, poemMapper.selectPoemCountByTimeAndName(left, right, name));
        }
        return map;
    }

    // 按诗人查询每十年诗歌创作的数量
    public Map<String, Integer> findPoemCountByName(String name) {
        Map<String, Integer> map = new LinkedHashMap<>();
        map.put("610s", poemMapper.selectPoemCountByTimeAndName(618, 619, name));
//        int left = 620, right = 629;
        for (int left = 620, right = 629; right < 900; left += 10, right += 10) {
            map.put(left+"s", poemMapper.selectPoemCountByTimeAndName(left, right, name));
        }
        map.put("900s", poemMapper.selectPoemCountByTimeAndName(900, 907, name));
        return map;
    }

    // 查询每十年间诗歌创作的数量
    public Map<String, Integer> findPoemCount() {
        Map<String, Integer> map = new LinkedHashMap<>();
        map.put("610s", poemMapper.selectPoemCountByTime(618, 619));
        for (int left = 620, right = 629; right < 900; left += 10, right += 10) {
            map.put(left+"s", poemMapper.selectPoemCountByTime(left, right));
        }
        map.put("900s", poemMapper.selectPoemCountByTime(900, 907));
        return map;
    }

}
