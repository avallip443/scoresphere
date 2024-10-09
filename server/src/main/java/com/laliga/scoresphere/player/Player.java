package com.laliga.scoresphere.player;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

// entity class for player - maps to player
@Entity
@Table(name="player_data")
public class Player {
    @Id  // private key is name
    @Column(name="name", unique=true)

    private String name;
    private String nation;
    private String team;
    private String position;
    private Integer age;
    private Integer matchesplayed;
    private Integer goals;
    private Integer assists;
    private Integer yellowcards;
    private Integer redcards;

    public Player() {
    }

    public Player(String name, String nation, String team, String position, Integer age, Integer matchesplayed, Integer goals, Integer assists, Integer yellowcards, Integer redcards) {
        this.name = name;
        this.nation = nation;
        this.team = team;
        this.position = position;
        this.age = age;
        this.matchesplayed = matchesplayed;
        this.goals = goals;
        this.assists = assists;
        this.yellowcards = yellowcards;
        this.redcards = redcards;
    }

    public Player(String name) {
        this.name = name;
    }

    // Getters
    public String getName() {
        return name;
    }

    public String getNation() {
        return nation;
    }

    public String getTeam() {
        return team;
    }

    public String getPosition() {
        return position;
    }

    // Setters
    public void setName(String name) {
        this.name = name;
    }

    public void setNation(String nation) {
        this.nation = nation;
    }

    public void setTeam(String team) {
        this.team = team;
    }

    public void setPosition(String position) {
        this.position = position;
    }
}
