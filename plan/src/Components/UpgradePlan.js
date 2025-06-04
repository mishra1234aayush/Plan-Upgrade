import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const plans = [
  { name: "Free", price: 0, time: "5 mins" },
  { name: "Bronze", price: 10, time: "7 mins" },
  { name: "Silver", price: 50, time: "10 mins" },
  { name: "Gold", price: 100, time: "Unlimited" },
];

const UpgradePlan = () => {
  const [currentPlan, setCurrentPlan] = useState("Free");
   const navigate = useNavigate();
       const location = useLocation();
const plan = location.state?.plan || "Free";

 

  const handleBuy = async (planName, amount) => {

  
    if (planName === currentPlan) return;
    alert(`🛍️ Simulating payment for ${planName} plan (₹${amount})...`);

    navigate('/pay',{
      state: {
    planName: planName,
    amount: amount
  }
    })

  };

  useEffect(()=>{
     setCurrentPlan(plan)
  },[plan])

  return (
    <div className="upgrade-container">
      <h2 className="upgrade-heading">Upgrade Your Plan</h2>
      <div className="plans">
        {plans.map((plan) => (
          <div key={plan.name} className="plan-card">
            <h3>{plan.name}</h3>
            <p>Watch Time: <strong>{plan.time}</strong></p>
            <p><strong>₹{plan.price}</strong></p>
            <button
              className="buy-btn"
              onClick={() => handleBuy(plan.name, plan.price)}
              disabled={plan.name === currentPlan}
            >
              {plan.name === currentPlan ? "Current Plan" : "Buy Now"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpgradePlan;
