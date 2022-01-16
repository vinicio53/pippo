/*
 * Created on 24 ottobre 2005
 */
package com.bazar.util;

public class Alphabet {
    private static final String ALPHABET = "ABCDEFGHIJKLMNPQRSTUVWXYZ12345679";

    public static char nextChar() {
        int myIndex = (int) (Math.random() * ALPHABET.length());
        char myChar = ALPHABET.charAt(myIndex);
        return myChar;
    }

    //todo test
    public static String makeCaptcha() {
        final StringBuffer myBuffer = new StringBuffer();
        myBuffer.append(Alphabet.nextChar());
        myBuffer.append(Alphabet.nextChar());
        myBuffer.append(Alphabet.nextChar());
        myBuffer.append(Alphabet.nextChar());
        final String myCaptcha = myBuffer.toString();
        return myCaptcha;
    }


}
