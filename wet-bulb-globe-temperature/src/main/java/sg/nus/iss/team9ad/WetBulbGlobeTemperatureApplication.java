package sg.nus.iss.team9ad;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;

import sg.nus.iss.team9ad.model.Staff;
import sg.nus.iss.team9ad.repo.StaffRepo;
import org.springframework.web.client.RestTemplate;

@SpringBootApplication
@ComponentScan(basePackages = "sg.nus.iss.team9ad")
public class WetBulbGlobeTemperatureApplication {

	public static void main(String[] args) {
		SpringApplication.run(WetBulbGlobeTemperatureApplication.class, args);
	}

    @Bean
    RestTemplate restTemplate(RestTemplateBuilder builder) {
        return builder.build();
    }

	@Bean
	CommandLineRunner loadData(StaffRepo staffRepo) {
		return (args) -> {
			// Add a few course applications
			Staff staff1 = new Staff();
			staff1.setName("John");
			staff1.setTitle("Engineer");
			staff1.setEmail("john@gmail.com");

			staffRepo.save(staff1);

			Staff staff2 = new Staff();
			staff2.setName("John");
			staff2.setTitle("Engineer");
			staff2.setEmail("john@gmail.com");

			staffRepo.save(staff2);

		};

	}
}
