<execution>
	<id>@%{action}-dependencies</id>
	<phase>generate-resources</phase>
	<goals>
		<goal>@%{action}</goal>
	</goals>
	<configuration>
		<artifactItems>
			@%{dependencies}
		</artifactItems>
		<remoteRepositories>@%{remoteRepositories}</remoteRepositories>
	</configuration>
</execution>