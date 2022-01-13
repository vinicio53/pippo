<?xml version="1.0" encoding="UTF-8" standalone="no"?>

<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output indent="yes" method="html" omit-xml-declaration="yes"/>
    
    <xsl:template match="/document">
        hello xsl: hola a todo el mundaaaaaaaaaaaazzz
        <xsl:if test="@lang= 'it'">
            ITA
        </xsl:if>
        <xsl:if test="not(@lang= 'it')">
            USA
        </xsl:if>
        
    </xsl:template> 
    
    
</xsl:stylesheet>