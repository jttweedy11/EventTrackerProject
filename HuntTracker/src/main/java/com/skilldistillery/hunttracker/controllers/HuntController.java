package com.skilldistillery.hunttracker.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.hunttracker.entities.Hunt;
import com.skilldistillery.hunttracker.services.HuntService;

@RestController
@RequestMapping("api")
public class HuntController {

	@Autowired
	private HuntService huntServ;

	@GetMapping("hunts")
	private List<Hunt> huntIndex() {
		return huntServ.getAllHunts();
	};

	@GetMapping("hunts/{huntId}")
	private Hunt show(@PathVariable Integer huntId) {
		Hunt newHunt = huntServ.findById(huntId);
		return newHunt;
	}

	@PostMapping("hunts/create")
	private Hunt create(@RequestBody Hunt hunt) {
		Hunt newHunt = null;
		newHunt = huntServ.create(hunt);
		return newHunt;
	};

	@DeleteMapping("hunts/delete/{huntId}")
	private void delete(@PathVariable Integer huntId) {
		huntServ.delete(huntId);
	}

	@PutMapping("hunts/{huntId}")
	public Hunt replaceHunt(@PathVariable Integer huntId, @RequestBody Hunt hunt) {
		Hunt newHunt = huntServ.replaceHunt(huntId, hunt);
		return newHunt;
	}

}
