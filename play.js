 function checkYoutubeLink(url) {
     if (url.startsWith("https://www.youtube.com")) {
          return true;
     } else if (url.startsWith("https://youtu.be")) {
          return true;
     } else {
          const options = {
               url: `https://api.urlmeta.org/?url=${url}`,
               headers: {
                    Authorization: "Basic " + base64Credentials,
               },
          };

          request(options, callback => {
              blabla
         });
          return meta;
     }
}
