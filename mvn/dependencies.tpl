<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
	<modelVersion>4.0.0</modelVersion>

	<groupId>maven</groupId>
	<artifactId>get-dependencies</artifactId>
	<packaging>pom</packaging>
	<version>generated</version>
	<build>
		<plugins>
			<plugin>
				<groupId>org.apache.maven.plugins</groupId>
				<artifactId>maven-dependency-plugin</artifactId>
				<version>2.8</version>
				<executions>
					@%{executions}
				</executions>
			</plugin>
		</plugins>
	</build>
	@%{repositories}	
</project>