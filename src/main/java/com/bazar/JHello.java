package com.bazar;

import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import org.eclipse.microprofile.config.inject.ConfigProperty;


@Path("/hello")
public class JHello {

    @Inject
    JBean theJBean;


    //@Produces(MediaType.APPLICATION_XML)
    @GET
    @Produces(MediaType.TEXT_PLAIN)
    public String hello() {
        //theCounter++;
        final String myRet = "hello world";
        return myRet;
    }


    public static void msg(String s) {
        System.out.println(JHello.class.getName() + ": " + s);
    }

}
