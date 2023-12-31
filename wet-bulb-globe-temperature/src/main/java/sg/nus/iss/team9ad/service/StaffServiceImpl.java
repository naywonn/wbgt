package sg.nus.iss.team9ad.service;

import java.util.List;
import java.util.Optional;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import sg.nus.iss.team9ad.model.Staff;
import sg.nus.iss.team9ad.repo.StaffRepo;

@Service
@Transactional(readOnly = true)
public class StaffServiceImpl implements StaffService {
	@Resource
	private StaffRepo staffRepo;

	@Override
	public List<Staff> findAllStaffs() {
		return staffRepo.findAll();
	}

	@Override
	public Optional<Staff> findStaff(int id) {
		return staffRepo.findById(id);
	}

	@Transactional(readOnly = false)
	@Override
	public Staff createStaff(Staff staff) {
		return staffRepo.save(staff);
	}

	@Transactional(readOnly = false)
	@Override
	public Staff updateStaff(Staff staff) {
		return staffRepo.save(staff);
	}

	@Transactional(readOnly = false)
	@Override
	public void deleteStaff(int id) {
		staffRepo.deleteById(id);
	}

}
