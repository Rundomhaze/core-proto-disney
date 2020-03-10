describe('Vehicle prototype', function() {
  'use strict';

  it('has a drive method', function() {
    expect(Vehicle.prototype.drive).toEqual(jasmine.any(Function));
  });
});

describe('Car', function() {
  'use strict';

  describe('prototype constructor', function() {
    it('is Car', function() {
      expect(Car.prototype.constructor).toEqual(Car);
    });
  });

  describe('#drive', function() {
    var car;
    beforeEach(function() {
      car = new Car('test');
    });

    it('is the same function as Vehicle.prototype.drive', function() {
      expect(car.drive).toBe(Vehicle.prototype.drive);
    });
  });
});

describe('Truck', function() {
  'use strict';
  
  describe('prototype constructor', function() {
    it('is Truck', function() {
      expect(Truck.prototype.constructor).toEqual(Truck);
    });
  });

  describe('#drive', function() {
    var truck;
    beforeEach(function() {
      truck = new Truck('test');
    });

    it('is the same function as Vehicle.prototype.drive', function() {
      expect(truck.drive).toBe(Vehicle.prototype.drive);
    });
  });

  describe('#loadCargo', function() {
    var truck;
    beforeEach(function() {
      truck = new Truck('test');
    });

    it('is on the prototype', function() {
      expect(Truck.prototype.loadCargo).toEqual(jasmine.any(Function));
      expect(truck.loadCargo).toBe(Truck.prototype.loadCargo);
    });
  });

  describe('#unloadCargo', function() {
    var truck;
    beforeEach(function() {
      truck = new Truck('test');
    });

    it('is on the prototype', function() {
      expect(Truck.prototype.unloadCargo).toEqual(jasmine.any(Function));
      expect(truck.unloadCargo).toBe(Truck.prototype.unloadCargo);
    });
  });
});