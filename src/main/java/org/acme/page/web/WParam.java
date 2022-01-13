/*
 * Created on Jun 12 2015
 */
package org.acme.page.web;

import javax.servlet.http.HttpServletRequest;
import java.util.Arrays;
import java.util.Map;

public final class WParam {

    private final HttpServletRequest theRequest;

    public WParam(
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



    public String oblStr(
            final String aParam)
            throws Exception {
        if (!theRequest.getParameterMap().containsKey(aParam)) {
            throw new Exception("oblStr: param not found " + aParam);
        }
        final String myParam = theRequest.getParameter(aParam);
        return myParam;
    }
    private static void msg(final String s) {
        System.out.println(WParam.class.getName() + "> " + s);
    }
}
