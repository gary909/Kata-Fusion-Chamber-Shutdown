function burner(c, h, o) {
    var water = (c*c)*h;
    var co2 = h;
    var methane = o;
    return [water, co2, methane];
  }

 console.log(burner(45, 11, 100)); // returns [5, 45, 0] carbon/hydrogen/oxygen