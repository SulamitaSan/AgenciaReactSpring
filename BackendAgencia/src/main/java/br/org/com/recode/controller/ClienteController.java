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

import br.org.com.recode.model.Cliente;
import br.org.com.recode.repository.ClienteRepository;

@CrossOrigin(origins = "http://localhost:3000/cadastro")
@RestController
public class ClienteController {

	@Autowired
	private ClienteRepository clienteRepository;

	// get all clients
	@GetMapping("/cliente")
	public List<Cliente> getAllCliente() {
		return clienteRepository.findAll();
	}

	// create client rest api
	@PostMapping("/clientes")
	public Cliente createCliente(@RequestBody Cliente cliente) {
		return clienteRepository.save(cliente);
	}

	// get client by id rest api
	@GetMapping("/cliente/{id}")
	public Cliente getClienteById(@PathVariable Long id) {
		return clienteRepository.findById(id).get();
	}

	// update client rest api

	@PutMapping("/cliente/{id}")
	public Cliente updateCliente(@PathVariable Long id, @RequestBody Cliente clienteDetails) {
		Cliente cliente = clienteRepository.findById(id).get();

		cliente.setNome(clienteDetails.getNome());
		cliente.setCpf(clienteDetails.getCpf());
		cliente.setEmail(clienteDetails.getEmail());
		cliente.setDataNascimento(clienteDetails.getDataNascimento());
		cliente.setTelefone(clienteDetails.getTelefone());
		cliente.setEndereco(clienteDetails.getEndereco());
		

		return clienteRepository.save(cliente);

	}

	// delete client rest api
	@DeleteMapping("/clients/{id}")
	public void deleteClient(@PathVariable Long id) {
		clienteRepository.deleteById(id);
	}

}
