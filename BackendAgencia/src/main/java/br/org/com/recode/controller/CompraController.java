package br.org.com.recode.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.org.com.recode.model.Compra;
import br.org.com.recode.repository.CompraRepository;

@CrossOrigin(origins = "http://localhost:3000/destinos")
@RestController
public class CompraController {

	@Autowired
	private CompraRepository compraRepository;

	// get all 
	@GetMapping("/compra")
	public List<Compra> getAllCompra() {
		return compraRepository.findAll();
	}

	// create  rest api
	@PostMapping("/compra")
	public Compra createCompra(@RequestBody Compra compra) {
		return compraRepository.save(compra);
	}

	// get by id rest api
	@GetMapping("/compra/{id}")
	public Compra getCompraById(@PathVariable Long id) {
		return compraRepository.findById(id).get();
	}

	// update rest api

	@PutMapping("/compra/{id}")
	public Compra updateClient(@PathVariable Long id, @RequestBody Compra compraDetails) {
		Compra compra = compraRepository.findById(id).get();

		compra.setIDcompra(compraDetails.getIDcompra());
		compra.setIda(compraDetails.getIda());
		compra.setVolta(compraDetails.getVolta());
		compra.setValor(compraDetails.getValor());

		return compraRepository.save(compra);

	}

	// delete rest api
	@DeleteMapping("/compra/{id}")
	public void deleteCompra(@PathVariable Long id) {
		compraRepository.deleteById(id);
	}

}

