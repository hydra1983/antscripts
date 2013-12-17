importPackage(java.io);

var FileUtils = {};

FileUtils. basename = function(path) {
    return path.replace(/\\/g,'/').replace( /.*\//, '' );
};
 
FileUtils.dirname = function(path) {
    return path.replace(/\\/g,'/').replace(/\/[^\/]*$/, '');;
};

FileUtils.extname = function(path) {
   return path.replace(/\\/g,'/').replace( /.*\./, '' );
};

FileUtils.mkdir = function(path){
	var file = new File(path);
	if(file.exists()){
		return true;
	}
	return file.mkdir();
};

FileUtils.mkdirs = function(path){
	var file = new File(path);
	if(file.exists()){
		return true;
	}
	return file.mkdirs();
};