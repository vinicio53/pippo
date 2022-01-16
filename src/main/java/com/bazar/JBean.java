package com.bazar;

import javax.enterprise.context.SessionScoped;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import com.bazar.xml.JDocument;
import javax.xml.parsers.ParserConfigurationException;
import org.w3c.dom.ProcessingInstruction;

@SessionScoped
public class JBean
        extends JDocument {

    public JBean()
            throws ParserConfigurationException {
        final Document myDocument = getDocument();
        Element myDocumentElement = myDocument.getDocumentElement();
        if (myDocumentElement == null) {
            myDocumentElement = myDocument.createElement("document");
            myDocument.appendChild(myDocumentElement);
        }
    }

    public void setCounter(
            final int aCounter) {
        final Element myDocumentElement = getDocumentElement();
        myDocumentElement.setAttribute("counter", Integer.toString(aCounter));
    }

    private static void msg(final String s) {
        System.out.println(JBean.class.getName() + "> " + s);
    }

}
