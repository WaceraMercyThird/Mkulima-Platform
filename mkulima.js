class Mkulima{
  constructor(){
  this.farms = [];
  this.orders = [];
  this.products   = [];
  this.addFarm = (Id, Name, farmer, phoneNumber, address) => {
  this.farms.push({Id,Name,farmer,phoneNumber,address})
  }
  this.removeFarm = (fId) => {
  let particular = this.farms.find(item => item.fId ===fId);
  let fIndex = this.farms.indexOf(particular);
  this.farms.splice(fIndex, 1);
  }
  this.updateFarm = function(fId,newFId,newFName,newFarmersName,newPhoneNumber,newAddress){
  let particularFarm = this.farms.find(item => item.fId ===fId)
  particularFarm.fId =newFId;
  particularFarm.fName =newFName;
  particularFarm.farmersName =newFarmersName;
  particularFarm.phoneNumber =newPhoneNumber;
  particularFarm.address =newAddress;
  }
  this.getFarm = (Id)=>{
  console.log(this.farms.find(object=>object.fId===Id))
  }
  this.addProduct = (Id, Name, price) => {
  this.product.push({Id,Name,price})
  }
  this.removeProduct = (pId) => {
  let particular = this.product.find(item => item.pId ===pId);
  let pIndex = this.product.indexOf(particular);
  this.product.splice(pIndex, 1);
  }
  this.updateProduct = function(pId,newPId,newPName,newPrice){
  let particularProduct = this.product.find(item => item.pId ===pId)
  particularProduct.pId =newPId;
  particularProduct.pName = newPName;
  particularProduct.price = newPrice;
  }
  this.getProduct = (Id)=>{
  console.log(this.product.find(object=>object.pId===Id))
  }
  this.printProducts = ()=>{
  console.log(this.product)
  }
  this.calculateOrderCost = (pId,quantity)=>{
  let particularProduct = this.product.find(object=>object.pId===pId);
  console.log(`${quantity} ${particularProduct.pName} for Kshs ${quantity*particularProduct.price}`);
  }
  }
  }
  let farm1 = new Mkulima();
  farm1.addFarm("783746R","PotatoFarm","MCGree","786576457", "Nakuru");
  farm1.addFarm("564746E","VineyardFarm","Trinity","0765865756", "YaYa Center");
  farm1.addFarm("678675P","WhiteflowerFarm","Estperanza","0767565764", "Lavington")
  console.log(farm1.farms);
  farm1.removeFarm("783746R");
  console.log(farm1)