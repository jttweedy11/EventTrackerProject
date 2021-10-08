package com.skilldistillery.hunttracker.entities;

import static org.junit.jupiter.api.Assertions.assertNotNull;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class HuntTest {
	
	private static EntityManagerFactory emf;
	private EntityManager em;
	private Hunt hunt;

	@BeforeAll
	static void setUpBeforeClass() throws Exception {
		emf = Persistence.createEntityManagerFactory("JPAHuntTracker");
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
		emf.close();
	}

	@BeforeEach
	void setUp() throws Exception {
		em = emf.createEntityManager();
		hunt = em.find(Hunt.class, 1);
	}

	@AfterEach
	void tearDown() throws Exception {
		em.close();
		hunt = null;
	}

	@Test
	void test() {
		assertNotNull(hunt);
	}

}
