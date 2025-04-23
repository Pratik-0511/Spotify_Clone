console.log("rannnnnn");

fetch("https://apiv2.shiprocket.in/v1/external/auth/login", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    email: info@neostretch.in,
    password: |~u89U0JYVz@
  })
})
  .then(response => response.json())
  .then(data => {
    if (data.token) {
      console.log("✅ Shiprocket Login Success");
      console.log("🔑 Token:", data.token);

      // Now you can use this token for other API calls
    } else {
      console.error("❌ Login failed:", data);
    }
  })
  .catch(error => {
    console.error("🚨 Error:", error);
  });
