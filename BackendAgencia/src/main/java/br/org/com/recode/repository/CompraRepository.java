package br.org.com.recode.repository;

import java.util.List;

import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.org.com.recode.model.Compra;

@Repository
public interface CompraRepository extends JpaRepository<Compra, Long>{

	@EntityGraph(attributePaths = "compra")
    List<Compra> findAll();
}
