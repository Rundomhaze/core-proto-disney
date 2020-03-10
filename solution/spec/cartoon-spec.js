// BEHAVIORAL SPECS
describe('Cartoon', function() {
  'use strict';

  describe('the constructor', function() {

    it('is a function', function() {
      expect(Vehicle).toEqual(jasmine.any(Function));
    });

    describe('when called', function() {
      var vehicle;
      beforeEach(function() {
        vehicle = new Vehicle('bob');
      });

      it('sets the driver', function() {
        expect(vehicle.driver).toEqual('bob');
      });

      it('sets the initial speed', function() {
        expect(vehicle.speed).toEqual(0);
      });
    });
  });

  describe('#drive', function() {
    var vehicle;
    beforeEach(function() {
      vehicle = new Vehicle('bob');
    });

    it('exists', function() {
      expect(vehicle.drive).toEqual(jasmine.any(Function));
    });

    it('drives', function() {
      expect(vehicle.drive(20)).toEqual('bob driving at 20 miles per hour');
    });

    it('sets the speed', function() {
      vehicle.drive(45);
      expect(vehicle.speed).toEqual(45);
    });
  });
});

describe('Car', function() {
  'use strict';

  describe('the constructor', function() {

    it('is a function', function() {
      expect(Car).toEqual(jasmine.any(Function));
    });

    describe('when called', function() {
      var car;
      beforeEach(function() {
        car = new Car('bob');
      });

      it('sets the driver', function() {
        expect(car.driver).toEqual('bob');
      });

      it('sets the initial speed', function() {
        expect(car.speed).toEqual(0);
      });
    });
  });

  describe('#drive', function() {
    var car;
    beforeEach(function() {
      car = new Car('bob');
    });

    it('exists', function() {
      expect(car.drive).toEqual(jasmine.any(Function));
    });

    it('drives', function() {
      expect(car.drive(20)).toEqual('bob driving at 20 miles per hour');
    });

    it('sets the speed', function() {
      car.drive(45);
      expect(car.speed).toEqual(45);
    });
  });
});


describe('Truck', function() {
  'use strict';

  describe('the constructor', function() {

    it('is a function', function() {
      expect(Truck).toEqual(jasmine.any(Function));
    });

    describe('when called', function() {
      var truck;
      beforeEach(function() {
        truck = new Truck('bob');
      });

      it('sets the driver', function() {
        expect(truck.driver).toEqual('bob');
      });

      it('sets the initial speed', function() {
        expect(truck.speed).toEqual(0);
      });

      it('sets the initial cargo load', function() {
        expect(truck.cargo).toEqual([]);
      });
    });
  });

  describe('#drive', function() {
    var truck;
    beforeEach(function() {
      truck = new Truck('bob');
    });

    it('exists', function() {
      expect(truck.drive).toEqual(jasmine.any(Function));
    });

    it('drives', function() {
      expect(truck.drive(20)).toEqual('bob driving at 20 miles per hour');
    });

    it('sets the speed', function() {
      truck.drive(45);
      expect(truck.speed).toEqual(45);
    });
  });

  describe('#loadCargo', function() {
    var truck;
    beforeEach(function() {
      truck = new Truck('bob');
      debugger;
      truck.loadCargo('test cargo');
    });

    it('adds the cargo on the truck', function() {
      expect(truck.cargo).toEqual(['test cargo']);
    });

    it('returns itself', function() {
      expect(truck.loadCargo('test')).toBe(truck);
    });
  });

  describe('#unloadCargo', function() {
    var truck,
        unloadedCargo;
    beforeEach(function() {
      truck = new Truck('bob');
      truck.cargo = ['cargo 1', 'cargo 2'];
      unloadedCargo = truck.unloadCargo();
    });

    it('returns the latest cargo', function() {
      expect(unloadedCargo).toEqual('cargo 2');
    });

    it('reduces the cargo load by 1', function() {
      expect(truck.cargo.length).toEqual(1);
    });
  });
});