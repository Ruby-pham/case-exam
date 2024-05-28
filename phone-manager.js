class PhoneManager{
    listPhone;
    name;
    constructor(nameInput) {

        this.name = nameInput;
        this.listPhone = [];
        let sp1 = new Phone('P001', 'iPhone 13', 'Apple','999');
        this.listPhone.push(sp1);

    }
    add(newProduct){
        this.listPhone.push(newProduct);
    }
}