package com.example.poem_visualization.controller;

import com.example.poem_visualization.service.PoemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

@Controller
public class PoemController {

    // 使用构造器注入
    private final PoemService poemService;
    @Autowired
    public PoemController(PoemService poemService) {
        this.poemService = poemService;
    }

    // 根据时间获取诗歌意象——名称和次数
    @RequestMapping(path = "/poem/images", method = RequestMethod.GET, params = {"beginTime","endTime"})
    @ResponseBody
    public Map<String, Integer> getImages(String beginTime, String endTime) {
        List<Map<String, Integer>> images = poemService.findImagesByTime(Integer.parseInt(beginTime),
                Integer.parseInt(endTime));
        Map<String, Integer> map = new LinkedHashMap<>();
        if (images != null) {
            for (Map<String, Integer> image : images) {
                for (String key : image.keySet()) {
                    Integer value = Integer.parseInt(String.valueOf(image.get(key)));
                    map.put(key, value);
                }
            }
        }
        return map;
    }

    // 根据诗人姓名获取诗歌意象——名称和次数
    @RequestMapping(path = "/poem/images", method = RequestMethod.GET, params = {"name"})
    @ResponseBody
    public Map<String, Integer> getImage(String name) {
        List<Map<String, Integer>> images = poemService.findImagesByPoet(name);
        Map<String, Integer> map = new HashMap<>();
        if (images != null) {
            for (Map<String, Integer> image : images) {
                for (String key : image.keySet()) {
                    Integer value = Integer.parseInt(String.valueOf(image.get(key)));
                    map.put(key, value);
                }
            }
        }
        return map;
    }

    // 根据时间和诗人姓名获取诗歌意象——名称和次数
    @RequestMapping(path = "/poem/images", method = RequestMethod.GET, params = {"name", "beginTime", "endTime"})
    @ResponseBody
    public Map<String, Integer> getImages(String name, String beginTime, String endTime) {
        List<Map<String, Integer>> images = poemService.findImagesByPoetAndTime(name, Integer.parseInt(beginTime),
                Integer.parseInt(endTime));
        Map<String, Integer> map = new HashMap<>();
        if (images != null) {
            for (Map<String, Integer> image : images) {
                for (String key : image.keySet()) {
                    Integer value = Integer.parseInt(String.valueOf(image.get(key)));
                    map.put(key, value);
                }
            }
        }
        return map;
    }

    // 获取全部诗歌意象——名称和次数
    @RequestMapping(path = "/poem/images", method = RequestMethod.GET)
    @ResponseBody
    public Map<String, Integer> getImages() {
        List<Map<String, Integer>> images = poemService.findImages();
        Map<String, Integer> map = new HashMap<>();
        if (images != null) {
            for (Map<String, Integer> image : images) {
                for (String key : image.keySet()) {
                    Integer value = Integer.parseInt(String.valueOf(image.get(key)));
                    map.put(key, value);
                }
            }
        }
        return map;
    }

    // 根据时间获取诗歌情感——名称和次数
    @RequestMapping(path = "/poem/emo", method = RequestMethod.GET, params = {"beginTime", "endTime"})
    @ResponseBody
    public Map<String, Integer> getEmo(String beginTime, String endTime) {
        List<Map<String, Integer>> emos = poemService.findEmoByTime(Integer.parseInt(beginTime),
                Integer.parseInt(endTime));
        Map<String, Integer> map = new HashMap<>();
        if (emos != null) {
            for (Map<String, Integer> emo : emos) {
                for (String key : emo.keySet()) {
                    Integer value = Integer.parseInt(String.valueOf(emo.get(key)));
                    map.put(key, value);
                }
            }
        }
        return map;
    }

    // 根据诗人姓名获取诗歌情感——名称和次数
    @RequestMapping(path = "/poem/emo", method = RequestMethod.GET, params = {"name"})
    @ResponseBody
    public Map<String, Integer> getEmo(String name) {
        List<Map<String, Integer>> emos = poemService.findEmoByPoet(name);
        Map<String, Integer> map = new HashMap<>();
        if (emos != null) {
            for (Map<String, Integer> emo : emos) {
                for (String key : emo.keySet()) {
                    Integer value = Integer.parseInt(String.valueOf(emo.get(key)));
                    map.put(key, value);
                }
            }
        }
        return map;
    }

    // 根据时间和诗人姓名获取诗歌情感——名称和次数
    @RequestMapping(path = "/poem/emo", method = RequestMethod.GET, params = {"name", "beginTime", "endTime"})
    @ResponseBody
    public Map<String, Integer> getEmo(String name, String beginTime, String endTime) {
        List<Map<String, Integer>> emos = poemService.findEmoByPoetAndTime(name, Integer.parseInt(beginTime),
                Integer.parseInt(endTime));
        Map<String, Integer> map = new HashMap<>();
        if (emos != null) {
            for (Map<String, Integer> emo : emos) {
                for (String key : emo.keySet()) {
                    Integer value = Integer.parseInt(String.valueOf(emo.get(key)));
                    map.put(key, value);
                }
            }
        }
        return map;
    }

    // 获取全部诗歌情感——名称和次数
    @RequestMapping(path = "/poem/emo", method = RequestMethod.GET)
    @ResponseBody
    public Map<String, Integer> getEmo() {
        List<Map<String, Integer>> emos = poemService.findEmo();
        Map<String, Integer> map = new HashMap<>();
        if (emos != null) {
            for (Map<String, Integer> emo : emos) {
                for (String key : emo.keySet()) {
                    Integer value = Integer.parseInt(String.valueOf(emo.get(key)));
                    map.put(key, value);
                }
            }
        }
        return map;
    }

    // 获取包含指定意象的不同情感的诗歌数量——通过意象词、诗人姓名、时间查询
    @RequestMapping(path = "/images/poem", method = RequestMethod.GET, params = {"images","name","beginTime","endTime","num"})
    @ResponseBody
    public Map<String, Integer> getPoemImagesCount(String images, String name,
                                                   String beginTime, String endTime, Integer num) {
        List<Map<String, Integer>> counts = poemService
                .findPoemImagesCountByNameAndTime(name,Integer.parseInt(beginTime), Integer.parseInt(endTime), images);
        Map<String, Integer> map = new HashMap<>();
        if (counts != null) {
            for (Map<String, Integer> count : counts) {
                for (String key : count.keySet()) {
                    Integer value = Integer.parseInt(String.valueOf(count.get(key)));
                    map.put(key, value);
                }
            }
        }
        map.put("num", num);
        return map;
    }

    // 获取包含指定意象的不同情感的诗歌数量——通过意象词、时间查询
    @RequestMapping(path = "/images/poem", method = RequestMethod.GET, params = {"images","beginTime","endTime","num"})
    @ResponseBody
    public Map<String, Integer> getPoemImagesCount(String images, String beginTime, String endTime, Integer num) {
        List<Map<String, Integer>> counts = poemService
                .findPoemImagesCountByTime(Integer.parseInt(beginTime), Integer.parseInt(endTime), images);
        Map<String, Integer> map = new HashMap<>();
        if (counts != null) {
            for (Map<String, Integer> count : counts) {
                for (String key : count.keySet()) {
                    Integer value = Integer.parseInt(String.valueOf(count.get(key)));
                    map.put(key, value);
                }
            }
        }
        map.put("num", num);
        return map;
    }

    // 获取包含指定意象的不同情感的诗歌数量——通过意象词、诗人姓名查询
    @RequestMapping(path = "/images/poem", method = RequestMethod.GET, params = {"images","name","num"})
    @ResponseBody
    public Map<String, Integer> getPoemImagesCount(String images, String name, Integer num) {
        List<Map<String, Integer>> counts = poemService.findPoemImagesCountByName(name, images);
        Map<String, Integer> map = new HashMap<>();
        if (counts != null) {
            for (Map<String, Integer> count : counts) {
                for (String key : count.keySet()) {
                    Integer value = Integer.parseInt(String.valueOf(count.get(key)));
                    map.put(key, value);
                }
            }
        }
        map.put("num", num);
        return map;
    }

    // 获取包含指定意象的不同情感的诗歌数量——通过意象词查询
    @RequestMapping(path = "/images/poem", method = RequestMethod.GET, params = {"images","num"})
    @ResponseBody
    public Map<String, Integer> getPoemImagesCount(String images, Integer num) {
        List<Map<String, Integer>> counts = poemService.findPoemImagesCount(images);
        Map<String, Integer> map = new HashMap<>();
        if (counts != null) {
            for (Map<String, Integer> count : counts) {
                for (String key : count.keySet()) {
                    Integer value = Integer.parseInt(String.valueOf(count.get(key)));
                    map.put(key, value);
                }
            }
        }
        map.put("num", num);
        return map;
    }

    // 按时间查询此时间范围内每一年创作的诗歌数量
    @RequestMapping(path = "/count", method = RequestMethod.GET, params = {"beginTime","endTime"})
    @ResponseBody
    public Map<String, Integer> getPoemCountByTime(String beginTime, String endTime) {
        return poemService.findPoemCountByTime(Integer.parseInt(beginTime), Integer.parseInt(endTime));
    }

    // 按时间和诗人姓名查询此时间范围内每一年指定诗人创作的诗歌数量
    @RequestMapping(path = "/count", method = RequestMethod.GET, params = {"name","beginTime","endTime"})
    @ResponseBody
    public Map<String, Integer> getPoemCountByTime(String name, String beginTime, String endTime) {
        return poemService.findPoemCountByTimeAndName(name, Integer.parseInt(beginTime), Integer.parseInt(endTime));
    }

    // 按诗人查询每十年诗歌创作的数量
    @RequestMapping(path = "/count", method = RequestMethod.GET, params = {"name"})
    @ResponseBody
    public Map<String, Integer> getPoemCountByName(String name) {
        return poemService.findPoemCountByName(name);
    }

    // 查询每十年间诗歌创作的数量
    @RequestMapping(path = "/count", method = RequestMethod.GET)
    @ResponseBody
    public Map<String, Integer> getPoemCount() {
        return poemService.findPoemCount();
    }

}
