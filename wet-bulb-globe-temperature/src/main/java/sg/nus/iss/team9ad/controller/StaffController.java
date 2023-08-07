package sg.nus.iss.team9ad.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import sg.nus.iss.team9ad.model.Staff;
import sg.nus.iss.team9ad.service.StaffService;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class StaffController {

	@Autowired
	private StaffService staffService;

	@GetMapping("/staffs")
	public List<Staff> getAllStaffs() {
		return staffService.findAllStaffs();
	}

	@GetMapping("/staffs/{id}")
	public ResponseEntity<?> getStaffById(@PathVariable("id") Integer id) {
	    if (id == null) {
	        // Handle the case when id is null, e.g., return a ResponseEntity with an error message
	        return ResponseEntity.badRequest().body("Staff ID is missing.");
	    }

	    Optional<Staff> optStaff = staffService.findStaff(id);

	    if (optStaff.isPresent()) {
	        Staff staff = optStaff.get();
	        return new ResponseEntity<Staff>(staff, HttpStatus.OK);
	    } else {
	        return new ResponseEntity<>("Staff not found.", HttpStatus.NOT_FOUND);
	    }
	}

	@PostMapping("/staffs")
	public ResponseEntity<Staff> createStaff(@RequestBody Staff inStaff) {
	    try {
	        Staff retStaff = staffService.createStaff(inStaff);
	        return new ResponseEntity<Staff>(retStaff, HttpStatus.CREATED);
	    } catch (Exception e) {
	        return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
	    }
	}


	@PutMapping("/staffs/{id}")
	public ResponseEntity<Staff> editStaff(@PathVariable("id") Integer id, @RequestBody Staff inStaff) {
		Optional<Staff> optStaff = staffService.findStaff(id);

		if (optStaff.isPresent()) {
			Staff staff = optStaff.get();

			staff.setName(inStaff.getName());
			staff.setTitle(inStaff.getTitle());
			staff.setEmail(inStaff.getEmail());

			Staff updatedStaff = staffService.updateStaff(staff);

			return new ResponseEntity<Staff>(updatedStaff, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@DeleteMapping("/staffs/{id}")
	public ResponseEntity<HttpStatus> deleteStaff(@PathVariable("id") Integer id) {
		try {
			staffService.deleteStaff(id);
			return new ResponseEntity<HttpStatus>(HttpStatus.NO_CONTENT);
		} catch (Exception e) {
			return new ResponseEntity<HttpStatus>(HttpStatus.EXPECTATION_FAILED);
		}
	}

}
