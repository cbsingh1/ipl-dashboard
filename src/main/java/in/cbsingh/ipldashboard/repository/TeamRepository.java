package in.cbsingh.ipldashboard.repository;

import org.springframework.data.repository.CrudRepository;

import in.cbsingh.ipldashboard.model.Team;

public interface TeamRepository extends CrudRepository<Team, Long> {

    Team findByTeamName(String teamName);

}
