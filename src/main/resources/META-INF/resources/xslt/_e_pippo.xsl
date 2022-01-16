<?xml version="1.0" encoding="UTF-8" standalone="no"?>

<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output indent="yes" method="html" omit-xml-declaration="yes"/>
    
    <xsl:template match="/document">
        counter: <xsl:value-of select="@counter" />
    </xsl:template> 
    
    
</xsl:stylesheet>