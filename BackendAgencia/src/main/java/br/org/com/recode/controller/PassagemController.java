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

import br.org.com.recode.model.Passagem;
import br.org.com.recode.repository.PassagemRepository;

@CrossOrigin(origins = "http://localhost:3000/promocoes")
@RestController
public class PassagemController {

	@Autowired
	private PassagemRepository passagemRepository;

	// get all passagem
	@GetMapping("/passagem")
	public List<Passagem> getAllPassagem() {
		return passagemRepository.findAll();
	}

	// create passagem rest api
	@PostMapping("/passagem")
	public Passagem createPassagem(@RequestBody Passagem passagem) {
		return passagemRepository.save(passagem);
	}

	// get passagem by id rest api
	@GetMapping("/promo/{id}")
	public Passagem getPassagemById(@PathVariable Long id) {
		return passagemRepository.findById(id).get();
	}

	// update passagem rest api

	@PutMapping("/promo/{id}")
	public Passagem updateClient(@PathVariable Long id, @RequestBody Passagem passagemDetails) {
		Passagem passagem = passagemRepository.findById(id).get();

		passagem.setId_passagem(passagemDetails.getId_passagem());
		passagem.setCruzeiro_passagem(passagemDetails.getCruzeiro_passagem());
		passagem.setAviao_passagem(passagemDetails.getAviao_passagem());
		passagem.setValor_passagem(passagemDetails.getValor_passagem());

		return passagemRepository.save(passagem);

	}

	// delete client rest api
	@DeleteMapping("/promo/{id}")
	public void deletePassagem(@PathVariable Long id) {
		passagemRepository.deleteById(id);
	}

}

