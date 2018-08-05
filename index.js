// Code your solution in this file!

const logDriverNames = function (drivers) {
  (drivers).forEach(function (driver){
  console.log(driver.name)
  });
};

const logDriversByHometown = function (drivers, hometown) {
  (drivers).forEach(function (driver){
  if (driver.hometown === hometown){
    console.log(driver.name)
  };
  });
};

const driversByRevenue = function (num1, num2){
  revenue.sort(function (revenue){
    return num1 - num2;
  })
};

revenue.sort(driversByRevenue);
