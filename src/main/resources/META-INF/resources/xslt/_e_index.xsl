<?xml version="1.0" encoding="UTF-8" standalone="no"?>

<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output indent="yes" method="html" omit-xml-declaration="yes"/>

    <!-- xsl:include href="./label/lang/l_cookie1.xsl" />
    <xsl:include href="./label/lang/l_cookie2.xsl" />
    <xsl:include href="./u_minify.xsl"/>
    <xsl:include href="./u_modal.xsl"/>
    <xsl:include href="./caps/_pres/u_one.xsl"/ -->
    
    <xsl:template match="/document">
        <xsl:variable name="myTitle" select="@title"/>
        <xsl:variable name="myAgent" select="@agent"/>
        
        <html dir="{@dir}" lang="{@lang}">
            <head>
                <title>
                    <xsl:if test="$myTitle = ''">
                        <!-- xsl:call-template name="titleLabel">
                            <xsl:with-param name="aLang" select="@lang"/>
                        </xsl:call-template -->
                    </xsl:if >
                    <xsl:if test="not($myTitle = '')">
                        <xsl:value-of select="$myTitle"/>
                    </xsl:if>
                </title>
                <meta content="IE=edge" http-equiv="X-UA-Compatible"/>
                <meta content="width=device-width, initial-scale=1" name="viewport"/>
                <link href="./img/favicon.png" rel="icon" type="image/png"/>

                <link href="./img/fontawesome-free-5.15.1-web/css/all.min.css" rel="stylesheet" type="text/css"/>
                <script src="./js/_lib/jquery-3.5.1.min.js"></script>
                <script src="./js/_lib/jquery.form.js"></script>
                <!-- xsl:call-template name="__importMyAll" / -->
            </head>
            <body>
                hola
                <div id="div_loading"/>
                <div id="div_message"/>
                <xsl:variable name="myIdCart" select="//state/@idcart"/>
                <xsl:variable name="myIdLegend" select="//state/@idlegend"/>
                <xsl:variable name="myIdReservations" select="//state/@idreservations"/>
                <xsl:variable name="myIdRequest" select="//state/@idrequest"/>
                <xsl:variable name="myCache" select="//cache"/>
                <xsl:variable name="myACookie" select="//document/@acookie"/>


                <div class="div_fixed">
                    <div class="container-fluid" style="border:1px solid #cecece;">
                        <div>
                            <xsl:if test="not($myACookie ='f')">
                                <xsl:attribute name="class">row</xsl:attribute>
                            </xsl:if>
                            <xsl:if test="$myACookie ='f'">
                                <xsl:attribute name="class">row cookie_disable</xsl:attribute>
                            </xsl:if>
                            <div class="col text-right">
                                <div id="div_cap">aaaa
                                    <xsl:variable name="myRftCaps" select="//req[@attr = 60034]"/>
                                    <!-- xsl:call-template name="__drawCaps1All">
                                        <xsl:with-param name="aTitle" select="$myTitle"/>
                                        <xsl:with-param name="aRftCaps" select="$myRftCaps"/>
                                    </xsl:call-template -->
                                </div>
                            </div>
                        </div>
                    </div>

                    <xsl:if test="$myACookie ='f'">
                        <center>
                            <div class="cookie_bar" >
                                <p>
                                    <!-- xsl:call-template name="cookie1Label" >
                                        <xsl:with-param name="aLang" select="//document/@lang"/>
                                    </xsl:call-template>
                                    <br/>
                                    <xsl:call-template name="cookie2Label" >
                                        <xsl:with-param name="aLang" select="//document/@lang"/>
                                    </xsl:call-template -->
                                </p>

                                <!-- xsl:variable name="myAcceptLabel">
                                    <xsl:call-template name="acceptLabel" >
                                        <xsl:with-param name="aLang" select="//document/@lang"/>
                                    </xsl:call-template>
                                </xsl:variable>
                                <xsl:call-template name="__drawIdButton" >
                                    <xsl:with-param name="aLabel" select="$myAcceptLabel"/>
                                    <xsl:with-param name="aIdentifier" select="'_rem_ove_'"/>
                                    <xsl:with-param name="aJFunction" select="'acceptCookie'"/>
                                </xsl:call-template -->
                            </div>
                        </center>
                    </xsl:if>
                </div>
                <br/>
                <br/>
                <br/>
                <!-- xsl:call-template name="_drawRowPromo">
                </xsl:call-template -->
                
                    
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-sm text-center">
                            <small>
                                <br/>
                                div_wfilter
                                <br/>
                            </small>
                            <div id="div_wfilter">
                                <!-- xsl:call-template name="_drawWelcomeFilter"/ -->
                            </div>
                        </div>
                        <xsl:variable name="myTablex" select="//welcome/req[@attr = 64077]"/>
                        <xsl:variable name="mySxcPlugin" select="$myTablex/one/@scxplugin"/>
                        <small>
                            <br/>
                            mySxcPlugin :
                            <xsl:value-of select="$mySxcPlugin"/>
                            <br/>
                        </small>
                        
                        
                    </div>
                    <div class="row">
                        <small>
                            <br/>
                            div_center
                            <br/>
                        </small>
                        <div class="col-sm text-center" id="div_center">
                            <xsl:variable name="myDataSwitcher" select="0"/>
                            <!-- xsl:call-template name="___drawWelcomeSearch">
                                <xsl:with-param name="aDataSwitcher" select="$myDataSwitcher"/>
                                <xsl:with-param name="aColIndex" select="0"/>
                                <xsl:with-param name="aLocationCol" select="0"/>
                                <xsl:with-param name="aLocationJnfg" select="0"/>
                                <xsl:with-param name="aLatitude" select="0"/>
                                <xsl:with-param name="aLongitude" select="0"/>
                            </xsl:call-template -->
                        </div>
                    </div>
                </div>
                
                <br/>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-4">
                        </div>
                        <div class="col-4 text-center">
                            <xsl:value-of select="@foot"/>
                        </div>
                       
                        <div class="col-4 text-right">
                            version
                            <span data-placement="top" data-toggle="tooltip" title="baldocca.com">
                                <xsl:value-of select="@version"/>
                            </span>
                        </div>
                    </div>
                </div>
                <!-- xsl:call-template name="_importModal"/ -->
                
                
            </body>
        </html>
    </xsl:template>
    
    
</xsl:stylesheet>