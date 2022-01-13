/*
 * Created on 21 October 2016
 */
package org.acme.util;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.io.BufferedReader;
import java.io.StringReader;

public final class Ut {

    public static boolean isNumber(
            final String aStr) {
        if (aStr.isEmpty()) {
            return false;
        }
        for (int i = 0; i < aStr.length(); i++) {
            if (Character.digit(aStr.charAt(i), 10) < 0) {
                return false;
            }
        }
        return true;
    }

    public static int occurances(
            final String aValue)
            throws Exception {
        //msg("aValue =" + aValue);
        return occurances(" ", aValue);
    }

    public static int occurances(
            final String aChar,
            final String aValue)
            throws Exception {
        if (aValue.startsWith(aChar)) {
            throw new Exception("startsWith error " + aChar + "|");
        }
        if (aValue.endsWith(aChar)) {
            throw new Exception("endsWith error " + aChar + "|");
        }
        final String[] myParts = aValue.split(aChar);
        final int myOccurances = myParts.length - 1;
        return myOccurances;
    }

    public static String toApex(
            final ArrayList<String> aArrayList)
            throws Exception {
        final StringBuffer myBuffer = new StringBuffer();
        for (int k = 0; k < aArrayList.size(); k++) {
            final String myValue = aArrayList.get(k);
            myBuffer.append("\"");
            myBuffer.append(myValue).append("\"");
            if (k + 1 < aArrayList.size()) {
                myBuffer.append(", ");
            }
        }
        return myBuffer.toString();
    }

    public static String tokenTitle(
            final String aValue)
            throws Exception {
        if (aValue.length() == 0) {
            return "";
        } else {
            final StringBuffer myStringBuffer = new StringBuffer();
            final Tokens myTokens = new Tokens(aValue, '_', 0);
            String myToken = myTokens.next();
            while (myToken != null) {
                final String myTmp = myToken.substring(0, 1).toUpperCase();
                final String myStr = myTmp + myToken.substring(1);
                //msg("myT " + myT);
                myStringBuffer.append(myStr);
                myStringBuffer.append(" ");
                myToken = myTokens.next();
            }

            final String myRet = myStringBuffer.toString().trim();
            return myRet;
        }
    }

    public static String getPointDate() {
        final SimpleDateFormat myFormat = new SimpleDateFormat("yyyy.MM.dd");
        final String myDate = myFormat.format(new Date());
        return myDate;
    }

    public static String getShortDateTime() {
        final SimpleDateFormat myFormat = new SimpleDateFormat("ddMMyyyy_HHmmss");
        final String myDate = myFormat.format(new Date());
        return myDate;
    }

    public static Integer checkContain(//todo test
            final ArrayList<Integer[]> aListDep,
            final int aIndex) {
        for (Integer[] myList : aListDep) {
            if (myList[0] == aIndex) {
                return myList[1];
            }
        }
        return null;
    }

    public static String trimXml(
            final String aInput) throws Exception {
        final BufferedReader myReader = new BufferedReader(new StringReader(aInput));
        final StringBuffer myBuffer = new StringBuffer();
        //try {
        String myLine;
        while ((myLine = myReader.readLine()) != null) {
            myBuffer.append(myLine.trim());
        }
        return myBuffer.toString();
        /*} catch (Exception e) {
            throw e;
        }*/
    }

    private static void msg(final String s) {
        System.out.println(Ut.class.getName() + "> " + s);
    }

}
