package com.google.sps.servlets;


import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import java.util.ArrayList;
import java.util.List;
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
import com.google.cloud.datastore.Query;
import com.google.cloud.datastore.QueryResults;
import com.google.cloud.datastore.StructuredQuery.OrderBy;
import com.google.gson.Gson;





@WebServlet("/Contact-Form")
public class ContactFormServlet extends HttpServlet {

 
@Override
  public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
    // Sanitize user input to remove HTML tags and JavaScript.
    String text = Jsoup.clean(request.getParameter("Name"), Whitelist.none());
    String email = Jsoup.clean(request.getParameter("Email"), Whitelist.none());
    String textValue = Jsoup.clean(request.getParameter("Message"), Whitelist.none());
    long timestamp = System.currentTimeMillis();
    
    


    Datastore datastore = DatastoreOptions.getDefaultInstance().getService();
    KeyFactory keyFactory = datastore.newKeyFactory().setKind("message");
    FullEntity taskEntity =
    Entity.newBuilder(keyFactory.newKey())
        .set("name", text)
        .set("email", email)
        .set("message", textValue)
        .set("timestamp", timestamp)
        .build();
  
        datastore.put(taskEntity);
        response.sendRedirect("/Contact me.html");
        //response.sendRedirect("http://rsadiq-sps-summer22.appspot.com/Contact%20me.html");
  }

   
  
    @Override
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
      Datastore datastore = DatastoreOptions.getDefaultInstance().getService();
      Query<Entity> query = Query.newEntityQueryBuilder().setKind("message").setOrderBy(OrderBy.desc("timestamp"))
          .build();
      QueryResults<Entity> results = datastore.run(query);
  
      List<String> tasks = new ArrayList<>();
      while (results.hasNext()) {
        Entity entity = results.next();
  
        long id = entity.getKey().getId();
        String textValue = entity.getString("message");
        long timestamp = entity.getLong("timestamp");
        String text = entity.getString("name");
        String Email = entity.getString("email");
  
        //Task task = new Task(id, title, timestamp);
      // String[] task = { textValue, text, Email};
        //tasks.add(task);
        
      
        tasks.add(text);
      
        tasks.add(Email);
        tasks.add(textValue);
      
        
      }
  
      Gson gson = new Gson();
  
      response.setContentType("application/json;");
      response.getWriter().println(gson.toJson(tasks));
    }
  }
  


