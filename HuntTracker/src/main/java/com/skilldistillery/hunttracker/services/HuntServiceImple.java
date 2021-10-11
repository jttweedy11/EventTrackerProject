package com.skilldistillery.hunttracker.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.hunttracker.entities.Hunt;
import com.skilldistillery.hunttracker.repositories.HuntRepository;

@Service
public class HuntServiceImple implements HuntService {

	@Autowired
	private HuntRepository huntRepo;

	@Override
	public List<Hunt> getAllHunts() {
		List<Hunt> newHunts = null;
		newHunts = huntRepo.findAll();
		return newHunts;
	}

	@Override
	public Hunt create(Hunt hunt) {
		Hunt newHunt = null;
		newHunt = huntRepo.saveAndFlush(hunt);
		return newHunt;
	}

	@Override
	public void delete(Integer huntId) {
		Optional<Hunt> delHunt = huntRepo.findById(huntId);
		huntRepo.delete(delHunt.get());

	}

	@Override
	public Hunt findById(Integer huntId) {
		Optional<Hunt> newHunt = huntRepo.findById(huntId);
		return newHunt.get();
	}

	@Override
	public Hunt replaceHunt(Integer huntId, Hunt hunt) {
		Hunt replaceHunt = hunt;
		Optional<Hunt> tempReplacementHunt = huntRepo.findById(huntId);
		Hunt toReplaceHunt = tempReplacementHunt.get();
		toReplaceHunt.setName(replaceHunt.getName());
		toReplaceHunt.setSize(replaceHunt.getSize());
		toReplaceHunt.setNotes(replaceHunt.getNotes());
		toReplaceHunt.setUrl(replaceHunt.getUrl());
		huntRepo.saveAndFlush(toReplaceHunt);

		return toReplaceHunt;
	}

	@Override
	public List<Hunt> findByName(String hname) {
		List<Hunt> newHunt = huntRepo.findByNameLike(hname);
		return newHunt;
	}
}
