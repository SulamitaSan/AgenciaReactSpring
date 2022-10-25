package br.org.com.recode.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "passagem")
public class Passagem {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	
    private int id_passagem;

    private String cruzeiro_passagem;

    private String aviao_passagem;
    
    private double valor_passagem;

    private String compra;

    public Passagem(int id_passagem, String cruzeiro_passagem, String aviao_passagem, double valor_passagem) {
    	this.id_passagem = id_passagem;
    	this.cruzeiro_passagem = cruzeiro_passagem;
		this.aviao_passagem = aviao_passagem;
		this.valor_passagem = valor_passagem;
	} 

	public int getId_passagem() {
        return this.id_passagem;
    }

    public void setId_passagem(int id_passagem) {
        this.id_passagem = id_passagem;
    }

    public String getCruzeiro_passagem() {
        return this.cruzeiro_passagem;
    }
 
    public void setCruzeiro_passagem(String cruzeiro_passagem) {
        this.cruzeiro_passagem = cruzeiro_passagem;
    }

    public String getAviao_passagem() {
        return this.aviao_passagem;
    }

    public void setAviao_passagem(String aviao_passagem) {
        this.aviao_passagem = aviao_passagem;
    }

    public double getValor_passagem() {
        return this.valor_passagem;
    }

    public void setValor_passagem(double valor_passagem) {
        this.valor_passagem = valor_passagem;
    }

    public String getCompra() {
        return this.compra;
    }

    public void setCompra(String string) {
        this.compra = string;
    }
   
}

