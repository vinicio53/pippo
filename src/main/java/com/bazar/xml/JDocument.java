/*
 * Created on February 16 2006
 */
package com.bazar.xml;


import java.net.URL;
import java.io.StringWriter;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.transform.Transformer;
import javax.xml.transform.TransformerFactory;
import javax.xml.transform.dom.DOMSource;
import javax.xml.transform.stream.StreamResult;
import javax.xml.transform.stream.StreamSource;
//import javax.xml.transform.TransformerConfigurationException;
import javax.xml.transform.TransformerException;
import javax.xml.parsers.ParserConfigurationException;
//import org.apache.commons.io.FileUtils;
import java.nio.file.Paths;

import java.net.MalformedURLException;

public class JDocument {

    private final static DocumentBuilderFactory theBuilderFactory = DocumentBuilderFactory.newInstance();
    private final Document theDocument;

    public JDocument()
            throws ParserConfigurationException {
        final DocumentBuilder myBuilder = theBuilderFactory.newDocumentBuilder();
        theDocument = myBuilder.newDocument();
    }

    public Document getDocument() {
        return theDocument;
    }

    public Element getDocumentElement() {
        return theDocument.getDocumentElement();
    }

    public String getToString()
            throws TransformerException {

        //ProcessingInstructionImpl pi = (ProcessingInstructionImpl) theDocument.createProcessingInstruction("xml-stylesheet", "type=\"text/xsl\" href=\"my.stylesheet.xsl\"");
        //theDocument.insertBefore((Node) pi, getDocumentElement());
        final StringWriter myWriter = new StringWriter();
        final Transformer myTransformer = TransformerFactory.newInstance().newTransformer();
        myTransformer.transform(new DOMSource(theDocument), new StreamResult(myWriter));
        return myWriter.toString().trim();
    }

    /*
    public String contextTransform()
            throws TransformerException {
        final File myFile = new File("classes/META-INF/resources/xslt/_e_pippo.xsl");
        final TransformerFactory myFactory = TransformerFactory.newInstance();
        final StreamSource myStreamSource = new StreamSource(myFile);
        final Transformer myTransformer = myFactory.newTransformer(myStreamSource);
        final StringWriter myWriter = new StringWriter();
        myTransformer.transform(new DOMSource(theDocument), new StreamResult(myWriter));
        return myWriter.toString();
    }
     */
    public String urlTransform(
        final String aUrl)
            throws Exception {
        final URL myUrl = new URL(aUrl);
        final TransformerFactory myFactory = TransformerFactory.newInstance();
        //
        final StreamSource myStreamSource = new StreamSource(myUrl.openStream());
        final Transformer myTransformer = myFactory.newTransformer(myStreamSource);
        final StringWriter myWriter = new StringWriter();
        myTransformer.transform(new DOMSource(theDocument), new StreamResult(myWriter));
        return myWriter.toString().trim();
    }

    /*
    public void log(
            final String aFileName) 
//    throws Exception 
    {
        final Transformer myTransformer = TransformerFactory.newInstance().newTransformer();
        //
        final File myFile = new File(aFileName);
        final OutputStream myOutputStream = new FileOutputStream(myFile);
        final StreamResult myResult = new StreamResult(myOutputStream);
        myTransformer.transform(new DOMSource(theDocument), myResult);
        myOutputStream.close();
        //
        assert (myFile.exists());
    }
     */

 /*
    public void lhm()
            throws Exception {
        final String myPathName = System.getProperty("user.home") + "/lhm.xml";
        //msg(myPathName);
        log(myPathName);
    }*/
    private static void msg(final String s) {
        System.out.println(JDocument.class.getName() + "> " + s);
    }
}
