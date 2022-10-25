package br.org.com.recode.repository;

import java.util.List;

import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.org.com.recode.model.Passagem;

@Repository
public interface PassagemRepository extends JpaRepository<Passagem, Long>{

	@EntityGraph(attributePaths = "passagem")
    List<Passagem> findAll();
	
}
