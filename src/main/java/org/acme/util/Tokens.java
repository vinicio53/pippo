/*
 * Created on 14 Oct 2014
 */

package org.acme.util;

public class Tokens {

    private String theValues;
    private char theChar;

    public Tokens(
            final String aString,
            final char aChar,
            final int aOffset)
            throws Exception {
        //msg("aString =" + aString);
        //msg("aOffset =" + aOffset);
        if (aOffset > aString.length()) {
            throw new Exception("Tokens: offset length error");
        }
        theChar = aChar;
        theValues = aString.substring(aOffset, aString.length());
    }

    public String next() {
        if (theValues == null) {
            return null;
        }
        final int myIndexOf = theValues.indexOf(theChar);
        //msg("myIndexOf =" +myIndexOf);
        if (myIndexOf == -1) {
            final String myRet = theValues;
            theValues = null;
            return myRet;
        }
        final String myRet = theValues.substring(0, myIndexOf);
        theValues = theValues.substring(myIndexOf + 1, theValues.length());
        return myRet;

    }

    private static void msg(final String s) {
        System.out.println(Tokens.class.getName() + "> " + s);
    }
}
