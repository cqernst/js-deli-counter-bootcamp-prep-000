var katzDeliLine = [];
function takeANumber(katzDeliLine, newName) {
  katzDeliLine.push(newName);

  var position = katzDeliLine.length;

  return `Welcome, ${newName}. You are number ${position} in line.`;
}

function nowServing(katzDeliLine) {
  var firstInLine = katzDeliLine[0]
  if (firstInLine) {
    var finalValue = "Currently serving " + firstInLine + ".";
    katzDeliLine.shift();
    return finalValue;
  } else {
    return "There is nobody waiting to be served!"
  }
}
function currentLine(katzDeliLine) {
  var currentLineStatement = ["The line is currently: "]
  if (katzDeliLine) {
    for (var i = 0; i<katzDeliLine.length-1; i++) {
    var position = i+1 + ". ";
    currentLineStatement.push(position + katzDeliLine[i]);
    currentLineStatement.push(",");
    } 
  
  }
  return "".concat(...currentLineStatement); 

/* describe('deli', () => {
  describe('takeANumber', () => {
    var katzDeli;
    var otherDeli;

    beforeEach(() => {
      katzDeli = [];
      otherDeli = ["Steven", "Blake", "Avi"];
    });

    it('adds a person to the line', () => {
      expect(takeANumber(katzDeli, 'Ada')).toEqual("Welcome, Ada. You are number 1 in line.");
      expect(katzDeli).toEqual(['Ada']);
    });

    it('appends the person the end of the line if there are already people on it', () => {
      expect(takeANumber(otherDeli, 'Grace')).toEqual("Welcome, Grace. You are number 4 in line.");
      expect(otherDeli).toEqual(["Steven", "Blake", "Avi", "Grace"]);
    });

    it("properly handles multiple people being added", () => {
      takeANumber(katzDeli, 'Ada');
      takeANumber(katzDeli, 'Grace');
      takeANumber(katzDeli, 'Kent');

      expect(katzDeli).toEqual(["Ada", "Grace", "Kent"]);
    });
  });

  describe('nowServing', () => {
    it('returns the line is empty when no one is on line', () => {
      expect(nowServing([])).toEqual("There is nobody waiting to be served!");
    });

    it('returns an announcement about the person it is serving, and shifts the line', () => {
      const deliLine = ["Steven", "Blake", "Avi"]
      expect(nowServing(deliLine)).toEqual("Currently serving Steven.");
      expect(deliLine).toEqual(["Blake", "Avi"]);
    });
  });

  describe('currentLine(line)', () => {
    it('returns "The line is currently empty." if no one is in line', () => {
      expect(currentLine([])).toEqual("The line is currently empty.");
    });

    it('says who is in line when there are people waiting', () => {
      expect(currentLine(["Bill", "Jane", "Ann"])).toEqual("The line is currently: 1. Bill, 2. Jane, 3. Ann");
    });
  });
})
*/
