function greet(firstname, lastname, language = 'en'){
    console.log(firstname);
    console.log(lastname);
    console.log(language);
    console.log('hola');
    console.log('hola hola');
    console.log('chau');

}

greet();
greet('John');
greet('John', 'Doe');
greet('John', 'Doe', 'es');