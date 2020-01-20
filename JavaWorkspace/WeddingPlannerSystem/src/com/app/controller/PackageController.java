package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dao.IPackageDao;
import com.app.pojos.Packages;

@CrossOrigin("*")
@RestController
@RequestMapping("/planner")
public class PackageController {
	@Autowired
	private IPackageDao dao;

	@PostMapping("/package")
	public Integer addNewPackages(@RequestBody Packages p) {

		System.out.println(p);
		return dao.addNewPackage(p);
	}

	@GetMapping("/showpackage")
	public List<Packages> showPackage() {
		return dao.showPackages();
	}
}
