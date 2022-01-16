/*
 * Created on Jun 12 2015
 */
package com.bazar.page.web;

import javax.servlet.http.HttpServletRequest;
import java.util.Arrays;
import java.util.Map;

public final class JRequest {

    private final HttpServletRequest theRequest;

    public JRequest(
            final HttpServletRequest aRequest) {
        theRequest = aRequest;
    }

    public void printRequest() {
        System.out.println(".......PARAMS REQUEST.......");
        final Map<String, String[]> myMap = theRequest.getParameterMap();
        for (Map.Entry<String, String[]> entry : myMap.entrySet()) {
            System.out.println(entry.getKey() + "====" + Arrays.toString(entry.getValue()));
        }
    }

    public String getLocalUrl() {
        final String myProt = theRequest.getProtocol();
        final String myName = theRequest.getLocalName();
        final int myPort = theRequest.getLocalPort();
        //
        final StringBuffer myBuffer = new StringBuffer();
        if (myProt.startsWith("HTTP/")) {
            myBuffer.append("http://");
        } else {
            myBuffer.append("https://");
        }
        myBuffer.append(myName);
        myBuffer.append(":");
        myBuffer.append(myPort);
        //
        final String myRet = myBuffer.toString();
        //msg("myRet =" + myRet);
        return myRet;
    }


    public String oblStr(
            final String aParam)
            throws Exception {
        if (!theRequest.getParameterMap().containsKey(aParam)) {
            throw new Exception("JRequest: oblStr param not found " + aParam);
        }
        final String myParam = theRequest.getParameter(aParam);
        return myParam;
    }
    private static void msg(final String s) {
        System.out.println(JRequest.class.getName() + "> " + s);
    }
}
