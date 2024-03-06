document.addEventListener("DOMContentLoaded", function () {
  
    const tiers = document.getElementById("tiers");
    const miles = document.getElementById("miles");
    const notification = document.getElementById("notification");
    const tiers_values = document.getElementById("tiers-value");
    const miles_values = document.getElementById("miles-value");
    const notification_values = document.getElementById("notification-value");
  
    // Add click listeners to the first 3 elements
    tiers.addEventListener("click", function () {
      alert("Tiers has been updated to 25000");
      tiers_values.textContent = "25000";
    });
  
    miles.addEventListener("click", function () {
      alert("5000 miles have been redeemed");
      miles_values.textContent = "70,376";
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
  