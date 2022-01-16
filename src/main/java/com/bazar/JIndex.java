package com.bazar;

import com.bazar.page.web.JRequest;
import javax.inject.Inject;
import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import org.eclipse.microprofile.config.inject.ConfigProperty;

@Path("/")
public class JIndex {

    @ConfigProperty(name = "db.name")
    String theDbName;
    @ConfigProperty(name = "db.usr")
    String theDbUsr;
    @ConfigProperty(name = "db.pwd")
    String theDbPwd;
    @ConfigProperty(name = "db.url")
    String theDbUrl;

    @Inject
    JBean theJBean;

    @Inject
    HttpServletRequest theRequest;

    @GET
    @Produces(MediaType.TEXT_HTML)
    public String doIndex()
            throws Exception {
        final JRequest myJRequest = new JRequest(theRequest);
        //
        msg("theDbName =" + theDbName);
        msg("theDbUsr =" + theDbUsr);
        msg("theDbPwd =" + theDbPwd);
        msg("theDbUrl =" + theDbUrl);
        theJBean.setCounter(100);
        //
        final String myUrl = myJRequest.getLocalUrl();
        final String myXslUrl = myUrl + "/xslt/_e_index.xsl";
        final String myRet = theJBean.urlTransform(myXslUrl);
        return myRet;
    }

    public static void msg(String s) {
        System.out.println(JIndex.class.getName() + ": " + s);
    }

}
