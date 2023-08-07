package sg.nus.iss.team9ad.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import sg.nus.iss.team9ad.service.MLService;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class MLController {

    @Autowired
    private MLService mlService;

    @GetMapping("/all_current")
    public ResponseEntity<Object> getAllCurrentData() {
        Object mlData = mlService.getAllCurrentDataFromML(); // Change the type accordingly

        // Here, mlData should be a JSON object or a list of JSON objects
        
        // You can also use a custom class to define the structure of the response
        // For example: List<MyData> mlData = mlService.getAllCurrentDataFromML();
        
        return ResponseEntity.ok(mlData);
    }

    // Add other endpoints to interact with the machine learning model through the service
}
