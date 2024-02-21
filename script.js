function greet(firstname, lastname, language = 'en'){
    console.log(firstname);
    console.log(lastname);
    console.log(language);

}

greet();
greet('John');
greet('John', 'Doe');
greet('John', 'Doe', 'es');