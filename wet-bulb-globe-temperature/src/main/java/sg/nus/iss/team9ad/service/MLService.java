package sg.nus.iss.team9ad.service;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.client.RestTemplate;

@Service
public class MLService {

    @Autowired
    private RestTemplate restTemplate; // You can use RestTemplate to make HTTP requests
    public MLService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }


    public String getAllCurrentDataFromML() {
        String mlApiUrl = "http://localhost:8081/all_current";
        return restTemplate.getForObject(mlApiUrl, String.class);
    }

    // Add other methods to interact with the machine learning model as needed
}
