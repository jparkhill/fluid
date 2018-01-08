// Routines to convert a blob into parsed atoms, and return the centers of atoms.
'use strict'
//WTF
var Mol = ( function() {
	var Mol = function(eles_ = [1], coords_ = [[0.,0.,0.]], name_ = "Name"){
		this.name = name_;
		this.atoms = eles_;
		this.nframes = 1;
		this.natoms = 1;
		this.coords = coords_;
		this.CountAtoms();
		console.log("Counted Atoms");
		console.log(this.natoms);
	};

	Mol.prototype.CountAtoms = function () {
			this.natoms = this.atoms.length; 
	}

	return Mol;
}()
);

// Currently only works for single molecules.
// pasted in with the natoms as the first argument.
var xyzParser = function (str) {
	str.split("\n");
	var line1 = str[0];
	line1.split(" ");
	var natoms = parseInt(line1[0]);
	console.log(natoms);
	var eles = [];
	var coords = [];
	for (var i=2; i<natoms+2; ++i){
		var linen = str[i];
		linen.split(/\s+/);  // split by whitespace.
		eles.push(parseInt(linen[0]));
		var x = parseFloat(linen[1]);
		var y = parseFloat(linen[2]);
		var z = parseFloat(linen[3]);
		coords.push([x,y,z]);
	}
	var m = new Mol(eles,coords);
	return m;
};
