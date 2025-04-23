// Login
fetch("https://apiv2.shiprocket.in/v1/external/auth/login", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    email: "info@neostretch.in",
    password: "|~u89U0JYVz@"
  })
})
  .then(res => res.json())
  .then(loginData => {
    const token = loginData.token;
    console.log("Token :", token);

    // Fetch shipments
    fetch("https://apiv2.shiprocket.in/v1/external/shipments", {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log("Shipments:", data);
        // You can now display the data in your UI
      })
      .catch(err => console.error("Shipments error:", err));
  })
  .catch(err => console.error("Login error:", err));
