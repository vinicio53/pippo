package com.bazar;

import java.io.IOException;
import javax.enterprise.context.SessionScoped;
import javax.inject.Inject;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.bazar.page.web.JRequest;

@SessionScoped
@WebServlet
public class JServelet
        extends HttpServlet {
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
        final JRequest myJRequest = new JRequest(aRequest);
        myJRequest.printRequest();
        //
        theCounter++;
        theJBean.setCounter(theCounter);
        //
        final String myUrl = myJRequest.getLocalUrl();
        final String myXslUrl = myUrl + "/xslt/_e_pippo.xsl";
        try {
            final String myParam = myJRequest.oblStr("name");
            final String myRet = theJBean.urlTransform(myXslUrl);
            final String myOutput = "servlet =" + myParam + " - " + myRet;
            aResponse.getWriter().write(myOutput);
        } catch (Exception e) {
            aResponse.getWriter().write(e.getMessage());
        }
    }


    private static void msg(final String s) {
        System.out.println(JServelet.class.getName() + "> " + s);
    }
}
