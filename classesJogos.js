class heroi{

    constructor(nome,idade , tipo)
    {   this.nome = nome; 
        this.idade = idade;
        this.tipo = tipo;

    } 



    atacar () {
    
        let ataque;
    
    
        switch(this.tipo){

            case "mago":
            ataque = "magia"; 
            break

            case "guerreiro":
            ataque = "espada"; 
            break

            case "monje":
            ataque = "artes marciais"; 
            break

            case "ninja":
            ataque = "shuriken"; 
            break

            default: 
            ataque = "ataque padrao" 
            break

            
        }

        console.log(`o ${this.tipo} atacou usando ${ataque}`);
    
    
    
    }
    
}

const heroi1 = new heroi('geralt', 90, 'guerreiro');
heroi1.atacar();

const heroi2 = new heroi('Gandalf', 24.000, 'mago');
heroi2.atacar();


