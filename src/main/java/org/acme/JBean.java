package org.acme;

import javax.enterprise.context.SessionScoped;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.acme.xml.JDocument;
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
            //

            //ProcessingInstruction pi = myDocument.createProcessingInstruction("target", "instruction");
            //myDocumentElement.getParentNode().insertBefore(pi, myDocumentElement);

        }
    }

    public void setLang(
            final String aLang) {
        final Element myDocumentElement = getDocumentElement();
        myDocumentElement.setAttribute("lang", aLang);
        String myDirection = "ltr";
        if (aLang.equals("ar")) {
            myDirection = "rtl";
        }
        myDocumentElement.setAttribute("dir", myDirection);
    }

    private static void msg(final String s) {
        System.out.println(JBean.class.getName() + "> " + s);
    }

}
