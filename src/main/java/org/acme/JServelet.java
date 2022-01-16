package org.acme;

import java.io.IOException;
import javax.enterprise.context.SessionScoped;
import javax.inject.Inject;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.acme.page.web.WParam;

@SessionScoped
@WebServlet
public class JServelet
        extends HttpServlet {

    //@SessionScoped
    @Inject
    JBean theJBean;
    
    int theCounter = 0;

    @Override
    protected void doGet(
            final HttpServletRequest aRequest,
            final HttpServletResponse aResponse)
            throws IOException {
        if (!aRequest.isSecure()) {
        }
        theCounter++;
        theJBean.setCounter(theCounter);
        //
        final WParam myWParam = new WParam(aRequest);
        myWParam.printRequest();
        final String myParam = aRequest.getParameter("name");
        final String myUrl = _getXslUrl(aRequest, "/_e_pippo.xsl");
        try {
            final String myRetTransform = theJBean.urlTransform(myUrl);
            final String myRet = "servlet =" + myParam + " - " + myRetTransform;
            aResponse.getWriter().write(myRet);
        } catch (Exception e) {
            aResponse.getWriter().write(e.getMessage());
        }
    }

    private String _getXslUrl(
            final HttpServletRequest aRequest,
            final String aXslPath) {
        final String myProt = aRequest.getProtocol();
        final String myAddr = aRequest.getLocalAddr();
        final String myName = aRequest.getLocalName();
        final int myPort = aRequest.getLocalPort();
        final StringBuffer myBuffer = new StringBuffer();
        if (myProt.startsWith("HTTP/")) {
            myBuffer.append("http://");
        } else {
            myBuffer.append("https://");
        }
        myBuffer.append(myName);
        myBuffer.append(":");
        myBuffer.append(myPort);
        myBuffer.append("/xslt");
        myBuffer.append(aXslPath);
        //
        final String myRet = myBuffer.toString();
        msg("myRet =" + myRet);
        return myRet;
    }

    private static void msg(final String s) {
        System.out.println(JServelet.class.getName() + "> " + s);
    }
}
