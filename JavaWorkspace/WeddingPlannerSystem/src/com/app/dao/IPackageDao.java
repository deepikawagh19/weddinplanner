package com.app.dao;

import java.util.List;


import com.app.pojos.Packages;

public interface IPackageDao {
	public Integer addNewPackage(Packages p);

	List<Packages> showPackages();
}
