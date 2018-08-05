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

const driversByRevenue = function (drivers){
  return drivers.slice().sort(function (num1, num2) {
    return num1.revenue - num2.revenue;
  });
};

const driversByName = function (drivers){
  return logDriverNames(drivers)(function (driverA, driverB){
    return driverA.localeCompare(driverB);
  })
  };
