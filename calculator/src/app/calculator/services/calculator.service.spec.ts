import { TestBed, inject } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  let service: CalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should ensure that 1 + 4 = 5',
    inject([CalculatorService], (service: CalculatorService) => {
      let addition = service.calculate(1, 4, CalculatorService.ADDITION);
      expect(addition).toEqual(5);
    })
  );

  it('should ensure that 1 - 4 = -3',
    inject([CalculatorService], (service: CalculatorService) => {
      let subtraction = service.calculate(1, 4, CalculatorService.SUBTRACTION);
      expect(subtraction).toEqual(-3);
    })
  );

  it('should ensure that 1 / 4 = 0.25',
    inject([CalculatorService], (service: CalculatorService) => {
      let division = service.calculate(1, 4, CalculatorService.DIVISION);
      expect(division).toEqual(0.25);
    })
  );

  it('should ensure that 1 * 4 = 4',
    inject([CalculatorService], (service: CalculatorService) => {
      let multiplication = service.calculate(1, 4, CalculatorService.MULTIPLICATION);
      expect(multiplication).toEqual(4);
    })
  );

  it('should return 0 when receive invalid operator',
    inject([CalculatorService], (service: CalculatorService) => {
      let invalidOperator = service.calculate(1, 4, '%');
      expect(invalidOperator).toEqual(0);
    })
  );

});
