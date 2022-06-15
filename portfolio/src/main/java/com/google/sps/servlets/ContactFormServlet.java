package com.google.sps.servlets;


import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import com.google.cloud.datastore.Datastore;
import com.google.cloud.datastore.DatastoreOptions;
import com.google.cloud.datastore.Entity;
import com.google.cloud.datastore.FullEntity;
import com.google.cloud.datastore.KeyFactory;
import com.google.cloud.datastore.Value;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.jsoup.Jsoup;
import org.jsoup.safety.Whitelist;



@WebServlet("/Contact-Form")
public class ContactFormServlet extends HttpServlet {

 

@Override
  public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
    /* String title = Jsoup.clean(request.getParameter("title"), Whitelist.none());

    
    KeyFactory keyFactory = datastore.newKeyFactory().setKind("Task");
    
    FullEntity taskEntity =
    Entity.newBuilder(keyFactory.newKey())
        .set("title", title)
        .set("timestamp", timestamp)
        .build();
        datastore.put(taskEntity);
    response.sendRedirect("/index.html"); */

    // Get the value entered in the form.
    String textValue = request.getParameter("text-input");

    // Print the value so you can see it in the server logs.
    System.out.println("You submitted this : " + textValue);

    // Write the value to the response so the user can see it.
    response.getWriter().println("Your Message is:  " + textValue);
    response.sendRedirect("http://rsadiq-sps-summer22.appspot.com/Contact%20me.html");
   
    Datastore datastore = DatastoreOptions.getDefaultInstance().getService();
  }

}