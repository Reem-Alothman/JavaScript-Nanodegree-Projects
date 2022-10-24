    let Dinos = [
    {
        "species": "Triceratops",
        "weight": 13000,
        "height": 114,
        "diet": "herbavor",
        "where": "North America",
        "when": "Late Cretaceous",
        "pic": "images/triceratops.png"
    },
    {
        "species": "Tyrannosaurus Rex",
        "weight": 11905,
        "height": 144,
        "diet": "carnivor",
        "where": "North America",
        "when": "Late Cretaceous",
        "pic": "images/tyrannosaurus rex.png"
    },
    {
        "species": "Anklyosaurus",
        "weight": 10500,
        "height": 55,
        "diet": "herbavor",
        "where": "North America",
        "when": "Late Cretaceous",
        "pic": "images/anklyosaurus.png"
    },
    {
        "species": "Brachiosaurus",
        "weight": 70000,
        "height": "372",
        "diet": "herbavor",
        "where": "North America",
        "when": "Late Jurasic",
        "pic": "images/brachiosaurus.png"
    },
    {
        "species": "Stegosaurus",
        "weight": 11600,
        "height": 79,
        "diet": "herbavor",
        "where": "North America, Europe, Asia",
        "when": "Late Jurasic to Early Cretaceous",
        "pic": "images/stegosaurus.png"
    },
    {
        "species": "Elasmosaurus",
        "weight": 16000,
        "height": 59,
        "diet": "carnivor",
        "where": "North America",
        "when": "Late Cretaceous",
        "pic": "images/elasmosaurus.png"
    },
    {
        "species": "Pteranodon",
        "weight": 44,
        "height": 20,
        "diet": "carnivor",
        "where": "North America",
        "when": "Late Cretaceous",
        "pic": "images/pteranodon.png"
    }

    ]

    let facts = ["Actually a flying reptile, the Pteranodon is not a dinosaur.",
                "Elasmosaurus was a marine reptile first discovered in Kansas.",
                "The Stegosaurus had between 17 and 22 seperate places and flat spines.",
                "An asteroid was named 9954 Brachiosaurus in 1991.",
                "Anklyosaurus survived for approximately 135 million years.",
                "The largest known skull measures in at 5 feet long.",
                "First discovered in 1889 by Othniel Charles Marsh"
    ]

    let pigeon = (function Pigeon(species, diet, height, weight, where, when){
        return {
            species: "Pigeon",
            weight: 0.5,
            height: 9,
            diet: "herbavor",
            where: "World Wide",
            when: "Holocene",
            fact: "All birds are living dinosaurs.",
            pic: "images/pigeon.png"
        }
    })();

    // Create Dino Constructor
    function Dino(species, diet, height, weight, where, when, pic){
        
        this.species = species;
        this.diet = diet;
        this.height = height; 
        this.weight = weight;
        this.where =  where;
        this.when = when;
        this.pic = pic
        let fact = "";

    }

    // Create Dino Objects
    var dinos_objects = [];
    for(var i=0; i<Dinos.length; i++){
        dinos_objects[i] = new Dino(Dinos[i].species,
                            Dinos[i].diet,
                            Dinos[i].height,
                            Dinos[i].weight,
                            Dinos[i].where,
                            Dinos[i].when,
                            Dinos[i].pic
            );
    }

    // Create Human Object
    function Human(name, height, weight, diet, pic){
        this.name = name;
        this.height = height;
        this.weight = weight;
        this.diet = diet;
        this.pic = pic;
    }

    // Create Dino Compare Method 1
    Dino.prototype.compareHeight = function (){
        let result;
        if (this.height > human.height){
            result = `${this.species} is taller than ${human.name}`;
        }
        else if(this.height < human.height){
            result = `${this.species} is shorter than ${human.name}`;
        }
        else{
            result = `${this.species} and ${human.name} have the same height `;
        }
        return result;
    }
    
    // Create Dino Compare Method 2
    Dino.prototype.compareWeight = function (){
        let result;
        if (this.weight > human.weight){
            result = `${this.species} is heavier than ${human.name}`;
        }
        else if(this.weight < human.weight){
            result = `${this.species} is lighter than ${human.name}`;
        }
        else{
            result = `${this.species} and ${human.name} have the same weight `;
        }
        return result;
    }
    
    // Create Dino Compare Method 3
    Dino.prototype.compareDiet = function (){
        if (this.diet == human.diet){
            return `${this.species} just like ${human.name}`;
        }
        else{
            return `${this.species} is a ${this.diet} while ${human.name} is a ${human.diet}`;
        }
    }


    let human;

    document.getElementById('btn').addEventListener('click', function() {
        // Get form data
        let name = document.getElementById('name').value;
        let feet = parseFloat(document.getElementById('feet').value);
        let inches = parseFloat(document.getElementById('inches').value);
        let height = (feet * 12) + inches;
        let weight = parseFloat(document.getElementById('weight').value);
        let diet = document.getElementById('diet').value;
        human = new Human(name, height, weight, diet, "images/human.png");

        // Remove the form from screen
        form = document.getElementById("dino-compare");
        form.remove()

        // generate random facts
        for (let i=0; i<dinos_objects.length; i++){
            new_facts = facts;
            new_facts.push(dinos_objects[i].compareHeight(human));
            new_facts.push(dinos_objects[i].compareDiet(human));
            new_facts.push(dinos_objects[i].compareWeight(human));

            dinos_objects[i].fact = new_facts[Math.round(Math.random() * new_facts.length)];
            console.log(Math.round(Math.random() * new_facts.length))
        }

        console.log(human);
        console.log(dinos_objects[0]);

        grid = document.getElementById("grid");

        for (let i=0; i<7; i++){
            var div = document.createElement('div');
            div.className = "grid-item";
            var title = document.createElement("h3");

            if (i == 4){

                title.innerText = human.name;
                var img = document.createElement("img");
                img.setAttribute("src", human.pic);
                
                div.appendChild(title);
                div.appendChild(img);
            }
            else {

                title.innerText = dinos_objects[i].species;

                var img = document.createElement("img");
                img.setAttribute("src", dinos_objects[i].pic);

                var p = document.createElement("p");
                p.innerText = dinos_objects[i].fact;

                div.appendChild(title);
                div.appendChild(img);
                div.appendChild(p);
            }

            grid.appendChild(div);
        }

        // -------------------  dino 5 ---------------------
        var div = document.createElement('div');
        div.className = "grid-item";
        var title = document.createElement("h3");

        title.innerText = dinos_objects[5].species;
        
        var img = document.createElement("img");
        img.setAttribute("src", dinos_objects[4].pic);

        var p = document.createElement("p");
        p.innerText = dinos_objects[4].fact;

        div.appendChild(title);
        div.appendChild(img);
        div.appendChild(p);

        grid.appendChild(div);

        // ------------------ pigeon ------------------

        var div1 = document.createElement('div');
        div1.className = "grid-item";

        var title1 = document.createElement("h3");
        title1.innerText = pigeon.species;

        var img1 = document.createElement("img");
        img1.setAttribute("src", pigeon.pic);

        var p1 = document.createElement("p");
        p1.innerText = pigeon.fact;

        div1.appendChild(title1);
        div1.appendChild(img1);
        div1.appendChild(p1);

        grid.appendChild(div1);
        
    });
    
    
