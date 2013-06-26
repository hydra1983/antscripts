importPackage(java.io);
 
var writeFile = function(string, file, encoding ) {
	if(encoding == null || encoding == ""){
		encoding = "UTF-8";
	}
	
	var out = new BufferedWriter(
		new OutputStreamWriter(
			new FileOutputStream(file), encoding
		)
	);
	
	out.write(string);
	out.flush();
	out.close();
}