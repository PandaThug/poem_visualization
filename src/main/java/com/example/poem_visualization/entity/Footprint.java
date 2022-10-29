package com.example.poem_visualization.entity;

public class Footprint {

    private int id;
    private String name;  // 诗人姓名
    private int index;  // 根据index来对应时间——以十年划分
    private String place;  // 诗人当时所在位置

    public Footprint(int id, String name, int index, String place) {
        this.id = id;
        this.name = name;
        this.index = index;
        this.place = place;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getIndex() {
        return index;
    }

    public void setIndex(int index) {
        this.index = index;
    }

    public String getPlace() {
        return place;
    }

    public void setPlace(String place) {
        this.place = place;
    }

    @Override
    public String toString() {
        return "Footprint{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", index=" + index +
                ", place='" + place + '\'' +
                '}';
    }

}
