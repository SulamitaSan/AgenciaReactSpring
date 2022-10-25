package br.org.com.recode.servicos;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import br.org.com.recode.model.Cliente;
import br.org.com.recode.repository.ClienteRepository;


@Service
public abstract class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    private ClienteRepository clienteRepository;

    public UserDetails loadUserByUsername(Long email) throws UsernameNotFoundException {
    	Cliente cliente = clienteRepository.findById(email)
            .orElseThrow(() -> new UsernameNotFoundException("Usuário não encontrado"));

        return new CustomUserDetail(cliente);
    }

}
