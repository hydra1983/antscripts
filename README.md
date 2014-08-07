Usage:

Github

```xml
<project default="build">
    <property name="SCRIPTS_BASE" value="https://raw.github.com/hydra1983/antscripts/master" />

	<import>
		<url url="${SCRIPTS_BASE}/ant-contrib.xml"/>
    	<url url="${SCRIPTS_BASE}/ant-props.xml"/>
    	<url url="${SCRIPTS_BASE}/file.xml"/>
    	<url url="${SCRIPTS_BASE}/flaka.xml"/>
		<url url="${SCRIPTS_BASE}/flex.xml"/>
    	<url url="${SCRIPTS_BASE}/mvn.xml"/>
    	<url url="${SCRIPTS_BASE}/pack200.xml"/>
    	<url url="${SCRIPTS_BASE}/string.xml"/>
    	<url url="${SCRIPTS_BASE}/uuid.xml"/>
    	<url url="${SCRIPTS_BASE}/xml.xml"/>
	</import>

	<target name="build">
	
	</target>
</project>
```

For ```xml```

See http://www.oopsconsultancy.com/software/xmltask/ and https://today.java.net/pub/a/today/2006/11/01/xml-manipulation-using-xmltask.html#paths-and-namespaces
