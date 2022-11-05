package com.example.poem_visualization.utils;

import org.springframework.stereotype.Component;

@Component
public class TimeIntervalUtil {

    // 返回两个时间点的间隔类型
    public static int timeInterval(int beginTime, int endTime) {
        if (endTime - beginTime + 1 <= 30) {
            return 1;
        } else if (endTime - beginTime + 1 > 30 && endTime - beginTime + 1 <= 100) {
            return 2;
        } else {
            return 3;
        }
    }

}
