package com.skilldistillery.hunttracker.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.hunttracker.entities.Hunt;

public interface HuntRepository extends JpaRepository<Hunt, Integer> {

	List<Hunt> findByNameLike(String hname);
}
