package com.example.poem_visualization.entity;

public class PoetLife {

   private int birthYear;
   private int deathYear;

    public PoetLife(int birthYear, int deathYear) {
        this.birthYear = birthYear;
        this.deathYear = deathYear;
    }

    public int getBirthYear() {
        return birthYear;
    }

    public void setBirthYear(int birthYear) {
        this.birthYear = birthYear;
    }

    public int getDeathYear() {
        return deathYear;
    }

    public void setDeathYear(int deathYear) {
        this.deathYear = deathYear;
    }

    @Override
    public String toString() {
        return "PoetLife{" +
                "birthYear=" + birthYear +
                ", deathYear=" + deathYear +
                '}';
    }
}
