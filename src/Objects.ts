type Employee = {
    readonly id : number,
    name : string,
    age : number,
    fax? : string,
    returnName : () => string
}

let employee : Employee = {
    id : 1,
    name : "John",
    age : 30,
    fax : "123-456-7890",
    returnName : function() {
        return this.name;
    }
}