class Record {
  constructor(id, name) {
    this.id = id?id:0; 
    this.name = name?name:'';
  }
  
  get Id(){
    return this.id;
  }
  get Name(){
    return this.name;
  }
 

  toJSON(){
      return{
        Id: this.id,
        Name: this.name
    };
  }
}

export default Record;