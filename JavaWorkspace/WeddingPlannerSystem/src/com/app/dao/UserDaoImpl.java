package com.app.dao;

import java.util.List;
import java.util.Random;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.app.pojos.City;
import com.app.pojos.Packages;
import com.app.pojos.User;
@CrossOrigin(allowedHeaders = "*")
@Service
@Transactional
public class UserDaoImpl implements IUserDao{
	@Autowired
	SessionFactory sf;

	@Override
	public Integer registerUser(User user) {
		
		
		return  (Integer) sf.getCurrentSession().save(user);
		
	}

	@Override
	public List<User> allUser() {
		String jpql="select u from User u";
		// TODO Auto-generated method stub
		return sf.getCurrentSession().createQuery(jpql,User.class).getResultList() ;
	}

	@Override
	public User login(User user) {
		String jpql="select u from User u where u.email=:em and u.password=:pass";
		
		return sf.getCurrentSession().createQuery(jpql,User.class).setParameter("em",user.getEmail()).setParameter("pass", user.getPassword()).getSingleResult();
	}

	public User validateUser(String email, String pass) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public User findByEmail(String em) {
		String jpql = "select u from User u where u.email=:em";
		return sf.getCurrentSession().createQuery(jpql,User.class).setParameter("email",em).getSingleResult();
	}

	@Override
	public int generateOtp() {
		Random random = new Random();
		int num = random.nextInt(99999) + 99999;
		if (num < 100000 || num > 999999) 
		{
			num = random.nextInt(99999) + 99999;
			if (num < 100000 || num > 999999)
			{
				System.out.println("Unable to generate PIN at this time..");
			}
		}
		return num;
	}

	public City searchCity(String cityName)
	{
		return sf.getCurrentSession().createQuery("select c from City c where c.cityName=:cn",City.class).setParameter("cn",cityName).getSingleResult();
	}
	
	@Override
	public List<Packages> search(Integer cityid) {
		String str="select p from Packages p where cityId=:nm";
		System.out.println(cityid);
		List<Packages>list=sf.getCurrentSession().createQuery(str,Packages.class).setParameter("nm", cityid).getResultList();
		//System.out.println(""+list);
		return list;
	}
	
	@Override
	public List<City> getAllCities() {
		return sf.getCurrentSession().createQuery("select c from City c", City.class).getResultList();
	}
}	
	
	
	
	

	

