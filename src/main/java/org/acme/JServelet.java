package org.acme;

import java.io.IOException;
import javax.inject.Inject;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.xml.transform.TransformerException;
import org.acme.page.web.WParam;

@WebServlet
public class JServelet 
        extends HttpServlet {

    @Inject
    JBean theJBean;

    @Override
    protected void doGet(
            final HttpServletRequest aRequest,
            final HttpServletResponse aResponse)
            throws IOException//, TransformerException
    {
        if (!aRequest.isSecure()) {
        }
        WParam myWParam = new WParam(aRequest);
        myWParam.printRequest();
        //try {
            theJBean.setLang("it");
            String myParam = aRequest.getParameter("name");
            final String myRet = "servlet =" + 10 + "-" + myParam;
            aResponse.getWriter().write(myRet);
        //} catch (TransformerException e) {
       // }
    }
}
