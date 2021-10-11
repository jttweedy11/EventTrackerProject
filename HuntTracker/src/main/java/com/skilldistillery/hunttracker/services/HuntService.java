package com.skilldistillery.hunttracker.services;

import java.util.List;

import com.skilldistillery.hunttracker.entities.Hunt;

public interface HuntService {

	List<Hunt> getAllHunts();

	Hunt create(Hunt hunt);

	void delete(Integer huntId);

	Hunt findById(Integer huntId);

	Hunt replaceHunt(Integer huntId, Hunt hunt);

}
