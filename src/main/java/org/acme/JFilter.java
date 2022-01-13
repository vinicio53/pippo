package org.acme;

import java.io.IOException;
import javax.servlet.Filter;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.FilterChain;

public class JFilter implements Filter {

    final private static String BLOCK = "ss";

    @Override
    public void init(FilterConfig aFilterConfig)
            throws ServletException {
    }

    @Override
    public void doFilter(
            ServletRequest aRequest,
            ServletResponse aResponse,
            FilterChain aFilterChain)
            throws IOException, ServletException {
        String myParam = aRequest.getParameter("name");
        msg("myParam ===" + myParam);
        if (BLOCK.equals(myParam)) {
            msg("block yes");
            aResponse.getWriter().write("This request is blocked");
        } else {
            msg("block no");
            aFilterChain.doFilter(aRequest, aResponse);
            return;

        }
    }

    public void destroy() {
    }

    public static void msg(String s) {
        System.out.println("" + s);
    }
}
