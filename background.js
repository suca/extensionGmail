chrome.runtime.onConnect.addListener(function(port) {
  port.onMessage.addListener(function(message) {
    // Fetch token if it exists
    if(message.type == "email") {
      //port.postMessage({firebase_token: token });
      console.log("CHECKING EMAIL", message.email)
      chrome.storage.local.get(message.email, function(data) {
        if(!(message.email in data))
          data = null
        else
          data = data[message.email]
        console.log("RETURNING", data);
        port.postMessage({ type: "bg_return_token", token: data });
      });
    }

    // Set token
    else if(message.type == "bg_set_token") {
      var token_obj = {}
      token_obj[message.email] = message.token;
      console.log("Setting token", token_obj)
      chrome.storage.local.set(token_obj);
    }

    // Get auto edit toggle
    else if(message.type == "bg_get_auto_edit") {
      chrome.storage.local.get("auto_edit", function(data) {
        port.postMessage({ type: "bg_return_auto_edit", value: data["auto_edit"] });
      })
    }

    // Set auto edit toggle
    else if(message.type == "bg_set_auto_edit") {
      var auto_edit = {}
      auto_edit["auto_edit"] = message.value;
      console.log("Setting auto edit", auto_edit)
      chrome.storage.local.set(auto_edit);
    }

  });
});



// function customMailtoUrl() {
//   if (window.localStorage == null)
//     return "";
//   if (window.localStorage.customMailtoUrl == null)
//     return "";
//   return window.localStorage.customMailtoUrl;
// }

// function executeMailto(tab_id, subject, body, selection) {
//   var default_handler = customMailtoUrl().length == 0;

//   var action_url = "mailto:?"
//       if (subject.length > 0)
//         action_url += "subject=" + encodeURIComponent(subject) + "&";

//   if (body.length > 0) {
//     action_url += "body=" + encodeURIComponent(body);

//     // Append the current selection to the end of the text message.
//     if (selection.length > 0) {
//       action_url += encodeURIComponent("\n\n") +
//           encodeURIComponent(selection);
//     }
//   }

//   if (!default_handler) {
//     // Custom URL's (such as opening mailto in Gmail tab) should have a
//     // separate tab to avoid clobbering the page you are on.
//     var custom_url = customMailtoUrl();
//     action_url = custom_url.replace("%s", encodeURIComponent(action_url));
//     console.log('Custom url: ' + action_url);
//     chrome.tabs.create({ url: action_url });
//   } else {
//     // Plain vanilla mailto links open up in the same tab to prevent
//     // blank tabs being left behind.
//     console.log('Action url: ' + action_url);
//     chrome.tabs.update(tab_id, { url: action_url });
//   }
// }

// chrome.runtime.onConnect.addListener(function(port) {
//   var tab = port.sender.tab;

//   // This will get called by the content script we execute in
//   // the tab as a result of the user pressing the browser action.
//   port.onMessage.addListener(function(info) {
//     var max_length = 1024;
//     if (info.selection.length > max_length)
//       info.selection = info.selection.substring(0, max_length);
//     executeMailto(tab.id, info.title, tab.url, info.selection);
//   });
// });

// // Called when the user clicks on the browser action icon.
// chrome.browserAction.onClicked.addListener(function(tab) {
//   // We can only inject scripts to find the title on pages loaded with http
//   // and https so for all other pages, we don't ask for the title.
//   if (tab.url.indexOf("http:") != 0 &&
//       tab.url.indexOf("https:") != 0) {
//     executeMailto(tab.id, "", tab.url, "");
//   } else {
//     chrome.tabs.executeScript(null, {file: "content_script.js"});
//   }
// });
