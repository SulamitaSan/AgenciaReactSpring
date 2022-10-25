package br.org.com.recode.model;

import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import org.springframework.format.annotation.DateTimeFormat;


@Entity
@Table(name = "compra")
public class Compra {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)

	@DateTimeFormat(pattern = "dd/MM/yyyy HH:mm")
    private Date ida;
    
	@DateTimeFormat(pattern = "dd/MM/yyyy HH:mm")
    private Date volta;
	@Column(nullable = false, length = 10, unique = false)
    private double valor;
	@Column(nullable = false, length = 3, unique = true)
    private int IDcompra;
	@Column(nullable = false, length = 3, unique = false)
    private int IDcliente;
	@Column(nullable = false, length = 3, unique = false)
    private int IDpassagem; 
    

	public Date getIda() {
        return this.ida;
    }

    public void setIda(Date ida) {
        this.ida = ida;
    }

    public Date getVolta() {
        return this.volta;
    }
    
    public void setVolta(Date volta) {
        this.volta = volta;
    }

    public double getValor() {
        return this.valor;
    }

    public void setValor(double valor) {
        this.valor = valor;
    }

    public int getIDcompra() {
        return this.IDcompra;
    }
    
    public void setIDcompra(int compra) {
        this.IDcompra = compra;
    }
 
    public int getIDcliente() {
        return this.IDcliente;
    }

    public void setIDcliente(Integer IDcliente) {
        this.IDcliente = IDcliente;
    }
    
    public int getIDpassagem() {
        return this.IDpassagem;
    }

    public void setIDpassagem(int IDpassagem) {
        this.IDpassagem = IDpassagem;
    }

}
