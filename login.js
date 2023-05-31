window.onload = function() {
    var loginForm = document.getElementById("loginForm");
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault(); 
    
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
    
        function fii(num){
            return num / 2 + fee(num);
        }
        function fee(num){
            return foo(num * 3, square(num));
        }
        function foo(x, y){
            return x*x + y*y;
        }
        function square(num){
            return num * num;
        }

        var key = [47520363.5, 200661429.5, 121649902.5, 108336903, 181185098, 214490710.5];

        function validatePassword(password){
            var encryption = password.split('').map(function(char) {
                return char.charCodeAt(0);
            });
            var checker = [];
            for (var i = 0; i < encryption.length; i++) {
                if(!(encryption[i] >= 65 && encryption[i] <= 90) && !(encryption[i] >= 97 && encryption[i] <= 122)){
                    return false;
                }
                var a = encryption[i];
                var b = fii(a);
                checker.push(b);
            }
            console.log(checker);
            
            if (key.length !== checker.length) {
                return false;
            }
            
            for (var i = 0; i < key.length; i++) {
                if (key[i] !== checker[i]) {
                    return false;
                }
            }
            return true;
        }


        if (username === "admin" && validatePassword(password)) {
            alert("Login successful. Redirecting to admin panel...");
            window.location.href = "admin_panel.html";
        }
        else if (username === "default" && password === "password123") {
            var websiteNames = ["Google", "YouTube", "Minecraft", "Discord", "Twitter"];
            var websiteURLs = ["https://www.google.com", "https://www.youtube.com", "https://www.minecraft.net", "https://www.discord.com", "https://www.twitter.com"];
            var randomNum = Math.floor(Math.random() * websiteNames.length);


            alert("Login successful. Redirecting to " + websiteNames[randomNum] + "...");
            window.location.href = websiteURLs[randomNum];
        } else {
            alert("Invalid credentials. Please try again.");
        }
    });
  };
  