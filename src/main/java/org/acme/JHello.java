package org.acme;

import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.xml.transform.TransformerException;
import org.eclipse.microprofile.config.inject.ConfigProperty;
 


@Path("/hello")
public class JHello {

    
    @ConfigProperty(name = "greeting.message") 
    String theMessage;    
    
    @Inject
    JBean theJBean;


    //@Produces(MediaType.APPLICATION_XML)
    @GET
    @Produces(MediaType.TEXT_PLAIN)
    public String hello()
            throws TransformerException {
        final String myRet =  " - " + theMessage;
        return myRet;
    }
/*
    @GET
    @Produces(MediaType.TEXT_PLAIN)
    public String hello()
            throws TransformerException {
        if (theCounter++ % 2 == 0) {
            theJBean.setLang("it");
        } else {
            theJBean.setLang("fr");
        }
        final String myRet = theJBean.getTest();
        return myRet;
    }
*/
    public static void msg(String s) {
        System.out.println("" + s);
    }

}
