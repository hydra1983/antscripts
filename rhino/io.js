importPackage(java.io);

load(__SCRIPTS_BASE__ + "/rhino/file_utils.js");
 
var writeFile = function(string, file, encoding ) {
	if(encoding == null || encoding == ""){
		encoding = "UTF-8";
	}
	
	var path = file;
	file = new File(path);
	if(!file.exists()){
		var dir = FileUtils.dirname(path);
		print(dir);
		if(FileUtils.mkdirs(dir)){
			file.createNewFile();
		} else {
			print("Error to create new file.");
		}
	}
	
	if(file.exists()){
		var out = new BufferedWriter(
			new OutputStreamWriter(
				new FileOutputStream(file), encoding
			)
		);
		
		out.write(string);
		out.flush();
		out.close();
	}
}