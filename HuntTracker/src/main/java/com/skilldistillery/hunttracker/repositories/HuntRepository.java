package com.skilldistillery.hunttracker.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.hunttracker.entities.Hunt;

public interface HuntRepository extends JpaRepository<Hunt, Integer> {

}
