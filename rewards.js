document.addEventListener("DOMContentLoaded", function () {
  
    const tiers = document.getElementById("tiers");
    const miles = document.getElementById("miles");
    const notification = document.getElementById("notification");
    const tiers_values = document.getElementById("tiers-value");
    const miles_values = document.getElementById("miles-value");
    const notification_values = document.getElementById("notification-value");
  
    // Add click listeners to the first 3 elements
    tiers.addEventListener("click", function () {
      let new_val = parseInt(tiers_values.textContent, 10)
      console.log("NEW VAL IS HERE!" , new_val)

      new_val -= 5000
      if (new_val < 0) new_val = 0
      alert("Tiers has been updated to "  + new_val);
      tiers_values.textContent = new_val;
    });
  
    miles.addEventListener("click", function () {
      let new_val = parseInt(miles_values.textContent, 10)
      new_val -= 5000
      if (new_val < 0) new_val = 0
      alert("Miles has been updated to " + new_val);

      miles_values.textContent = new_val;
    });
  
    notification.addEventListener("click", function () {
      alert("Offer updated");
  
      if (
        notification_values.textContent === "Frequent Flyer To Midwest Region"
      ) {
        notification_values.textContent = "Frequent Flyer To Northeast Region";
      } else {
        notification_values.textContent = "Frequent Flyer To Midwest Region";
      }
    });
  });
  